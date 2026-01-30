const foods = [
    // Korean
    { name: "김치찌개", category: "korean", image: "images/kimchi_stew.png", desc: "얼큰하고 칼칼한 국물이 땡길 때!" },
    { name: "된장찌개", category: "korean", image: "images/doenjang.png", desc: "구수하고 속이 편안한 집밥 메뉴" },
    { name: "비빔밥", category: "korean", image: "images/bibimbap.jpg", desc: "여러 가지 나물과 함께 건강하게!" },
    { name: "삼겹살", category: "korean", image: "images/samgyeopsal.jpg", desc: "지글지글 고기 굽는 소리, 참을 수 없죠" },
    { name: "불고기", category: "korean", image: "images/bulgogi.jpg", desc: "달콤 짭짤한 밥도둑" },
    { name: "국밥", category: "korean", image: "images/gukbap.jpg", desc: "뜨끈한 국물에 밥 한 그릇 뚝딱!" },
    { name: "냉면", category: "korean", image: "images/naengmyeon.jpg", desc: "살얼음 동동 시원한 육수" },
    { name: "닭갈비", category: "korean", image: "images/dakgalbi.jpg", desc: "매콤한 양념과 부드러운 닭고기" },
    { name: "떡볶이", category: "snack", image: "images/tteokbokki.png", desc: "매콤달콤 국민 간식" },
    { name: "순대", category: "snack", image: "images/sundae.jpg", desc: "떡볶이 국물에 찍어 먹으면 최고" },
    { name: "라면", category: "snack", image: "images/ramyeun.jpg", desc: "간단하지만 가장 맛있는 한 끼" },
    { name: "김밥", category: "snack", image: "images/gimbap.jpg", desc: "한 입에 쏙 들어가는 든든함" },
    { name: "핫도그", category: "snack", image: "images/hotdog.jpg", desc: "출출할 때 딱 좋은 간식" },
    { name: "토스트", category: "snack", image: "images/toast.jpg", desc: "바삭하고 달콤한 간식 타임" },

    // Western
    { name: "피자", category: "western", image: "images/pizza.png", desc: "치즈가 쭉 늘어나는 행복" },
    { name: "파스타", category: "western", image: "images/pasta.jpg", desc: "크림, 토마토, 오일... 취향대로!" },
    { name: "햄버거", category: "western", image: "images/hamburger.jpg", desc: "한 입 가득 베어 무는 즐거움" },
    { name: "스테이크", category: "western", image: "images/steak.jpg", desc: "특별한 날엔 칼질 한번?" },
    { name: "샐러드", category: "western", image: "images/salad.jpg", desc: "가볍고 신선하게 즐기고 싶을 때" },
    { name: "샌드위치", category: "western", image: "images/sandwich.jpg", desc: "신선한 재료로 가볍고 든든하게" },
    { name: "타코", category: "western", image: "images/taco.jpg", desc: "멕시코의 맛을 한 입에!" },
    { name: "치킨", category: "western", image: "images/fried_chicken.jpg", desc: "바삭바삭한 튀김옷의 유혹" },

    // Chinese
    { name: "짜장면", category: "chinese", image: "images/jajangmyeon.png", desc: "후루룩 짭짭 맛좋은 짜장면" },
    { name: "짬뽕", category: "chinese", image: "images/jjamppong.jpg", desc: "비 오는 날 생각나는 얼큰함" },
    { name: "탕수육", category: "chinese", image: "images/tangsuyuk.jpg", desc: "찍먹? 부먹? 고민하지 말고 먹자!" },
    { name: "마라탕", category: "chinese", image: "images/malatang.jpg", desc: "중독성 강한 매운맛의 유혹" },
    { name: "볶음밥", category: "chinese", image: "images/bokkeumbap.jpg", desc: "고슬고슬하게 볶아낸 밥알" },
    { name: "마파두부", category: "chinese", image: "images/mapo_tofu.jpg", desc: "매콤하고 부드러운 두부 요리" },
    { name: "딤섬", category: "chinese", image: "images/dim_sum.jpg", desc: "육즙 가득한 만두의 향연" },

    // Japanese
    { name: "초밥", category: "japanese", image: "images/sushi.png", desc: "신선한 회와 밥의 조화" },
    { name: "돈까스", category: "japanese", image: "images/tonkatsu.jpg", desc: "바삭바삭한 튀김옷과 육즙" },
    { name: "우동", category: "japanese", image: "images/udon.jpg", desc: "따끈한 국물과 오통통한 면발" },
    { name: "라멘", category: "japanese", image: "images/ramen.jpg", desc: "진한 국물의 일본식 라면" },
    { name: "규동", category: "japanese", image: "images/gyudon.jpg", desc: "간단하고 든든한 소고기 덮밥" },
    { name: "야키소바", category: "japanese", image: "images/yakisoba.jpg", desc: "달콤 짭짤한 볶음면" },
    { name: "타코야키", category: "japanese", image: "images/takoyaki.jpg", desc: "동글동글 문어가 씹히는 맛" },
    { name: "회(사시미)", category: "japanese", image: "images/sashimi.jpg", desc: "신선한 바다의 맛 그대로" }
];

const recommendBtn = document.getElementById('recommend-btn');
const resultDisplay = document.getElementById('result-display');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentCategory = 'all';

// Category Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');

        currentCategory = btn.dataset.category;

        // Reset display
        resultDisplay.innerHTML = `
            <div class="placeholder">
                <span>🍽️</span>
                <p>메뉴 추천 받기 버튼을 눌러보세요!</p>
            </div>
        `;
    });
});

// Recommendation Logic
recommendBtn.addEventListener('click', () => {
    // 1. Filter foods
    const filteredFoods = currentCategory === 'all'
        ? foods
        : foods.filter(food => food.category === currentCategory);

    if (filteredFoods.length === 0) {
        alert("해당 카테고리에 음식이 없습니다.");
        return;
    }

    // 2. Random Selection
    const randomIndex = Math.floor(Math.random() * filteredFoods.length);
    const selectedFood = filteredFoods[randomIndex];

    // 3. Render
    renderResult(selectedFood);
});

function renderResult(food) {
    // Check if food has image
    const visualElement = food.image
        ? `<img src="${food.image}" alt="${food.name}" class="food-image">`
        : `<span class="food-emoji">${food.emoji}</span>`;

    resultDisplay.innerHTML = `
        <div class="food-result">
            ${visualElement}
            <h2 class="food-name">${food.name}</h2>
            <p class="food-desc">${food.desc}</p>
        </div>
    `;
}
