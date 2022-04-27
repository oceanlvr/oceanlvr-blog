import email from './email.svg'
import github from './github.svg'
import twitter from './twitter.svg'
import zhihu from './zhihu.svg'
import Image from 'next/image'

type Prop = {
  kind: string
  size: number
  href: string
}

const svgImg: { [key: string]: any } = {
  email: email,
  github: github,
  twitter: twitter,
  zhihu: zhihu,
}

const ScoialIcon = ({ kind, size = 8, href }: Prop) => {
  if (!href) return null
  const SocialSvg = svgImg[kind]
  return (
    <a
      className="text-sm"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <Image
        width={size}
        height={size}
        src={SocialSvg}
        alt={kind}
      />
    </a>
  )
}

export default ScoialIcon;