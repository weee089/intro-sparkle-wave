import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { Mail, Instagram, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    text: "WeeWeb transformed how we build web applications. The AI assistance and real-time preview cut our development time in half!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Johnson",
    role: "Founder, TechStart",
  },
  {
    text: "The best web development platform I've used. Clean interface, powerful features, and excellent support team.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "Frontend Developer",
  },
  {
    text: "WeeWeb's templates saved us weeks of development time. Highly customizable and production-ready.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emma Williams",
    role: "Tech Lead",
  },
  {
    text: "Exceptional platform for rapid prototyping. The AI suggestions are surprisingly accurate and helpful.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Martinez",
    role: "Startup Founder",
  },
  {
    text: "Our team's productivity increased significantly after switching to WeeWeb. The collaboration features are top-notch.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Lisa Anderson",
    role: "Engineering Manager",
  },
  {
    text: "WeeWeb made it possible for our small team to build enterprise-level applications quickly and efficiently.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Jessica Taylor",
    role: "CTO",
  },
  {
    text: "The visual editor combined with code flexibility gives us the best of both worlds. Absolutely love it.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Ryan Thompson",
    role: "Full Stack Developer",
  },
  {
    text: "Customer support is incredibly responsive. They helped us migrate our entire platform seamlessly.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sophie Brown",
    role: "DevOps Engineer",
  },
  {
    text: "WeeWeb's deployment pipeline is smooth and reliable. We ship updates multiple times a day with confidence.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "James Wilson",
    role: "Senior Developer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Contact Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Connect with us through any of these channels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {/* Email */}
            <a
              href="mailto:contact@weeweb.com"
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">contact@weeweb.com</p>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/weeweb"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                  <p className="text-muted-foreground">@weeweb</p>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/weeweb"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">WeeWeb</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background pb-20 relative">
        <div className="container z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
          >
            <div className="flex justify-center">
              <div className="border py-1 px-4 rounded-lg text-sm">Customer Reviews</div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mt-5">
              What our users say
            </h2>
            <p className="text-center mt-5 opacity-75">
              See what our customers have to say about us.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
