/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Subtitle from '_components/atoms/subtitle'
import Tile from '_components/molecules/tile'

import tile_image from '_components/assets/heroImage.jpeg';
import tile_logo from '_components/assets/grocery-games.png';

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
  image: string,
}

const Railstuff = (props: Props): React.Element<*> => (
  <div
    className={classnames(styles.railstuff, props.className)}
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