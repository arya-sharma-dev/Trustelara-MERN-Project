import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ECEEF5]">

      {/* Phone Frame */}

      <div className="relative w-[390px] h-[844px] overflow-hidden rounded-[30px] shadow-2xl bg-gradient-to-br from-[#4B0082] via-[#6115BD] to-[#E91E63]">

        {/* Background Glows */}

        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

        {/* Floating Glass Circle */}

        <motion.div
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute top-24 right-8 h-20 w-20 rounded-full bg-white/10 backdrop-blur-xl"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute bottom-48 left-8 h-14 w-14 rounded-full bg-white/10"
        />

        {/* Brand */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center -mt-16"
        >

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute h-44 w-44 rounded-full bg-white/20 blur-3xl"
          />

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-sm tracking-[7px] text-white/70 font-semibold"
          >
            STATE BANK OF INDIA
          </motion.p>

          <motion.h1
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mt-4 text-[60px] font-black tracking-[10px] text-white"
          >
            YONO
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 110 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mt-3 h-[3px] rounded-full bg-white/70"
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            className="mt-5 text-white/85 text-lg"
          >
            Lifestyle & Banking Together
          </motion.p>

        </motion.div>
                {/* Bottom */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >

          {/* Loading */}

          <div className="flex items-center gap-3">

            {[0, 1, 2].map((dot) => (

              <motion.div
                key={dot}
                animate={{
                  scale: [0.7, 1.3, 0.7],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="h-3 w-3 rounded-full bg-white"
              />

            ))}

          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
            }}
            className="mt-6 text-sm tracking-[1px] text-white/75"
          >

            Secure • Smart • Simple

          </motion.p>

        </motion.div>

        {/* Version */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.6,
          }}
          transition={{
            delay: 1.8,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >

          <p className="text-xs tracking-wider text-white">

            Version 2.0

          </p>

        </motion.div>

      </div>

    </div>

  );
}