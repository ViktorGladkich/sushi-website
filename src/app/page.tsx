import HomePageClient from "../components/HomePageClient";
import React from "react";

// Этот компонент теперь является серверным по умолчанию.
// Он просто импортирует и рендерит наш новый клиентский компонент.
export default function Home() {
  return <HomePageClient />;
}
