import Time from '@/components/Time'
import SectionContainer from '@/components/SectionContainer'
import PageTitle from '@/components/PageTitle'
import TagList from '@/components/TagList'

interface Props {
  frontMatter: Record<string, unknown>
  children: JSX.Element
  prev: {
    [key: string]: any
    id: string
  }
  next: {
    [key: string]: any
    id: string
  }
}

export default function PostLayout({ children, frontMatter, prev, next }: Props) {
  const { date, title, tag } = frontMatter

  return (
    <SectionContainer>
      <>
        <div className="space-y-2 text-center">
          {/* @ts-ignore */}
          <PageTitle>{title}</PageTitle>
          {/* @ts-ignore */}
          <Time createAt={date} />
          <TagList tags={tag as string[]} />
        </div>
        <div className="pt-10 pb-8 xl:max-w-5xl prose dark:prose-dark">{children}</div>
      </>
    </SectionContainer>
  )

}
