/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

type Props = {
  src: string,
  alt: string,
  width: string,
  height: string,
  onClick: Function,
  children: React.Node,
  className: string,
}

const Image = (props: Props): React.Element<*> => {
  const { src, alt, onClick, children, width, height, className } = props
  const classProps: string = classnames(
    styles.image,
    className
  )

  return (
    <img src={src} onClick={onClick} className={classProps} alt={alt} width={width} height={height} />
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
