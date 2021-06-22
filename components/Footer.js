import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>

            <div className='text-center text-5xl flex justify-evenly text-green-200 mb-8'>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagramSquare} /></a>
                <a href='https://twitter.com/home' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            </div>
            <div className='text-m font-mono text-center'>
                Copyright 2021 Workout App
            </div>
        </>
    );
}

export default Footer;