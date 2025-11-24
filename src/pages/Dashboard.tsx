import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { ArrowUpRight, ArrowDownRight, Users, Ticket, Wallet } from 'lucide-react';

export function Dashboard() {
    const kpiData = [
        {
            title: 'Solde Total',
            value: '24 500,00 €',
            change: '+12.5%',
            trend: 'up',
            icon: Wallet,
            color: 'text-emerald-600',
            bg: 'bg-emerald-100 dark:bg-emerald-900/20',
        },
        {
            title: 'Adhérents',
            value: '1,240',
            change: '+4.3%',
            trend: 'up',
            icon: Users,
            color: 'text-indigo-600',
            bg: 'bg-indigo-100 dark:bg-indigo-900/20',
        },
        {
            title: 'Billets WEI',
            value: '85%',
            change: '-2.1%',
            trend: 'down',
            icon: Ticket,
            color: 'text-amber-600',
            bg: 'bg-amber-100 dark:bg-amber-900/20',
        },
    ];

    const chartData = [
        { month: 'Sep', income: 4500, expense: 2000 },
        { month: 'Oct', income: 3200, expense: 1500 },
        { month: 'Nov', income: 6000, expense: 4000 },
        { month: 'Déc', income: 2500, expense: 1000 },
        { month: 'Jan', income: 3000, expense: 2800 },
        { month: 'Fév', income: 4800, expense: 1200 },
    ];

    const maxVal = Math.max(...chartData.map(d => Math.max(d.income, d.expense)));

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Vue d'ensemble</h1>
                <p className="text-slate-500 dark:text-slate-400">Bienvenue sur le tableau de bord de votre association.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {kpiData.map((kpi, index) => (
                    <Card key={index}>
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.title}</p>
                                <h3 className="text-2xl font-bold mt-1">{kpi.value}</h3>
                                <div className={`flex items-center mt-1 text-xs font-medium ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                    {kpi.trend === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                                    {kpi.change}
                                    <span className="text-slate-400 ml-1 font-normal">vs mois dernier</span>
                                </div>
                            </div>
                            <div className={`p-3 rounded-xl ${kpi.bg}`}>
                                <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Revenue Chart */}
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Revenus vs Dépenses</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px] w-full flex items-end justify-between gap-2 sm:gap-4 mt-4">
                        {chartData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                                <div className="w-full flex justify-center gap-1 h-full items-end">
                                    {/* Income Bar */}
                                    <div
                                        className="w-full max-w-[24px] bg-indigo-500 rounded-t-sm transition-all hover:bg-indigo-600 relative group/bar"
                                        style={{ height: `${(data.income / maxVal) * 100}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            {data.income}€
                                        </div>
                                    </div>
                                    {/* Expense Bar */}
                                    <div
                                        className="w-full max-w-[24px] bg-slate-300 dark:bg-slate-700 rounded-t-sm transition-all hover:bg-slate-400 dark:hover:bg-slate-600 relative group/bar"
                                        style={{ height: `${(data.expense / maxVal) * 100}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            {data.expense}€
                                        </div>
                                    </div>
                                </div>
                                <span className="text-xs text-slate-500 font-medium">{data.month}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6 mt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-indigo-500" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Revenus</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="text-sm text-slate-600 dark:text-slate-400">Dépenses</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
