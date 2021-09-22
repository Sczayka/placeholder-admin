import './places.css';

// Icons
import { FaPlus } from "react-icons/fa";

import Table from '../../core/table/table';
import { useState,useEffect } from 'react';

function Places() {
  const axios = require('axios').default;
  let [rows, setRows] = useState([]);

  useEffect(() => {
    ;(async() => {
      const { data } = await axios.get('https://fiap-back-end.herokuapp.com/places');
      setRows(data.map(el => ({ id: el.id, name: el.name })));
    })();
  }, [axios]);

  return (
    <>
      <div className="table-header">
        <h3>Lugares</h3>

        <a href="/places/new">
          <span>Novo</span> <FaPlus />
        </a>
      </div>

      {
        rows.length > 0 && <Table columns={['ID', 'Nome']} rows={rows}/>
      }
    </>
  );
}

export default Places;