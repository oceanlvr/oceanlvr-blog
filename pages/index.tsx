import { GetStaticProps } from 'next'
import ListLayout from '@/layouts/ListLayout'
import { getAllFilesFrontMatter } from '@/lib/resource'
import Link from '@/components/Link'

type Props = {
  postsFrontMatter: Record<string, unknown>[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllFilesFrontMatter('_post')
  return {
    props: {
      postsFrontMatter: allPosts.slice(0, 5),
    }
  }
}

const Home = ({ postsFrontMatter }: Props) => {
  return (
    <>
      <div>
        <div className="mb-12 pb-2 border-b flex flex-row justify-between items-end">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Leatest Post</h1>
          <Link href="/posts" className="blue-link">Read all posts</Link>
        </div>
        <ListLayout postsFrontMatter={postsFrontMatter} />
      </div>
    </>
  )
}

export default Home
