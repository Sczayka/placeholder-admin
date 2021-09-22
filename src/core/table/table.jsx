import './table.css';

import { FaTrashAlt, FaPen } from "react-icons/fa"

function Table(props) {
    const axios = require('axios').default;
    const columns = [];
    const rows = [];
    const path = props.path;

    function setColumns() {
        if (props?.columns) {
            props.columns.forEach(element => {
                columns.push(<th>{element}</th>);
            });
        }
    }

    function setRows() {
        if (props?.rows) {
            props.rows.forEach(element => {
                rows.push(
                    <tr>
                        {Object.keys(element).map(key => <td>{element[key]}</td>)}
                        <td className="actions">
                            {/* <FaPen onClick={() => editRow(element.id)}/> */}
                            <FaTrashAlt onClick={() => deleteRow(element.id)}/>
                        </td>
                    </tr>
                );
            });
        }
    }

    function editRow(id) {
        document.location.href = `${path}/${id}`
    }

    function deleteRow(id) {
        axios.delete(`https://fiap-back-end.herokuapp.com/${path}/${id}`)
            .then(() => document.location.reload());
    }

    setColumns();
    setRows();

    return (
        <table>
            <thead>
                <tr>
                    {columns}
                    <td>
                        Ações
                    </td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default Table;