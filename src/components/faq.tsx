import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    const faqs = [
        {
            question: "Is the treatment safe for my children and pets?",
            answer: "Yes, absolutely. We use advanced, low-toxicity products approved by health authorities. We also provide specific instructions on when it's safe to re-enter the treated area (usually within 2-4 hours) to ensure total safety.",
        },
        {
            question: "How much does a pest inspection cost?",
            answer: "The initial inspection is 100% FREE. We come to your property, assess the situation, and provide a no-obligation quote. You only pay if you decide to proceed with the treatment.",
        },
        {
            question: "Do you provide a guarantee on your services?",
            answer: "Yes! We offer a satisfaction guarantee. For most treatments, if pests return within the warranty period (typically 6 months to 1 year depending on the service), we will re-treat the area at no extra cost.",
        },
        {
            question: "How quickly can you come to my house?",
            answer: "We offer same-day or next-day appointments in Rawalpindi. Call us now to secure the earliest slot.",
        },
        {
            question: "What pests do you handle?",
            answer: "We handle all common pests including termites (deemak), cockroaches, bed bugs, ants, rats, and mosquitoes.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl text-slate-900 mb-12">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left font-semibold text-slate-900 text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
