import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { clsx } from 'clsx';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export function BeeChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Bonjour ! Je suis Bee 🐝, votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('wei') || lowerMessage.includes('événement')) {
            return "Le WEI 2025 aura lieu du 24 au 26 septembre aux Landes ! Vous pouvez réserver votre place dans la section Billetterie. 🎉";
        }
        if (lowerMessage.includes('adhé') || lowerMessage.includes('cotis')) {
            return "Pour devenir adhérent, rendez-vous dans la section Adhérents. La cotisation annuelle est de 20€. 💳";
        }
        if (lowerMessage.includes('boutique') || lowerMessage.includes('pull') || lowerMessage.includes('merch')) {
            return "Notre boutique propose des pulls de promo, mugs et goodies ! Consultez la section Boutique pour personnaliser votre commande. 👕";
        }
        if (lowerMessage.includes('paiement') || lowerMessage.includes('3x')) {
            return "Nous proposons le paiement en 3x sans frais pour le WEI et les pulls de promo ! 💰";
        }
        if (lowerMessage.includes('aide') || lowerMessage.includes('help')) {
            return "Je peux vous aider avec : les événements (WEI, Gala), les adhésions, la boutique, et les paiements. Posez-moi vos questions ! 😊";
        }
        if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
            return "Bonjour ! Comment puis-je vous aider aujourd'hui ? 👋";
        }
        if (lowerMessage.includes('merci')) {
            return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 🐝";
        }

        return "Je ne suis pas sûr de comprendre. Essayez de me poser des questions sur les événements, les adhésions, ou la boutique ! 🤔";
    };

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');

        // Simulate bot response delay
        setTimeout(() => {
            const botMessage: Message = {
                id: messages.length + 2,
                text: getBotResponse(inputValue),
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
        }, 800);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-indigo-600 text-white shadow-lg transition-all hover:bg-indigo-700 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/50",
                    isOpen && "scale-0"
                )}
            >
                <MessageCircle className="mx-auto" size={24} />
            </button>

            {/* Chat Window */}
            <div
                className={clsx(
                    "fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] transition-all duration-300",
                    isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col h-[600px] max-h-[80vh] rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 rounded-t-2xl dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur text-2xl">
                                🐝
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">Bee Assistant</h3>
                                <p className="text-xs text-indigo-100">Toujours là pour vous aider</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={clsx(
                                    "flex",
                                    message.sender === 'user' ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={clsx(
                                        "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                                        message.sender === 'user'
                                            ? "bg-indigo-600 text-white rounded-br-sm"
                                            : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 rounded-bl-sm"
                                    )}
                                >
                                    <p className="whitespace-pre-wrap break-words">{message.text}</p>
                                    <p
                                        className={clsx(
                                            "mt-1 text-xs",
                                            message.sender === 'user'
                                                ? "text-indigo-200"
                                                : "text-slate-500 dark:text-slate-400"
                                        )}
                                    >
                                        {message.timestamp.toLocaleTimeString('fr-FR', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-slate-200 p-4 dark:border-slate-800">
                        <div className="flex gap-2">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Posez votre question..."
                                className="flex-1"
                            />
                            <Button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="px-3"
                            >
                                <Send size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
