import { BarChart3, Mail } from "lucide-react";
import { getLeads } from "@/app/actions/leads";
import { getProducts } from "@/app/actions/products";
import { LeadList } from "@/components/admin/LeadList";
import { ProductManager } from "@/components/admin/ProductManager";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const runtime = 'edge';

export default async function AdminDashboard() {
  const [leadsRes, productsRes] = await Promise.all([
    getLeads(),
    getProducts()
  ]);

  const leads = leadsRes.success ? leadsRes.leads : [];
  const products = productsRes.success ? productsRes.products : [];

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar Privada (Simulada) */}
      <aside className="w-full md:w-64 bg-zinc-900 text-white flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-2xl font-bold font-serif">Fundador Admin</h2>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-[#A11126] rounded-xl text-white">
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard Principal</span>
          </div>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="mb-10 text-zinc-900">
          <h1 className="text-3xl font-bold font-serif">Dashboard Comercial</h1>
          <p className="text-zinc-500 mt-2">Visión general en tiempo real de Leads y Catálogo D1.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LeadList leads={leads as any[]} />

          {/* Módulo Correos (Solo visual) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 lg:col-span-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-zinc-800">Gestión de Correos</h3>
              <Mail className="w-5 h-5 text-zinc-400" />
            </div>
            <p className="text-sm text-zinc-600 mb-6">
              Alias configurados mediante Cloudflare Email Routing.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-sm flex justify-between items-center py-2 border-b border-zinc-100">
                <span className="font-medium">hola@</span> 
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">Activo (Resend)</span>
              </li>
            </ul>
          </div>

          <ProductManager products={products as any[]} />
        </div>
      </main>
    </div>
  );
}
