import './../styles/Landing.css'
import Header from './Header';
import ExtendedHeader from './ExtendedHeader';
import Body from './Body';
function Landing(){

    return(
        <div className='landing-container'>
            <Header/>
            <ExtendedHeader/>
            <Body/>
        </div>
    )
}

export default Landing;