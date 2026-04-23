import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-night py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-4" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Let&apos;s talk. <span className="not-italic">✌🏼</span>
          </h1>
          <p className="mt-4 text-sea-light/60 text-lg md:text-xl max-w-xl leading-relaxed">
            Fill in the form or send us an email.
            <br />
            We&apos;ll be in touch very soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}