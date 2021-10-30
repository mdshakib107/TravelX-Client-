import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuthintication from "../Firebase/firebase.init";

initAuthintication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isDelete, setIsDelete] = useState(null);
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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, []);
    return {
        user,
        setUser,
        error,
        isLoading,
        setIsLoading,
        singInWithGoogle,
        setError,
        logOut,
        isDelete,
        setIsDelete
    }

}

export default useFirebase;