import { Router } from "express";

const router = Router()

import seedRoutes from "./seed"
import drugRoutes from "./drug"

router.use("/", seedRoutes())
router.use("/", drugRoutes())

export default router