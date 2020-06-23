/* @flow */
import * as React from 'react';
import classnames from 'classnames';

import './style.css';

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'theme',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export interface Props {
  type: "button" | "reset" | "submit",
  atomTheme: string,
  size: string,
  onClick: any,
  children: any,
  className: string,
  disabled: boolean,
}

const Button = (props: Props) => {
  const { type, onClick, children, atomTheme, size, className, disabled } = props
  const classProps: string = classnames(
    'button',
    [atomTheme],
    [size],
    {
      ['disabled']: disabled,
    },
    className
  )
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  atomTheme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button
