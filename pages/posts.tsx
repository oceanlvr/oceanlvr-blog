import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '@/lib/resource'
import ListLayout from '@/layouts/ListLayout'

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
  return (
    <div className="wrapper">
      <h1 className="border-b pb-2 mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Posts</h1>
      <ListLayout postsFrontMatter={postsFrontMatter} />
    </div>
  )
}

export default Posts
