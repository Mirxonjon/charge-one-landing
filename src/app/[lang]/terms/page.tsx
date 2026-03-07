import { getDictionary } from '@/i18n/dictionaries';
import { Locale } from '@/i18n/config';
import styles from '@/styles/Legal.module.css';

export default async function TermsPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang);

    return (
        <main className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    {lang === 'uz' ? 'Foydalanish shartlari' : lang === 'ru' ? 'Пользовательское соглашение' : 'Terms of Service'}
                </h1>

                <div className={styles.contentCard}>
                    <div className={styles.metaInfo}>
                        <strong>Oxirgi yangilanish:</strong> 2024-yil 1-yanvar
                    </div>

                    <h2 className={styles.sectionTitle}>1. Shartnoma qoidalari</h2>
                    <p className={styles.paragraph}>
                        Ushbu Foydalanish Shartlari foydalanuvchilar "Charge One" tarmog'i va platformasi xizmatlaridan qanday
                        foydalanishlari mumkinligini ta'minlaydi. Ilovani o'rnatish, va undan foydalanish orqali siz quyida keltirilgan
                        shartlarga rozi bo'lgan hisoblanasiz. O'qib chiqish tavsiya e'tiladi.
                    </p>

                    <h2 className={styles.sectionTitle}>2. Ro'yxatdan o'tish</h2>
                    <p className={styles.paragraph}>
                        Tizimdan foydalanish uchun foydalanuvchi ilovada yoki veb-saytda ro'yxatdan o'tishi zarur. Profil ochish
                        vaqtida ko'rsatilgan barcha ma'lumotlar aniq va dolzarb ekanligiga foydalanuvchi kafolat berishi shart.
                    </p>

                    <h2 className={styles.sectionTitle}>3. Foydalanish tartibi va mas'uliyat</h2>
                    <p className={styles.paragraph}>
                        Foydalanuvchi xizmatlardan qonunchilikka zid holda foydalana olmaydi. Zaryadlash stansiyalari uskunalariga
                        qasddan yoki ehtiyotsizlik oqibatida zarar yetkazgan foydalanuvchi jinoiy yoki ma'muriy javobgarlikka tortiladi.
                    </p>

                    <h2 className={styles.sectionTitle}>4. Narxlar va to'lovlar</h2>
                    <p className={styles.paragraph}>
                        Xizmatlar narxi (tariflari) ilova orqali e'lon qilinadi va mijoz ularni quvvatlanish oldidan tasdiqlaydi.
                        Xizmat uchun hisoblangan summa dastrurda biriktirilgan to'lov vositasi (karta, elektron hamyon) orqali yechib olinadi.
                        Xizmatlarni amalga oshirayotganda mablag'ning yetarli darajada ekanligini ta'minlash mijozning vazifasi hisoblanadi.
                    </p>

                    <h2 className={styles.sectionTitle}>5. Bekor qilish va xizmatni to'xtatish</h2>
                    <p className={styles.paragraph}>
                        Foydalanuvchi istalgan vaqt o'z akkauntini yopishi va ilova orqali foydalanishni to'xtatishi mumkin.
                        Biz foydalanish shartnomasi buzilgan deb gumon qilsak yoki huquqni muhofaza qiluvchi organlar so'rovi asosida profilni
                        bloklash, xizmat ko'rsatishdan bosh tortish huquqini o'zimizda saqlab qolamiz.
                    </p>

                    <h2 className={styles.sectionTitle}>6. O'zgartirishlar</h2>
                    <p className={styles.paragraph}>
                        Biz ushbu Foydalanish Shartlariga istalgan vaqt o'zgartirish kiritish huquqini saqlab qolamiz. Yangilangan versiya darhol
                        tarmoq sahifalarida e'lon qilinadi.
                    </p>
                </div>
            </div>
        </main>
    );
}
