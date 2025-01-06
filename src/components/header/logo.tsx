import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="なるこStudio"
        width={24}
        height={24}
        className="float-left mx-2 my-1"
      />
      <span className="text-lg md:text-xl lg:text-2xl">なるこStudio</span>
    </Link>
  )
}
