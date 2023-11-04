import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Status } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusColor = (status: Status, variant: 'bg' | 'text') => {
  switch(status) {
    case 'broken':
      return `${variant}-red-500`
    case 'available':
      return `${variant}-green-500`
    case 'in use':
      return `${variant}-yellow-500`
    default:
      return `${variant}-gray-500`
  }
}

export const formatDate = (date: string) => {
  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return dateFormatter.format(new Date(date))
}