import { useNavigate } from "react-router-dom";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/common/Button";

export default function CartDrawer() {
	const {
		cartItems,
		isCartOpen,
		closeCart,
		removeFromCart,
		clearCart,
	} = useCart();
    const { user } = useAuth();
	const navigate = useNavigate();

	const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

	const handleCheckout = () => {
		closeCart();
        if (user) {
		    navigate("/checkout");
        } else {
            // Pass state to redirect back to checkout after login
            navigate("/auth/login", { state: { from: { pathname: "/checkout" } } });
        }
	};

	if (!isCartOpen) return null;

	return (
		<div className="fixed inset-0 z-[60] flex justify-end">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
				onClick={closeCart}
			></div>

			{/* Drawer */}
			<div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
				{/* Header */}
				<div className="flex items-center justify-between p-6 border-b border-gray-100">
					<div className="flex items-center gap-2">
						<ShoppingBag className="w-5 h-5 text-brand-blue" />
						<h2 className="text-xl font-bold text-gray-900">
							Carrito de Compras
						</h2>
						<span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-2 py-1 rounded-full">
							{cartItems.length} ítems
						</span>
					</div>
					<button
						onClick={closeCart}
						className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Items List */}
				<div className="flex-1 overflow-y-auto p-6 space-y-6">
					{cartItems.length === 0 ? (
						<div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-500">
							<div className="bg-gray-100 p-6 rounded-full">
								<ShoppingBag className="w-12 h-12 text-gray-300" />
							</div>
							<p className="text-lg font-medium">
								Tu carrito está vacío
							</p>
							<p className="text-sm">
								¡Explora nuestros cursos y materiales!
							</p>
							<Button
								variant="outline"
								onClick={closeCart}
								className="mt-4"
							>
								Continuar comprando
							</Button>
						</div>
					) : (
						cartItems.map((item, index) => (
							<div
								key={`${item.id}-${index}`}
								className="flex gap-4 bg-gray-50 p-4 rounded-xl group"
							>
								{/* Image */}
								<div className="w-20 h-20 bg-white rounded-lg overflow-hidden shrink-0 border border-gray-200">
									<img
										src={
											item.image ||
											"/src/assets/Landing/Home-hero.png"
										}
										alt={item.title}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Info */}
								<div className="flex-1 min-w-0 flex flex-col justify-between">
									<div>
										<h3 className="font-bold text-gray-900 text-sm line-clamp-2">
											{item.title}
										</h3>
										<p className="text-xs text-gray-500 mt-1 capitalize">
											{item.type || "Curso"}
										</p>
									</div>
									<div className="flex items-center justify-between mt-2">
										<span className="font-bold text-brand-blue">
											${item.price}
										</span>
										<button
											onClick={() =>
												removeFromCart(item.id)
											}
											className="text-gray-400 hover:text-red-500 transition-colors p-1"
											title="Eliminar"
										>
											<Trash2 className="w-4 h-4" />
										</button>
									</div>
								</div>
							</div>
						))
					)}
				</div>

				{/* Footer */}
				{cartItems.length > 0 && (
					<div className="p-6 border-t border-gray-100 bg-gray-50">
						<div className="flex items-center justify-between mb-4">
							<span className="text-gray-600">Subtotal</span>
							<span className="text-xl font-bold text-gray-900">
								${total.toFixed(2)}
							</span>
						</div>
						<div className="space-y-3">
							<Button
								className="w-full bg-brand-blue hover:bg-blue-700 text-white py-4 rounded-xl shadow-lg shadow-blue-500/20 text-lg font-bold"
								onClick={handleCheckout}
							>
								Pagar Ahora
							</Button>
							<button
								onClick={clearCart}
								className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors py-2"
							>
								Vaciar carrito
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
