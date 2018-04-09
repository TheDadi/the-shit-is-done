import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
      <Head>
        <link
          rel='stylesheet'
          href='/_next/static/style.css'
        />
        <meta name="theme-color" content="#00008f" />
        <link rel="manifest" href="static/manifest.json" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}