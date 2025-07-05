import { Router } from "express";
import { drugCompanies, findDrug, searchDrugs } from "../controllers/drug";

const router = Router()

router.post("/search-drugs", searchDrugs)
router.get("/drug-companies", drugCompanies)
router.get("/drug-details/:drugId", findDrug)

export default () => router