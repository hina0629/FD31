// "use cliant"
// useState は use cliant を書かないと使えない
import SectionHeading from '@/components/SectionHeading'
import React from 'react'

type BookingPageProps = {
  params: Promise<{ id: string }>;
}

export default async function BookingPage({params}: BookingPageProps) {
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
