/* @flow */
import * as React from 'react'

type Props = {
  children?: React.Node,
  className?: string,
}

const Navblock = (props: Props): React.Element<*> => (
  <div className={props.className}>
    {props.children}
  </div>
)

Navblock.defaultProps = {
  className: '',
  children: '',
}

export default Navblock
