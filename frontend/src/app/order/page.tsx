import Image from "next/image";
import Link from "next/link";
import { coffeeMenuItems } from "@/data/menuItems";

interface OrderPageProps {
  searchParams: {
    item?: string;
  };
}

export default function OrderPage({ searchParams }: OrderPageProps) {
  const selectedId = Number(searchParams.item ?? "");
  const selectedItem = coffeeMenuItems.find((item) => item.id === selectedId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:bg-gray-900 text-gray-900 dark:text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold font-cursive text-amber-900">
            Form Pemesanan Kopi
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Pilih kopi favoritmu, lalu lengkapi detail pemesanan untuk proses lebih cepat.
          </p>
        </div>

        {selectedItem ? (
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-950">
              <div className="relative h-[360px] w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <Image
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-semibold mb-3">{selectedItem.name}</h2>
                <p className="text-gray-500 dark:text-gray-300 mb-4">{selectedItem.description}</p>
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-500">
                  {selectedItem.price}
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Detail Pesanan</h3>
              <div className="space-y-4 text-left text-gray-700 dark:text-gray-200">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama</label>
                  <input className="w-full rounded-2xl border border-gray-300 px-4 py-3 bg-white text-gray-900 focus:border-amber-500 focus:outline-none" placeholder="Masukkan nama kamu" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">No. Telepon</label>
                  <input className="w-full rounded-2xl border border-gray-300 px-4 py-3 bg-white text-gray-900 focus:border-amber-500 focus:outline-none" placeholder="08xxxxxxxxxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Alamat</label>
                  <textarea className="w-full rounded-2xl border border-gray-300 px-4 py-3 bg-white text-gray-900 focus:border-amber-500 focus:outline-none" placeholder="Masukkan alamat pengiriman" rows={4} />
                </div>
                <button className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold transition duration-200">
                  Pesan Sekarang
                </button>
              </div>
              <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                Atau kembali ke <Link href="/menu" className="text-amber-700 hover:underline">Menu Kopi</Link>.
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-10 shadow-xl text-center">
            <h2 className="text-3xl font-semibold mb-4">Pilih kopi terlebih dahulu</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Gunakan halaman Menu untuk memilih espresso, americano, cappuccino, atau latte.
            </p>
            <Link href="/menu" className="inline-block rounded-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 font-semibold transition duration-200">
              Kembali ke Menu
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
