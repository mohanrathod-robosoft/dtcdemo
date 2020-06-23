/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Tile from '../../molecules/tile'

import tile_image from '_components/assets/airplane_episode.png';
import tile_logo from '_components/assets/grocery-games.png';

import './style.css'

export interface Props {
  children?: React.ReactNode,
  className?: string,
  image: string,
}

const Railwatching = (props: Props) => (
  <div
    className={classnames('railwatching', props.className)}
  >
    
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf" height="200px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf" height="200px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf" height="200px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf" height="200px"></Tile>
    <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf" height="200px"></Tile>
  </div>
)

Railwatching.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Railwatching
