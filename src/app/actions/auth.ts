"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const user = formData.get('username') as string;
  const pass = formData.get('password') as string;

  if (user === 'alejandro' && pass === 'eitit7oJ3ohMeiy6') {
    const cookieStore = await cookies();
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
    
    return { success: true };
  }

  return { success: false, error: 'Credenciales inválidas' };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  redirect('/login');
}
