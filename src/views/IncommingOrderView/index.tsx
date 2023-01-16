import React from 'react'
import Timer from '../../components/Timer';
import './style.css'

export const IncommingOrderView = () => {
    return (
        <div className='MainContainer'>
            <p className='Order'>
                Accept Order
            </p>
            <div className='TimerContainer'>
                <Timer />

            </div>

        </div>
    )
}

export default IncommingOrderView;