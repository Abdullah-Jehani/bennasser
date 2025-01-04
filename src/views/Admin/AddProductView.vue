<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-semibold mb-4">Add Product</h1>

    <form @submit.prevent="addProduct">
      <!-- Title -->
      <div class="mb-4">
        <label for="title" class="block font-medium">Product Title</label>
        <input
          type="text"
          id="title"
          v-model="product.title"
          class="w-full border p-2 rounded"
          placeholder="Enter product title"
          required
        />
      </div>

      <!-- Company -->
      <div class="mb-4">
        <label for="company" class="block font-medium">Company</label>
        <input
          type="text"
          id="company"
          v-model="product.company"
          class="w-full border p-2 rounded"
          placeholder="Enter company name"
          required
        />
      </div>

      <!-- In Stock -->
      <div class="mb-4">
        <label class="block font-medium">In Stock</label>
        <select
          v-model="product.inStock"
          class="w-full border p-2 rounded"
          required
        >
          <option :value="true">Yes</option>
          <option :value="false">No</option>
        </select>
      </div>

      <!-- Price -->
      <div class="mb-4">
        <label for="price" class="block font-medium">Price (LYD)</label>
        <input
          type="number"
          id="price"
          v-model.number="product.price"
          class="w-full border p-2 rounded"
          placeholder="Enter product price"
          required
        />
      </div>

      <!-- Image -->
      <div class="mb-4">
        <label for="image" class="block font-medium">Image</label>
        <input
          type="file"
          id="image"
          @change="onFileChange"
          class="w-full border p-2 rounded"
          required
        />
        <img
          v-if="product.image"
          :src="product.image"
          alt="Product Image"
          class="mt-4 w-32 h-32 object-cover"
        />
      </div>

      <!-- Description -->
      <div class="mb-4">
        <label for="description" class="block font-medium">Description</label>
        <textarea
          id="description"
          v-model="product.description"
          class="w-full border p-2 rounded"
          rows="4"
          placeholder="Enter product description"
          required
        ></textarea>
      </div>

      <!-- Actions -->
      <div class="flex space-x-4">
        <button
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>
        <button
          type="button"
          class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          @click="resetForm"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const product = ref({
  title: "",
  company: "",
  inStock: true,
  price: 0,
  image: "",
  description: "",
});

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      product.value.image = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const addProduct = async () => {
  try {
    // Prepare data for the backend
    const formData = {
      title: product.value.title,
      company: product.value.company,
      inStock: product.value.inStock,
      price: product.value.price,
      image: product.value.image,
      description: product.value.description,
    };

    // Send the POST request
    await axios.post("/api/products", formData);

    alert("Product added successfully!");
    router.push("/admin/products"); // Redirect to product listing
  } catch (error) {
    console.error("Error adding product:", error);
    alert("Failed to add product. Please try again.");
  }
};

const resetForm = () => {
  product.value = {
    title: "",
    company: "",
    inStock: true,
    price: 0,
    image: "",
    description: "",
  };
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
