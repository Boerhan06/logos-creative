// Konfigurasi WhatsApp Resmi Logos Creative
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285187884488";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo, Logos Creative! Aku mau ngobrol tentang kebutuhan brand-ku dan kemungkinan kerja sama dengan tim Logos. Boleh minta informasi lebih lanjut tentang layanan kalian?";

/**
 * Menghasilkan link WhatsApp lengkap dengan pesan otomatis resmi
 */
export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
