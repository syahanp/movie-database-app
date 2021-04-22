import React from 'react'
import { useFetchMovieByID, useQueryParse } from '../hooks'
import Spinner from '../components/Spinner'
import Container from '../components/Container'
import Button from '../components/Button'
import Poster from '../components/Poster'

const SingleMovie:React.FC = () => {
    const query:any = useQueryParse()

    const { data, isLoading }:any = useFetchMovieByID(query.id)

    return (
        <Container className='py-12'>
            <div className='text-center'>
                <h3 className='font-bold'>Movie Details</h3>
            </div>
            {
                isLoading ? <Spinner size={50} /> :
                <div className='py-6'>
                    <div className='py-8 flex flex-wrap'>
                        <Poster className='max-w-[280px] border border-gray-800' src={data.Poster} />
                        <div className='flex-1 px-10'>
                            <h5 className='text-gray-400'>Name</h5>
                            <h4 className='font-medium'>{data.Title}</h4>
                            
                            <br/>
                            
                            <h5 className='text-gray-400'>Year</h5>
                            <h4 className='font-medium'>{data.Year}</h4>
                            
                            <br/>
                            
                            <h5 className='text-gray-400'>Genre</h5>
                            <h4 className='font-medium'>{data.Genre}</h4>

                            <br/>
                            
                            <h5 className='text-gray-400'>Language</h5>
                            <h4 className='font-medium'>{data.Language}</h4>
                        </div>
                    </div>

                    <div className='py-6'>
                        <h5 className='text-gray-300'>{data.Plot}</h5>
                    </div>

                    <br/>

                    <div className='text-center'>
                        <Button to='/'>Back to Movies</Button>
                    </div>
                </div>
            }
        </Container>
    )
}

export default SingleMovie
