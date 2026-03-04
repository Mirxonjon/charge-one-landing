'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}></div>
                    <span className={styles.logoText}>Charge-One</span>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="#advantages" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Преимущества</Link>
                    <Link href="#clients" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Для клиентов</Link>
                    <Link href="#partners" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Партнерство</Link>
                    <Link href="#process" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Процесс</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.loginBtn}>Войти</button>
                    <button className={styles.langBtn}>Русский</button>
                    <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
