"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    const { env } = getRequestContext();
    const { results } = await env.DB.prepare(
      "SELECT p.*, c.name as category_name FROM products p LEFT JOIN categories c ON p.category_id = c.id ORDER BY p.created_at DESC"
    ).all();
    return { success: true, products: results };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { success: false, products: [] };
  }
}

export async function createProduct(formData: FormData) {
  try {
    const { env } = getRequestContext();
    const id = crypto.randomUUID();
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const category_id = formData.get("category_id") as string || "cat-1";
    const image_url = formData.get("image_url") as string || "";
    
    await env.DB.prepare(
      `INSERT INTO products (id, category_id, name, description, price, image_url, active) VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(id, category_id, name, description, price, image_url, 1)
      .run();

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
}

export async function deleteProduct(id: string) {
  try {
    const { env } = getRequestContext();
    await env.DB.prepare("DELETE FROM products WHERE id = ?").bind(id).run();
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false };
  }
}
