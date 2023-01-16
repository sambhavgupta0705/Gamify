import GithubCorner from "react-github-corner";

const Layout=({children})=>{
    return (
        <div className="content">

        <GithubCorner href="https://github.com/sambhavgupta0705/Gamify" target="_blank"/>
        {children}
        </div>
    );


}

export default Layout