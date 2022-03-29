const getMarkersLocation = (locationData) => {
    let markers = [];
    if (locationData.length === 0) return [];
    for (let table in locationData) {
        let markersOfCurrentTable = locationData[table].map((row) => {
            // need to get the whether the location is hills or valley by doing some api call and set true/false in isHills
            // const terrien = await getTerranFromLatLng(row.latitude, row.longitude);
            return {
                lat: parseFloat(row.latitude || 0),
                lng: parseFloat(row.longitude || 0),
                isHills: true,
                numberOfFruits: row.numberOfFruits || "none"
            }
        })
        markers.push(...markersOfCurrentTable)
    }
    return markers;
}

export default getMarkersLocation;