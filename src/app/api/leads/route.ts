import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { eventType, sourceUrl } = body;

    if (!eventType) {
      return NextResponse.json({ error: 'Falta parámetro eventType' }, { status: 400 });
    }

    // Aquí iría la lógica de integración con Cloudflare D1
    // Por ejemplo, usando variables de entorno pasadas por @cloudflare/next-on-pages
    // const env = getRequestContext().env;
    // await env.DB.prepare('INSERT INTO leads (id, event_type, source_url) VALUES (?, ?, ?)')
    //   .bind(crypto.randomUUID(), eventType, sourceUrl)
    //   .run();

    console.log(`[D1 Conceptual] Lead guardado: ${eventType} desde ${sourceUrl}`);

    return NextResponse.json({ success: true, message: 'Lead registrado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error registrando el lead:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
