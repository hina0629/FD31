"use client"
// rfc スニペットを使うと楽

import { Menu } from "@/types/menu";
import { Shop } from "@/types/shop";
import { Staff } from "@/types/staff";

// BookingContextインポート
import { BookingProvider, TOTAL_STEPS, canGoNext, useBooking } from "@/contexts/BookingContext";
import BookingNavigation from "@/components/booking/BookingNavigation"
import MenuStep from "./MenuStep";
import DateTimeStep from "@/components/booking/DateTimeStep";
import StaffStep from "@/components/booking/StaffStep";

// Props の型定義
type BookingFormProps = {
  shop: Shop
  menus: Menu[]
  staffs: Staff[]
  candidateDates: string[]
  timeSlots: string[]
}

export default function BookingForm({ shop, menus, staffs, candidateDates, timeSlots }: BookingFormProps) {
  return (
    <BookingProvider shopId={shop.id}>
      <BookingFlow menus={menus} staffs={staffs} candidateDates={candidateDates} timeSlots={timeSlots} />
    </BookingProvider>
  )
}

type BookingFlowProps = Omit<BookingFormProps, "shop">

function BookingFlow({ menus, staffs, candidateDates, timeSlots }: BookingFlowProps) {
  // useContext を使って BookingContext の状態 state と dispatch を取得
  const { state, dispatch } = useBooking()

  return (
    <div>
      {
        state.step === 1 &&
        <MenuStep
          menus={menus}
          selectedMenuId={state.menuId}
          onSelect={(menuId) => dispatch({ type: "select-menu", menuId })}
        />
      }
      {state.step === 2 && (
          <DateTimeStep
            candidateDates={candidateDates}
            timeSlots={timeSlots}
            selectedDate={state.date}
            selectedTime={state.time}
            onSelectDate={(date) => dispatch({ type: "select-date", date })}
            onSelectTime={(time) => dispatch({ type: "select-time", time })}
          />
        )}
      {state.step === 3 && (
          <StaffStep
            staffs={staffs}
            selectedStaffId={state.staffId}
            onSelect={(staffId) => dispatch({ type: "select-staff", staffId })}
          />
        )}
      {state.step === 4 && <div>STEP 4: 確認して予約する</div>}

      <BookingNavigation
        step={state.step}
        canGoNext={canGoNext(state)}
        onPrev={() => dispatch({ type: "prev" })}
        onNext={() => dispatch({ type: "next" })}
      />
    </div>
  )
}