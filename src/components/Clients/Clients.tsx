'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wallet, Zap, ShieldCheck } from 'lucide-react';
import styles from './Clients.module.css';

const textAnimations = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Clients({ dict }: { dict: any }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const BOT_TOKEN = '8131382963:AAEuhRBGXNILOfRRTeLlGFA7vuGH9LVdO0o';
    const CHAT_ID = '1795748595';

    const handlePhoneFocus = () => {
        if (!phone) {
            setPhone('+998');
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;

        // Don't allow user to delete the '+998' prefix once it's there
        // Instead, just reset to '+998' if they try deleting into it
        if (val.length < 4 && val.includes('+')) {
            val = '+998';
        }

        // Allow only plus sign and numbers
        const cleaned = val.replace(/[^\d+]/g, '');

        // Ensure it starts with +998
        if (!cleaned.startsWith('+998')) {
            // If they are clearing the whole input manually or pasting
            if (cleaned.length === 0) return setPhone('');
            return; // Ignore mapping if it breaks prefix
        }

        // Keep only +998 and up to 9 digits (total 13 chars)
        const digitsOnly = cleaned.substring(4).replace(/\D/g, '');
        const finalVal = '+998' + digitsOnly.substring(0, 9);

        setPhone(finalVal);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Must be exactly 13 chars: +998 and 9 digits
        if (phone.length !== 13) {
            alert("Iltimos, telefon raqamni to'liq kiriting (masalan: +998901234567)");
            return;
        }

        setIsSubmitting(true);

        const message = `Yangi ariza:\nIsm: ${name}\nTelefon: ${phone}`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                })
            });

            if (res.ok) {
                setIsSuccess(true);
                setName('');
                setPhone('');
                setTimeout(() => setIsSuccess(false), 3000);
            } else {
                alert("Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.");
            }
        } catch (error) {
            console.error(error);
            alert("Xatolik yuz berdi. Iltimos tarmog'ingizni tekshiring.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="clients" className={styles.clients}>
            <div className={`container`}>
                <div className={styles.header}>
                    <motion.div
                        className={styles.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {dict.clients.label}
                    </motion.div>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {dict.clients.title}
                    </motion.h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.featuresList}>
                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={textAnimations} custom={0}>
                            <div className={styles.iconWrapperBlue}><MapPin size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f1}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.1 } } }}>
                            <div className={styles.iconWrapperBlue}><Wallet size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f2}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.2 } } }}>
                            <div className={styles.iconWrapperBlue}><Zap size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f3}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.3 } } }}>
                            <div className={styles.iconWrapperBlue}><ShieldCheck size={20} className={styles.iconBlue} /></div>
                            <span>{dict.clients.f4}</span>
                        </motion.div>

                        <motion.div className={styles.featureItem} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ ...textAnimations, visible: { ...textAnimations.visible, transition: { delay: 0.4 } } }}>
                            <div className={`${styles.iconWrapperBlue} ${styles.iconWrapperGray}`}><div className={styles.plusIcon}>+</div></div>
                            <span>{dict.clients.f5}</span>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.visualRegion}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className={styles.contactFormContainer}>
                            <h3 className={styles.contactFormTitle}>Biz bilan bog'laning</h3>
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <input type="text" placeholder="Ism familiya" className={styles.contactInput} value={name} onChange={(e) => setName(e.target.value)} required />
                                <input
                                    type="tel"
                                    placeholder="+998"
                                    className={styles.contactInput}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    onFocus={handlePhoneFocus}
                                    required
                                />
                                <button type="submit" className={styles.contactSubmitBtn} disabled={isSubmitting} style={isSuccess ? { backgroundColor: '#22c55e' } : {}}>
                                    {isSubmitting ? "Yuborilmoqda..." : isSuccess ? "Yuborildi ✓" : "Yuborish"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
