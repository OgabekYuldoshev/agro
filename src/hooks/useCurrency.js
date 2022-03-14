import currency from "currency.js"
import { useSelector } from "react-redux"

const useCurrency = () => {
    const { symbol: currentSymbol, exchange } = useSelector(state => state.app)

    function priceFormat(value, { separator = ' ', precision = 0, decimal = '.', symbol = '' } = {}) {
        if (Number(value) === Math.floor(value)) {
            precision = 0
        }
        return currency(value, { separator, precision, decimal, symbol }).format()
    }

    function currencyPrice(value) {

        return (exchange ? exchange[currentSymbol] : 1) * value
    }

    return { priceFormat, currencyPrice, symbol: currentSymbol }
}
export default useCurrency