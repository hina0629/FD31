// "use cliant"
// useState は use cliant を書かないと使えない
import SectionHeading from '@/components/SectionHeading'
import { getShop } from '@/lib/services/shops';
import { notFound } from 'next/navigation';
import React from 'react'

type BookingPageProps = {
  params: Promise<{ id: string }>;
}

export default async function BookingPage({params}: BookingPageProps) {
  const { id } = await params;
  const shop = await getShop(id)

  if (!shop) notFound()

  return (
    <div>
      <SectionHeading
        eyebrow="Booking"
        title={`${shop.name} の予約`}
        description="メニュー・スタッフ・日時を選んで予約します。"
      />
    </div>
  )
}
