import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Google Clone Next js 13",
    description: "Google clone created with Next js 13",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                {/* footer */}
                <Footer />
            </body>
        </html>
    );
}
