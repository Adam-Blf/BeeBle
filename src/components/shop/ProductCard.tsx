import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';

interface ProductProps {
    id: number;
    name: string;
    price: string;
    image: string;
    variants: string[];
}

export function ProductCard({ name, price, image, variants }: ProductProps) {
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [nickname, setNickname] = useState('');

    return (
        <Card className="overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white dark:bg-dark-card p-2 rounded-full shadow-md">
                    <ShoppingBag size={18} className="text-brand-DEFAULT" />
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-light-text dark:text-dark-text">{name}</h3>
                    <span className="font-bold text-brand-DEFAULT">{price}</span>
                </div>

                <div className="space-y-4 mt-4">
                    <div>
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 block">Taille</label>
                        <div className="flex gap-2">
                            {variants.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={cn(
                                        "w-8 h-8 rounded-lg text-sm font-medium transition-colors border",
                                        selectedSize === size
                                            ? "bg-brand-DEFAULT text-white border-brand-DEFAULT"
                                            : "border-gray-200 dark:border-gray-700 text-gray-500 hover:border-brand-DEFAULT hover:text-brand-DEFAULT"
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 block">Surnom (Optionnel)</label>
                        <input
                            type="text"
                            placeholder="Votre surnom..."
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            className="w-full px-3 py-2 rounded-lg bg-light-primary dark:bg-dark-primary border border-transparent focus:border-brand-DEFAULT outline-none text-sm text-light-text dark:text-dark-text transition-colors"
                        />
                    </div>

                    <button className="w-full py-2.5 bg-brand-DEFAULT text-white rounded-xl font-medium hover:bg-brand-DEFAULT/90 transition-colors shadow-lg shadow-brand-DEFAULT/20">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        </Card>
    );
}
