import express from 'express';
import { ControllerWrapper } from "../../utils/ControllerWrapper.js";
import { getIngredients } from '../../controllers/ingredients/getIngredients.js';


const router = express.Router();

router.get("/", ControllerWrapper(getIngredients));
// router.get("/:id", ControllerWrapper(getOneContinent));


export default router;