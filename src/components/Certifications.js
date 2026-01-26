import Image from "next/image";

const certifications = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "February 18, 2024",
    image: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    link: "https://www.credly.com/badges/69e6f6bb-a0ab-45c9-a968-a1a9b59adbde/linked_in?t=s91ywd",
  },
];

export default function Certifications() {
  return (
    <article className="certifications active" data-page="certifications">
      <header>
        <h2 className="h2 article-title">Certificates</h2>
      </header>
      <section className="certifications-grid">
        {certifications.map((cert, idx) => (
          <div className="certification-card" key={idx}>
            <div className="certification-card-img">
              <Image
                src={cert.image}
                alt={cert.title}
                width={160}
                height={160}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="certification-card-content">
              <h3 className="certification-card-title">{cert.title}</h3>
              <p className="certification-card-issuer">{cert.issuer}</p>
              <p className="certification-card-date">{cert.date}</p>
              <a
                href={cert.link}
                className="certification-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
} 