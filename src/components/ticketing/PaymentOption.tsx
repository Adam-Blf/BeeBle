import { Check, CreditCard, Calendar } from 'lucide-react';
import { cn } from '../../lib/utils';

interface PaymentOptionProps {
    type: 'cash' | 'installments';
    selected: boolean;
    onClick: () => void;
}

export function PaymentOption({ type, selected, onClick }: PaymentOptionProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "cursor-pointer rounded-xl border-2 p-4 transition-all duration-200 relative overflow-hidden",
                selected
                    ? "border-brand-DEFAULT bg-brand-DEFAULT/5 dark:bg-brand-DEFAULT/10"
                    : "border-gray-200 dark:border-gray-700 hover:border-brand-DEFAULT/50"
            )}
        >
            <div className="flex items-start justify-between mb-2">
                <div className={cn(
                    "p-2 rounded-lg",
                    selected ? "bg-brand-DEFAULT text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                )}>
                    {type === 'cash' ? <CreditCard size={20} /> : <Calendar size={20} />}
                </div>
                {selected && (
                    <div className="bg-brand-DEFAULT text-white rounded-full p-1">
                        <Check size={12} />
                    </div>
                )}
            </div>

            <h4 className="font-bold text-light-text dark:text-dark-text">
                {type === 'cash' ? 'Paiement Comptant' : 'Paiement 3x sans frais'}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {type === 'cash'
                    ? 'Payer la totalité maintenant'
                    : '3 mensualités de 50€'
                }
            </p>
        </div>
    );
}
