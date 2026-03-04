'use client';

import { motion } from 'framer-motion';
import { ArrowRightLeft, Target } from 'lucide-react';
import styles from './Partners.module.css';

export default function Partners() {
    return (
        <section id="partners" className={styles.partners}>
            <div className={`container`}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        ПАРТНЕРСТВО
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Тип партнерства
                    </motion.h2>
                </div>

                <div className={styles.cardsContainer}>
                    {/* Direct Partner */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.cardVisual}>
                            <Target size={64} className={styles.iconPrimary} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Прямое партнерство</h3>
                            <p className={styles.cardDesc}>
                                Вы можете добавить свою зарядную станцию в Charge-One,
                                и пользователи получат возможность заряжать свои электромобили
                                на ваших зарядных станциях с помощью нашего приложения.
                            </p>
                        </div>
                    </motion.div>

                    {/* Indirect Partner */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.cardVisualBlue}>
                            <ArrowRightLeft size={64} className={styles.iconBlue} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Непрямое партнерство</h3>
                            <p className={styles.cardDesc}>
                                Вы можете добавить свою зарядную станцию в Charge-One,
                                чтобы рекламировать свою точку зарядки и привлечь
                                больше клиентов к вашей локации.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
