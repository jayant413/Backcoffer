const { SuccessResponse, ErrorResponse } = require("../../helper/responseMsg");
const { filterKeys } = require("../../constants/datatypes")
const DataModel = require("../../model/dataModel");


const getSingleData = async (req, res) => {
    const { id } = req.params;
    try {
        const singleData = await DataModel.findById(id);

        SuccessResponse(200, res, "Successfully fetched data", singleData)
    } catch (error) {
        ErrorResponse(400, res, error, "Error while fetching data")
    }
};

const getDataWithFilter = async (req, res) => {
    try {
        const filter = {};

        for (const key of filterKeys) {
            if (req.body[key] !== undefined) {
                filter[key] = req.body[key];
            }
        }
        const dataWithFilter = await DataModel.find({ $or: [filter] });
        SuccessResponse(200, res, "Successfully fetched data", {
            total: dataWithFilter.length,
            dataWithFilter: dataWithFilter
        })
    } catch (error) {
        ErrorResponse(400, res, error, "Error while fetching data")
    }
}

const getDataFilterByYear = async (req, res) => {
    try {
        const { start_year, end_year } = req.body;

        const dataFilterByYear = await DataModel.find({
            start_year: { $gte: start_year },
            end_year: { $lte: end_year }
        });

        SuccessResponse(200, res, "Successfully fetched data", {
            total: dataFilterByYear.length,
            dataFilterByYear: dataFilterByYear
        });
    } catch (error) {
        ErrorResponse(400, res, error, "Error while fetching data");
    }
};




module.exports = { getSingleData, getDataWithFilter, getDataFilterByYear };
