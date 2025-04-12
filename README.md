
# PlantGuard: AI Plant Disease Detection

## Overview

PlantGuard is an AI-powered web application that helps users detect plant diseases by uploading images. The application uses a simulated AI model to analyze plant images and provide detailed disease information and treatment recommendations.

## Features

- Upload plant images for disease detection
- AI-powered disease recognition
- Detailed disease information and treatment advice
- Scan history tracking
- Responsive and user-friendly design

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- React Router
- React Query
- Lucide React Icons

## Prerequisites

- Node.js (v18 or later)
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/plantguard.git
cd plantguard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Main application pages
- `src/services`: Service functions for image analysis and storage
- `src/data`: Static data like disease information
- `src/hooks`: Custom React hooks

## Simulated AI Analysis

This demo version uses a simulated AI analysis that randomly selects plant diseases. In a production environment, you would replace `analyzeImage` in `plantAnalysisService.ts` with a real AI model or API call.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
