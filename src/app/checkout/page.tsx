"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./checkout.module.css";
import { useCartStore } from "../../store/cartStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPaypal, FaRegCreditCard } from "react-icons/fa";

type PaymentMethod = "paypal" | "creditcard" | "klarna";
type DeliveryOption = "asap" | "schedule";

const CheckoutPage: React.FC = () => {
  const { cart, clearCart } = useCartStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // --- НОВОЕ ПОЛЕ В СОСТОЯНИИ ---
    address: "",
    zip: "",
    city: "",
  });
  const [activePaymentMethod, setActivePaymentMethod] =
    useState<PaymentMethod>("paypal");
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption>("asap");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // --- ОБНОВЛЯЕМ ВАЛИДАЦИЮ ---
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.address &&
    formData.zip &&
    formData.city;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    if (!isFormValid) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }
    console.log("Bestelldaten:", {
      ...formData,
      delivery:
        deliveryOption === "schedule" ? deliveryTime : "So schnell wie möglich",
      payment: activePaymentMethod,
      items: cart,
    });
    clearCart();
    router.push("/success");
  };

  if (!isHydrated) {
    return (
      <div className={styles.pageContainer}>
        <h1 className={styles.title}>Wird geladen...</h1>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.emptyState}>
          <h2>Ihr Warenкорб ist leer</h2>
          <p>Bitte fügen Sie Produkte hinzu, um eine Bestellung aufzugeben.</p>
          <button onClick={() => router.push("/menu")}>Zur Speisekarte</button>
        </div>
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Kasse</h1>
      </motion.div>

      <div className={styles.checkoutLayout}>
        <motion.div
          className={styles.formSection}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Ihre Daten</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="name">Vollständiger Name</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="email">E-Mail-Adresse</label>
            </div>

            {/* --- НОВОЕ ПОЛЕ ДЛЯ ТЕЛЕФОНА --- */}
            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="phone">Telefonnummer</label>
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="address">Straße und Hausnummer</label>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleInputChange}
                  placeholder=" "
                />
                <label htmlFor="zip">PLZ</label>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder=" "
                />
                <label htmlFor="city">Stadt</label>
              </div>
            </div>
          </form>

          <h2 className={styles.paymentTitle}>Lieferzeit</h2>
          <div className={styles.deliveryOptions}>
            <button
              className={`${styles.deliveryButton} ${
                deliveryOption === "asap" ? styles.active : ""
              }`}
              onClick={() => setDeliveryOption("asap")}
            >
              So schnell wie möglich
            </button>
            <button
              className={`${styles.deliveryButton} ${
                deliveryOption === "schedule" ? styles.active : ""
              }`}
              onClick={() => setDeliveryOption("schedule")}
            >
              Zeit auswählen
            </button>
          </div>
          {deliveryOption === "schedule" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className={styles.formGroup}
            >
              <input
                type="time"
                id="deliveryTime"
                name="deliveryTime"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </motion.div>
          )}

          <h2 className={styles.paymentTitle}>Zahlungsmethode</h2>
          <div className={styles.paymentOptions}>
            <button
              className={`${styles.paymentButton} ${
                activePaymentMethod === "paypal" ? styles.active : ""
              }`}
              onClick={() => setActivePaymentMethod("paypal")}
            >
              <FaPaypal /> PayPal
            </button>
            <button
              className={`${styles.paymentButton} ${
                activePaymentMethod === "creditcard" ? styles.active : ""
              }`}
              onClick={() => setActivePaymentMethod("creditcard")}
            >
              <FaRegCreditCard /> Kreditkarte
            </button>
            <button
              className={`${styles.paymentButton} ${
                styles.paymentButtonKlarna
              } ${activePaymentMethod === "klarna" ? styles.active : ""}`}
              onClick={() => setActivePaymentMethod("klarna")}
            >
              <span className={styles.klarnaStripe}>stripe</span> Klarna
            </button>
          </div>
        </motion.div>

        <motion.div
          className={styles.summarySection}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>Zusammenfassung</h2>
          <div className={styles.summaryItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.summaryItem}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <div className={styles.summaryItemDetails}>
                  <p>{item.name}</p>
                  <p>x {item.quantity}</p>
                </div>
                <span>{(item.price * item.quantity).toFixed(2)} €</span>
              </div>
            ))}
          </div>
          <div className={styles.summaryTotal}>
            <strong>Gesamt</strong>
            <strong>{totalPrice.toFixed(2)} €</strong>
          </div>
          <button
            className={styles.payButton}
            onClick={handlePayment}
            disabled={!isFormValid}
          >
            Jetzt kostenpflichtig bestellen
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
