import Link from "next/link";
import Image from "next/image";
// import GitHubIcon from "@/components/shared/icons/github";

export default function Header() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
            <div className="mt-24 sm:mt-10">
            </div>
            <h1 className="text-4xl font-bold mb-7 md:mb-[60px] text-black"> Design your interiors with our finest  { ' '}
            <span className="text-sky-500"> AI { '  '}</span>
            interior designer</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Where ideas turn into stunning designs
            </p>

            <div className="mt-10 flex items-center gap-x-6">
              <Link
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                href={"/dream"}
              >
                Get started
              </Link>
              {/* <Link
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-black hover:text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 flex items-center"
                href="https://github.com/mfts/papermark"
              >
                <GitHubIcon className="mr-2 h-5 w-5" /> Star on Github
              </Link> */}
            </div>
          </div>
          <div className="relative md:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 mt-6   ">
          <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg text-black">Original Room</h3>
                <Image
                  alt="Original photo of a room with interiorai.online"
                  src="/before1.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg text-black">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with interiorai.online"
                  width={400}
                  height={400}
                  src="/after1.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
}