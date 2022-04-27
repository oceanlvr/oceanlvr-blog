import Link from '@/components/Link'
import TagList from '@/components/TagList'

type Props = {
  postsFrontMatter: Record<string, unknown>[]
}

export default function ListLayout({ postsFrontMatter }: Props) {
  return (
    <div>
      {postsFrontMatter.map(post => (
        <div className="mb-12" key={(post.id as string).toString() as string}>
          <h2 className="text-2xl hover:underline font-medium leading-8 tracking-tight">
            {/* @ts-ignore */}
            <Link key={post.title} className="text-gray-900 dark:text-gray-100" href={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <TagList tags={post.tag as string[]} />
          {/* @ts-ignore */}
          <div key={post.title} className="text-base leading-6 text-gray-500 dark:text-gray-400">{post.date}</div>
        </div>
      ))}
    </div>
  )
}

