import { XCircle } from "lucide-react";
export const Fail = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-700">
      <XCircle size={80} className="text-red-600 mb-4" />
      <h1 className="text-3xl font-bold">Оплата не прошла!</h1>
      <p className="mt-2 text-lg">
        Попробуйте снова или свяжитесь с поддержкой.
      </p>
    </div>
  );
};
