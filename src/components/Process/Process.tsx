'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';

export default function Process({ dict }: { dict: any }) {
    const steps = [
        { num: '01', title: dict.process.s1Title, desc: dict.process.s1Desc },
        { num: '02', title: dict.process.s2Title, desc: dict.process.s2Desc },
        { num: '03', title: dict.process.s3Title, desc: dict.process.s3Desc },
        { num: '04', title: dict.process.s4Title, desc: dict.process.s4Desc },
        { num: '05', title: dict.process.s5Title, desc: dict.process.s5Desc },
        { num: '06', title: dict.process.s6Title, desc: dict.process.s6Desc },
        { num: '07', title: dict.process.s7Title, desc: dict.process.s7Desc },
    ];

    return (
        <section id="process" className={styles.process}>
            <div className={styles.bgGlow}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {dict.process.label}
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {dict.process.title}
                    </motion.h2>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.step} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", duration: 0.8, bounce: 0.3, delay: index * 0.1 }}
                        >
                            <div className={styles.stepContent}>
                                <div className={styles.numBox}>{step.num}</div>
                                <div className={styles.textBox}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            </div>
                            <div className={styles.stepConnector}>
                                <div className={styles.connectorDot}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
