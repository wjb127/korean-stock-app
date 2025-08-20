import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <style>{`
html {
  font-family: "Apple SD Gothic Neo", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", "Pretendard Variable", Pretendard, system-ui, "Segoe UI", "Noto Sans KR", "Malgun Gothic", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-weight: 500;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
