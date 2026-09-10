import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

// api/v3/shops/ とかでバージョン管理することも多い

// 大文字のGETはルール
// GETリクエスト（非同期通信）
// export がないと外部から使えない
// async 非同期通信だから必要
// http://localhost:3000/api/shops でデータが見れる
export async function GET() {
    // TODO: DBからショップデータを取得
    const shops = MOCK_SHOPS

    // JSONでレスポンス
    // return でデータを渡す
    return NextResponse.json({ shops })
}