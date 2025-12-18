import { ShieldCheck, Moon, Zap } from "lucide-react";

export function Benefits() {
    const benefits = [
        {
            title: "Sleep Peacefully Again",
            description: "Eliminate bed bugs and noises in the walls so you can rest easy.",
            icon: <Moon className="w-10 h-10 text-blue-600 mb-4" />,
        },
        {
            title: "Safe for Kids & Pets",
            description: "We use WHO-approved, low-toxicity treatments that are tough on pests, safe for family.",
            icon: <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />,
        },
        {
            title: "Immediate Results",
            description: "See a dramatic reduction in pest activity within 24 hours of our first visit.",
            icon: <Zap className="w-10 h-10 text-blue-600 mb-4" />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Why Homeowners in Rawalpindi Choose Us
                    </h2>
                    <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                        We don't just spray chemicals; we solve your pest problems for good using safe and proven methods.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-3 bg-blue-100 rounded-full mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                            <p className="text-slate-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
