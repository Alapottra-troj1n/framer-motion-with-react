import './App.css';
import {motion} from 'framer-motion'
import { useState } from 'react';

function App() {
  const [rotate, setRotate] = useState(false)
  const rotateAnimation = {
      rotate: rotate ? 500 : 0,
 
     
  }

  return (
    <div className="App">
      < motion.div  transition={{ ease: "easeOut", duration: 1 }} animate={rotateAnimation} onClick={() => setRotate(!rotate)} className="animate-box">

      </motion.div>
    </div>
  );
}

export default App;
