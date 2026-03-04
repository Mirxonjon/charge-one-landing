'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container`}>
                <div className={styles.footerTop}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            <div className={styles.logoIcon}></div>
                            <span className={styles.logoText}>Charge-One</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            Инновационная сеть зарядных станций для электромобилей.
                            Превращаем вашу станцию в источник стабильного дохода.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Telegram">
                                <Send size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.linksTitle}>Навигация</h4>
                        <ul className={styles.linksList}>
                            <li><Link href="#advantages">Преимущества</Link></li>
                            <li><Link href="#clients">Для клиентов</Link></li>
                            <li><Link href="#partners">Партнерство</Link></li>
                            <li><Link href="#process">Процесс</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.linksTitle}>Документы</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#">Политика конфиденциальности</a></li>
                            <li><a href="#">Пользовательское соглашение</a></li>
                            <li><a href="#">Договор оферты</a></li>
                            <li><a href="#">Реквизиты</a></li>
                        </ul>
                    </div>

                    <div className={styles.contactCol}>
                        <h4 className={styles.linksTitle}>Контакты</h4>
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
                        &copy; {new Date().getFullYear()} Charge-One. Все права защищены.
                    </div>
                    <div className={styles.domain}>charge-one.com</div>
                </div>
            </div>
        </footer>
    );
}
