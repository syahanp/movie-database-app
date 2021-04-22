import React from 'react'
import { useDispatch } from 'react-redux';
import { setModalPoster } from '../../redux/actions';

interface Props {
    src: string
    className: string
}

const Poster:React.FC<Props> = ({ src, className }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setModalPoster(src))
    }

    return (
        <div className="cursor-pointer" onClick={handleClick}>
            <img className={className} src={src} alt="poster"/>
        </div>
    )
}

export default Poster
