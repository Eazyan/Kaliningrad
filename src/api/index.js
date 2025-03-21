const API_URL = 'https://petstore.swagger.io/v2';

export const fetchPetsByStatus = async (status = 'available') => {
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

export const validatePet = (pet) => {
  // Проверяем наличие обязательных полей
  if (!pet || typeof pet !== 'object') {
    return { valid: false, errors: ['Некорректный формат данных'] };
  }
  
  const errors = [];
  
  if (!pet.id && pet.id !== 0) {
    errors.push('Отсутствует ID');
  }
  
  if (!pet.name) {
    errors.push('Отсутствует имя');
  }
  
  if (!pet.status) {
    errors.push('Отсутствует статус');
  }
  
  return {
    valid: errors.length === 0,
    errors,
    data: pet
  };
}; 