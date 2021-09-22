import './users-form.css'
  
function UsersForm() {
    const axios = require('axios').default;

    function createUser() {
        const formData = {
            name: document.getElementById('userName').value,
            email: document.getElementById('userEmail').value,
            password: document.getElementById('userPassword').value,
            document: document.getElementById('userDocument').value,
            mobile: document.getElementById('userMobile').value,
            birthday: document.getElementById('userBirth').value,
            isEnabled: document.getElementById('userEnabled').value,
        }

        axios.post('https://fiap-back-end.herokuapp.com/users', formData)
            .then(() => window.location.href = "/users");
    };

    return (
        <>
            <div className="table-header">
                <h3>Novo usuário</h3>
            </div>

            <form>
                <div className="form-body">
                    <div>
                        <input type="text" placeholder="Nome" id="userName" />
                    </div>

                    <div>
                        <input type="email" placeholder="E-mail" id="userEmail" />
                    </div>

                    <div>
                        <input type="password" placeholder="Senha" id="userPassword" />
                    </div>

                    <div>
                        <input type="text" placeholder="Documento" id="userDocument" />
                    </div>

                    <div>
                        <input type="tel" placeholder="Telefone/Celular" id="userMobile" />
                    </div>

                    <div>
                        <input type="date" placeholder="Data de nascimento" id="userBirth" />
                    </div>

                    <div className="is-enabled">
                        <input type="checkbox" id="userEnabled" />
                        <label>Ativo</label>
                    </div>
                </div>


                <div className="form-footer">
                    <a href="/users" className="btn mr-1">
                        Cancelar
                    </a>

                    <button type="button" className="btn btn-primary" onClick={() => createUser()}>
                        Salvar
                    </button>
                </div>
            </form>
        </>
    );
}

export default UsersForm;