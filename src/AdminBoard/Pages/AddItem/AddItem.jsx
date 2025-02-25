import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddItem = () => {
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    buyPrice: "",
    image: null,
    tier: "1",
    enchantment: "0",
    quality: "Normal",
  });

  const categories = [
    "Accessories", "Armor", "Artifact", "City Resources", "Consumable", "Skin", "Farmable", "Furniture",
    "Gathering Gear", "Laborers", "Luxury Goods", "Magic", "Materials", "Melee", "Mount", "Off-Hand",
    "Other", "Product", "Ranged", "Resource", "Tomes", "Token", "Tool", "Trophies"
  ];
  const tiers = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const enchantments = ["0", "1", "2", "3", "4"];
  const qualities = ["Normal", "Good", "Outstanding", "Excellent", "Masterpiece"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    if (formData.image) {
      const imageData = new FormData();
      imageData.append("image", formData.image);

      try {
        const response = await fetch(imageHostingAPI, {
          method: "POST",
          body: imageData,
        });

        const result = await response.json();

        if (response.ok) {
          imageUrl = result.data.display_url;
          console.log("Image uploaded successfully:", imageUrl);
        } else {
          console.error("Image upload failed:", result);
          return;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }
    }

    const itemData = {
      itemName: formData.itemName,
      category: formData.category,
      minPrice: formData.minPrice,
      maxPrice: formData.maxPrice,
      buyPrice: formData.buyPrice,
      imageUrl,
      tier: formData.tier,
      enchantment: formData.enchantment,
      quality: formData.quality,
    };

    try {
      const response = await axiosSecure.post("/items", itemData);

      if (response.status === 200 || response.status === 201) {
        console.log("Server Response:", response.data);

        // Show success message
        Swal.fire({
          title: "Success!",
          text: "Item added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Reset form
        setFormData({
          itemName: "",
          category: "",
          minPrice: "",
          maxPrice: "",
          buyPrice: "",
          image: null,
          tier: "1",
          enchantment: "0",
          quality: "Normal",
        });
      } else {
        throw new Error("Failed to add item");
      }
    } catch (error) {
      console.error("Error submitting item:", error.response?.data || error.message);

      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to add item. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add Albion Online Marketplace Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Min Price</label>
            <input
              type="number"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Max Price</label>
            <input
              type="number"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Buy Price</label>
          <input
            type="number"
            name="buyPrice"
            value={formData.buyPrice}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Item Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Tier</label>
          <select
            name="tier"
            value={formData.tier}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {tiers.map((tier) => (
              <option key={tier} value={tier}>{tier}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Enchantment</label>
          <select
            name="enchantment"
            value={formData.enchantment}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {enchantments.map((ench) => (
              <option key={ench} value={ench}>{ench}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Quality</label>
          <select
            name="quality"
            value={formData.quality}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {qualities.map((quality) => (
              <option key={quality} value={quality}>{quality}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
