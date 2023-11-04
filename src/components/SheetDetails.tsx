import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/Sheet'
import { Row } from "@tanstack/react-table"
import { Task } from 'src/constants/schema'
import { formatDate, getStatusColor } from '../utils'
import { Status } from 'src/types'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface SheetDetailsProps<TData> {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  row: Row<TData>
}

const getStatusLabel = (status: Status) => {
  switch (status) {
    case 'broken':
      return 'Em manutenção'
    case 'in use':
      return 'Em uso'
    case 'available':
      return 'Disponível'
    default:
      return 'Desconhecido'
  }
}

export function SheetDetails<TData>({ isOpen, onOpenChange, row }: SheetDetailsProps<TData>) {
  const { name, latitute, longitude, lastMaintanance, nextMaintanance, status } = row.original as Task

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Detalhes da ferramenta</SheetTitle>

          <div>
            <label htmlFor="">Ferramenta</label>
            <p>{name}</p>

            <label htmlFor="">Última manutenção</label>
            <p>{formatDate(lastMaintanance)}</p>

            <label htmlFor="">Próxima manutenção</label>
            <p>{formatDate(nextMaintanance)}</p>

            <label htmlFor="">Status</label>
            <div className={`px-3 py-2 font-medium rounded-full w-fit ${getStatusColor(status as Status, 'bg')}`}>
              {getStatusLabel(status as Status)}
            </div>


            <div className='h-[200px] w-full'>
              <MapContainer
                style={{ width: '100%', height: '100%' }}
                center={[latitute, longitude]}
                zoom={15} dragging
                touchZoom
                zoomControl
                scrollWheelZoom
                doubleClickZoom
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-19.9059017, -43.9661412]}>
                  <Popup>
                    Newton Paiva
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}