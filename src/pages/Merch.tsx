import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ShoppingBag, Shirt, Coffee, Package, Sparkles } from 'lucide-react';

export function Merch() {
    const merchProducts = [
        {
            id: 1,
            name: 'Pull de Promo 2025',
            price: 35.00,
            image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Vêtements',
            customizable: true,
            icon: Shirt,
            badge: 'Personnalisable',
            colors: ['Noir', 'Marine', 'Bordeaux']
        },
        {
            id: 2,
            name: 'Hoodie BDE Premium',
            price: 45.00,
            image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Vêtements',
            customizable: true,
            icon: Shirt,
            badge: 'Nouveau',
            colors: ['Gris', 'Noir', 'Blanc']
        },
        {
            id: 3,
            name: 'Mug BDE',
            price: 12.00,
            image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Goodies',
            customizable: false,
            icon: Coffee,
            badge: null,
            colors: []
        },
        {
            id: 4,
            name: 'Tote Bag Écologique',
            price: 15.00,
            image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Goodies',
            customizable: false,
            icon: Package,
            badge: 'Éco-responsable',
            colors: []
        },
        {
            id: 5,
            name: 'Casquette BDE',
            price: 18.00,
            image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Accessoires',
            customizable: false,
            icon: Sparkles,
            badge: null,
            colors: []
        },
        {
            id: 6,
            name: 'Pack Goodies Complet',
            price: 55.00,
            image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Packs',
            customizable: false,
            icon: Package,
            badge: 'Promo -20%',
            colors: []
        }
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Merch & Goodies</h1>
                <p className="text-slate-500 dark:text-slate-400">Représentez fièrement votre association avec notre collection exclusive.</p>
            </div>

            {/* Featured Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 text-white shadow-xl">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={24} />
                        <span className="text-sm font-semibold uppercase tracking-wider">Nouveauté</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Collection Promo 2025</h2>
                    <p className="text-indigo-100 mb-4 max-w-lg">Commandez votre pull personnalisé avec votre surnom ! Livraison avant le WEI.</p>
                    <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-indigo-50">
                        Découvrir la collection
                    </Button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Products Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {merchProducts.map((product) => (
                    <Card
                        key={product.id}
                        className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="h-56 relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {product.badge && (
                                <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    {product.badge}
                                </div>
                            )}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full text-indigo-600 shadow-sm">
                                <product.icon size={18} />
                            </div>
                        </div>

                        <CardContent className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                    <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider">{product.category}</span>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mt-1">{product.name}</h3>
                                </div>
                                <span className="font-bold text-xl text-indigo-600">{product.price.toFixed(2)}€</span>
                            </div>

                            {product.customizable && (
                                <div className="mt-3 space-y-3 p-4 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-800/50 dark:to-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase flex items-center gap-2">
                                        <Sparkles size={14} className="text-indigo-600" />
                                        Personnalisation
                                    </p>

                                    {product.colors.length > 0 && (
                                        <div>
                                            <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Couleur</label>
                                            <select className="w-full h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 transition-all">
                                                {product.colors.map((color) => (
                                                    <option key={color}>{color}</option>
                                                ))}
                                            </select>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Taille</label>
                                            <select className="w-full h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm dark:border-slate-700 dark:bg-slate-900 focus:ring-2 focus:ring-indigo-500 transition-all">
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                                <option>XXL</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Surnom (Dos)</label>
                                            <Input placeholder="Ex: Alex" className="h-9 text-sm" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="mt-auto pt-4">
                                <Button className="w-full gap-2 group-hover:bg-indigo-700 transition-colors">
                                    <ShoppingBag size={18} />
                                    Ajouter au panier
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Info Section */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-1 text-slate-900 dark:text-slate-50">🚚 Livraison Gratuite</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Dès 50€ d'achat sur le campus</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-1 text-slate-900 dark:text-slate-50">✨ Qualité Premium</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Textiles certifiés et durables</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-1 text-slate-900 dark:text-slate-50">💳 Paiement 3x</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Sans frais dès 30€</p>
                </div>
            </div>
        </div>
    );
}
