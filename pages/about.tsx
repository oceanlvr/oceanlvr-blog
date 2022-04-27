import { GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getStaticPage } from '@/lib/resource';
import { MDXRemote } from 'next-mdx-remote'

type Props = {
  about: {
    mdxSource: MDXRemoteSerializeResult
    frontMatter: Record<string, unknown>
  }
}

type ContextParams = {}

export const getStaticProps: GetStaticProps<MDXRemoteSerializeResult, ContextParams> = async () => {
  const about = await getStaticPage('about')
  return {
    props: {
      about,
      compiledSource: about.mdxSource.compiledSource
    }
  }
}


function About({ about }: Props) {
  const { mdxSource } = about
  return (
    <div className="pt-10 pb-8 xl:max-w-5xl prose dark:prose-dark">
      <MDXRemote {...mdxSource} />
    </div>
  )
}

export default About
