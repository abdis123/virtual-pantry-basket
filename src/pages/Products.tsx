import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  const { category } = useParams<{ category: string }>();
  
  const filteredProducts = category 
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase()) 
    : products;

  const title = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products';

  return (
    <div className='container mx-auto py-12 px-4'>
      <h1 className='text-4xl font-bold text-center mb-8'>{title}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}