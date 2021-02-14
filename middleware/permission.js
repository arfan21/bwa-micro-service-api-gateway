module.exports = (...roles) => {
    return async (req, res, next) => {
        const role = req.user.data.role;
        if (!roles.includes(role)){
            return res.status(403).json({
                status: "error",
                message: "access forbidden",
            });
        }

        return next();
    };
}
