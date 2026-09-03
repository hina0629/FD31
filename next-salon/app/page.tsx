// サーバーコンポーネント
import SectionHeading from "@/components/SectionHeading";
// 店舗カードコンポーネント
import ShopCard from "@/components/ShopCard";
// モックデータ
import { MOCK_SHOPS } from "@/data/MockData";

export default function Home() {
  // 今後APIなどから持ってくることを見越して一回 const を挟む
  const shops = MOCK_SHOPS;
  
  return (
    <div>
      <SectionHeading
        eyebrow="Featured Shops"
        title="今日の気分から選べるサロン"
        description="エリアやメニューから、あなたにぴったりのサロンを見つけましょう。"
      />
      {/* grid 今からグリッドするっていう宣言 */}
      {/* grid-cols-3 3列にする */}
      {/* lg:grid-cols-3 ある一定の領域から縦になる */}
      {/* md:grid-cols-2 lgよりも早い段階で2列にする */}
      {/* レイアウトはCSSフレームワークを使うこともある */}
      {/* mt-8 margin-topを広げる */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          // 繰り返すときは key を書く
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}