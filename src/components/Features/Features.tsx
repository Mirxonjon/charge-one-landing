'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, TrendingUp, Users, ShieldCheck, Zap } from 'lucide-react';
import styles from './Features.module.css';

const animations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Features() {
    return (
        <section id="advantages" className={styles.features}>
            <div className={`container`}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.label}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={animations}
                    >
                        ПРЕИМУЩЕСТВА
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ ...animations, visible: { ...animations.visible, transition: { delay: 0.1, duration: 0.6 } } }}
                    >
                        Ключевые преимущества для вашей сети
                    </motion.h2>
                </div>

                <div className={styles.bentoGrid}>
                    {/* Card 1: App Development */}
                    <motion.div
                        className={`${styles.card} ${styles.cardSmall} ${styles.col1}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ ...animations, visible: { ...animations.visible, transition: { delay: 0.1 } } }}
                    >
                        <div className={styles.iconWrapper}>
                            <LayoutGrid size={24} className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Нет необходимости разрабатывать собственное приложение</h3>
                        <p className={styles.cardDesc}>
                            Разработка своего приложения потребует значительных ресурсов, которые лучше потратить на расширение сети станций.
                        </p>
                    </motion.div>

                    {/* Card 2: Marketing */}
                    <motion.div
                        className={`${styles.card} ${styles.cardSmall} ${styles.col1}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ ...animations, visible: { ...animations.visible, transition: { delay: 0.2 } } }}
                    >
                        <div className={styles.iconWrapper}>
                            <TrendingUp size={24} className={styles.icon} />
                        </div>
                        <h3 className={styles.cardTitle}>Больше нет необходимости в маркетинговых кампаниях</h3>
                        <p className={styles.cardDesc}>
                            Мы собрали в платформу все станции для электромобилей, предоставив водителям единый источник информации и увеличив ваши продажи.
                        </p>
                    </motion.div>

                    {/* Card 3: Management (Large vertical) */}
                    <motion.div
                        className={`${styles.card} ${styles.cardLarge} ${styles.col2}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ ...animations, visible: { ...animations.visible, transition: { delay: 0.3 } } }}
                    >
                        <div className={styles.cardImage}>
                            <div className={styles.placeholderImg}>
                                <Users size={64} className={styles.placeholderIcon} />
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Легко управляйте своим бизнесом с помощью нашей панели</h3>
                        <p className={styles.cardDesc}>
                            Вы все контролируете! Устанавливайте цены, создавайте индивидуальные тарифы, отслеживайте транзакции и применяйте скидки через панель партнеров.
                        </p>
                    </motion.div>

                    {/* Card 4: Support */}
                    <motion.div
                        className={`${styles.card} ${styles.cardSmall} ${styles.col3}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ ...animations, visible: { ...animations.visible, transition: { delay: 0.4 } } }}
                    >
                        <div className={styles.cardImageSmall}>
                            <ShieldCheck size={40} className={styles.placeholderIcon} />
                        </div>
                        <h3 className={styles.cardTitle}>Не требуется колл-центр или ИТ-отдел</h3>
                        <p className={styles.cardDesc}>
                            Charge-One прикрывает все! Создание собственного ИТ-отдела может быть нерентабельным для небольших сетей.
                        </p>
                    </motion.div>

                    {/* Card 5: Kilowatt packages */}
                    <motion.div
                        className={`${styles.card} ${styles.cardSmall} ${styles.col3}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ ...animations, visible: { ...animations.visible, transition: { delay: 0.5 } } }}
                    >
                        <div className={styles.tagWrapper}>
                            <div className={styles.iconWrapperRed}>
                                <Zap size={20} className={styles.iconRed} />
                            </div>
                            <span className={styles.newTag}>Новый</span>
                        </div>
                        <h3 className={styles.cardTitle}>Создайте свои пакеты киловатт и обеспечьте ежегодные продажи</h3>
                        <p className={styles.cardDesc}>
                            Привлекательные пакеты с помощью нескольких кликов, получая сразу большие суммы от пользователей.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
