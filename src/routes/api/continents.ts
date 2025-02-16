
import express from 'express';
import { ControllerWrapper } from "../../utils/ControllerWrapper.js";
import { getContinents } from '../../controllers/continents/getContinents.js';
import { getOneContinent } from '../../controllers/continents/getOneContinent.js';
import { isValidId } from '../../middlewares/isValidId.js';

const router = express.Router();

router.get("/", ControllerWrapper(getContinents));
router.get("/:id", isValidId, ControllerWrapper(getOneContinent));


export default router;
