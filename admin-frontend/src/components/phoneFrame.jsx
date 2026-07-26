export default function phoneFrame({ children }) {
  return (
    <div className="min-h-screen bg-[#ECEEF5] flex items-center justify-center p-6">

      <div
        className="
          w-[390px]
          h-[844px]
          bg-[#F7F7FB]
          rounded-[30px]
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          relative
        "
      >
        {children}
      </div>

    </div>
  );
}