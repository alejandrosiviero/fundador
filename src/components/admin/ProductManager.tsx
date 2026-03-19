"use client";

import { useState } from "react";
import { createProduct, deleteProduct } from "@/app/actions/products";
import { ShoppingBag, Trash2, Plus } from "lucide-react";

export function ProductManager({ products }: { products: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!confirm("¿Eliminar este producto?")) return;
    setLoadingId(id);
    await deleteProduct(id);
    setLoadingId(null);
  }

  async function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoadingId("new");
    const formData = new FormData(e.currentTarget);
    await createProduct(formData);
    setLoadingId(null);
    setIsAdding(false);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-zinc-400" />
          <h3 className="font-bold text-zinc-800">Catálogo D1</h3>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="text-sm bg-black text-white px-3 py-1.5 rounded-lg font-medium hover:bg-zinc-800 flex items-center gap-1 transition-colors"
        >
          <Plus className="w-4 h-4" /> Nuevo Combo
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAdd} className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 mb-6 flex flex-col gap-3">
          <h4 className="text-sm font-bold text-zinc-800">Añadir Producto</h4>
          <input required type="text" name="name" placeholder="Nombre completo (ej. Combo Emprendedor)" className="px-3 py-2 text-sm border rounded-md" />
          <input required type="number" name="price" placeholder="Precio (USD)" className="px-3 py-2 text-sm border rounded-md" />
          <textarea required name="description" placeholder="Descripción breve" className="px-3 py-2 text-sm border rounded-md resize-none" rows={2}/>
          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={() => setIsAdding(false)} className="text-xs text-zinc-500 font-medium hover:text-black">Cancelar</button>
            <button type="submit" disabled={loadingId === "new"} className="text-xs bg-[#A11126] text-white px-4 py-2 font-medium rounded-lg disabled:opacity-50 transition-colors hover:bg-red-800">
              {loadingId === "new" ? "Guardando..." : "Guardar Producto"}
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {products.length === 0 ? (
          <p className="text-sm text-zinc-500 text-center py-8 border border-dashed border-zinc-200 rounded-lg">No hay combos cargados. Añade el primero.</p>
        ) : (
          products.map(p => (
            <div key={p.id} className="flex justify-between items-center p-4 border border-zinc-100 rounded-xl hover:border-[#A11126]/30 transition-colors">
              <div>
                <p className="font-bold text-sm text-zinc-900">{p.name} <span className="text-zinc-500 font-normal ml-2">${p.price}</span></p>
                <p className="text-sm text-zinc-500 mt-1">{p.description}</p>
              </div>
              <button 
                onClick={() => handleDelete(p.id)}
                disabled={loadingId === p.id}
                className="p-2 text-zinc-400 hover:text-[#A11126] hover:bg-red-50 rounded-md transition-colors disabled:opacity-50 ml-4 flex-shrink-0"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
