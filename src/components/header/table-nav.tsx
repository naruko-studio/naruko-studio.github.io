import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import navigation from "@/data/navigation.json"
import Link from "next/link"

export default function TableNav() {
  return (
    <NavigationMenu className="lg:hidden">
      <NavigationMenuList>
        {navigation.map((item, index) => (
          <NavigationMenuItem key={index}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
