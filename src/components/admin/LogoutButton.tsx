"use client";

import { LogOut } from "lucide-react";
import { logout } from "@/app/actions/auth";

export function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="flex w-full items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Cerrar Sesión</span>
      </button>
    </form>
  );
}
