import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata = {
    title: "Budget Buddy",
    description: "A web app for student budgeting and finance tool",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
