const filterKeys = [
    "intensity",
    "likelihood",
    "relevance",
    "topic",
    "region",
    "country",
    "end_year",
    "start_year",
    "source",
    "sector",
    "pestle",
    "insight",
    "url",
    "impact",
    "added",
    "published",
    "title"
]

const dataTypes = {
    "intensity": "Number",
    "likelihood": "Number",
    "relevance": "Number",
    "topic": "String",
    "region": "String",
    "country": "String",
    "end_year": "String",
    "start_year": "String",
    "source": "String",
    "sector": "String",
    "pestle": "String",
    "insight": "String",
    "url": "String",
    "impact": "String",
    "added": "Date",
    "published": "Date",
    "title": "String"
}


module.exports = { filterKeys, dataTypes }