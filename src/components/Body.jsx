import './Body.css'

import { useContext, useState } from 'react'
import BombsContext from '../context/Bombs-context'

function Body() {
    const { time, setBombRemain } = useContext(BombsContext)

    const [bomba, setBomba] = useState([])
    const [revealed, setRevealed] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isP, setIsP] = useState(null);
    console.log(isP)

    const handleClick = (i) => {

        if(isGameOver || revealed.includes(i)){
            return
        }

        const newRevealed = [...revealed, i]
        setRevealed(newRevealed)    
    }



    return (
        <div className='container'>            
            <h1>find bomb's</h1>
            {isGameOver && (
                <button></button>
            )}

            <div>
                {isP && (
                    <p>{isP}</p>
                )}
            </div>
        </div>
    )
}

export default Body
