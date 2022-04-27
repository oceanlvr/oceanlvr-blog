import Link from '@/components/Link'

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <>
      {tags?.map((e, idx) => (
        <>
          <Link href={`/tags/${e}`} key={idx} className="leading-6 mb-2 text-base font-medium blue-link">{e}</Link>
          {idx !== tags?.length - 1 && <span className="pr-2">,</span>}
        </>
      ))}
    </>
  )
}
export default TagList;
