"use client";
import { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [form, setForm] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset");
    formData.append("cloud_name", "your_cloud_name");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
      formData
    );
    return res.data.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload all images to Cloudinary
      const imageUrls = await Promise.all(
        images.map((img) => uploadToCloudinary(img))
      );

      const payload = {
        ...form,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
        images: imageUrls,
      };

      const token = "your_token_here"; // 👈 Replace with your token logic

      const response = await axios.post(
        "http://localhost:3001/api/v1/products",
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, "=========================================");

      alert("Product added successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="productName"
          placeholder="Product Name"
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="stock"
          placeholder="Stock"
          type="number"
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          name="categoryId"
          placeholder="Category ID"
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          required
          className="border p-2 w-full"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
