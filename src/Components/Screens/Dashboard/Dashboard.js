import { React, useState } from 'react'
import { Button } from '@material-ui/core';
import './Dashboard.css'
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container'>
            <Header />
            <div className='content'>
                <div className="box arrow-bottom">
                    Upload File to proceed
                </div>
                <div className='inputArea'>
                    <form className="container mt-5 pt-5 pb-5" encType="multipart/form-data">
                        <div>
                            <input type='file' accept="image/*" className='uploadinputField' placeholder="Enter vehicle's registeration number" name="file" required />
                        </div>
                        <div className='buttons'>
                            <Link to='/' className='link'>
                                <div className='footer'>
                                    <Button variant="contained" className='btn'>Search Car</Button>
                                </div>
                            </Link>
                            <div className='footer'>
                                <Button variant="contained" color="primary">Upload</Button>
                            </div>  
                        </div>
                    </form>



                </div>
            </div>
        </div >
    )
}

export default Dashboard;