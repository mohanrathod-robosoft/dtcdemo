/* @flow */
import * as React from 'react'

export interface Props {
  children?: React.ReactNode,
  className?: string,
}

const Navblock = (props: Props) => (
  <div className={props.className}>
    {props.children}
  </div>
)

Navblock.defaultProps = {
  className: '',
  children: '',
}

export default Navblock
