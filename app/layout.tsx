import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "@/app/globals.css";

const redHatText = Red_Hat_Text({
    variable: "--font-red-hat-text",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Frontend Mentor | Product list with cart",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${redHatText.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
