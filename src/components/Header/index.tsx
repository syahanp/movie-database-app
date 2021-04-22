import React from 'react'
import Container from '../Container';
import SearchBox from '../SearchBox';
import style from './style.module.css';

const Header:React.FC = () => {
    return (
        <div className={style.background}>
            <Container className='h-full flex justify-center items-center text-center py-4'>
                <div className='w-full'>
                    <h1 className='font-bold'>Movie Database</h1>
                    <h4>Get to know more about your favorite movie!</h4>

                    <SearchBox />
                </div>
            </Container>
        </div>
    )
}

export default Header
