const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./skyproyashwant/src/assets/images/packagesImages"); // Uploads will be stored in the 'uploads/' directory
    // cb(null, "uploads/"); // Uploads will be stored in the 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid overwriting
  },
});

const upload = multer({ storage: storage });
// console.log(upload, "upload>>>>");

const imageUploadMiddleware = (fieldName) => (req, res, next) => {
  upload.single(fieldName)(req, res, (err) => {
    if (err) {
      // Handle multer error
      console.error("Multer error:", err);
      res.status(500).json({ error: "File upload failed" });
    } else {
      // File upload successful, pass to the next middleware or route handler
      console.log("file upload successfull");
      next();
    }
  });
};

module.exports = { imageUploadMiddleware };

router.post("/channel", imageUploadMiddleware("image"), async (req, res) => {
  // console.log("req.file.filename>", req.file.filename);
  try {
    const { name, type, language, channelPrice } = req.body;
    const image = req.file.path;
    // console.log(image, "image>>>");
    const channel = await Channel.create({
      name,
      type,
      language,
      image,
      channelPrice,
    });

    res.status(200).json(channel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});