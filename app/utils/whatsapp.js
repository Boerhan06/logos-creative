// Konfigurasi WhatsApp Resmi Logos Creative
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6289699881323";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo Logos Creative! Saya tertarik untuk diskusi dan konsultasi mengenai kebutuhan brand saya. Punya ide seru yang ingin saya wujudkan bareng tim Logos. Boleh info lebih lanjut?";

/**
 * Menghasilkan link WhatsApp lengkap dengan pesan otomatis resmi
 */
export function getWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
