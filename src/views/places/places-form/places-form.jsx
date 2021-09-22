import './places-form.css';

function PlacesForm() {
  const axios = require('axios').default;

  function createPlace() {
    const name = document.getElementById('placeName').value;

    axios.post('https://fiap-back-end.herokuapp.com/places', {name: name})
      .then(() => window.location.href="/places" );
  };

  return (
    <>
      <div className="table-header">
        <h3>Novo lugar</h3>
      </div>

      <form>
        <div className="col-6">
          <input type="text" placeholder="Nome" id="placeName"/>
        </div>
        
        <div className="form-footer">
          <a href="/places" className="btn mr-1">
            Cancelar
          </a>
          
          <button type="button" className="btn btn-primary" onClick={() => createPlace()}>
            Salvar
          </button>
        </div>
      </form>
    </>
  );
}

export default PlacesForm;