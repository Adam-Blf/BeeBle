import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar, MapPin, Bus, Utensils, Shirt, CreditCard, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';

export function Ticketing() {
    const [paymentPlan, setPaymentPlan] = useState<'full' | '3x'>('full');
    const [busOption, setBusOption] = useState<'A' | 'B' | null>(null);

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Billetterie & Événements</h1>
                <p className="text-slate-500 dark:text-slate-400">Gérez vos inscriptions aux événements majeurs.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Event Details Column */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="overflow-hidden">
                        <div className="h-48 bg-indigo-600 relative">
                            <img
                                src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="WEI Event"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                Ouvert
                            </div>
                        </div>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold mb-2">WEI 2025 - Intégration</h2>
                            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-indigo-500" size={18} />
                                    <span>24 - 26 Septembre 2025</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-indigo-500" size={18} />
                                    <span>Camping des Flots Bleus, Landes</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-sm font-medium text-slate-500">Prix Adhérent</span>
                                    <span className="text-2xl font-bold text-indigo-600">145€</span>
                                </div>
                                <p className="text-xs text-slate-400 text-right">ou 3x 48.33€</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Formulaire d'inscription</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">

                            {/* Payment Options */}
                            <section>
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2">
                                    <CreditCard size={16} />
                                    Option de Paiement
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div
                                        onClick={() => setPaymentPlan('full')}
                                        className={clsx(
                                            "cursor-pointer rounded-xl border p-4 transition-all hover:border-indigo-300 dark:hover:border-indigo-700",
                                            paymentPlan === 'full'
                                                ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-600"
                                                : "border-slate-200 dark:border-slate-800"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-semibold">Comptant</span>
                                            {paymentPlan === 'full' && <CheckCircle2 size={18} className="text-indigo-600" />}
                                        </div>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">145€</p>
                                        <p className="text-xs text-slate-500 mt-1">Paiement unique immédiat</p>
                                    </div>

                                    <div
                                        onClick={() => setPaymentPlan('3x')}
                                        className={clsx(
                                            "cursor-pointer rounded-xl border p-4 transition-all hover:border-indigo-300 dark:hover:border-indigo-700",
                                            paymentPlan === '3x'
                                                ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-600"
                                                : "border-slate-200 dark:border-slate-800"
                                        )}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="font-semibold">3x Sans Frais</span>
                                            {paymentPlan === '3x' && <CheckCircle2 size={18} className="text-indigo-600" />}
                                        </div>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">48.33€ <span className="text-sm font-normal text-slate-500">/mois</span></p>
                                        <p className="text-xs text-slate-500 mt-1">Premier prélèvement aujourd'hui</p>
                                    </div>
                                </div>
                            </section>

                            {/* Transport */}
                            <section>
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-4 flex items-center gap-2">
                                    <Bus size={16} />
                                    Transport (Bus)
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {['A', 'B'].map((bus) => (
                                        <button
                                            key={bus}
                                            onClick={() => setBusOption(bus as 'A' | 'B')}
                                            className={clsx(
                                                "flex items-center justify-between p-4 rounded-lg border text-left transition-all",
                                                busOption === bus
                                                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                                                    : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800"
                                            )}
                                        >
                                            <div>
                                                <span className="font-medium">Bus {bus} - Ambiance {bus === 'A' ? 'Chill' : 'Fiesta'}</span>
                                                <p className="text-xs text-slate-500 mt-0.5">Départ 14h00 - Parvis</p>
                                            </div>
                                            {busOption === bus && <CheckCircle2 size={18} />}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Preferences */}
                            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-2 flex items-center gap-2">
                                        <Utensils size={16} />
                                        Régime Alimentaire
                                    </label>
                                    <select className="w-full h-10 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950">
                                        <option>Standard</option>
                                        <option>Végétarien</option>
                                        <option>Sans Porc</option>
                                        <option>Sans Gluten</option>
                                        <option>Halal</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-slate-900 dark:text-slate-200 mb-2 flex items-center gap-2">
                                        <Shirt size={16} />
                                        Taille T-shirt
                                    </label>
                                    <select className="w-full h-10 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950">
                                        <option>XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>
                            </section>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <Button size="lg" className="w-full">
                                    Valider et Payer {paymentPlan === 'full' ? '145.00€' : '48.33€'}
                                </Button>
                                <p className="text-center text-xs text-slate-400 mt-3">
                                    Paiement sécurisé via Stripe. En validant, vous acceptez le règlement intérieur du WEI.
                                </p>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
