import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon
} from "@radix-ui/react-icons"

export const statuses = [
  {
    value: "broken",
    label: "Danificado",
    icon: ExclamationTriangleIcon,
  },
  {
    value: "available",
    label: "Disponível",
    icon: CheckCircledIcon ,
  },
  {
    value: "in use",
    label: "Em uso",
    icon: CrossCircledIcon,
  }
]