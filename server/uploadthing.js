import { createUploadthing } from "uploadthing/express";
 
const f = createUploadthing();
 
export const uploadRouter = {
  // Define as many file routes as you'd like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, res }) => {
      // This code runs on your server before upload
      // If you throw here, the user will not be able to upload
      // const user = await auth(req);
      // if (!user) throw new Error("Unauthorized");
 
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: "test-user" }; // Replace with real auth later
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),

  pdfUploader: f({ pdf: { maxFileSize: "16MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("PDF Upload complete:", file.url);
    }),
};
