import "server-only"
import type { Shop } from "@/types/shop"
// .env で NEXT_PUBLIC_APP_URL を設定していない場合は、localhost:3000 を使用
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"

// 店舗一覧取得
export async function getShops(): Promise<Shop[]> {
  const res = await fetch(`${BASE_URL}/api/shops`, { cache: "no-store" })
  const data: { shops: Shop[] } = await res.json()
  return data.shops
}

// 店舗詳細取得
export async function getShop(id: string): Promise<Shop | null> {
  const res = await fetch(`${BASE_URL}/api/shops/${id}`, { cache: "no-store" })

  // 404 の時、api から status: 404 と帰ってくるので、
  // status が 404 の時は何も返さない
  // Promise<Shop | null>　を書かないとエラーになるので注意
  // | はどちらかって意味
  if (res.status === 404) return null;

  const data: { shop: Shop } = await res.json()
  return data.shop
}