import { FC } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectData } from '../page/Home';
import { IconName } from "@fortawesome/free-brands-svg-icons";


const Project: FC<projectData> = ({ index, title, description, url, github, logos, open, toggleDetails }) => {

    const toggle = () => {
        toggleDetails(index);
    }

    return <div
        className={"border-[#999] border-opacity-10 border-t-2 border-solid py-4 last:border-b-2"}>
        <summary className={`list-none cursor-pointer flex items-center`}>
            <div className={"w-full flex sm:p-4 py-4 items-center"} onClick={ toggle }>
                <FontAwesomeIcon icon={['fas', open ? 'minus' : 'plus']}
                                 className={"mr-3 opacity-40 text-[#999] hidden sm:inline"}/>
                <h2 className={'text-2xl font-medium h-full' + (open ? ' text-green-500' : '')}>{title}</h2>
            </div>
            <div className={"w-min flex gap-3 items-center ml-2"}>
                {github.length > 0 ?
                    <Link to={github} title={github} target="_blank"
                          className={"bg-[#999] hover:bg-opacity-30 bg-opacity-20 rounded-full w-9 h-9 transition flex items-center justify-center"}>
                        <FontAwesomeIcon icon={['fab', 'github']} className={"text-xl"}/>
                    </Link> : ''}
                {url.length > 0 ?
                    <Link to={url} title={title} target="_blank"
                          className={"bg-[#999] hover:bg-opacity-30 bg-opacity-20 rounded-full w-9 h-9 transition flex items-center justify-center"}>
                        <FontAwesomeIcon icon={['fas', 'link']}/>
                    </Link> : ''}
            </div>
        </summary>
        <div className={`overflow-hidden transition-all duration-75 sm:px-4 ${open ? 'py-4' : 'max-h-0'}`}>
            {description.map((item: string, index: number) => (<div key={index}>
                    <p className={"opacity-95 leading-7 pb-4"}>{item}</p>
                </div>
            ))}
            <div className={"flex gap-8 text-4xl text-[#999] text-opacity-50 pt-1 justify-center"}>
                {logos.map((item: IconName, index: number) => (<div key={index}>
                        <FontAwesomeIcon icon={['fab', item]} />
                    </div>
                ))}
            </div>
        </div>
    </div>;
}

export default Project;