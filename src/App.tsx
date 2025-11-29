import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./index.css";
import resumePdf from "./assets/Keval's Resume (1).pdf";
import newspaperPdf from "./assets/newspaper final.pdf";
import memoPdf from "./assets/what should they do memo assignment keval (1) (3).docx - Google Docs.pdf";
import dissertationPdf from "./assets/Disssertation.pdf";

const navLinks = [
  { label: "About me", href: "#top" },
  { label: "Videos", href: "#videos" },
  { label: "Audio", href: "#audio" },
  { label: "Written", href: "#written" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Instagram",
    display: "@keval.studio",
    href: "https://instagram.com/keval.studio",
  },
  {
    label: "Twitter",
    display: "@kevalstudio",
    href: "https://twitter.com/kevalstudio",
  },
  {
    label: "Email",
    display: "hello@kevalstudio.com",
    href: "mailto:hello@kevalstudio.com",
  },
];

const aboutParagraphs = [
  "I'm an aspiring Brand and Media Strategist combining a journalism-rooted storytelling practice with analytical training in economics. Currently pursuing an M.S. in Media Innovation and Data Communication at Northeastern University, I focus on digital media strategy, audience research, and data-driven storytelling to help brands and organizations shape clear, memorable narratives. My work sits at the intersection of creative communication and market insight, translating complex ideas into compelling content and strategic campaigns that resonate with target audiences.",
  "I’m passionate about content strategy and marketing, and I enjoy collaborating on campaigns that blend creative thinking with audience analytics and emerging technologies like AI. Curious and adaptable, I bring strategic thinking, research rigor, and a flair for narrative to real-world projects, always looking for opportunities to turn insight into impact.",
];

const resumeResource = {
  label: "My Resume",
  url: resumePdf,
};

const videoProjects = [
  {
    title: "Boston City Archives",
    description:
      "This is a short video project created for the Fundamentals of Digital Journalism course. As part of the assignment, our team visited and spent time at the Boston City Archives to learn about what the archives are, what they do, and how they function as a vital resource for the city’s history and records. Through this experience, we were able to get a behind-the-scenes look at how Boston preserves its past and makes it accessible to the public.\n\nSpecial thanks to Kristen Lafferty, City Archivist, for sharing her time and insights with us.",
    url: "https://youtu.be/8s6jkOJUwWc?si=1GZoQQ7tEXiFARBF",
  },
  {
    title: "News bulletin",
    description:
      "This news bulletin delivers a balanced and engaging mix of national headlines, election-related coverage of the upcoming general election, local college sports updates, and a concluding movie review, offering viewers both information and entertainment while building skills in news writing, presentation, media production, and audience engagement for a college-focused audience.",
    url: "https://youtu.be/haYU4IcoLzU?si=KbhWSj-_JqWaNo8-",
  },
];

const audioStories = [
  {
    title: "The Uncommon Sounds of The Common",
    description:
      "This podcast explores the culture of street performance in Boston through the experiences of musician Marshall Morgan, highlighting his interactions with the public and the role of street music in shaping the city’s creative identity. It aims to capture how public art fosters community connection, preserves local musical tradition, and reflects the everyday rhythm of urban life.",
    url: "https://soundcloud.com/keval-dave-462621124/podcast-assignment?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    title: "Piku Movie Review",
    description:
      "This review explores the heartwarming and humorous essence of Piku, a film that beautifully captures the complexities of family relationships, everyday responsibilities, and emotional connection. Through personal reflection and scene analysis, I discuss how the characters, especially Piku and her father, reveal the realities of caregiving, independence, and love in their simplest forms. The review highlights standout performances, subtle storytelling, and the film’s unique ability to turn ordinary moments into meaningful narrative.",
    url: "https://soundcloud.com/keval-dave-462621124/piku-movie-review?si=f7146701716343b19eef9ceb84863c2e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
];

const writtenPieces = [
  {
    title: "Newspaper",
    description:
      "Created a complete newspaper using Adobe InDesign by gathering photographs and curated news items, designing the layout, and ensuring visual consistency throughout. I also wrote a self-authored opinion piece as part of the publication, contributing original editorial content to the final edition. ",
    url: newspaperPdf,
  },
  {
    title: "PR Crisis Management Memo",
    description:
      "Developed a PR crisis management memo examining the Kyte Baby incident, articulating the key reputational concerns and proposing strategic and tactical imperatives to guide the brand’s response. This memo approaches the situation as an opportunity for repair and institutional growth, focusing on empathy-driven messaging, authentic accountability, and deliberate steps toward rebuilding stakeholder trust.",
    url: memoPdf,
  },
  {
    title: "Dissertation",
    description:
      "This dissertation investigates how social media influencers shape political opinions and behaviours among digital-native Indian citizens through systematic social media content analysis and audience data. Using analytical software and statistical tools including chi-square testing, this research examines influencer messaging, ideological impact, engagement patterns, and misinformation dynamics across platforms.",
    url: dissertationPdf,
  },
];

const contactChannels = [
  {
    label: "Email",
    detail: "kevaldave1112@gmail.com",
    href: "mailto:kevaldave1112@gmail.com",
  },
  {
    label: "Email",
    detail: "dave.kev@northeastern.edu",
    href: "mailto:dave.kev@northeastern.edu",
  },
  {
    label: "Linkedin",
    detail: "https://www.linkedin.com/in/keval-dave/",
    href: "https://www.linkedin.com/in/keval-dave/",
  },
];

const stats = [
  { value: "18", label: "Audience research sprints" },
  { value: "26", label: "Narrative systems delivered" },
  { value: "4", label: "Cities prototyping stories" },
];

/* projects removed per request */

/* services removed per request */

type SectionHeadingProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

type ScrollStyles = CSSProperties & { "--scroll-delay"?: string };

const scrollDelay = (index: number, step = 0.08): ScrollStyles => ({
  "--scroll-delay": `${index * step}s`,
});

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <div className="space-y-3 max-w-2xl" data-scroll="fade-up">
    {eyebrow && (
      <p className="text-3xl md:text-4xl uppercase tracking-[0.35em] text-stone-500">
        {eyebrow}
      </p>
    )}
    {title && (
      <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
        {title}
      </h2>
    )}
    {description && (
      <p className="text-base text-slate-600 leading-relaxed">{description}</p>
    )}
  </div>
);

