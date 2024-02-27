import type { Metadata } from "next";
import "./globals.css";
import "../../public/css/animate.css";
import "../../public/css/icomoon.css";
import "../../public/css/bootstrap.css";
import "../../public/css/magnific-popup.css";
import "../../public/css/owl.carousel.min.css";
import "../../public/css/owl.theme.default.min.css";
import AppHeader from "@/pages/header";
import AppFooter from "@/pages/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                {/* <div className="fh5co-loader"></div> */}
                <div id='page'>
                    <AppHeader />
                    {children}
                    <AppFooter />
                </div>
            </body>
        </html>
    );
}
