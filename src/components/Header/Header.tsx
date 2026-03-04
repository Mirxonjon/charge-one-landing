'use client';

import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import styles from './Header.module.css';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
    { code: 'uz', name: "O'zbek" },
    { code: 'ru', name: "Русский" },
    { code: 'en', name: "English" }
];

export default function Header({ dict, lang }: { dict: any; lang: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const switchLanguage = (newLang: string) => {
        if (newLang === lang) return;
        const segments = pathname.split('/');
        segments[1] = newLang; // Replace locale segment
        router.push(segments.join('/') || '/');
        setIsLangOpen(false);
    };

    const currentLang = languages.find(l => l.code === lang)?.name || "Русский";

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <Link href={`/${lang}`} className={styles.logo}>
                    <div className={styles.logoIcon}></div>
                    <span className={styles.logoText}>Charge-One</span>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href={`/${lang}#advantages`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{dict.nav.advantages}</Link>
                    <Link href={`/${lang}#clients`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{dict.nav.clients}</Link>
                    <Link href={`/${lang}#partners`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{dict.nav.partners}</Link>
                    <Link href={`/${lang}#process`} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>{dict.nav.process}</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.loginBtn}>{dict.nav.login}</button>

                    <div className={styles.langSelector}>
                        <button className={styles.langBtn} onClick={() => setIsLangOpen(!isLangOpen)}>
                            <Globe size={16} /> <span>{currentLang}</span>
                        </button>
                        {isLangOpen && (
                            <div className={styles.langDropdown}>
                                {languages.map(l => (
                                    <button
                                        key={l.code}
                                        className={styles.langOption}
                                        onClick={() => switchLanguage(l.code)}
                                    >
                                        {l.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
