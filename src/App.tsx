import { useEffect, type CSSProperties } from "react";
import "./index.css";
import resumePdf from "./assets/Keval's Resume (1).pdf";
import newspaperPdf from "./assets/newspaper final.pdf";
import memoPdf from "./assets/what should they do memo assignment keval (1) (3).docx - Google Docs.pdf";
import dissertationPdf from "./assets/Disssertation.pdf";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
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
    url: "https://on.soundcloud.com/DyTogv7ZdDbbxH5bwr",
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

const projects = [
  {
    title: "Civic Memory Campaign",
    client: "City of Boston Archives",
    description:
      "Built the narrative spine, video treatment, and owned-channel rollout celebrating preservation work across neighborhoods.",
    tags: ["Strategy", "Content", "Video"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Movement Residency Journal",
    client: "Northeastern Media Innovation",
    description:
      "A data-informed editorial series translating research sprints into human stories for prospective fellows.",
    tags: ["Editorial", "Research", "Product"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quiet Corners Field Guide",
    client: "Independent Documentary",
    description:
      "Content architecture + launch kit supporting the Ahmedabad short film and its companion walking map.",
    tags: ["Campaign", "Experiential", "Story"],
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
];

const services = [
  {
    title: "Brand & media strategy",
    detail:
      "Research-backed positioning, message houses, and rollout plans that align newsroom rigor with business goals.",
    result: "Keeps every channel aligned around one narrative.",
  },
  {
    title: "Content system design",
    detail:
      "Editorial calendars, modular storytelling kits, and creative direction that teams can scale across platforms.",
    result: "Delivers consistent voice & visual language.",
  },
  {
    title: "Data-led storytelling",
    detail:
      "Dashboards, audience insights, and measurement loops translating analytics into creative decisions.",
    result: "Turns metrics into memorable stories.",
  },
];

const testimonials = [
  {
    quote:
      "Keval guided our archive relaunch with a rare blend of empathy and analytical clarity. Every asset felt intentional.",
    author: "Marisol Lee",
    role: "Communications Lead, Boston City Archives",
  },
  {
    quote:
      "From research synthesis to launch copy, the residency journal carried a consistent pulse that kept stakeholders aligned.",
    author: "Dr. Evan Price",
    role: "Director, Media Innovation Lab",
  },
];

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
      <p className="text-sm uppercase tracking-[0.35em] text-stone-500">
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
            <p className="text-sm uppercase tracking-[0.4em] text-stone-500">
              Media innovation 2025
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
              Journalism-rooted strategy for thoughtful brands.
            </h1>
            <p className="text-lg text-slate-600 md:w-3/4 leading-relaxed">
              I merge reporting discipline, economics training, and digital
              experimentation to design narrative systems that feel human and
              land with measurable impact across channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="btn-primary" href="#projects">
                See strategy work
              </a>
              <a className="btn-secondary" href="#videos">
                Read journal
              </a>
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
        <section id="about" className="section about">
          <SectionHeading eyebrow="About me" title="About me" />
          <div className="about-grid">
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base text-slate-600 leading-relaxed"
                  data-scroll="fade-up"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="about-card" data-scroll="fade-left">
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                Currently
              </p>
              <p className="text-lg font-semibold text-slate-900">
                M.S. Media Innovation + Data Communication
              </p>
              <p className="text-sm text-slate-600">
                Northeastern University · Boston, MA
              </p>
              <div className="about-card__resource">
                <p className="text-base text-slate-800">
                  {resumeResource.label}
                </p>
                {resumeResource.url ? (
                  <a
                    className="resource-link"
                    href={resumeResource.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open link
                  </a>
                ) : (
                  <p className="resource-note">Link not provided</p>
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section">
          <SectionHeading
            eyebrow="Case Studies"
            title="Strategy & storytelling systems"
            description="Select collaborations translating research, narrative, and multimedia craft into cohesive launches."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="project-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <figure className="project-card__media">
                  <img src={project.image} alt={project.title} />
                </figure>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-stone-500">
                    <span>{project.client}</span>
                    <span>{project.tags.join(" • ")}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services">
          <SectionHeading
            eyebrow="Capabilities"
            title="What I build"
            description="Offerings that pair newsroom sensibilities with market insight."
          />
          <div className="service-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.35em] text-stone-400">
                    —
                  </span>
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.detail}
                </p>
                <p className="text-sm font-medium text-slate-900">
                  {service.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section">
          <SectionHeading
            eyebrow="Testimonials"
            title="Collected words from collaborators"
            description="Notes from teams who trusted me with their story and strategy."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.author}
                className="testimonial-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <blockquote className="text-lg leading-relaxed text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="text-sm uppercase tracking-[0.35em] text-stone-500">
                  {testimonial.author} · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="videos" className="section">
          <SectionHeading title="Video :" />
          <div className="resource-grid">
            {videoProjects.map((video, index) => (
              <article
                key={video.title}
                className="resource-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <p className="resource-tag">Video</p>
                <h3 className="text-2xl font-serif text-slate-900">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-base text-slate-600 leading-relaxed">
                    {video.description}
                  </p>
                )}
                <div className="resource-card__actions">
                  {video.url ? (
                    <a
                      className="resource-link"
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
              </article>
            ))}
          </div>
        </section>

        <section id="audio" className="section">
          <SectionHeading title="Audio:" />
          <div className="resource-grid">
            {audioStories.map((story, index) => (
              <article
                key={story.title}
                className="resource-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <p className="resource-tag">Audio</p>
                <h3 className="text-2xl font-serif text-slate-900">
                  {story.title}
                </h3>
                {story.description && (
                  <p className="text-base text-slate-600 leading-relaxed">
                    {story.description}
                  </p>
                )}
                <div className="resource-card__actions">
                  <a
                    className="resource-link"
                    href={story.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Listen on SoundCloud
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="written" className="section">
          <SectionHeading title="Written:" />
          <div className="resource-grid">
            {writtenPieces.map((piece, index) => (
              <article
                key={piece.title}
                className="resource-card"
                data-scroll="fade-up"
                style={scrollDelay(index)}
              >
                <p className="resource-tag">Written</p>
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

        <section id="contact" className="section contact">
          <div className="contact-panel" data-scroll="fade-right">
            <SectionHeading
              eyebrow="Contact"
              title="Request a collaboration"
              description="Share what you’re building—campaign, newsroom, nonprofit—and I’ll respond within a day with next steps."
            />
            <form className="contact-form">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your full name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="studio@email.com" required />
              </label>
              <label>
                <span>Project focus</span>
                <input
                  type="text"
                  placeholder="Runway film, lookbook, microsite…"
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  placeholder="Share timeline, deliverables, or references."
                  rows={4}
                />
              </label>
              <button type="submit" className="btn-primary w-full">
                Submit request
              </button>
            </form>
            <div className="contact-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{social.label}</span>
                  <strong>{social.display}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-details" data-scroll="fade-left">
            {contactChannels.map((channel, index) => (
              <div
                key={`${channel.label}-${channel.detail}`}
                data-scroll="fade-up"
                style={scrollDelay(index, 0.06)}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
                  {channel.label}
                </p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="text-lg text-slate-800 underline"
                  >
                    {channel.detail}
                  </a>
                ) : (
                  <p className="text-lg text-slate-800">{channel.detail}</p>
                )}
              </div>
            ))}
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
