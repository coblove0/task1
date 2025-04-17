import { TProduct } from 'store/productStore';

export const INITIAL_STATE: TProduct[] = [
  { id: 1, name: 'Геродот', pic: '/images/gerodot.webp', inCart: false, status: null },
  { id: 2, name: 'Ностромо', pic: '/images/nostromo.webp', inCart: false, status: null },
  {
    id: 3,
    name: 'Неизвестный',
    pic: '/images/platinovaya-selezenka.webp',
    inCart: false,
    status: null,
  },
  { id: 4, name: 'Тысячелетний сокол', pic: '/images/sokol.webp', inCart: false, status: null },
  {
    id: 5,
    name: 'USS Enterprise',
    pic: '/images/uss-enterprise.webp',
    inCart: false,
    status: null,
  },
  { id: 6, name: 'Ямато', pic: '/images/yamato.webp', inCart: false, status: null },
];
