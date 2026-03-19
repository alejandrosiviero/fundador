"use client";
import { Users } from "lucide-react";

export function LeadList({ leads }: { leads: any[] }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-zinc-800">Últimos Leads (D1)</h3>
        <Users className="w-5 h-5 text-zinc-400" />
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {leads.length === 0 ? (
          <p className="text-zinc-500 text-sm">No hay leads todavía.</p>
        ) : (
          leads.map((lead) => (
            <div key={lead.id} className="flex flex-col py-3 border-b border-zinc-100 gap-1 last:border-0">
              <div className="flex justify-between items-start">
                <span className="font-medium text-sm text-zinc-900">{lead.name || "Sin nombre"}</span>
                <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  {lead.interest || lead.event_type || 'Contacto'}
                </span>
              </div>
              <div className="text-xs text-zinc-500 flex flex-col gap-0.5 mt-1">
                <span>{lead.email} {lead.phone ? `| ${lead.phone}` : ''}</span>
                {lead.message && <p className="mt-1 italic border-l-2 border-zinc-200 pl-2">"{lead.message}"</p>}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
