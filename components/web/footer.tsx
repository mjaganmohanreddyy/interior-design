const navigation = {
    product: [
      { name: "Twitter", href: "https://twitter.com" },
      {name:"pricing", href:"https://www.interiorai.online/buy-credits"}
    ],
    // legal: [{ name: "Privacy", href: "/privacy" }],
    // tools: [
    //   { name: "VC-generator", href: "https://vc.papermark.io" },
    //   { name: "Open Source Friends", href: "/oss-friends" },
    //   { name: "Open Source Investors", href: "/open-source-investors" },
    //   // { name: "Pitchdeck Summariser", href: "#" },
    // ],
    // alternatives: [
    //   { name: "Docsend", href: "/alternatives/docsend" },
    //   { name: "BriefLink", href: "/alternatives/brieflink" },
    //   { name: "PandaDoc", href: "/alternatives/pandadoc" },
    //   { name: "Google-Drive", href: "/alternatives/google-drive" },
    //   { name: "Pitch", href: "/alternatives/pitch" },
    // ],
  };
  
  export default function Footer() {
    return (
      <footer
        className="bg-white dark:bg-black border-t border-gray-200"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Text-based Logo */}
            <h1 className="text-2xl font-bold tracking-tighter text-black dark:text-white">
            interiorai
            </h1>
  
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">
                    Product
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.product.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  {/* <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">
                    Legal
                  </h3> */}
                  {/* <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  {/* <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">
                    Tools
                  </h3> */}
                  {/* <ul role="list" className="mt-6 space-y-4">
                    {navigation.tools.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
                <div className="mt-10 md:mt-0">
                  {/* <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">
                    Alternatives
                  </h3> */}
                  {/* <ul role="list" className="mt-6 space-y-4">
                    {navigation.alternatives.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm leading-6 text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="mt-4 ">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2023 interiorai.online All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
