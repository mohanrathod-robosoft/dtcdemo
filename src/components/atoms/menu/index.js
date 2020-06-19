/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
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

type Props = {
  type: string,
  theme: string,
  size: string,
  onClick: Function,
  children: React.Node,
  className: string,
  disabled: boolean,
}

const Menu = (props: Props): React.Element<*> => {
  const { type, onClick, children, theme, size, className, disabled } = props
  const classProps: string = classnames(
    styles.menu,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
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
  theme: ButtonTheme.DEFAULT,
  size: TextSize.SIZE12,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Menu