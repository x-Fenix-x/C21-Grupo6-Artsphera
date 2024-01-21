const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, path.join(__dirname, '../../public/images/products'));
    },
    filename: (req, file, cb) => {
        return cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
        if (file.fieldname === 'image') {
            req.fileValidatorError = {
                ...req.fileValidatorError,
                image: 'Valido solo jpg|jpeg|png|webp',
            };
        }

        return cb(null, false, req.fileValidatorError);
    }

    return cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;
