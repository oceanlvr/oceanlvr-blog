import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-gray-800 delay-75 transition ease-in-out duration-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
