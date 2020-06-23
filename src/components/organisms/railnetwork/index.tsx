/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Tile from '../../molecules/tile'

import tile_image from '_components/assets/circle-network.png';

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  image: string,
}

const Railnetwork = (props: Props) => (
  <div
    className={classnames('railnetwork', props.className)}
  >
    
    <Tile src={tile_image} height="200px"></Tile>
    <Tile src={tile_image} height="200px"></Tile>
    <Tile src={tile_image} height="200px"></Tile>
    <Tile src={tile_image} height="200px"></Tile>
    <Tile src={tile_image} height="200px"></Tile>
    <Tile src={tile_image} height="200px"></Tile>

  </div>
)

Railnetwork.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Railnetwork
