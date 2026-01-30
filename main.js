const foods = [
    // Korean (20 items)
    { id: 1, name: "김치찌개", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kimchi-jjigae.jpg?width=800", desc: "한국인의 소울푸드, 얼큰한 김치찌개" },
    { id: 2, name: "된장찌개", category: "korean", price: 8000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Doenjang-jjigae-1.jpg?width=800", desc: "구수한 국물과 두부의 조화" },
    { id: 3, name: "비빔밥", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korean_cuisine-Bibimbap-01.jpg?width=800", desc: "여러가지 나물과 고추장의 만남" },
    { id: 4, name: "삼겹살", category: "korean", price: 16000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Samgyeopsal_gu-i.jpg?width=800", desc: "지글지글 구워먹는 삼겹살" },
    { id: 5, name: "불고기", category: "korean", price: 12000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bulgogi-2.jpg?width=800", desc: "남녀노소 좋아하는 달콤 짭짤한 맛" },
    { id: 6, name: "국밥", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seonji-guk_2.jpg?width=800", desc: "뜨끈한 국물에 밥 한 그릇 뚝딱" },
    { id: 7, name: "냉면", category: "korean", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Naengmyeon.jpg?width=800", desc: "살얼음 동동 띄운 시원한 육수" },
    { id: 8, name: "닭갈비", category: "korean", price: 13000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dak-galbi-1.jpg?width=800", desc: "매콤한 양념에 볶아먹는 닭고기" },
    { id: 9, name: "순두부찌개", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sundubu-jjigae-2.jpg?width=800", desc: "부드러운 순두부와 얼큰한 국물" },
    { id: 10, name: "제육볶음", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeyuk-bokkeum.jpg?width=800", desc: "매콤달콤한 양념 돼지고기" },
    { id: 11, name: "감자탕", category: "korean", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gamja-tang.jpg?width=800", desc: "진한 국물과 부드러운 등뼈" },
    { id: 12, name: "부대찌개", category: "korean", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Budae-jjigae.jpg?width=800", desc: "햄과 라면의 완벽한 조화" },
    { id: 13, name: "설렁탕", category: "korean", price: 11000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seolleongtang-1.jpg?width=800", desc: "뽀얀 국물의 깊은 맛" },
    { id: 14, name: "갈비탕", category: "korean", price: 14000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Galbi-tang.jpg?width=800", desc: "큼직한 갈비가 들어간 보양식" },
    { id: 15, name: "닭볶음탕", category: "korean", price: 25000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dak-bokkeum-tang.jpg?width=800", desc: "매콤한 국물에 빠진 닭고기" },
    { id: 16, name: "보쌈", category: "korean", price: 30000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bossam-1.jpg?width=800", desc: "부드럽게 삶아낸 돼지고기" },
    { id: 17, name: "족발", category: "korean", price: 35000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jokbal.jpg?width=800", desc: "콜라겐 가득 쫄깃한 맛" },
    { id: 18, name: "낙지볶음", category: "korean", price: 12000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nakji-bokkeum.jpg?width=800", desc: "화끈하게 매운 낙지 요리" },
    { id: 19, name: "칼국수", category: "korean", price: 8000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kalguksu.jpg?width=800", desc: "뜨끈한 국물과 쫄깃한 면발" },
    { id: 20, name: "콩국수", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kong-guksu.jpg?width=800", desc: "여름 별미 고소한 콩국물" },

    // Western (12 items)
    { id: 21, name: "피자", category: "western", price: 20000, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop", desc: "치즈가 쭉 늘어나는 행복" },
    { id: 22, name: "파스타", category: "western", price: 15000, image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop", desc: "크림, 토마토, 오일 취향대로" },
    { id: 23, name: "햄버거", category: "western", price: 8000, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop", desc: "한 입 가득 베어 무는 즐거움" },
    { id: 24, name: "스테이크", category: "western", price: 35000, image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop", desc: "특별한 날을 위한 선택" },
    { id: 25, name: "샐러드", category: "western", price: 11000, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop", desc: "신선하고 가벼운 한 끼" },
    { id: 26, name: "샌드위치", category: "western", price: 7000, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&auto=format&fit=crop", desc: "신선한 재료로 꽉 채운 맛" },
    { id: 27, name: "타코", category: "western", price: 12000, image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop", desc: "다채로운 재료의 조화" },
    { id: 28, name: "치킨", category: "western", price: 22000, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop", desc: "바삭바삭한 국민 야식" },
    { id: 29, name: "리조또", category: "western", price: 16000, image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop", desc: "부드럽고 고소한 쌀 요리" },
    { id: 30, name: "브런치", category: "western", price: 15000, image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop", desc: "팬케이크와 스크램블 에그" },
    { id: 31, name: "라자냐", category: "western", price: 18000, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop", desc: "층층이 쌓인 맛의 향연" },
    { id: 32, name: "핫윙", category: "western", price: 15000, image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop", desc: "매콤한 버팔로 윙" },

    // Chinese (10 items)
    { id: 33, name: "짜장면", category: "chinese", price: 7000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jajangmyeon.jpg?width=800", desc: "언제 먹어도 맛있는 짜장면" },
    { id: 34, name: "짬뽕", category: "chinese", price: 8000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jjamppong.jpg?width=800", desc: "속 풀리는 얼큰한 국물" },
    { id: 35, name: "탕수육", category: "chinese", price: 18000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tangsuyuk-1.jpg?width=800", desc: "바삭하고 달콤한 소스" },
    { id: 36, name: "마라탕", category: "chinese", price: 12000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Malatang.jpg?width=800", desc: "얼얼하게 매운 중독적인 맛" },
    { id: 37, name: "볶음밥", category: "chinese", price: 8000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Chinese_fried_rice.jpg?width=800", desc: "고슬고슬하게 볶아낸 밥" },
    { id: 38, name: "마파두부", category: "chinese", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mapo_Doufu.jpg?width=800", desc: "부드러운 두부와 매콤한 소스" },
    { id: 39, name: "딤섬", category: "chinese", price: 15000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dim_sum_platter.jpg?width=800", desc: "육즙 가득한 만두" },
    { id: 40, name: "양꼬치", category: "chinese", price: 15000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yangrouchuar.jpg?width=800", desc: "돌아가며 굽는 재미" },
    { id: 41, name: "깐풍기", category: "chinese", price: 25000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kkanpunggi.jpg?width=800", desc: "매콤새콤한 닭튀김 요리" },
    { id: 42, name: "고추잡채", category: "chinese", price: 28000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gochu-japchae.jpg?width=800", desc: "꽃빵에 싸먹는 즐거움" },

    // Japanese (10 items)
    { id: 43, name: "초밥", category: "japanese", price: 18000, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop", desc: "신선한 회와 밥의 조화" },
    { id: 44, name: "돈까스", category: "japanese", price: 11000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tonkatsu.jpg?width=800", desc: "바삭바삭한 튀김옷과 육즙" },
    { id: 45, name: "우동", category: "japanese", price: 7000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Udon_001.jpg?width=800", desc: "오통통한 면발과 따뜻한 국물" },
    { id: 46, name: "라멘", category: "japanese", price: 10000, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop", desc: "진한 돈코츠 육수의 맛" },
    { id: 47, name: "규동", category: "japanese", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gyudon_by_ayuston_in_Tokyo.jpg?width=800", desc: "단짠단짠 소고기 덮밥" },
    { id: 48, name: "야키소바", category: "japanese", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yakisoba_001.jpg?width=800", desc: "철판에 볶아낸 면 요리" },
    { id: 49, name: "타코야키", category: "japanese", price: 5000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Takoyaki_001.jpg?width=800", desc: "동글동글 문어가 씹히는 맛" },
    { id: 50, name: "사시미", category: "japanese", price: 35000, image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?w=800&auto=format&fit=crop", desc: "본연의 맛을 즐기는 회" },
    { id: 51, name: "메밀소바", category: "japanese", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zaru_Soba.jpg?width=800", desc: "쯔유에 적셔먹는 시원한 면" },
    { id: 52, name: "오코노미야키", category: "japanese", price: 15000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Okonomiyaki_001.jpg?width=800", desc: "일본식 부침개" },

    // Snack (8 items)
    { id: 53, name: "떡볶이", category: "snack", price: 5000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tteok-bokki_2.jpg?width=800", desc: "매콤달콤한 국민 간식" },
    { id: 54, name: "순대", category: "snack", price: 5000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sundae_(Korean_food).jpg?width=800", desc: "소금이나 막장에 콕" },
    { id: 55, name: "라면", category: "snack", price: 4000, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&auto=format&fit=crop", desc: "가장 맛있는 한 끼" },
    { id: 56, name: "김밥", category: "snack", price: 4000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gimbap_1.jpg?width=800", desc: "한 줄로 든든한 식사" },
    { id: 57, name: "핫도그", category: "snack", price: 3000, image: "https://images.unsplash.com/photo-1541214159679-d457c9b889fa?w=800&auto=format&fit=crop", desc: "바삭하고 짭짤한 맛" },
    { id: 58, name: "토스트", category: "snack", price: 4000, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&auto=format&fit=crop", desc: "버터 향 가득한 토스트" },
    { id: 59, name: "어묵", category: "snack", price: 3000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korean_street_food-Eomuk_tang-kkochi-01.jpg?width=800", desc: "추운 날 생각나는 그 맛" },
    { id: 60, name: "튀김", category: "snack", price: 5000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korean_street_foods-Gimsari_and_Yachae_twigim-01.jpg?width=800", desc: "떡볶이 국물과 찰떡궁합" },

    // New Additions (25 items)
    // Korean
    { id: 61, name: "육개장", category: "korean", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yukgaejang.jpg?width=800", desc: "소고기와 대파가 듬뿍 들어간 얼큰한 국물" },
    { id: 62, name: "곰탕", category: "korean", price: 11000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gomtang.jpg?width=800", desc: "진히게 우려낸 고기 육수" },
    { id: 63, name: "김치볶음밥", category: "korean", price: 8000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kimchi_fried_rice.jpg?width=800", desc: "잘 익은 김치로 볶아낸 맛" },
    { id: 64, name: "회덮밥", category: "korean", price: 12000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korean_cuisine-Bibimbap-01.jpg?width=800", desc: "신선한 회와 야채의 만남" },
    { id: 65, name: "청국장", category: "korean", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheonggukjang.jpg?width=800", desc: "구수하고 진한 고향의 맛" },

    // Western
    { id: 66, name: "에그 베네딕트", category: "western", price: 14000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eggs_benedict_1.jpg?width=800", desc: "홀랜다이즈 소스의 부드러움" },
    { id: 67, name: "까르보나라", category: "western", price: 15000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Espaguetis_carbonara.jpg?width=800", desc: "진하고 고소한 크림 파스타" },
    { id: 68, name: "피쉬앤칩스", category: "western", price: 16000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fish_and_chips_blackpool.jpg?width=800", desc: "겉바속촉 생선 튀김" },
    { id: 69, name: "클럽 샌드위치", category: "western", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Club_sandwich.JPG?width=800", desc: "여러 층으로 쌓인 풍부한 맛" },
    { id: 70, name: "비프 부르기뇽", category: "western", price: 28000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Boeuf_bourguignon.jpg?width=800", desc: "와인에 푹 고아낸 소고기 요리" },

    // Chinese
    { id: 71, name: "꿔바로우", category: "chinese", price: 22000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/%EA%BF%B0%EB%B0%94%EB%A1%9C%EC%9A%B0.jpg?width=800", desc: "쫀득한 식감의 북경식 탕수육" },
    { id: 72, name: "양장피", category: "chinese", price: 30000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korean-style_Chinese_dish_Yangjang-pi.jpg?width=800", desc: "코 끝 찡한 해산물 볶음 요리" },
    { id: 73, name: "동파육", category: "chinese", price: 35000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dong-po_Pork_Red_Braised_Pork_Belly.jpg?width=800", desc: "입에서 살살 녹는 돼지고기 찜" },
    { id: 74, name: "유린기", category: "chinese", price: 25000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yuringi.jpg?width=800", desc: "아삭한 야채와 새콤한 간장소스" },
    { id: 75, name: "멘보샤", category: "chinese", price: 18000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Menbosya.jpg?width=800", desc: "새우살을 넣은 식빵 튀김" },

    // Japanese
    { id: 76, name: "텐동", category: "japanese", price: 13000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tendon_in_Tokyo.jpg?width=800", desc: "다양한 튀김이 올라간 덮밥" },
    { id: 77, name: "가츠동", category: "japanese", price: 10000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Katsudon_001.jpg?width=800", desc: "돈까스와 계란의 환상 조합" },
    { id: 78, name: "오므라이스", category: "japanese", price: 9000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Omuturaisu_by_is_as_in_Tokyo.jpg?width=800", desc: "부드러운 계란 이불을 덮은 볶음밥" },
    { id: 79, name: "사케동", category: "japanese", price: 15000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Salmon_donburi.jpg?width=800", desc: "입안에서 녹는 부드러운 연어" },
    { id: 80, name: "스키야키", category: "japanese", price: 22000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sukiyaki_001.jpg?width=800", desc: "간장 베이스의 일본식 소고기 전골" },

    // Snacks/Others
    { id: 81, name: "팥빙수", category: "snack", price: 12000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Korean_dessert-Patbingsu-01.jpg?width=800", desc: "시원한 얼음과 달콤한 팥" },
    { id: 82, name: "호떡", category: "snack", price: 2000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hotteok.jpg?width=800", desc: "꿀이 듬뿍 들어간 쫄깃한 간식" },
    { id: 83, name: "붕어빵", category: "snack", price: 2000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bungeoppang.jpg?width=800", desc: "찬바람 불면 생각나는 친구" },
    { id: 84, name: "베이글", category: "snack", price: 4500, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bagel-Plain-Alt.jpg?width=800", desc: "크림치즈와 찰떡궁합" },
    { id: 85, name: "탕후루", category: "snack", price: 4000, image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanghulu.jpg?width=800", desc: "바삭한 설탕 코팅 속 상큼한 과일" }
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
        ? `<img src="${food.image}" alt="${food.name}" referrerpolicy="no-referrer" class="food-image">`
        : `<span class="food-emoji">${food.emoji}</span>`;

    resultDisplay.innerHTML = `
        <div class="food-result">
            ${visualElement}
            <h2 class="food-name">${food.name}</h2>
            <p class="food-desc">${food.desc}</p>
        </div>
    `;
}
