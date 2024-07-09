const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images");
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        const fileName = Date.now();
        const ext = originalname.split(".").pop();
        cb(null, `${fileName}.${ext}`);
    }
});

const multipleUpload = multer({ storage }).array("files");


exports.upload = (req, res) => {
    multipleUpload(req, res, () => {
        res.end("Processing...");
    })
    
};

exports.index = (req, res) => {
    res.render("index");
};

exports.success = (req, res) => {
    res.render("success");
};

exports.error = (req, res) => {
    res.render("error");
};