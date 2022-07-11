import { Router } from "express";

import { CriarUsuarioController } from "@modules/usuario/controllers/CriarUsuarioController";
import { AutenticacaoUsuarioController } from "@modules/usuario/controllers/AutenticacaoUsuarioController";
import { PerfilUsuarioController } from "@modules/usuario/controllers/PerfilUsuarioController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usuariosRoutes = Router();

const createUserController = new CriarUsuarioController();
const autenticacaoUsuarioController = new AutenticacaoUsuarioController();
const perfilUsuarioController = new PerfilUsuarioController();

usuariosRoutes.post("/criar-usuario", createUserController.handle);

usuariosRoutes.post("/sessao-usuario", autenticacaoUsuarioController.handle);

// TODO: o ensureAuthenticated é um middleware utilizado para protejer as rotas quando elas precisarem de autenticação, o middleware fica sempre no meio entre o url e o controller
usuariosRoutes.get(
  "/perfil-usuario",
  ensureAuthenticated,
  perfilUsuarioController.handle
);

export { usuariosRoutes };
