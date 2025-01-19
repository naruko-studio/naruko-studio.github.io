import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

import navigation from "@/data/navigation.json"

export default function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList>
        {navigation.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.children ? (
              <>
                <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                <NavigationMenuContent className="space-y-4 p-4">
                  {item.children.map((child, index) => (
                    <Link key={index} href={child.href} className="block w-max">
                      {child.label}
                    </Link>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
