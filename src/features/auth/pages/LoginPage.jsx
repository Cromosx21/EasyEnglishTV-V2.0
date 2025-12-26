import { Link } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import { Input } from "@/components/ui/common/Input";
import { User, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
	return (
		<>
			<div className="min-h-fit bg-gray-50 flex flex-col">
				<div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full">
						<div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
							<div className="text-center mb-8">
								<h2 className="text-3xl font-extrabold text-gray-900 font-display">
									Iniciar Sesión
								</h2>
								<p className="mt-2 text-sm text-gray-600">
									O{" "}
									<Link
										to="/auth/register"
										className="font-medium text-rose-500 hover:text-rose-600"
									>
										crea una cuenta nueva
									</Link>
								</p>
							</div>

							<form
								className="space-y-6"
								action="#"
								method="POST"
								onSubmit={(e) => e.preventDefault()}
							>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email
									</label>
									<div className="mt-1 relative rounded-md shadow-sm">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<User className="h-5 w-5 text-gray-400" />
										</div>
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="focus:ring-brand-blue focus:border-brand-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
											placeholder="tucorreo@ejemplo.com"
										/>
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between">
										<label
											htmlFor="password"
											className="block text-sm font-medium text-gray-700"
										>
											Contraseña
										</label>
										<div className="text-sm">
											<Link
												to="/auth/forgot-password"
												className="font-medium text-rose-500 hover:text-rose-600"
											>
												¿Olvidaste tu contraseña?
											</Link>
										</div>
									</div>
									<div className="mt-1 relative rounded-md shadow-sm">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<Lock className="h-5 w-5 text-gray-400" />
										</div>
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="focus:ring-brand-blue focus:border-brand-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-3"
											placeholder="••••••••"
										/>
									</div>
								</div>

								<div>
									<Button
										type="submit"
										className="w-full flex justify-center py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg shadow-rose-500/20"
									>
										Entrar
										<ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</div>

								<div className="mt-6">
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<div className="w-full border-t border-gray-300" />
										</div>
										<div className="relative flex justify-center text-sm">
											<span className="px-2 bg-white text-gray-500">
												O inicia sesión con
											</span>
										</div>
									</div>

									<div className="mt-6 grid grid-cols-2 gap-3">
										<div>
											<a
												href="#"
												className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
											>
												<span className="sr-only">
													Iniciar sesión con Facebook
												</span>
												<svg
													className="w-5 h-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										</div>

										<div>
											<a
												href="#"
												className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
											>
												<span className="sr-only">
													Iniciar sesión con Google
												</span>
												<svg
													className="w-5 h-5"
													viewBox="0 0 48 48"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
														fill="#4285F4"
													/>
													<path
														d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4055 48.0016 24.48 48.0016Z"
														fill="#34A853"
													/>
													<path
														d="M11.0051 28.6006C10.4997 27.102 10.2216 25.486 10.2216 23.8355C10.2216 22.185 10.4997 20.569 11.0051 19.0704V12.8884H3.03298C1.36578 16.2046 0.43462 19.9333 0.43462 23.8355C0.43462 27.7377 1.36578 31.4664 3.03298 34.7825L11.0051 28.6006Z"
														fill="#FBBC05"
													/>
													<path
														d="M24.48 9.16702C27.9914 9.16702 31.1443 10.3723 33.6259 12.7329L40.5476 5.79832C36.3941 1.93306 30.9354 0 24.48 0C15.4055 0 7.10718 5.11485 3.03296 13.2192L11.0051 19.4011C12.9187 13.7219 18.2275 9.16702 24.48 9.16702Z"
														fill="#EA4335"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>

								<div className="flex justify-between mt-6">
									<Link
										to="/student/dashboard"
										className="text-sm text-blue-600 hover:underline"
									>
										Ir a Estudiante (Demo)
									</Link>
									<Link
										to="/admin/dashboard"
										className="text-sm text-blue-600 hover:underline"
									>
										Ir a Admin (Demo)
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
