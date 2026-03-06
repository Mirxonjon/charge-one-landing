import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Send, MoveUpRight, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer({ dict }: { dict: any }) {
    return (
        <footer className={styles.footer}>
            <div className={`container`}>
                <div className={styles.footerTop}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.png" alt="Charge-One Logo" width={140} height={35} />
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
