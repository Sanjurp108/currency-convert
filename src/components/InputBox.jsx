import { useId } from "react";

export default function InputBox(
    {
        label,
        amount,
        onAmountChange,
        currencyOptions  = [],
        onCurrencyChange,
        selectedCurrency = "usd",
        amountDisabled = false,
        currencyDisabled = false,
        className = ""
    }
) {
    const amountInputId = useId();  //generates unique ids
    return (
        <div className= {`bg-white rounded-md text-sm flex ${className}`}>
            <div className="px-2">
                <label htmlFor= {amountInputId} 
                className="text-black/40 inline-block mb-2">{label}</label>
                <input 
                id={amountInputId} type="number" 
                className="w-full inline-none bg-transparent py-1.5"
                value={amount} placeholder="amount" 
                disabled = {amountDisabled} 
                onChange= {(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div className="w-1/2 flex flex-wrap justify-end px-2 text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" 
                value={selectedCurrency} 
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
                disabled = {currencyDisabled}>

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))
                }
                </select>
            </div>
        </div>
    );
}