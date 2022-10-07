export async function getExchangeDetails() {
    const response = await fetch("/getExchanges.json")
    const exchangeDetail = await response.json();
    return exchangeDetail
}