export async function getAddress(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_HGmGYtc5clmlXfeTWrt4VyIFKA4mY&ipAddress=${ip}`)

    return await response.json()
}
