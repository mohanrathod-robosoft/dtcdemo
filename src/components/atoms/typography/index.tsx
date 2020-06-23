/* @flow */
import * as React from 'react';
import classnames from 'classnames';

import './style.css';

export const TextSize = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  P: 'p',
  SPAN: 'span',
}

export interface Props {
  textsize: string,
  children: any,
  className: string,
}

const Typography = (props: Props) => {
  const { children, textsize, className } = props
  const classProps: string = classnames(
    [textsize],
    className
  )
  return (
    <p className={classProps}>
      {children}
    </p>
  )
}

Typography.defaultProps = {
  textsize: TextSize.H6,
  className: '',
}

export default Typography
