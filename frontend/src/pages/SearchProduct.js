import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common'
import VerticalCard from '../components/VerticalCard'

const SearchProduct = () => {
    const location = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Extract the search query parameter 'q' from the URL
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('q')

    console.log("Query:", query)

    const fetchProduct = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(SummaryApi.searchProduct.url + `?q=${query}`)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const dataResponse = await response.json()
            setData(dataResponse.data)
        } catch (error) {
            setError(error.message)
            setData([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (query) {
            fetchProduct()
        }
    }, [query])

    return (
        <div className='container mx-auto p-4'>
            {
                loading && (
                    <p className='text-lg text-center'>Loading ...</p>
                )
            }

            {
                error && (
                    <p className='text-lg text-center text-red-500'>{error}</p>
                )
            }

            <p className='text-lg font-semibold my-3'>Search Results: {data.length}</p>

            {
                data.length === 0 && !loading && !error && (
                    <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
                )
            }

            {
                data.length !== 0 && !loading && !error && (
                    <VerticalCard loading={loading} data={data} />
                )
            }
        </div>
    )
}

export default SearchProduct
