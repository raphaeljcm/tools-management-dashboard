import markerPng from 'src/assets/marker.png';
import L from 'leaflet';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/Sheet';
import { Row } from '@tanstack/react-table';
import { Task } from 'src/constants/schema';
import { formatDate, getStatusColor } from '../utils';
import { Status } from 'src/types';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Label } from './Label';
import { Textarea } from './Textarea';
import { Button } from './Button';

interface SheetDetailsProps<TData> {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  row: Row<TData>;
}

const getStatusLabel = (status: Status) => {
  switch (status) {
    case 'broken':
      return 'Em manutenção';
    case 'in use':
      return 'Em uso';
    case 'available':
      return 'Disponível';
    default:
      return 'Desconhecido';
  }
};

const happyMapIcon = L.icon({
  iconUrl: markerPng,

  iconSize: [25, 41],
  iconAnchor: [29, 41],
  popupAnchor: [-15, -60],
});

export function SheetDetails<TData>({
  isOpen,
  onOpenChange,
  row,
}: SheetDetailsProps<TData>) {
  const {
    name,
    latitute,
    longitude,
    lastMaintanance,
    nextMaintanance,
    status,
  } = row.original as Task;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-dark-blue">
            Detalhes da ferramenta
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-4 mt-3">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Ferramenta</Label>
            <p id="name">{name}</p>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="last-maintanance">Última manutenção</Label>
            <p id="last-maintanance">{formatDate(lastMaintanance)}</p>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="next-maintanance">Próxima manutenção</Label>
            <p id="next-maintanance">{formatDate(nextMaintanance)}</p>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="status">Status</Label>
            <div
              id="status"
              className={`px-3 py-2 font-medium rounded-full mt-1 w-fit ${getStatusColor(
                status as Status,
                'bg',
              )}`}
            >
              {getStatusLabel(status as Status)}
            </div>
          </div>

          <div className="h-[200px] w-full">
            <Label htmlFor="map">Localização</Label>
            <MapContainer
              style={{ width: '100%', height: '100%', marginTop: '1rem' }}
              center={[latitute, longitude]}
              zoom={15}
              id="map"
              dragging
              touchZoom
              zoomControl
              scrollWheelZoom
              doubleClickZoom
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker icon={happyMapIcon} position={[latitute, longitude]}>
                <Popup>{name}</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="grid w-full gap-1.5 mt-12">
            <Label htmlFor="obs">Observações</Label>
            <Textarea id="obs" placeholder="Escreva suas observações aqui" />
          </div>
        </div>

        <SheetFooter className="mt-4">
          <Button className="bg-dark-blue">Concluir</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
