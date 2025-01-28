import { Route, Routes, Link } from 'react-router-dom';
import Home from './page/Home';
import Roadmap from './page/Roadmap';
import PrivacyPolicy from "./page/PrivacyPolicy";
import Error404 from "./page/Error404.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollToTop from './component/ScrollToTop.tsx';

export default function App() {
    return <>
        <div className="animated-gradient h-screen flex items-center justify-center">
            <div className={"h-svh w-screen overflow-y-auto overflow-x-hidden flex items-start justify-center"}>
                <div className={"text-white text-lg w-full p-4 max-w-3xl flex flex-col"}>
                    <header className={"font-bold flex w-full bg-[#262626] mb-4 rounded py-1 px-1.5 sm:pr-2 sm:pl-4"}>
                        <div className={"items-center sm:flex hidden"}>
                            <h2 className={"text-xl spongeboymebob mt-1 text-green-600"}><Link to={"/"}>ihawp.com</Link>
                            </h2>
                        </div>
                        <nav className={"flex sm:gap-5 h-[40px] w-full justify-end items-center gap-3 text-center"}>
                            <Link to={"https://www.linkedin.com/in/warren-chemerika-628b15275"} title="LinkedIn: Warren Chemerika"
                                  target={"_blank"}
                                  className={"sm:flex-grow-0 flex-grow"}>LinkedIn</Link>
                            <Link to={"https://github.com/ihawp"} target={"_blank"}
                                  title={"GitHub: ihawp"}
                                  className={"sm:flex-grow-0 flex-grow"}>GitHub</Link>
                            <Link to={"mailto:ihawp@ihawp.com"} title="Email: ihawp@ihawp.com"
                                  className={"sm:flex-grow-0 flex-grow bg-green-700 py-1 px-3 rounded"}>Contact</Link>
                        </nav>
                    </header>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/roadmap" element={<Roadmap/>}/>
                        <Route path="/privacy" element={<PrivacyPolicy/>}/>
                        <Route path="/*" element={<Error404/>}/>
                    </Routes>
                    <footer className={"flex text-lg sm:pt-4 sm:pb-0 py-16 flex-col-reverse sm:flex-row sm:justify-start items-center text-[#999] text-opacity-40"}>
                        <div
                            className={"sm:w-[300px] w-full sm:text-xl text-lg flex justify-center mt-7 sm:mt-0 sm:justify-start"}>
                            <p className={"spongeboymebob"}>
                                <Link to={"/"} onClick={ScrollToTop}>&copy; ihawp.com {new Date().getFullYear()}</Link>
                            </p>
                        </div>
                        <div
                            className={"flex flex-auto flex-wrap sm:justify-end w-full sm:gap-3 gap-4 sm:text-3xl text-5xl justify-center"}>
                            <a href={"https://www.github.com/ihawp"} title={"Github"} target={"_blank"}><FontAwesomeIcon
                                icon={['fab', 'github-square']}
                                /></a>
                            <a href={"mailto:ihawp@ihawp.com"} title={"Email: ihawp@ihawp.com"}><FontAwesomeIcon
                                icon={['fas', 'envelope-square']}
                                /></a>
                            <a href={"https://www.linkedin.com/in/warren-chemerika-628b15275"} title={"LinkedIn"}
                               target={"_blank"}>
                                <FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
                            <a href={"/Front-EndWebDevCertificateWarrenChemerika.pdf"}
                               title={"Certificate of Front-End Web Development from Saskatchewan Polytechnic"}
                               target={"_blank"}><FontAwesomeIcon icon={['fas', 'square-check']}
                                                                  /></a>
                            <Link to={'/privacy'} title={"Privacy Policy"} onClick={ScrollToTop}><FontAwesomeIcon icon={['fas', 'square-parking']}
                                                                                            /></Link>
                            <a href={"https://fontawesome.com/"} title={"Provider of Icons: Font Awesome v6"}
                               target={"_blank"}><FontAwesomeIcon icon={['fab', 'square-font-awesome-stroke']}
                                                                  /></a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </>;
}
