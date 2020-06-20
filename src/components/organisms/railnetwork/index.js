/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Tile from '_components/molecules/tile'

import tile_image from '_components/assets/circle-network.png';

import styles from './style.css'

type Props = {
  children?: React.Node,
  className?: string,
  image: string,
}

const Railnetwork = (props: Props): React.Element<*> => (
  <div
    className={classnames(styles.railnetwork, props.className)}
  >
    
    <Tile src={tile_image} height="240px"></Tile>
    <Tile src={tile_image} height="240px"></Tile>
    <Tile src={tile_image} height="240px"></Tile>
    <Tile src={tile_image} height="240px"></Tile>
    <Tile src={tile_image} height="240px"></Tile>
    <Tile src={tile_image} height="240px"></Tile>

  </div>
)

Railnetwork.defaultProps = {
  className: undefined,
  children: undefined,
  image: '',
}

export default Railnetwork
