import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

interface Props {
    size?: number
}

const Spinner:React.FC<Props> = ({ size = 35 }) => {

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='py-4'>
                <ClipLoader color="#fff" size={size} />
            </div>
        </div>
    )    
}

export default Spinner;