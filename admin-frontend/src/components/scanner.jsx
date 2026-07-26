import {
  Image,
  Flashlight,
  CircleHelp,
  QrCode,
} from "lucide-react";

export default function Scanner() {
  return (
    <>

      {/* Scan & Pay Card */}

      <div className="rounded-[28px] border border-[#E8DFFF] bg-white p-6 shadow-lg">

        <div className="flex items-center justify-between">

          <div className="max-w-[170px]">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F4EEFF]">

                <QrCode
                  size={24}
                  className="text-[#6115BD]"
                />

              </div>

              <h2 className="text-[28px] font-bold leading-none text-[#111]">

                Scan & Pay

              </h2>

            </div>

            <p className="mt-5 text-[16px] leading-8 text-gray-500">

              Scan any QR code to pay instantly and securely

            </p>

          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/1041/1041886.png"
            alt=""
            className="h-36 object-contain"
          />

        </div>

      </div>



      {/* Scanner */}

      <div className="mt-6 rounded-[28px] border border-[#E8DFFF] bg-white p-6 shadow-lg">

        <div
          className="
            relative
            flex
            h-[340px]
            items-center
            justify-center
            rounded-[26px]
            bg-gradient-to-br
            from-[#FAF8FF]
            via-[#F4F1FF]
            to-[#FFFFFF]
          "
        >

          {/* Scanner Frame */}

          <div className="relative h-[220px] w-[220px]">

            {/* QR */}

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=YONO"
              className="rounded-2xl"
              alt=""
            />

            {/* Corners */}

            <div className="absolute -left-5 -top-5 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-[#6115BD]" />

            <div className="absolute -right-5 -top-5 h-10 w-10 rounded-tr-xl border-r-4 border-t-4 border-[#6115BD]" />

            <div className="absolute -left-5 -bottom-5 h-10 w-10 rounded-bl-xl border-l-4 border-b-4 border-[#6115BD]" />

            <div className="absolute -right-5 -bottom-5 h-10 w-10 rounded-br-xl border-r-4 border-b-4 border-[#6115BD]" />

          </div>

        </div>

        <p className="mt-7 text-center text-[16px] text-gray-500">

          Align QR code within the frame

        </p>

        <div className="my-6 h-px bg-[#ECECEC]" />



        {/* Bottom Buttons */}

        <div className="grid grid-cols-3">

          <button className="flex flex-col items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4EEFF]">

              <Image
                size={24}
                className="text-[#6115BD]"
              />

            </div>

            <span className="text-[15px] font-medium">

              From Gallery

            </span>

          </button>

          <button className="flex flex-col items-center gap-3 border-x border-[#ECECEC]">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4EEFF]">

              <Flashlight
                size={24}
                className="text-[#6115BD]"
              />

            </div>

            <span className="text-[15px] font-medium">

              Flashlight

            </span>

          </button>

          <button className="flex flex-col items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4EEFF]">

              <CircleHelp
                size={24}
                className="text-[#6115BD]"
              />

            </div>

            <span className="text-[15px] font-medium">

              Help

            </span>

          </button>

        </div>

      </div>

    </>
  );
}