/* @flow */
import * as React from 'react'
import styles from './style.css'

import Menu from '_components/atoms/menu'
import Image from '_components/atoms/image'
import logo_game from '_components/assets/discovery-logo.png';

type Props = {
  children?: React.Node,
  className?: string,
  buttonHome?: string,
  buttonShow?: string,
}

const Menublock = (props: Props): React.Element<*> => (
  
    <div className={styles.external}>
      <Image src={logo_game} alt="image" width="140" height="30"></Image>
      {props.buttonHome !== '' && <div className={styles.internal}><Image src={logo_game} alt="image" width="20" height="20" className={styles.logoimage}></Image><Menu size="size14">{props.buttonHome}</Menu></div>}
      {props.buttonStuff !== '' && <div className={styles.internal}><Image src={logo_game} alt="image" width="20" height="20" className={styles.logoimage}></Image><Menu size="size14">{props.buttonStuff}</Menu></div>}
      {props.buttonShow !== '' && <div className={styles.internal}><Image src={logo_game} alt="image" width="20" height="20" className={styles.logoimage}></Image><Menu size="size14">{props.buttonShow}</Menu></div>}
      {props.buttonSearch !== '' && <div className={styles.internal}><Image src={logo_game} alt="image" width="20" height="20" className={styles.logoimage}></Image><Menu size="size14">{props.buttonSearch}</Menu></div>}
    </div>
  
)

Menublock.defaultProps = {
  className: '',
  children: '',
  buttonHome: '',
  buttonShow: '',
}

export default Menublock
