import { firebaseAuth } from "../config";
import { signInWithEmailAndPassword } from "firebase/auth";

const auth = firebaseAuth;

export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}