'use client';
import { motion } from 'framer-motion';
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
      <motion.span
        key={tech}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -2 }}
        className={`
          inline-flex items-center gap-2 
          bg-gradient-to-r from-primary/10 to-accent/10 
          backdrop-blur-sm border border-primary/20 
          rounded-lg font-medium transition-all duration-300
          hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10
          hover:from-primary/15 hover:to-accent/15
          ${sizeClasses[size].pill}
          ${className}
        `}
        title={showTooltip ? tech : undefined}
      >
        {techIcon && (
          <motion.div whileHover={{ rotate: 10 }}>
            {techIcon}
          </motion.div>
        )}
        <span>{tech}</span>
      </motion.span>
    );
  };
  const renderIconsOnlyVariant = (tech: string, index: number) => {
    const techIcon = renderTechIcon(tech, sizeClasses[size].icon);
    
    if (!techIcon) {
      return (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          className={`
            flex items-center justify-center
            bg-gradient-to-br from-gray-500/20 to-gray-600/20
            backdrop-blur-sm border border-gray-400/20
            rounded-xl transition-all duration-300 hover:border-gray-400/40
            hover:shadow-lg hover:shadow-gray-400/20
            ${sizeClasses[size].iconOnly}
            ${className}
          `}
          title={showTooltip ? tech : undefined}
        >
          <span className={`font-bold text-gray-600 ${sizeClasses[size].text}`}>
            {tech.charAt(0)}
          </span>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={tech}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        className={`
          flex items-center justify-center
          bg-gradient-to-br from-primary/10 to-accent/10
          backdrop-blur-sm border border-primary/20
          rounded-xl transition-all duration-300 hover:border-primary/40
          hover:shadow-lg hover:shadow-primary/20
          ${sizeClasses[size].iconOnly}
          ${className}
        `}
        title={showTooltip ? tech : undefined}
      >
        {techIcon}
      </motion.div>
    );
  };
  const renderIconsWithTextVariant = (tech: string, index: number) => {
    const techIcon = renderTechIcon(tech, sizeClasses[size].icon);
    
    return (
      <motion.div
        key={tech}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        className={`
          flex flex-col items-center gap-3 p-4
          bg-card/40 backdrop-blur-md border border-border/50
          rounded-xl transition-all duration-300 hover:border-primary/40
          hover:shadow-lg hover:shadow-primary/10 text-center
          group cursor-pointer
          ${className}
        `}
      >
        <motion.div 
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300"
          whileHover={{ rotate: 5 }}
        >
          {techIcon || (
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">{tech.charAt(0)}</span>
            </div>
          )}
        </motion.div>
        <span className={`font-medium text-foreground group-hover:text-primary transition-colors duration-300 ${sizeClasses[size].text}`}>
          {tech}
        </span>
      </motion.div>
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
    <div className={`flex flex-wrap gap-2 ${variant === 'icons-with-text' ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5' : ''}`}>
      {displayTechs.map(renderTech)}
      {remainingCount > 0 && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: displayTechs.length * 0.1 }}
          className={`
            inline-flex items-center justify-center
            bg-muted/50 text-muted-foreground
            rounded-lg font-medium
            ${sizeClasses[size].pill}
            ${className}
          `}
        >
          +{remainingCount}
        </motion.span>
      )}
    </div>
  );
}
