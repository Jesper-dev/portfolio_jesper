import React from 'react'
import Link from "./Link"

export default function Header() {
    return (
        <div className="headerLink">
            <Link href="/" className="linkItem">
                Home
            </Link>
            <Link href="/wikipediaSearch" className="linkItem">
                WikiSearch
            </Link>

        </div>
    )
}