import React from 'react'

import { generateRandomLetters } from 'elements'

import styles from './styles.module.scss'

export default function PageNotFound() {
  return (
    <div className={styles.wrapper}>
      {generateRandomLetters(13).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>4</p>
      <p className={styles.selected}>0</p>
      <p className={styles.selected}>4</p>
      {generateRandomLetters(12).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>p</p>
      <p className={styles.selected}>a</p>
      <p className={styles.selected}>g</p>
      <p className={styles.selected}>e</p>
      {generateRandomLetters(4).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>o</p>
      <p className={styles.selected}>r</p>
      {generateRandomLetters(2).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>m</p>
      <p className={styles.selected}>a</p>
      <p className={styles.selected}>y</p>
      <p className={styles.selected}>b</p>
      <p className={styles.selected}>e</p>
      {generateRandomLetters(13).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>p</p>
      <p className={styles.selected}>i</p>
      <p className={styles.selected}>g</p>
      {generateRandomLetters(7).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>n</p>
      <p className={styles.selected}>o</p>
      <p className={styles.selected}>t</p>
      {generateRandomLetters(13).map(letter => (
        <p>{letter}</p>
      ))}
      <p className={styles.selected}>f</p>
      <p className={styles.selected}>o</p>
      <p className={styles.selected}>u</p>
      <p className={styles.selected}>n</p>
      <p className={styles.selected}>d</p>
      {generateRandomLetters(10).map(letter => (
        <p>{letter}</p>
      ))}
    </div>
  )
}
