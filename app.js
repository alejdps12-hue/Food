// --- 1. DATA ---
const foods = [
    // Korean (20 items)
    { id: 1, name: "김치찌개", category: "korean", spicy: 2, price: 9000, tags: ["국물", "혼밥", "점심"], desc: "한국인의 소울푸드, 얼큰한 김치찌개", image: "images/kimchi_stew.png" },
    { id: 2, name: "된장찌개", category: "korean", spicy: 0, price: 8000, tags: ["국물", "집밥", "속편함"], desc: "구수한 국물과 두부의 조화", image: "images/doenjang.png" },
    { id: 3, name: "비빔밥", category: "korean", spicy: 1, price: 9000, tags: ["건강", "야채", "든든"], desc: "여러가지 나물과 고추장의 만남", image: "images/bibimbap.jpg" },
    { id: 4, name: "삼겹살", category: "korean", spicy: 0, price: 16000, tags: ["회식", "고기", "술안주"], desc: "지글지글 구워먹는 삼겹살", image: "images/samgyeopsal.jpg" },
    { id: 5, name: "불고기", category: "korean", spicy: 0, price: 12000, tags: ["고기", "달달", "밥도둑"], desc: "남녀노소 좋아하는 달콤 짭짤한 맛", image: "images/bulgogi.jpg" },
    { id: 6, name: "국밥", category: "korean", spicy: 0, price: 9000, tags: ["국물", "든든", "해장"], desc: "뜨끈한 국물에 밥 한 그릇 뚝딱", image: "images/gukbap.jpg" },
    { id: 7, name: "냉면", category: "korean", spicy: 1, price: 10000, tags: ["시원", "면", "여름"], desc: "살얼음 동동 띄운 시원한 육수", image: "images/naengmyeon.jpg" },
    { id: 8, name: "닭갈비", category: "korean", spicy: 2, price: 13000, tags: ["매콤", "고기", "볶음밥"], desc: "매콤한 양념에 볶아먹는 닭고기", image: "images/dakgalbi.jpg" },
    { id: 9, name: "순두부찌개", category: "korean", spicy: 2, price: 9000, tags: ["국물", "부드러움", "얼큰"], desc: "부드러운 순두부와 얼큰한 국물", image: "images/sundubu.jpg" },
    { id: 10, name: "제육볶음", category: "korean", spicy: 2, price: 9000, tags: ["고기", "매콤", "점심"], desc: "매콤달콤한 양념 돼지고기", image: "images/bulgogi.jpg" }, // Use Bulgogi (closest) or Jeyuk if avail
    { id: 11, name: "감자탕", category: "korean", spicy: 2, price: 10000, tags: ["국물", "해장", "고기"], desc: "진한 국물과 부드러운 등뼈", image: "images/gamjatang.jpg" },
    { id: 12, name: "부대찌개", category: "korean", spicy: 2, price: 10000, tags: ["국물", "라면사리", "햄"], desc: "햄과 라면의 완벽한 조화", image: "images/budaejjigae.jpg" },
    { id: 13, name: "설렁탕", category: "korean", spicy: 0, price: 11000, tags: ["국물", "보양", "담백"], desc: "뽀얀 국물의 깊은 맛", image: "images/seolleongtang.jpg" },
    { id: 14, name: "갈비탕", category: "korean", spicy: 0, price: 14000, tags: ["국물", "고기", "든든"], desc: "큼직한 갈비가 들어간 보양식", image: "images/galbitang.jpg" },
    { id: 15, name: "닭볶음탕", category: "korean", spicy: 3, price: 25000, tags: ["매콤", "술안주", "고기"], desc: "매콤한 국물에 빠진 닭고기", image: "images/dakbokkeumtang.jpg" },
    { id: 16, name: "보쌈", category: "korean", spicy: 0, price: 30000, tags: ["고기", "담백", "쌈"], desc: "부드럽게 삶아낸 돼지고기", image: "images/bossam.jpg" },
    { id: 17, name: "족발", category: "korean", spicy: 0, price: 35000, tags: ["고기", "쫄깃", "야식"], desc: "콜라겐 가득 쫄깃한 맛", image: "images/jokbal.jpg" },
    { id: 18, name: "낙지볶음", category: "korean", spicy: 3, price: 12000, tags: ["매콤", "해물", "입맛"], desc: "화끈하게 매운 낙지 요리", image: "images/nakjibokkeum.jpg" },
    { id: 19, name: "칼국수", category: "korean", spicy: 0, price: 8000, tags: ["면", "따뜻", "비오는날"], desc: "뜨끈한 국물과 쫄깃한 면발", image: "images/kalguksu.jpg" },
    { id: 20, name: "콩국수", category: "korean", spicy: 0, price: 9000, tags: ["면", "시원", "고소"], desc: "여름 별미 고소한 콩국물", image: "images/kongguksu.jpg" },

    // Western (12 items)
    { id: 21, name: "피자", category: "western", spicy: 0, price: 20000, tags: ["파티", "치즈", "배달"], desc: "치즈가 쭉 늘어나는 행복", image: "images/pizza.png" },
    { id: 22, name: "파스타", category: "western", spicy: 0, price: 15000, tags: ["면", "데이트", "분위기"], desc: "크림, 토마토, 오일 취향대로", image: "images/pasta.jpg" },
    { id: 23, name: "햄버거", category: "western", spicy: 0, price: 8000, tags: ["패스트푸드", "간편", "고기"], desc: "한 입 가득 베어 무는 즐거움", image: "images/hamburger.jpg" },
    { id: 24, name: "스테이크", category: "western", spicy: 0, price: 35000, tags: ["고기", "기념일", "칼질"], desc: "특별한 날을 위한 선택", image: "images/steak.jpg" },
    { id: 25, name: "샐러드", category: "western", spicy: 0, price: 11000, tags: ["다이어트", "건강", "가볍게"], desc: "신선하고 가벼운 한 끼", image: "images/salad.jpg" },
    { id: 26, name: "샌드위치", category: "western", spicy: 0, price: 7000, tags: ["간편", "아침", "빵"], desc: "신선한 재료로 꽉 채운 맛", image: "images/sandwich.jpg" },
    { id: 27, name: "타코", category: "western", spicy: 1, price: 12000, tags: ["이색", "멕시코", "스낵"], desc: "다채로운 재료의 조화", image: "images/taco.jpg" },
    { id: 28, name: "치킨", category: "western", spicy: 1, price: 22000, tags: ["야식", "튀김", "파티"], desc: "바삭바삭한 국민 야식", image: "images/fried_chicken.jpg" },
    { id: 29, name: "리조또", category: "western", spicy: 0, price: 16000, tags: ["밥", "크림", "부드러움"], desc: "부드럽고 고소한 쌀 요리", image: "images/risotto.jpg" },
    { id: 30, name: "브런치", category: "western", spicy: 0, price: 15000, tags: ["아침", "빵", "여유"], desc: "팬케이크와 스크램블 에그", image: "images/brunch.jpg" },
    { id: 31, name: "라자냐", category: "western", spicy: 0, price: 18000, tags: ["치즈", "오븐", "면"], desc: "층층이 쌓인 맛의 향연", image: "images/lasagna.jpg" },
    { id: 32, name: "핫윙", category: "western", spicy: 2, price: 15000, tags: ["매콤", "맥주", "안주"], desc: "매콤한 버팔로 윙", image: "images/hotwings.jpg" },

    // Chinese (10 items)
    { id: 33, name: "짜장면", category: "chinese", spicy: 0, price: 7000, tags: ["면", "국민음식", "단짠"], desc: "언제 먹어도 맛있는 짜장면", image: "images/jajangmyeon.png" },
    { id: 34, name: "짬뽕", category: "chinese", spicy: 3, price: 8000, tags: ["면", "얼큰", "해물"], desc: "속 풀리는 얼큰한 국물", image: "images/jjamppong.jpg" },
    { id: 35, name: "탕수육", category: "chinese", spicy: 0, price: 18000, tags: ["튀김", "고기", "달콤"], desc: "바삭하고 달콤한 소스", image: "images/tangsuyuk.jpg" },
    { id: 36, name: "마라탕", category: "chinese", spicy: 3, price: 12000, tags: ["매콤", "중독성", "국물"], desc: "얼얼하게 매운 중독적인 맛", image: "images/malatang.jpg" },
    { id: 37, name: "볶음밥", category: "chinese", spicy: 0, price: 8000, tags: ["밥", "고소", "기름"], desc: "고슬고슬하게 볶아낸 밥", image: "images/bokkeumbap.jpg" },
    { id: 38, name: "마파두부", category: "chinese", spicy: 2, price: 10000, tags: ["두부", "매콤", "덮밥"], desc: "부드러운 두부와 매콤한 소스", image: "images/mapo_tofu.jpg" },
    { id: 39, name: "딤섬", category: "chinese", spicy: 0, price: 15000, tags: ["만두", "촉촉", "별미"], desc: "육즙 가득한 만두", image: "images/dim_sum.jpg" },
    { id: 40, name: "양꼬치", category: "chinese", spicy: 1, price: 15000, tags: ["술안주", "고기", "구이"], desc: "돌아가며 굽는 재미", image: "images/yangkkochi.jpg" },
    { id: 41, name: "깐풍기", category: "chinese", spicy: 2, price: 25000, tags: ["튀김", "매콤", "닭고기"], desc: "매콤새콤한 닭튀김 요리", image: "images/kkanpunggi.jpg" },
    { id: 42, name: "고추잡채", category: "chinese", spicy: 1, price: 28000, tags: ["야채", "꽃빵", "별미"], desc: "꽃빵에 싸먹는 즐거움", image: "images/gochujapchae.jpg" },

    // Japanese (10 items)
    { id: 43, name: "초밥", category: "japanese", spicy: 0, price: 18000, tags: ["해산물", "깔끔", "신선"], desc: "신선한 회와 밥의 조화", image: "images/sushi.png" },
    { id: 44, name: "돈까스", category: "japanese", spicy: 0, price: 11000, tags: ["튀김", "고기", "바삭"], desc: "바삭바삭한 튀김옷과 육즙", image: "images/tonkatsu.jpg" },
    { id: 45, name: "우동", category: "japanese", spicy: 0, price: 7000, tags: ["면", "따뜻", "국물"], desc: "오통통한 면발과 따뜻한 국물", image: "images/udon.jpg" },
    { id: 46, name: "라멘", category: "japanese", spicy: 1, price: 10000, tags: ["면", "국물", "진함"], desc: "진한 돈코츠 육수의 맛", image: "images/ramen.jpg" },
    { id: 47, name: "규동", category: "japanese", spicy: 0, price: 9000, tags: ["덮밥", "고기", "간편"], desc: "단짠단짠 소고기 덮밥", image: "images/gyudon.jpg" },
    { id: 48, name: "야키소바", category: "japanese", spicy: 0, price: 10000, tags: ["면", "볶음", "짭짤"], desc: "철판에 볶아낸 면 요리", image: "images/yakisoba.jpg" },
    { id: 49, name: "타코야키", category: "japanese", spicy: 0, price: 5000, tags: ["간식", "문어", "길거리"], desc: "동글동글 문어가 씹히는 맛", image: "images/takoyaki.jpg" },
    { id: 50, name: "사시미", category: "japanese", spicy: 0, price: 35000, tags: ["회", "술안주", "고급"], desc: "본연의 맛을 즐기는 회", image: "images/sashimi.jpg" },
    { id: 51, name: "메밀소바", category: "japanese", spicy: 0, price: 9000, tags: ["면", "시원", "여름"], desc: "쯔유에 적셔먹는 시원한 면", image: "images/memilsoba.jpg" },
    { id: 52, name: "오코노미야키", category: "japanese", spicy: 0, price: 15000, tags: ["철판", "양배추", "푸짐"], desc: "일본식 부침개", image: "images/okonomiyaki.jpg" },

    // Snack (8 items)
    { id: 53, name: "떡볶이", category: "snack", spicy: 2, price: 5000, tags: ["분식", "매콤", "국민간식"], desc: "매콤달콤한 국민 간식", image: "images/tteokbokki.png" },
    { id: 54, name: "순대", category: "snack", spicy: 0, price: 5000, tags: ["분식", "쫄깃", "내장"], desc: "소금이나 막장에 콕", image: "images/sundae.jpg" },
    { id: 55, name: "라면", category: "snack", spicy: 2, price: 4000, tags: ["면", "간편", "얼큰"], desc: "가장 맛있는 한 끼", image: "images/ramyeun.jpg" },
    { id: 56, name: "김밥", category: "snack", spicy: 0, price: 4000, tags: ["밥", "간편", "소풍"], desc: "한 줄로 든든한 식사", image: "images/gimbap.jpg" },
    { id: 57, name: "핫도그", category: "snack", spicy: 0, price: 3000, tags: ["간식", "튀김", "햄"], desc: "바삭하고 짭짤한 맛", image: "images/hotdog.jpg" },
    { id: 58, name: "토스트", category: "snack", spicy: 0, price: 4000, tags: ["빵", "아침", "달콤"], desc: "버터 향 가득한 토스트", image: "images/toast.jpg" },
    { id: 59, name: "어묵", category: "snack", spicy: 0, price: 3000, tags: ["국물", "따뜻", "겨울"], desc: "추운 날 생각나는 그 맛", image: "images/eomuk.jpg" },
    { id: 60, name: "튀김", category: "snack", spicy: 0, price: 5000, tags: ["바삭", "분식", "기름"], desc: "떡볶이 국물과 찰떡궁합", image: "images/twigim.jpg" }
];


