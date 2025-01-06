import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import contact from "@/data/contact.json"

export const metadata: Metadata = {
  title: "Contact with Us",
}

export default function Contact() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl">Contact with Us</h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl">
        You can contact with us from follow links
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {contact.map((item, index) => (
          <Button asChild key={index}>
            <a
              href={item.href}
              target={item.href === "/" ? "_self" : "_blank"}
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          </Button>
        ))}
      </div>
    </>
  )
}
