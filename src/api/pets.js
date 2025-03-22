import * as yup from 'yup';

const API_URL = process.env.REACT_APP_API_URL || 'https://petstore.swagger.io/v2';

const DEFAULT_STATUS = process.env.REACT_APP_DEFAULT_PET_STATUS || 'available';

export const fetchPetsByStatus = async (status = DEFAULT_STATUS) => {
  try {
    const response = await fetch(`${API_URL}/pet/findByStatus?status=${status}`);

    if (!response.ok) {
      throw new Error(`API ошибка: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};

// Схема валидации для объекта питомца
const petSchema = yup.object().shape({
  id: yup.number().required('Отсутствует ID'),
  name: yup.string().required('Отсутствует имя'),
  status: yup.string().required('Отсутствует статус'),
  category: yup.object().nullable(),
  tags: yup.array().nullable(),
});

export const validatePet = (pet) => {
  try {
    // Проверяем данные по схеме
    petSchema.validateSync(pet, { abortEarly: false });

    return {
      valid: true,
      errors: [],
      data: pet,
    };
  } catch (validationError) {
    return {
      valid: false,
      errors: validationError.errors || ['Некорректный формат данных'],
      data: pet,
    };
  }
}; 