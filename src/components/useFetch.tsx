
// A custom hook that fetches data from the API
import { useEffect, useState } from "react"

const useFetch = () => {
    const [data, setData] = useState<DataProps | null>(null)
    useEffect(
        () => {
            fetch('https://cache.usabilla.com/example/apidemo.json')
                .then(res => res.json())
                .then(data => setData(data))
        }, []
    )
    return data
}

export default useFetch