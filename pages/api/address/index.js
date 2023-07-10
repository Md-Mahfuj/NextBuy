import {createRouter} from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import {
  getAddresses,
  newAddress,
} from "../../../backend/controller/addressControllers";

const router = createRouter();

dbConnect();


router.get(getAddresses);
router.post(newAddress);



export default router.handler(); 