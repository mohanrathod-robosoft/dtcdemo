/* @flow */
import * as React from 'react'

import Subtitle from '_components/atoms/subtitle'
import Block from '_components/molecules/block'
import Feature from '_components/organisms/feature'
import view from '_components/templates/default/styles.css'
import Nav from '_components/organisms/nav'
import Menublock from '_components/molecules/menublock'
import Navblock from '_components/molecules/navblock'
import Menu from '_components/atoms/menu'
import Image from '_components/atoms/image'
import Title from '_components/atoms/title'
import Tile from '_components/molecules/tile'
import logo_game from '_components/assets/grocery-games.png';
import tile_image from '_components/assets/standard-episode2.png';
import tile_logo from '_components/assets/grocery-games.png';
import bghome from '_components/assets/heroImage.jpeg';

import './bootstrap'

const App = (): React.Element<*> => (
  <div className={view.default}>
    
    <Feature
      className={view.hero}
      gradient="linear-gradient(to bottom, rgba(41, 45, 56, 0) -33%, rgba(21, 23, 28, 0.4), #1e2328 60%)"
      image={bghome}
    >
      <Nav 
      className={view.nav}
      >
          <Menublock buttonHome="Home" buttonShow="Show"></Menublock>
          <Navblock>
            <Menu>For You</Menu>}
            <Menu>Category</Menu>}
            <Menu>Category</Menu>}
            <Menu>Category</Menu>}
          </Navblock>

      </Nav>
    
      <Block className={view.block} button="Watch Series">
        <Image src={logo_game} alt="image" width="300" height="120"></Image>
        <Title>An atom is the smallest constituent unit of ordinary matter that has the properties of a
          chemical element.</Title>
        <Subtitle>For lovers of Adventure and Nature</Subtitle>
      </Block>

      
      <div className={view.col1}>
        <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf"></Tile>
        <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf"></Tile>
        <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf"></Tile>
        <Tile src={tile_image} logo={tile_logo} title="sfsfafsffasfa" subtitle="asdfsaf"></Tile>
      </div>
      <div className={view.col2}>
      </div>
      <div className={view.col1}>
      </div>
      <div className={view.col2}>
      </div>

    </Feature>

    

    
  </div>
)

export default App
