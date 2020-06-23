/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Tile from '../../molecules/tile'

import tile_image from '_components/assets/playlist_tile.png';

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  image: string,
}

const Playlists = (props: Props) => (
  <div
    className={classnames('playlists', props.className)}
  >
    
    <Tile src={tile_image} height="220px"></Tile>
    <Tile src={tile_image} height="220px"></Tile>
    <Tile src={tile_image} height="220px"></Tile>
    <Tile src={tile_image} height="220px"></Tile>
    <Tile src={tile_image} height="220px"></Tile>
    <Tile src={tile_image} height="220px"></Tile>

  </div>
)

Playlists.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Playlists
