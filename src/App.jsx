import { useEffect, useState } from 'react'
import useCurrencyInfor from './hooks/useCurrencyInfor';
import backgroundimg from './assets/backgroundimg.jpg';
import InputBox from './components/InputBox.jsx';

function App() {

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  //holding currency info into variable
  const currencyInfo = useCurrencyInfor(from);

  //options of currency
  const options = Object.keys(currencyInfo);

  //swap button
  const swap = () => {
      setFrom(to);
      setTo(from);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
      
  }
 
  //converted amount
      const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(6));
  }

  

  return (
    <div className='h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage : `url(${backgroundimg})`}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-md p-5 backdrop-blur-sm bg-white/30 transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 hover:shadow-lg">
            <form onSubmit={(e) => {e.preventDefault(); convert()}}>
              <div className="w-full mb-1">
                <InputBox 
                  label = "From"
                  amount = {amount}
                  currencyOptions = {options}
                  selectedCurrency = {from}
                  onCurrencyChange = {(currency) => setAmount(amount)}
                  onAmountChange = {(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 bg-blue-600 bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-inner border border-white/20 rounded-lg text-white px-2 py-0.5 transition-all duration-300 transform hover:-translate-y-[calc(50%+4px)] hover:brightness-110 hover:shadow-lg"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label = "To  "
                  amount = {convertedAmount}
                  currencyOptions = {options}
                  selectedCurrency = {to}
                  onCurrencyChange = {(currency) => setTo(currency)}
                  amountDisabled
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 bg-gradient-to-b from-white/30 via-white/10 to-transparent shadow-inner border border-white/20 px-4 py-3 rounded-lg font-medium text-white transition-all duration-300 transform hover:-translate-y-1 hover:brightness-110 hover:shadow-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
            </form>
        </div>
      </div> 
    </div>
  )
}

export default App
