import * as React from 'react'
import * as classnames from 'classnames'
import i18n from '../../server/i18n'
import Android from '../assets/icons/android.svg'

const { i18nInstance } = i18n

export default class Header extends React.Component<undefined, undefined> {
  render() {
    return (
      <div className={classnames('row', 'header')}>
        <Android />
        <Android height="128" width="128" fill="blue" />
        <button onClick={() => {
          i18nInstance.changeLanguage('fr')
        }}>FR
        </button>
        <button onClick={() => {
          i18nInstance.changeLanguage('en')
        }}>EN
        </button>
        <button onClick={() => {
          i18nInstance.changeLanguage('it')
        }}>IT
        </button>
        <button onClick={() => {
          i18nInstance.changeLanguage('de')
        }}>DE
        </button>
        <h1 className="col-12">
          header
        </h1>
      </div>
    )
  }
}

