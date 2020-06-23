/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import classnames from 'classnames'

import './stories.css'

const Vars = Object.keys(variables).map(v => (
  <p className={classnames('colors', variables[v])}>{v}</p>
))

storiesOf('— Variables', module).add('', () => <div>{Vars}</div>)
