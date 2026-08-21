import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const featuredProducts = products.slice(0, 4);

export default function Home() {
  return (
    <div>
      <section className="relative h-[500px]">
        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7c54f1e6-e19c-4304-8f32-640e540ae37a/sokofresh-hero-du8lmur-1763992115230.webp" alt="SokoFresh Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fresh Groceries, Delivered Fast</h1>
          <p className="text-lg md:text-xl max-w-2xl">Your one-stop shop for the freshest produce, dairy, and more. Quality you can taste.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}