const headerMenu = document.querySelector(".header__menu");
const headerList = document.querySelector(".header__list");

const navBtn = document.querySelector(".navBar__btn");

// show mobile menu
navBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

// shadow on scroll
function scrollHeader() {
  const nav = document.querySelector(".navBar");
  const scrollY = window.pageYOffset;
  if (this.scrollY >= 80) {
    nav.classList.add("header__scroll");
  } else {
    nav.classList.remove("header__scroll");
  }
}
window.addEventListener("scroll", scrollHeader);

//====================== features section =====================
// array for features Data
const featuresData = [
  {
    id: "feature_1",
    icon: "far fa-bell",
    miniTitle: "الإشعارات",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-1.png",
    title: "الإشعارات",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-1.png",
  },
  {
    id: "feature_2",
    icon: "fas fa-mobile",
    miniTitle: "تطبيق Native",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-2.png",
    title: "تطبيق Native",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-2.png",
  },
  {
    id: "feature_3",
    icon: "fas fa-headset",
    miniTitle: "الدعم الفني الشخصي",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-3.png",
    title: "الدعم الفني الشخصي",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-3.png",
  },
  {
    id: "feature_4",
    icon: "fas fa-laptop",
    miniTitle: "إدارة موحدة للمتجر والتطبيق",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-4.png",
    title: "إدارة موحدة للمتجر والتطبيق",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-4.png",
  },
  {
    id: "feature_5",
    icon: "far fa-credit-card",
    miniTitle: "الدفع والشحن",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-5.png",
    title: "الدفع والشحن",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-5.png",
  },
  {
    id: "feature_6",
    icon: "fas fa-chart-line",
    miniTitle: "تقارير وتحاليل",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-6.png",
    title: "تقارير وتحاليل",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-6.png",
  },
  {
    id: "feature_7",
    icon: "fas fa-american-sign-language-interpreting",
    miniTitle: "لوحة التحكم",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-7.png",
    title: "لوحة التحكم",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-7.png",
  },
  {
    id: "feature_8",
    icon: "fas fa-link",
    miniTitle: "رابط النقل المباشر الي التطبيق",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-8.png",
    title: "رابط النقل المباشر الي التطبيق",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-8.png",
  },
  {
    id: "feature_9",
    icon: "fas fa-sign-in-alt",
    miniTitle: "تسجيل الدخول السريع",
    miniDetails:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    image: "./images/feature-9.png",
    title: "تسجيل الدخول السريع",
    details:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    featureImage: "./images/feature-img-9.png",
  },
  {
    id: "feature_10",
    icon: "fas fa-qrcode",
    miniTitle: "رمز QR",
    miniDetails:
      "ضاعف معدل زياده عملاء كل متجرك وفرصه اكمالهم عملياتهم الشرائيه من خلال ارسال تنبيهات ترويجيه لا محدوده",
    image: "./images/feature-10.png",
    title: "رمز QR",
    details:
      "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة،",
    featureImage: "./images/feature-img-10.png",
  },
];
// mapping throw all featuresItems
document.getElementById("featuresContainer").innerHTML = featuresData
  .map((feature) => {
    return `
  <div class="featureItem">
      <div class="featureIcon">
          <i class="${feature.icon}"></i>
      </div>
      <div class="featureInfo">
          <h3>${feature.miniTitle}</h3>
          <p>${feature.miniDetails}</p>
      </div>
      <button data-popup-targt='#${feature.id}'>
              استكشف المزيد 
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="9" viewBox="0 0 38 9" fill="none">
                  <path d="M37.91 4.87988H2" stroke-miterlimit="10"/>
                  <path d="M5.31995 0.790039L5.99994 1.53003L2.38995 4.88L5.99994 8.23999L5.31995 8.96997L0.919922 4.88L5.31995 0.790039Z"/>
              </svg>
      </button>
  </div>
  `;
  })
  .join("");
// mapping throw all popups
document.getElementById("popupContainer").innerHTML = featuresData
  .map((feature) => {
    return `
      <div class="popup" id="${feature.id}">
          <div class="popupContent">
              <div class="popupInfo">
                  <img src="${feature.image}" alt="">
                  <h3>${feature.title}</h3>
                  <p>${feature.details}</p>
              </div>
              <div class="popupImage">
                  <img src="${feature.featureImage}" alt="">
              </div>
          </div>
          <button data-close-btn class="closeBtn">
              <img src="./assets/images/close-btn.png" alt="">
          </button>
      </div>
  `;
  })
  .join("");
// LoadMore Section
const loadeMoer = document.querySelector("#load");
let current = 4;
loadeMoer.addEventListener("click", () => {
  let features = [
    ...document.querySelectorAll(".featuresContainer .featureItem"),
  ];
  for (let i = current; i < current + 2; i++) {
    features[i].style.display = "block";
    features[i].classList.add("scale-up-hor-center");
  }
  current += 2;
  if (current >= features.length) {
    loadeMoer.style.display = "none";
  }
});
// ======================== show Overlay and Popup =====================
const openpopup = document.querySelectorAll("[data-popup-targt]");
const closepopup = document.querySelectorAll("[data-close-btn]");
const overlay = document.getElementById("overlay");
openpopup.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popup = document.querySelector(btn.dataset.popupTargt);
    openPopup(popup);
  });
});
closepopup.forEach((btn) => {
  btn.addEventListener("click", () => {
    const popup = btn.closest(".popup");
    closePopup(popup);
  });
});
function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}
function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}
overlay.addEventListener("click", () => {
  const popup = document.querySelector(".popup.active");
  closePopup(popup);
});

// ==================== section famous quasrtion =========================
const quasrtions = document.querySelectorAll(".famousQus__qus");
quasrtions.forEach((quasrtion) => {
  quasrtion.addEventListener("click", () => {
    const currentQuestion = document.querySelector(".famousQus__qus.active");
    if (currentQuestion && currentQuestion !== quasrtion) {
      currentQuestion.classList.toggle("active");
      currentQuestion.nextElementSibling.getElementsByClassName.maxHeight = 0;
    }
    quasrtion.classList.toggle("active");
    const answer = quasrtion.nextElementSibling;
    if (quasrtion.classList.contains("active")) {
      answer.getElementsByClassName.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.getElementsByClassName.maxHeight = 0;
    }
  });
});
