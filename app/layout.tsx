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
      <body
        id="fade-wrapper"
        className={`${geistSans.variable} ${geistMono.variable} antialiased opacity-0 transition-opacity duration-500`}
      >
        {children}

        {/* MAGNETIC BUTTON HIGHLIGHT SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('mousemove', (e) => {
                document.querySelectorAll('.magnetic-btn').forEach(btn => {
                  const rect = btn.getBoundingClientRect();
                  const highlight = btn.querySelector('.highlight');
                  if (!highlight) return;

                  const inside =
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom;

                  if (!inside) {
                    highlight.style.transform = 'translate(0px,0px)';
                    return;
                  }

                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  highlight.style.transform =
                    'translate(' +
                    (x - rect.width / 2) * 0.12 +
                    'px, ' +
                    (y - rect.height / 2) * 0.12 +
                    'px)';
                });
              });
            `,
          }}
        />

        {/* PAGE FADE SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function () {
                const wrapper = document.getElementById('fade-wrapper');

                // Fade in smoothly after hydration
                setTimeout(() => {
                  wrapper.style.opacity = '1';
                }, 50);

                // Fade out when clicking a normal link
                document.querySelectorAll('a[href]').forEach(link => {
                  link.addEventListener('click', function (e) {
                    const url = this.getAttribute('href');

                    if (!url || url.startsWith('#') || url.startsWith('javascript:')) return;

                    e.preventDefault();
                    wrapper.style.opacity = '0';

                    setTimeout(() => {
                      window.location.href = url;
                    }, 300);
                  });
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
