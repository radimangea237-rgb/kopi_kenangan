import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-lg rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 shadow-2xl p-10 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-3 text-amber-900 dark:text-amber-400 font-cursive">Admin Login</h1>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Masuk sebagai admin untuk melihat data penjualan dan manajemen kedai kopi.
          </p>

          <div className="space-y-5">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email Admin
              <input
                type="email"
                placeholder="admin@kopikenangan.com"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Kata Sandi
              <input
                type="password"
                placeholder="Masukkan kata sandi admin"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none"
              />
            </label>

            <button className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold transition duration-200">
              Masuk Admin
            </button>
          </div>

          <div className="mt-8 text-center text-slate-600 dark:text-slate-400">
            Bukan admin?{' '}
            <Link href="/login" className="font-semibold text-amber-700 hover:underline">
              Masuk sebagai pengguna
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
