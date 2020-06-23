/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

import Title from '../../atoms/title'
import Subtitle from '../../atoms/subtitle'
import Image from '../../atoms/image'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  title: string,
  subtitle: string,
  src: string,
  logo: string,
  height: string,
}

const Tile = (props: Props) => (
  <div className={props.className}>
    <div><Image src={props.src} alt="image here" className={classnames(props.className, 'tileImage')} height={props.height} ></Image></div>
      <div className={'titleLogo'}>
        <Title className={'tileTitle'}>{props.title}</Title>
        {props.logo && <Image src={props.logo} alt="image here" className={'tileLogo'}></Image>}
      </div>
      <div><Subtitle className={'tileSubtitle'}>{props.subtitle}</Subtitle></div>
      
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
