import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/common/Button";
import { Trash2, ArrowLeft, CreditCard, Lock, ShieldCheck } from "lucide-react";
import { useEffect } from "react";

export default function CheckoutPage() {
	const { cartItems, removeFromCart, total, clearCart } = useCart();
	const { user } = useAuth();
	const navigate = useNavigate();

	const cartTotal = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

	// Redirect if empty cart
	useEffect(() => {
		if (cartItems.length === 0) {
			navigate("/");
		}
	}, [cartItems, navigate]);

	const handlePayment = () => {
		alert("¡Pago procesado con éxito! (Simulación)");
		clearCart();
		navigate("/student/courses"); // Redirect to courses after purchase
	};

	if (cartItems.length === 0) return null;

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-8">
					<button
						onClick={() => navigate(-1)}
						className="flex items-center text-gray-500 hover:text-gray-900 mb-4 transition-colors"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Volver
					</button>
					<h1 className="text-3xl font-extrabold text-gray-900 font-display">
						Finalizar Compra
					</h1>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* Order Summary (Left) */}
					<div className="flex-1 space-y-6">
						<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
							<div className="p-6 border-b border-gray-100">
								<h2 className="text-lg font-bold text-gray-900">
									Resumen del Pedido ({cartItems.length} ítems)
								</h2>
							</div>
							<div className="divide-y divide-gray-100">
								{cartItems.map((item, index) => (
									<div
										key={`${item.id}-${index}`}
										className="p-6 flex gap-4"
									>
										<div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0 border border-gray-200">
											<img
												src={
													item.image ||
													"/src/assets/Landing/Home-hero.png"
												}
												alt={item.title}
												className="w-full h-full object-cover"
											/>
										</div>
										<div className="flex-1">
											<div className="flex justify-between items-start">
												<div>
													<h3 className="font-bold text-gray-900 text-lg">
														{item.title}
													</h3>
													<p className="text-sm text-gray-500 mt-1">
														{item.type || "Curso"} • Acceso de por vida
													</p>
												</div>
												<span className="font-bold text-xl text-brand-blue">
													${item.price}
												</span>
											</div>
											<div className="mt-4 flex justify-end">
												<button
													onClick={() =>
														removeFromCart(item.id)
													}
													className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 font-medium"
												>
													<Trash2 className="w-4 h-4" />
													Eliminar
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Payment Details (Right) */}
					<div className="lg:w-[400px] shrink-0">
						<div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
							<h2 className="text-lg font-bold text-gray-900 mb-6">
								Detalles de Pago
							</h2>

							{/* User Info */}
							<div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
								<p className="text-xs text-gray-500 font-bold uppercase mb-1">
									Cliente
								</p>
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
										<img
											src={
												user?.avatar ||
												"/src/assets/Landing/Home-hero.png"
											}
											alt={user?.name}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<p className="text-sm font-bold text-gray-900">
											{user?.name}
										</p>
										<p className="text-xs text-gray-500">
											{user?.email}
										</p>
									</div>
								</div>
							</div>

							{/* Totals */}
							<div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
								<div className="flex justify-between text-gray-600">
									<span>Subtotal</span>
									<span>${cartTotal.toFixed(2)}</span>
								</div>
								<div className="flex justify-between text-gray-600">
									<span>Impuestos</span>
									<span>$0.00</span>
								</div>
								<div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
									<span>Total a Pagar</span>
									<span>${cartTotal.toFixed(2)}</span>
								</div>
							</div>

							{/* Mock Payment Form */}
							<div className="space-y-4 mb-8">
								<div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center gap-3 opacity-75 cursor-not-allowed">
									<CreditCard className="w-5 h-5 text-gray-400" />
									<span className="text-sm text-gray-500">
										Tarjeta de Crédito / Débito
									</span>
								</div>
								<div className="flex items-center gap-2 text-xs text-green-600 font-medium justify-center">
									<Lock className="w-3 h-3" />
									Pago 100% Seguro y Encriptado
								</div>
							</div>

							<Button
								onClick={handlePayment}
								className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl shadow-lg shadow-green-500/20 text-lg font-bold flex items-center justify-center gap-2"
							>
								<ShieldCheck className="w-5 h-5" />
								Confirmar Pago
							</Button>
							
							<p className="text-xs text-center text-gray-400 mt-4">
								Al confirmar, aceptas nuestros Términos de Servicio.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
