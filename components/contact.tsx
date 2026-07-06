"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, Instagram, MessageCircle, Send, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+351 939 069 379",
      link: "https://wa.me/351939069379",
      color: "text-green-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@perolahumana",
      link: "https://instagram.com/perolahumana.84",
      color: "text-pink-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "geral@perolahumana.org",
      link: "mailto:geral@perolahumana.org",      
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+351 221 117 865",
      link: "tel:+351221117865",
      color: "text-purple-500",
    },
  ]

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  const to = "geral@perolahumana.org"
  const subject = encodeURIComponent(formData.subject)
  const body = encodeURIComponent(
    `Nome: ${formData.name}
Email de resposta: ${formData.email}

Mensagem:
${formData.message}`
  )

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}&reply-to=${formData.email}`

  setIsSubmitted(true)
  setTimeout(() => {
    setIsSubmitted(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }, 3000)
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      })
    }
  }

  return (
    <section id="contact" className="pt-32 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 relative scroll-mt-20 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">FALE CONOSCO</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem alguma dúvida? Envie-nos uma mensagem e responderemos o mais breve possível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">Métodos de contacto</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <div className={`p-3 rounded-full bg-muted ${method.color}`}>
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{method.label}</p>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-1">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="O seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  className={`transition-all duration-300 shadow-sm py-0 ${errors.name ? "border-destructive" : ""}`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="O seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`transition-all duration-300 shadow-sm ${errors.email ? "border-destructive" : ""}`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Assunto"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`transition-all duration-300 shadow-sm ${errors.subject ? "border-destructive" : ""}`}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mt-1"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div className="flex-1 flex flex-col min-h-0">
                <Textarea
                  name="message"
                  placeholder="A sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  className={`transition-all duration-300 resize-none shadow-sm h-full rounded-3xl ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full transition-all duration-300 shadow-md hover:shadow-lg"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Mensagem Enviada!
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Enviar Mensagem
                  </div>
                )}
              </Button>

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-muted-foreground"
                >
                  Obrigado pela sua mensagem. Entraremos em contacto em breve!
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

