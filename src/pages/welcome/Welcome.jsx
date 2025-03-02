import React from 'react'
import styles from './welcome.module.css'
import Header from '../../components/header/Header'

const Welcome = () => {
  return (
    <>
        <Header />
        <div className={styles.welcome}></div>
    </>
  )
}

export default Welcome
