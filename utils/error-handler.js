import ErrorResponse from './error-response.js';

async function errorHandlerMiddleware(error, req, res) {
    //logging error

    if (error instanceof ErrorResponse) {
        res.json({ success: false, message: error.message});
    } else {
        res.json({ success: false, message: 'Internal Server Error' });
    }
}

export {
    errorHandlerMiddleware
};