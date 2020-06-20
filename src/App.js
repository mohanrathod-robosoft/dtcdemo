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
import logo_game from '_components/assets/grocery-games.png';
import bghome from '_components/assets/heroImage.jpeg';
import Railwatching from '_components/organisms/railwatching'
import Railstuff from '_components/organisms/railstuff'
import Railnetwork from '_components/organisms/railnetwork'

import './bootstrap'

const App = (): React.Element<*> => (
  <div className={view.default}>
    
    <Feature
      className={view.hero}
      gradient="linear-gradient(to bottom, rgba(41, 45, 56, 0) -33%, rgba(21, 23, 28, 0.4), #1e2328 40%)"
      image={bghome}
    >
      <Nav 
      className={view.nav}
      >
          <Menublock buttonHome="Home" buttonStuff="My Stuff" buttonShow="Show" buttonSearch="Search"></Menublock>
          <Navblock>
            <Menu size="size20" theme="active">For You</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
          </Navblock>

      </Nav>
    
      <Block className={view.block} button="Watch Series">
        <Image src={logo_game} alt="image" width="300" height="120"></Image>
        <Title>An atom is the smallest constituent unit of ordinary matter that has the properties of a
          chemical element.</Title>
        <Subtitle>For lovers of Adventure and Nature</Subtitle>
      </Block>

      
      <div className={view.col1}>
        <Subtitle>Continue Watching</Subtitle>
        <Railwatching className="watchHeight"></Railwatching>
      </div>
      <div className={view.col2}>
        <Subtitle>My Stuff</Subtitle>
        <Railstuff className="stuffHeight"></Railstuff>
      </div>
      <div className={view.col3}>
        <Subtitle>Networks</Subtitle>
        <Railnetwork className="stuffHeight"></Railnetwork>
      </div>
      

    </Feature>

    

    
  </div>
)

export default App
