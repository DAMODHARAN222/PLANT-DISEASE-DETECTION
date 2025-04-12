
import { CheckCircle, AlertCircle, Clock, Badge, Microscope, Pill } from "lucide-react";
import { AnalysisResult } from "@/services/plantAnalysisService";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ResultsDisplayProps {
  result: AnalysisResult;
  onNewScan: () => void;
}

const ResultsDisplay = ({ result, onNewScan }: ResultsDisplayProps) => {
  const { toast } = useToast();

  const { disease, confidence } = result;
  
  const isHealthy = disease.id === "healthy";
  
  const shareResults = () => {
    // In a real app, this would implement sharing functionality
    navigator.clipboard.writeText(`I scanned my plant with PlantGuard and found ${disease.name}!`)
      .then(() => {
        toast({
          title: "Link copied!",
          description: "Share link has been copied to clipboard",
        });
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Could not copy to clipboard",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-plant-100 p-6 animate-in fade-in-50 duration-300">
      <div className="flex items-center gap-3 mb-6">
        {isHealthy ? (
          <CheckCircle className="h-8 w-8 text-green-500" />
        ) : (
          <AlertCircle className="h-8 w-8 text-amber-500" />
        )}
        <div>
          <h3 className="text-2xl font-bold text-plant-800">{disease.name}</h3>
          <p className="text-sm text-plant-500">{disease.scientificName}</p>
        </div>
      </div>
      
      <div className="bg-plant-50 rounded-md p-3 mb-6">
        <p className="text-plant-700">{disease.description}</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-plant-700 font-medium mb-2">
            <Badge className="h-5 w-5" />
            <h4>Symptoms</h4>
          </div>
          <ul className="list-disc list-inside text-sm text-plant-600 space-y-1 pl-1">
            {disease.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 text-plant-700 font-medium mb-2">
            <Microscope className="h-5 w-5" />
            <h4>Causes</h4>
          </div>
          <ul className="list-disc list-inside text-sm text-plant-600 space-y-1 pl-1">
            {disease.causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 text-plant-700 font-medium mb-2">
          <Pill className="h-5 w-5" />
          <h4>Treatment Recommendations</h4>
        </div>
        <ul className="list-disc list-inside text-sm text-plant-600 space-y-1 pl-1">
          {disease.treatment.map((treatment, index) => (
            <li key={index}>{treatment}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between text-xs text-plant-400 mb-6">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          <span>Analysis time: {(result.processingTimeMs / 1000).toFixed(1)}s</span>
        </div>
        <div>Confidence: {confidence}%</div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          onClick={onNewScan}
          className="bg-plant-500 hover:bg-plant-600"
        >
          Scan Another Plant
        </Button>
        <Button 
          variant="outline" 
          className="border-plant-300 text-plant-700"
          onClick={shareResults}
        >
          Share Results
        </Button>
      </div>
    </div>
  );
};

export default ResultsDisplay;
