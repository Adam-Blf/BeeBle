
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { QrCode, ShieldCheck, Mail, Phone } from 'lucide-react';

export function Members() {
    const member = {
        name: 'Alexandre Dupont',
        role: 'Vice-Président',
        promo: 'Promo 2026',
        email: 'alex.dupont@school.edu',
        phone: '06 12 34 56 78',
        status: 'Cotisant',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Ma Carte Adhérent</h1>
                <p className="text-slate-500 dark:text-slate-400">Votre pass numérique pour tous les événements.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Digital ID Card */}
                <div className="w-full md:w-96 perspective-1000">
                    <div className="relative w-full aspect-[1.586] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-6 flex flex-col justify-between">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                        <div className="relative z-10 flex justify-between items-start">
                            <div className="flex items-center gap-2 font-bold text-lg">
                                <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">
                                    B
                                </div>
                                <span>BeeBle ID</span>
                            </div>
                            <div className="bg-white/20 backdrop-blur px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                                {member.promo}
                            </div>
                        </div>

                        <div className="relative z-10 flex items-center gap-4 mt-4">
                            <img
                                src={member.photo}
                                alt="Profile"
                                className="w-20 h-20 rounded-xl border-2 border-white/30 object-cover shadow-lg"
                            />
                            <div>
                                <h2 className="text-xl font-bold">{member.name}</h2>
                                <p className="text-indigo-200 font-medium">{member.role}</p>
                                <div className="flex items-center gap-1 mt-1 text-xs bg-emerald-500/20 text-emerald-100 px-2 py-0.5 rounded-full w-fit border border-emerald-500/30">
                                    <ShieldCheck size={12} />
                                    {member.status}
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto pt-4 flex justify-between items-end">
                            <div className="text-xs text-indigo-200 space-y-0.5">
                                <p>N° Adhérent: <span className="text-white font-mono">8492-3921</span></p>
                                <p>Valide jusqu'au: <span className="text-white">31/08/2026</span></p>
                            </div>
                            <div className="bg-white p-1.5 rounded-lg">
                                <QrCode className="text-slate-900" size={48} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Column */}
                <div className="flex-1 space-y-6 w-full">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <h3 className="font-semibold text-lg">Informations Personnelles</h3>
                            <div className="grid gap-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <Mail className="text-slate-400" size={20} />
                                    <div>
                                        <p className="text-xs text-slate-500">Email Universitaire</p>
                                        <p className="font-medium">{member.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                    <Phone className="text-slate-400" size={20} />
                                    <div>
                                        <p className="text-xs text-slate-500">Téléphone</p>
                                        <p className="font-medium">{member.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-2">
                                Modifier mes informations
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
