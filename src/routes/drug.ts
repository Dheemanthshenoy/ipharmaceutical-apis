import { Router } from "express";
import { findDrug, searchDrugs } from "../controllers/drug";

const router = Router()

router.post("/search-drugs", searchDrugs)
router.get("/drug-details/:drugId", findDrug)

export default () => router