import { motion } from "framer-motion";
import PaymentSection from "./paymentSection";

import {
  Plane,
  Train,
  Bus,
  Hotel,
  Gift,
  Ticket,
  Store,
  HeartPulse,
  Car,
  Home,
  FileText,
  ShoppingBag,
} from "lucide-react";

export default function LifestyleTab() {
  const travel = [
    {
      label: "Flights",
      icon: Plane,
    },
    {
      label: "Train",
      icon: Train,
    },
    {
      label: "Bus",
      icon: Bus,
    },
    {
      label: "Hotels",
      icon: Hotel,
    },
  ];

  const offers = [
    {
      label: "Gift Cards",
      icon: Gift,
    },
    {
      label: "Vouchers",
      icon: Ticket,
    },
    {
      label: "Stores",
      icon: Store,
    },
    {
      label: "Wellness",
      icon: HeartPulse,
    },
  ];

  const otherServices = [
    {
      label: "ClearTax",
      icon: FileText,
    },
    {
      label: "YONO Motors",
      icon: Car,
    },
    {
      label: "Property",
      icon: Home,
    },
    {
      label: "Shopping",
      icon: ShoppingBag,
    },
  ];

  const sectionAnimation = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <div className="space-y-6">

      <motion.div
        {...sectionAnimation}
        transition={{
          ...sectionAnimation.transition,
          delay: 0.05,
        }}
      >
        <PaymentSection
          title="Travel"
          items={travel}
        />
      </motion.div>


      <motion.div
        {...sectionAnimation}
        transition={{
          ...sectionAnimation.transition,
          delay: 0.12,
        }}
      >
        <PaymentSection
          title="Offers & Store"
          items={offers}
        />
      </motion.div>


      <motion.div
        {...sectionAnimation}
        transition={{
          ...sectionAnimation.transition,
          delay: 0.19,
        }}
      >
        <PaymentSection
          title="Other Services"
          items={otherServices}
        />
      </motion.div>

    </div>
  );
}