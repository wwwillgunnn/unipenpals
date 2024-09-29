'use client';

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="my-[112px] mx-8" id="faq">
        <div className="flex flex-col gap-5 lg:gap-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">Frequently Asked Questions</h1>
            <p className="text-base lg:text-lg text-center">Find answers to frequently asked questions to help you quickly resolve common queries.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-20">
            {/* FAQ 1 */}
            <div className="border-b border-gray-300">
            <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
                onClick={() => toggle(1)}
            >
                What is Uni Pen Pals?
                <span>{open === 1 ? "-" : "+"}</span>
            </button>
            {open === 1 && (
                <p className="text-[#E0E0E0] mb-4">
                Uni Pen Pals is a platform that allows university students to connect anonymously
                through written correspondence, fostering meaningful one-on-one relationships.
                </p>
            )}
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-gray-300">
            <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
                onClick={() => toggle(2)}
            >
                How does the pen pal service work?
                <span>{open === 2 ? "-" : "+"}</span>
            </button>
            {open === 2 && (
                <p className="text-[#E0E0E0] mb-4">
                You sign up, create a profile, and get matched with another student. You can then
                start exchanging messages through our platform.
                </p>
            )}
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-gray-300">
            <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
                onClick={() => toggle(3)}
            >
                Is the service free?
                <span>{open === 3 ? "-" : "+"}</span>
            </button>
            {open === 3 && (
                <p className="text-[#E0E0E0] mb-4">
                Yes, the pen pal service is free to use for all university students.
                </p>
            )}
            </div>

            {/* FAQ 4 */}
            <div className="border-b border-gray-300">
            <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
                onClick={() => toggle(4)}
            >
                Can I choose my pen pal?
                <span>{open === 4 ? "-" : "+"}</span>
            </button>
            {open === 4 && (
                <p className="text-[#E0E0E0] mb-4">
                No, our system will randomly match you with a pen pal.
                </p>
            )}
            </div>

            {/* FAQ 5 */}
            <div className="border-b border-gray-300">
            <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold"
                onClick={() => toggle(5)}
            >
                How do I know if my information is safe?
                <span>{open === 5 ? "-" : "+"}</span>
            </button>
            {open === 5 && (
                <p className="text-[#E0E0E0] mb-4">
                We take privacy seriously. All personal information is kept confidential and is not
                shared with other users without your consent.
                </p>
            )}
            </div>
        </div>
    </section>
  );
}
