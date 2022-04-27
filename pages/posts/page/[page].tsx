import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllFilesFrontMatter } from '@/lib/resource'
import Link from '@/components/Link'
import ListLayout from '@/layouts/ListLayout'

type Props = {
  postsFrontMatter: Record<string, unknown>[]
  lastPage: string | null
  nextPage: string | null
}

const POST_NUMBER_PER_PAGE = 5
export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllFilesFrontMatter('_post')
  const count = Math.ceil(allPosts.length / POST_NUMBER_PER_PAGE)

  const paths = []
  for (let i = 1; i <= count; i++) {
    paths.push({
      params: { page: i.toString() },
    })
  }
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.page) {
    return {
      notFound: true
    }
  }
  const { page } = params
  const allPosts = await getAllFilesFrontMatter('_post')
  const count = Math.ceil(allPosts.length / POST_NUMBER_PER_PAGE)
  // [start,end)
  const start = (Number(page) - 1) * POST_NUMBER_PER_PAGE
  const end = start + POST_NUMBER_PER_PAGE >= allPosts.length ? allPosts.length : start + POST_NUMBER_PER_PAGE

  if (!(Number(params.page) >= 1) || start > allPosts.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      postsFrontMatter: allPosts.slice(start, end),
      lastPage: Number(page) - 1 >= 1 ? Number(page) - 1 : null,
      nextPage: Number(page) + 1 <= count ? Number(page) + 1 : null,
    }
  }
}

const PostsPagination = ({ postsFrontMatter, nextPage, lastPage }: Props) => {
  return (
    <div className="wrapper">
      <h1 className="border-b pb-2 mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">All Posts</h1>
      <ListLayout postsFrontMatter={postsFrontMatter} />
      <div className="mt-16 flex leading-6 font-medium">
        {lastPage &&
          <Link className="flex mr-8 transition-colors duration-200 blue-link" href={`/posts/page/${lastPage}`} >
            <span aria-hidden="true" className="mr-2">←</span>
            prev
          </Link>
        }
        {
          nextPage &&
          <Link className="flex text-right ml-auto transition-colors duration-200 blue-link" href={`/posts/page/${nextPage}`} >
            next
            <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        }
      </div>
    </div>
  )
}

export default PostsPagination
