"use client";
import HotQuestionsData from './HotQuestions.json';
import React, { useState } from 'react';
import styles from './HotQuestions.module.css';

interface IHotQuestions {
    question: string;
    answer: string;
}

const HotQuestions = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Часто задаваемые вопросы</h2>
            <div className={styles.questionsWrapper}>
                {HotQuestionsData.map((item: IHotQuestions, index: number) => (
                    <div key={index} className={styles.questionDetail}>
                        <div onClick={() => handleToggle(index)} className={styles.questionText}>
                            {item.question}
                            <div className="flex items-center">
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="6" x2="12" y2="6" stroke="#02c5de" strokeWidth="2" />
                                    {openIndex !== index && (
                                        <line x1="6" y1="0" x2="6" y2="12" stroke="#02c5de" strokeWidth="2" />
                                    )}
                                </svg>
                            </div>
                        </div>
                        {openIndex === index && (
                            <p className={styles.answerText}>
                                {item.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotQuestions;