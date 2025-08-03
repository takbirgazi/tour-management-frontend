import type { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow-1">
                {children}
            </div>
            <Footer />
        </section>
    );
};

export default CommonLayout;