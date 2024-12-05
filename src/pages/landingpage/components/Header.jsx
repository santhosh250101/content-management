import { useState } from 'react';
import MenuItems from './MenuItems';
import './../styles/Header.css'
function Header() {

    const [showProfile,setShowProfile] = useState(false);

    return (
        <div className="header">
            <div className='compnay-info' style={{fontSize:"21px"}}>
             Google | Content Management &nbsp;&nbsp;  CE 24.4
            </div>
            <div className='profile'>
                <div className='user-profile' onClick={(e)=>{
                    setShowProfile(!showProfile);
                    e.stopPropagation();
                    e.preventDefault();
                }}>
                    {showProfile && <MenuItems/>}
                </div>
            </div>
        </div>
    )
}

export default Header;