// "use cliant"
import SectionHeading from '@/components/SectionHeading'
import React from 'react'

// useState は use cliant を書かないと使えない
export default function BookingPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="Booking"
        title="予約"
        description="メニュー・スタッフ・日時を選んで予約します。"
      />
    </div>
  )
}
