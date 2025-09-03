import { doc, getDoc, setDoc } from "firebase/firestore";
import { ENDPOINTS, Instance } from "../../../constants";
import { auth, db } from "../../config/firebase";
import { emptyError, NotFoundError, ResponseType } from "../../Types/serviceTypes";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth"

export type UserType={
    name: string,
    password: string,
    email:string,
    mobile:string,
    dob:string
}

async function loginService(
  body: { email: string; password: string }
): Promise<ResponseType<UserType | null>> {
  try {

    const result = await signInWithEmailAndPassword(auth, body.email, body.password);
    const uid = result.user.uid;
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);
    if (!userDocSnap.exists()) {
      return NotFoundError;
    }
    return {
      response: userDocSnap.data() as UserType,
      responseIndicator: "success",
      statusCode: "200",
      responseMessage: "Login successful",
    };
  } catch (error) {
    console.error("Login error:", error);
    return emptyError; 
  }
}


async function createUserService(body:{name: string, password: string,email:string,mobile:string,dob:string}): Promise<ResponseType<String|null>> {
    
    try {
     const userCredential = await createUserWithEmailAndPassword(auth, body.email, body.password);
     await setDoc(doc(db, "users", userCredential.user.uid), {
      username: body.name,
      email: body.email,
      mobile: body.mobile,
      dob: body.dob,
    });

    return {
      response: "User created successfully",
      responseIndicator: "success",
      statusCode: "201",
      responseMessage: "User created successfully"
    };

    } catch (error) {
        return emptyError
    }
    
}



export { loginService ,createUserService};