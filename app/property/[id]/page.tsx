import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PropertyDetails() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-80 bg-gray-200 rounded-xl" />

          <div>
            <h2 className="text-2xl font-semibold">Luxury Duplex</h2>
            <p className="text-green-600 font-bold mt-1">₦ 120,000,000</p>

            <p className="mt-4 text-gray-700">
              Spacious luxury duplex located in a secure estate with modern finishing.
            </p>

            <div className="mt-4 p-4 border rounded-xl">
              <p className="font-semibold">Advertiser</p>
              <p>KayCribs Verified Seller</p>
              <button className="mt-3 w-full bg-green-600 text-white rounded-lg py-2">
                Chat with Advertiser
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
