// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const storage = multer.diskStorage({
//   destination: (file, req, cb) => {
//     const uploadDir = path.join(__dirname, "../uploads");
//     if (!fs.existsSync(uploadDir)) {
//       return fs.mkdirSync(uploadDir);
//     }
//     cb(null, uploadDir);
//   },
//   filename: (file, req, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage }).single("image");

// module.exports = upload;
