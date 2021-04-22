import React from 'react'
import { useSelector } from 'react-redux'

const Modal = () => {
    const poster = useSelector((state:any) => state.posterModal);

    console.log(poster);

    return (
        <div>
            
        </div>
    )
}

export default Modal
