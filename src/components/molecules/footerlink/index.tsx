/* @flow */
import * as React from 'react'
import './style.css'

import Menu from '../../atoms/menu'
import Image from '../../atoms/image'

export interface Props {
  children?: React.ReactNode,
  className?: string,
}

const Footerlink = (props: Props): any => (
  
    <div className={'footerlinks'}>
      <Menu size="size14">link 1</Menu>
      <Menu size="size14">link 1</Menu>
      <Menu size="size14">link 1</Menu>
      <Menu size="size14">link 1</Menu>
      <Menu size="size14">link 1</Menu>
      <Menu size="size14">link 1</Menu>
      <Menu size="size14">link 1</Menu>
    </div>
  
)

Footerlink.defaultProps = {
  className: '',
  children: '',
}

export default Footerlink
