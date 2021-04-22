import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    to: string
}

const Button:React.FC<Props> = ({children, to}) => {
    return (
        <Link to={to}>
            <div className="inline-block py-5 px-10 rounded-md bg-gray-50 mx-2 cursor-pointer transition hover:bg-gray-200">
                <div className="text-black font-medium text-lg">
                    { children }
                </div>
            </div>
        </Link>
    )
}

export default Button
