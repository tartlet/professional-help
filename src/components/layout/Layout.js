import Navbar from "./NavigationBar";

const Layout = (props) => {
    return (
        <div>
            <Navbar />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
