import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MarketPrices = () => {
  const axiosPublic = useAxiosPublic();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState(""); // New state for sorting
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const categories = [
    "Accessories", "Armor", "Artifact", "City Resources", "Consumable", "Skin", 
    "Farmable", "Furniture", "Gathering Gear", "Laborers", "Luxury Goods", "Magic", 
    "Materials", "Melee", "Mount", "Off-Hand", "Other", "Product", "Ranged", 
    "Resource", "Tomes", "Token", "Tool", "Trophies"
  ];

  const formatPrice = (price) => {
    if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + "M";
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + "K";
    }
    return price;
  };

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosPublic.get("/items", { 
          params: { search, category, sort, page, limit } // Updated to include sort
        });
        setItems(response.data.items);
        setTotalPages(Math.max(1, Math.ceil(response.data.total / limit))); // Ensure at least 1 page
      } catch (err) {
        setError("Failed to load data. Please try again.");
        setItems([]); // Clear previous data on error
      }
      setLoading(false);
    };

    fetchItems();
  }, [search, category, sort, page]); // Include `sort` in dependencies

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      {/* Search, Filter & Sort Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort by</option>
          <option value="highPrice">Max Price: High to Low</option>
          <option value="lowPrice">Max Price: Low to High</option>
        </select>
      </div>

      {/* Displaying Items in Table */}
      {loading && <p className="text-center text-blue-500">Loading items...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && items.length === 0 && (
        <p className="text-center text-gray-500">No items found.</p>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Item Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Min Price</th>
              <th className="border px-4 py-2">Max Price</th>
              <th className="border px-4 py-2">Buy Price</th>
              <th className="border px-4 py-2">Tier</th>
              <th className="border px-4 py-2">Enchant</th>
              <th className="border px-4 py-2">Quality</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="h-20">
                <td className="border px-4">
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/150"}
                    alt={item.itemName}
                    className="w-32 h-20 object-contain rounded"
                  />
                </td>
                <td className="border px-4 py-2">{item.itemName}</td>
                <td className="border px-4 py-2">{item.category}</td>
                <td className="border px-4 py-2">{formatPrice(item.minPrice)}</td>
                <td className="border px-4 py-2">{formatPrice(item.maxPrice)}</td>
                <td className="border px-4 py-2">{formatPrice(item.buyPrice)}</td>
                <td className="border px-4 py-2">{item.tier}</td>
                <td className="border px-4 py-2">{item.enchantment}</td>
                <td className="border px-4 py-2">{item.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button 
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300" 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 border rounded ${page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button 
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300" 
          disabled={page === totalPages} 
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MarketPrices;
