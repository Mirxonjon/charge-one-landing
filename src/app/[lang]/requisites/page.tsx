import { getDictionary } from '@/i18n/dictionaries';
import { Locale } from '@/i18n/config';
import styles from '@/styles/Legal.module.css';

export default async function RequisitesPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <main className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    {lang === 'uz' ? 'Kompaniya rekvizitlari' : lang === 'ru' ? 'Реквизиты компании' : 'Company Requisites'}
                </h1>

                <div className={styles.contentCard}>
                    <div className={styles.reqGrid}>
                        <div className={styles.reqItem}>
                            <h3 className={styles.reqLabel}>Tashkilot nomi:</h3>
                            <p className={styles.reqValue}>"CHARGE ONE" MChJ</p>
                        </div>

                        <div className={styles.reqItem}>
                            <h3 className={styles.reqLabel}>Yuridik manzil:</h3>
                            <p className={styles.reqValue}>
                                O'zbekiston Respublikasi, Toshkent shahri, Yunusobod tumani
                            </p>
                        </div>

                        <div className={styles.reqItem}>
                            <h3 className={styles.reqLabel}>STIR (INN):</h3>
                            <p className={styles.reqValueMono}>310 000 000</p>
                        </div>

                        <div className={styles.reqItem}>
                            <h3 className={styles.reqLabel}>MFO:</h3>
                            <p className={styles.reqValueMono}>00014</p>
                        </div>

                        <div className={styles.reqItem}>
                            <h3 className={styles.reqLabel}>Hisob raqam:</h3>
                            <p className={styles.reqValueMono}>2020 8000 0000 0000 0001</p>
                            <p className={styles.paragraph} style={{ marginTop: '0.25rem', fontSize: '0.9rem' }}>XATB "Davr Bank"</p>
                        </div>

                        <div className={styles.reqItem}>
                            <h3 className={styles.reqLabel}>Aloqa ma'lumotlari:</h3>
                            <p className={styles.reqValue}>Tel: +998 (99) 000-00-00</p>
                            <p className={styles.reqValue} style={{ marginTop: '0.25rem' }}>Email: info@charge-one.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
