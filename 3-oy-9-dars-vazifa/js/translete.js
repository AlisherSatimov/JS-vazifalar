let words = {
    apple: { uz: "olma", ru: "яблоко" },
    peach: { uz: "shaftoli", ru: "персик" },
    banana: { uz: "banan", ru: "банан" },
    orange: { uz: "apelsin", ru: "апельсин" },
    pear: { uz: "nok", ru: "груша" },
    watermelon: { uz: "qovun", ru: "арбуз" },
    cherry: { uz: "gilos", ru: "вишня" },
    pineapple: { uz: "ananas", ru: "ананас" },
    mango: { uz: "mango", ru: "манго" },
    strawberry: { uz: "qulupnay", ru: "клубника" },
    grapes: { uz: "uzum", ru: "виноград" },
};

function t(word, language) {
    if (words[word] && words[word][language]) {
        return words[word][language];
    } else {
        return "Tarjima topilmadi";
    }
}
