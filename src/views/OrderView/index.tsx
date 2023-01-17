import React from 'react'
import { useState, useEffect } from 'react'
import './styles.css'
import { useParams } from 'react-router-dom';
import BackBttn from '../../components/BackBttn';
import OrderInfoContainer from '../../components/OrderInfoContainer';
import CancelBttn from '../../components/CancelBttn';
import PickUpBttn from '../../components/PickUpBttn';
import DeliveredBttn from '../../components/DeliveredBttn';

import IncommingOrderView from '../IncommingOrderView';

export const OrderView = () => {
    const obj = useParams();
    const orderID = String(obj.orderId)
    let button;
    let disabledState = false;
    let disabledCancelState = false;

    const [isReadyForPickUp, setIsReadyForPickUp] = useState<boolean>(false);
    const [isDelivered, setIsDelivered] = useState<boolean>(false);
    const [isQRScanned, setIsQRScanned] = useState<boolean>(true);
    const [isIncommingOrder, setIsIncommingOrder] = useState<boolean>(true);

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

    const handleOnNewOrderClick = () => {
        setIsIncommingOrder(false)
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
        <>
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
                <IncommingOrderView state={isIncommingOrder} handleOnClick={handleOnNewOrderClick} />
            </div>

        </>
    )
}

export default OrderView;