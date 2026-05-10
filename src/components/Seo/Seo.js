import Head from 'next/head';
import React from 'react';

export const SITE_URL = 'https://mandela.dev';
export const SITE_NAME = 'Mandela Muithi';
export const DEFAULT_TITLE = 'Mandela Muithi — Site Reliability & DevOps Engineer';
export const DEFAULT_DESCRIPTION =
  'Mandela Muithi is a Site Reliability and DevOps Engineer who designs, automates, and operates production infrastructure — Kubernetes on AWS, Terraform, GitOps with ArgoCD, and CI/CD built for reliability at scale.';
export const DEFAULT_OG_IMAGE = '/og-banner.png';

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  jsonLd,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
};

export default Seo;
