import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const usuariosRef = collection(db, "usuarios");

export const crearUsuario = async (usuario: any) => await addDoc(usuariosRef, usuario);
export const obtenerUsuarios = async () => (await getDocs(usuariosRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
export const actualizarUsuario = async (id: string, datos: any) => await updateDoc(doc(db, "usuarios", id), datos);
export const eliminarUsuario = async (id: string) => await deleteDoc(doc(db, "usuarios", id));