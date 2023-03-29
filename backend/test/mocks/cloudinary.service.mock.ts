import { UploadApiResponse } from 'cloudinary';
import { CloudinaryService } from '../../src/cloudinary/cloudinary.service';

export class CloudinaryServiceMock extends CloudinaryService {
  async uploadImage(): Promise<UploadApiResponse> {
    return {
      public_id: 'asa212',
      version: 121,
      signature: 'sasa',
      width: 200,
      height: 200,
      format: 'jpg',
      resource_type: 'image',
      created_at: '2021-03-01T12:12:12Z',
      pages: 1,
      bytes: 1000,
      type: 'upload',
      etag: 'asas',
      placeholder: false,
      url: 'https://res.cloudinary.com/asa/image/upload/v1614567890/asa212.jpg',
      secure_url:
        'https://res.cloudinary.com/asa/image/upload/v1614567890/asa212.jpg',
      access_mode: 'public',
      original_filename: 'image',
      tags: [],
      moderation: [],
      context: {},
      metadata: {},
      access_control: null,
    };
  }
}
