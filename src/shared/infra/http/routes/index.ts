import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { servicesRoutes } from "./services.routes";
import { usuariosRoutes } from "./usuarios.routes";

const router = Router();

router.use("/usuarios", usuariosRoutes);

router.use("/services", ensureAuthenticated, servicesRoutes);

export { router };
