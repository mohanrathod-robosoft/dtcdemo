/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

export interface Props {
  children?: any,
  className?: string,
}

const Title = (props: Props) => (
  <h1 className={classnames('title', props.className)}>{props.children}</h1>
)

Title.defaultProps = {
  className: '',
  children: '',
}

export default Title
