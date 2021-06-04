import Head from 'next/head';

interface SEOProps {
  title: string;
}

export function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
