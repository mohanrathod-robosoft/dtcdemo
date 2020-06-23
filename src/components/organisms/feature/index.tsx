/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  image: string,
  gradient: string
}

const Feature = (props: Props) => (
  <div
    style={{ backgroundImage: `${props.gradient}, url(${props.image})` }}
    className={classnames('feature', props.className)}
  >
    {props.children}
  </div>
)

Feature.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Feature
