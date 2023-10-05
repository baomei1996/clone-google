import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

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
            <body className="relative min-h-screen">
                {children}
                {/* footer */}
                <Footer />
            </body>
        </html>
    );
}
