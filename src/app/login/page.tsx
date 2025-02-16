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
    <div className="flex flex-row justify-center items-center h-screen">
      <Logo className="absolute top-4 left-4" color="white" />
      <div className="w-1/2 flex flex-col justify-center items-center">
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
      <div className="relative w-1/2 h-screen">
        <Image src="/login.jpg" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
}
