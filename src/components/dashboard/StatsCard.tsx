import { type LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface StatsCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) {
    return (
        <Card className="p-4 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">{value}</h3>
                {trend && (
                    <p className={`text-xs font-medium mt-1 ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
                        {trend}
                    </p>
                )}
            </div>
            <div className="w-12 h-12 rounded-full bg-light-primary dark:bg-dark-primary flex items-center justify-center text-brand-DEFAULT">
                <Icon className="w-6 h-6" />
            </div>
        </Card>
    );
}
