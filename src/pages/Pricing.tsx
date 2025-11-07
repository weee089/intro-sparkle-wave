import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Pricing as PricingComponent } from '@/components/ui/pricing';

const pricingPlans = [
  {
    name: "STARTER",
    price: "9",
    yearlyPrice: "7",
    period: "month",
    features: [
      "Up to 5 projects",
      "Basic AI builder",
      "Community templates",
      "Email support",
      "7-14 days free trial",
    ],
    description: "Perfect for individuals starting out",
    buttonText: "Start Free Trial",
    href: "/register",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "29",
    yearlyPrice: "23",
    period: "month",
    features: [
      "Unlimited projects",
      "Full AI orchestration",
      "Team collaboration",
      "Priority support",
      "Optional AI credits add-on",
      "7-14 days free trial",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/register",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "pricing",
    features: [
      "All Professional features",
      "API Access",
      "Dedicated onboarding",
      "SLA & Security",
      "Premium support add-on",
      "Custom contract terms",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <PricingComponent
          plans={pricingPlans}
          title="Simple, Transparent Pricing"
          description="Choose the plan that works for you. Annual billing includes 20% discount. All plans include access to our AI-powered platform and dedicated support."
        />
      </div>
      <Footer />
    </div>
  );
}
