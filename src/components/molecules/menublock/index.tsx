/* @flow */
import * as React from 'react'
import './style.css'

import Menu from '../../atoms/menu'
import Image from '../../atoms/image'
import logo from '_components/assets/discovery-logo.png';
import logo_game from '_components/assets/smal-icon.png';

export interface Props {
  children?: React.ReactNode,
  className?: string,
  buttonHome?: string,
  buttonShow?: string,
  buttonStuff?: string,
  buttonSearch?: string,
}

const Menublock = (props: Props): any => (
  
    <div className={'external'}>
      <Image src={logo} alt="image" width="140" height="30"></Image>
      {props.buttonHome !== '' && <div className={'internal'}><Image src={logo_game} alt="image" width="40" height="40" className={'logoimage'}></Image><Menu size="size14">{props.buttonHome}</Menu></div>}
      {props.buttonStuff !== '' && <div className={'internal'}><Image src={logo_game} alt="image" width="40" height="40" className={'logoimage'}></Image><Menu size="size14">{props.buttonStuff}</Menu></div>}
      {props.buttonShow !== '' && <div className={'internal'}><Image src={logo_game} alt="image" width="40" height="40" className={'logoimage'}></Image><Menu size="size14">{props.buttonShow}</Menu></div>}
      {props.buttonSearch !== '' && <div className={'internal'}><Image src={logo_game} alt="image" width="40" height="40" className={'logoimage'}></Image><Menu size="size14">{props.buttonSearch}</Menu></div>}
    </div>
  
)

Menublock.defaultProps = {
  className: '',
  children: '',
  buttonHome: '',
  buttonShow: '',
  buttonStuff: '',
  buttonSearch: '',
}

export default Menublock
