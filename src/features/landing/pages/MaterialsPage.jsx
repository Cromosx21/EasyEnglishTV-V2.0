import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/common/Button";
import { Search, ShoppingCart, Filter, BookOpen } from "lucide-react";

const materialsData = [
	{
		id: 1,
		title: "Irregular Verbs - Tomo 1",
		level: "Inglés Básico A1",
		price: 32.8,
		originalPrice: 75.5,
		discount: 50,
		image: "blue",
        type: "book"
	},
	{
		id: 2,
		title: "Idioms for Travel",
		level: "Inglés Intermedio B1",
		price: 32.8,
		originalPrice: 75.5,
		discount: 50,
		image: "emerald",
        type: "book"
	},
	{
		id: 3,
		title: "Business English Pack",
		level: "Inglés Avanzado C1",
		price: 45.0,
		originalPrice: 90.0,
		discount: 50,
		image: "purple",
        type: "pack"
	},
    {
		id: 4,
		title: "Grammar Guide",
		level: "Todos los niveles",
		price: 25.0,
		originalPrice: 50.0,
		discount: 50,
		image: "orange",
        type: "guide"
	},
    {
		id: 5,
		title: "Listening Mastery",
		level: "Inglés Intermedio B2",
		price: 35.0,
		originalPrice: 70.0,
		discount: 50,
		image: "rose",
        type: "audio"
	},
];

export default function MaterialsPage() {
    const navigate = useNavigate();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortOrder, setSortOrder] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredMaterials = materialsData
        .filter(material => {
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(material.level);
            const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortOrder === 'newest') return b.id - a.id;
            if (sortOrder === 'oldest') return a.id - b.id;
            return 0;
        });

    const handleAddToCart = (e, materialId) => {
        e.preventDefault();
        e.stopPropagation();
        navigate('/auth/login');
    };

	return (
		<div className="bg-gray-50 min-h-screen pb-20">
			{/* Banner */}
			<section className="bg-brand-yellow pt-32 py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-white text-brand-blue font-bold text-sm mb-4 shadow-sm">
                        35% OFF
                    </div>
					<h1 className="text-4xl lg:text-5xl font-extrabold text-brand-blue mb-4 font-display">
						OFERTAS ESPECIALES
					</h1>
                    <p className="text-brand-dark/70 font-medium">Descarga nuestros materiales exclusivos y aprende a tu ritmo.</p>
				</div>
			</section>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col lg:flex-row gap-8">
				{/* Sidebar Filters */}
				<aside className="w-full lg:w-64 shrink-0 space-y-8">
					<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
						<h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filtrar por
                        </h3>
						
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-gray-700 mb-3">Categoría</h4>
                                <div className="space-y-2">
                                    {['Inglés Básico A1', 'Inglés Intermedio B1', 'Inglés Intermedio B2', 'Inglés Avanzado C1', 'Todos los niveles'].map((cat) => (
                                        <label key={cat} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-brand-blue">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedCategories.includes(cat)}
                                                onChange={() => handleCategoryChange(cat)}
                                                className="rounded border-gray-300 text-brand-blue focus:ring-brand-blue" 
                                            />
                                            {cat}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-700 mb-3">Fecha</h4>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="date" 
                                            checked={sortOrder === 'newest'}
                                            onChange={() => setSortOrder('newest')}
                                            className="border-gray-300 text-brand-blue focus:ring-brand-blue" 
                                        />
                                        Más reciente
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                        <input 
                                            type="radio" 
                                            name="date" 
                                            checked={sortOrder === 'oldest'}
                                            onChange={() => setSortOrder('oldest')}
                                            className="border-gray-300 text-brand-blue focus:ring-brand-blue" 
                                        />
                                        Más antiguo
                                    </label>
                                </div>
                            </div>
                        </div>
					</div>
				</aside>

				{/* Grid */}
				<div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-500 text-sm">Mostrando {filteredMaterials.length} resultados</p>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Buscar material..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 w-64" 
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredMaterials.map((material) => (
							<Link
								to={`/materials/${material.id}`}
                                key={material.id}
								className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col cursor-pointer"
							>
								<div className={`aspect-[3/4] rounded-xl bg-${material.image}-100 mb-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform`}>
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                        {material.discount}% DCTO
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-blue/20">
                                        <BookOpen className="w-16 h-16" />
                                    </div>
                                </div>
                                
								<div className="flex-1 flex flex-col">
                                    <h3 className="font-bold text-gray-900 leading-tight mb-1 group-hover:text-brand-blue transition-colors">
                                        {material.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-4">{material.level}</p>
                                    
                                    <div className="mt-auto flex items-end justify-between">
                                        <div>
                                            <p className="text-xs text-gray-400 line-through">S/ {material.originalPrice.toFixed(2)}</p>
                                            <p className="text-lg font-bold text-gray-900">S/ {material.price.toFixed(2)}</p>
                                        </div>
                                        <Button 
                                            size="icon" 
                                            className="rounded-full bg-brand-blue hover:bg-brand-blue/90 w-10 h-10"
                                            onClick={(e) => handleAddToCart(e, material.id)}
                                        >
                                            <ShoppingCart className="w-4 h-4 text-white" />
                                        </Button>
                                    </div>
                                </div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
