"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Error() {
  return (
    <div className="flex h-full items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          500 - Internal Server Error
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          You called for help. But nobody came...
        </h2>
        <Button asChild>
          <Link href="/">Accept this reality</Link>
        </Button>
      </div>
    </div>
  )
}
