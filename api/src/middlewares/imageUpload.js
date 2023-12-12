const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/newswebsite/admin/api/uploads"); // Adjust the destination directory as needed
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
// const imageUploadMiddleware = (fieldName) => {
//   return (req, res, next) => {
//     upload.single(fieldName)(req, res, (err) => {
//       if (err) {
//         // Handle multer error
//         console.error("Multer error:", err);
//         res.status(500).json({ error: "File upload failed" });
//       } else {
//         // File upload successful, pass to the next middleware or route handler
//         console.log("File upload successful");
//         next();
//       }
//     });
//   };
// };
const imageUploadMiddleware = (fieldName) => (req, res, next) => {
    upload.single(fieldName)(req, res, (err) => {
      if (err) {
        // Handle multer error
        console.error("Multer error:", err);
        res.status(500).json({ error: "File upload failed" });
        console.log()
      } else {
        // File upload successful, pass to the next middleware or route handler
        console.log("file upload successfull");
        next();
      }
    });
  };

module.exports = { imageUploadMiddleware };
