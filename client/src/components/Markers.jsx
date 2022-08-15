import { Marker } from 'react-map-gl'

function Markers({ markers }) {
  return markers.map((marker) => (
    <Marker key={marker.title} longitude={marker.long} latitude={marker.lat} />
  ))
}

export default Markers
