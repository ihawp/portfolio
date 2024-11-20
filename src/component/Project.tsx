import {useState, FC} from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/free-brands-svg-icons";

interface ProjectProps {
    title: string;
    description: string[];
    websiteURL: string;
    languages: IconName[];
    classes: string;
    open: boolean;
}

const Project: FC<ProjectProps> = ({ title, description, websiteURL, languages, classes, open }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleDetails = () => {
        setIsOpen((prev) => !prev);
    };

    return <div
        className={"border-[#999] border-opacity-10 border-t-2 border-solid py-4 last:border-b-2 last:border-b-black" + classes}>
        <summary className={`list-none cursor-pointer flex items-center`}>
            <div className={"w-full flex sm:p-4 py-4 items-center"} onClick={toggleDetails}>
                <FontAwesomeIcon icon={['fas', isOpen ? 'minus' : 'plus']} className={"mr-3 opacity-40 text-[#999] hidden sm:inline"}/>
                <h2 className={'text-2xl font-medium h-full' + (isOpen ? ' text-green-500' : '')}>{title}</h2>
            </div>
            <div className={"w-min flex gap-5 items-center"}>
                <Link to={websiteURL} title={title} target="_blank"
                   className={"bg-[#999] bg-opacity-20 rounded-full py-2 px-1.5 transition hover:bg-opacity-50 flex items-center justify-center"}>
                    <FontAwesomeIcon icon={['fas', 'link']}/>
                </Link>
            </div>
        </summary>
        <div className={`overflow-hidden transition-all duration-75 sm:px-4 ${isOpen ? 'py-4' : 'max-h-0'}`}>
            {description.map((item, index) => (<div key={index}>
                    <p className={"opacity-95 leading-7 pb-4"}>{item}</p>
                </div>
            ))}
            <div className={"flex gap-8 text-4xl text-[#999] text-opacity-50 pt-1 justify-center"}>
                {languages.map((item, index) => (<div key={index}>
                        <FontAwesomeIcon icon={['fab', item]}/>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}

export default Project;