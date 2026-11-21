import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Semua kolom (Nama, Email, dan Pesan) wajib diisi!' },
        { status: 400 }
      );
    }
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 4. Menyimpan data ke dalam tabel 'messages'
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      console.error('Error Supabase:', error);
      return NextResponse.json(
        { error: 'Gagal menyimpan pesan ke database Supabase.' },
        { status: 500 }
      );
    }

    // 5. Mengirim balasan sukses ke frontend
    return NextResponse.json(
      { message: 'Pesan berhasil terkirim dan tersimpan!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server.' },
      { status: 500 }
    );
  }
}
