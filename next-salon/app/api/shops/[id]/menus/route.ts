import { MOCK_SHOP_MENUS } from "@/data/MockData";
import { NextResponse } from "next/server";

// データを受け取る型を定義
type Params = { params: Promise<{ id: string}> }

// http://localhost:3000/api/shops/1/menus
// GETリクエスト（非同期通信）
export async function GET(_request: Request, { params }: Params) {
    const { id } = await params
    // 指定されたIDのショップのメニューを取得
    const menus = MOCK_SHOP_MENUS[id] ?? []

    // ショップが存在しない場合は404を返す
    if (!menus) {
        return NextResponse.json({ error: "not found" }, { status: 404 })
    }

    // JSONでレスポンス
    // return でデータを渡す
    return NextResponse.json({ menus })
}