



import './Header.css'

import BombsContext from '../context/Bombs-context'
import { useContext, useEffect } from 'react'

function Header() {
    const { time, setTime, bombRemain} = useContext(BombsContext)

    useEffect(() => {
        const interval = setInterval(() => {

            setTime(p => {
                if (p > 0) return p - 1;
                else {
                    clearInterval(interval)
                    return 0;
                }
            });
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className='main'>

                <div className="header">
                    <div>
                        <h3>bombs remaining</h3>
                        <div>{bombRemain}</div>
                    </div>
                    <div>
                        <h3>Time remaining</h3>
                        <div>{time}</div>
                    </div>
                    <div>
                        <h3>Board Size</h3>
                        <div>10*8</div>
                    </div>

                </div>
                <p>Locate and neutralize all bombs before time runs out.</p>
            </div>
        </>
    )
}

export default Header
