import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "titleRadar": "Comparison of Egg and Milk Prices Across Provinces",
            "titleBar": "Food Prices in Ontario",
            "viewPricesIn": "View prices in:",
            "eggs": "Eggs (12-pack)",
            "milk": "Milk (1L)",
            "bread": "Bread (1 loaf)",
            "chicken": "Chicken (1kg)",
            "apples": "Apples (1kg)",
            "cheese": "Cheese (500g)",
            "dashboardIntro": "This is a simple food dashboard website. It includes a currency chart and a radar chart for food prices. The data used to create this website is synthetic and does not represent real-world data.",
        }
    },
    fr: {
        translation: {
            "titleRadar": "Comparaison des prix des œufs et du lait selon les provinces",
            "titleBar": "Prix des aliments en Ontario",
            "viewPricesIn": "Voir les prix en :",
            "eggs": "Œufs (paquet de 12)",
            "milk": "Lait (1L)",
            "bread": "Pain (1 miche)",
            "chicken": "Poulet (1kg)",
            "apples": "Pommes (1kg)",
            "cheese": "Fromage (500g)",
            "dashboardIntro": "Ceci est un site Web simple pour les tableaux de bord alimentaires. Il comprend un graphique de conversion de devises et un graphique radar pour les prix des aliments. Les données utilisées pour créer ce site Web sont synthétiques et ne représentent pas des données réelles.",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;