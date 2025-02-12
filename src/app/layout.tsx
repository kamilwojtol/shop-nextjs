import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-black">{children}</body>
    </html>
  );
}
