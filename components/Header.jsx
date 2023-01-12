import Link from "next/link"
export default function Header() {
    return (
        <>
            <header>
                <Link href="/">
                    <a><div className="logo"><img src="/logo.png" alt="logo" /></div></a>
                </Link>
                <div className="header-link">
                    <Link href="/profile"><a className="fc-white">about me</a></Link>
                </div>
            </header>
        </>
    )
}