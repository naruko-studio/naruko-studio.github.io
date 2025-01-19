import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Members",
}

import members from "@/data/members.json"

export default function Members() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl">Our Members</h1>
      <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl">
        Here are members of our team.
      </h2>
      <div className="mt-4 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => {
          return (
            <Link
              href={member.url}
              key={index}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={member.image}
                alt={member.name.spell}
                width={200}
                height={200}
                priority
                className="rounded-full"
              />
              <span className="mt-2 whitespace-pre-wrap text-lg">
                {`${member.name.text}
(${member.name.spell})`}
              </span>
              <div className="space-x-4 text-sm">
                {member.tag.map((tag, index) => {
                  return <span key={index}>#{tag}</span>
                })}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
