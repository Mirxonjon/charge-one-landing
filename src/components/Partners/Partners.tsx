'use client';

import { motion, Variants } from 'framer-motion';
import { Network, Handshake } from 'lucide-react';
import styles from './Partners.module.css';

const cardAnimations: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", duration: 0.8, bounce: 0.3 }
    }
};

export default function Partners({ dict }: { dict: any }) {
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
                        {dict.partners.label}
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {dict.partners.title}
                    </motion.h2>
                </div>

                <div className={styles.cardsContainer}>
                    {/* Direct Partnership Card */}
                    <motion.div
                        className={`${styles.card} ${styles.directCard}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardAnimations}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.iconWrapper}>
                                <Handshake size={32} className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{dict.partners.directTitle}</h3>
                            <p className={styles.cardDesc}>
                                {dict.partners.directDesc}
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <div className={styles.visualElement}>
                                <div className={styles.pulseCircle}></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Indirect Partnership Card */}
                    <motion.div
                        className={`${styles.card} ${styles.indirectCard}`}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ ...cardAnimations, visible: { ...cardAnimations.visible, transition: { delay: 0.2 } } }}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.iconWrapper}>
                                <Network size={32} className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{dict.partners.indirectTitle}</h3>
                            <p className={styles.cardDesc}>
                                {dict.partners.indirectDesc}
                            </p>
                        </div>
                        <div className={styles.cardVisual}>
                            <div className={styles.visualElement}>
                                <div className={styles.networkNodes}>
                                    <div className={styles.node}></div>
                                    <div className={styles.node}></div>
                                    <div className={styles.node}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
