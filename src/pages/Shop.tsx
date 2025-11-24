import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Ticket, Calendar, MapPin, Users, Sparkles } from 'lucide-react';

export function Shop() {
    const ticketProducts = [
        {
            id: 1,
            name: 'Ticket Gala Hiver 2025',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1514525253440-b393452e3383?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Événement',
            date: '15 Décembre 2025',
            location: 'Salle des Fêtes',
            capacity: '200 places',
            available: 45,
            badge: 'Dernières places',
            icon: Ticket
        },
        {
            id: 2,
            name: 'WEI 2025 - Weekend Intégration',
            price: 145.00,
            image: 'https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Événement',
            date: '24-26 Septembre 2025',
            location: 'Camping des Flots Bleus',
            capacity: '300 places',
            available: 120,
            badge: 'Paiement 3x disponible',
            icon: Ticket
        },
        {
            id: 3,
            name: 'Soirée de Rentrée',
            price: 15.00,
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Soirée',
            date: '10 Septembre 2025',
            location: 'Campus Bar',
            capacity: '150 places',
            available: 80,
            badge: 'Ouvert',
            icon: Ticket
        },
        {
            id: 4,
            name: 'Tournoi Sportif Inter-Écoles',
            price: 10.00,
            image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Sport',
            date: '5 Octobre 2025',
            location: 'Gymnase Principal',
            capacity: '100 équipes',
            available: 35,
            badge: null,
            icon: Ticket
        },
        {
            id: 5,
            name: 'Concert de Printemps',
            price: 20.00,
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Concert',
            date: '20 Mars 2026',
            location: 'Amphithéâtre',
            capacity: '400 places',
            available: 250,
            badge: 'Bientôt',
            icon: Ticket
        },
        {
            id: 6,
            name: 'Pack Événements Annuel',
            price: 180.00,
            image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Pack',
            date: 'Toute l\'année',
            location: 'Tous les événements',
            capacity: 'Illimité',
            available: 50,
            badge: 'Économisez 30%',
            icon: Sparkles
        }
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Billetterie & Événements</h1>
                <p className="text-slate-500 dark:text-slate-400">Réservez vos places pour tous les événements de l'association.</p>
            </div>

            {/* Featured Event Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white shadow-xl">
                <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-2 mb-2">
                        <Ticket size={24} />
                        <span className="text-sm font-semibold uppercase tracking-wider">À ne pas manquer</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-3">WEI 2025 - Weekend Intégration</h2>
                    <p className="text-violet-100 mb-4">3 jours inoubliables aux Landes ! Transport, hébergement, activités et soirées inclus. Paiement en 3x sans frais disponible.</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span className="text-sm">24-26 Sept 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span className="text-sm">Camping des Flots Bleus</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users size={18} />
                            <span className="text-sm">120 places restantes</span>
                        </div>
                    </div>
                    <Button variant="secondary" className="bg-white text-violet-600 hover:bg-violet-50">
                        Réserver maintenant - 145€
                    </Button>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            </div>

            {/* Tickets Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ticketProducts.map((product) => (
                    <Card
                        key={product.id}
                        className="group overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="h-48 relative bg-slate-100 dark:bg-slate-800 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {product.badge && (
                                <div className="absolute top-3 left-3 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    {product.badge}
                                </div>
                            )}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full text-violet-600 shadow-sm">
                                <product.icon size={18} />
                            </div>
                        </div>

                        <CardContent className="p-5 flex-1 flex flex-col">
                            <div className="mb-3">
                                <span className="text-xs font-medium text-violet-600 uppercase tracking-wider">{product.category}</span>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mt-1 mb-3">{product.name}</h3>

                                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-violet-500" />
                                        <span>{product.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-violet-500" />
                                        <span>{product.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} className="text-violet-500" />
                                        <span>{product.available} places disponibles</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-2xl font-bold text-violet-600">{product.price.toFixed(2)}€</span>
                                    {product.available < 50 && (
                                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">Places limitées</span>
                                    )}
                                </div>
                                <Button className="w-full gap-2 bg-violet-600 hover:bg-violet-700 transition-colors">
                                    <Ticket size={18} />
                                    Réserver
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Info Section */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-1 text-slate-900 dark:text-slate-50">🎫 Billets Électroniques</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Reçus instantanément par email</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-1 text-slate-900 dark:text-slate-50">💳 Paiement Sécurisé</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Paiement en 3x sans frais</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <h4 className="font-semibold mb-1 text-slate-900 dark:text-slate-50">🔄 Remboursement</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Jusqu'à 7 jours avant l'événement</p>
                </div>
            </div>
        </div>
    );
}
