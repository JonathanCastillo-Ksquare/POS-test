import React from 'react'
import BackBttn from '../../components/BackBttn';
import { useParams } from 'react-router-dom';
import './styles.css'
import OrderInfoContainer from '../../components/OrderInfoContainer';
import CancelBttn from '../../components/CancelBttn';
import PickUpBttn from '../../components/PickUpBttn';
import { useState, useEffect } from 'react'
import DeliveredBttn from '../../components/DeliveredBttn';


export const OrderView = () => {
    const obj = useParams();
    const orderID = String(obj.orderId)
    let button;
    let disabledState = false;
    let disabledCancelState = false;

    const [isReadyForPickUp, setIsReadyForPickUp] = useState(false);
    const [isDelivered, setIsDelivered] = useState(false);
    const [isQRScanned, setIsQRScanned] = useState(true);

    const handleOnBack = () => {
        console.log("back!")
    }

    const handleOnCancel = () => {
        console.log("Canceled");
    }

    const handleOnPickUp = () => {
        console.log("Ready for pick up", isReadyForPickUp);
        setIsReadyForPickUp(true)
    }
    const handleOnDelivered = () => {
        console.log("Ready for pick up", isReadyForPickUp);
        console.log("Delivered", isDelivered);
        setIsDelivered(true)
    }


    if (isDelivered === false && isQRScanned === false) {
        disabledCancelState = false;
        disabledState = true;
    }
    else if (isDelivered === false && isQRScanned === true) {
        disabledCancelState = false;
        disabledState = false;
    }
    else if (isDelivered === true && isQRScanned === true) {
        disabledCancelState = true;
        disabledState = true;

    }

    if (isReadyForPickUp === false) {
        button = <PickUpBttn handleOnClick={handleOnPickUp} />
    }
    else {
        button = <DeliveredBttn isDisabled={disabledState} handleOnClick={handleOnDelivered} />
    }

    return (
        <div className='body'>
            <header className='header'>
                <div className='BkbttnContainer'><BackBttn handleOnClick={handleOnBack} /></div>
                <div className='OrderTitleContainer'>
                    <h1>Order #{obj.orderId}</h1>
                </div>
            </header>
            <main className='main'>
                <OrderInfoContainer orderId={orderID} />
            </main>

            <footer className='footer'>
                <div className='ButtonsContainer'>
                    <CancelBttn isDisabled={disabledCancelState} handleOnClick={handleOnCancel} />
                    {button}
                </div>

            </footer>
        </div>
    )
}

export default OrderView;