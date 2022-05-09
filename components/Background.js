import { useEffect } from 'react'
import { Gradient } from './Gradient.js'

const Background = () => {
    useEffect(() => {
        const seed = Math.floor(Math.random() * 100);

        const gradient = new Gradient();
  
        gradient.initGradient('#gradient-canvas');
        gradient.connect();
        gradient.seed = seed;
    }, [])

    return (
        <div className="fixed w-screen h-screen bg-neutral-900 pointer-events-none">
            <canvas className='w-full h-full' id="gradient-canvas" dpr={[1,2]}></canvas>
        </div>
    )
}

export default Background;