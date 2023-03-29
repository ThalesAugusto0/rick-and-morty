import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: Date, pattern = "P"): string {
  return format(date, pattern, { locale: ptBR });
}
