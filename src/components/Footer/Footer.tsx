'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Send, MoveUpRight, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer({ dict }: { dict: any }) {
    return (
        <footer className={styles.footer}>
            <div className={`container`}>

                {/* Modern App Promo & Application Banner */}
                <div className={styles.appPromo}>
                    <div className={styles.appPromoContent}>
                        <h3 className={styles.promoTitle}>{dict.footer.downloadApp}</h3>
                        <p className={styles.promoDesc}>{dict.footer.downloadDesc}</p>

                        <div className={styles.storeButtons}>
                            <a href="#" className={styles.storeBtn}>
                                <svg className={styles.storeIcon} viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.3 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                </svg>
                                <span className={styles.btnTextSimple}>App Store</span>
                            </a>
                            <a href="#" className={styles.storeBtn}>
                                <svg className={styles.storeIcon} viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                </svg>
                                <span className={styles.btnTextSimple}>Google Play</span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.promoActions}>
                        <h4 className={styles.promoFormTitle}>Biz bilan bog'laning</h4>
                        {/* Application Form */}
                        <form className={styles.promoForm} onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Ism familiya" className={styles.promoInput} required />
                            <input type="tel" placeholder="Telefon raqami" className={styles.promoInput} required />
                            <button type="submit" className={styles.promoSubmitBtn}>Yuborish</button>
                        </form>
                    </div>
                </div>

                <div className={styles.footerTop}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <img src="/logo.png" alt="Charge One Logo" style={{ height: '36px', width: 'auto', display: 'block' }} />
                        </Link>
                        <p className={styles.brandDesc}>
                            {dict.footer.desc}
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Telegram">
                                <Send size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>{dict.footer.navTitle}</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="#advantages">{dict.nav.advantages}</Link></li>
                            <li><Link href="#clients">{dict.nav.clients}</Link></li>
                            <li><Link href="#partners">{dict.nav.partners}</Link></li>
                            <li><Link href="#process">{dict.nav.process}</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>{dict.footer.docsTitle}</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/privacy">{dict.footer.privacy} <MoveUpRight size={12} /></Link></li>
                            <li><Link href="/terms">{dict.footer.terms} <MoveUpRight size={12} /></Link></li>
                            <li><Link href="/offer">{dict.footer.offer} <MoveUpRight size={12} /></Link></li>
                            <li><Link href="/requisites">{dict.footer.requisites} <MoveUpRight size={12} /></Link></li>
                        </ul>
                    </div>

                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>{dict.footer.contactTitle}</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <MapPin size={18} className={styles.contactIcon} />
                                <span>г. Ташкент, Узбекистан</span>
                            </li>
                            <li>
                                <Phone size={18} className={styles.contactIcon} />
                                <a href="tel:+998990000000">+998 (99) 000-00-00</a>
                            </li>
                            <li>
                                <Mail size={18} className={styles.contactIcon} />
                                <a href="mailto:info@charge-one.com">info@charge-one.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} {dict.footer.rights}
                    </div>
                </div>
            </div>
        </footer>
    );
}
