import './App.css';
import { motion } from 'framer-motion'
import { useState } from 'react';

function App() {
  const [rotate, setRotate] = useState(false)
  const [move, setMove] = useState(false)
  const rotateAnimation = {
    rotate: rotate ? 500 : 0,


  }
  const moveAnimation = {
    x : move ? 200 : 0,
  }

  return (
    <div className="App">
      < motion.div transition={{ ease: "easeOut", duration: 1 }} animate={rotateAnimation} onClick={() => setRotate(!rotate)} className="animate-box">

      </motion.div>
      < motion.div  animate={moveAnimation} onClick={() => setMove(!move)} className="animate-box">

      </motion.div>
    </div>
  );
}

export default App;
