import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CitiesController } from "../controllers";

const router = Router();

router.post(
  "/cities",
  CitiesController.bodyValidator,
  CitiesController.CreationOfCity
);

export default router;
