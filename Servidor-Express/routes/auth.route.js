import { Router } from "express";
import { login } from "../controller/auth.controller.js";

const router = Router();

// Ruta para autenticar un usuario
router.post("/", login);

export default router;