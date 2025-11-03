import { Zap, Layers, Code, Figma, Workflow, Rocket, Users, Lock, Package, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Instant AI Builder",
    description: "Generate dashboards, web apps, and workflows from plain text prompts or voice—in seconds.",
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "Unified Workspace",
    description: "Bring together design, code, data, and deployment in one seamless, integrated platform.",
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
  },
  {
    icon: <Code className="h-4 w-4" />,
    title: "Smart Code Generation",
    description: "Real-time, AI-assisted code writing and refactoring with auto-completion and error checks.",
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
  },
  {
    icon: <Figma className="h-4 w-4" />,
    title: "Design-to-Code",
    description: "Instantly turn UI mockups and Figma projects into production-ready code and assets.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
  },
  {
    icon: <Workflow className="h-4 w-4" />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks, notifications, and integrations—no manual setup required.",
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]"
  },
  {
    icon: <Rocket className="h-4 w-4" />,
    title: "One-Click Deployment",
    description: "Launch your dashboard, app, or site instantly to the cloud, with auto-rollbacks and version control.",
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]"
  },
  {
    icon: <Users className="h-4 w-4" />,
    title: "Live Preview & Collaboration",
    description: "Edit, preview, and share changes with your team in real time, like Google Docs for product building.",
    area: "md:[grid-area:4/1/5/7] xl:[grid-area:3/1/4/5]"
  },
  {
    icon: <Package className="h-4 w-4" />,
    title: "Template & Asset Marketplace",
    description: "Access ready-made templates, UI kits, and plugins, or share your own creations with the community.",
    area: "md:[grid-area:4/7/5/13] xl:[grid-area:3/5/4/9]"
  },
  {
    icon: <Lock className="h-4 w-4" />,
    title: "User & Team Spaces",
    description: "Personalize your workspace, invite collaborators, and manage roles in multi-team projects.",
    area: "md:[grid-area:5/1/6/7] xl:[grid-area:3/9/4/13]"
  },
  {
    icon: <Shield className="h-4 w-4" />,
    title: "Secure & Scalable",
    description: "Built on robust cloud infrastructure, with granular permissions and enterprise-grade security.",
    area: "md:[grid-area:5/7/6/13] xl:[grid-area:4/1/5/13]"
  },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export function FeaturesSection() {
  return (
    <section className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Everything You Need to Build Faster
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features that transform your ideas into production-ready applications
          </p>
        </div>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-5 lg:gap-4 xl:grid-rows-4">
          {features.map((feature, index) => (
            <GridItem
              key={index}
              area={feature.area}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
