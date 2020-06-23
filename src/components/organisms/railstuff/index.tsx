/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Tile from '../../molecules/tile'

import tile_image from '_components/assets/series.png';
import tile_logo from '_components/assets/grocery-games.png';

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  image: string,
}

const Railstuff = (props: Props) => (
  <div
    className={classnames('railstuff', props.className)}
  >
    
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" height="300px"></Tile>

  </div>
)

Railstuff.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Railstuff
