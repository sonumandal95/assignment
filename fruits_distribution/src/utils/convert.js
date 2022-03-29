export default function convertCsvToJson(stringcsvToJsonData) {
    try {
        let csvToJsonData = {};
        let currentTable = "";
        for (let index = 0; index < stringcsvToJsonData.length; index++) {
            if (stringcsvToJsonData[index].toString().startsWith("WOND")) {
                currentTable = stringcsvToJsonData[index][0];
                csvToJsonData[currentTable] = [];
            } else if (stringcsvToJsonData[index][0] === "Latitude" && stringcsvToJsonData[index][1] === "Longitude" && stringcsvToJsonData[index][2] === "Number of fruits") {
                continue;
            } else {
                csvToJsonData[currentTable].push({
                    "latitude": stringcsvToJsonData[index][0],
                    "longitude": stringcsvToJsonData[index][1],
                    "numberOfFruits": stringcsvToJsonData[index][2]
                })
            }
        }
        return csvToJsonData;
    } catch {
        return {}
    }

}