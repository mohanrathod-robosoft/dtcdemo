/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import TextSize, { TextSize } from './'

storiesOf('Typography', module)
  .add('default', () => <TextSize>Learn more</TextSize>)
  .add('default - H1', () => (
    <Typography size={TextSize.H1}>
      H1 Text...
    </Typography>
  ))
  .add('default - H2', () => (
    <Typography size={TextSize.H2}>
      H2 Text...
    </Typography>
  ))
  .add('default - H3', () => (
    <Typography size={TextSize.H3}>
      H3 Text...
    </Typography>
  ))
  .add('default - P', () => (
    <Typography size={TextSize.P}>
      P Text...
    </Typography>
  ))
