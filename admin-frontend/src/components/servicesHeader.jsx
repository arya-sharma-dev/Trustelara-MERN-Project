import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 pt-6 pb-5">

      <button
        onClick={() => navigate(-1)}
        className="text-gray-700"
      >
        <ArrowLeft
          size={22}
          strokeWidth={2.3}
        />
      </button>

      <div>

        <h1 className="text-[22px] font-semibold text-[#111827]">
          Services
        </h1>

        <p className="text-[13px] text-gray-500">
          Banking, Lifestyle & Rewards
        </p>

      </div>

    </div>
  );
}