import * as React from 'react'
import * as classnames from 'classnames'

import styles from './footer.scss'

export default function Footer() {
  return (
    <footer className={classnames('row', 'footer')}>
      <div className={styles.test}>
        footer
      </div>
    </footer>
  )
}
