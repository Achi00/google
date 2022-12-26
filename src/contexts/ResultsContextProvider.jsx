import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [ results, setResults ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ searchTerm, setSearchTerm ] = useState('Ferrari')

    const getResults = async (type) => {
        setIsLoading(true)
        const res = await fetch(`${baseUrl}${type}`,{
        method: 'GET',
        headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key': '532606fd5amshbfdbc1bd5ff8f44p190eb2jsnc5d1642e27ba',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
        })
        const data = await res.json()

        if (type.includes('/news')) {
           setResults(data.entries)
        } 
        else if (type.includes('/images')) {
            setResults(data.image_results)
        } 
        else if (type.includes('/weather')) {
            setResults('')
        } 
        else {
            setResults(data.results)
        }

        setIsLoading(false)
    }
    return(
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)