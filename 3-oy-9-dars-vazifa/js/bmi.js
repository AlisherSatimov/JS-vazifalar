function findBMI(w, h) {
    let bmi;
    if (h > 0 && w > 0) {
        bmi = w / ((h / 100) * (h / 100));
        if (bmi < 18.5) {
            return "Thin";
        } else if (18.5 <= bmi && bmi <= 24.9) {
            return "Normal";
        } else if (25 <= bmi && bmi <= 29.9) {
            return "Overweight";
        } else if (30 <= bmi && bmi <= 39.9) {
            return "Obsese";
        } else if (40 <= bmi) {
            return "Morbidly Obsese";
        }
    } else {
        return "To'g'ri bo'y va vazninggizni kiriting!";
    }
}
