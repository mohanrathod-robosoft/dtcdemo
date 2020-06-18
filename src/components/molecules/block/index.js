/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Cardtrans from '_components/atoms/cardtrans'
import Button from '_components/atoms/button'
import Title from '_components/atoms/title'

type Props = {
  children?: React.Node,
  className?: string,
  title: string,
  button?: string,
  image?: string,
}

const Block = (props: Props): React.Element<*> => (
  <div className={props.className}>
    <Cardtrans className={props.className}>
      {props.children}
      <Title>{props.title}</Title>
      {props.button !== '' && <Button>{props.button}</Button>}
    </Cardtrans>
  </div>
)

Block.defaultProps = {
  className: '',
  children: '',
  title: '',
  button: '',
}

export default Block
