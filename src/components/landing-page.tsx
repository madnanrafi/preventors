import { Hero } from "./hero";
import { Benefits } from "./benefits";
import { SocialProof } from "./social-proof";
import { FAQ } from "./faq";
import { CTASection } from "./cta-section";

export function LandingPage() {
    return (
        <div className="flex flex-col w-full font-sans text-gray-900">
            <Hero />
            <Benefits />
            <SocialProof />
            <FAQ />
            <CTASection />
            {/* Footer can be simple enough to be inline or separate, checking plan */}
            <footer className="py-6 text-center text-sm text-gray-500 border-t">
                <p>© {new Date().getFullYear()} Preventors Pest Control Services. All rights reserved.</p>
                <p className="mt-1">Rawalpindi, Punjab, Pakistan</p>
            </footer>
        </div>
    );
}
