'use client';

import { motion } from 'framer-motion';
import { MapPin, Wallet, Zap, ShieldCheck } from 'lucide-react';
import styles from './Clients.module.css';

const textAnimations = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Clients({ dict }: { dict: any }) {
    return (
        <section id="clients" className={styles.clients}>
            <div className={`container`}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {dict.clients.label}
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {dict.clients.title}
                    </motion.h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.featuresList}>
                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={textAnimations} custom={0}>
                            <div className={styles.iconWrapperBlue}><MapPin size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f1}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.1 } } }}>
                            <div className={styles.iconWrapperBlue}><Wallet size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f2}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.2 } } }}>
                            <div className={styles.iconWrapperBlue}><Zap size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f3}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.3 } } }}>
                            <div className={styles.iconWrapperBlue}><ShieldCheck size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f4}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.4 } } }}>
                            <div className={`${styles.iconWrapperBlue} ${styles.iconWrapperGray}`}><div className={styles.plusIcon}>+</div></div>
                            <span>{dict.clients.f5}</span>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.visualRegion}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.phoneMockup}>
                            {/* Phone Frame */}
                            <div className={styles.phoneFrame}>
                                <div className={styles.phoneNotch}></div>
                                <div className={styles.phoneScreen}>
                                    {/* Map UI Mock */}
                                    <div className={styles.mapBg}></div>
                                    <div className={styles.mapPin}>
                                        <div className={styles.pinDot}></div>
                                        <div className={styles.pinPulse}></div>
                                    </div>

                                    {/* Bottom Sheet */}
                                    <div className={styles.bottomSheet}>
                                        <div className={styles.sheetHandle}></div>
                                        <div className={styles.sheetTitle}>Charge One Station #42</div>
                                        <div className={styles.sheetSubtitle}>{dict.clients.mockSubtitle}</div>
                                        <div className={styles.connectors}>
                                            <div className={styles.connector}>
                                                <div className={styles.connIcon}></div>
                                                <div className={styles.connInfo}>
                                                    <div className={styles.connType}>GBT DC</div>
                                                    <div className={styles.connPower}>120 kW</div>
                                                </div>
                                                <div className={styles.connStatus}>{dict.clients.mockStatus}</div>
                                            </div>
                                        </div>
                                        <button className={styles.chargeBtn}>{dict.clients.mockBtn}</button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating UI Elements */}
                            <motion.div
                                className={styles.floatElement1}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            >
                                <div className={styles.floatIcon}><Zap size={16} color="var(--primary)" /></div>
                                <div className={styles.floatText}>
                                    <div className={styles.floatTitle}>{dict.clients.mockBalanceTitle}</div>
                                    <div className={styles.floatDesc}>{dict.clients.mockBalanceDesc}</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.floatElement2}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                            >
                                <div className={styles.avatarMock}></div>
                                <div className={styles.floatText}>
                                    <div className={styles.floatTitle}>{dict.clients.mockSupportTitle}</div>
                                    <div className={styles.floatDesc}>{dict.clients.mockSupportDesc}</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
