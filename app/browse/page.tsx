"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BrowseProperties() {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
  });

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Browse Properties</h2>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <input
            placeholder="Location"
            className="border rounded-lg px-3 py-2"
          />
          <select className="border rounded-lg px-3 py-2">
            <option>Property Type</option>
            <option>Flat</option>
            <option>Duplex</option>
            <option>Land</option>
            <option>Shop</option>
          </select>
          <select className="border rounded-lg px-3 py-2">
            <option>Status</option>
            <option>For Rent</option>
            <option>For Sale</option>
          </select>
          <button className="bg-green-600 text-white rounded-lg px-3 py-2">
            Apply Filters
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="border rounded-xl overflow-hidden">
              <div className="h-40 bg-gray-200" />
              <div className="p-4">
                <p className="font-semibold">3 Bedroom Apartment</p>
                <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                <p className="mt-2 font-bold text-green-600">₦ 2,000,000</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
