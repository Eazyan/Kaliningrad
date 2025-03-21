import React from 'react';

/**
 * Компонент иконки
 * @param {Object} props - Свойства компонента
 * @param {string} props.name - Название иконки
 * @param {string} props.className - Дополнительные CSS классы
 * @param {string} props.size - Размер иконки (sm, md, lg)
 */
const Icon = ({ name, className = '', size = 'md', ...restProps }) => {
  const sizeClasses = {
    sm: 'icon--small',
    md: 'icon--medium',
    lg: 'icon--large'
  };
  
  const iconClass = `icon icon-${name} ${sizeClasses[size] || ''} ${className}`;
  
  return (
    <span 
      className={iconClass}
      role="img"
      aria-hidden="true"
      {...restProps}
    />
  );
};

export default Icon;
