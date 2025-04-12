
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import ResultsDisplay from "@/components/ResultsDisplay";
import { Button } from "@/components/ui/button";
import { analyzeImage, fileToDataUrl, AnalysisResult } from "@/services/plantAnalysisService";
import { saveScanToHistory } from "@/services/storageService";
import { Loader2, ScanSearch } from "lucide-react";

const Scan = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  const handleImageSelected = (file: File) => {
    setSelectedFile(file);
    setResult(null);
  };
  
  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    try {
      const analysisResult = await analyzeImage(selectedFile);
      setResult(analysisResult);
      
      // Save to history
      const imageUrl = await fileToDataUrl(selectedFile);
      saveScanToHistory(imageUrl, analysisResult.disease);
    } catch (error) {
      console.error("Error analyzing image:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const resetScan = () => {
    setSelectedFile(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-plant-800 mb-2">
                Plant Disease Scanner
              </h1>
              <p className="text-plant-600">
                Upload a clear image of your plant's affected area for analysis
              </p>
            </div>
            
            {result ? (
              <ResultsDisplay result={result} onNewScan={resetScan} />
            ) : (
              <>
                <ImageUpload onImageSelected={handleImageSelected} />
                
                <div className="flex justify-center">
                  <Button
                    onClick={handleAnalyze}
                    disabled={!selectedFile || isAnalyzing}
                    className="bg-plant-500 hover:bg-plant-600 min-w-[180px]"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <ScanSearch className="mr-2 h-4 w-4" />
                        Analyze Plant
                      </>
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scan;
