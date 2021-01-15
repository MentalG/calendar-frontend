import React from 'react'
import { Button } from 'antd';
import './styles.scss'

const Header = () => {
    return (
        <div className='header'>
             <Button type="primary">Log In</Button>
             <Button type="primary">Export JSON</Button>
             <Button type="primary">Add Event</Button>
        </div>
    )
}

export default Header
