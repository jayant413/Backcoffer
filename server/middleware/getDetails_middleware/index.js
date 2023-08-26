const { ErrorResponse } = require("../../helper/responseMsg");

const checkDataFilterLength = (req, res, next) => {
    try {
        const bodyLength = Object.keys(req.body).length;
        if (bodyLength === 1) {
            next();
        } else {
            throw new Error("Send only one key in body")
        }
    } catch (error) {
        ErrorResponse(400, res, error, "Error in middleware")
    }
}


module.exports = { checkDataFilterLength };