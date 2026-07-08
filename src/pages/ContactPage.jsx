import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { FiCheckCircle, FiMail, FiMessageSquare, FiSend, FiUsers } from 'react-icons/fi'
import Button from '../components/Button'
import useSmoothScroll from '../hooks/useSmoothScroll'

const partnershipOptions = [
  {
    value: 'programme-delivery',
    label: 'Programme delivery',
    description: 'I run farmer training or extension programmes',
  },
  {
    value: 'farmer-financing',
    label: 'Farmer financing',
    description: 'I provide loans or credit to smallholder farmers',
  },
  {
    value: 'impact-measurement',
    label: 'Impact measurement',
    description: 'I need farm-level data to report outcomes',
  },
  {
    value: 'research-policy',
    label: 'Research or policy',
    description: 'I work on food security systems',
  },
  {
    value: 'something-else',
    label: 'Something else',
    description: 'I’ll explain below',
  },
]

const emailjsConfig = {
  // serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  // templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  // publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: "service_k2saasr",
  templateId: "template_tg754td",
  publicKey: "SZYWOg6gWnIjwuAez",
}

const ContactPage = () => {
  useSmoothScroll()
  const [selectedPartnerships, setSelectedPartnerships] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(null)

  const togglePartnership = (value) => {
    setSelectedPartnerships((currentSelections) =>
      currentSelections.includes(value)
        ? currentSelections.filter((selection) => selection !== value)
        : [...currentSelections, value],
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmissionStatus(null)

    if (selectedPartnerships.length === 0) {
      setSubmissionStatus({
        type: 'error',
        message: 'Please select at least one partnership option.',
      })
      return
    }

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setSubmissionStatus({
        type: 'error',
        message: 'Email sending is not configured yet. Please add the EmailJS environment values.',
      })
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const selectedPartnershipLabels = partnershipOptions
      .filter((option) => selectedPartnerships.includes(option.value))
      .map((option) => option.label)

    const templateParams = {
      full_name: formData.get('fullName'),
      organisation: formData.get('organisation'),
      role: formData.get('role'),
      email: formData.get('email'),
      reply_to: formData.get('email'),
      partnerships: selectedPartnershipLabels.join(', '),
      message: formData.get('message'),
      submitted_at: new Date().toLocaleString('en-KE', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, templateParams, {
        publicKey: emailjsConfig.publicKey,
      })

      form.reset()
      setSelectedPartnerships([])
      setSubmissionStatus({
        type: 'success',
        message: 'Thanks. Your message has been sent and we’ll respond soon.',
      })
    } catch (error) {
      setSubmissionStatus({
        type: 'error',
        message: error?.text || 'Something went wrong while sending your message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-[#F8F0D8] px-4 pb-16 pt-8 text-neutral-950 lg:px-12 lg:pb-24">
      <section className="mx-auto max-w-screen-2xl">
        <div className="grid overflow-hidden rounded-xl border-2 border-black bg-[#FEF8E2] lg:grid-cols-12">
          <div className="flex min-h-120 flex-col justify-between border-b-2 border-black bg-[#697B3B] p-6 text-[#FEF8E2] sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r-2 lg:p-12">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#FFCA55]">
                Partner with i-kuku
              </p>
              <h1 className="creative-font text-[clamp(3.8rem,7vw,6rem)] uppercase leading-[0.84]">
                Let’s move your farmers from guesswork to growth.
              </h1>
            </div>

            <div className="mt-12 max-w-xl border-t border-[#FEF8E2]/40 pt-6">
              <p className="text-lg leading-relaxed sm:text-xl">
                Every great farm decision starts with the right information. Every great
                partnership starts with a conversation. Tell us about your farmers and we’ll
                show you what ikuku can do for them.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid border-b-2 border-black sm:grid-cols-3">
              <div className="flex items-center gap-3 border-b-2 border-black bg-[#FFB51C] p-5 sm:border-b-0 sm:border-r-2">
                <FiUsers className="shrink-0 text-2xl" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-widest">Farmers</p>
              </div>
              <div className="flex items-center gap-3 border-b-2 border-black bg-[#F8F0D8] p-5 sm:border-b-0 sm:border-r-2">
                <FiMessageSquare className="shrink-0 text-2xl" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-widest">Conversation</p>
              </div>
              <div className="flex items-center gap-3 bg-[#EA4335] p-5 text-[#FEF8E2]">
                <FiCheckCircle className="shrink-0 text-2xl" aria-hidden="true" />
                <p className="text-sm font-bold uppercase tracking-widest">Growth</p>
              </div>
            </div>

            <form className="grid gap-6 p-6 sm:p-10 lg:p-12" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold uppercase tracking-[0.12em]">Full name</span>
                  <input
                    className="h-14 rounded-lg border-2 border-black bg-white px-4 text-base outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#007a35] focus:bg-[#FFFDF5]"
                    name="fullName"
                    placeholder="Your full name"
                    required
                    type="text"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold uppercase tracking-[0.12em]">Organisation</span>
                  <input
                    className="h-14 rounded-lg border-2 border-black bg-white px-4 text-base outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#007a35] focus:bg-[#FFFDF5]"
                    name="organisation"
                    placeholder="The name of your organisation"
                    required
                    type="text"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold uppercase tracking-[0.12em]">Your role</span>
                  <input
                    className="h-14 rounded-lg border-2 border-black bg-white px-4 text-base outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#007a35] focus:bg-[#FFFDF5]"
                    name="role"
                    placeholder="e.g. Programme Manager, CEO, Field Officer"
                    required
                    type="text"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold uppercase tracking-[0.12em]">Email address</span>
                  <input
                    className="h-14 rounded-lg border-2 border-black bg-white px-4 text-base outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#007a35] focus:bg-[#FFFDF5]"
                    name="email"
                    placeholder="We’ll only use this to respond to you"
                    required
                    type="email"
                  />
                </label>
              </div>

              <fieldset className="grid gap-3">
                <legend className="mb-1 text-sm font-bold uppercase tracking-[0.12em]">
                  How are you looking to partner?
                </legend>
                <p className="text-sm font-semibold text-[#697B3B]">Select all that apply:</p>
                <div className="grid gap-3">
                  {partnershipOptions.map((option) => {
                    const isSelected = selectedPartnerships.includes(option.value)

                    return (
                      <label
                        className={`grid cursor-pointer gap-1 rounded-lg border-2 p-4 transition-colors duration-200 ${isSelected
                          ? 'border-black bg-[#FFB51C]'
                          : 'border-black bg-white hover:bg-[#F8F0D8]'
                          }`}
                        key={option.value}
                      >
                        <span className="flex items-start gap-3">
                          <input
                            checked={isSelected}
                            className="mt-1 size-4 accent-[#007a35]"
                            name="partnerships"
                            onChange={() => togglePartnership(option.value)}
                            type="checkbox"
                            value={option.value}
                          />
                          <span>
                            <span className="font-bold">{option.label}</span>
                            <span> — {option.description}</span>
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <label className="grid gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.12em]">
                  Tell us about your farmers.
                </span>
                <textarea
                  className="min-h-40 rounded-lg border-2 border-black bg-white px-4 py-4 text-base outline-none transition-colors duration-200 placeholder:text-neutral-500 focus:border-[#007a35] focus:bg-[#FFFDF5]"
                  name="message"
                  placeholder="Who do you work with? What’s the challenge you’re trying to solve?"
                  required
                />
              </label>

              <div className="flex flex-col gap-4 border-t-2 border-black pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
                  <FiMail className="text-xl text-[#697B3B]" aria-hidden="true" />
                  We’ll only use your details to respond to this conversation.
                </p>
                <Button
                  bgColor="#FFB51C"
                  className={isSubmitting ? 'opacity-70' : ''}
                  disabled={isSubmitting}
                  icon={<FiSend className="text-xl" aria-hidden="true" />}
                  iconPosition="right"
                  type="submit"
                >
                  {isSubmitting ? 'Sending...' : 'Start the conversation'}
                </Button>
              </div>
              {submissionStatus && (
                <p
                  className={`rounded-lg border-2 border-black px-4 py-3 text-sm font-bold ${submissionStatus.type === 'success'
                    ? 'bg-[#D7E8B0] text-[#30410F]'
                    : 'bg-[#F8D6D0] text-[#7A1F16]'
                    }`}
                  role="status"
                >
                  {submissionStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
