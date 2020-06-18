/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Image from './'

storiesOf('Image', module)
  .add('default', () => <Image onClick={action('clicked')} />)
