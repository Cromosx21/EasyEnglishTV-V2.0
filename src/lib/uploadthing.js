import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

// Mock Components for Development without Backend
const MockUploadButton = ({ onClientUploadComplete }) => (
  <button 
    type="button"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    onClick={() => {
        // Simulate successful upload after 1 second
        setTimeout(() => {
            if(onClientUploadComplete) {
                onClientUploadComplete([{ url: "https://via.placeholder.com/150", name: "mock-file.jpg" }]);
            }
        }, 1000);
    }}
  >
    Subir Archivo (Simulado)
  </button>
);

const MockUploadDropzone = ({ onClientUploadComplete }) => (
    <div 
      className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center hover:bg-gray-50 cursor-pointer"
      onClick={() => {
          setTimeout(() => {
              if(onClientUploadComplete) {
                  onClientUploadComplete([{ url: "https://via.placeholder.com/150", name: "mock-file.jpg" }]);
              }
          }, 1000);
      }}
    >
      <p className="text-gray-500">Haz clic para simular subida (Dev Mode)</p>
    </div>
);

// Check if we are in "Mock Mode" (no real backend URL or uploadthing keys)
// You can adjust this condition based on your needs
const isMockMode = true; 

// Ensure this URL points to your Express server endpoint
export const UploadButton = isMockMode ? MockUploadButton : generateUploadButton({
  url: "http://localhost:3000/api/uploadthing",
});
 
export const UploadDropzone = isMockMode ? MockUploadDropzone : generateUploadDropzone({
  url: "http://localhost:3000/api/uploadthing",
});
