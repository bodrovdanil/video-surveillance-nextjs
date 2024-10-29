"use client";
import HotQuestionsData from './HotQuestions.json';
import React, { useState } from 'react';
import styles from './HotQuestions.module.css';

interface IHotQuestions {
    question: string;
    answer: string;
}

const HotQuestions = () => {
    const [isLineVisible, setLineVisible] = useState<boolean[]>(Array(HotQuestionsData.length).fill(true));

    const handleToggle = (index: number) => {
        setLineVisible(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = !newVisibility[index];
            return newVisibility;
        });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Часто задаваемые вопросы</h2>
            <div className={styles.questionsWrapper}>
                {HotQuestionsData.map((item: IHotQuestions, index: number) => (
                    <details key={index} className={styles.questionDetail} onToggle={() => handleToggle(index)}>
                        <summary className={styles.questionText}>
                            {item.question}
                            <div className="flex items-center">
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="6" x2="12" y2="6" stroke="#02c5de" strokeWidth="2" />
                                    {isLineVisible[index] && (<line x1="6" y1="0" x2="6" y2="12" stroke="#02c5de" strokeWidth="2" />)}
                                </svg>
                            </div>
                        </summary>
                        <p className={styles.answerText}>
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default HotQuestions;
