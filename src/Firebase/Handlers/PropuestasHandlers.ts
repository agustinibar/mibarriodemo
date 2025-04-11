import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const propuestasRef = collection(db, "propuestas");

export const crearPropuesta = async (propuesta: any) => await addDoc(propuestasRef, propuesta);
export const obtenerPropuestas = async () => (await getDocs(propuestasRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
export const actualizarPropuesta = async (id: string, datos: any) => await updateDoc(doc(db, "propuestas", id), datos);
export const eliminarPropuesta = async (id: string) => await deleteDoc(doc(db, "propuestas", id));
