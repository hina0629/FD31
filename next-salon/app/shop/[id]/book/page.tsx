// "use cliant"
// useState は use cliant を書かないと使えない
import BookingForm from '@/components/booking/BookingForm';
import SectionHeading from '@/components/SectionHeading'
import { getShop, getMenus, getStaffs } from '@/lib/services/shops';
import { notFound } from 'next/navigation';
import React from 'react'

type BookingPageProps = {
  params: Promise<{ id: string }>;
}

export default async function BookingPage({params}: BookingPageProps) {
  // URLパラメータから店舗IDを取得
  const { id } = await params;
  // APIから店舗情報を取得
  const shop = await getShop(id)
  if (!shop) notFound()
  // APIからメニュー情報とスタッフ情報を取得
  const [menus, staffs] = await Promise.all([getMenus(id), getStaffs(id)])

  return (
    <div>
      <SectionHeading
        eyebrow="Booking"
        title={`${shop.name} の予約`}
        description="メニュー・スタッフ・日時を選んで予約します。"
      />

      <BookingForm shop={shop} menus={menus} staffs={staffs} />
    </div>
  )
}
