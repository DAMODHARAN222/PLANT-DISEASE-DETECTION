
import { useState, useRef } from "react";
import { Upload, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
}

const ImageUpload = ({ onImageSelected }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }
    
    // Create preview URL
    const fileUrl = URL.createObjectURL(file);
    setPreview(fileUrl);
    onImageSelected(file);
  };
  
  const clearImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full mb-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {!preview ? (
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            dragActive
              ? "border-plant-500 bg-plant-50"
              : "border-plant-200 hover:border-plant-400 bg-white"
          )}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={triggerFileInput}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-plant-100 rounded-full">
              <Upload className="h-8 w-8 text-plant-500" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-plant-700">Upload plant image</h3>
              <p className="text-plant-500 text-sm mt-1">
                Drag and drop an image or click to browse
              </p>
            </div>
            <div className="flex gap-2 text-sm text-plant-400">
              <span>JPG</span>
              <span>PNG</span>
              <span>WEBP</span>
              <span>under 10MB</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-lg overflow-hidden border border-plant-200">
          <img
            src={preview}
            alt="Plant preview"
            className="w-full h-64 object-contain bg-white"
          />
          <Button
            size="icon"
            variant="destructive"
            className="absolute top-2 right-2"
            onClick={(e) => {
              e.stopPropagation();
              clearImage();
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <Button 
          type="button"
          variant="outline"
          className="border-plant-300 text-plant-700"
          onClick={triggerFileInput}
        >
          <Camera className="mr-2 h-4 w-4" />
          {preview ? "Choose Another Image" : "Select Image"}
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
