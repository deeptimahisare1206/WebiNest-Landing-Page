import faqs from "../faqData.json";

export default function FAQ() {
  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border border-gray-200 rounded-lg">
            <span className="font-medium text-gray-800">{faq.question}</span>
            <span className="font-medium text-gray-800">{faq.answer}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
