
import express from 'express';
const router = express.Router();
import { add_Chocolate, fetch_all, fetchByID, delete_Chocolate, update_Chocolate } from "./controller.js";


router.route('/').post(add_Chocolate);
router.route('/fetchAll').get(fetch_all);          // fetch all data
router.route('/:id').get(fetchByID);
router.route('/:id').put(update_Chocolate);
router.route('/:id').delete(delete_Chocolate);


export default router;