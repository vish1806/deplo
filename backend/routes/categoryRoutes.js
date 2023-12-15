import express from "express";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "../controller/categoryController.js";

const router = express.Router();

//creating category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//updating category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//To get all categories
router.get("/get-category", categoryControlller);

//To get a single category
router.get("/single-category/:slug", singleCategoryController);

//To delete a category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
