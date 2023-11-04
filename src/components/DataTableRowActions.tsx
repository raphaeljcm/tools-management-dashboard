import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { Button } from "./Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./DropdownMenu"
import { useState } from "react"
import { SheetDetails } from "./SheetDetails"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={() => setIsDetailsModalOpen(true)}>Detalhes</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    
      <SheetDetails isOpen={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen} row={row} />
    </>
  )
}