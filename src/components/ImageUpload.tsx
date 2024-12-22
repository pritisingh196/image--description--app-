import React, { useState } from 'react';
import { Upload, Image as ImageIcon, RefreshCw } from 'lucide-react';

export function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        simulateImageProcessing();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateImageProcessing = () => {
    setLoading(true);
    setDescription('');
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setDescription('A beautiful photograph showing natural scenery with mountains and trees in the background. The image appears to be taken during golden hour, creating warm and vibrant colors across the landscape.');
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex flex-col items-center justify-center w-full">
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            id="image-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {selectedImage && (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt="Uploaded preview"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center gap-2 mb-2">
              <ImageIcon className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold">Image Description</h3>
            </div>
            
            {loading ? (
              <div className="flex items-center gap-2 text-gray-500">
                <RefreshCw className="w-5 h-5 animate-spin" />
                <p>Analyzing image...</p>
              </div>
            ) : (
              <p className="text-gray-700">{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}