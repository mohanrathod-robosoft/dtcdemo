/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
  image: string,
}

const Nav = (props: Props): React.Element<*> => (
  <div
    style={{  }}
    className={classnames(styles.nav, props.className)}
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
