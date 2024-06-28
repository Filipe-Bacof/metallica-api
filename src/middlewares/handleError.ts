import { NextFunction, Request, Response } from "express";

export function handleError(
  error: any, // Definir um tipo mais específico para o objeto 'error' é recomendado, caso esteja disponível.
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  if (error && error.status) {
    return res.status(error.status).send(error.message);
  } else {
    res.status(500).send(error);
  }
}
