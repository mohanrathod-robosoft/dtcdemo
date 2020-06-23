/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import './style.css';

export const ButtonType = {
  BUTTON: 'menuButton',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'menuTheme',
  ROUNDED: 'rounded',
  ACTIVE: 'active',
}

export const TextSize = {
  SIZE12: 'size12',
  SIZE14: 'size14',
  SIZE18: 'size18',
  SIZE20: 'size20',
  SIZE28: 'size28',
}

export interface Props {
  type: "button" | "submit" | "reset",
  menuTheme: string,
  size: string,
  onClick: any,
  children: React.ReactNode,
  className: string,
  disabled: boolean,
}

const Menu = (props: Props) => {
  const { type, onClick, children, menuTheme, size, className, disabled } = props
  const classProps: string = classnames(
    'menuButton',
    [menuTheme],
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

Menu.defaultProps = {
  type: ButtonType.BUTTON,
  menuTheme: ButtonTheme.DEFAULT,
  size: TextSize.SIZE12,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Menu
