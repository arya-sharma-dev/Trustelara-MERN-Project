import {
  ArrowLeft,
  CircleHelp,
  ScanLine,
  Image,
  Flashlight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import BottomNav from "../components/bottomNav";
import RecentPayment from "../components/recentPayment";

import qr from "../assets/qr.png";

export default function ScanQR() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ECEEF5]">

      <div className="relative w-[390px] h-[844px] rounded-[30px] overflow-hidden bg-[#F7F7FB] shadow-2xl">

        {/* Header */}

        <div className="h-[72px] bg-white border-b border-gray-200 px-5 flex items-center justify-between">

          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-[#F4EEFF] flex items-center justify-center"
          >
            <ArrowLeft
              size={20}
              className="text-[#6115BD]"
            />
          </button>

          <h1 className="text-[22px] font-bold">
            Scan QR
          </h1>

          <button className="w-10 h-10 rounded-full bg-[#F4EEFF] flex items-center justify-center">

            <CircleHelp
              size={20}
              className="text-[#6115BD]"
            />

          </button>

        </div>

        <div className="px-5 py-4">

          {/* Scan Card */}

          <div className="rounded-[22px] bg-white shadow-md border border-gray-100 p-4">
            

            <div className="flex items-center justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <ScanLine
                    size={22}
                    className="text-[#6115BD]"
                  />

                  <h2 className="font-bold text-lg">
                    Scan & Pay
                  </h2>

                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Scan any QR code
                  <br />
                  to make secure payments.
                </p>

              </div>

              <img
                src={qr}
                className="w-20"
              />

            </div>

          </div>

          {/* Scanner */}

          <div className="mt-4 rounded-[28px] bg-white p-5 shadow-md">

            <div className="relative mx-auto w-[210px] h-[210px]">

              <div className="absolute left-0 top-0 w-8 h-8 border-l-4 border-t-4 border-[#6115BD]" />

              <div className="absolute right-0 top-0 w-8 h-8 border-r-4 border-t-4 border-[#6115BD]" />

              <div className="absolute left-0 bottom-0 w-8 h-8 border-l-4 border-b-4 border-[#6115BD]" />

              <div className="absolute right-0 bottom-0 w-8 h-8 border-r-4 border-b-4 border-[#6115BD]" />

              <img
                src={qr}
                className="absolute inset-0 m-auto w-36 h-36"
              />

            </div>

            <p className="text-center text-xs text-gray-500 mt-3">
              Align QR within the frame
            </p>

            <div className="flex justify-around mt-5">

              <button className="flex flex-col items-center">

                <div className="w-11 h-11 rounded-full bg-[#F4EEFF] flex items-center justify-center">

                  <Image
                    size={18}
                    className="text-[#6115BD]"
                  />

                </div>

                <span className="text-[11px] mt-1">
                  Gallery
                </span>

              </button>

              <button className="flex flex-col items-center">

                <div className="w-11 h-11 rounded-full bg-[#F4EEFF] flex items-center justify-center">

                  <Flashlight
                    size={18}
                    className="text-[#6115BD]"
                  />

                </div>

                <span className="text-[11px] mt-1">
                  Flash
                </span>

              </button>

              <button className="flex flex-col items-center">

                <div className="w-11 h-11 rounded-full bg-[#F4EEFF] flex items-center justify-center">

                  <CircleHelp
                    size={18}
                    className="text-[#6115BD]"
                  />

                </div>

                <span className="text-[11px] mt-1">
                  Help
                </span>

              </button>

            </div>

          </div>

          {/* Recent */}

          <div className="mt-4">

            <div className="flex justify-between items-center mb-3">

              <h2 className="font-bold text-lg">
                Recent
              </h2>

              <button className="text-sm text-[#6115BD] font-semibold">
                See All
              </button>

            </div>

            <div className="flex justify-between">

              <RecentPayment initials="AM" name="Aman" amount="1250" color="#7C3AED" />
              <RecentPayment initials="PS" name="Priyank" amount="850" color="#DB2777" />
              <RecentPayment initials="RK" name="Rahul" amount="600" color="#4C1D95" />
              <RecentPayment initials="SS" name="Sakshi" amount="1100" color="#F97316" />

            </div>

          </div>



        </div>

        <BottomNav active="scan" />

      </div>

    </div>
  );
}