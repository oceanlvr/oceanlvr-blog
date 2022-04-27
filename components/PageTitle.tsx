export default function PageTitle({ children }: { children: JSX.Element }) {
  return (
    <h1 className="xl:mx-36 mx-0 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
      {children}
    </h1>
  )
}
