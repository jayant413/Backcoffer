const DataModel = require("../../model/dataModel");
const { filterKeys, dataTypes } = require("../../constants/datatypes")
const { ErrorResponse, SuccessResponse } = require("../../helper/responseMsg");

const getList = async (req, res) => {
    try {
        const { type } = req.params;
        const List = await DataModel.distinct(`${type}`, { [type]: { $ne: "" } });
        SuccessResponse(200, res, `Get ${type} list `, List)
    } catch (error) {
        ErrorResponse(400, res, error, `Something went wrong Can't get ${type} list`)
    };
};

const getListTypes = (req, res) => {
    SuccessResponse(200, res, "List Types", { filterKeys, dataTypes })
};



module.exports = {
    getList,
    getListTypes
};
