import TypingEffect from "@/components/global/typing-effect"
import type { Metadata } from "next"
import React from "react"
import typingContext from "@/data/typing-content.json"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        Welcome to なるこStudio
      </h1>
      <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl">
        <TypingEffect steps={typingContext} />
      </h2>
    </>
  )
}
