import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-20 bg-blue-900">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                    Ready to Live Pest-Free?
                </h2>
                <p className="text-blue-100 md:text-xl max-w-2xl mx-auto mb-10">
                    Don't wait for the problem to get worse. Book your free inspection today and let our experts handle the rest.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Directing to top of page form or separate modal action in real app. 
            For this page, we can just anchor to top or have a button that says 'Call Now' on mobile */}
                    <Button className="h-14 px-8 text-lg font-bold bg-white text-blue-900 hover:bg-blue-50 shadow-xl w-full sm:w-auto">
                        Book My Free Inspection
                    </Button>
                    <Button variant="outline" className="h-14 px-8 text-lg font-bold border-blue-400 bg-transparent text-white hover:bg-blue-800 hover:text-white w-full sm:w-auto">
                        Call: 0337-5627617
                    </Button>
                </div>
            </div>
        </section>
    );
}
