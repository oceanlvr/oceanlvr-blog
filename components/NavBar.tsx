import Link from '@/components/Link'
import Image from 'next/image'
import Logo from '@/data/header.jpeg'
import siteMetadata from '../data/siteMetadata.json'
import headerNavLinks from '@/data/headerNavLinks'
import ThemeChanger from './ThemeChanger'
import MobileNavBar from './MobileNavBar'

const NavBar = () => {
  return (
    <header className="flex-row flex items-center justify-between py-10">
      <div>
        <Link href="/">
          <div className="flex flex-row items-center justify-between">
            <div className="mr-3">
              <Image src={Logo} width="50" height="50" alt="logo" />
            </div>
            <div className="hidden h-6 text-2xl font-semibold leading-5 sm:block">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium sm:p-4 text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeChanger />
        <MobileNavBar />
      </div>
    </header>
  )
}

export default NavBar
