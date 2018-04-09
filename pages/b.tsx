import React from 'react';
import Layout from '../src/layout/Layout';
import { withI18next } from '../src/components/hocs/withI18next';

const b =  ({t}) =>
    (<Layout title="Page b">
        {t('welcome')}
        <div>b</div>
    </Layout>)

export default withI18next()(b);
