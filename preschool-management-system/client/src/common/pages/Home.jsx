import PublicNavbar from "../components/PublicNavbar";
import Middle from "../components/Middle";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="font-sans overflow-x-hidden text-sky-950">
            <PublicNavbar />
            <Middle />
            <Footer />
        </div>
    );
}

export default Home;
