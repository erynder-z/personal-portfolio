import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFirebase,
  SiSass,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiJest,
} from 'react-icons/si';

const SkillList: {
  name: string;
  icon: any;
  color: string;
}[] = [
  { name: 'HTML', icon: <SiHtml5 color="#e34f26" />, color: '#e34f26' },
  { name: 'CSS', icon: <SiCss3 color="#264de4" />, color: '#264de4' },
  {
    name: 'JavaScript',
    icon: <SiJavascript color="#f7df1e" />,
    color: '#f7df1e',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color="#3178c6" />,
    color: '#3178c6',
  },
  { name: 'React', icon: <SiReact color="#61dbfb" />, color: '#61dbfb' },
  {
    name: 'Firebase',
    icon: <SiFirebase color="#FFCB2B" />,
    color: '#FFCB2B',
  },
  { name: 'Sass', icon: <SiSass color="#cd669a" />, color: '#cd669a' },
  { name: 'NodeJS', icon: <SiNodedotjs color="#68a063" />, color: '#68a063' },
  { name: 'MongoDB', icon: <SiMongodb color="#589636" />, color: '#589636' },
  { name: 'Express', icon: <SiExpress color="#589636" />, color: '#589636' },
  { name: 'Git', icon: <SiGit color="#f1502f" />, color: '#f1502f' },
  { name: 'GitHub', icon: <SiGithub color="#d5d4d4" />, color: '#d5d4d4' },
  { name: 'Jest', icon: <SiJest color="#18df16" />, color: '#18df16' },
];

export default SkillList;
