/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
}

const Subtitle = (props: Props) => (
  <h2 className={classnames('subtitle', props.className)}>{props.children}</h2>
)

Subtitle.defaultProps = {
  className: '',
  children: '',
}

export default Subtitle
