"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import FadeIn from './FadeIn';

const faqData = [
    {
        id: '01',
        question: 'Is buying a plot in Bangalore a good investment?',
        answer: 'Yes, Bangalore is one of the fastest-growing real estate markets, and plots offer high appreciation and long-term value.',
    },
    {
        id: '02',
        question: 'Are these plots RERA approved?',
        answer: 'Yes, the project is RERA approved, ensuring transparency and legal safety.',
    },
    {
        id: '03',
        question: 'What is the price range of plots?',
        answer: 'Plot prices start from ₹42 Lakhs and vary based on size and location.',
    },
    {
        id: '04',
        question: 'Where is the project located?',
        answer: 'The project is located near Sarjapur, Chikkathirupathi, with excellent connectivity to IT hubs.',
    },
    {
        id: '05',
        question: 'Can I get a bank loan for plots?',
        answer: 'Yes, bank loan facilities are available for approved plots.',
    },
    {
        id: '06',
        question: 'What amenities are available?',
        answer: 'The project includes clubhouse, swimming pool, parks, security, and more.',
    },
    {
        id: '07',
        question: 'Is it a gated community?',
        answer: 'Yes, it is a fully gated community with 24/7 security.',
    },
    {
        id: '08',
        question: 'How far is it from ITPL?',
        answer: 'It is approximately 20–25 minutes from ITPL depending on traffic.',
    },
    {
        id: '09',
        question: 'Is it good for investment or living?',
        answer: 'It is ideal for both investment and building your dream home.',
    },
    {
        id: '10',
        question: 'How can I book a site visit?',
        answer: 'You can contact us directly via phone or fill the inquiry form on the website.',
    },
];

const AccordionItem = ({ id, question, answer, isOpen, onClick }: { id: string, question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div
            className={`border-b border-dark/10 overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-primary/5' : 'bg-transparent'
                }`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group cursor-pointer"
            >
                <div className="flex items-start gap-4 md:gap-8">
                    <span className="text-xs md:text-sm font-bold text-primary/30 mt-1 md:mt-2 shrink-0 tracking-widest">
                        {id}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold tracking-tight text-dark pr-4 leading-tight">
                        {question}
                    </h3>
                </div>
                <div className="flex-shrink-0 ml-2">
                    {isOpen ? (
                        <X className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
                    ) : (
                        <Plus className="w-5 h-5 md:w-6 md:h-6 text-dark group-hover:rotate-90 transition-transform duration-300" strokeWidth={1.5} />
                    )}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="px-6 md:px-8 pb-8 ml-8 md:ml-16">
                            <p className="text-base md:text-lg text-grey leading-relaxed max-w-4xl">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FAQ() {
    const [openId, setOpenId] = useState<string | null>('01');

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="py-16 md:py-20 pb-10 bg-white border-t border-dark/5" id="faq">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
                    {/* Title Section */}
                    <div className="lg:col-span-4">
                        <FadeIn>
                            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Common Queries</span>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-dark uppercase leading-[0.9] mb-8">
                                Frequently<br />Asked<br />Questions
                            </h2>
                            <p className="text-grey text-lg font-medium max-w-sm">
                                Find answers to common questions about our premium plotted developments and investment opportunities.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Accordion List */}
                    <div className="lg:col-span-8">
                        <FadeIn delay={0.2}>
                            <div className="flex flex-col border-t border-dark/10">
                                {faqData.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        {...item}
                                        isOpen={openId === item.id}
                                        onClick={() => toggleAccordion(item.id)}
                                    />
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
