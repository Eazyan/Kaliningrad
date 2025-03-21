import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PetDetail from '../components/PetDetail';
import Button from '../components/Button';


const PetDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPet = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://petstore.swagger.io/v2/pet/${id}`);
        
        if (!response.ok) {
          throw new Error(`Ошибка API: ${response.status}`);
        }
        
        const data = await response.json();
        setPet(data);
      } catch (err) {
        setError('Не удалось загрузить данные питомца. Питомец не найден или недоступен.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
      fetchPet();
    }
  }, [id]);
  
  return (
    <div className="pet-detail-page">
      <h2>Информация о питомце</h2>
      
      {loading && <p>Загрузка данных...</p>}
      {error && <p className="pet-detail-page__error">{error}</p>}
      
      {!loading && !error && (
        <PetDetail pet={pet} />
      )}
      
      <div className="pet-detail-page__footer">
        <Button 
          text="Вернуться к списку" 
          onClick={() => navigate('/pets')}
        />
      </div>
    </div>
  );
};

export default PetDetailPage;
