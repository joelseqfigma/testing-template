import React from 'react'

export function Footer({
  tagline,
  instagramHandle,
}: {
  tagline: string
  instagramHandle: string
}) {
  return (
    <footer className="store-footer">
      <p className="footer-label">{tagline}</p>
      <p className="footer-brand">Design is Dead</p>
      <div className="footer-bottom">
        <span>Design is Dead &copy; {new Date().getFullYear()} All Rights Reserved</span>
        <a
          href={`https://instagram.com/${instagramHandle.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {instagramHandle}
        </a>
      </div>
    </footer>
  )
}
