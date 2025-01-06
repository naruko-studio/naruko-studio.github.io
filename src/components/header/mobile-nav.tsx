import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

import meta from "@/data/meta.json"
import navigation from "@/data/navigation.json"

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{meta.title.default}</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-2">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="border-b border-gray-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <SheetFooter />
      </SheetContent>
    </Sheet>
  )
}
