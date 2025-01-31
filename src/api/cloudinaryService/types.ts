
export interface UploadImageToCloudinaryArgs {
  imageFile: File;
}

export interface UploadImageToCloudinaryResponse {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string; // ISO 8601 date string
    tags: string[]; 
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string; 
    secure_url: string; 
    asset_folder: string;
    display_name: string;
    original_filename: string;
    original_extension: string; 
}

export type UploadImageToCloudinary = (params: UploadImageToCloudinaryArgs) => Promise<UploadImageToCloudinaryResponse>;
