import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuthintication from "../Firebase/firebase.init";

initAuthintication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.massage)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, []);
    return {
        user,
        error,
        singInWithGoogle,
        setError,
        logOut
    }
}
export default useFirebase;