import { IonInput, IonItem, IonList, IonButton } from '@ionic/react';

import "./Login.css";

export const Login: React.FC = () => {
    return (
        <div className='container'>
            <form action="/login" method='POST' className='form'>
                <div className='top-container'>
                    <IonInput label="E-mail:" placeholder="Digite  seu email" type='email'></IonInput>
                    <IonInput label="Senha:" type="password" placeholder='Digite sua senha'></IonInput>
                    <IonButton type='submit' >Entrar</IonButton>
                </div>
                <div className='sub-container'>
                    <IonButton type='submit' fill='clear' size='small'>Registre-se</IonButton>
                    <IonButton type='submit' fill='clear' size='small'>Esqueceu a senha</IonButton>
                </div>
            </form>
        </div>
    );
};