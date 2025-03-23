import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PetList from '../components/PetList';
import Button from '../components/Button';
import { fetchPets } from '../api/pets';

const PetListPage = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState('available');

  const loadPets = async (status) => {
    setLoading(true);
    setError(null);

    try {
      const validatedPets = await fetchPets(status);
      setPets(validatedPets);
    } catch (err) {
      setError('Не удалось загрузить данные. Попробуйте позже.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPets(statusFilter);
  }, [statusFilter]);

  const handleItemClick = (pet) => {
    navigate(`/pets/${pet.id}`);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className="pet-list-page">
      <h2>Список питомцев</h2>

      <div className="pet-list-page__filters">
        <label htmlFor="status-filter">Фильтр по статусу:</label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={handleStatusChange}
          className="pet-list-page__select"
        >
          <option value="available">Доступные</option>
          <option value="pending">Ожидающие</option>
          <option value="sold">Проданные</option>
        </select>

        <Button
          text="Обновить"
          className="pet-list-page__refresh-btn"
          onClick={() => loadPets(statusFilter)}
        />
      </div>

      {loading && <p>Загрузка данных...</p>}
      {error && <p className="pet-list-page__error">{error}</p>}

      {!loading && !error && <PetList pets={pets} onItemClick={handleItemClick} />}

      <div className="pet-list-page__footer">
        <Button text="Вернуться на главную" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

export default PetListPage;
