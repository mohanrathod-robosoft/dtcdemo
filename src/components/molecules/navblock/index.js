/* @flow */
import * as React from 'react'

import Cardtrans from '_components/atoms/cardtrans'
import Menu from '_components/atoms/menu'

type Props = {
  children?: React.Node,
  className?: string,
}

const Navblock = (props: Props): React.Element<*> => (
  <Cardtrans className={props.className}>
    {props.children}
  </Cardtrans>
)

Navblock.defaultProps = {
  className: '',
  children: '',
}

export default Navblock
