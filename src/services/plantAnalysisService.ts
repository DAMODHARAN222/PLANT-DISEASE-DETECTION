
import { DiseaseInfo, getRandomDisease } from "../data/diseases";

// This is a simulated analysis service for demo purposes
// In a real application, this would connect to an actual AI model or API

export interface AnalysisResult {
  disease: DiseaseInfo;
  confidence: number;
  processingTimeMs: number;
}

export const analyzeImage = async (imageFile: File): Promise<AnalysisResult> => {
  // Simulate processing delay (1-3 seconds)
  const processingTime = 1000 + Math.random() * 2000;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get a random disease for demo purposes
      const disease = getRandomDisease();
      
      // Generate a random confidence score between 65-98%
      const confidence = Math.round(65 + Math.random() * 33);
      
      resolve({
        disease,
        confidence,
        processingTimeMs: processingTime
      });
    }, processingTime);
  });
};

// Helper function to convert image file to data URL for display
export const fileToDataUrl = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert file to data URL"));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
