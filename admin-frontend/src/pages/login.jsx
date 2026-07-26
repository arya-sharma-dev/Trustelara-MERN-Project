import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sbiLogo from "../assets/sbi-logo.png";

import {
  ArrowRight,
  MapPin,
  Gift,
  Shield,
  CircleHelp,
  Phone,
  TrendingUp,
  Wallet,
  Landmark,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [mpin, setMpin] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...mpin];
    updated[index] = value;
    setMpin(updated);

    if (value && index < 4) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !mpin[index] &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const featured = [
    {
      title: "Cashback",
      subtitle: "Up to ₹500",
      icon: Wallet,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Fixed Deposit",
      subtitle: "7.25% Returns",
      icon: Landmark,
      color: "from-[#6115BD] to-[#8B3DFF]",
    },
    {
      title: "Invest",
      subtitle: "Mutual Funds",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const quickAccess = [
    {
      label: "ATM",
      icon: MapPin,
    },
    {
      label: "Offers",
      icon: Gift,
    },
    {
      label: "Security",
      icon: Shield,
    },
    {
      label: "Help",
      icon: CircleHelp,
    },
    {
      label: "Contact",
      icon: Phone,
    },
  ];

  /* --------------------------------
     Animation Variants
  -------------------------------- */

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const bodyVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * index,
        duration: 0.35,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#ECEEF5]">

      {/* PHONE */}

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="
          w-[390px]
          h-[844px]
          overflow-hidden
          rounded-[32px]
          bg-white
          shadow-2xl
        "
      >

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="
            relative
            h-[185px]
            overflow-hidden
            rounded-b-[34px]
            bg-gradient-to-br
            from-[#4B008B]
            via-[#6115BD]
            to-[#E61D67]
          "
        >

          {/* Glow 1 */}

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
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              absolute
              -right-16
              -top-10
              h-44
              w-44
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          {/* Glow 2 */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              absolute
              -left-16
              bottom-0
              h-36
              w-36
              rounded-full
              bg-pink-400/20
              blur-3xl
            "
          />

          {/* LOGO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              flex-col
              items-center
              pt-7
            "
          >

            {/* YONO */}

            <motion.h1
              animate={{
                scale: [1, 1.015, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="leading-none"
            >

              <span className="text-[54px] font-black text-[#FF5A80]">
                y
              </span>

              <span className="text-[54px] font-black text-white">
                ono
              </span>

            </motion.h1>

            {/* SBI LOGO */}

            <motion.img
              initial={{
                opacity: 0,
                y: 8,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.45,
              }}
              src={sbiLogo}
              alt="SBI"
              className="
                mt-2
                h-10
                object-contain
              "
            />

            {/* Header Text */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.75,
                duration: 0.4,
              }}
              className="
                mt-2
                text-[12px]
                tracking-wide
                text-white/80
              "
            >
              Secure Banking Experience
            </motion.p>

          </motion.div>

        </motion.div>

        {/* =========================
            BODY
        ========================== */}

        <motion.div
          variants={bodyVariants}
          initial="hidden"
          animate="visible"
          className="px-7 pt-6"
        >

          {/* GREETING */}

          <motion.div
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.4,
            }}
          >

            <h1 className="
              text-[27px]
              font-bold
              text-[#1B1B1B]
            ">
              Hello Arya 👋
            </h1>

            <p className="
              mt-1
              text-[14px]
              text-gray-500
            ">
              Welcome back. Enter your MPIN to continue.
            </p>

          </motion.div>

          {/* =========================
              MPIN
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
            className="
              mt-7
              overflow-hidden
              rounded-[22px]
              border
              border-gray-200
              bg-white
              shadow-sm
            "
          >

            <div className="grid grid-cols-5">

              {mpin.map((digit, index) => (

                <motion.input
                  key={index}
                  ref={(el) => (inputs.current[index] = el)}
                  type="password"
                  maxLength={1}
                  inputMode="numeric"
                  value={digit}
                  onChange={(e) =>
                    handleChange(e.target.value, index)
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(e, index)
                  }
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.45 + index * 0.06,
                    duration: 0.25,
                  }}
                  className="
                    h-[58px]
                    border-r
                    border-gray-200
                    text-center
                    text-2xl
                    font-bold
                    outline-none
                    focus:bg-[#FAF7FF]
                    last:border-r-0
                  "
                />

              ))}

            </div>

          </motion.div>

          {/* FORGOT */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.35,
            }}
            className="mt-4 flex justify-end"
          >

            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ x: -2 }}
              className="
                text-[13px]
                font-semibold
                text-[#6115BD]
              "
            >
              Forgot MPIN?
            </motion.button>

          </motion.div>

          {/* =========================
              LOGIN BUTTON
          ========================== */}

          <motion.button
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.85,
              duration: 0.4,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => navigate("/dashboard")}
            className="
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-[20px]
              bg-gradient-to-r
              from-[#7A1BE0]
              to-[#4B008B]
              py-4
              text-[17px]
              font-semibold
              text-white
              shadow-xl
            "
          >

            Login Securely

            <motion.span
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <ArrowRight size={18} />
            </motion.span>

          </motion.button>

          {/* =========================
              DIVIDER
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.35,
            }}
            className="my-6 flex items-center"
          >

            <div className="h-px flex-1 bg-gray-200" />

            <span className="
              mx-3
              text-[12px]
              font-semibold
              uppercase
              tracking-wide
              text-gray-400
            ">
              Featured
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </motion.div>

          {/* =========================
              FEATURED CARDS
          ========================== */}

          <div className="
            flex
            gap-3
            overflow-x-auto
            hide-scrollbar
            pb-1
          ">

            {featured.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.button
                  key={item.title}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileTap={{
                    scale: 0.95,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className={`
                    min-w-[104px]
                    rounded-[20px]
                    bg-gradient-to-br
                    ${item.color}
                    p-4
                    text-left
                    text-white
                    shadow-lg
                  `}
                >

                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.05,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/20
                      backdrop-blur-sm
                    "
                  >

                    <Icon size={20} />

                  </motion.div>

                  <h3 className="
                    mt-4
                    text-[14px]
                    font-bold
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-1
                    text-[11px]
                    text-white/85
                  ">
                    {item.subtitle}
                  </p>

                </motion.button>

              );

            })}

          </div>

          {/* =========================
              BANKING SAFETY
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.35,
              duration: 0.4,
            }}
            whileHover={{
              y: -2,
            }}
            className="
              mt-6
              flex
              items-center
              gap-4
              rounded-[18px]
              border
              border-[#EEE8FF]
              bg-[#FAF8FF]
              px-4
              py-3
            "
          >

            <motion.div
              whileHover={{
                rotate: -5,
                scale: 1.05,
              }}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#EFE5FF]
              "
            >

              <Shield
                size={22}
                className="text-[#6115BD]"
              />

            </motion.div>

            <div className="flex-1">

              <h4 className="
                text-[13px]
                font-semibold
                text-[#1B1B1B]
              ">
                Stay Protected
              </h4>

              <p className="
                mt-1
                text-[11px]
                leading-4
                text-gray-500
              ">
                Never share your MPIN, OTP or banking password.
              </p>

            </div>

            <motion.button
              whileTap={{
                scale: 0.94,
              }}
              whileHover={{
                x: -2,
              }}
              className="
                text-[11px]
                font-semibold
                text-[#6115BD]
              "
            >
              Learn
            </motion.button>

          </motion.div>

          {/* =========================
              QUICK ACCESS
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 0.4,
            }}
            className="mt-6"
          >

            <div className="
              mb-3
              flex
              items-center
              justify-between
            ">

              <h3 className="
                text-[15px]
                font-bold
                text-[#1B1B1B]
              ">
                Quick Access
              </h3>

              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  text-[12px]
                  font-semibold
                  text-[#6115BD]
                "
              >
                More
              </motion.button>

            </div>

            <div className="grid grid-cols-5 gap-2">

              {quickAccess.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.button
                    key={item.label}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileTap={{
                      scale: 0.9,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      flex
                      flex-col
                      items-center
                    "
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-[48px]
                        w-[48px]
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#F4EEFF]
                        shadow-sm
                      "
                    >

                      <Icon
                        size={20}
                        className="text-[#6115BD]"
                      />

                    </motion.div>

                    <span className="
                      mt-2
                      text-[10px]
                      font-medium
                      text-center
                      text-gray-700
                    ">
                      {item.label}
                    </span>

                  </motion.button>

                );

              })}

            </div>

          </motion.div>

          {/* =========================
              FOOTER
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.75,
              duration: 0.4,
            }}
            className="
              mt-6
              rounded-[18px]
              bg-gradient-to-r
              from-[#F8F5FF]
              to-[#FFF5FA]
              border
              border-[#EFE8FF]
              p-4
            "
          >

            <div className="
              flex
              items-center
              justify-between
            ">

              <div>

                <h3 className="
                  text-[14px]
                  font-bold
                  text-[#1B1B1B]
                ">
                  Need Assistance?
                </h3>

                <p className="
                  mt-1
                  text-[11px]
                  text-gray-500
                ">
                  Customer Care available 24×7
                </p>

              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  rounded-full
                  bg-[#6115BD]
                  px-4
                  py-2
                  text-[12px]
                  font-semibold
                  text-white
                "
              >
                Call
              </motion.button>

            </div>

          </motion.div>

        </motion.div>

      </motion.div>

    </div>
  );
}