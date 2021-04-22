import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs'
import api from '../api';
import axios from 'axios';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

export const useQueryParse = () => {
    const location = useLocation()
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });

    return query
}

export const useDetectClickOutsideElement = (ref:any, func:any) => {
    useEffect(() => {
        
        const handleClickOutside = (event:any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                func && func()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
}

export const useQueryMovieList = (query:string) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(false);
    const [error, setError] = useState(null)

    const fetchMore = useCallback(() => {
        setPage(prevPage => prevPage+1)
    }, [])

    useEffect(() => {
        setData([])
        setLoading(true)
    }, [query])

    useEffect(() => {
        setError(null)

        api.get(`?apikey=faf7e5bb&type=movie&s=${query || "fast"}&page=${page}`)
        .then(res => {
            console.log(res.data);

            if (res.data.Error) setError(res.data.Error)
            else  {
                setData((prevData:any): any => {
                    return [...prevData, ...res.data.Search]
                })
                res.data.totalResults > 10 && setHasMore(true)
            }
            setLoading(false)
        })
        .catch(err => {
            console.log(err.response);
            setLoading(false)
        })
    }, [query, page])

    return { data, isLoading, hasMore, error, setPage, fetchMore }
}

export const useSearchBoxHandler = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [dropdownIsOpen, setDropdownOpen] = useState(false)

    const dispatch = useDispatch()
    const queryValue = useSelector((state:any) => state.searchQuery);

    const formik = useFormik({
        initialValues: {
            query: queryValue || ''
        },
        onSubmit: (values:any) => {
            dispatch(setSearchQuery(values.query))
            setDropdownOpen(false)
        }
    });

    useEffect(() => {
        let cancel:any
        setError(null)
        setData([])

        if (formik.values.query.length > 0) {
            api.get(`?apikey=faf7e5bb&type=movie&s=${formik.values.query}`, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(res => {
                if (res.data.Error) setData([])
                else  {
                    setData(res.data.Search)
                }
                setLoading(false)
                setDropdownOpen(true)
            })
            .catch(err => {
                if (axios.isCancel(err)) return
    
                console.log(err.response);
                setLoading(false)
            })
    
            return () => cancel()
        }
        else {
            setDropdownOpen(false)
        }
    }, [formik.values])

    return { data, formik, dropdownIsOpen, setDropdownOpen }
}

export const useFetchMovieByID = (id:string) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`?apikey=faf7e5bb&i=${id}`)
        .then(res => {
            console.log(res.data);
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.response);
        })
    }, [])

    return { data, isLoading }
}