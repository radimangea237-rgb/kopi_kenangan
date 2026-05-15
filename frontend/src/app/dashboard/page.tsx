import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-800 shadow-2xl p-12 backdrop-blur-sm">
            <h1 className="text-4xl font-bold font-cursive text-amber-900 dark:text-amber-400">
              Pilih Dashboard
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
              Akses dashboard admin atau user untuk melihat demo operasional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Admin Dashboard</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Lihat panel manajemen dummy untuk memantau penjualan, pelanggan, dan stok.
              </p>
              <Link
                href="/admin/dashboard"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-white font-semibold transition hover:bg-amber-800"
              >
                Lihat Admin Dashboard
              </Link>
            </div>

            <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-800 p-10 shadow-xl">
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">User Dashboard</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Lihat riwayat pesanan, voucher, dan rekomendasi kopi untuk pengguna.
              </p>
              <Link
                href="/user/dashboard"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-white font-semibold transition hover:bg-amber-800"
              >
                Lihat User Dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-800 p-10 shadow-2xl">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-900 font-semibold transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
