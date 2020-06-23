/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Footerlink from '../../molecules/footerlink'
import Footercopyright from '../../molecules/footercopyright';

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
}

const Footer = (props: Props) => (
  <div
    style={{  }}
    className={classnames('footerBlock', props.className)}
  >
    <Footerlink></Footerlink>
    <Footercopyright></Footercopyright>
  </div>
)

Footer.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Footer
