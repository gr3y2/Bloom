import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadMedia(fileBuffer: Buffer, folder: string, filename: string) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: `bloom/${folder}`, public_id: filename, resource_type: "auto" },
      (error, result) => (error ? reject(error) : resolve(result))
    ).end(fileBuffer);
  });
}

export default cloudinary;
