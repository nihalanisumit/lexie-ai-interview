function checkifMovedConsiderably(newLat, newLong, lat, long) {
  const latDiff = Math.abs(newLat - lat)
  const longDiff = Math.abs(newLong - long)

  return latDiff > 0.1 || longDiff > 0.1
}

export { checkifMovedConsiderably }
