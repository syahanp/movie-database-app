import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import Poster from '../Poster';

interface Props {
    title: string
    year: string
    type: string
    imdbID: string
    poster: string
}

const Movie = forwardRef<HTMLDivElement, Props>(({imdbID, poster, title, type, year}, ref) => {
    return (
        <div className='flex py-8' ref={ref}>
            <Poster className='max-w-[130px]' src={poster} />
            <div className='flex-1 px-8'>
                <Link to={`/movie?id=${imdbID}`}>
                    <h4 className='font-medium inline-block hover:underline'> 
                        {title} 
                    </h4>
                </Link>
                <h5 className='font-medium text-gray-500'> {year} </h5>
            </div>
        </div>
    )
})

export default Movie
