import { useState, useEffect } from "react";
import { Button } from "@/components/ui/common/Button";
import { Input } from "@/components/ui/common/Input";
import { Save, Plus, X, Upload } from "lucide-react";

export default function CourseForm({ course, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: "",
    level: "Básico",
    price: "",
    status: "Draft",
    description: "",
    whatYouWillLearn: [""],
    syllabus: [""],
    coverImage: "",
    videoUrl: "",
    students: 0,
  });

  useEffect(() => {
    if (course) {
      setFormData({
        ...course,
        whatYouWillLearn: course.whatYouWillLearn || [""],
        syllabus: course.syllabus || [""],
      });
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, value, field) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({ ...prev, [field]: [...prev[field], ""] }));
  };

  const removeArrayItem = (index, field) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, [field]: newArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white border-b pb-2">Información Básica</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Título del Curso
          </label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Ej: Inglés Básico I"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Categoría (Nivel)
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="Básico">Básico</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Precio
            </label>
            <Input
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Ej: $49.90"
            />
          </div>
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
            <option value="Draft">Borrador</option>
            <option value="Published">Publicado</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Descripción General
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            placeholder="Descripción breve del curso..."
          ></textarea>
        </div>
      </div>

      {/* Media */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white border-b pb-2">Multimedia</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Foto de Portada (URL)
          </label>
          <div className="flex gap-2">
            <Input
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <Button type="button" variant="outline" className="shrink-0">
              <Upload className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            URL Video Presentación
          </label>
          <Input
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="https://youtube.com/..."
          />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-900 dark:text-white border-b pb-2">Contenido Educativo</h3>
        
        {/* What You Will Learn */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Lo que aprenderás
          </label>
          {formData.whatYouWillLearn.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                value={item}
                onChange={(e) => handleArrayChange(index, e.target.value, 'whatYouWillLearn')}
                placeholder={`Punto clave ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'whatYouWillLearn')}
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
            onClick={() => addArrayItem('whatYouWillLearn')}
            className="text-brand-blue"
          >
            <Plus className="w-4 h-4 mr-2" /> Agregar Punto
          </Button>
        </div>

        {/* Syllabus */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temario (Módulos)
          </label>
          {formData.syllabus.map((item, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <Input
                value={item}
                onChange={(e) => handleArrayChange(index, e.target.value, 'syllabus')}
                placeholder={`Módulo ${index + 1}`}
              />
              <button
                type="button"
                onClick={() => removeArrayItem(index, 'syllabus')}
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
            onClick={() => addArrayItem('syllabus')}
            className="text-brand-blue"
          >
            <Plus className="w-4 h-4 mr-2" /> Agregar Módulo
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
          Guardar Curso
        </Button>
      </div>
    </form>
  );
}
