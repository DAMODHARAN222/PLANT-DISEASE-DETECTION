
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getHistory, ScanHistoryItem, deleteScanItem, clearHistory } from "@/services/storageService";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Trash2, FileX, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const History = () => {
  const [historyItems, setHistoryItems] = useState<ScanHistoryItem[]>([]);
  
  useEffect(() => {
    loadHistory();
  }, []);
  
  const loadHistory = () => {
    const items = getHistory();
    setHistoryItems(items);
  };
  
  const handleDeleteItem = (id: string) => {
    deleteScanItem(id);
    loadHistory();
  };
  
  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all scan history?")) {
      clearHistory();
      loadHistory();
    }
  };
  
  const formatTime = (timestamp: number) => {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-plant-800">
                Scan History
              </h1>
              {historyItems.length > 0 && (
                <Button 
                  variant="outline" 
                  className="border-plant-300 text-plant-700"
                  onClick={handleClearAll}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear All
                </Button>
              )}
            </div>
            
            {historyItems.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-plant-100">
                <FileX className="h-12 w-12 text-plant-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-plant-700 mb-2">No scan history</h3>
                <p className="text-plant-500 mb-6">
                  You haven't scanned any plants yet.
                </p>
                <Button asChild className="bg-plant-500 hover:bg-plant-600">
                  <Link to="/scan">Scan Your First Plant</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {historyItems.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-lg shadow-sm border border-plant-100 overflow-hidden flex flex-col"
                  >
                    <div className="relative">
                      <img 
                        src={item.imageUrl} 
                        alt={`Scan of ${item.disease.name}`} 
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="font-semibold text-plant-700 text-lg mb-1">
                        {item.disease.name}
                      </h3>
                      <p className="text-sm text-plant-500 mb-2">
                        {item.disease.scientificName}
                      </p>
                      <p className="text-sm text-plant-600 line-clamp-2 mb-4">
                        {item.disease.description}
                      </p>
                      <div className="flex items-center text-xs text-plant-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{formatTime(item.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
