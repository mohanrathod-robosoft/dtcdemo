/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css'

export interface Props {
  src: string,
  alt: string,
  width?: string,
  height?: string,
  children?: React.ReactNode,
  className?: string,
}

const Image = (props: Props) => {
  const { src, alt, children, width, height, className } = props
  const classProps: string = classnames(
    'image',
    className
  )

  return (
    <img src={src} className={classProps} alt={alt} width={width} height={height} />
  )
}

Image.defaultProps = {
  src: '',
  alt: '',
  width: '',
  height: '',
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Image
