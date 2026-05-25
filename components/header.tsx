"use client"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Poppins, Cinzel } from "next/font/google"

const languages = [
  { code: 'pt', label: 'Português', googCode: null },
  { code: 'fr', label: 'Français',  googCode: 'fr' },
  { code: 'en', label: 'English',   googCode: 'en' },
  { code: 'es', label: 'Español',   googCode: 'es' },
  { code: 'ar', label: 'العربية',   googCode: 'ar' },
]

  const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
  })

export function Header() {
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0])
  const [isTranslated, setIsTranslated] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    // Detect current language from cookie
    const cookie = document.cookie
    const match = cookie.match(/googtrans=\/pt\/([a-z]+)/)
    if (match) {
      const found = languages.find(l => l.googCode === match[1])
      if (found) { setCurrentLang(found); setIsTranslated(true) }
    }

    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    // Close dropdown on outside click
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const showDesktopNav = windowWidth !== null && windowWidth >= 1024
  const showHamburger = windowWidth !== null && windowWidth < 1024
  const isMobile = windowWidth !== null && windowWidth < 640

  useEffect(() => {
    if (!mobileMenuOpen || !showHamburger) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen, showHamburger])

  const switchLanguage = (lang: typeof languages[0]) => {
    setCurrentLang(lang)
    setLangDropdownOpen(false)
    setMobileMenuOpen(false)

    const hostname = window.location.hostname
    const rootHostname = hostname.replace(/^www\./, '')
    const expires = 'Thu, 01 Jan 1970 00:00:00 GMT'

    const clearCookie = (domain?: string) => {
      const domainPart = domain ? `; domain=${domain}` : ''
      document.cookie = `googtrans=; expires=${expires}; Max-Age=0; path=/${domainPart}`
    }

    clearCookie()
    clearCookie(hostname)
    if (rootHostname !== hostname) {
      clearCookie(rootHostname)
      clearCookie(`.${rootHostname}`)
    }

    if (lang.googCode === null) {
      // Back to Portuguese
      window.location.replace(window.location.pathname + window.location.search + window.location.hash)
      return
    }

    const translatedValue = `googtrans=/pt/${lang.googCode}; path=/; max-age=${60 * 60 * 24 * 365}`
    document.cookie = translatedValue
    document.cookie = `${translatedValue}; domain=${hostname}`
    if (rootHostname !== hostname) {
      document.cookie = `${translatedValue}; domain=${rootHostname}`
      document.cookie = `${translatedValue}; domain=.${rootHostname}`
    }
    window.location.replace(window.location.pathname + window.location.search + window.location.hash)
  }

  const handleNavClick = () => setMobileMenuOpen(false)

  // const navLink =
  //   "relative text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 " +
  //   "after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-gradient-to-r " +
  //   "after:from-[#C8935F] after:to-[#E0A878] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"

  const navLink =
    "relative text-base font-medium transition-colors duration-300 " +
    "text-[#C8935F] hover:text-[#E8C99A] " +
    "after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-gradient-to-r " +
    "after:from-[#C8935F] after:to-[#E0A878] after:rounded-full after:transition-all after:duration-300 hover:after:w-full"

  // const mobileNavLink =
  //   "block py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 border-b border-border last:border-0"

  const mobileNavLink =
    "block py-3 text-lg font-medium text-[#C8935F] hover:text-[#E8C99A] transition-colors duration-300 border-b border-border last:border-0"

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div ref={!mobile ? dropdownRef : undefined} style={{ position: 'relative', zIndex: 70 }}>
      <button
        onClick={() => setLangDropdownOpen(!langDropdownOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: mobile ? '8px 12px' : '6px 12px',
          fontSize: '14px',
          fontWeight: 500,
          borderRadius: '6px',
          border: '1px solid #C8935F',
          backgroundColor: 'transparent',
          color: '#C8935F',
          cursor: 'pointer',
          width: mobile ? '100%' : 'auto',
          justifyContent: mobile ? 'space-between' : 'flex-start',
        }}
      >
        <span>{currentLang.label}</span>
        <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </button>

      <AnimatePresence>
        {langDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: mobile ? 'static' : 'absolute',
              top: mobile ? 'auto' : 'calc(100% + 8px)',
              left: mobile ? 'auto' : 0,
              right: mobile ? 'auto' : 0,
              zIndex: mobile ? 60 : 80,
              borderTop: '1px solid #e5e7eb',
              backgroundColor: 'rgba(250, 247, 242, 0.98)',
              maxHeight: mobile ? '40vh' : '260px',
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
              borderRadius: mobile ? '0 0 8px 8px' : '10px',
              width: mobile ? '100%' : '220px',
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px 14px',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: lang.code === currentLang.code ? 600 : 400,
                  backgroundColor: lang.code === currentLang.code ? '#C8935F15' : 'transparent',
                  color: lang.code === currentLang.code ? '#C8935F' : '#555',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f0ece6',
                }}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border shadow"
        style={{
          // backgroundColor: 'rgba(250, 247, 242, 0.95)',
          backgroundColor: '#0D2B4A',
          marginTop: isTranslated ? '40px' : '0px',
          transition: 'margin-top 0.3s ease',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          padding: isMobile ? '0 18px' : '0 120px',
          width: '100%',
          boxSizing: 'border-box',
        }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <img src="/perola_humana.jpeg" alt="Pérola Humana" style={{ height: showDesktopNav ? '56px' : '44px', width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
          <span
            className={cinzel.className}
            style={{
              fontWeight: 600,
              fontSize: isMobile ? '0.85rem' : showDesktopNav ? '1.4rem' : '1.1rem',
              color: '#C8935F',
              whiteSpace: 'nowrap'
            }}
          >
            Pérola Humana
          </span>
        </div>

        {/* Desktop Navigation */}
        {showDesktopNav && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1, justifyContent: 'center', padding: '0 16px' }}>
            <a href="#hero" className={navLink}>Início</a>
            <a href="#about" className={navLink}>Sobre Nós</a>
            <a href="#mission" className={navLink}>O que fazemos</a>
            <a href="#diseases" className={navLink}>Doenças</a>
            <a href="#health-videos" className={navLink}>Saúde</a>
            <a href="#self-knowledge" className={navLink}>Autoconhecimento</a>
            <a href="#book" className={navLink}>Livro</a>
            <a href="#events" className={navLink}>Eventos</a>
            <a href="#contact" className={navLink}>Contacto</a>
          </nav>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* Lang switcher — desktop/tablet */}
          {!showHamburger && <LangSwitcher />}

          {/* Hamburger */}
          {showHamburger && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#666' }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

          <div id="google_translate_element" style={{ display: 'none' }} />
        </div>
      </motion.header>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {mobileMenuOpen && showHamburger && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              borderTop: '1px solid #e5e7eb',
              backgroundColor: 'rgba(250, 247, 242, 0.98)',
              position: 'fixed',
              top: isTranslated ? '120px' : '80px',
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
              WebkitOverflowScrolling: 'touch',
              zIndex: 60,
            }}
          >
            <div style={{ overflow: 'visible', position: 'relative' }}> {/* wrapper interno */}
              <nav style={{ padding: '8px 16px 24px' }}>
                <a href="#hero" onClick={handleNavClick} className={mobileNavLink}>Início</a>
                <a href="#about" onClick={handleNavClick} className={mobileNavLink}>Sobre Nós</a>
                <a href="#mission" onClick={handleNavClick} className={mobileNavLink}>O que fazemos</a>
                <a href="#diseases" onClick={handleNavClick} className={mobileNavLink}>Doenças</a>
                <a href="#health-videos" onClick={handleNavClick} className={mobileNavLink}>Saúde</a>
                <a href="#self-knowledge" onClick={handleNavClick} className={mobileNavLink}>Autoconhecimento</a>
                <a href="#book" onClick={handleNavClick} className={mobileNavLink}>Livro</a>
                <a href="#events" onClick={handleNavClick} className={mobileNavLink}>Eventos</a>
                <a href="#contact" onClick={handleNavClick} className={mobileNavLink}>Contacto</a>

                {/* Lang switcher no menu mobile */}
                <div style={{ padding: '12px 0' }}>
                  <LangSwitcher mobile />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}