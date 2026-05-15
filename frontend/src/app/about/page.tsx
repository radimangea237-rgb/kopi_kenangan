import { aboutPageContent } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container py-20">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-cursive">
            {aboutPageContent.title}
          </h1>
          <p className="mt-4 text-gray-500">{aboutPageContent.intro}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {aboutPageContent.details.map((detail) => (
            <div
              key={detail.title}
              className="rounded-3xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-950 shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-3">{detail.title}</h2>
              <p className="text-gray-500 dark:text-gray-300">{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
