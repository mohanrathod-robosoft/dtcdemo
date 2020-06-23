/* @flow */
import * as React from 'react'
import classnames from 'classnames'
import './style.css'

import Image from '../../atoms/image'
import Typography from '../../atoms/typography'
import Subtitle from '../../atoms/subtitle'

import logo from '_components/assets/discovery-logo.png';
import logo_game from '_components/assets/smal-icon.png';


export interface Props {
  children?: React.ReactNode,
  className?: string,
}

const Footeropyright = (props: Props) => (
  <div className={'copyblock'}>
    <div className={'social'}>
      <Image src={logo_game} alt="image" width="40px" height="40px"></Image>
      <Image src={logo_game} alt="image" width="40px" height="40px"></Image>
      <Image src={logo_game} alt="image" width="40px" height="40px"></Image>
      <Image src={logo_game} alt="image" width="40px" height="40px"></Image>
    </div>
    <div className={'copyright'}>
      <Typography textsize="h3">Copyright © 2020 Discovery Digital Ventures, LLC</Typography>
    </div>
    <div className={'logo'}>
      <Image src={logo} alt="image" width="140" height="30"></Image>
    </div>
  </div>
)

Footeropyright.defaultProps = {
  className: '',
  children: ''
}

export default Footeropyright
