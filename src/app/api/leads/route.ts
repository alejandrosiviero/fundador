import { NextResponse } from 'next/server';
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { eventType?: string; sourceUrl?: string };
    const { eventType, sourceUrl } = body;

    if (!eventType) {
      return NextResponse.json({ error: 'Falta parámetro eventType' }, { status: 400 });
    }

    const { env } = getRequestContext();
    await env.DB.prepare(
      'INSERT INTO leads (id, name, email, interest, message, status) VALUES (?, ?, ?, ?, ?, ?)'
    )
      .bind(
        crypto.randomUUID(),
        'WhatsApp Contacto',
        sourceUrl || 'landing',
        eventType,
        'Usuario hizo click en el botón de WhatsApp',
        'contacted'
      )
      .run();

    return NextResponse.json({ success: true, message: 'Lead registrado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error registrando el lead:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
