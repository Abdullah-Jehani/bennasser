<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-semibold mb-4">Product Information</h1>

    <form @submit.prevent="updateProduct">
      <!-- Title -->
      <div class="mb-4">
        <label for="title" class="block font-medium">Product Title</label>
        <input
          type="text"
          id="title"
          v-model="product.title"
          class="w-full border p-2 rounded"
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
        />
      </div>

      <!-- In Stock -->
      <div class="mb-4">
        <label class="block font-medium">In Stock</label>
        <select v-model="product.inStock" class="w-full border p-2 rounded">
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
        ></textarea>
      </div>

      <!-- Actions -->
      <div class="flex space-x-4">
        <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          type="button"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          @click="deleteProduct"
        >
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const productId = route.params.id;

const product = ref({
  title: "",
  company: "",
  inStock: true,
  price: 0,
  image: "",
  description: "",
});

const fetchProduct = async () => {
  try {
    const response = await axios.get(`/api/products/${productId}`);
    product.value = response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

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

const updateProduct = async () => {
  try {
    await axios.put(`/api/products/${productId}`, product.value);
    alert("Product updated successfully!");
  } catch (error) {
    console.error("Error updating product:", error);
    alert("Failed to update product.");
  }
};

const deleteProduct = async () => {
  try {
    await axios.delete(`/api/products/${productId}`);
    alert("Product deleted successfully!");
    router.push("/admin/products");
  } catch (error) {
    console.error("Error deleting product:", error);
    alert("Failed to delete product.");
  }
};

onMounted(() => {
  fetchProduct();
});
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
