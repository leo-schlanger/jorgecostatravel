import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_URL = "https://wa.me/351931362788"
export const WHATSAPP_MSG = (msg: string) =>
  `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`
export const INSTAGRAM_URL = "https://www.instagram.com/jorgepessoacostatravel/"
export const PHONE = "+351931362788"
export const PHONE_DISPLAY = "+351 931 362 788"
