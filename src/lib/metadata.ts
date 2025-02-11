import { Metadata } from "next";

interface GenerateMetadataProps {
  title: string;
  description: string;
  image?: string;
  path: string;
}

export function generateMetadata({
  title,
  description,
  image = "/images/og-image.jpg",
  path,
}: GenerateMetadataProps): Metadata {
  const url = `https://balajihitech.com${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
