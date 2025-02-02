import { CheckCircle } from "lucide-react";
import axios from "axios";
import { useEffect } from "react";

export const Success = () => {
  useEffect(() => {
    console.log("useEfffect");

    async function sendRequst() {
      console.log("request");

      await axios.get("http://localhost:3000/result");
    }
    sendRequst();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100 text-green-700">
      <CheckCircle size={80} className="text-green-600 mb-4" />
      <h1 className="text-3xl font-bold">Оплата прошла успешно!</h1>
      <p className="mt-2 text-lg">Спасибо за вашу покупку.</p>
    </div>
  );
};
