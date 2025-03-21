import React from 'react';

/**
 * Компонент списка питомцев
 * @param {Object} props - Свойства компонента
 * @param {Array} props.pets - Массив питомцев
 * @param {Function} props.onItemClick - Функция обработки клика по элементу списка
 */
const PetList = ({ pets = [], onItemClick }) => {
  if (!pets.length) {
    return <div className="pet-list__empty">Нет доступных питомцев</div>;
  }

  return (
    <div className="pet-list">
      <ul className="pet-list__items">
        {pets.map((pet) => (
          <li key={pet.id} className="pet-list__item">
            <button className="pet-list__item-btn" onClick={() => onItemClick && onItemClick(pet)}>
              <div className="pet-list__item-name">{pet.name}</div>
              {pet.status && (
                <div className={`pet-list__item-status pet-list__item-status--${pet.status}`}>
                  {pet.status}
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
