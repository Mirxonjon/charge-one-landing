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
                        {/* Hardware Details */}
                        <div className={styles.statusBar}>
                            <span className={styles.time}>9:41</span>
                            <div className={styles.dynamicIsland}>
                                <div className={styles.camera}></div>
                            </div>
                            <div className={styles.statusIcons}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M21 12.5v9a.5.5 0 01-.5.5H18a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5zM15.5 15.5v6a.5.5 0 01-.5.5H12.5a.5.5 0 01-.5-.5v-6a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5zM10 18.5v3a.5.5 0 01-.5.5H7.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5zM4.5 21.5v0a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v0a.5.5 0 01.5-.5h2.5a.5.5 0 01.5.5z" /></svg>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zM5 6v12h14V6H5z" fill="white" /><rect x="2" y="7" width="16" height="10" rx="1" fill="white" /><path d="M22 10v4h2v-4h-2z" fill="white" /></svg>
                            </div>
                        </div>

                        <div className={styles.phoneScreen}>
                            {/* Inner Dashboard UI */}
                            <div className={styles.appHeader}>
                                <div>
                                    <h4 className={styles.greeting}>Charge-One</h4>
                                    <h3 className={styles.userName}>Boshqaruv Paneli</h3>
                                </div>
                                <div className={styles.avatar}>
                                    <Zap size={16} color="white" />
                                </div>
                            </div>

                            <div className={styles.balanceCard}>
                                <p className={styles.balanceLabel}>Jami tushumlar</p>
                                <h1 className={styles.balanceValue}>14 802 <span className={styles.currency}>k UZS</span></h1>
                                <div className={styles.chartPlaceholder}>
                                    <svg viewBox="-5 -5 210 60" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                                        <path d="M0,45 Q20,35 40,40 T80,25 T120,30 T160,15 T200,5 L200,50 L0,50 Z" fill="rgba(34,197,94,0.15)" />
                                        <path d="M0,45 Q20,35 40,40 T80,25 T120,30 T160,15 T200,5" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        <circle cx="200" cy="5" r="4" fill="#4ade80" />
                                    </svg>
                                </div>
                            </div>

                            <div className={styles.sectionTitle}>Faol tranzaksiyalar</div>
                            <div className={styles.activityList}>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityIcon} style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                                        <Zap size={16} />
                                    </div>
                                    <div className={styles.activityInfo}>
                                        <p>ZTY - 120kWt</p>
                                        <span>Quvvatlanmoqda (68%)</span>
                                    </div>
                                    <div className={styles.activityAmountBlue}>+24k</div>
                                </div>
                                <div className={styles.activityItem}>
                                    <div className={styles.activityIcon} style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80' }}>
                                        <Zap size={16} />
                                    </div>
                                    <div className={styles.activityInfo}>
                                        <p>Tokbor #1</p>
                                        <span>Yakunlandi (2 soat oldin)</span>
                                    </div>
                                    <div className={styles.activityAmountGreen}>+12k</div>
                                </div>
                            </div>

                            <div className={styles.gridStats}>
                                <div className={styles.gridStat}>
                                    <span className={styles.statVal}>84</span>
                                    <span className={styles.statLab}>Faol stansiya</span>
                                </div>
                                <div className={styles.gridStat}>
                                    <span className={styles.statVal}>99%</span>
                                    <span className={styles.statLab}>Barqarorlik</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Income Dashboard Card (Top Left) */}
                    <div className={`${styles.glassWidget} ${styles.incomeWidget}`}>
                        <div className={styles.widgetHeader}>
                            <div className={styles.iconCircleBlue}>
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <span>{dict.hero.incomeTitle}</span>
                        </div>
                        <div className={styles.incomeMetrics}>
                            <div className={styles.incomeAmount}>{dict.hero.incomeValue}</div>
                            <div className={styles.incomeBadge}>{dict.hero.incomeGrowth}</div>
                        </div>
                        {/* Mini Chart SVG */}
                        <div className={styles.miniChart}>
                            <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                                <path d="M0,50 Q20,40 40,45 T80,30 T120,35 T160,15 T200,5 L200,60 L0,60 Z" fill="rgba(34,197,94,0.1)" />
                                <path d="M0,50 Q20,40 40,45 T80,30 T120,35 T160,15 T200,5" fill="none" stroke="#22c55e" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>

                    {/* Station Status Card (Bottom Right) */}
                    <div className={`${styles.glassWidget} ${styles.statusWidget}`}>
                        <div className={styles.widgetHeader}>
                            <div className={styles.iconCirclePurple}>
                                <Zap size={18} color="white" />
                            </div>
                            <span>{dict.hero.stationStatus}</span>
                        </div>
                        <div className={styles.statusList}>
                            <div className={styles.statusRow}>
                                <div className={styles.statusDotGreen}></div>
                                <span className={styles.stationName}>Tokbor #1</span>
                                <span className={styles.stationState}>{dict.hero.statusOnline}</span>
                            </div>
                            <div className={styles.statusRow}>
                                <div className={styles.statusDotBlue}></div>
                                <span className={styles.stationName}>ZTY - 120kWt</span>
                                <span className={styles.stationState}>{dict.hero.statusCharging}</span>
                            </div>
                            <div className={styles.statusRow}>
                                <div className={styles.statusDotGreen}></div>
                                <span className={styles.stationName}>Voltauto</span>
                                <span className={styles.stationState}>{dict.hero.statusOnline}</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating mini-badges */}
                    <div className={`${styles.miniPill} ${styles.pillAuto}`}>
                        <div className={styles.pillIconTeal}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        {dict.hero.tagAuto}
                    </div>

                    <div className={`${styles.miniPill} ${styles.pillProfit}`}>
                        <div className={styles.pillIconOrange}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                        </div>
                        {dict.hero.tagProfit}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
