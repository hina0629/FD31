import Link from "next/link";

// rfc
export default function Header() {
  return (
    <div>
      <Link href='/'>Next Salon</Link>
      <Link href='/shop'>店舗</Link>
    </div>
  )
}
