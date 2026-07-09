# [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) に基づく正しいコミットメッセージの書き方

[Conventional Commits 1.0.0](https://www.conventionalcommits.org/ja/v1.0.0/) の仕様に準拠した、人間と機械の双方にとって読みやすいコミットメッセージの完全なガイドラインです。

---

## 1. 基本構造

コミットメッセージは以下の構造で記述します。各セクションの間には必ず **1行の空行** を挟んでください。

```text
<型>[任意 スコープ]: <タイトル>

[任意 本文]

[任意 フッター]

````

### 必須ルール

  * **\<型\>**: `feat` や `fix` など、変更の種類を小文字で指定します。
  * **: とスペース**: 型（またはスコープの閉じ括弧）の直後には、必ず **半角のコロンとスペース（: ）** を入れます。
  * **\<タイトル\>**: 変更内容を簡潔に要約した説明文です。

-----

## 2\. 主要な「型（Type）」の一覧

| 型 (Type) | 意味・用途                           | SemVerへの影響               |
| :------- | :------------------------------ | :----------------------- |
| **feat** | 新しい機能の追加                        | **MINOR** (新機能の追加、互換性あり) |
| **fix**  | バグの修正                           | **PATCH** (バグ修正、互換性あり)   |
| docs     | ドキュメントのみの変更（README, 拡張ドキュメントなど） | なし                       |
| style    | コードの意味に影響を与えない変更（フォーマット、空白など）   | なし                       |
| refactor | バグ修正や機能追加を行わない、コードの構造整理・改善      | なし                       |
| perf     | パフォーマンスを向上させるためのコード変更           | なし                       |
| test     | テストの追加や既存テストの修正                 | なし                       |
| build    | ビルドシステムや外部依存関係に関わる変更            | なし                       |
| ci       | CIの自動化設定やスクリプトの変更               | なし                       |
| chore    | その他、ソースコードやテストに影響しない雑多な変更       | なし                       |

-----

## 3\. 応用的な記述方法

### 💡 スコープ（Scope）の追加

変更が影響を与えた具体的なセクションやコンポーネントを明示したい場合、型の後ろに `(スコープ名)` を付与できます。

  * **例:** `feat(lang): add polish language`
  * **例:** `fix(parser): array parsing issue`

### ⚠️ 破壊的変更（BREAKING CHANGE）の表現

APIの互換性がなくなるような重大な変更（SemVerにおける **MAJOR** リリース）を行う場合は、以下のいずれか、または両方を使って明示しなければなりません。

1.  **型・スコープの直後に `!` を付ける**
      * **例:** `feat(api)!: send an email to the customer when a product is shipped`
2.  **フッターに `BREAKING CHANGE:` と記載する**
      * 最下部に空行を挟んで記述します。トークンは `BREAKING CHANGE:` または `BREAKING-CHANGE:` とします。

<!-- end list -->

``` text
fix: 認証ロジックの変更

BREAKING CHANGE: 従来のAPIキーによる認証を廃止し、OAuthのみに対応します。

```

### 🔗 フッター（Footer）での各種参照

Issue番号の紐付けや、共同制作者・レビュアーの記録には、Gitのトレーラー規約（`トークン: 値` または `トークン #値`）を使用します。

``` text
fix: 画面がクラッシュする問題を修正

Refs: #123
Reviewed-by: @username

```

-----

## 4\. 記述例

### パターンA: タイトルのみのシンプルなコミット

``` text
docs: correct spelling of CHANGELOG

```

### パターンB: スコープと破壊的変更の `!` を含むコミット

``` text
feat(api)!: send an email to the customer when a product is shipped

```

### パターンC: 本文と複数のフッターを持つ詳細なコミット

``` text
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Reviewed-by: Z
Refs: #123

