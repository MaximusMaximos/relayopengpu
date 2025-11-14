import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OGPU",
  description: "Global compute network for AI workloads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Magnetic Lighting Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                document.querySelectorAll('.magnetic-btn').forEach(btn => {
                  const rect = btn.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  const highlight = btn.querySelector('.highlight');
                  if (!highlight) return;

                  highlight.style.transform =
                    'translate(' + (x - rect.width/2) * 0.12 + 'px, ' +
                    (y - rect.height/2) * 0.12 + 'px)';
                });
              });

              document.addEventListener('mouseleave', () => {
                document.querySelectorAll('.magnetic-btn .highlight').forEach(h => {
                  h.style.transform = 'translate(0px,0px)';
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
