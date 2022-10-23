import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

type Cities = {
  name: string;
  idade: string;
};
const bodyValidate: yup.SchemaOf<Cities> = yup.object().shape({
  name: yup.string().required().min(3),
  idade: yup.string().required().min(2),
});

export const bodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidate.validate(req.body, { abortEarly: false });
    return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};

export const CreationOfCity = async (req: Request, res: Response) => {
  let validateDate: Cities | undefined = undefined;

  return res.send("OK!");
};
