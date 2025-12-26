import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/common/Button";
import Modal from "./Modal";

export default function ConfirmationModal({ isOpen, onClose, onConfirm, title, message }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-300">{message}</p>
        </div>
        <div className="flex gap-3 w-full pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/20"
          >
            Eliminar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
