"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
    setSuccess("");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^08\d{7,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        if (!formData.email || !formData.password) {
          setError("Email/Telepon dan kata sandi harus diisi");
          setLoading(false);
          return;
        }

        if (!validateEmail(formData.email)) {
          setError("Email atau nomor telepon tidak valid");
          setLoading(false);
          return;
        }

        // Simulasi proses login
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Ambil data user dari localStorage
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(
          (u: any) => u.email === formData.email && u.password === formData.password
        );

        if (!user) {
          setError("Email/Telepon atau kata sandi salah");
          setLoading(false);
          return;
        }

        // Simpan session user
        localStorage.setItem("currentUser", JSON.stringify(user));
        setSuccess("Login berhasil! Mengarahkan...");
        
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      } else {
        // Register
        if (!formData.fullName || !formData.email || !formData.password) {
          setError("Semua field harus diisi");
          setLoading(false);
          return;
        }

        if (!validateEmail(formData.email)) {
          setError("Email atau nomor telepon tidak valid");
          setLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError("Kata sandi minimal 6 karakter");
          setLoading(false);
          return;
        }

        // Simulasi proses register
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Cek apakah user sudah ada
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.some((u: any) => u.email === formData.email)) {
          setError("Email atau telepon sudah terdaftar");
          setLoading(false);
          return;
        }

        // Simpan user baru
        const newUser = {
          id: Date.now(),
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        setSuccess("Pendaftaran berhasil! Silakan login.");
        setFormData({ fullName: "", email: "", password: "" });
        
        setTimeout(() => {
          setIsLogin(true);
        }, 1500);
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ fullName: "", email: "", password: "" });
    setError("");
    setSuccess("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto rounded-[32px] bg-white/90 dark:bg-gray-950/90 border border-gray-200 dark:border-gray-800 shadow-2xl p-10 backdrop-blur-sm">
          {/* Tab Toggle */}
          <div className="flex gap-2 mb-8 rounded-full bg-gray-200 dark:bg-gray-800 p-1">
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-full font-semibold transition-all ${
                !isLogin
                  ? "bg-amber-700 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Daftar
            </button>
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-full font-semibold transition-all ${
                isLogin
                  ? "bg-amber-700 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              Masuk
            </button>
          </div>

          <h1 className="text-4xl font-bold mb-3 text-amber-900 dark:text-amber-400 font-cursive">
            {isLogin ? "Masuk" : "Daftar"}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {isLogin
              ? "Masukkan data akun untuk mengakses pemesanan dan riwayat kopi favoritmu."
              : "Buat akun baru untuk memesan kopi dan menyimpan riwayat pesananmu."}
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name (Register Only) */}
            {!isLogin && (
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nama Lengkap
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  disabled={loading}
                  className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
                />
              </label>
            )}

            {/* Email/Phone */}
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email atau Telepon
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@email.com / 08xxxxxxxxxx"
                disabled={loading}
                className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
              />
            </label>

            {/* Password */}
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Kata sandi
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={isLogin ? "Masukkan kata sandi" : "Buat kata sandi (min. 6 karakter)"}
                disabled={loading}
                className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold transition duration-200 disabled:bg-amber-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Memproses...
                </>
              ) : isLogin ? (
                "Masuk Sekarang"
              ) : (
                "Daftar Sekarang"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button
              onClick={toggleMode}
              disabled={loading}
              className="font-semibold text-amber-700 hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLogin ? "Daftar di sini" : "Masuk di sini"}
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
