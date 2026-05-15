import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { coffeeMenuItems } from "@/data/menuItems";
import { ASSETS } from "@/lib/constants";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold font-cursive text-amber-900">
            Menu Kopi Kami
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
            Temukan koleksi kopi spesial dengan rasa yang berbeda-beda, dari espresso pekat hingga latte creamy.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffeeMenuItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-950"
            >
              <div className="relative h-56 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-lg font-bold text-amber-700 dark:text-amber-500">
                    {item.price}
                  </span>
                  <Link
                    href={`/order?item=${item.id}`}
                    className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-full transition-colors duration-200 flex items-center justify-center"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
