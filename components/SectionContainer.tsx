type Prop = {
  children: JSX.Element
}

export default function Container({ children }: Prop) {
  return <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
}