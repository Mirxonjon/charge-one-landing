'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';

const processSteps = [
    { id: 1, title: 'Онлайн или оффлайн консультации', desc: 'Свяжитесь с нами для первичного обсуждения.' },
    { id: 2, title: 'Оформление договоров и документы', desc: 'Юридическое закрепление партнерства.' },
    { id: 3, title: 'Добавление зарядной станции на платформу', desc: 'Интеграция вашей станции в нашу систему.' },
    { id: 4, title: 'Продвигаем вашу зарядную станцию', desc: 'Доносим информацию до водителей EV.' },
    { id: 5, title: 'Пользователи начинают заряжаться', desc: 'Первые клиенты на ваших станциях.' },
    { id: 6, title: 'Начните получать пассивный доход', desc: 'Удобный вывод средств в любой момент.' },
    { id: 7, title: 'Постоянная поддержка со стороны Charge-One', desc: 'Техническое обслуживание и обновления.' }
];

export default function Process() {
    return (
        <section id="process" className={styles.process}>
            <div className={`container`}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        ПРОЦЕСС
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Процесс работы с Charge-One
                    </motion.h2>
                </div>

                <div className={styles.stepsContainer}>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.stepNumber}>{step.id}</div>
                            <div className={styles.stepContent}>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
