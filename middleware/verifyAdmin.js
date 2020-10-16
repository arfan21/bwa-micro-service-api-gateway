module.exports = async (req, res, next) => {
    const user = req.user.data;

    if (user.role !== "admin") {
        return res.status(403).json({
            message: "access forbidden",
        });
    }

    return next();
};
