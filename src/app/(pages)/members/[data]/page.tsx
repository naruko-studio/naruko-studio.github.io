import { Bluesky } from "@/components/icons/logos-bluesky"
import { Twitch } from "@/components/icons/logos-twitch"
import { Youtube } from "@/components/icons/logos-youtube-icon"
import { Button } from "@/components/ui/button"
import memberData from "@/utils/member-data"
import Image from "next/image"

const iconMap = {
  Bluesky,
  Twitch,
  Youtube,
}

export async function generateStaticParams() {
  return [{ data: "hoshitsuki-naruko" }]
}

export default async function Member({
  params,
}: {
  params: Promise<{ data: string }>
}) {
  const data = (await params).data
  const member = memberData(data)
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl">{member?.name}</h1>
      <div className="mt-4 lg:flex">
        <Image
          src={`/image/${data}.png`}
          alt={member?.name || ""}
          width={1000}
          height={1000}
          className="h-auto w-auto max-w-[80dvw] p-4 md:max-w-sm"
          priority
        />
        <div>
          <p>Name: {member?.name}</p>
          <p>Birthday: {member?.birthday}</p>
          {typeof member?.age === "number" ||
          typeof member?.age === "string" ? (
            <p>Age: {member?.age}</p>
          ) : null}
          <p>Height: {member?.height}cm</p>
          <p>
            Weight:{" "}
            {`${member?.weight}${typeof member?.weight === "number" ? "kg" : ""}`}
          </p>
          <p className="whitespace-pre-wrap break-words">
            Story: {`\u000A${member?.story}`}
          </p>
          {member?.links.map((link, index) => {
            const IconComponent = iconMap[link.name as keyof typeof iconMap]
            return (
              <Button
                variant="ghost"
                size={null}
                asChild
                className="h-12 w-12"
                key={index}
              >
                <a href={link.url}>
                  <IconComponent />
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}
