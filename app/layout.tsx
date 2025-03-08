import { Clarity } from "@/components/Clarity";
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Screen Share - Share Your Screen Instantly",
    description: "Share your screen instantly with anyone using a simple room code. No downloads or sign-ups required.",
    keywords: "screen sharing, webrtc, online screen share, browser screen sharing, free screen sharing"
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col justify-between min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://pic.theshy.best/2025-03/9/【哲风壁纸】庄达菲-庄达菲电脑壁纸.png')" }}>
                    {children}
                    <footer className="py-8 px-4 text-center text-gray-500 text-sm">
                        Built by{" hin"}
                        {/* <Link href="https://tonghohin.vercel.app" className="underline" target="_blank">
                            Hin
                        </Link> */}
                        . Vary by Theshy.
                        {/* . The source code is available on{" "}
                        <Link href="https://github.com/tonghohin/screen-sharing" className="underline" target="_blank">
                            Github
                        </Link>
                        . */}
                    </footer>
                </main>
                <Clarity />
                <Toaster />
            </body>
        </html>
    );
}
