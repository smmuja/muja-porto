// src/layouts/default-layouts/components/seo.tsx
import { personSchemaData } from "data";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title?: string;
  description?: string;
}

export function Seo({ title, description }: SeoProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personSchemaData.name,
    alternateName: personSchemaData.alternateName,
    description: personSchemaData.description,
    url: personSchemaData.url,
    jobTitle: personSchemaData.currentRole,
    worksFor: {
      "@type": "Organization",
      name: personSchemaData.currentCompany.name,
      url: personSchemaData.currentCompany.url,
    },

    alumniOf: personSchemaData.education.map((edu) => ({
      "@type": "OrganizationRole",
      startDate: edu.start,
      endDate: edu.end,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: edu.institution,
        url: edu.url,
        ...(edu.alternateName && { alternateName: edu.alternateName }),
        knowsAbout: edu.subject,
      },
    })),

    sameAs: [
      personSchemaData.socials.linkedin,
      personSchemaData.socials.portfolio,
      ...personSchemaData.currentCompany.teamUrls,
    ].filter(Boolean),
  };

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
}
