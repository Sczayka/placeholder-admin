import './users.css';

// Icons
import { FaPlus } from "react-icons/fa";

import Table from '../../core/table/table';
import { useState, useEffect } from 'react';

function Users() {
  const axios = require('axios').default;
  let [rows, setRows] = useState([]);

  useEffect(() => {
    ; (async () => {
      const { data } = await axios.get('https://fiap-back-end.herokuapp.com/users');
      setRows(data.map(el => ({
        id: el.id,
        name: el.name,
        email: el.email,
        document: el.document,
        birthday: el.birthday,
        mobile: el.mobile,
        isEnabled: el.isEnabled ? 'Sim' : 'Não'
      })
      ));
    })();
  }, [axios]);

  return (
    <>
      <div className="table-header">
        <h3>Usuários</h3>

        <a href="/users/new">
          <span>Novo</span> <FaPlus />
        </a>
      </div>

      {
        rows.length > 0 && <Table columns={['ID', 'Nome', 'E-mail', 'Document', 'Data de nascimento', 'Telefone', 'Ativo']} rows={rows} path="users" />
      }
    </>
  );
}

export default Users;