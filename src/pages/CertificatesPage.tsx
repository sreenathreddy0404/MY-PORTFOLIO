import { motion } from "framer-motion";
import { certificates } from "@/constants/data";
import { FiExternalLink } from "react-icons/fi";
import NavbarNew from "@/components/layout/NavbarNew";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const CertificatesPage = () => {

  const featured = certificates.filter((c) => c.featured);
  const others = certificates.filter((c) => !c.featured);
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavbarNew />
      <div className="bg-background">

        {/* HEADER */}
        <section className="flex items-center justify-center px-6 mt-24">
          <div className="max-w-3xl text-center">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              // CERTIFICATIONS
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Verified <span className="text-primary">Credentials</span>
            </h1>

            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A collection of professional certifications and courses I’ve
              completed while expanding my knowledge in software engineering.
            </p>
          </div>
        </section>

        {/* FEATURED CERTIFICATES */}
        <section className="max-w-6xl mx-auto px-6 my-16 space-y-16">
          {featured.map((cert, index) => {

            const reverse = index % 2 !== 0;

            return (
              <div
                key={cert.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={reverse ? "lg:order-2" : ""}
                >
                  <div className="rounded-xl border bg-card p-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: reverse ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={reverse ? "lg:order-1" : ""}
                >
                  <span className="text-sm font-mono text-primary">
                    Featured Certificate
                  </span>

                  <h2 className="text-3xl font-bold mt-2">
                    {cert.title}
                  </h2>

                  <p className="text-muted-foreground mt-1">
                    {cert.issuer} · {cert.date}
                  </p>

                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full border text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium mt-6 text-primary"
                  >
                    View Credential
                    <FiExternalLink />
                  </a>
                </motion.div>

              </div>
            );
          })}
        </section>

        {/* ALL CERTIFICATES GRID */}
        {others.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-24 pb-20">

          <h2 className="text-2xl font-bold mb-10">
            All Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {others.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border rounded-xl bg-card p-4 hover:translate-y-[-4px] transition-transform"
              >

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-contain"
                />

                <h3 className="font-semibold mt-4">
                  {cert.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm mt-4 text-primary"
                >
                  View Credential
                  <FiExternalLink />
                </a>

              </motion.div>
            ))}

          </div>
        </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CertificatesPage;