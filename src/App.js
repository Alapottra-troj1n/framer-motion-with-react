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
    x: move ? 200 : 0,
  }

  return (
    <div className="App">
      < motion.div transition={{ ease: "easeOut", duration: 1 }} animate={rotateAnimation} onClick={() => setRotate(!rotate)} className="animate-box">

      </motion.div>
      < motion.div animate={moveAnimation} onClick={() => setMove(!move)} className="animate-box">

      </motion.div>

      < motion.div whileHover={{scale : 2}} className="animate-box">
            <h2>Hello World</h2>
      </motion.div>

      < motion.div drag whileDrag={{scale : 1.2}} className="animate-box">
            <h2>Drag me</h2>
      </motion.div>

      {/* squence animation */}

      < motion.div animate={{rotate : [0,200,200,0]}}  className="animate-box">
          <h2>Squence</h2>
      </motion.div>

      < motion.div transition={{ ease : 'easeOut' ,repeat : Infinity}} animate={{rotate : [0,200,200,0] , x: [0,100,200,200,100,0]}}  className="animate-box">
            <h2>Infinite Animation</h2>
      </motion.div>

    </div>
  );
}

export default App;
