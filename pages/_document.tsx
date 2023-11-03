import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full bg-background" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Interiorai: Interior Design Ideas Inspiration, and Virtual interior design By AI."
        />
        <meta property="og:title" content="Interiorai | Interior Design Ideas Inspiration " />
        <meta
          property="og:description"
          content="Interiorai: Interior Design Ideas Inspiration, and Virtual interior design."
        />
        <meta
          property="og:image"
          content="/_static/meta-image.png"
        />
        <meta property="og:url" content="https://www.interiorai.online" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="_rajashekarks" />
        <meta name="twitter:creator" content="_rajashekarks" />
        <meta name="twitter:title" content="interiorai" />
        <meta
          name="twitter:description"
          content="Interiorai: Interior Design Ideas Inspiration, and Virtual interior design ."
        />
        <meta
          name="twitter:image"
          content="https://www.interiorai.io/_static/meta-image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}