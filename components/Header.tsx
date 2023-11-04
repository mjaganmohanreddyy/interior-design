import Image from "next/image";
import Link from "next/link";
import { Menu, Dialog, Transition } from "@headlessui/react";
import ChevronDown from "@/components/shared/icons/chevron-up";
import { Fragment, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { ModeToggle } from "@/components/theme-toggle";
import MenuIcon from "@/components/shared/icons/menu";
import X from "@/components/shared/icons/x";


export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { data: session, status } = useSession();
  return (
    <header className="flex w-full mt-3 border-b pb-7 sm:px-4 border-gray-500 gap-2">

      <nav className=" py-6 md:py-8">
       {/* <div className="relative h-32 w-32 ">
       
       <div className="absolute h-16 w-16 top-0 right-4  "> */}
        <div className=" container flex items-center">
       <Transition.Root show={sidebarOpen} as={Fragment}>
         </Transition.Root>
                 <Menu as="div" className="relative grow">
                   <Menu.Button className="flex items-center group rounded-md gap-x-3 p-2 w-full top-0 right-0  text-sm font-semibold leading-6 text-foreground hover:bg-gray-200 hover:dark:bg-secondary">
                     <Image
                       className="h-8 w-8 rounded-full bg-secondary"
                       src={session?.user?.image || ""}
                       width={32}
                       height={32}
                       alt={`Profile picture of ${session?.user?.name}`}
                     />
                     <span className="flex items-center w-full justify-between">
                       <span className="sr-only">Your profile</span>
                       <span aria-hidden="true">{session?.user?.name}</span> 
                       <ChevronDown
                         className="ml-2  w-5 text-muted-foreground"
                         aria-hidden="true"
                       />
                     </span>
                   </Menu.Button>
                   <Transition
                     as={Fragment}
                     enter="transition ease-out duration-100"
                     enterFrom="transform opacity-0 scale-95"
                     enterTo="transform opacity-100 scale-100"
                     leave="transition ease-in duration-75"
                     leaveFrom="transform opacity-100 scale-100"
                     leaveTo="transform opacity-0 scale-95"
                   >
                     <Menu.Items className="absolute left-0 z-10  w-[max-container] origin-bottom-left rounded-md bg-gray-100 text-black dark:bg-primary-foreground  focus:outline-none">
                       {session ? (
                         <>
                           <Menu.Item>
                             <div className="w-full">
                             <p className="block px-3 py-1 text-sm ">
                               {session?.user?.email}
                             </p>
                             </div>
                           </Menu.Item>
                           <Menu.Item>
                             <p className="block px-3 py-1 text-sm leading-6 text-muted-foreground">
                               Help?{" "}
                               <a
                                 href="mailto:support@papermark.io"
                                 className="underline hover:text-muted-foreground/80"
                               >
                                 support@interiorai.online
                               </a>
                             </p>
                           </Menu.Item>
                           <Menu.Item>
                           <Link
                            href="/buy-credits"
                            className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
                             >
                            <div>Buy Credits</div>
                              </Link>
                           </Menu.Item>
                           <Menu.Item>
                             <Link
                               onClick={() =>
                                 signOut({
                                   callbackUrl: `${window.location.origin}`,
                                 })
                               }
                               className="block px-3 py-1 text-sm leading-6 text-foreground hover:bg-gray-200 hover:dark:bg-muted"
                               href={""}
                             >
                               Sign Out
                             </Link>
                           </Menu.Item>
                         </>
                       ) : null}
                     </Menu.Items>
                   </Transition>
                 </Menu>

                 </div>


     <div className="lg:pl-72">
       {/* Navbar */}
       <div className="sticky top-0 z-40 mb-1 flex h-14 shrink-0 items-center gap-x-4 border-b border-gray-50/90 bg-gray-50 dark:border-black/10 dark:bg-black/95 px-4 sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
         <button
           type="button"
           className="-m-2.5 p-2.5 text-muted-foreground lg:hidden"
           onClick={() => setSidebarOpen(true)}
         >
           <span className="sr-only">Open sidebar</span>
           <MenuIcon className="h-6 w-6" aria-hidden="true" />
         </button>

         <div className="flex flex-1 gap-x-4 self-stretch items-center lg:gap-x-6 justify-end">
           <div className="flex items-center gap-x-4 lg:gap-x-6">
             {/* Profile dropdown */}
             <Menu as="div" className="relative">
               <Menu.Button className="-m-1.5 flex items-center p-1.5">
                 <span className="sr-only">Open user menu</span>
                 <Image
                   className="h-8 w-8 rounded-full bg-secondary"
                   src={session?.user?.image || ""}
                   width={32}
                   height={32}
                   alt={`Profile picture of ${session?.user?.name}`}
                 />
               </Menu.Button>
               <Transition
                 as={Fragment}
                 enter="transition ease-out duration-100"
                 enterFrom="transform opacity-0 scale-95"
                 enterTo="transform opacity-100 scale-100"
                 leave="transition ease-in duration-75"
                 leaveFrom="transform opacity-100 scale-100"
                 leaveTo="transform opacity-0 scale-95"
               >
                 <Menu.Items className="absolute right-0 z-10 mt-2.5 w-fit origin-top-right rounded-md bg-primary-foreground shadow-lg py-2 ring-1 ring-primary-foreground/5 focus:outline-none">
                   {session ? (
                     <>
                       <Menu.Item>
                         <p className="block px-3 py-1 text-sm leading-6 text-muted-foreground">
                           {session?.user?.email}
                         </p>
                       </Menu.Item>
                       <Menu.Item>
                         <Link
                           onClick={() =>
                             signOut({
                               callbackUrl: `${window.location.origin}`,
                             })
                           }
                           className="block px-3 py-1 text-sm leading-6 text-foreground hover:bg-gray-200 hover:dark:bg-muted"
                           href={""}
                         >
                           Sign Out
                         </Link>
                       </Menu.Item>
                     </>
                   ) : null}
                 </Menu.Items>
               </Transition>
             </Menu>
             <ModeToggle />
           </div>
         </div>
         </div>
         </div>
         </nav>
         <div className="flex py-10 absolute top-2 right-10 h-16 w-16">
          <button className=" bg-slate-600 text-orange">
          <Link
            href="/dashboard"
            className="pr-4  py-7 font-bold flex space-x-2 hover:text-blue-400 transition"
          >
            Dashboard
          </Link>
          </button>
          </div>
    </header>
  );
}