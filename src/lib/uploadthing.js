import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

// Componentes Simulados para Desarrollo sin Backend
const MockUploadButton = ({ onClientUploadComplete }) => (
  <button 
    type="button"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    onClick={() => {
        // Simular subida exitosa después de 1 segundo
        setTimeout(() => {
            if(onClientUploadComplete) {
                onClientUploadComplete([{ url: "https://via.placeholder.com/150", name: "archivo-simulado.jpg" }]);
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
                  onClientUploadComplete([{ url: "https://via.placeholder.com/150", name: "archivo-simulado.jpg" }]);
              }
          }, 1000);
      }}
    >
      <p className="text-gray-500">Haz clic para simular subida (Modo Dev)</p>
    </div>
);

// Verificar si estamos en "Modo Simulado" (sin URL de backend real o claves de uploadthing)
// Puedes ajustar esta condición según tus necesidades
const isMockMode = true; 

// Asegúrate de que esta URL apunte al endpoint de tu servidor Express
export const UploadButton = isMockMode ? MockUploadButton : generateUploadButton({
  url: "http://localhost:3000/api/uploadthing",
});
 
export const UploadDropzone = isMockMode ? MockUploadDropzone : generateUploadDropzone({
  url: "http://localhost:3000/api/uploadthing",
});
