import ThemeSwitch from "@/components/global/theme-switch"
import DesktopNav from "@/components/header/desktop-nav"
import Logo from "@/components/header/logo"
import MobileNav from "@/components/header/mobile-nav"
import TableNav from "@/components/header/table-nav"

export default function Header() {
  return (
    <>
      <div className="basis-1/2 text-start md:basis-1/3 lg:basis-1/5">
        <Logo />
      </div>
      <div className="hidden text-center md:block md:basis-1/3 lg:basis-3/5">
        <DesktopNav />
        <TableNav />
      </div>
      <div className="basis-1/2 text-end md:basis-1/3 lg:basis-1/5">
        <ThemeSwitch />
        <MobileNav />
      </div>
    </>
  )
}
