import { MOCK_SHOPS } from "@/data/MockData";
import { NextResponse } from "next/server";

// データを受け取る型を定義
type Params = { params: Promise<{ id: string}> }

// Router Handler(route.ts) にアクセス（HTTPリクエスト）があったすべての時に、
// Next.js サーバーが自動的に第1引数へリクエストオブジェクト（Request）を渡すため、
// _request がないと Params に入ってしまいエラーになる
// アンダースコアをつけているのは、TSに対してこの引数は位置合わせのために用意しているが、
// 関数内で使用しない変数であることを伝えるための慣習的な記述
export async function GET(_request: Request, { params }: Params) {
    // Promise は非同期なので await が使える
    // const { id }　は　Promise<{ id: string}> のデータ型と一致している
    const { id } = await params
    // shop を検索
    // 配列のデータの検索方法
    const shop = MOCK_SHOPS.find((s) => s.id === id)

    // ショップが存在しない場合は404を返す
    if (!shop) {
        return NextResponse.json({ error: "not found" }, { status: 404 })
    }

    // JSONでレスポンス
    // return でデータを渡す
    return NextResponse.json({ shop })
}