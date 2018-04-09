import React from 'react'
import Link from '../src/components/Link'
import Layout from '../src/layout/Layout'
import { withI18next } from '../src/components/hocs/withI18next'

export default withI18next()((props) => {
  return (
    <Layout title="Home">
      <ul>
        <li>
          <Link route="home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link route="a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link route="b">
            <a>b</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
})
