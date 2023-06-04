const express = require("express");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");


/**create a folder called uploads*/
/**set up storage*/
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, file.fieldname + "-" + "image-" + uniqueSuffix);
  },
});

const fileFilter = (req, file, callback) => {
  const supportedFiles = ["image/jpeg", "image/png"];
  if (supportedFiles.includes(file.mimetype)) {
    return callback(null, true);
  } else {
    //reject file
    return callback("Unsupported file format", false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: fileFilter,
});

router.post("/", upload.single("product"), (req, res, next) => {
  
  const filePath = req.file.path;

  fs.readFile(filePath, { encoding: "base64" }, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error decoding image");
    }

const base64Data = data.toString("base64");
const imageSrc = `data:${req.file.mimetype};base64,${base64Data}`;

    // 'data' contains the base64-encoded image data
    console.log(imageSrc);
    res.send(imageSrc);
  });
});


module.exports = router;