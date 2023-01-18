import GithubCorner from "react-github-corner";
import Footer from "./Footer";
const Layout=({children})=>{

    return (
        <div className="content">

        <GithubCorner href="https://github.com/sambhavgupta0705/Gamify" target="_blank"/>
        {children}
        <Footer/>
        </div>
    );


}

export default Layout