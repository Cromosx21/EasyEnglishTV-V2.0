import { useState } from "react";
import { Button } from "@/components/ui/common/Button";
import {
  Search,
  MoreVertical,
  BookOpen,
  Clock,
  Users,
  Edit,
  Trash2,
} from "lucide-react";
import Modal from "@/components/ui/common/Modal";
import CourseForm from "../components/CourseForm";
import ConfirmationModal from "@/components/ui/common/ConfirmationModal";

const initialCourses = [
  {
    id: 1,
    title: "Inglés para Negocios",
    level: "Intermedio",
    students: 250,
    status: "Published",
    price: "$49.90",
    description: "Curso completo para profesionales.",
    whatYouWillLearn: ["Vocabulario empresarial", "Redacción de correos", "Presentaciones"],
    syllabus: ["Introducción", "Emails Efectivos", "Reuniones"],
    coverImage: "",
    videoUrl: ""
  },
  {
    id: 2,
    title: "Curso teórico viajes I",
    level: "Básico",
    students: 400,
    status: "Published",
    price: "$29.90",
    description: "Inglés esencial para viajeros.",
    whatYouWillLearn: ["Frases de aeropuerto", "Reservas de hotel", "Direcciones"],
    syllabus: ["En el aeropuerto", "En el hotel", "Transporte"],
    coverImage: "",
    videoUrl: ""
  },
  {
    id: 3,
    title: "Gramática Avanzada",
    level: "Avanzado",
    students: 180,
    status: "Draft",
    price: "$59.90",
    description: "Domina la gramática compleja.",
    whatYouWillLearn: ["Tiempos perfectos", "Condicionales", "Voz pasiva"],
    syllabus: ["Tiempos Verbales", "Estructuras Complejas", "Estilo Indirecto"],
    coverImage: "",
    videoUrl: ""
  },
  {
    id: 4,
    title: "Pronunciación Master",
    level: "Todos",
    students: 600,
    status: "Published",
    price: "$39.90",
    description: "Mejora tu pronunciación y acento.",
    whatYouWillLearn: ["Fonética básica", "Entonación", "Ritmo"],
    syllabus: ["Vocales", "Consonantes", "Entonación de frases"],
    coverImage: "",
    videoUrl: ""
  },
];

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  
  // Confirmation Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      course.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleAddCourse = () => {
    setEditingCourse(null);
    setIsModalOpen(true);
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const confirmDeleteCourse = (id) => {
    setCourseToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCourse = () => {
    if (courseToDelete) {
      setCourses(courses.filter((c) => c.id !== courseToDelete));
      setIsDeleteModalOpen(false);
      setCourseToDelete(null);
    }
  };

  const handleSaveCourse = (courseData) => {
    if (editingCourse) {
      setCourses(
        courses.map((c) =>
          c.id === editingCourse.id ? { ...courseData, id: c.id } : c
        )
      );
    } else {
      const newCourse = {
        ...courseData,
        id: courses.length + 1,
        students: 0,
      };
      setCourses([...courses, newCourse]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
            Cursos
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Administra el catálogo de cursos disponibles.
          </p>
        </div>
        <Button
          onClick={handleAddCourse}
          className="bg-brand-blue text-white hover:bg-brand-blue/90"
        >
          + Crear Curso
        </Button>
      </header>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar curso..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        >
          <option value="all">Todos los Estados</option>
          <option value="published">Publicado</option>
          <option value="draft">Borrador</option>
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
          >
            <div className="h-40 bg-gray-200 relative flex items-center justify-center overflow-hidden group">
              {course.coverImage ? (
                <img src={course.coverImage} alt={course.title} className="w-full h-full object-cover" />
              ) : (
                <BookOpen className="w-12 h-12 text-gray-400" />
              )}
              <div
                className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold z-10 ${
                  course.status === "Published"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {course.status === "Published" ? "Publicado" : "Borrador"}
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                  {course.title}
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-4">{course.level}</p>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {course.students}
                </span>
                <span className="font-bold text-brand-blue">{course.price}</span>
              </div>

              <div className="mt-auto flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditCourse(course)}
                  className="flex-1 border-gray-200 hover:bg-gray-50 text-gray-700"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => confirmDeleteCourse(course.id)}
                  className="w-10 px-0 border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingCourse ? "Editar Curso" : "Nuevo Curso"}
      >
        <CourseForm
          course={editingCourse}
          onSave={handleSaveCourse}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteCourse}
        title="Eliminar Curso"
        message="¿Estás seguro de que deseas eliminar este curso? Esta acción no se puede deshacer."
      />
    </div>
  );
}
