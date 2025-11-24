import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ShoppingBag, Shirt, Coffee, Ticket } from 'lucide-react';

export function Shop() {
    const products = [
        {
            id: 1,
            name: 'Pull de Promo 2025',
            price: 35.00,
            image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Vêtements',
            customizable: true,
            icon: Shirt
        },
        {
            id: 2,
            name: 'Mug BDE',
            price: 12.00,
            image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Goodies',
            customizable: false,
            icon: Coffee
        },
        {
            id: 3,
            name: 'Ticket Gala Hiver',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Billetterie',
            customizable: false,
            icon: Ticket
        }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Boutique & Merch</h1>
                <p className="text-slate-500 dark:text-slate-400">Commandez vos goodies et pulls de promo.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.id} className="overflow-hidden flex flex-col">
                        <div className="h-48 relative bg-slate-100 dark:bg-slate-800">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full text-indigo-600 shadow-sm">
                                <product.icon size={18} />
                            </div>
                        </div>
                        <CardContent className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">{product.category}</span>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50">{product.name}</h3>
                                </div>
                                <span className="font-bold text-lg">{product.price.toFixed(2)}€</span>
                            </div>

                            {product.customizable && (
                                <div className="mt-4 space-y-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-800">
                                    <p className="text-xs font-semibold text-slate-500 uppercase">Personnalisation</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <select className="h-9 rounded-md border border-slate-200 bg-white px-2 text-sm dark:border-slate-700 dark:bg-slate-900">
                                            <option>Taille S</option>
                                            <option>Taille M</option>
                                            <option>Taille L</option>
                                            <option>Taille XL</option>
                                        </select>
                                        <Input placeholder="Surnom (Dos)" className="h-9" />
                                    </div>
                                </div>
                            )}

                            <div className="mt-auto pt-4">
                                <Button className="w-full gap-2">
                                    <ShoppingBag size={18} />
                                    Ajouter au panier
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
