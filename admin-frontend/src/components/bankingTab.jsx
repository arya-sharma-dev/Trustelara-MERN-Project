import { motion } from "framer-motion";
import PaymentSection from "./paymentSection";

import {
  Landmark,
  TrendingUp,
  Briefcase,
  PiggyBank,
  HandCoins,
  Home,
  Coins,
  Wallet,
  Shield,
  HeartPulse,
  Car,
  Activity,
  CreditCard,
  BadgeDollarSign,
  Globe,
  WalletCards,
  UserRound,
  Receipt,
  ScrollText,
  LockKeyhole,
} from "lucide-react";

export default function BankingTab() {
  const investments = [
    {
      label: "Mutual Funds",
      icon: TrendingUp,
    },
    {
      label: "Demat",
      icon: Briefcase,
    },
    {
      label: "NPS",
      icon: Landmark,
    },
    {
      label: "VPF",
      icon: PiggyBank,
    },
  ];

  const loans = [
    {
      label: "Personal Loan",
      icon: HandCoins,
    },
    {
      label: "Home Loan",
      icon: Home,
    },
    {
      label: "Gold Loan",
      icon: Coins,
    },
    {
      label: "Loan Against MF",
      icon: Wallet,
    },
  ];

  const deposits = [
    {
      label: "Fixed Deposit",
      icon: PiggyBank,
    },
    {
      label: "Recurring Deposit",
      icon: Wallet,
    },
    {
      label: "Annuity",
      icon: Landmark,
    },
    {
      label: "Auto Sweep",
      icon: TrendingUp,
    },
  ];

  const insurance = [
    {
      label: "Life",
      icon: Shield,
    },
    {
      label: "Health",
      icon: HeartPulse,
    },
    {
      label: "Motor",
      icon: Car,
    },
    {
      label: "Accident",
      icon: Activity,
    },
  ];

  const cards = [
    {
      label: "Credit Card",
      icon: CreditCard,
    },
    {
      label: "Debit Card",
      icon: BadgeDollarSign,
    },
    {
      label: "Forex Card",
      icon: Globe,
    },
    {
      label: "Prepaid Card",
      icon: WalletCards,
    },
  ];

  const moreServices = [
    {
      label: "Accounts",
      icon: UserRound,
    },
    {
      label: "Tax",
      icon: Receipt,
    },
    {
      label: "Cheque",
      icon: ScrollText,
    },
    {
      label: "Secure Lock",
      icon: LockKeyhole,
    },
  ];

  const sections = [
    {
      title: "Investments",
      items: investments,
    },
    {
      title: "Loans",
      items: loans,
    },
    {
      title: "Deposits",
      items: deposits,
    },
    {
      title: "Insurance",
      items: insurance,
    },
    {
      title: "Cards",
      items: cards,
    },
    {
      title: "More Services",
      items: moreServices,
    },
  ];

  return (
    <div className="space-y-6">

      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
            delay: 0.05 + index * 0.055,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <PaymentSection
            title={section.title}
            items={section.items}
          />
        </motion.div>
      ))}

    </div>
  );
}