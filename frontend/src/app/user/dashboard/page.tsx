import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-700 shadow-2xl p-10 backdrop-blur-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold font-cursive text-amber-900 dark:text-amber-400">User Dashboard</h1>
                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
                  Ringkasan akun pengguna untuk melihat pesanan, voucher, dan rekomendasi kopi.
                </p>
              </div>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-white font-semibold transition hover:bg-amber-800"
              >
                Kembali ke Login
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Pesanan Aktif</p>
              <p className="mt-4 text-5xl font-bold text-amber-700 dark:text-amber-400">1</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Pesanan yang sedang berjalan.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Voucher Tersedia</p>
              <p className="mt-4 text-5xl font-bold text-amber-700 dark:text-amber-400">2</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Diskon siap pakai untuk pemesanan berikutnya.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-700 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Rekomendasi</p>
              <p className="mt-4 text-5xl font-bold text-amber-700 dark:text-amber-400">Latte</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Minuman yang cocok untuk kamu coba sekarang.</p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white/95 dark:bg-gray-950/95 border border-gray-200 dark:border-gray-700 shadow-2xl p-10">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Riwayat Pesanan</h2>
            <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
                <p className="font-semibold">Cappuccino</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Dipesan 2 hari lalu • Selesai</p>
              </div>
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
                <p className="font-semibold">Americano</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Dipesan 5 hari lalu • Selesai</p>
              </div>
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
                <p className="font-semibold">Latte</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Dipesan 1 minggu lalu • Selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
