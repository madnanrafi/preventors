import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


export function SocialProof() {
    const testimonials = [
        {
            name: "Ahmed Malik",
            location: "Bahria Town, Rawalpindi",
            text: "I was skeptical about pest control services, but Preventors were different. They explained everything, used safe products, and the termites are gone completely.",
            initials: "AM",
        },
        {
            name: "Saima Bibi",
            location: "Satellite Town, Rawalpindi",
            text: "Fast service and very professional team. They came on the same day within 2 hours of my call. Highly recommended for termite proofing.",
            initials: "SB",
        },
        {
            name: "Usman Ghani",
            location: "Westridge, Rawalpindi",
            text: "The best part was no bad smell afterwards. My kids were back playing in the lounge the same evening. Great service!",
            initials: "UG",
        },
    ];

    // Note: Avatar needs to be installed, or we can just use divs. 
    // Since I didn't install Avatar component individually, I'll use a fallback div design to be safe 
    // or I can assume standard HTML/CSS ifshadcn avatar is missing.
    // Actually, I didn't install 'avatar' in the shadcn step. I'll use a simple rounded div.

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl text-slate-900 mb-12">
                    Trusted by Neighbors in Rawalpindi
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="border-none shadow-md bg-white">
                            <CardContent className="p-6">
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    "{t.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                                        <span className="text-slate-500 text-xs">{t.location}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
