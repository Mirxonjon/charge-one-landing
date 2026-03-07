import { getDictionary } from '@/i18n/dictionaries';
import { Locale } from '@/i18n/config';
import styles from '@/styles/Legal.module.css';

export default async function OfferPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <main className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    {lang === 'uz' ? 'Ommaviy oferta' : lang === 'ru' ? 'Договор оферты' : 'Public Offer'}
                </h1>

                <div className={styles.contentCard}>
                    <div className={styles.metaInfo}>
                        <strong>Kuchga kirish sanasi:</strong> 2024-yil 1-yanvar
                    </div>

                    <h2 className={styles.sectionTitle}>1. Umumiy qoidalar</h2>
                    <p className={styles.paragraph}>
                        Ushbu hujjat "Charge One" (Ijrochi) va har qanday jismoniy yoki yuridik shaxs (Buyurtmachi) o'rtasida
                        xizmat ko'rsatish shartnomasini tuzish bo'yicha rasmiy taklif (ommaviy oferta) hisoblanadi. O'zbekiston Respublikasi
                        Fuqarolik kodeksining 369-moddasi 2-qismiga muvofiq, ushbu taklifni qabul qilish ko'rsatilgan shartlarni qabul qilishni anglatadi.
                    </p>

                    <h2 className={styles.sectionTitle}>2. Ofertani qabul qilish (Aksept)</h2>
                    <p className={styles.paragraph}>
                        Buyurtmachi ilovada ro'yxatdan o'tishi va hisobini to'ldirishi bilan ushbu ofertani shartsiz va to'liq
                        qabul qilgan (akseptlagan) deb hisoblanadi. Aksept - bu shartnoma taraflar tomonidan to'liq imzolangan kuchga ega.
                    </p>

                    <h2 className={styles.sectionTitle}>3. Xizmat ko'rsatish tartibi</h2>
                    <p className={styles.paragraph}>
                        Ijrochi elektrokar avtomobillarini quvvatlash xizmatini yagona dastur yoki tarmoq ichidagi stansiyalar
                        orqali taqdim etadi. Barcha ma'lumotlar, joylashuv, va tariflar ilovada ochiq e'lon qilinadi. Buyurtmachi
                        xizmatdan o'z xohishi bo'yicha mustaqil foydalanadi.
                    </p>

                    <h2 className={styles.sectionTitle}>4. Tomonlarning huquq va majburiyatlari</h2>
                    <div className={styles.paragraph}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong className={styles.highlight}>Ijrochi huquqlari:</strong> xizmatni yaxshilash, profilaktika ishlari vaqtida xizmatni to'xtatib turish, qonunchilikka asosan narxlarni o'zgartirish huquqiga ega.</li>
                            <li className={styles.listItem}><strong className={styles.highlight}>Buyurtmachi huquqlari:</strong> sifatga e'tiroz bildirish, baland tarifda quvvat olmasdan stansiyani tark etish, oldindan ogohlantirmasdan tizimdan foydalanishni rad qilish.</li>
                        </ul>
                    </div>

                    <h2 className={styles.sectionTitle}>5. To'lov tartibi</h2>
                    <p className={styles.paragraph}>
                        To'lov ilova hisobiga 100% oldindan karta terminali, onlayn to'lov tizimlari (Payme, Click va hkz) orqali kiritiladi.
                        Sarflangan kVt yoki daqiqa bo'yicha aniq mablag' zaryadlash vaqtida dastrurdan hisobdan yechiladi. Qolgan mablag'lar qoldiq sifatida saqlanadi.
                    </p>

                    <h2 className={styles.sectionTitle}>6. Fors-major</h2>
                    <p className={styles.paragraph}>
                        Elektr tarmog'idagi uzilishlar, aloqa operatorlari tomonidan sodir bo'lgan nosozliklar kabi Ijrochi nazorat qila olmaydigan holatlarda xizmat ko'rsatilmaganligi uchun qoplama summasi majburiyat emas, favqulodda xizmat to'xtatuvchi holat hisoblanadi.
                    </p>
                </div>
            </div>
        </main>
    );
}
