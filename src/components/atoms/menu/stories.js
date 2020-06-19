/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Menu, { MenuTheme, TextSize } from './'

storiesOf('Menu', module)
  .add('default', () => <Menu onClick={action('clicked')}>Learn more</Menu>)
  .add('default - size12', () => (
    <Menu size={TextSize.SIZE12} onClick={action('clicked')}>
      Learn more
    </Menu>
  ))
  .add('default - size18', () => (
    <Menu size={TextSize.SIZE18} onClick={action('clicked')}>
      Learn more
    </Menu>
  ))