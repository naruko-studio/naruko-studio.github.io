import { ThemeProvider } from "@/components/global/theme-provider"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import meta from "@/data/meta.json"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="flex h-dvh flex-col p-4">
            <header className="flex h-16 items-center">
              <Header />
            </header>
            <main className="mx-auto flex-1">{children}</main>
            <footer className="flex h-16 items-center justify-center">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
