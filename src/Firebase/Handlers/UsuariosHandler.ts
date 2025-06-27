import { Candidato } from "@/interfaces/ICandidato";
import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, onSnapshot } from "firebase/firestore";

const candidatosRef = collection(db, "candidatos");

export const crearCandidato = async (candidato: Omit<Candidato, "id">) => {
  try {
    const docRef = await addDoc(candidatosRef, candidato);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar el candidato:", error);
    throw error;
  }
};

export const obtenerCandidatos = (callback: (data: Candidato[]) => void) => {
  const q = query(candidatosRef, orderBy("nombre", "asc"));
  return onSnapshot(q, (snapshot) => {
    const lista: Candidato[] = [];
    snapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() } as Candidato);
    });
    callback(lista);
  });
};
export const crearUsuario = async (usuario: any) => await addDoc(candidatosRef, usuario);
export const obtenerUsuarios = async () => (await getDocs(candidatosRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
export const actualizarUsuario = async (id: string, datos: any) => await updateDoc(doc(db, "usuarios", id), datos);
export const eliminarUsuario = async (id: string) => await deleteDoc(doc(db, "usuarios", id));