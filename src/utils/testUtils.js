import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Рендерит компонент с маршрутизацией React Router
 * @param {JSX.Element} ui - React компонент для рендеринга
 * @param {Object} options - Опции рендеринга
 * @returns {Object} - Результат функции render из testing-library
 */
export const renderWithRouter = (ui, options) => {
  return render(ui, { wrapper: BrowserRouter, ...options });
};

/**
 * Создает моковые данные питомца для тестирования
 * @param {Object} overrides - Свойства для переопределения
 * @returns {Object} - Объект с данными питомца
 */
export const mockPetData = (overrides = {}) => ({
  id: 1,
  name: 'Тестовый питомец',
  status: 'available',
  category: { id: 1, name: 'Собаки' },
  tags: [{ id: 1, name: 'Дружелюбный' }],
  ...overrides
});

/**
 * Создает массив с мокированными данными питомцев
 * @param {Number} count - Количество записей
 * @returns {Array} - Массив с данными питомцев
 */
export const mockPetsArray = (count = 5) => {
  return Array(count)
    .fill(null)
    .map((_, index) => mockPetData({ 
      id: index + 1, 
      name: `Питомец ${index + 1}` 
    }));
};
