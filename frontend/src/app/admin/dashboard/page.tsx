import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 shadow-2xl p-10 backdrop-blur-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-4xl font-bold font-cursive text-amber-900 dark:text-amber-400">Admin Dashboard</h1>
                <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">
                  Panel admin untuk memantau penjualan, pelanggan, dan stok. Semua data ini hanya contoh dummy.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-amber-700 px-6 py-3 text-white font-semibold transition hover:bg-amber-800"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-4">
            <div className="rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Pendapatan Hari Ini</p>
              <p className="mt-4 text-4xl font-bold text-amber-700 dark:text-amber-400">Rp 12.450.000</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Total penjualan hari ini dari semua cabang.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Pesanan Terbaru</p>
              <p className="mt-4 text-4xl font-bold text-amber-700 dark:text-amber-400">28</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Pesanan yang masuk dalam 2 jam terakhir.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Pelanggan Baru</p>
              <p className="mt-4 text-4xl font-bold text-amber-700 dark:text-amber-400">16</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Akun baru yang terdaftar hari ini.</p>
            </div>
            <div className="rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Stok Menu Rendah</p>
              <p className="mt-4 text-4xl font-bold text-amber-700 dark:text-amber-400">3</p>
              <p className="mt-3 text-slate-600 dark:text-slate-300">Item yang perlu diisi ulang segera.</p>
            </div>
          </div>

          <div className="rounded-[32px] bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-800 shadow-2xl p-10">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Permintaan Terakhir</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Pesanan Prioritas</h3>
                <ul className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                    <p className="font-semibold">Gerai Sudirman</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">35 pesanan tertunda • 12:30</p>
                  </li>
                  <li className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                    <p className="font-semibold">Gerai Mall</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">22 pesanan tertunda • 12:15</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tindakan Cepat</h3>
                <div className="mt-5 space-y-4 text-slate-700 dark:text-slate-300">
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                    <p className="font-semibold">Perbarui stok</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Biji kopi Arabika hampir habis.</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                    <p className="font-semibold">Konfirmasi promo</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Diskon happy hour mulai 15.00.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
