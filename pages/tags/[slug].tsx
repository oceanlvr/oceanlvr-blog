import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { getAllFilesFrontMatter } from '@/lib/resource'
import ListLayout from '@/layouts/ListLayout'

type ContextParams = {
  slug: string
}

type Props = {
  postsFrontMatter: Record<string, unknown>[]
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true
    }
  }
  const allPosts = await getAllFilesFrontMatter('_post')
  const postsFrontMatter = allPosts.filter(post => post.tag?.some((e: string) => e === params.slug))
  return {
    props: {
      postsFrontMatter,
      slug: params.slug,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFilesFrontMatter('_post')
  const tags: string[] = []
  posts.map(post => {
    post.tag?.map((e: string) => {
      tags.push(e)
    })
  })
  const paths = tags.map(tag => ({
    params: { slug: tag },
  }))
  return {
    paths,
    fallback: false,
  };
}

const Tags = ({ postsFrontMatter, slug }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="wrapper">
      <h1 className="border-b pb-2 mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {slug}
      </h1>
      <ListLayout postsFrontMatter={postsFrontMatter} />
    </div>
  )
}
export default Tags
