/* @flow */
import * as React from 'react'

import Subtitle from '../src/components/atoms/subtitle'
import Block from '../src/components/molecules/block'
import Feature from '../src/components/organisms/feature'
import Nav from './components/organisms/nav'
import Menublock from '../src/components/molecules/menublock'
import Navblock from '../src/components/molecules/navblock'
import Menu from '../src/components/atoms/menu'
import Image from '../src/components/atoms/image'
import Title from '../src/components/atoms/title'
import logo_game from '../src/components/assets/grocery-games.png';
import bghome from '../src/components/assets/heroImage.jpeg';
import Railwatching from '../src/components/organisms/railwatching'
import Railstuff from '../src/components/organisms/railstuff'
import Railnetwork from '../src/components/organisms/railnetwork'
import Playlists from '../src/components/organisms/playlists'
import Footer from '../src/components/organisms/footer'

import '../src/components/templates/default/styles.css'

import './bootstrap';


const App = () => {
  return(
  <div className={'default'}>
    
    <Feature
      className={'hero'}
      gradient="linear-gradient(to bottom, rgba(41, 45, 56, 0) -33%, rgba(21, 23, 28, 0.4), #1e2328 40%)"
      image={bghome}
    >
      <Nav 
      className={'nav'}
      >
          <Menublock buttonHome="Home" buttonStuff="My Stuff" buttonShow="Show" buttonSearch="Search"></Menublock>
          <Navblock className={'navblock'}>
            <Menu size="size20" menuTheme="active">For You</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
            <Menu size="size20">Category</Menu>
          </Navblock>

      </Nav>
    
      <Block className={'block'} button="Watch Series">
        <Image src={logo_game} alt="image" width="300" height="120"></Image>
        <Title>An atom is the smallest constituent unit of ordinary matter that has the properties of a
          chemical element.</Title>
        <Subtitle>For lovers of Adventure and Nature</Subtitle>
      </Block>

      
      <div className={'col1'}>
        <Subtitle>Continue Watching</Subtitle>
        <Railwatching></Railwatching>
      </div>
      <div className={'col2'}>
        <Subtitle>My Stuff</Subtitle>
        <Railstuff></Railstuff>
      </div>
      <div className={'col3'}>
        <Subtitle>Networks</Subtitle>
        <Railnetwork></Railnetwork>
      </div>
      <div className={'col4'}>
        <Subtitle>Playlists</Subtitle>
        <Playlists></Playlists>
      </div>

      <div className={'footer'}>
        <Footer></Footer>
      </div>
      

    </Feature>

    

    
  </div>
  )
}

export default App
