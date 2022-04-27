import { useState } from "react";
import headerNavLinks from "@/data/headerNavLinks";
import Link from './Link'

const MobileNavBar = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button type="button" className="w-8 h-8 ml-1 mr-1" onClick={onToggleNav}>
        <svg
          viewBox="0 0 1024 1024"
          width="32"
          height="32" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          {navShow ?
            (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M557.226667 512l226.346666-226.346667a32.213333 32.213333 0 0 0 0-45.226666 32.213333 32.213333 0 0 0-45.226666 0L512 466.773333 285.653333 240.426667a32 32 0 0 0-45.226666 45.226666L466.773333 512 240.426667 738.346667a32 32 0 1 0 45.226666 45.226666L512 557.226667l226.346667 226.346666a32 32 0 1 0 45.226666-45.226666z">
              </path>
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M163.555328 227.555328h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.777664 0 27.492352-22.285312 49.777664-49.77664 49.777664H163.555328c-27.491328 0-49.77664-22.285312-49.77664-49.77664 0-27.492352 22.285312-49.778688 49.77664-49.778688z m0 248.889344h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.77664 0 27.492352-22.285312 49.778688-49.77664 49.778688H163.555328c-27.491328 0-49.77664-22.286336-49.77664-49.777664 0-27.491328 22.285312-49.777664 49.77664-49.777664z m0 248.88832h696.889344c27.491328 0 49.77664 22.286336 49.77664 49.777664 0 27.492352-22.285312 49.778688-49.77664 49.778688H163.555328c-27.491328 0-49.77664-22.286336-49.77664-49.778688 0-27.491328 22.285312-49.77664 49.77664-49.77664z">
              </path>
            )
          }
        </svg>
      </button>
      <div className={`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-90 z-10 transform duration-300 ease-in-out ${navShow ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="fixed h-full w-full" onClick={onToggleNav}>
        </div>
        <div className="fixed">
          {headerNavLinks.map((link) => (
            <div className="px-12 py-4" key={link.title}>
              <Link
                href={link.href}
                className="font-bold text-2xl text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileNavBar;