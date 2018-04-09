import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../src/redux/store'
import Layout from '../src/layout/Layout'
import { withI18next } from '../src/components/hocs/withI18next'

const a = (props) => (
  <Layout title="Page a">

    <div>a</div>
  </Layout>
)

export default withRedux(initStore)(withI18next()(a))
