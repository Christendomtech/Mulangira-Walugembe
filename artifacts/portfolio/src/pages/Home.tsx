import { Fragment, useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink, Mail } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-white">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md border-primary shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/"
            aria-label="Prince Edward Walugembe - Home"
            className="font-serif text-2xl font-medium tracking-wide flex items-center gap-1 text-white hover:text-accent transition-colors"
          >
            Prince{" "}
            <span className="text-accent text-xl" aria-hidden="true">
              ·
            </span>{" "}
            Walugembe
          </Link>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-white/80 font-medium">
            <a
              href="#about"
              className="hover:text-accent transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-accent transition-colors duration-300"
            >
              Work
            </a>
            <a
              href="#books"
              className="hover:text-accent transition-colors duration-300"
            >
              Books
            </a>
            <a
              href="#contact"
              className="hover:text-accent transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[#4D0F1E]/80 mix-blend-multiply z-10"></div>
            {/* Missing Image Placeholder */}
            <div className="w-full h-full bg-repeating-linear-gradient-45 from-primary to-[#6A1629] bg-[length:40px_40px] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-20"></div>
            </div>
          </div>

          <div className="container relative z-30 mx-auto px-6 md:px-12 text-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="block text-accent font-sans uppercase tracking-[0.2em] text-sm md:text-base mb-6 font-medium">
                His Royal Highness
              </span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1]">
                Prince Edward Fredrick
                <br className="hidden md:block" /> Walugembe
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-light font-serif italic mb-12">
                A member of the Buganda Royal Family &mdash; author,
                entrepreneur, and cultural diplomat &mdash; advancing heritage,
                enterprise, and the written word from the Pearl of Africa to the
                wider world.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-accent text-accent px-8 py-4 rounded-sm hover:bg-accent hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-medium group"
              >
                Begin a conversation{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Statement Section */}
        <section id="about" className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="font-serif text-3xl md:text-5xl italic text-primary leading-relaxed">
                "Heritage is the soil. Enterprise is the harvest. Service is
                what we owe both."
              </h2>
              <div className="mt-8 flex items-center justify-center gap-4 text-muted-foreground font-sans uppercase tracking-widest text-sm">
                <span className="w-8 h-[1px] bg-accent"></span>A guiding
                principle
                <span className="w-8 h-[1px] bg-accent"></span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-24 md:py-32 bg-background border-b border-border">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                {
                  num: "I.",
                  title: "Heritage",
                  desc: "Stewarding the cultural inheritance of the Buganda Kingdom through respectful representation, education, and the preservation of memory.",
                },
                {
                  num: "II.",
                  title: "Enterprise",
                  desc: "Building bridges between Ugandan agriculture, tourism, and global markets — coffee, trade, and investment as engines of dignified livelihoods.",
                },
                {
                  num: "III.",
                  title: "Service",
                  desc: "Patronage of causes that lift the next generation: education, youth empowerment, and the quiet work of cultural diplomacy.",
                },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col items-start group"
                >
                  <span className="font-serif italic text-accent text-3xl mb-4">
                    {pillar.num}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary mb-4 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans font-light">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ventures Section */}
        <section id="work" className="py-24 md:py-32 bg-muted">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
            >
              <span className="text-accent uppercase tracking-widest text-sm font-medium mb-4 block">
                Endeavors
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary">
                Global Enterprise
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                {
                  tag: "Agriculture",
                  title: "Coffee",
                  desc: "Connecting Ugandan coffee to discerning buyers abroad — quality at origin, fair value at destination.",
                },
                {
                  tag: "Hospitality",
                  title: "Tourism",
                  desc: "Curated experiences across Uganda's national parks, heritage sites, and royal landmarks — hosted with personal care.",
                },
                {
                  tag: "Markets",
                  title: "Trade & Investment",
                  desc: "Facilitating responsible inbound investment across agro-commodities, real estate, and cross-border trade with East Africa.",
                },
              ].map((venture, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-background p-10 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-500 group flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-secondary -mr-12 -mt-12 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium z-10">
                    {venture.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-primary mb-4 z-10">
                    {venture.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light mb-8 flex-grow z-10">
                    {venture.desc}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`Explore ${venture.title} details`}
                    className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-wider font-medium group-hover:text-primary transition-colors z-10"
                  >
                    Explore <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Books Section */}
        <section id="books" className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8"
            >
              <div className="max-w-xl">
                <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">
                  Authorship
                </h2>
                <p className="text-muted-foreground text-lg font-serif italic">
                  Reflections on heritage, leadership, and the long arc of
                  African enterprise — written from inside the tradition, for
                  readers everywhere.
                </p>
              </div>
              <BookOpen className="w-12 h-12 text-accent opacity-50 hidden md:block" />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                {
                  num: "I.",
                  meta: "Year · Genre",
                  title: "Book Title One",
                  blurb:
                    "A short blurb describing the book's central argument and why it matters now. Replace this with the principal's own words about the work.",
                },
                {
                  num: "II.",
                  meta: "Year · Genre",
                  title: "Book Title Two",
                  blurb:
                    "A second short blurb — keep these to two or three sentences.",
                },
                {
                  num: "III.",
                  meta: "Year · Genre",
                  title: "Book Title Three",
                  blurb:
                    "A third blurb about the work and its relevance to heritage and enterprise.",
                },
              ].map((book, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <div className="aspect-[2/3] bg-background border border-border shadow-sm mb-8 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-shadow duration-500">
                    {/* Placeholder Book Cover */}
                    <div className="absolute inset-0 border-[8px] border-secondary/50 m-4 flex flex-col items-center justify-center p-6 text-center">
                      <span className="font-serif italic text-accent mb-4">
                        {book.num}
                      </span>
                      <h4 className="font-serif text-primary text-xl px-4">
                        {book.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4 absolute bottom-8">
                        Cover Placeholder
                      </span>
                    </div>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-accent mb-3 block font-medium">
                    {book.meta.split(" · ").map((part, index, arr) => (
                      <Fragment key={index}>
                        {part}
                        {index < arr.length - 1 && (
                          <span aria-hidden="true"> · </span>
                        )}
                      </Fragment>
                    ))}
                  </span>
                  <h3 className="font-serif text-2xl text-primary mb-3">
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground font-light mb-6 text-sm leading-relaxed">
                    {book.blurb}
                  </p>
                  <a
                    href="#contact"
                    aria-label={`Request a copy of ${book.title}`}
                    className="inline-flex items-center gap-2 text-primary border-b border-primary/30 pb-1 text-sm font-medium uppercase tracking-wider group-hover:border-accent group-hover:text-accent transition-colors"
                  >
                    Request a copy <ArrowRight className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-24 md:py-32 bg-primary relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[#4D0F1E]/50"></div>
          <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Begin a conversation
              </h2>
              <p className="text-white/70 font-light text-lg mb-12">
                Correspondence is welcome regarding partnership, speaking
                engagements, and matters of cultural significance.
              </p>
              <a
                href="mailto:contact@princeedwardwalugembe.com"
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-sm hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm font-medium"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4D0F1E] py-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link
            href="/"
            aria-label="Prince Edward Walugembe - Home"
            className="font-serif text-xl tracking-wide flex items-center gap-1 text-white/90 hover:text-accent transition-colors"
          >
            Prince{" "}
            <span className="text-accent text-lg" aria-hidden="true">
              ·
            </span>{" "}
            Walugembe
          </Link>

          <div className="flex gap-6 text-sm uppercase tracking-wider text-white/50 font-medium">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#books" className="hover:text-accent transition-colors">
              Books
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          <div className="text-white/40 text-sm font-light">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
