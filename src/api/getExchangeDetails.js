export default async function getExchangesDetails() {
    const response = await fetch("https://api.coinpaprika.com/v1/coins/doge-dogecoin/exchanges")
    const exchangeDetail = await response.json();
    return exchangeDetail
}