import * as React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface ILayoutProps {
  title: string;
  children?: any;
}

class Layout extends React.Component<ILayoutProps, {}> {
  constructor(props: ILayoutProps) {
    super(props)
  }

  render() {
    const { title, children } = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Header />
        <main>
          <br />
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout
