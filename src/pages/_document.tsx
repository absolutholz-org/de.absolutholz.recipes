import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteHeadTitle } from '@/components/SiteHeadTitle';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <SiteHeadTitle />
      </Head>
      <body>
        <SiteHeader />
        <Main />
        <SiteFooter />
        <NextScript />
      </body>
    </Html>
  );
}
