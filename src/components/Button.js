import React, { useState, useCallback } from 'react';
/**
 * Компонент кнопки с подсчетом кликов
 * @param {Object} props - Свойства компонента
 * @param {string} props.text - Текст кнопки
 * @param {string} props.className - Дополнительные CSS классы
 * @param {Function} props.onClick - Дополнительный обработчик клика
 */
const Button = ({ text = 'Нажми на меня', className = '', onClick, ...restProps }) => {
  const [clickCount, setClickCount] = useState(0);
  
  const handleClick = useCallback((e) => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    alert(`Количество нажатий: ${newCount}`);
    
    if (onClick) {
      onClick(e, newCount);
    }
  }, [clickCount, onClick]);
  
  return (
    <button 
      className={`button ${className}`}
      onClick={handleClick}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;
