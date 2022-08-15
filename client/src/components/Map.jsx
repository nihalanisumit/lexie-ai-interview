import React, { useEffect, useState } from 'react'
import Map from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import { checkifMovedConsiderably } from '../utils/map'
import Markers from './Markers'
import constants from '../constants'

function MapView() {
  const [viewport, setViewport] = useState({})
  const [markers, setMarkers] = useState([])

  // Fetches the current user location, if fails then defaults to San Jose location
  useEffect(() => {
    function onLocationSuccess(pos) {
      setViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 10,
      })
    }

    function onLocationFailed() {
      setViewport(constants.defaulViewPort)
    }
    navigator.geolocation.getCurrentPosition(
      onLocationSuccess,
      onLocationFailed
    )
  }, [])

  // Everytime viewport changes considerably fetch new random coordinates
  useEffect(() => {
    async function fetchData() {
      if (!viewport) {
        return
      }
      const res = await fetch(
        `http://localhost:3001/api/coordinates?lat=${viewport.latitude}&long=${viewport.longitude}`
      )
      const data = await res.json()
      setMarkers(data)
    }

    fetchData()
  }, [viewport])

  function onMoveEnd(event) {
    // Get the current lat and long after user moved in the map
    const { latitude, longitude } = event.viewState

    // Compare if the user has significantly moved in the map before fetching new random marker coordinates
    const movedConsiderably = checkifMovedConsiderably(
      latitude,
      longitude,
      viewport.latitude,
      viewport.longitude
    )
    // Only if moved considerably then update the current viewport
    if (movedConsiderably) {
      setViewport(event.viewState)
    }
  }

  return (
    <div>
      <h1 style={{ margin: '28px' }}>Lexie.ai</h1>
      {viewport.latitude && viewport.longitude && (
        <div style={{ height: '60vh' }}>
          <Map
            mapboxAccessToken={constants.mapboxToken}
            initialViewState={viewport}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            onMoveEnd={onMoveEnd}
          >
            <Markers markers={markers} />
          </Map>
        </div>
      )}
    </div>
  )
}

export default MapView
