import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getSourceBySlug, getSources, getAllFilesFrontMatter } from '@/lib/resource'
import { formatSlug } from '@/lib/mdx'
import Image from 'next/image'
import CustomLink from '@/components/Link'
import PostLayout from '@/layouts/PostLayout'

type ContextParams = {
  id: string[]
}

interface Post {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: Record<string, unknown>
}

interface Props {
  post: Post
  prev: {
    [key: string]: any;
    id: string;
  }
  next: {
    [key: string]: any;
    id: string;
  }
  id: string
}

const MDXComponents = {
  Image,
  a: CustomLink,
}

export const getStaticProps: GetStaticProps<MDXRemoteSerializeResult, ContextParams> = async ({ params }) => {
  const allPosts = await getAllFilesFrontMatter('_post')
  if (!params) {
    return {
      notFound: true
    }
  }
  const postIndex = allPosts.findIndex((post) => formatSlug(post.id) === params.id.join('/'))

  const prev = postIndex + 1 <= allPosts.length - 1 ? allPosts[postIndex + 1] : null
  const next = postIndex - 1 >= 0 ? allPosts[postIndex - 1] : null
  const post = await getSourceBySlug('_post', allPosts[postIndex].id)
  return {
    props: {
      post,
      prev,
      next,
      compiledSource: post.mdxSource.compiledSource
    }
  }
}

export const getStaticPaths: GetStaticPaths<ContextParams> = async () => {
  const posts = getSources('_post')
  const paths = posts.map(post => ({
    params: { id: formatSlug(post).split('/') },
  }))
  return {
    paths,
    fallback: false,
  };
}

const Posts = ({ post, prev, next }: Props) => {
  const { frontMatter, mdxSource } = post
  return (
    <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </PostLayout>
  )
}

export default Posts

