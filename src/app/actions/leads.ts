"use server";

import { getRequestContext } from "@cloudflare/next-on-pages";
import { Resend } from "resend";

export async function createLead(formData: FormData) {
  try {
    const { env } = getRequestContext();
    
    // Configuración de Resend (fallback local para evitar fallos si no hay key)
    const resendApiKey = env.RESEND_API_KEY || "re_test_dummy";
    const resend = new Resend(resendApiKey);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;

    const id = crypto.randomUUID();

    // 1. Guardar en Cloudflare D1
    await env.DB.prepare(
      `INSERT INTO leads (id, name, email, phone, interest, message, status) VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(id, name, email, phone, interest, message, 'new')
      .run();

    // 2. Enviar Correo con Resend
    try {
      if (!resendApiKey.startsWith("re_test")) {
        await resend.emails.send({
          from: 'Fundador <onboarding@resend.dev>',
          to: ['hola@fundador.uy'],
          subject: `Nuevo Lead: ${name} interesado en ${interest}`,
          html: `
            <h3>Nuevo contacto desde la Landing Page</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Interés:</strong> ${interest}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
          `
        });
      }
    } catch (e) {
      console.error("Error enviando email con Resend:", e);
      // No bloqueamos el flujo principal si el correo falla
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating lead:", error);
    return { success: false, error: "Failed to create lead" };
  }
}

export async function getLeads() {
  try {
    const { env } = getRequestContext();
    const { results } = await env.DB.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
    return { success: true, leads: results };
  } catch (error) {
    console.error("Error fetching leads:", error);
    return { success: false, leads: [] };
  }
}

export async function updateLeadStatus(id: string, status: string) {
  try {
    const { env } = getRequestContext();
    await env.DB.prepare("UPDATE leads SET status = ? WHERE id = ?").bind(status, id).run();
    return { success: true };
  } catch (error) {
    console.error("Error updating lead status:", error);
    return { success: false };
  }
}
