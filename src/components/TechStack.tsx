'use client';
import { renderTechIcon } from '@/utils/techIcons';

interface TechStackProps {
  technologies: string[];
  variant?: 'pills' | 'icons-only' | 'icons-with-text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showTooltip?: boolean;
  maxItems?: number;
}

export default function TechStack({ 
  technologies, 
  variant = 'pills',
  size = 'md',
  className = '',
  showTooltip = true,
  maxItems
}: TechStackProps) {
  const displayTechs = maxItems ? technologies.slice(0, maxItems) : technologies;
  const remainingCount = maxItems && technologies.length > maxItems ? technologies.length - maxItems : 0;

  const sizeClasses = {
    sm: {
      icon: 16,
      pill: 'text-xs px-2 py-1',
      iconOnly: 'w-6 h-6 p-1',
      text: 'text-xs'
    },
    md: {
      icon: 20,
      pill: 'text-sm px-3 py-1.5',
      iconOnly: 'w-8 h-8 p-1.5',
      text: 'text-sm'
    },
    lg: {
      icon: 24,
      pill: 'text-base px-4 py-2',
      iconOnly: 'w-10 h-10 p-2',
      text: 'text-base'
    }
  };

  const renderPillVariant = (tech: string, index: number) => {
    const techIcon = renderTechIcon(tech, sizeClasses[size].icon);
    
    return (
      <span
        key={tech}
        className={`
          inline-flex items-center gap-2 
          border border-primary/50
          font-mono transition-all duration-300
          hover:bg-primary/10
          ${sizeClasses[size].pill}
          ${className}
        `}
        title={showTooltip ? tech : undefined}
      >
        {techIcon && (
          <div>
            {techIcon}
          </div>
        )}
        <span>[{tech}]</span>
      </span>
    );
  };

  const renderIconsOnlyVariant = (tech: string, index: number) => {
    const techIcon = renderTechIcon(tech, sizeClasses[size].icon);
    
    return (
      <div
        key={tech}
        className={`
          flex items-center justify-center
          border border-primary/50
          transition-all duration-300 hover:bg-primary/10
          ${sizeClasses[size].iconOnly}
          ${className}
        `}
        title={showTooltip ? tech : undefined}
      >
        {techIcon || (
          <span className={`font-bold text-primary ${sizeClasses[size].text}`}>
            {tech.charAt(0)}
          </span>
        )}
      </div>
    );
  };

  const renderIconsWithTextVariant = (tech: string, index: number) => {
    const techIcon = renderTechIcon(tech, sizeClasses[size].icon);
    
    return (
      <div
        key={tech}
        className={`
          flex flex-col items-center gap-2 p-2
          border border-primary/50
          transition-all duration-300 hover:bg-primary/10
          group cursor-pointer
          ${className}
        `}
      >
        <div className="flex items-center justify-center w-8 h-8">
          {techIcon || (
            <div className="w-6 h-6 flex items-center justify-center border border-primary/30">
              <span className="text-xs font-bold">{tech.charAt(0)}</span>
            </div>
          )}
        </div>
        <span className={`font-mono text-primary ${sizeClasses[size].text}`}>
          {tech}
        </span>
      </div>
    );
  };

  const renderTech = (tech: string, index: number) => {
    switch (variant) {
      case 'icons-only':
        return renderIconsOnlyVariant(tech, index);
      case 'icons-with-text':
        return renderIconsWithTextVariant(tech, index);
      default:
        return renderPillVariant(tech, index);
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${variant === 'icons-with-text' ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6' : ''}`}>
      {displayTechs.map(renderTech)}
      {remainingCount > 0 && (
        <span
          className={`
            inline-flex items-center justify-center
            border border-dashed border-primary/50 text-primary
            font-mono
            ${sizeClasses[size].pill}
            ${className}
          `}
        >
          +{remainingCount}
        </span>
      )}
    </div>
  );
}
