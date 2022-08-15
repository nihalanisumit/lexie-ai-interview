const constants = {
  mapboxToken: process.env.REACT_APP_MAPBOX_TOKEN,
  // San Jose coordinates
  defaulViewPort: {
    latitude: '37.335480',
    longitude: '-121.893028',
    zoom: 10,
  },
}

export default Object.freeze(constants)
