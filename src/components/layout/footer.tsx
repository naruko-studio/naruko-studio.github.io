export default function Footer() {
  const start = 2023
  const current = new Date().getFullYear()
  const year = start === current ? start : `${start}-${current}`
  return (
    <>
      <span className="text-center md:hidden">
        Copyright &copy; {year} なるこStudio.
        <br />
        All rights reserved.
      </span>
      <span className="hidden md:block">
        Copyright &copy; {year} なるこStudio. All rights reserved.
      </span>
    </>
  )
}
