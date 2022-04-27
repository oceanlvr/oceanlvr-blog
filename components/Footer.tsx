import ScoialIcon from './ScoialIcon'
import ScoialLinks from '@/data/Intro'
import Link from './Link'

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col mt-16 items-center">
        <div className="flex flex-row space-x-4 mb-2">
          {
            ScoialLinks.map(link =>
              <ScoialIcon key={link.kind} size={20} href={link.href} kind={link.kind} />
            )
          }
        </div>
        <div className="mb-4">
          <span>oceanlvr </span>
          <span> • </span>
          <span>© {new Date().getFullYear()}</span>
          <span> • </span>
          <Link href="/">oceanlvr&apos;s blog</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;