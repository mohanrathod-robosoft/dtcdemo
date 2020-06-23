/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Button from '../../atoms/button'
import Title from '../../atoms/title'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  title: string,
  button?: string,
  onClick?: any
}

const Block = (props: Props) => (
  <div className={props.className}>
    <div className={props.className}>
      {props.children}
      <Title>{props.title}</Title>
      {props.button !== "" && <Button>{props.button}</Button>}
    </div>
  </div>
)

Block.defaultProps = {
  className: '',
  children: '',
  title: '',
  button: '',
  onClick: ''
}

export default Block
