import { IonItem, IonLabel, IonSpinner } from '@ionic/react';
import "./Loader.css";

export const Loader: React.FC = () => {
    return (
        <div className='container'>
            <IonSpinner name="crescent"></IonSpinner>
        </div>
    );
};