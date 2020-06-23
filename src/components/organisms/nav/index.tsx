/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  image: string,
}

const Nav = (props: Props) => (
  <div
    style={{  }}
    className={classnames('orgNav', props.className)}
  >
    {props.children}
  </div>
)

Nav.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Nav
