import express from "express";
import cors from "cors";
import "dotenv/config";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./uploadthing.js";
import { db } from "./db/index.js";
import { users, courses, materials } from "./db/schema.js";

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint de Uploadthing
app.use(
	"/api/uploadthing",
	createRouteHandler({
		router: uploadRouter,
		config: {
			token: process.env.UPLOADTHING_SECRET,
			appId: process.env.UPLOADTHING_APP_ID,
		},
	})
);

// Rutas de API de Ejemplo
app.get("/api/health", (req, res) => {
	res.json({ status: "ok", message: "API de EETV ejecutándose" });
});

// Usuarios
app.get("/api/users", async (req, res) => {
	try {
		const allUsers = await db.select().from(users);
		res.json(allUsers);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Cursos
app.get("/api/courses", async (req, res) => {
	try {
		const allCourses = await db.select().from(courses);
		res.json(allCourses);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Materiales
app.get("/api/materials", async (req, res) => {
	try {
		const allMaterials = await db.select().from(materials);
		res.json(allMaterials);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
