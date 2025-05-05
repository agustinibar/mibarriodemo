import {auth, db } from '../config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

//crea un usuario en Auth y crearlo en la coleccion de 'usuarios'
export const registerUser = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userData = {
        uid: user.uid,
        email: user.email,
        rol: "lider",
        creatAt: new Date()
    }

    await setDoc(doc(db, "usuarios", user.uid), userData);

    return user;
}

//iniciar sesion en Firebase
export const loginUser = async (email: string, password: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}

export const getUsuarioFirestore = async (uid: string)=>{
    const docSnap = await getDoc(doc(db, "usuarios", uid));
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
}

//cerrar sesion en Firebase auth
export const logOut = async () =>{
    try {
        await signOut(auth);
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
}