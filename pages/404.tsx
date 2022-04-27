import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2">
        <h1 className="text-6xl font-extrabold leading-14 md:text-8xl md:px-6 md:border-r-2 md:leading-9">404</h1>
      </div>
      <div className="max-w-md">
        <p className="text-xl pb-8 font-medium md:text-2xl leading-normal">You just hit a route that doesn&apos;t exist</p>
        <Link href="/">
          <button className="px-4 py-2 transition-colors text-white duration-200 text-sm shadow-lg rounded-md leading-5 bg-blue-500 hover:bg-blue-600">Back to homepage</button>
        </Link>
      </div>
    </div>
  )
}
