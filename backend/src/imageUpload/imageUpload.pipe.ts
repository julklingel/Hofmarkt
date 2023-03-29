export function imageUploadFileFilter(_, file, cb) {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only JPG and PNG files are allowed'), false);
  }
  cb(null, true);
}
