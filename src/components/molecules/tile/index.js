/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

import Cardtrans from '_components/atoms/cardtrans'
import Title from '_components/atoms/title'
import Subtitle from '_components/atoms/subtitle'
import Image from '_components/atoms/image'

type Props = {
  children?: React.Node,
  className?: string,
  title: string,
  subtitle: string,
  src: string,
  logo: string,
}

const Tile = (props: Props): React.Element<*> => (
  <div className={props.className}>
    <Cardtrans className={props.className}>
      <Image src={props.src} alt="image here" className={classnames(props.className, styles.tileImage)} height={props.height} ></Image>
      <div className={styles.titleLogo}>
        <Title className={styles.tileTitle}>{props.title}</Title>
        {props.logo && <Image src={props.logo} alt="image here" className={styles.tileLogo}></Image>}
      </div>
      <Subtitle className={styles.tileSubtitle}>{props.subtitle}</Subtitle>
      
    </Cardtrans>
  </div>
)

Tile.defaultProps = {
  className: '',
  children: '',
  title: '',
  subtitle: '',
  src: '',
  logo: '',
}

export default Tile
