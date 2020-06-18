/* @flow */
import * as React from 'react'

import Cardtrans from '_components/atoms/cardtrans'
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
  <Cardtrans className={props.className}>
    <Image src={logo_game} alt="image" width="140" height="30" padding-top="8px"></Image>
    {props.buttonHome !== '' && <Menu>{props.buttonHome}</Menu>}
    {props.buttonShow !== '' && <Menu>{props.buttonShow}</Menu>}
  </Cardtrans>
)

Menublock.defaultProps = {
  className: '',
  children: '',
  buttonHome: '',
  buttonShow: '',
}

export default Menublock
