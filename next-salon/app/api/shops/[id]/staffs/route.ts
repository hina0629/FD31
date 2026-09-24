import { MOCK_SHOP_STAFF } from "@/data/MockData";
import { NextResponse } from "next/server";

// データを受け取る型を定義
type Params = { params: Promise<{ id: string}> }

// http://localhost:3000/api/shops/1/staffs
// GETリクエスト（非同期通信）
export async function GET(_request: Request, { params }: Params) {
    const { id } = await params
    // 指定されたIDのショップのスタッフを取得
    const staffs = MOCK_SHOP_STAFF[id] ?? []

    // ショップが存在しない場合は404を返す
    if (!staffs) {
        return NextResponse.json({ error: "not found" }, { status: 404 })
    }

    // JSONでレスポンス
    // return でデータを渡す
    return NextResponse.json({ staffs })
}