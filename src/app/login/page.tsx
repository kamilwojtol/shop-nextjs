import Logo from "@/app/ui/shared/logo/logo";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import Button from "@/app/ui/shared/btn/btn";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center md:flex-row">
      <Logo className="absolute top-10 left-10 z-20" color="white" />
      <div className="bg-black my-5 p-5 z-10 h-screen flex flex-col justify-center items-center rounded-lg md:mt-0 md:rounded-none md:w-1/2 md:top-4 md:left-4 ">
        <h1 className={`${ibm.className} font-bold text-2xl text-slate-200`}>
          Login with your acccount
        </h1>
        <form className={`${spaceGrotesk.className} p-5 rounded-lg w-max:3/4`}>
          <div className="flex flex-col mb-3">
            <label htmlFor="mail" className="mb-1 text-slate-200">
              E-mail
            </label>
            <input
              className="border-slate-200 bg-black border rounded-lg p-2 h-12 text-lg text-slate-200 active:outline-none"
              type="email"
              id="mail"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="mb-1 text-slate-300">
              Password
            </label>
            <input
              className="border-slate-200 bg-black border rounded-lg p-2 mb-3 h-12 text-lg text-slate-200 active:outline-none"
              type="password"
              id="password"
            />
          </div>
          <Button type="primary">Log in</Button>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen md:w-1/2 md:relative z-0">
        <Image src="/login.jpg" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
}
