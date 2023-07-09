import {createRouter} from "next-connect";
import dbConnect from "../../../backend/config/dbConnect";
import {registerUser} from "../../../backend/controller/authControllers"

const router = createRouter();

dbConnect();


router.post (registerUser );


export default router.handler(); 