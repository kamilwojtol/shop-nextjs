import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

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
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h1 className={`${ibm.className} font-bold text-2xl text-slate-300`}>
          Login with your acccount
        </h1>
        <form className={`${spaceGrotesk.className} p-5 rounded-lg w-1/4`}>
          <div className="flex flex-col mb-3">
            <label htmlFor="mail" className="mb-1 text-slate-300">
              E-mail
            </label>
            <input
              className="border-slate-300 bg-black border rounded-lg p-2 h-12 text-lg text-slate-300 active:outline-none"
              type="email"
              id="mail"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="password" className="mb-1 text-slate-300">
              Password
            </label>
            <input
              className="border-slate-300 bg-black border rounded-lg p-2 h-12 text-lg text-slate-300 active:outline-none"
              type="password"
              id="password"
            />
          </div>
        </form>
      </div>
      <Image
        src="/login.jpg"
        alt="Login"
        width={500}
        height={300}
        className="w-1/2 h-auto object-cover"
      />
    </div>
  );
}
