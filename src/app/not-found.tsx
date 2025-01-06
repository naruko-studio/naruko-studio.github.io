import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import messages from "@/data/404-messages.json"

export const metadata: Metadata = {
  title: "404",
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

export default function NotFound() {
  return (
    <div className="flex h-full items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          404 - Not Found
        </h1>
        <h2 className="mb-4 mt-4 text-xl md:text-2xl lg:text-3xl">
          {getRandomMessage()}
        </h2>
        <Button asChild>
          <Link href="/">Send me back home</Link>
        </Button>
      </div>
    </div>
  )
}
