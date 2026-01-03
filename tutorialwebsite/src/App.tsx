import { useState } from 'react'
import './styles/globals.css'
import './styles/headerstyle.css'
import './styles/Footerstyle.css'
import Header from './components/ui/header'
import Footer from './components/ui/Footer'
import Body from './components/ui/body'
import { cn } from './lib/utils' 

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer/>
    </div>

  );
};

export default App
