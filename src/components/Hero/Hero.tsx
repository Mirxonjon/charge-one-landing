'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundGlow}></div>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Zap size={16} className={styles.badgeIcon} />
                        <span>Платформа №1 в Узбекистане</span>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Объедините свои <span className={styles.highlight}>зарядные станции</span> в одну умную сеть.
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Привлекайте больше клиентов, управляйте бизнесом легко
                        и получайте пассивный доход. Современное решение
                        для владельцев EV станций.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <button className={styles.primaryBtn}>
                            Начать работу
                            <ArrowRight size={20} />
                        </button>
                        <button className={styles.secondaryBtn}>
                            Узнать больше
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className={styles.mockupContainer}>
                        <div className={styles.mockupCard}>
                            <div className={styles.mockupHeader}>
                                <div className={styles.mockupLogo}></div>
                                <span>Charge-One Panel</span>
                            </div>
                            <div className={styles.mockupBody}>
                                <div className={styles.statBox}>
                                    <div className={styles.statLabel}>Доход за месяц</div>
                                    <div className={styles.statValue}>+ 42%</div>
                                </div>
                                <div className={styles.statBox}>
                                    <div className={styles.statLabel}>Новые клиенты</div>
                                    <div className={styles.statValue}>+ 128</div>
                                </div>
                                <div className={styles.chartPlaceholder}></div>
                            </div>
                        </div>

                        {/* Floating Elements for depth */}
                        <motion.div
                            className={styles.floatingCard1}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            <Zap size={24} color="var(--primary)" />
                        </motion.div>
                        <motion.div
                            className={styles.floatingCard2}
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        >
                            ✅ Станция онлайн
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
