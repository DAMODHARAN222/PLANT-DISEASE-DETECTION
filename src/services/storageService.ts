
import { DiseaseInfo } from "../data/diseases";

export interface ScanHistoryItem {
  id: string;
  timestamp: number;
  imageUrl: string;
  disease: DiseaseInfo;
}

const STORAGE_KEY = "plant_scan_history";

export const saveScanToHistory = (imageUrl: string, disease: DiseaseInfo): ScanHistoryItem => {
  const newScan: ScanHistoryItem = {
    id: generateId(),
    timestamp: Date.now(),
    imageUrl,
    disease
  };
  
  const history = getHistory();
  history.unshift(newScan);
  
  // Limit history to 20 items
  const limitedHistory = history.slice(0, 20);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedHistory));
  return newScan;
};

export const getHistory = (): ScanHistoryItem[] => {
  const historyJson = localStorage.getItem(STORAGE_KEY);
  if (!historyJson) return [];
  
  try {
    return JSON.parse(historyJson);
  } catch (error) {
    console.error("Failed to parse scan history", error);
    return [];
  }
};

export const clearHistory = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const deleteScanItem = (id: string): void => {
  const history = getHistory();
  const updatedHistory = history.filter(item => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
};

// Helper function to generate a unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
};
