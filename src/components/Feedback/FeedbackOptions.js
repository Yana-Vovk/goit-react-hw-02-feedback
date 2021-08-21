import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';


const Feedback = ({options, onLeaveFeedback}) => {
    return (
        <ul className={s.ulBtn}>
            {options.map(feedback => (
                <li key={feedback}> <button type="button" name={feedback} onClick={onLeaveFeedback} className={s.button}>{feedback}</button>
                </li>
            ))}
        </ul>
    );
}

export default Feedback;

Feedback.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}