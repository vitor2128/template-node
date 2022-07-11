import { Router } from "express";

import { ConsultaCepController } from "@services/consultaCep/ConsultaCepController";

const servicesRoutes = Router();

const consultaCepController = new ConsultaCepController();

servicesRoutes.get("/consulta-cep/:cep", consultaCepController.handle);

export { servicesRoutes };
