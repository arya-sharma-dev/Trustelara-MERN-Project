import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NavbarTransactions() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 pt-6 pb-100">

      <button
        onClick={() => navigate(-1)}
        className="text-gray-700"
      >
        <ArrowLeft size={22} />
      </button>

      <h1 className="text-[22px] font-semibold text-[#111827]">
        Transactions
      </h1>

    </div>
  );
}