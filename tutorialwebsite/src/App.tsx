import { useState } from 'react'
import './styles/globals.css'
import { Button } from './components/ui/button'
import { cn } from './lib/utils' 

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant={"outline"}>Click Me</Button>
    </div>

  );
};

export default App
