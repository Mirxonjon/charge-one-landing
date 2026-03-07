import { getDictionary } from '@/i18n/dictionaries';
import { Locale } from '@/i18n/config';
import styles from '@/styles/Legal.module.css';

export default async function PrivacyPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <main className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    {lang === 'uz' ? 'Maxfiylik siyosati' : lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}
                </h1>

                <div className={styles.contentCard}>
                    <div className={styles.metaInfo}>
                        <strong>Kuchga kirish sanasi:</strong> 2024-yil 1-yanvar
                    </div>

                    <h2 className={styles.sectionTitle}>1. Umumiy qoidalar</h2>
                    <p className={styles.paragraph}>
                        Ushbu Maxfiylik Siyosati biz tomonimizdan foydalanuvchilar haqidagi ma'lumotlarni qanday to'plashimiz,
                        ishlatishimiz, saqlashimiz va himoya qilishimizni belgilaydi. Biz foydalanuvchilarimizning shaxsiy ma'lumotlariga
                        jiddiy yondashamiz va O'zbekiston Respublikasi qonunchiligi doirasida faoliyat olib boramiz.
                    </p>

                    <h2 className={styles.sectionTitle}>2. To'planadigan ma'lumotlar</h2>
                    <p className={styles.paragraph}>
                        Xizmatdan foydalanish jarayonida quyidagi turdagi shaxsiy ma'lumotlar to'planishi mumkin:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Foydalanuvchining ismi, familiyasi;</li>
                        <li className={styles.listItem}>Aloqa ma'lumotlari (telefon raqami, elektron pochta);</li>
                        <li className={styles.listItem}>Qurilma haqida ma'lumotlar va geolokatsiya;</li>
                        <li className={styles.listItem}>Ilova ichidagi tranzaksiyalar va to'lovlar tarixi.</li>
                    </ul>

                    <h2 className={styles.sectionTitle}>3. Ma'lumotlardan foydalanish maqsadlari</h2>
                    <p className={styles.paragraph}>
                        To'plangan ma'lumotlar quyidagi maqsadlarda ishlatiladi:
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Avtomobilni quvvatlash xizmatlarini taqdim etish;</li>
                        <li className={styles.listItem}>Mijozlarni qo'llab-quvvatlash va savollarga javob berish;</li>
                        <li className={styles.listItem}>Platforma xavfsizligini ta'minlash va firibgarlikning oldini olish;</li>
                        <li className={styles.listItem}>Xizmat sifatini yaxshilash va yangi funksiyalarni ishlab chiqish.</li>
                    </ul>

                    <h2 className={styles.sectionTitle}>4. Uchinchi shaxslarga ma'lumot uzatish</h2>
                    <p className={styles.paragraph}>
                        Foydalanuvchilarning shaxsiy ma'lumotlari faqatgina qonunchilikda belgilangan hollarda yoki
                        xizmat ko'rsatishni ta'minlash maqsadida (masalan, to'lov tizimlari bilan ishlashda) uchinchi
                        shaxslarga taqdim etilishi mumkin. Boshqa tijorat maqsadlarida bepul berilmaydi ham, sotilmaydi ham.
                    </p>

                    <h2 className={styles.sectionTitle}>5. Ma'lumotlarni himoya qilish</h2>
                    <p className={styles.paragraph}>
                        Biz foydalanuvchi ma'lumotlarini ruxsatsiz kirish, yo'q qilish yoki o'zgartirishdan himoya qilish uchun barcha
                        keng tarqalgan texnik xavfsizlik choralarini ko'ramiz.
                    </p>

                    <h2 className={styles.sectionTitle}>6. Bog'lanish</h2>
                    <div className={styles.contactBlock}>
                        <p className={styles.paragraph}>
                            Ushbu siyosat bo'yicha savollaringiz bo'lsa, iltimos, biz bilan bog'laning:
                        </p>
                        <ul className={styles.list} style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
                            <li className={styles.listItem}><span className={styles.highlight}>Elektron pochta:</span> info@charge-one.com</li>
                            <li className={styles.listItem}><span className={styles.highlight}>Telefon:</span> +998 (99) 000-00-00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
