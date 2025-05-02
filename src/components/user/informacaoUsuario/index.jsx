// List with user information

import React, { useState, useEffect} from "react";
import { UserService } from '../../../connection/UserService'
import { ImagemUsuario } from '../imagemUsuario'

export function InformacaoUsuario() {
    const [usuario , setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const DadosUser = async () => {
            try {
                const dados = await UserService();
                setUsuario(dados);
                setLoading(false);
            } catch(err) {
                setError("Erro no carregamento dos dados");
                setLoading(false);
            }
        };

        DadosUser();
    }, []);

    if(loading) {
        return <div>Aguarde...</div>;
    } else if(error) {
        return <div>{error}</div>;
    }

    return (
        <div className="mt-2 col-md-8" style={{width: '65%'}}>
            <h4>Dados do Usuário</h4>
            <ImagemUsuario fotoUrl={usuario.fotoUrl}/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" id='name'>Nome: {usuario.nome}</li>
                <li className="list-group-item" id='cpf'>CPF: {usuario.cpf}</li>
                <li className="list-group-item" id='email'>Email: {usuario.email}</li>
                <li className="list-group-item" id='tel'>Telefone: {usuario.telefone}</li>
                <li className="list-group-item" id='cargo'>Cargo: {usuario.cargo}</li>
            </ul>
        </div>
    );
  }
    