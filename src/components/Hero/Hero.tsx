'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ dict }: { dict: any }) {
    return (
        <section className={styles.hero}>
            <div className={styles.bgDots}></div>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {dict.hero.title1}
                        <span className={styles.highlight}>{dict.hero.titleHighlight}</span>
                        <br />
                        {dict.hero.title2}
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {dict.hero.desc}
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <button className={styles.storeBtn}>
                            <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                            {dict.hero.appStore}
                        </button>
                        <button className={styles.storeBtn}>
                            <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                            {dict.hero.googlePlay}
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.visualContainer}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className={styles.phoneMockup}>
                        <div className={styles.phoneScreen}>
                            <div className={styles.mapBg}></div>
                            <div className={styles.mapPin1}>
                                <Zap size={14} color="white" />
                            </div>
                            <div className={styles.mapPin2}>
                                <Zap size={14} color="white" />
                            </div>
                            <div className={styles.mapPin3}>
                                <Zap size={14} color="white" />
                            </div>

                            <div className={styles.topBar}>
                                <div className={styles.balanceTag}>
                                    <div className={styles.walletIcon}></div>
                                    <span>{dict.hero.balance}</span>
                                </div>
                                <div className={styles.profileIcon}></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating tags like BEON */}
                    <div className={styles.floatingTag1}>
                        <div className={styles.tagNum1}>1</div>
                        <span>{dict.hero.tag1}</span>
                    </div>

                    <div className={styles.floatingTag2}>
                        <div className={styles.tagNum2}>2</div>
                        <span>{dict.hero.tag2}</span>
                    </div>

                    <div className={styles.floatingTag3}>
                        <div className={styles.tagNum3}>3</div>
                        <span>{dict.hero.tag3}</span>
                    </div>

                    {/* Dark Glass Card (Tesla model X simulation) */}
                    <div className={styles.teslaCard}>
                        <div className={styles.cardHeader}>
                            <span>Tesla Model X</span>
                            <div className={styles.settingsIcon}></div>
                        </div>
                        <div className={styles.carImagePlaceholder}></div>
                        <div className={styles.carStats}>
                            <div>76%</div>
                            <div>560 km</div>
                            <div>2 h 30 m</div>
                        </div>
                    </div>

                    <div className={styles.paymentCard}>
                        <div className={styles.paymentHeader}>
                            <Zap size={16} color="#f59e0b" />
                            <span>1200 кВт</span>
                        </div>
                        <div className={styles.progressRow}>
                            <span>1 200 000 UZS</span>
                            <span className={styles.progressMinus}>-280 000 UZS</span>
                        </div>
                        <button className={styles.buyBtn}>{dict.hero.buyKw}</button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
