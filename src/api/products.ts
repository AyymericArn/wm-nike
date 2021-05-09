// eslint-disable-next-line
import Product from '@/models/Product';

export function getProducts(): Promise<Product[]> {
  return import('@/assets/produits.json');
}
