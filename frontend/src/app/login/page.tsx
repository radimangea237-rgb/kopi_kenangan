import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto rounded-[32px] bg-white/90 dark:bg-gray-950/90 border border-gray-200 dark:border-gray-800 shadow-2xl p-10 backdrop-blur-sm">
          <h1 className="text-4xl font-bold mb-3 text-amber-900 dark:text-amber-400 font-cursive">Masuk</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Masukkan data akun untuk mengakses pemesanan dan riwayat kopi favoritmu.
          </p>

          <div className="space-y-5">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email atau Telepon
              <input
                type="text"
                placeholder="name@email.com / 08xxxxxxxxxx"
                className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none"
              />
            </label>

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Kata sandi
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none"
              />
            </label>

            <button className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold transition duration-200">
              Masuk Sekarang
            </button>
          </div>

          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            Belum punya akun?{' '}
            <Link href="/register" className="font-semibold text-amber-700 hover:underline">
              Daftar di sini
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
