/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'

import './css'

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
  minHeight: '200px',
}

storiesOf('default', module).add('default', () => (
  <div className={'default'} style={defaultStyle}>
    <div className={'hero'} style={defaultStyle} />
    <div className={'block'} style={defaultStyle} />
    <div className={'col1'} style={defaultStyle} />
    <div className={'col2'} style={defaultStyle} />
  </div>
))
