import Link from 'next/link'
import React from 'react'

export function Header({ storeName }: { storeName: string }) {
  return (
    <header className="store-header">
      <div className="header-top">
        <nav className="store-nav">
          <Link href="/#about">About</Link>
        </nav>
        <nav className="store-nav">
          <Link href="/#newsletter">Contact</Link>
        </nav>
      </div>
      <Link href="/" className="store-logo">
        {storeName}
      </Link>
      <div className="header-sub">
        <span>A wearable statements company</span>
        <Link href="https://instagram.com/designisdead" target="_blank" rel="noopener noreferrer">
          @designisdead
        </Link>
      </div>
    </header>
  )
}
