import * as yup from 'yup';

const API_URL = process.env.REACT_APP_API_URL || 'https://petstore.swagger.io/v2';

const DEFAULT_STATUS = process.env.REACT_APP_DEFAULT_PET_STATUS || 'available';

// Схема валидации для объекта питомца
const petSchema = yup.object().shape({
  id: yup.number().required('Отсутствует ID'),
  name: yup.string().required('Отсутствует имя'),
  status: yup.string().required('Отсутствует статус'),
  category: yup.object().nullable(),
  tags: yup.array().nullable(),
});

/**
 * Получает список питомцев и валидирует их
 * @param {string} status - Статус питомцев для фильтрации (available, pending, sold)
 * @returns {Promise<Array>} - Массив валидированных питомцев
 */
export const fetchPets = async (status = DEFAULT_STATUS) => {
  try {
    const response = await fetch(`${API_URL}/pet/findByStatus?status=${status}`);

    if (!response.ok) {
      throw new Error(`API ошибка: ${response.status}`);
    }

    const data = await response.json();
    
    // Валидируем данные и возвращаем только валидные
    const validatedPets = data
      .map(pet => {
        try {
          // Проверяем данные по схеме
          petSchema.validateSync(pet, { abortEarly: false });
          return { valid: true, data: pet, errors: [] };
        } catch (validationError) {
          return {
            valid: false,
            data: pet,
            errors: validationError.errors || ['Некорректный формат данных']
          };
        }
      })
      .filter(result => result.valid)
      .map(result => result.data);
      
    return validatedPets;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}; 