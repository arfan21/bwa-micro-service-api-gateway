const apiAdapter = require("../../apiAdapter");

const { URL_SERVICE_MEDIA } = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
    const id = req.params.id;
    try {
        const media = await api.delete(`/media/${id}`, req.body);
        return res.json(media.data);
    } catch (error) {
        if (error.code === "ECONNREFUSED") {
            return res
                .status(500)
                .json({ status: "error", message: "service unavailable" });
        }
        if(error.code == 'ECONNABORTED'){
            return res.status(408).json({
                status: "error",
                message: "request time out",
            });
        }

        const { status, data } = error.response;
        return res.status(status).json(data);
    }
};
