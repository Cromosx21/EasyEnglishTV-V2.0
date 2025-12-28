import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function FloatingCartButton() {
	const { cartItems, toggleCart } = useCart();
    const [isAnimating, setIsAnimating] = useState(false);

    // Effect to trigger animation when cartItems changes
    useEffect(() => {
        if (cartItems.length > 0) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 500); // Animation duration
            return () => clearTimeout(timer);
        }
    }, [cartItems.length]);

	return (
		<button
			onClick={toggleCart}
			className={`fixed bottom-8 right-8 z-40 bg-brand-blue text-white p-4 rounded-full shadow-2xl transition-all duration-300 group ${
                isAnimating ? 'animate-bounce scale-110 bg-brand-blue/90' : 'hover:scale-110'
            }`}
			aria-label="Ver carrito"
		>
			<div className="relative">
				<ShoppingBag className={`w-6 h-6 ${isAnimating ? 'animate-pulse' : ''}`} />
				{cartItems.length > 0 && (
					<span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-sm animate-in zoom-in duration-300">
						{cartItems.length}
					</span>
				)}
			</div>
			{/* Tooltip */}
			<span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
				Ver Carrito
			</span>
		</button>
	);
}
