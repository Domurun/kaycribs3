import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find your dream home with
              <span className="text-green-600"> KayCribs</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Buy, rent, or list properties with verified sellers and secure legal services.
            </p>

            <div className="mt-6 flex gap-4">
              <Link href="/browse" className="px-6 py-3 bg-green-600 text-white rounded-lg">
                Browse Properties
              </Link>
              <Link href="/legal-services" className="px-6 py-3 border rounded-lg">
                Legal Services
              </Link>
            </div>
          </div>

          <div className="rounded-2xl h-72 bg-green-100" />
        </div>
      </section>

      <Footer />
    </>
  );
}
