/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Block from '_components/molecules/block'

import Railstuff from './'

storiesOf('Railstuff', module).add('default', () => (
  <Railstuff image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg">
    <Block title="Atom" button="Learn more">
    </Block>
  </Railstuff>
))
