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
      <div>
        {shops.map((shop) => (
          // 繰り返すときは key を書く
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}