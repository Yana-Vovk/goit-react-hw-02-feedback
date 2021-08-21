import PropTypes from 'prop-types';
import s from './Cover.module.css';

const Cover = ({ title, children }) => {
    return (
        <section className={s.section}>
            <p className={s.title}>{title}</p>
            {children}
        </section>
    )
}

export default Cover;

Cover.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}