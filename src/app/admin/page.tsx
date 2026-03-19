import { Users, Mail, ShoppingBag, BarChart3, LogOut } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar Privada (Simulada) */}
      <aside className="w-full md:w-64 bg-zinc-900 text-white flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <h2 className="text-2xl font-bold font-serif">Fundador Admin</h2>
        </div>
        <nav className="flex-1 p-4 flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#A11126] rounded-xl text-white transition-colors">
            <BarChart3 className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors">
            <Users className="w-5 h-5" />
            <span>Leads (WhatsApp)</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors">
            <Mail className="w-5 h-5" />
            <span>Alias de Correos</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors">
            <ShoppingBag className="w-5 h-5" />
            <span>E-Commerce</span>
          </a>
        </nav>
        <div className="p-4 border-t border-zinc-800">
          <button className="flex w-full items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="mb-10 text-zinc-900">
          <h1 className="text-3xl font-bold font-serif">Dashboard Principal</h1>
          <p className="text-zinc-500 mt-2">Bienvenido al panel de control de Fundador B2B.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Módulo Leads */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-zinc-800">Últimos Leads (WhatsApp)</h3>
              <Users className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="space-y-4">
              {/* Ejemplo conceptual */}
              <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                <span className="text-sm text-zinc-600">Hace 2 horas</span>
                <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">whatsapp_click</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-zinc-100">
                <span className="text-sm text-zinc-600">Hace 5 horas</span>
                <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">whatsapp_click</span>
              </div>
            </div>
            <button className="mt-6 text-sm text-[#A11126] font-medium hover:underline inline-flex items-center gap-1">Ver reporte completo &rarr;</button>
          </div>

          {/* Módulo Correos */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-zinc-800">Gestión de Correos</h3>
              <Mail className="w-5 h-5 text-zinc-400" />
            </div>
            <p className="text-sm text-zinc-600 mb-6">
              Alias configurados mediante Cloudflare Email Routing.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-sm flex justify-between items-center py-2 border-b border-zinc-100">
                <span className="font-medium">marketing@</span> 
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">Activo</span>
              </li>
              <li className="text-sm flex justify-between items-center py-2 border-b border-zinc-100">
                <span className="font-medium">ventas@</span> 
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded">Activo</span>
              </li>
            </ul>
            <button className="text-sm text-[#A11126] font-medium hover:underline">+ Añadir Alias</button>
          </div>

          {/* Módulo E-Commerce (Futuro) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 bg-zinc-50/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded-md">Módulo en Desarrollo</div>
            <div className="flex items-center justify-between mb-4 mt-2">
              <h3 className="font-bold text-zinc-500">E-Commerce</h3>
              <ShoppingBag className="w-5 h-5 text-zinc-300" />
            </div>
            <p className="text-sm text-zinc-500 mb-6 font-medium">
              Gestión de Productos, Categorías (Café, Máquinas, Combos) y pedidos.
            </p>
            <div className="h-24 border-2 border-dashed border-zinc-300 rounded-xl flex items-center justify-center bg-zinc-100">
              <span className="text-sm text-zinc-500 font-medium tracking-wider uppercase">Próximamente</span>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
