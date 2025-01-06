import type { Metadata } from "next"
import data from "@/data/about-us.json"
export const metadata: Metadata = {
  title: "About Us",
}

export default function About() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl">About Us</h1>
      <p className="whitespace-pre-wrap break-words">{data.text}</p>
    </>
  )
}
