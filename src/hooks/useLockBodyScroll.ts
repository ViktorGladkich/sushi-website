"use client";
import { useEffect } from "react";

function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) {
      return;
    }

    const htmlElement = document.documentElement; // Получаем элемент <html>

    // Сохраняем изначальное значение
    const originalStyle = htmlElement.style.overflow;

    // Применяем стиль блокировки к <html>
    htmlElement.style.overflow = "hidden";

    // Возвращаем изначальный стиль, когда isLocked станет false или компонент исчезнет
    return () => {
      htmlElement.style.overflow = originalStyle;
    };
  }, [isLocked]);
}

export default useLockBodyScroll;
