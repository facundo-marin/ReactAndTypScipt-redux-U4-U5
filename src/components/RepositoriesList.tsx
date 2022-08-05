import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const { searchRepositores } = useActions();
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