// --- 2. STATE ---
const store = {
    filter: {
        category: 'all',
        spicy: 3,
        price: 30000
    },
    result: null
};


// --- 3. COMPONENTS ---

// [Hero Component]
function renderHero(element) {
    element.innerHTML = `
        <div class="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan opacity-10 blur-[100px] rounded-full animate-bounce-slow"></div>
            <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple opacity-10 blur-[100px] rounded-full animate-bounce-slow delay-200"></div>

            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                <span class="block text-white mb-2">오늘 뭐 먹지?</span>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple neon-text">
                    3초면 끝.
                </span>
            </h1>
            
            <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                매운 정도, 예산, 카테고리만 고르면<br class="hidden md:block" />
                결정장애를 위한 최고의 메뉴를 뽑아드려요.
            </p>

            <div class="w-full max-w-3xl glass rounded-3xl p-6 md:p-8 neon-shadow mb-10 z-10">
                <div class="mb-8">
                    <label class="block text-left text-sm text-gray-400 mb-3">카테고리</label>
                    <div class="flex flex-wrap gap-2 justify-center" id="category-filters">
                        ${['all', 'korean', 'western', 'chinese', 'japanese', 'snack'].map(cat => `
                            <button data-cat="${cat}" class="filter-chip px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition ${store.filter.category === cat ? 'bg-neon-cyan bg-opacity-20 border-neon-cyan text-neon-cyan' : ''}">
                                ${getCategoryName(cat)}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <label class="text-sm text-gray-400">매운 정도</label>
                            <span id="spicy-label" class="text-neon-pink font-bold">🌶️ 상관없음</span>
                        </div>
                        <input type="range" min="0" max="3" value="3" id="spicy-range" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-neon-pink">
                        <div class="flex justify-between text-xs text-gray-500 mt-2">
                            <span>안매움</span>
                            <span>약간</span>
                            <span>매콤</span>
                            <span>상관없음</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between items-center mb-3">
                            <label class="text-sm text-gray-400">예산 (1인)</label>
                            <span id="price-label" class="text-neon-cyan font-bold">3만원 이하</span>
                        </div>
                        <div class="flex gap-2">
                            <button data-price="10000" class="price-btn flex-1 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm">만원 이하</button>
                            <button data-price="20000" class="price-btn flex-1 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm">2만원</button>
                            <button data-price="30000" class="price-btn flex-1 py-2 rounded-lg bg-neon-cyan bg-opacity-20 text-neon-cyan border border-neon-cyan text-sm">3만원+</button>
                        </div>
                    </div>
                </div>

                <button id="pick-btn" class="w-full py-4 text-xl font-bold rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                    <span class="relative z-10 flex items-center justify-center gap-2">
                        🎰 지금 뽑기
                    </span>
                    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
            </div>
        </div>
    `;

    setupHeroEvents(element);
}

function getCategoryName(cat) {
    const names = { all: '전체', korean: '한식', western: '양식', chinese: '중식', japanese: '일식', snack: '분식/기타' };
    return names[cat];
}

function setupHeroEvents(element) {
    element.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            store.filter.category = e.target.dataset.cat;
            renderHero(element);
        });
    });

    const spicyRange = element.querySelector('#spicy-range');
    const spicyLabel = element.querySelector('#spicy-label');
    spicyRange.value = store.filter.spicy;
    const labels = ['👶 순한맛', '🌶️ 약간 매움', '🔥🔥 매운맛', '🌶️ 상관없음'];
    spicyLabel.textContent = labels[store.filter.spicy];

    spicyRange.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        store.filter.spicy = val;
        spicyLabel.textContent = labels[val];
    });

    element.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            store.filter.price = parseInt(e.target.dataset.price);
            renderHero(element);
        });
    });

    element.querySelector('#pick-btn').addEventListener('click', () => {
        const solutionSection = document.getElementById('solution-section');
        solutionSection.scrollIntoView({ behavior: 'smooth' });
        renderSolution(solutionSection, true);
    });
}

// [Problem Component]
function renderProblem(element) {
    const cards = [
        { title: "매일 메뉴 고민 30분", desc: "소중한 점심시간, 고민하다가 다 지나가요.", icon: "⏰" },
        { title: "맨날 먹던 것만...", desc: "새로운 걸 먹고 싶은데 결국 김치찌개...", icon: "🔄" },
        { title: "조건 맞우기 너무 힘들죠", desc: "친구는 다이어트, 나는 매운거... 언제 정해?", icon: "🤯" }
    ];

    element.innerHTML = `
        <div class="py-20 px-4 bg-dark-card">
            <div class="max-w-7xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-16 text-gray-300">
                    왜 항상 메뉴 정하기는 힘들까요?
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${cards.map((card, i) => `
                        <div class="animate-on-scroll glass p-8 rounded-2xl border-t border-gray-700 hover:-translate-y-2 transition duration-300 delay-${(i + 1) * 100}">
                            <div class="text-5xl mb-6">${card.icon}</div>
                            <h3 class="text-xl font-bold text-neon-purple mb-3">${card.title}</h3>
                            <p class="text-gray-400 leading-relaxed">${card.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// [Solution Component]
function renderSolution(element, triggerAnimation = false) {
    if (!triggerAnimation && !store.result) {
        element.innerHTML = `<div class="min-h-[50vh] bg-dark-bg"></div>`;
        return;
    }

    element.innerHTML = `
        <div class="py-20 px-4 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            <div id="roulette-container" class="relative z-10 text-center">
                <div class="text-neon-cyan text-xl font-bold mb-8 animate-pulse">
                    최고의 메뉴를찾는 중...
                </div>
                <div class="w-80 h-96 bg-gray-900 rounded-3xl border-4 border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.4)] relative overflow-hidden flex flex-col items-center justify-center p-6">
                    <div id="slot-viewport" class="text-center">
                        <span class="text-6xl mb-4 block filter grayscale" id="slot-icon">❔</span>
                        <h3 class="text-2xl font-bold text-white" id="slot-text">두근두근</h3>
                    </div>
                </div>
            </div>
            <div id="result-card" class="hidden relative z-20 w-full max-w-md"></div>
        </div>
    `;

    if (triggerAnimation) {
        runRoulette(element);
    }
}

function runRoulette(element) {
    const candidates = foods.filter(f => {
        const catMatch = store.filter.category === 'all' || f.category === store.filter.category;
        const spicyMatch = store.filter.spicy === 3 || f.spicy === store.filter.spicy;
        const priceMatch = f.price <= store.filter.price;
        return catMatch && spicyMatch && priceMatch;
    });

    if (candidates.length === 0) {
        alert("조건에 맞는 음식이 없습니다! ㅠㅠ 필터를 조금 넓혀보세요.");
        return;
    }

    const slotText = element.querySelector('#slot-text');
    const slotIcon = element.querySelector('#slot-icon');
    const container = element.querySelector('#roulette-container');
    const resultCard = element.querySelector('#result-card');

    let iterations = 0;
    const maxIterations = 20;
    const interval = setInterval(() => {
        const temp = candidates[Math.floor(Math.random() * candidates.length)];
        slotText.textContent = temp.name;
        slotIcon.textContent = getCategoryEmoji(temp.category);
        iterations++;
        if (iterations >= maxIterations) {
            clearInterval(interval);
            const finalPick = candidates[Math.floor(Math.random() * candidates.length)];
            store.result = finalPick;
            showResult(container, resultCard, finalPick);
        }
    }, 80);
}

function getCategoryEmoji(cat) {
    const map = { korean: '🥘', western: '🍕', chinese: '🍜', japanese: '🍣', snack: '🌭' };
    return map[cat] || '🍽️';
}

function showResult(container, cardContainer, food) {
    container.style.display = 'none';
    cardContainer.classList.remove('hidden');
    cardContainer.classList.add('fade-in');

    cardContainer.innerHTML = `
        <div class="glass rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
            <div class="relative h-64 overflow-hidden">
                <img src="${food.image}" alt="${food.name}" class="w-full h-full object-cover hover:scale-110 transition duration-700">
                <div class="absolute top-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-full text-xs font-bold text-neon-cyan backdrop-blur-sm">
                    ${food.price.toLocaleString()}원~
                </div>
            </div>
            <div class="p-8 text-center">
                <div class="flex justify-center gap-2 mb-4">
                    ${food.tags.map(t => `<span class="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md">#${t}</span>`).join('')}
                </div>
                <h2 class="text-4xl font-extrabold text-white mb-2 neon-text">${food.name}</h2>
                <p class="text-gray-400 mb-6">${food.desc}</p>
                <div class="grid grid-cols-2 gap-4">
                    <button id="retry-btn" class="py-3 rounded-xl border border-gray-600 hover:border-white transition text-gray-300">
                        🔄 다시 뽑기
                    </button>
                    <button class="py-3 rounded-xl bg-neon-purple hover:bg-purple-600 text-white font-bold shadow-lg shadow-purple-900/50">
                        📍 지도 보기
                    </button>
                </div>
            </div>
        </div>
    `;

    cardContainer.querySelector('#retry-btn').addEventListener('click', () => {
        cardContainer.classList.add('hidden');
        container.style.display = 'block';
        renderSolution(document.getElementById('solution-section'), true);
    });
}

// [CTA Component]
function renderCTA(element) {
    element.innerHTML = `
        <div class="py-20 px-4">
            <div class="max-w-4xl mx-auto glass rounded-3xl p-10 text-center neon-shadow relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-10"></div>
                <h2 class="text-3xl font-bold mb-4 relative z-10">내 취향 저장하고<br/>내일도 고민 없이 뽑으세요!</h2>
                <p class="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                    현재 설정한 스파이시 레벨과 예산을 브라우저에 저장합니다.<br/>
                    (로그인 없이, 기기에 바로 저장돼요)
                </p>
                <button id="save-btn" class="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition relative z-10">
                    💾 취향 저장하기
                </button>
            </div>
        </div>
    `;

    element.querySelector('#save-btn').addEventListener('click', () => {
        localStorage.setItem('foodPickPreferences', JSON.stringify(store.filter));
        alert('취향이 저장되었습니다! 💾\n다음에 오면 이 설정으로 기억할게요.');
    });
}


// --- 4. INIT ---
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    app.innerHTML = `
        <header class="sticky top-0 z-50 glass border-b border-gray-800">
            <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 class="text-xl font-bold text-neon-cyan neon-text">FoodPick</h1>
                <button id="header-cta" class="text-sm bg-neon-purple px-4 py-1.5 rounded-full hover:bg-purple-500 transition">취향 저장</button>
            </div>
        </header>

        <main>
            <section id="hero-section"></section>
            <section id="problem-section"></section>
            <section id="solution-section"></section>
            <section id="cta-section"></section>
        </main>

        <footer class="py-10 text-center text-gray-500 text-sm border-t border-gray-800 mt-20">
            <p>&copy; 2026 FoodPick. 결정장애 해결사.</p>
        </footer>
    `;

    renderHero(document.getElementById('hero-section'));
    renderProblem(document.getElementById('problem-section'));
    renderSolution(document.getElementById('solution-section'));
    renderCTA(document.getElementById('cta-section'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Load local storage
    const saved = localStorage.getItem('foodPickPreferences');
    if (saved) {
        store.filter = JSON.parse(saved);
        renderHero(document.getElementById('hero-section'));
    }
});
