export const getUserCoordinates = async (address: string) => {
  const query = new URLSearchParams({
    location: address || '',
    key: import.meta.env.VITE_GEOCODING_API_KEY!.toString(),
  }).toString()

  const mapQuestPath = import.meta.env.DEV
    ? `http://www.mapquestapi.com/geocoding/v1/address?${query}`
    : `https://www.mapquestapi.com/geocoding/v1/address?${query}`

  return await fetch(mapQuestPath, {
    method: 'GET',
  }).then((res) =>
    res.json().then((data) => {
      const [location] = data.results
      const [addressLocation] = location.locations

      return { lat: addressLocation.latLng }
    })
  )
}
