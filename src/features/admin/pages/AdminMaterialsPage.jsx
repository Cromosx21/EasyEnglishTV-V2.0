import { useState } from "react";
import { Button } from "@/components/ui/common/Button";
import {
  Search,
  ShoppingBag,
  Download,
  Edit,
  Trash2,
  FileText,
  Music,
  Package,
} from "lucide-react";
import Modal from "@/components/ui/common/Modal";
import MaterialForm from "../components/MaterialForm";
import ConfirmationModal from "@/components/ui/common/ConfirmationModal";

const initialMaterials = [
  {
    id: 1,
    title: "Irregular Verbs - Tomo 1",
    type: "E-Book",
    format: "PDF",
    price: "$12.90",
    sales: 120,
    status: "Active",
    description: "Guía completa de verbos irregulares.",
    features: ["Lista completa A-Z", "Ejercicios prácticos", "Solucionario"],
    coverImage: "",
  },
  {
    id: 2,
    title: "Listening Mastery",
    type: "Audio",
    format: "MP3",
    price: "$19.90",
    sales: 85,
    status: "Active",
    description: "Audios para mejorar tu comprensión auditiva.",
    features: ["10 horas de audio", "Transcripciones incluidas", "Acentos variados"],
    coverImage: "",
  },
  {
    id: 3,
    title: "Business English Pack",
    type: "Pack",
    format: "ZIP",
    price: "$29.90",
    sales: 45,
    status: "Active",
    description: "Pack completo para inglés de negocios.",
    features: ["E-book + Audio", "Plantillas de correos", "Vocabulario específico"],
    coverImage: "",
  },
  {
    id: 4,
    title: "Grammar Cheat Sheet",
    type: "Guide",
    format: "PDF",
    price: "$5.90",
    sales: 200,
    status: "Inactive",
    description: "Hoja de trucos gramaticales rápida.",
    features: ["Resumen de tiempos", "Reglas clave", "Errores comunes"],
    coverImage: "",
  },
];

export default function AdminMaterialsPage() {
  const [materials, setMaterials] = useState(initialMaterials);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState(null);

  // Confirmation Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [materialToDelete, setMaterialToDelete] = useState(null);

  const filteredMaterials = materials.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      typeFilter === "all" ||
      item.type.toLowerCase() === typeFilter.toLowerCase();
    return matchesSearch && matchesType;
  });

  const handleAddMaterial = () => {
    setEditingMaterial(null);
    setIsModalOpen(true);
  };

  const handleEditMaterial = (material) => {
    setEditingMaterial(material);
    setIsModalOpen(true);
  };

  const confirmDeleteMaterial = (id) => {
    setMaterialToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteMaterial = () => {
    if (materialToDelete) {
      setMaterials(materials.filter((m) => m.id !== materialToDelete));
      setIsDeleteModalOpen(false);
      setMaterialToDelete(null);
    }
  };

  const handleSaveMaterial = (materialData) => {
    if (editingMaterial) {
      setMaterials(
        materials.map((m) =>
          m.id === editingMaterial.id ? { ...materialData, id: m.id } : m
        )
      );
    } else {
      const newMaterial = {
        ...materialData,
        id: materials.length + 1,
        sales: 0,
      };
      setMaterials([...materials, newMaterial]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
            Materiales
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Gestiona los recursos digitales y productos.
          </p>
        </div>
        <Button
          onClick={handleAddMaterial}
          className="bg-brand-blue text-white hover:bg-brand-blue/90"
        >
          + Subir Material
        </Button>
      </header>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar material..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="all">Todos los Tipos</option>
          <option value="e-book">E-Books</option>
          <option value="audio">Audio</option>
          <option value="pack">Packs</option>
        </select>
      </div>

      {/* Materials Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Ventas
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredMaterials.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 overflow-hidden">
                        {item.coverImage ? (
                          <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover" />
                        ) : (
                          <>
                            {item.type === "E-Book" && <FileText className="w-5 h-5" />}
                            {item.type === "Audio" && <Music className="w-5 h-5" />}
                            {item.type === "Pack" && <Package className="w-5 h-5" />}
                            {item.type === "Guide" && <FileText className="w-5 h-5" />}
                          </>
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-xs">{item.format}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    {item.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                      <ShoppingBag className="w-3 h-3" />
                      {item.sales}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        item.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status === "Active" ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEditMaterial(item)}
                        className="p-1 text-gray-400 hover:text-brand-blue transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => confirmDeleteMaterial(item.id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMaterial ? "Editar Material" : "Nuevo Material"}
      >
        <MaterialForm
          material={editingMaterial}
          onSave={handleSaveMaterial}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteMaterial}
        title="Eliminar Material"
        message="¿Estás seguro de que deseas eliminar este material? Esta acción no se puede deshacer."
      />
    </div>
  );
}
