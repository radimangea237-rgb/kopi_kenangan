export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/80 text-white">
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="animate-spin rounded-full border-8 border-white/20 border-t-white w-20 h-20" />
        <p className="mt-2 text-lg font-semibold">Memuat halaman...</p>
      </div>
    </div>
  );
}
