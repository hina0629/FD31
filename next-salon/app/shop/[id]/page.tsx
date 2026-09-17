import { getShop } from '@/lib/services/shops'
import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ShopDetailPage({ params }: Props) {
  // await がないとすぐに処理されてしまい、データが受け取れなくなってしまう
  const { id } = await params
  // next-salon/lib/services/shops.ts の店舗詳細取得から取得する
  const shop = await getShop(id)

  return (
  <div>
    <h1>Shop Details</h1>
    <p>{shop?.name}</p>
  </div>
  )
}
