import React from 'react'
import './BillingReceiptScreen.css'
import Header from '../../Header/Header'
import Barcode from 'react-barcode'
import logo from '../../Assets/Images/logo.png'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const BillingReceiptScreen = () => {
    return (
        <div className='container'>
            <Header />
            <div className='mainHeaders'>
                <h3>Billing Details</h3>
                <h3>Receipt Preview</h3>
            </div>

            <div className='receiptSection'>
                <div>
                    <div className='receiptHeader'>
                        <div>
                            <img src={logo} className='receiptLogo' />
                        </div>
                        <div className='addressBilling'>
                            <p>ABC COMPANY</p>
                            <p>XYZ Road,</p>
                            <p>Karachi</p>
                        </div>
                    </div>
                    <div className='detailsBilling'>
                        <p><span>Car Registeration Number:</span> ATV-563</p>
                        <p><span>Arrival:</span> 25-04-22 08:00:00 AM</p>
                        <p><span>Departure:</span> 25-04-22 10:00:00 AM</p>
                        <p><span>Time Duration:</span> 2hrs</p>
                        <p><span>Billing Charges:</span> 1 ruppee/min</p>
                        <h4>Total Charges: 120 Ruppees</h4>
                    </div>
                    <div>
                        <div className='payButt'>
                            <Button variant="contained">Pay now</Button>
                            <Button variant="contained">Pay by Card</Button>
                        </div>
                        <Link to="/startOver" className='link'> <div className='print'>
                            <Button variant="contained">Print Receipt</Button>
                        </div> </Link>
                    </div>

                </div>
                <div className='receipt'>
                    <div className='receiptHeader'>
                        <div>
                            <img src={logo} className='receiptLogo' />
                        </div>
                        <div className='address'>
                            <p>ABC COMPANY</p>
                            <p>XYZ Road,</p>
                            <p>Karachi</p>
                        </div>

                    </div>
                    <hr />
                    <div className='heading'>
                        <h4>CHECK FOR PARKING</h4>
                        <h5>25th April 2022</h5>
                    </div>
                    <hr />
                    <div className='details'>
                        <p><span>Car Registeration Number:</span> ATV-563</p>
                        <p><span>Arrival:</span> 25-04-22 08:00:00 AM</p>
                        <p><span>Departure:</span> 25-04-22 10:00:00 AM</p>
                        <h4>PAID: 120 Ruppees</h4>
                    </div>
                    <hr />
                    <div className='end'>
                        <p>THANK YOU</p>
                        <Barcode value='123456789012' width='2' format="EAN13" height='60' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BillingReceiptScreen