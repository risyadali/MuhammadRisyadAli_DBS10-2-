import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Luxury Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}