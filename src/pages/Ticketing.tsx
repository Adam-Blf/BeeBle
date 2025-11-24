import { useState } from 'react';
import { Calendar, MapPin, Plus, Search, Filter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { PaymentOption } from '../components/ticketing/PaymentOption';
import { cn } from '../lib/utils';

const participants = [
    { id: 1, name: 'Alice Dupont', email: 'alice@example.com', status: 'Payé', amount: '150€' },
    { id: 2, name: 'Bob Martin', email: 'bob@example.com', status: 'En attente', amount: '50€' },
    { id: 3, name: 'Charlie Durand', email: 'charlie@example.com', status: 'Caution reçue', amount: '150€' },
    { id: 4, name: 'David Bernard', email: 'david@example.com', status: 'Payé', amount: '150€' },
    { id: 5, name: 'Eve Thomas', email: 'eve@example.com', status: 'En attente', amount: '50€' },
];

export default function Ticketing() {
    const [paymentType, setPaymentType] = useState<'cash' | 'installments'>('cash');

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Billetterie WEI 2024</h1>
                    <p className="text-gray-500 dark:text-gray-400">Gérez vos événements et vos participants</p>
                </div>
                <button className="flex items-center gap-2 bg-brand-DEFAULT hover:bg-brand-DEFAULT/90 text-white px-4 py-2 rounded-xl transition-colors">
                    <Plus size={20} />
                    <span>Créer un événement</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Event Details & Payment Options */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-6">Configuration de l'événement</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nom de l'événement</label>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-light-primary dark:bg-dark-primary border border-transparent focus-within:border-brand-DEFAULT transition-colors">
                                    <Calendar size={18} className="text-gray-400" />
                                    <input type="text" defaultValue="Week-end d'Intégration 2024" className="bg-transparent border-none outline-none w-full text-light-text dark:text-dark-text" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Lieu</label>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-light-primary dark:bg-dark-primary border border-transparent focus-within:border-brand-DEFAULT transition-colors">
                                    <MapPin size={18} className="text-gray-400" />
                                    <input type="text" defaultValue="Camping des Flots Bleus" className="bg-transparent border-none outline-none w-full text-light-text dark:text-dark-text" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Options de paiement proposées</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <PaymentOption
                                    type="cash"
                                    selected={paymentType === 'cash'}
                                    onClick={() => setPaymentType('cash')}
                                />
                                <PaymentOption
                                    type="installments"
                                    selected={paymentType === 'installments'}
                                    onClick={() => setPaymentType('installments')}
                                />
                            </div>
                        </div>
                    </Card>

                    {/* Participants List */}
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-light-text dark:text-dark-text">Participants ({participants.length})</h3>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-light-primary dark:hover:bg-dark-primary rounded-lg text-gray-500 transition-colors">
                                    <Search size={20} />
                                </button>
                                <button className="p-2 hover:bg-light-primary dark:hover:bg-dark-primary rounded-lg text-gray-500 transition-colors">
                                    <Filter size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                                        <th className="pb-3 font-medium">Nom</th>
                                        <th className="pb-3 font-medium">Email</th>
                                        <th className="pb-3 font-medium">Montant</th>
                                        <th className="pb-3 font-medium">Status</th>
                                        <th className="pb-3 font-medium"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                    {participants.map((participant) => (
                                        <tr key={participant.id} className="group hover:bg-light-primary/50 dark:hover:bg-dark-primary/50 transition-colors">
                                            <td className="py-3 text-light-text dark:text-dark-text font-medium">{participant.name}</td>
                                            <td className="py-3 text-gray-500">{participant.email}</td>
                                            <td className="py-3 text-light-text dark:text-dark-text">{participant.amount}</td>
                                            <td className="py-3">
                                                <span className={cn(
                                                    "px-2 py-1 rounded-full text-xs font-medium",
                                                    participant.status === 'Payé' && "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
                                                    participant.status === 'En attente' && "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
                                                    participant.status === 'Caution reçue' && "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
                                                )}>
                                                    {participant.status}
                                                </span>
                                            </td>
                                            <td className="py-3 text-right">
                                                <button className="text-gray-400 hover:text-brand-DEFAULT opacity-0 group-hover:opacity-100 transition-all">
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                    <Card className="p-6 bg-brand-DEFAULT text-white">
                        <h3 className="text-lg font-bold mb-2">Total Collecté</h3>
                        <p className="text-3xl font-bold mb-4">12,450 €</p>
                        <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-sm opacity-80">75% de l'objectif atteint</p>
                    </Card>

                    <Card className="p-6">
                        <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Répartition</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-gray-500">Payé</span>
                                </div>
                                <span className="font-bold text-light-text dark:text-dark-text">65%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                                    <span className="text-sm text-gray-500">En attente</span>
                                </div>
                                <span className="font-bold text-light-text dark:text-dark-text">25%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-sm text-gray-500">Caution</span>
                                </div>
                                <span className="font-bold text-light-text dark:text-dark-text">10%</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
