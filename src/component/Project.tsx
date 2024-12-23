import { FC } from "react";
import { Link } from 'react-router-dom';
import { projectData } from '../page/Home';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLink, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faJsSquare, faHtml5, faReact, faNodeJs, faPhp, faCss, faWordpress } from "@fortawesome/free-brands-svg-icons";

const IconMap: { [key: string]: IconDefinition } = {
    faHtml5: faHtml5,
    faCss: faCss,
    faJsSquare: faJsSquare,
    faPhp: faPhp,
    faReact: faReact,
    faNodeJs: faNodeJs,
    faWordpress: faWordpress,
};

const Project: FC<projectData> = ({ index, title, description, url, github, languages, open, toggleDetails }) => {

    const desc = JSON.parse(description);
    const logo = JSON.parse(languages);


    const toggle = () => {
        toggleDetails(index);
    }

    return <div
        className={"border-[#999] border-opacity-10 border-t-2 border-solid py-4 last:border-b-2"}>
        <summary className={`list-none cursor-pointer flex items-center`}>
            <div className={"w-full flex sm:p-4 py-4 items-center"} onClick={ toggle }>
                <FontAwesomeIcon icon={open ? faMinus : faPlus}
                                 className={"mr-3 opacity-40 text-[#999] hidden sm:inline"}/>
                <h2 className={'text-2xl font-medium h-full' + (open ? ' text-green-500' : '')}>{title}</h2>
            </div>
            <div className={"w-min flex gap-3 items-center ml-2"}>
                {github.length > 0 ?
                    <Link to={github} title={github} target="_blank"
                          className={"bg-[#999] hover:bg-opacity-30 bg-opacity-20 rounded-full w-9 h-9 transition flex items-center justify-center"}>
                        <FontAwesomeIcon icon={faGithub} className={"text-xl"}/>
                    </Link> : ''}
                {url.length > 0 ?
                    <Link to={url} title={title} target="_blank"
                          className={"bg-[#999] hover:bg-opacity-30 bg-opacity-20 rounded-full w-9 h-9 transition flex items-center justify-center"}>
                        <FontAwesomeIcon icon={faLink}/>
                    </Link> : ''}
            </div>
        </summary>
        <div className={`overflow-hidden transition-all duration-75 sm:px-4 ${open ? 'py-4' : 'max-h-0'}`}>
            {desc.map((item: string, index: number) => (<div key={index}>
                    <p className={"opacity-95 leading-7 pb-4"}>{item}</p>
                </div>
            ))}
            <div className={"flex gap-8 text-4xl text-[#999] text-opacity-50 pt-1 justify-center"}>
                {logo.map((item: string, index: number) => (<div key={index}>
                        <FontAwesomeIcon icon={IconMap[item]} />
                    </div>
                ))}
            </div>
        </div>
    </div>;
}

export default Project;