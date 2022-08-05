import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositores } = useActions();
  const { data, error, loading } = useSelector(
    (state: any) => state.repositories
  );
  console.log(data);
  const onSubmit = (event: React.FormEventHandler<HTMLFormElement> | any) => {
    event.preventDefault();

    searchRepositores(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
