import React from 'react'

interface Props {
    className?: string
}

const Container:React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`mx-auto max-w-3xl py-8 lg:px-6 ${className}`}>
            { children }
        </div>
    )
}

export default Container
