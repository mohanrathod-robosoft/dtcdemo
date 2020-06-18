/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
}

const Cardtrans = (props: Props): React.Element<*> => (
  <div className={classnames(styles.cardtrans, props.className)}>{props.children}</div>
)

Cardtrans.defaultProps = {
  className: '',
  children: '',
}

export default Cardtrans
