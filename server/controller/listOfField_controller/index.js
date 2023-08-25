
const getSectorList = (req, res) => {
    res.send('Sector List');
    console.log('Sector List')
};

const getTopicList = (req, res) => {
    res.send('Topic List');
    console.log('Topic List')
};

module.exports = { getSectorList, getTopicList };
