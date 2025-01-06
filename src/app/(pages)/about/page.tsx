import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
}

export default function About() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl">About Us</h1>
      <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl">
        We are a small team of developers who love to create things.
      </h2>
    </>
  )
}
