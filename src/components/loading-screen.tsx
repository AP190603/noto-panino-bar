import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoImg from "@assets/175b8506-a4ad-419a-a047-7af61f178955_1773648940204.jpg";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => onComplete(), 2800);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "hsl(25 18% 8%)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, hsl(42 78% 58% / 0.18), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center" style={{ perspective: "800px" }}>
        {/* Coin-spinning logo */}
        <motion.img
          src={logoImg}
          alt="NOTO"
          className="w-24 h-24 rounded-full object-cover mb-7"
          style={{ boxShadow: "0 0 40px hsl(42 78% 58% / 0.3)" }}
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{
            opacity: [0, 1, 1, 1, 1],
            rotateY: [0, 0, 360, 720, 1080],
          }}
          transition={{
            duration: 2.6,
            ease: ["easeIn", "easeIn", "easeInOut", "easeInOut", "easeInOut"],
            times: [0, 0.2, 0.55, 0.78, 1],
          }}
        />

        {/* NOTO wordmark — padding-left compensates for letter-spacing optical shift */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display font-bold text-white"
          style={{
            fontSize: "3rem",
            letterSpacing: "0.18em",
            paddingLeft: "0.18em",
            lineHeight: 1,
          }}
        >
          NOTO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            color: "hsl(42 78% 58%)",
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            paddingLeft: "0.28em",
            marginTop: "0.6rem",
            textTransform: "uppercase",
          }}
        >
          Panino · Dolce · Caffé
        </motion.p>
      </div>
    </motion.div>
  );
}
