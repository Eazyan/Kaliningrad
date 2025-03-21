import React from 'react';

/**
 * Компонент детальной информации о питомце
 * @param {Object} props - Свойства компонента
 * @param {Object} props.pet - Данные питомца
 */
const PetDetail = ({ pet }) => {
  if (!pet) {
    return <div className="pet-detail__empty">Питомец не выбран</div>;
  }

  return (
    <div className="pet-detail">
      <h2 className="pet-detail__title">{pet.name}</h2>
      
      <div className="pet-detail__info">
        {pet.id && (
          <div className="pet-detail__row">
            <span className="pet-detail__label">ID:</span>
            <span className="pet-detail__value">{pet.id}</span>
          </div>
        )}
        
        {pet.status && (
          <div className="pet-detail__row">
            <span className="pet-detail__label">Статус:</span>
            <span className={`pet-detail__value pet-detail__value--${pet.status}`}>
              {pet.status}
            </span>
          </div>
        )}
        
        {pet.category && (
          <div className="pet-detail__row">
            <span className="pet-detail__label">Категория:</span>
            <span className="pet-detail__value">{pet.category.name}</span>
          </div>
        )}
        
        {pet.tags && pet.tags.length > 0 && (
          <div className="pet-detail__row">
            <span className="pet-detail__label">Теги:</span>
            <div className="pet-detail__tags">
              {pet.tags.map((tag, index) => (
                <span key={index} className="pet-detail__tag">{tag.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetDetail;
