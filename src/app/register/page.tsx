"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../../Firebase/Handlers/AuthHandler";
import { db } from "../../Firebase/config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nombreCompleto: "",
    telefono: "",
    barrio: "",
    direccion: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { email, password, nombreCompleto, telefono, barrio, direccion } = formData;

    try {
      const userCredential = await registerUser(email, password);
      const userId = userCredential.uid;

      // Guardamos el resto de la información del votante
      await setDoc(doc(db, "votantes", userId), {
        nombreCompleto,
        email,
        telefono,
        barrio,
        direccion,
        createdAt: serverTimestamp(),
      });

      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-2 p-6 rounded-lg shadow-xl bg-white">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Registrate de manera gratuita en MiBarrioApp</h2>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <input
            name="nombreCompleto"
            type="text"
            required
            placeholder="Nombre completo"
            value={formData.nombreCompleto}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono / WhatsApp"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="barrio"
            type="text"
            placeholder="Barrio"
            value={formData.barrio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="direccion"
            type="text"
            placeholder="Dirección exacta"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white text-sm font-medium rounded-md ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
          <a href="/login" className="text-sm text-blue-600 hover:underline block text-center mt-2">
            ¿Ya tienes una cuenta? Inicia sesión aquí
          </a>
        </form>
      </div>
    </div>
  );
}
