import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });


    // Upload on cloudinary
    const uploadOnCloudinary = async (localFilePath) => {

        try{
            if(!localFilePath) return null
            // Upload the file to Cloudinary
    const response= await cloudinary.uploader.upload(localFilePath, 
                { resource_type: 'auto' 

                });

                // file has been uploaded on cloudinary
                console.log('File uploaded successfully to Cloudinary', response.url);
                return response;

        } catch (error) {
            // Handle any errors that occur during the upload
            // it should be deleted from local storage
            // It should be synchronously deleted from local storage
            fs.unlinkSync(localFilePath); // Delete the local file if 
            // upload fails
        }
    }
    


    export { uploadOnCloudinary };
    