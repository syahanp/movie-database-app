import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDetectClickOutsideElement, useSearchBoxHandler } from '../../hooks';

const SearchBox:React.FC = () => {
    
    const dropdownRef = useRef(null)

    const { 
        data, 
        dropdownIsOpen, 
        formik,
        setDropdownOpen
    } = useSearchBoxHandler();

    useDetectClickOutsideElement(dropdownRef, () => setDropdownOpen(false))

    return (
        <form onSubmit={formik.handleSubmit} className="block py-6 relative">
            <input 
                id="query"
                name="query"
                type="text"
                className="w-full py-4 px-6 rounded-md text-xl font-medium text-gray-700"
                placeholder="Fast Furious 9"
                onChange={formik.handleChange}
                value={formik.values.query}
            />

            {
                dropdownIsOpen &&
                <div ref={dropdownRef} className="bg-white w-full rounded-sm text-left absolute top-[90%] left-0">
                    {
                        data.map((x:any) => {
                            return (
                                <Link to={`/movie?id=${x.imdbID}`}>
                                    <div className="truncate py-2 px-6 text-lg text-gray-700 cursor-pointer hover:bg-gray-100">
                                        {x.Title}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </form>
    )
}

export default SearchBox
