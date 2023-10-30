// import Twitter from "../shared/icons/twitter";

const testimonials = [
  {
    body: "damn cool tool! you don't need an interior designer anymore",
    author: {
      name: "prathibha",
      handle: "prathibha",

      link: "https://twitter.com/",
    },
  },
  {
    body: "you can now see your rooms in different themes before you renovate. how cool is that!",
    author: {
      name: "david ho",
      handle: "david ho",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
      link: "https://twitter.com/steventey/status/1663611851807006721",
    },
  },
  {
    body: "looks so good! and thanks for the great idea 😄",
    author: {
      name: "jack ross",
      handle: "jack ross",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1679538379070005248/jwGUle5U_400x400.jpg",
      link: "https://twitter.com/alanaagoyal/status/1663522718015270912",
    },
  },
  {
    body: "this is the best ai tool i've seen so far",
    author: {
      name: "srinivas",
      handle: "srinivas",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1589657534264213504/d0tljS03_400x400.jpg",
      link: "https://twitter.com/lucaslunzmann/status/1673052992541523968",
    },
  },
  {
    body: "Something that helped me so much  get over my indecisiveness when decorating my house. ",
    author: {
      name: "shreya",
      handle: "shreya",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1668749063666147328/C0NyHT9B_400x400.jpg",
      link: "https://twitter.com/shnai0/status/1676626294077812736",
    },
  },
  {
    body: "just used it now- the best AI interior generator i have seen!",
    author: {
      name: "wei vu",
      handle: "wei vu",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1176854646343852032/iYnUXJ-m_400x400.jpg",
      link: "https://twitter.com/mfts0/status/1663521261396320257",
    },
  },
  // More testimonials...
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             so far 127 people love interior design, or just use it.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 relative"
              >
                <figure className="rounded-2xl bg-white p-10 text-sm leading-6 border border-gray-300 relative">
                  {testimonial.author.link && ( // Conditional rendering based on the presence of link
                    <a
                      href={testimonial.author.link} // Using the link from the testimonial
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 z-10"
                    >
                      {/* <Twitter className="w-5 h-5 text-gray-800" /> */}
                    </a>
                  )}
                  <blockquote className="text-gray-900">
                    <p>{`${testimonial.body}`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}