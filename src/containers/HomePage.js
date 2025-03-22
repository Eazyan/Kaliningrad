import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { fetchPetsByStatus, validatePet } from '../api/api';

const MAX_DISPLAYED_PETS = parseInt(process.env.REACT_APP_MAX_DISPLAYED_PETS || '5', 10);

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPets = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchPetsByStatus('available');

      const validatedPets = data
        .map(validatePet)
        .filter((result) => result.valid)
        .map((result) => result.data);

      setPets(validatedPets);
    } catch (err) {
      setError('Не удалось загрузить данные. Попробуйте позже.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (e, clickCount) => {
    if (clickCount === 1) {
      loadPets();
    }
  };

  return (
    <div className="home-page">
      <h2>{process.env.REACT_APP_APP_NAME || 'Йоу'}</h2>
      <p>Нажмите на кнопку, чтобы увидеть счетчик нажатий и загрузить данные с API.</p>

      <div className="home-page__button-container">
        <Button text="Нажми на меня" onClick={handleButtonClick} />
      </div>

      {loading && <p>Загрузка данных...</p>}
      {error && <p className="home-page__error">{error}</p>}

      {pets.length > 0 && (
        <div className="home-page__pets">
          <h3>Доступные питомцы ({pets.length}):</h3>
          <ul className="home-page__pet-list">
            {pets.slice(0, MAX_DISPLAYED_PETS).map((pet) => (
              <li key={pet.id} className="home-page__pet-item">
                <span className="home-page__pet-name">{pet.name}</span>
                {pet.category && (
                  <span className="home-page__pet-category"> ({pet.category.name})</span>
                )}
              </li>
            ))}
          </ul>

          {pets.length > MAX_DISPLAYED_PETS && (
            <p>
              <Link to="/pets" className="home-page__link">
                Показать все питомцы ({pets.length})
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
