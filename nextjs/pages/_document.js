import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>

      <Head>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/css/foundation.min.css' rel='stylesheet' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
