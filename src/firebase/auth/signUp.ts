import { firebaseAuth } from "../config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const auth = firebaseAuth;

export default async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}