import React from 'react'
import { Button } from '@material-ui/core';
import './WelcomeScreen.css'
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
    return (
        <div className='container'>
            <Header />
            <div className='content'>
                <div class="box arrow-bottom">
                    6 characters required. Should be in the format xx-xxxx or xxx-xxx.
                </div>
                <div className='inputArea'>
                    <input type='text' className='inputField' placeholder="Enter vehicle's registeration number" required />
                </div>
            </div>
            <div className='buttons'>
                <Link to='/dashboard' className='link'>
                    <div className='footer'>
                        <Button variant="contained" className='btn'>Upload Image</Button>
                    </div>
                </Link>

                <Link to='/confirmvehicle' className='link'>
                    <div className='footer'>
                        <Button variant="contained" color="primary">Next</Button>
                    </div>
                </Link>


            </div>

        </div>
    )
}

export default WelcomeScreen