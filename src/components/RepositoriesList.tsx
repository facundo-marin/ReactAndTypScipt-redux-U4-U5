import { useState } from 'react';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const onSubmit = (event: React.FormEventHandler<HTMLFormElement> | any) => {
    event.preventDefault();
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