export function App() {
  const [showContactDetails, setShowContactDetails] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll]")
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        root: null,
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <div className="page-noise" />
      <div className="page-grid" />

      <header className="hero" id="top">
        <nav className="hero-nav" data-scroll="fade-down">
          <span className="text-lg font-semibold tracking-[0.35em] uppercase text-slate-900">
            Keval Dave
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-grid">
          <div className="space-y-8" data-scroll="fade-up">
            <SectionHeading eyebrow="About me" />
            <div className="text-base text-slate-600 leading-relaxed">
              {aboutParagraphs.map((paragraph, i) => (
                <p key={`hero-about-${i}`} data-scroll="fade-up">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="hero-portrait" data-scroll="fade-left">
            <img
              src="https://images.unsplash.com/photo-1503342250614-ca4407868a5b?auto=format&fit=crop&w=900&q=80"
              alt="Studio mood"
              className="hero-portrait__image"
            />
            <div className="hero-portrait__card">
              <p className="text-xs uppercase tracking-[0.45em] text-stone-500">
                Current focus
              </p>
              <p className="text-2xl font-serif text-slate-900">
                Media Innovation + Data Communication
              </p>
              <span className="text-sm text-slate-500">
                Northeastern University · research + residency work · 2025
              </span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="hero-stat"
              data-scroll="fade-up"
              style={scrollDelay(index, 0.05)}
            >
              <p className="text-4xl font-serif text-slate-900">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </header>

      <main className="space-y-28 pb-24">
        {/* Projects section removed */}

        {/* Services section removed */}

        <section id="videos" className="section">
          <SectionHeading title="Video Projects:" />
          <div className="space-y-12">
            {videoProjects.map((video, index) => {
              const idMatch = video.url?.match(
                /(?:youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/
              );
              const embedId = idMatch ? idMatch[1] : null;
              const embedSrc = embedId
                ? `https://www.youtube.com/embed/${embedId}`
                : video.url;

              const isNewsBulletin = /news bulletin/i.test(video.title || "");

              return (
                <article
                  key={video.title}
                  className="resource-card"
                  data-scroll="fade-up"
                  style={scrollDelay(index)}
                >
                  <div className="md:flex md:gap-8 items-start">
                    {isNewsBulletin ? (
                      <>
                        <div className="video-meta w-full md:w-1/2">
                          <h3 className="text-2xl font-serif text-slate-900">
                            {video.title}
                          </h3>

                          {video.description && (
                            <p className="text-base text-slate-600 leading-relaxed mt-4">
                              {video.description}
                            </p>
                          )}

                          <div className="resource-card__actions mt-6">
                            {video.url ? (
                              <a
                                className="resource-link inline-block"
                                href={video.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Watch film
                              </a>
                            ) : (
                              <p className="resource-note">Link not provided</p>
                            )}
                          </div>
                        </div>

                        <div className="video-player w-full md:w-1/2">
                          <div
                            className="relative"
                            style={{ paddingTop: "56.25%" }}
                          >
                            <iframe
                              src={embedSrc}
                              title={video.title}
                              className="absolute inset-0 w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="video-player w-full md:w-1/2">
                          <div
                            className="relative"
                            style={{ paddingTop: "56.25%" }}
                          >
                            <iframe
                              src={embedSrc}
                              title={video.title}
                              className="absolute inset-0 w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </div>

                        <div className="video-meta w-full md:w-1/2">
                          <h3 className="text-2xl font-serif text-slate-900">
                            {video.title}
                          </h3>

                          {video.description && (
                            <p className="text-base text-slate-600 leading-relaxed mt-4">
                              {video.description}
                            </p>
                          )}

                          <div className="resource-card__actions mt-6">
                            {video.url ? (
                              <a
                                className="resource-link inline-block"
                                href={video.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Watch film
                              </a>
                            ) : (
                              <p className="resource-note">Link not provided</p>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="audio" className="section">
          <SectionHeading title="Audio Projects:" />
          <div className="space-y-12">
            {audioStories.map((story, index) => {
              const embedSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
                story.url || ""
              )}&visual=true`;
              const flip = index % 2 === 1; // alternate side for every second item

              return (
                <article
                  key={story.title}
                  className="resource-card"
                  data-scroll="fade-up"
                  style={scrollDelay(index)}
                >
                  <div className="md:flex md:gap-8 items-start">
                    {flip ? (
                      <>
                        <div className="video-meta w-full md:w-1/2">
                          <h3 className="text-2xl font-serif text-slate-900">
                            {story.title}
                          </h3>

                          {story.description && (
                            <p className="text-base text-slate-600 leading-relaxed mt-4">
                              {story.description}
                            </p>
                          )}

                          <div className="resource-card__actions mt-6">
                            <a
                              className="resource-link inline-block"
                              href={story.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Listen on SoundCloud
                            </a>
                          </div>
                        </div>

                        <div className="video-player w-full md:w-1/2">
                          <div
                            className="relative"
                            style={{ paddingTop: "56.25%" }}
                          >
                            <iframe
                              src={embedSrc}
                              title={story.title}
                              className="absolute inset-0 w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="video-player w-full md:w-1/2">
                          <div
                            className="relative"
                            style={{ paddingTop: "56.25%" }}
                          >
                            <iframe
                              src={embedSrc}
                              title={story.title}
                              className="absolute inset-0 w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div className="video-meta w-full md:w-1/2">
                          <h3 className="text-2xl font-serif text-slate-900">
                            {story.title}
                          </h3>

                          {story.description && (
                            <p className="text-base text-slate-600 leading-relaxed mt-4">
                              {story.description}
                            </p>
                          )}

                          <div className="resource-card__actions mt-6">
                            <a
                              className="resource-link inline-block"
                              href={story.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Listen on SoundCloud
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="written" className="section">
          <SectionHeading title="Written Projects:" />
          <div className="resource-grid">
            {writtenPieces.map((piece, index) => (
              <article
                key={piece.title}
                className="resource-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <h3 className="text-2xl font-serif text-slate-900">
                  {piece.title}
                </h3>
                {piece.description && (
                  <p className="text-base text-slate-600 leading-relaxed">
                    {piece.description}
                  </p>
                )}
                <div className="resource-card__actions">
                  {piece.url ? (
                    <a
                      className="resource-link"
                      href={piece.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open document
                    </a>
                  ) : (
                    <p className="resource-note">Link not provided</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="max-w-3xl mx-auto" data-scroll="fade-up">
            <div className="rounded-xl p-10 bg-slate-900 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Let’s Connect!
              </h2>
              <p className="text-base text-slate-200 max-w-xl mx-auto mb-8">
                I'm always excited to collaborate on projects that push the
                boundaries of digital storytelling.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  className="btn-primary px-8 py-3"
                  onClick={() => setShowContactDetails((s) => !s)}
                >
                  {showContactDetails ? "Hide contact" : "Get In Touch"}
                </button>

                <a
                  className="btn-outline px-8 py-3"
                  href={resumeResource.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume
                </a>
              </div>

              {showContactDetails && (
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-100">
                  {contactChannels.map((ch) => (
                    <div key={ch.detail} className="text-left">
                      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                        {ch.label}
                      </p>
                      {ch.href ? (
                        <a
                          href={ch.href}
                          className="text-lg block text-white underline"
                        >
                          {ch.detail}
                        </a>
                      ) : (
                        <p className="text-lg">{ch.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" data-scroll="fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-stone-400">
          © 2025 · Keval Dave · Media innovation & data communication
        </p>
        <div className="flex gap-6 text-sm text-slate-600">
          <a href="#top">Back to top</a>
          <a href="mailto:kevaldave1112@gmail.com">Email me</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
