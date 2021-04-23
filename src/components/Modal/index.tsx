import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDetectClickOutsideElement } from '../../hooks'
import { setModalPoster } from '../../redux/actions'

const Modal:React.FC = () => {
    const [isOpen, setOpen] = useState(false)
    const modalElement = useRef(null)

    const dispatch = useDispatch()
    const poster = useSelector((state:any) => state.posterModal);

    const handleClose = () => {
        setOpen(false)
        dispatch(setModalPoster(""))
    }

    useDetectClickOutsideElement(modalElement, handleClose)

    useEffect(() => {
        if (poster) {
            setOpen(true)
        }
    }, [poster])

    if (isOpen) {
        return (
            <div className="bg-black bg-opacity-80 fixed top-0 left-0 flex justify-center items-center w-screen h-screen">
                <div className='z-50' ref={modalElement}>
                    <img src={poster} alt="poster"/>
                </div>
            </div>
        )
    }

    return null
}

export default Modal
