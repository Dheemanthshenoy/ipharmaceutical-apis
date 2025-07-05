import { Router } from "express";
import { seedDrugs } from "../controllers/seed";

const router = Router()

router.post("/seed-drugs", seedDrugs)

export default () => router