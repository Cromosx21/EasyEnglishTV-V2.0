import { useState, useEffect } from "react";
import { Button } from "@/components/ui/common/Button";
import { Input } from "@/components/ui/common/Input";
import { Save, Upload, Plus, X } from "lucide-react";

export default function MaterialForm({ material, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    type: "E-Book",
    format: "",
    price: "",
    status: "Active",
    description: "",
    features: [""],
    coverImage: "",
    sales: 0,
  });

  useEffect(() => {
    if (material) {
      setFormData({
        ...material,
        features: material.features || [""],
      });
    }
  }, [material]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData((prev) => ({ ...prev, features: [...prev.features, ""] }));
  };

  const removeFeature = (index) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white border-b pb-2">Información del Producto</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Título del Material
          </label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Ej: Guía de Verbos Irregulares"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tipo
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="E-Book">E-Book</option>
              <option value="Audio">Audio</option>
              <option value="Pack">Pack</option>
              <option value="Guide">Guía</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Formato
            </label>
            <Input
              name="format"
              value={formData.format}
              onChange={handleChange}
              required
              placeholder="Ej: PDF, MP3"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Precio
            </label>
            <Input
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Ej: $12.90"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Estado
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="Active">Activo</option>
              <option value="Inactive">Inactivo</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Descripción
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Descripción detallada del material..."
          ></textarea>
        </div>
      </div>

      {/* Details & Media */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white border-b pb-2">Detalles y Multimedia</h3>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Foto de Portada (URL)
          </label>
          <div className="flex gap-2">
            <Input
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="https://ejemplo.com/portada.jpg"
            />
            <Button type="button" variant="outline" className="shrink-0">
              <Upload className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Características
          </label>
          {formData.features.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                value={item}
                onChange={(e) => handleArrayChange(index, e.target.value)}
                placeholder={`Característica ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addFeature}
            className="text-brand-blue"
          >
            <Plus className="w-4 h-4 mr-2" /> Agregar Característica
          </Button>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          className="bg-brand-blue text-white hover:bg-brand-blue/90"
        >
          <Save className="w-4 h-4 mr-2" />
          Guardar Material
        </Button>
      </div>
    </form>
  );
}
