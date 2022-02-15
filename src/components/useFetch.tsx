
// A custom hook that fetches data from the API and performs a search and filter operation
// Isolate the state and logic of the component in a custom hook for a cleaner design

import { useEffect, useState } from "react"

const useFetch = () => {
    const [rawData, setRawData] = useState<DataProps | null>(null)
    const [search, setSearchValue] = useState<string>('')
    const [ratingFilter, setRatingFilter] = useState<string[]>([1, 2, 3, 4, 5].map(i => i.toString()))


    const inputFilter = () => {
        if (rawData === null) return null
        let datacopy = rawData.items.slice()
        let filteredData = datacopy.filter(
            (item: ItemProps) => {
                return (
                    item.comment.toLowerCase().includes(search.toLowerCase())
                    &&
                    ratingFilter.includes(item.rating.toString())
                )
            }
        )
        return filteredData
    }

    useEffect(
        () => {
            fetch('https://cache.usabilla.com/example/apidemo.json')
                .then(res => res.json())
                .then(data => setRawData(data))
        }, []
    )


    return { data: inputFilter(), setSearchValue, setRatingFilter, ratingFilter }
}
export default useFetch