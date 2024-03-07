

const adminMiddleware = async (req, res, next) => {

    try {
       
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(200).json({ msg: "Not an admin" });
       }

    } catch (err) {
        console.log("Middleware error");
        res.status(200).json(( `${err} Error from middleware`  ));
    }
}


module.exports = adminMiddleware;