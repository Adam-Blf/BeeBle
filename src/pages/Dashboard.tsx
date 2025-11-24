import { BarChart3, Users, Ticket, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/dashboard/StatsCard';
import { Card } from '../components/ui/Card';

export default function Dashboard() {
    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatsCard
                    title="Chiffre d'affaires"
                    value="12,450 €"
                    icon={BarChart3}
                    trend="+15% vs last month"
                    trendUp={true}
                />
                <StatsCard
                    title="Nouveaux Adhérents"
                    value="345"
                    icon={Users}
                    trend="+8% vs last month"
                    trendUp={true}
                />
                <StatsCard
                    title="Billets WEI vendus"
                    value="189"
                    icon={Ticket}
                    trend="85% sold out"
                    trendUp={true}
                />
            </div>

            {/* Main Content Area - Placeholder for charts/tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 h-80 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-light-text dark:text-dark-text">Revenue Overview</h3>
                        <button className="p-2 bg-light-primary dark:bg-dark-primary rounded-lg text-brand-DEFAULT">
                            <BarChart3 size={20} />
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-light-primary/50 dark:bg-dark-primary/50 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                        <p className="text-gray-400">Chart Visualization Placeholder</p>
                    </div>
                </Card>

                <Card className="p-6 h-80 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-light-text dark:text-dark-text">Recent Activity</h3>
                        <button className="p-2 bg-light-primary dark:bg-dark-primary rounded-lg text-brand-DEFAULT">
                            <TrendingUp size={20} />
                        </button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-light-primary dark:hover:bg-dark-primary transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-brand-DEFAULT/10 flex items-center justify-center text-brand-DEFAULT font-bold">
                                    Tx
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-light-text dark:text-dark-text">New Ticket Sale</p>
                                    <p className="text-xs text-gray-500">2 minutes ago</p>
                                </div>
                                <div className="ml-auto font-bold text-green-500">+45€</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
