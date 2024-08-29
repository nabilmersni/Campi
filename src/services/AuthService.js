import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";

const login = async (data) => {
    try {
        const res = await signInWithEmailAndPassword(auth, data.email, data.password);
        return res;
    } catch (error) {
        throw new Error(error.message)
    }
}


const authService = {
    login,
};

export default authService;