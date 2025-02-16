const express = require("express");

const router = express.Router();
const ctrl = require("../../controllersContinents");
const { uploadContinents } = require("../../middlewares/upload");
const { isValidId } = require("../../middlewares");


const uploadGroup = uploadContinents.fields([
    { name: "image", maxCount: 1 },
    { name: "icon", maxCount: 1 },
    {name: "featuresPhotos", maxCount: 10},
    { name: "productsPhotos", maxCount: 10 }
]);

router.get("/", ctrl.getContinentsEN);
router.get("/:continentId", isValidId, ctrl.getContinentEN);
// router.post("/upload-continent", uploadGroup, controllerWrapper(addContinentEN));
// router.delete("/:continentId", controllerWrapper(deleteContinentEN))

// router.patch("/update-continent/:continentId/name", upload.none(), controllerWrapper(updateNameEN));
// router.patch("/update-continent/:continentId/description", upload.none(), controllerWrapper(updateDescriptionEN));
// router.patch("/update-continent/:continentId/image", upload.single('image'), controllerWrapper(updateImageEN));
// router.patch("/update-continent/:continentId/icon", upload.single('icon'), controllerWrapper(updateIconEN));

// router.post("/update-continent/:continentId/product", upload.single('productPhoto'), controllerWrapper(addProductEN));
// router.patch("/update-continent/:continentId/product/:productId", upload.single('productPhoto'), controllerWrapper(updateProductEN));
// router.delete("/update-continent/:continentId/product/:productId", upload.none(), controllerWrapper(deleteProductEN));

// router.post("/update-continent/:continentId/feature", upload.single('featurePhoto'), controllerWrapper(addFeatureEN));
// router.patch("/update-continent/:continentId/feature/:featureId", upload.single('featurePhoto'), controllerWrapper(updateFeatureEN));
// router.delete("/update-continent/:continentId/feature/:featureId", upload.none(), controllerWrapper(deleteFeatureEN));

module.exports = router;
