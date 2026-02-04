// ====== تجميع كل الصور ======
let slides = document.querySelectorAll(".slide");

// ====== مؤشر الصورة الحالية ======
let currentIndex = 0;

// ====== دالة تغيير الصور ======
function changeSlide() {

    // إخفاء الصورة الحالية
    slides[currentIndex].classList.remove("active");

    // الانتقال للصورة اللي بعدها
    currentIndex++;

    // لو وصلنا لآخر صورة نرجع لأول واحدة
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    // إظهار الصورة الجديدة
    slides[currentIndex].classList.add("active");

    const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;

        // إزالة active من كل الأزرار والمحتوى
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        // إضافة active للزر والمحتوى المختار
        btn.classList.add("active");
        document.getElementById(tab).classList.add("active");
    });
});
}

// ====== تشغيل السلايدر كل 5 ثواني ======
setInterval(changeSlide, 5000); // 5000 ملي ثانية = 5 ثواني

////////////////////////////////////////////////




