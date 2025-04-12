export interface DiseaseInfo {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
}

export const plantDiseases: DiseaseInfo[] = [
  {
    id: "late-blight",
    name: "Late Blight",
    scientificName: "Phytophthora infestans",
    description: "Late blight is a destructive disease affecting tomatoes and potatoes, causing significant crop losses. It spreads quickly in cool, wet conditions.",
    symptoms: [
      "Water-soaked spots on leaves that turn brown or black",
      "White fungal growth on the underside of leaves",
      "Dark lesions on stems",
      "Brown, firm spots on tomato fruits"
    ],
    causes: [
      "Infection by the oomycete Phytophthora infestans",
      "Humid or rainy weather conditions",
      "Temperatures between 60-70°F (15-21°C)",
      "Contaminated seeds or transplants"
    ],
    treatment: [
      "Remove and destroy infected plant parts",
      "Apply copper-based fungicides preventatively",
      "Increase spacing between plants for better air circulation",
      "Water at the base of plants rather than overhead"
    ],
    prevention: [
      "Use resistant varieties",
      "Practice crop rotation",
      "Improve drainage in growing areas",
      "Keep foliage dry by using drip irrigation"
    ]
  },
  {
    id: "powdery-mildew",
    name: "Powdery Mildew",
    scientificName: "Various fungi (Erysiphales)",
    description: "Powdery mildew is a common fungal disease affecting a wide range of plants. It appears as a white powdery coating on leaf surfaces.",
    symptoms: [
      "White or grayish powder-like spots on leaves, stems, and sometimes flowers",
      "Yellowing or browning of affected leaves",
      "Distorted or stunted new growth",
      "Premature leaf drop"
    ],
    causes: [
      "Infection by various powdery mildew fungi",
      "Warm days and cool nights",
      "High humidity but dry leaf surfaces",
      "Poor air circulation"
    ],
    treatment: [
      "Apply fungicides containing sulfur or potassium bicarbonate",
      "Remove and destroy heavily infected plant parts",
      "Increase air circulation around plants",
      "Use neem oil or other organic treatments"
    ],
    prevention: [
      "Choose resistant varieties",
      "Space plants properly for good air circulation",
      "Avoid overhead watering",
      "Clean up fallen leaves and plant debris"
    ]
  },
  {
    id: "leaf-spot",
    name: "Leaf Spot",
    scientificName: "Various fungi and bacteria",
    description: "Leaf spot is a common disease caused by various fungi and bacteria. It causes spots on leaves that can affect plant health and aesthetics.",
    symptoms: [
      "Round or irregular spots on leaves, often with dark margins",
      "Spots may turn yellow, brown, black, or gray",
      "Severely affected leaves may turn yellow and drop",
      "Centers of spots may fall out, creating a 'shot hole' appearance"
    ],
    causes: [
      "Various fungi (Cercospora, Septoria, Alternaria)",
      "Some bacteria (Pseudomonas, Xanthomonas)",
      "Prolonged wet conditions",
      "Splashing water that spreads spores"
    ],
    treatment: [
      "Remove and destroy infected leaves",
      "Apply appropriate fungicide or bactericide",
      "Improve air circulation",
      "Water at the base of plants to keep foliage dry"
    ],
    prevention: [
      "Use disease-resistant varieties",
      "Avoid overhead irrigation",
      "Provide adequate plant spacing",
      "Practice good garden sanitation"
    ]
  },
  {
    id: "aphid-infestation",
    name: "Aphid Infestation",
    scientificName: "Various Aphid species",
    description: "Aphids are small sap-sucking insects that can cause significant damage to plants by feeding on plant juices and potentially transmitting diseases.",
    symptoms: [
      "Curled or distorted leaves",
      "Yellowing foliage",
      "Sticky honeydew residue on leaves",
      "Presence of small pear-shaped insects (green, black, red, or white)"
    ],
    causes: [
      "Rapid aphid reproduction in favorable conditions",
      "Excessive nitrogen fertilization promoting soft growth",
      "Transportation by wind or from nearby infected plants",
      "Ant protection of aphid colonies"
    ],
    treatment: [
      "Spray plants with strong water stream to dislodge aphids",
      "Apply insecticidal soap or neem oil",
      "Introduce natural predators like ladybugs",
      "Use systemic insecticides for severe infestations"
    ],
    prevention: [
      "Monitor plants regularly for early detection",
      "Avoid excessive nitrogen fertilization",
      "Encourage beneficial insects",
      "Use reflective mulch to confuse aphids"
    ]
  },
  {
    id: "healthy",
    name: "Healthy Plant",
    scientificName: "N/A",
    description: "The plant appears to be healthy with no signs of disease or pest infestation.",
    symptoms: [
      "Vibrant, appropriately colored foliage",
      "Normal growth patterns",
      "No visible spots, discoloration, or malformations",
      "Healthy stem structure"
    ],
    causes: [
      "Proper watering regimen",
      "Adequate light exposure",
      "Appropriate nutrient levels",
      "Good air circulation"
    ],
    treatment: [
      "Continue current care routine",
      "Monitor regularly for any changes",
      "Maintain consistent watering schedule",
      "Apply fertilizer as needed per plant type"
    ],
    prevention: [
      "Regular inspection for early problem detection",
      "Good sanitation practices",
      "Proper spacing between plants",
      "Balanced fertilization"
    ]
  }
];

// Function to get a random disease for demo purposes
export const getRandomDisease = (): DiseaseInfo => {
  // 20% chance for a healthy plant result
  if (Math.random() < 0.2) {
    return plantDiseases.find(disease => disease.id === "healthy")!;
  }
  
  // Otherwise return a random disease
  const diseases = plantDiseases.filter(disease => disease.id !== "healthy");
  const randomIndex = Math.floor(Math.random() * diseases.length);
  return diseases[randomIndex];
};
