import { Icons } from 'elements/icons/icons';
import styles from './signature.module.scss';

export default function Signature() {
    return (
        <div className={styles.signDiv}>
            <p><Icons.Copyright size='15'/> Sagana Organic <br /> built by Castynet Studios</p>
        </div>
    );
}