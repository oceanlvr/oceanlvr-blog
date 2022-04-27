import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '@/lib/resource'
import Link from '@/components/Link'
import { useMemo, useState } from 'react'

type Props = {
  postsFrontMatter: Record<string, unknown>[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllFilesFrontMatter('_post')
  return {
    props: {
      postsFrontMatter: allPosts,
    }
  }
}

const Posts = ({ postsFrontMatter }: Props) => {
  const tagSet = new Set<string>()
  postsFrontMatter.map(frontMatter => {
    // @ts-ignore
    frontMatter?.tag.map(tag => {
      tagSet.add(tag)
    })
  })
  const tags = Array.from(tagSet)

  return (
    <div className="mt-24">
      <h1 className="text-center mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Tags</h1>
      <div className="flex flex-row justify-center space-x-4">
        {
          tags.map(tag => (
            <Link className="blue-link text-2xl	font-medium	leading-6	" key={tag} href={`/tags/${tag}`}>
              {tag}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Posts
