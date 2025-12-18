import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Star, ShieldCheck, Phone } from "lucide-react";

export function Hero() {
    return (
        <section className="relative w-full bg-slate-50 border-b border-slate-200 lg:pt-24 pt-12 pb-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

                    {/* Left Column: Copy & Value Prop */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-800">
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                                #1 Pest Control in Rawalpindi
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                                Live Pest-Free & <span className="text-blue-600">Protect Your Family</span>
                            </h1>
                            <p className="max-w-[600px] text-lg text-slate-600 md:text-xl leading-relaxed">
                                Don’t let pests take over your home. We provide professional, safe, and effective pest control services in Rawalpindi. Get peace of mind today.
                            </p>
                        </div>

                        {/* Mini Social Proof */}
                        <div className="flex items-center gap-4 text-sm font-medium text-slate-700">
                            <div className="flex items-center text-yellow-500">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <span className="text-slate-900 font-bold">4.9/5 Rating</span>
                            <span className="hidden sm:inline text-slate-300">|</span>
                            <span className="text-slate-600">1,000+ Homes Protected</span>
                        </div>

                        {/* Desktop only features list or visual cue could go here */}
                        <div className="hidden lg:flex flex-col gap-3 text-slate-600 mt-4">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span>Safe for Kids & Pets</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                                <span>100% Satisfaction Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: CTA Form */}
                    <div className="flex flex-col items-center justify-center lg:items-start w-full">
                        <Card className="w-full max-w-md shadow-2xl border-blue-100 bg-white relative z-10">
                            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 rounded-t-lg"></div>
                            <CardHeader className="space-y-1 text-center pb-6">
                                <CardTitle className="text-2xl font-bold text-slate-900">
                                    Book Your FREE Inspection
                                </CardTitle>
                                <CardDescription className="text-slate-500">
                                    Fast response. No obligation.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-slate-700 font-medium">Full Name</Label>
                                        <Input id="name" placeholder="Ali Khan" required className="h-11" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                                        <Input id="phone" type="tel" placeholder="0300 1234567" required className="h-11" />
                                    </div>
                                    <Button type="submit" className="w-full h-12 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-md transition-all mt-2">
                                        Book My Free Inspection
                                    </Button>
                                    <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400">
                                        <ShieldCheck className="w-3 h-3" />
                                        <span>Your information is 100% safe. No spam.</span>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Background decoration for form */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -z-10 pointer-events-none hidden lg:block"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
