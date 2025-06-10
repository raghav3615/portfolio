import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiMongodb, 
  SiNodedotjs, 
  SiPython, 
  SiPytorch,
  SiPostgresql,
  SiCplusplus,
  SiTailwindcss,
  SiBlockchaindotcom,
  SiWeb3Dotjs,
  SiSolidity,
  SiEthereum,
  SiSocketdotio,
  SiFastapi,
  SiTensorflow,
  SiVite,
  SiCss3,
  SiOpenai,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiAmazon,
  SiFirebase,
  SiGraphql,
  SiRedis,
  SiMysql,
  SiExpress,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiEslint,
  SiPrettier
} from 'react-icons/si';
import { FaBrain, FaMobile, FaCloud, FaDatabase, FaRobot } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface TechIconData {
  icon: IconType;
  color: string;
  name: string;
}

export const techIconsMap: Record<string, TechIconData> = {
  // Frontend Technologies
  'React': { icon: SiReact, color: '#61DAFB', name: 'React' },
  'Next.js': { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  'CSS3': { icon: SiCss3, color: '#1572B6', name: 'CSS3' },
  'Vite': { icon: SiVite, color: '#646CFF', name: 'Vite' },
  
  // Backend Technologies
  'Node.js': { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  'Python': { icon: SiPython, color: '#3776AB', name: 'Python' },
  'FastAPI': { icon: SiFastapi, color: '#009688', name: 'FastAPI' },
  'Socket.io': { icon: SiSocketdotio, color: '#010101', name: 'Socket.io' },
  
  // Databases
  'MongoDB': { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
  
  // Programming Languages
  'C++': { icon: SiCplusplus, color: '#00599C', name: 'C++' },
  
  // AI/ML Technologies
  'PyTorch': { icon: SiPytorch, color: '#EE4C2C', name: 'PyTorch' },
  'TensorFlow': { icon: SiTensorflow, color: '#FF6F00', name: 'TensorFlow' },
  'AI/ML': { icon: FaBrain, color: '#FF6B6B', name: 'AI/ML' },
  'Machine Learning': { icon: FaBrain, color: '#4ECDC4', name: 'Machine Learning' },
  'Data Analysis': { icon: FaDatabase, color: '#45B7D1', name: 'Data Analysis' },
  'NLP': { icon: FaRobot, color: '#96CEB4', name: 'NLP' },
    // Blockchain Technologies
  'Blockchain': { icon: SiBlockchaindotcom, color: '#121D33', name: 'Blockchain' },
  'Web3': { icon: SiWeb3Dotjs, color: '#F16822', name: 'Web3' },
  'Solidity': { icon: SiSolidity, color: '#363636', name: 'Solidity' },
  'Ethereum': { icon: SiEthereum, color: '#627EEA', name: 'Ethereum' },
    // Mobile & Other
  'React Native': { icon: SiReact, color: '#61DAFB', name: 'React Native' },
  'API Integration': { icon: FaCloud, color: '#FF9F43', name: 'API Integration' },
  'Weather API': { icon: FaCloud, color: '#74B9FF', name: 'Weather API' },
  'Maps API': { icon: FaMobile, color: '#00B894', name: 'Maps API' },
  'OpenAI': { icon: SiOpenai, color: '#412991', name: 'OpenAI' },
  
  // Development Tools
  'Git': { icon: SiGit, color: '#F05032', name: 'Git' },
  'GitHub': { icon: SiGithub, color: '#181717', name: 'GitHub' },
  'Docker': { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  'AWS': { icon: SiAmazon, color: '#FF9900', name: 'AWS' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28', name: 'Firebase' },
  'Vercel': { icon: SiVercel, color: '#000000', name: 'Vercel' },
  'Netlify': { icon: SiNetlify, color: '#00C7B7', name: 'Netlify' },
  
  // Additional Technologies
  'Express': { icon: SiExpress, color: '#000000', name: 'Express' },
  'GraphQL': { icon: SiGraphql, color: '#E10098', name: 'GraphQL' },
  'Redis': { icon: SiRedis, color: '#DC382D', name: 'Redis' },
  'MySQL': { icon: SiMysql, color: '#4479A1', name: 'MySQL' },
  'npm': { icon: SiNpm, color: '#CB3837', name: 'npm' },
  'Yarn': { icon: SiYarn, color: '#2C8EBB', name: 'Yarn' },
  'Webpack': { icon: SiWebpack, color: '#8DD6F9', name: 'Webpack' },
  'ESLint': { icon: SiEslint, color: '#4B32C3', name: 'ESLint' },
  'Prettier': { icon: SiPrettier, color: '#F7B93E', name: 'Prettier' }
};

export const getTechIcon = (techName: string): TechIconData | null => {
  return techIconsMap[techName] || null;
};

export const renderTechIcon = (
  techName: string, 
  size: number = 20, 
  className: string = ''
): JSX.Element | null => {
  const techData = getTechIcon(techName);
  if (!techData) return null;
  
  const IconComponent = techData.icon;
  return (
    <IconComponent 
      size={size} 
      style={{ color: techData.color }} 
      className={className}
      title={techData.name}
    />
  );
};
