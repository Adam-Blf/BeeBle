import { Search, Filter } from 'lucide-react';
import { ProductCard } from '../components/shop/ProductCard';

const products = [
    {
        id: 1,
        name: 'Pull de Promo 2024',
        price: '35.00 €',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: ['S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'T-Shirt BDE',
        price: '15.00 €',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: 3,
        name: 'Casquette Logo',
        price: '20.00 €',
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: ['TU']
    },
    {
        id: 4,
        name: 'Gourde Métal',
        price: '12.00 €',
        image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: ['50cl', '1L']
    },
    {
        id: 5,
        name: 'Tote Bag',
        price: '8.00 €',
        image: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: ['TU']
    },
    {
        id: 6,
        name: 'Stickers Pack',
        price: '5.00 €',
        image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        variants: ['Pack 1', 'Pack 2']
    }
];

export default function Shop() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Boutique BDE</h1>
                    <p className="text-gray-500 dark:text-gray-400">Commandez vos goodies et pulls de promo</p>
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Rechercher un produit..."
                            className="pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-dark-card border border-transparent focus:border-brand-DEFAULT outline-none text-sm text-light-text dark:text-dark-text shadow-sm"
                        />
                    </div>
                    <button className="p-2 bg-white dark:bg-dark-card rounded-xl text-gray-500 hover:text-brand-DEFAULT shadow-sm transition-colors">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}
