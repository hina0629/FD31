import ShopHero from '@/components/ShopHero'
import ShopMenuList from '@/components/ShopMenuList'
import ShopStaffList from '@/components/ShopStaffList'
import { getMenus, getShop, getStaffs } from '@/lib/services/shops'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ShopDetailPage({ params }: Props) {
  // await がないとすぐに処理されてしまい、データが受け取れなくなってしまう
  const { id } = await params
  // next-salon/lib/services/shops.ts の店舗詳細取得から取得する
  const shop = await getShop(id)

  // 404 の時に NotFound 画面を出す
  // Next.js の機能である
  // トップページにリダイレクトもあり
  if (!shop) {
    notFound()
  }

  // const menus = await getMenus(id)
  // const staffs = await getStaffs(id)
  // 並列でメニューとスタッフを取得するように変更
  const [menus, staffs] = await Promise.all([
    getMenus(id),
    getStaffs(id),
  ])

  return (
    <div>
      {/* オプショナル型 */}
      {/* 店名がなければエラーではなく、undefined を出力 */}
      {/* <h1 className="text-2xl font-bold">{shop?.name}</h1> */}
      <ShopHero shop={shop} />
      <section className="mt-12 grid gap-12 lg:grid-cols-2">
        <ShopMenuList menus={menus} />
        <ShopStaffList staffs={staffs} />
      </section>
    </div>
  )
}
