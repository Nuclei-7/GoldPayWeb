const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from Backend";
    return res.status(status).json({ message, extraDetails });
    
};


module.exports = errorMiddleware;




