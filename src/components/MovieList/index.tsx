import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useQueryMovieList } from '../../hooks'
import Container from '../Container'
import Movie from '../Movie'
import Spinner from '../Spinner'

const MovieList:React.FC= () => {
    const queryValue = useSelector((state:any) => state.searchQuery);
    const { data, isLoading, error, hasMore, fetchMore } = useQueryMovieList(queryValue)

    const intersectionElement = useRef<any>(null)
    const spinnerElement = useCallback(node => {
        if (isLoading) return

        intersectionElement.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log("visible");
                fetchMore()
            }
        })

        if (node) {
            intersectionElement.current.observe(node)
        }
        
    }, [isLoading, fetchMore])
    
    if (isLoading) {
        return (
            <Container>
                <Spinner size={40} />
            </Container>
        )
    }

    if (error) {
        return (
            <Container className='text-center'>
                <h4>{error}</h4>
            </Container>
        )
    }

    return (
        <Container>
            <div className='divide-y divide-gray-700 divide-solid'>
                {
                    data.map((x:any, i:number) => {
                        return (
                            <Movie
                                key={i}
                                title={x.Title}
                                year={x.Year}
                                poster={x.Poster}
                                type={x.Type}
                                imdbID={x.imdbID}
                            />
                        )
                    })
                }
                
                {
                    hasMore &&
                    <div className="py-8" ref={spinnerElement}>
                        <Spinner size={40} />
                    </div>
                }
            </div>
        </Container>
    )
}

export default MovieList
