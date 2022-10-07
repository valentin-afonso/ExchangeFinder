export default async function getExchangesDetails() {
    const response = await fetch("./getExchanges.json")
    const exchangeDetail = await response.json();
    return exchangeDetail
}