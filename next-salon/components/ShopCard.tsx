import React from 'react'
// Shop型ファイルをインポート（プログラムコードというより型をインポート）
import { Shop } from '@/types/shop'

// 受け渡すデータ（props）の型を定義
type ShopCardProps = {
  shop: Shop
}

// { shop }: ShopCardProps
// { shop } までがデータ
//         : ShopCardProps で型定義

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <div>
      <p>{shop.name}</p>
      <p>{shop.leadMessage}</p>
    </div>
  )
}
