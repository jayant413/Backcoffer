


const SuccessResponse = (status, res, message = 'Successfully completed operation', data = null) => {
    const response = {
        message: message,
        success: true
    };

    if (data !== null) {
        response.info = data;
    }

    return res.status(status).json(response);
};


const ErrorResponse = (status, res, error, message = 'An error occurred', data = null) => {
    const response = {
        message: message,
        error: error.message || error,
        success: false
    };

    if (data !== null) {
        response.info = data;
    }

    return res.status(status).json(response);
};


module.exports = { ErrorResponse, SuccessResponse };