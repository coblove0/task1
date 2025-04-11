import Button from '../button/button';
import Content from '../content/content';
import Title from '../title/title';
import styles from './card.module.css';

function Card () {
    return (
        <div className={styles['card']}>
            <Title />
            <Content />
            <Button />
        </div>
    );
}

export default Card;
