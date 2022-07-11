import { decode, verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import auth from "@config/auth";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    verify(token, auth.secret_token) as IPayload;

    const { sub } = decode(token) as IPayload;

    request.id_usuario = sub.toString();

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
