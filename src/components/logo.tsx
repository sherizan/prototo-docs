export function Logo() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/light.svg"
        alt="Proto"
        width={76}
        height={15}
        className="dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/dark.svg"
        alt="Proto"
        width={76}
        height={15}
        className="hidden dark:block"
      />
    </>
  )
}
