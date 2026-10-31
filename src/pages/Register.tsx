import { IonInput, IonItem, IonList, IonButton, IonPage, IonContent, IonHeader, IonToolbar, IonMenuButton, IonTitle } from '@ionic/react';
import Menu from "../components/Menu";

import "./Register.css";

export const Register: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonHeader>
                    <div className='container-toolbar'>
                        <IonMenuButton />
                    </div>
                </IonHeader>

                <IonContent>
                    <div className='container'>
                        <Menu />
                        <form action="/login" method='POST' className='form'>
                            <div className='top-container'>
                                <IonInput label="Nome:" placeholder="Digite seu nome" type='text'></IonInput>
                                <IonInput label="E-mail:" placeholder="Digite seu email" type='email'></IonInput>
                                <IonInput label="Senha:" type="password" placeholder='Digite sua senha'></IonInput>
                                <IonInput label="Confirmar senha:" type="password" placeholder='Confirme sua senha'></IonInput>
                                <IonInput label="Celular" type="tel" placeholder='Digite seu número'></IonInput>
                                <IonButton type='submit' >Cadastrar-se</IonButton>
                            </div>
                        </form>
                    </div>
                </IonContent>

            </IonPage>

        </>
    );
};