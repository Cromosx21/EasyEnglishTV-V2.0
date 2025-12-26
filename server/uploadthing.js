import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
	// Define tantas rutas de archivos como desees, cada una con un routeSlug único
	imageUploader: f({ image: { maxFileSize: "4MB" } })
		// Configura permisos y tipos de archivo para esta Ruta de Archivo
		.middleware(async ({ req, res }) => {
			// Este código se ejecuta en tu servidor antes de la subida
			// Si lanzas un error aquí, el usuario no podrá subir el archivo
			// const user = await auth(req);
			// if (!user) throw new Error("No autorizado");

			// Todo lo que se devuelva aquí es accesible en onUploadComplete como `metadata`
			return { userId: "usuario-prueba" }; // Reemplazar con autenticación real más tarde
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// Este código SE EJECUTA EN TU SERVIDOR después de la subida
			console.log("Subida completada para el usuario:", metadata.userId);
			console.log("url del archivo", file.url);

			// !!! Todo lo que se devuelva aquí se envía al callback `onClientUploadComplete` del lado del cliente
			return { uploadedBy: metadata.userId };
		}),

	pdfUploader: f({ pdf: { maxFileSize: "16MB" } }).onUploadComplete(
		async ({ metadata, file }) => {
			console.log("Subida de PDF completada:", file.url);
		}
	),
};
