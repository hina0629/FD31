import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

// データを受け取る型を定義
type Params = { params: Promise<{ id: string}> }

export async function GET(_request: Request, { params }: Params) {
    // Promise は非同期なので await が使える
    // const { id }　は　Promise<{ id: string}> のデータ型と一致している
    const { id } = await params
    // shop を検索
    // 配列のデータの検索方法
    const shop = MOCK_SHOPS.find((s) => s.id === id)

    // JSONでレスポンス
    // return でデータを渡す
    return NextResponse.json({ shop })
}