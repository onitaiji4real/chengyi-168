import type { Metadata } from "next";
import { faqs, services, site } from "@/data/site";

export function pageMetadata({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "zh_TW",
      type: "website",
      images: [
        {
          url: site.heroImage,
          width: 1200,
          height: 675,
          alt: `${site.serviceAreaShort} ${site.name}搬家服務`
        }
      ]
    }
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.name,
    alternateName: site.englishName,
    description: `我是${site.name}，位於 ${site.serviceAreaShort}，由${site.contactPerson}帶領。我們提供自助搬家、精緻搬家、夜間運輸、精密儀器護送與專業打包，並提供專屬尺寸防護紙箱與貨車。聯絡方式為 LINE: ${site.lineId}。`,
    image: `${site.url}${site.logo}`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressCountry: "TW"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.lat,
      longitude: site.lng
    },
    areaServed: site.serviceArea,
    openingHoursSpecification: site.hours,
    sameAs: site.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      name: site.contactPerson,
      availableLanguage: ["zh-Hant"]
    },
    hasMap: site.googleMapsUrl,
    identifier: site.placeId,
    priceRange: "{{PRICE_RANGE_PLACEHOLDER}}",
    knowsAbout: [
      "家庭精緻搬家",
      "自助搬家",
      "夜間搬家",
      "精密儀器搬運",
      "專業打包",
      `${site.serviceAreaShort} 便宜搬家`,
      `${site.serviceAreaShort} 夜間搬家`
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: `${service.value} ${service.bestFor}`,
        areaServed: site.serviceArea,
        provider: {
          "@type": "MovingCompany",
          name: site.name,
          telephone: site.phone
        }
      }
    }))
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.englishName,
    url: site.url,
    inLanguage: "zh-Hant-TW",
    publisher: {
      "@type": "MovingCompany",
      name: site.name,
      telephone: site.phone,
      areaServed: site.serviceArea
    }
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function blogPostingJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "zh-Hant-TW",
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "MovingCompany",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}${site.logo}`
      }
    },
    about: [`${site.serviceAreaShort} 搬家`, "搬家打包", "搬家公司", "夜間搬家"]
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
