import { useEffect , useState} from "react"



//here we are going to fetch api for currency information and returnt the data we desire 
function useCurrencyInfor(currency){
    const [data,setData] = useState({}) //default value is object so our app doesn't crash

    //we are using useEffect hook so the external fetching happen in synchronization
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((response) => response.json())
    .then((response) => setData(response[currency]))
    }, [currency])

    return data
}

export default useCurrencyInfor;