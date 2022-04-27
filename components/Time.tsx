import siteMetadata from '../data/siteMetadata.json'

type Prop = {
  createAt: string
}

export const postDateTemplate: {
  localeMatcher?: "best fit" | "lookup";
  weekday?: "long" | "short" | "narrow";
  era?: "long" | "short" | "narrow";
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  timeZoneName?: "long" | "short";
  formatMatcher?: "best fit" | "basic";
  hour12?: boolean;
  timeZone?: string;
} = {
  year: '2-digit',
  month: 'long',
  day: 'numeric',
}
export default function Time({ createAt }: Prop) {
  return (
    <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
      <time dateTime={createAt}>{new Date(createAt).toLocaleDateString(siteMetadata.locale, postDateTemplate)}</time>
    </div>
  )
}
