// --- 1. DATA ---
const foods = [
    // Korean (20 items)
    { id: 1, name: "김치찌개", category: "korean", spicy: 2, price: 9000, tags: ["국물", "혼밥", "점심"], desc: "한국인의 소울푸드, 얼큰한 김치찌개", image: "images/kimchi_stew.png", kcal: 450, carbo: 35, protein: 25, fat: 20 },
    { id: 2, name: "된장찌개", category: "korean", spicy: 0, price: 8000, tags: ["국물", "집밥", "속편함"], desc: "구수한 국물과 두부의 조화", image: "images/doenjang.png", kcal: 400, carbo: 30, protein: 20, fat: 15 },
    { id: 3, name: "비빔밥", category: "korean", spicy: 1, price: 9000, tags: ["건강", "야채", "든든"], desc: "여러가지 나물과 고추장의 만남", image: "images/bibimbap.jpg", kcal: 550, carbo: 80, protein: 15, fat: 10 },
    { id: 4, name: "삼겹살", category: "korean", spicy: 0, price: 16000, tags: ["회식", "고기", "술안주"], desc: "지글지글 구워먹는 삼겹살", image: "images/samgyeopsal.jpg", kcal: 800, carbo: 10, protein: 40, fat: 60 },
    { id: 5, name: "불고기", category: "korean", spicy: 0, price: 12000, tags: ["고기", "달달", "밥도둑"], desc: "남녀노소 좋아하는 달콤 짭짤한 맛", image: "images/bulgogi.jpg", kcal: 600, carbo: 20, protein: 45, fat: 35 },
    { id: 6, name: "국밥", category: "korean", spicy: 0, price: 9000, tags: ["국물", "든든", "해장"], desc: "뜨끈한 국물에 밥 한 그릇 뚝딱", image: "images/gukbap.jpg", kcal: 700, carbo: 80, protein: 35, fat: 25 },
    { id: 7, name: "냉면", category: "korean", spicy: 1, price: 10000, tags: ["시원", "면", "여름"], desc: "살얼음 동동 띄운 시원한 육수", image: "images/naengmyeon.jpg", kcal: 500, carbo: 90, protein: 15, fat: 5 },
    { id: 8, name: "닭갈비", category: "korean", spicy: 2, price: 13000, tags: ["매콤", "고기", "볶음밥"], desc: "매콤한 양념에 볶아먹는 닭고기", image: "images/dakgalbi.jpg", kcal: 700, carbo: 50, protein: 40, fat: 30 },
    { id: 9, name: "순두부찌개", category: "korean", spicy: 2, price: 9000, tags: ["국물", "부드러움", "얼큰"], desc: "부드러운 순두부와 얼큰한 국물", image: "images/sundubu.jpg", kcal: 450, carbo: 30, protein: 25, fat: 20 },
    { id: 10, name: "제육볶음", category: "korean", spicy: 2, price: 9000, tags: ["고기", "매콤", "점심"], desc: "매콤달콤한 양념 돼지고기", image: "images/jeyuk.jpg", kcal: 700, carbo: 40, protein: 45, fat: 35 },
    { id: 11, name: "감자탕", category: "korean", spicy: 2, price: 10000, tags: ["국물", "해장", "고기"], desc: "진한 국물과 부드러운 등뼈", image: "images/gamjatang.jpg", kcal: 850, carbo: 40, protein: 50, fat: 45 },
    { id: 12, name: "부대찌개", category: "korean", spicy: 2, price: 10000, tags: ["국물", "라면사리", "햄"], desc: "햄과 라면의 완벽한 조화", image: "images/budaejjigae.jpg", kcal: 800, carbo: 60, protein: 30, fat: 45 },
    { id: 13, name: "설렁탕", category: "korean", spicy: 0, price: 11000, tags: ["국물", "보양", "담백"], desc: "뽀얀 국물의 깊은 맛", image: "images/seolleongtang.jpg", kcal: 550, carbo: 30, protein: 40, fat: 20 },
    { id: 14, name: "갈비탕", category: "korean", spicy: 0, price: 14000, tags: ["국물", "고기", "든든"], desc: "큼직한 갈비가 들어간 보양식", image: "images/galbitang.png", kcal: 650, carbo: 30, protein: 45, fat: 35 },
    { id: 15, name: "닭볶음탕", category: "korean", spicy: 3, price: 25000, tags: ["매콤", "술안주", "고기"], desc: "매콤한 국물에 빠진 닭고기", image: "images/dakbokkeumtang.jpg", kcal: 900, carbo: 45, protein: 50, fat: 40 },
    { id: 16, name: "보쌈", category: "korean", spicy: 0, price: 30000, tags: ["고기", "담백", "쌈"], desc: "부드럽게 삶아낸 돼지고기", image: "images/bossam.jpg", kcal: 800, carbo: 20, protein: 60, fat: 50 },
    { id: 17, name: "족발", category: "korean", spicy: 0, price: 35000, tags: ["고기", "쫄깃", "야식"], desc: "콜라겐 가득 쫄깃한 맛", image: "images/jokbal.jpg", kcal: 900, carbo: 30, protein: 60, fat: 55 },
    { id: 18, name: "낙지볶음", category: "korean", spicy: 3, price: 12000, tags: ["매콤", "해물", "입맛"], desc: "화끈하게 매운 낙지 요리", image: "images/nakjibokkeum.jpg", kcal: 500, carbo: 45, protein: 30, fat: 15 },
    { id: 19, name: "칼국수", category: "korean", spicy: 0, price: 8000, tags: ["면", "따뜻", "비오는날"], desc: "뜨끈한 국물과 쫄깃한 면발", image: "images/kalguksu.jpg", kcal: 600, carbo: 100, protein: 20, fat: 10 },
    { id: 20, name: "콩국수", category: "korean", spicy: 0, price: 9000, tags: ["면", "시원", "고소"], desc: "여름 별미 고소한 콩국물", image: "images/kongguksu.jpg", kcal: 550, carbo: 85, protein: 25, fat: 10 },

    // Western (12 items)
    { id: 21, name: "피자", category: "western", spicy: 0, price: 20000, tags: ["파티", "치즈", "배달"], desc: "치즈가 쭉 늘어나는 행복", image: "images/pizza.png", kcal: 1800, carbo: 180, protein: 80, fat: 80 },
    { id: 22, name: "파스타", category: "western", spicy: 0, price: 15000, tags: ["면", "데이트", "분위기"], desc: "크림, 토마토, 오일 취향대로", image: "images/pasta.jpg", kcal: 700, carbo: 90, protein: 25, fat: 25 },
    { id: 23, name: "햄버거", category: "western", spicy: 0, price: 8000, tags: ["패스트푸드", "간편", "고기"], desc: "한 입 가득 베어 무는 즐거움", image: "images/hamburger.jpg", kcal: 600, carbo: 50, protein: 25, fat: 30 },
    { id: 24, name: "스테이크", category: "western", spicy: 0, price: 35000, tags: ["고기", "기념일", "칼질"], desc: "특별한 날을 위한 선택", image: "images/steak.jpg", kcal: 900, carbo: 10, protein: 70, fat: 60 },
    { id: 25, name: "샐러드", category: "western", spicy: 0, price: 11000, tags: ["다이어트", "건강", "가볍게"], desc: "신선하고 가벼운 한 끼", image: "images/salad.jpg", kcal: 300, carbo: 20, protein: 15, fat: 15 },
    { id: 26, name: "샌드위치", category: "western", spicy: 0, price: 7000, tags: ["간편", "아침", "빵"], desc: "신선한 재료로 꽉 채운 맛", image: "images/sandwich.jpg", kcal: 450, carbo: 45, protein: 20, fat: 20 },
    { id: 27, name: "타코", category: "western", spicy: 1, price: 12000, tags: ["이색", "멕시코", "스낵"], desc: "다채로운 재료의 조화", image: "images/taco.jpg", kcal: 500, carbo: 40, protein: 25, fat: 25 },
    { id: 28, name: "치킨", category: "western", spicy: 1, price: 22000, tags: ["야식", "튀김", "파티"], desc: "바삭바삭한 국민 야식", image: "images/fried_chicken.jpg", kcal: 2000, carbo: 80, protein: 120, fat: 120 },
    { id: 29, name: "리조또", category: "western", spicy: 0, price: 16000, tags: ["밥", "크림", "부드러움"], desc: "부드럽고 고소한 쌀 요리", image: "images/risotto.jpg", kcal: 750, carbo: 90, protein: 20, fat: 30 },
    { id: 30, name: "브런치", category: "western", spicy: 0, price: 15000, tags: ["아침", "빵", "여유"], desc: "팬케이크와 스크램블 에그", image: "images/brunch.jpg", kcal: 800, carbo: 80, protein: 30, fat: 40 },
    { id: 31, name: "라자냐", category: "western", spicy: 0, price: 18000, tags: ["치즈", "오븐", "면"], desc: "층층이 쌓인 맛의 향연", image: "images/lasagna.jpg", kcal: 850, carbo: 60, protein: 40, fat: 45 },
    { id: 32, name: "핫윙", category: "western", spicy: 2, price: 15000, tags: ["매콤", "맥주", "안주"], desc: "매콤한 버팔로 윙", image: "images/hotwings.jpg", kcal: 700, carbo: 20, protein: 40, fat: 50 },

    // Chinese (10 items)
    { id: 33, name: "짜장면", category: "chinese", spicy: 0, price: 7000, tags: ["면", "국민음식", "단짠"], desc: "언제 먹어도 맛있는 짜장면", image: "images/jajangmyeon.png", kcal: 800, carbo: 110, protein: 25, fat: 25 },
    { id: 34, name: "짬뽕", category: "chinese", spicy: 3, price: 8000, tags: ["면", "얼큰", "해물"], desc: "속 풀리는 얼큰한 국물", image: "images/jjamppong.jpg", kcal: 700, carbo: 100, protein: 30, fat: 15 },
    { id: 35, name: "탕수육", category: "chinese", spicy: 0, price: 18000, tags: ["튀김", "고기", "달콤"], desc: "바삭하고 달콤한 소스", image: "images/tangsuyuk.jpg", kcal: 900, carbo: 80, protein: 40, fat: 40 },
    { id: 36, name: "마라탕", category: "chinese", spicy: 3, price: 12000, tags: ["매콤", "중독성", "국물"], desc: "얼얼하게 매운 중독적인 맛", image: "images/malatang.jpg", kcal: 1200, carbo: 100, protein: 40, fat: 60 },
    { id: 37, name: "볶음밥", category: "chinese", spicy: 0, price: 8000, tags: ["밥", "고소", "기름"], desc: "고슬고슬하게 볶아낸 밥", image: "images/bokkeumbap.jpg", kcal: 800, carbo: 100, protein: 25, fat: 35 },
    { id: 38, name: "마파두부", category: "chinese", spicy: 2, price: 10000, tags: ["두부", "매콤", "덮밥"], desc: "부드러운 두부와 매콤한 소스", image: "images/mapo_tofu.jpg", kcal: 600, carbo: 40, protein: 30, fat: 35 },
    { id: 39, name: "딤섬", category: "chinese", spicy: 0, price: 15000, tags: ["만두", "촉촉", "별미"], desc: "육즙 가득한 만두", image: "images/dim_sum.jpg", kcal: 500, carbo: 50, protein: 20, fat: 25 },
    { id: 40, name: "양꼬치", category: "chinese", spicy: 1, price: 15000, tags: ["술안주", "고기", "구이"], desc: "돌아가며 굽는 재미", image: "images/yangkkochi.jpg", kcal: 800, carbo: 10, protein: 60, fat: 55 },
    { id: 41, name: "깐풍기", category: "chinese", spicy: 2, price: 25000, tags: ["튀김", "매콤", "닭고기"], desc: "매콤새콤한 닭튀김 요리", image: "images/kkanpunggi.jpg", kcal: 900, carbo: 60, protein: 50, fat: 50 },
    { id: 42, name: "고추잡채", category: "chinese", spicy: 1, price: 28000, tags: ["야채", "꽃빵", "별미"], desc: "꽃빵에 싸먹는 즐거움", image: "images/gochujapchae.jpg", kcal: 750, carbo: 60, protein: 40, fat: 40 },

    // Japanese (10 items)
    { id: 43, name: "초밥", category: "japanese", spicy: 0, price: 18000, tags: ["해산물", "깔끔", "신선"], desc: "신선한 회와 밥의 조화", image: "images/sushi.png", kcal: 600, carbo: 80, protein: 30, fat: 10 },
    { id: 44, name: "돈까스", category: "japanese", spicy: 0, price: 11000, tags: ["튀김", "고기", "바삭"], desc: "바삭바삭한 튀김옷과 육즙", image: "images/tonkatsu.jpg", kcal: 900, carbo: 60, protein: 50, fat: 50 },
    { id: 45, name: "우동", category: "japanese", spicy: 0, price: 7000, tags: ["면", "따뜻", "국물"], desc: "오통통한 면발과 따뜻한 국물", image: "images/udon.jpg", kcal: 500, carbo: 90, protein: 15, fat: 5 },
    { id: 46, name: "라멘", category: "japanese", spicy: 1, price: 10000, tags: ["면", "국물", "진함"], desc: "진한 돈코츠 육수의 맛", image: "images/ramen.jpg", kcal: 700, carbo: 80, protein: 30, fat: 25 },
    { id: 47, name: "규동", category: "japanese", spicy: 0, price: 9000, tags: ["덮밥", "고기", "간편"], desc: "단짠단짠 소고기 덮밥", image: "images/gyudon.jpg", kcal: 750, carbo: 90, protein: 35, fat: 25 },
    { id: 48, name: "야키소바", category: "japanese", spicy: 0, price: 10000, tags: ["면", "볶음", "짭짤"], desc: "철판에 볶아낸 면 요리", image: "images/yakisoba.jpg", kcal: 600, carbo: 85, protein: 20, fat: 20 },
    { id: 49, name: "타코야키", category: "japanese", spicy: 0, price: 5000, tags: ["간식", "문어", "길거리"], desc: "동글동글 문어가 씹히는 맛", image: "images/takoyaki.jpg", kcal: 450, carbo: 60, protein: 15, fat: 15 },
    { id: 50, name: "사시미", category: "japanese", spicy: 0, price: 35000, tags: ["회", "술안주", "고급"], desc: "본연의 맛을 즐기는 회", image: "images/sashimi.jpg", kcal: 400, carbo: 5, protein: 60, fat: 15 },
    { id: 51, name: "메밀소바", category: "japanese", spicy: 0, price: 9000, tags: ["면", "시원", "여름"], desc: "쯔유에 적셔먹는 시원한 면", image: "images/memilsoba.jpg", kcal: 400, carbo: 80, protein: 15, fat: 2 },
    { id: 52, name: "오코노미야키", category: "japanese", spicy: 0, price: 15000, tags: ["철판", "양배추", "푸짐"], desc: "일본식 부침개", image: "images/okonomiyaki.jpg", kcal: 700, carbo: 60, protein: 30, fat: 35 },

    // Snack (8 items)
    { id: 53, name: "떡볶이", category: "snack", spicy: 2, price: 5000, tags: ["분식", "매콤", "국민간식"], desc: "매콤달콤한 국민 간식", image: "images/tteokbokki.png", kcal: 600, carbo: 120, protein: 10, fat: 5 },
    { id: 54, name: "순대", category: "snack", spicy: 0, price: 5000, tags: ["분식", "쫄깃", "내장"], desc: "소금이나 막장에 콕", image: "images/sundae.jpg", kcal: 400, carbo: 30, protein: 15, fat: 25 },
    { id: 55, name: "라면", category: "snack", spicy: 2, price: 4000, tags: ["면", "간편", "얼큰"], desc: "가장 맛있는 한 끼", image: "images/ramyeun.jpg", kcal: 500, carbo: 80, protein: 10, fat: 15 },
    { id: 56, name: "김밥", category: "snack", spicy: 0, price: 4000, tags: ["밥", "간편", "소풍"], desc: "한 줄로 든든한 식사", image: "images/gimbap.jpg", kcal: 450, carbo: 70, protein: 10, fat: 10 },
    { id: 57, name: "핫도그", category: "snack", spicy: 0, price: 3000, tags: ["간식", "튀김", "햄"], desc: "바삭하고 짭짤한 맛", image: "images/hotdog.jpg", kcal: 400, carbo: 40, protein: 10, fat: 20 },
    { id: 58, name: "토스트", category: "snack", spicy: 0, price: 4000, tags: ["빵", "아침", "달콤"], desc: "버터 향 가득한 토스트", image: "images/toast.jpg", kcal: 500, carbo: 60, protein: 10, fat: 25 },
    { id: 59, name: "어묵", category: "snack", spicy: 0, price: 3000, tags: ["국물", "따뜻", "겨울"], desc: "추운 날 생각나는 그 맛", image: "images/eomuk.jpg", kcal: 200, carbo: 20, protein: 15, fat: 5 },
    { id: 60, name: "튀김", category: "snack", spicy: 0, price: 5000, tags: ["바삭", "분식", "기름"], desc: "떡볶이 국물과 찰떡궁합", image: "images/twigim.jpg", kcal: 600, carbo: 50, protein: 10, fat: 40 },

    // New Additions (25 items)
    // Korean
    { id: 61, name: "육개장", category: "korean", spicy: 3, price: 10000, tags: ["국물", "얼큰", "든든"], desc: "소고기와 대파가 듬뿍 들어간 얼큰한 국물", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Yukgaejang.jpg/800px-Yukgaejang.jpg", kcal: 500, carbo: 30, protein: 35, fat: 25 },
    { id: 62, name: "곰탕", category: "korean", spicy: 0, price: 11000, tags: ["국물", "담백", "보양"], desc: "진하게 우려낸 고기 육수", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Gomtang.jpg", kcal: 400, carbo: 10, protein: 40, fat: 22 },
    { id: 63, name: "김치볶음밥", category: "korean", spicy: 1, price: 8000, tags: ["볶음밥", "매콤", "가성비"], desc: "잘 익은 김치로 볶아낸 맛", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kimchi_fried_rice.jpg/800px-Kimchi_fried_rice.jpg", kcal: 550, carbo: 85, protein: 15, fat: 15 },
    { id: 64, name: "회덮밥", category: "korean", spicy: 2, price: 12000, tags: ["해산물", "신선", "야채"], desc: "신선한 회와 야채의 만남", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Korean_cuisine-Bibimbap-01.jpg", kcal: 450, carbo: 60, protein: 30, fat: 10 },
    { id: 65, name: "청국장", category: "korean", spicy: 1, price: 9000, tags: ["국물", "구수", "발효"], desc: "구수하고 진한 고향의 맛", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Cheonggukjang.jpg", kcal: 350, carbo: 25, protein: 25, fat: 18 },
    // Western
    { id: 66, name: "에그 베네딕트", category: "western", spicy: 0, price: 14000, tags: ["브런치", "계란", "고급"], desc: "홀랜다이즈 소스의 부드러움", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Eggs_benedict_1.jpg", kcal: 580, carbo: 35, protein: 20, fat: 40 },
    { id: 67, name: "까르보나라", category: "western", spicy: 0, price: 15000, tags: ["파스타", "크림", "베이컨"], desc: "진하고 고소한 크림 파스타", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg", kcal: 700, carbo: 75, protein: 25, fat: 35 },
    { id: 68, name: "피쉬앤칩스", category: "western", spicy: 0, price: 16000, tags: ["튀김", "생선", "영국"], desc: "겉바속촉 생선 튀김", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Fish_and_chips_blackpool.jpg", kcal: 850, carbo: 65, protein: 35, fat: 50 },
    { id: 69, name: "클럽 샌드위치", category: "western", spicy: 0, price: 10000, tags: ["빵", "든든", "베이컨"], desc: "여러 층으로 쌓인 풍부한 맛", image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Club_sandwich.JPG", kcal: 620, carbo: 50, protein: 30, fat: 35 },
    { id: 70, name: "비프 부르기뇽", category: "western", spicy: 0, price: 28000, tags: ["소고기", "와인", "프랑스"], desc: "와인에 푹 고아낸 소고기 요리", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Boeuf_bourguignon.jpg", kcal: 550, carbo: 20, protein: 45, fat: 30 },
    // Chinese
    { id: 71, name: "꿔바로우", category: "chinese", spicy: 1, price: 22000, tags: ["튀김", "쫀득", "돼지고기"], desc: "쫀득한 식감의 북경식 탕수육", image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/%EA%BF%B0%EB%B0%94%EB%A1%9C%EC%9A%B0.jpg", kcal: 650, carbo: 70, protein: 25, fat: 30 },
    { id: 72, name: "양장피", category: "chinese", spicy: 2, price: 30000, tags: ["해산물", "겨자", "아삭"], desc: "코 끝 찡한 해산물 볶음 요리", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Korean-style_Chinese_dish_Yangjang-pi.jpg/800px-Korean-style_Chinese_dish_Yangjang-pi.jpg", kcal: 450, carbo: 40, protein: 30, fat: 15 },
    { id: 73, name: "동파육", category: "chinese", spicy: 0, price: 35000, tags: ["돼지고기", "부드러움", "고급"], desc: "입에서 살살 녹는 돼지고기 찜", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Dong-po_Pork_Red_Braised_Pork_Belly.jpg", kcal: 800, carbo: 15, protein: 35, fat: 65 },
    { id: 74, name: "유린기", category: "chinese", spicy: 2, price: 25000, tags: ["닭고기", "새콤", "야채"], desc: "아삭한 야채와 새콤한 간장소스", image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Yuringi.jpg", kcal: 580, carbo: 45, protein: 35, fat: 30 },
    { id: 75, name: "멘보샤", category: "chinese", spicy: 0, price: 18000, tags: ["새우", "빵", "튀김"], desc: "새우살을 넣은 식빵 튀김", image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Menbosya.jpg", kcal: 420, carbo: 30, protein: 15, fat: 28 },
    // Japanese
    { id: 76, name: "텐동", category: "japanese", spicy: 0, price: 13000, tags: ["튀김", "덮밥", "일식"], desc: "다양한 튀김이 올라간 덮밥", image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Tendon_in_Tokyo.jpg", kcal: 780, carbo: 95, protein: 20, fat: 35 },
    { id: 77, name: "가츠동", category: "japanese", spicy: 0, price: 10000, tags: ["돈까스", "계란", "덮밥"], desc: "돈까스와 계란의 환상 조합", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Katsudon_001.jpg", kcal: 820, carbo: 100, protein: 35, fat: 30 },
    { id: 78, name: "오므라이스", category: "japanese", spicy: 0, price: 9000, tags: ["계란", "볶음밥", "인기"], desc: "부드러운 계란 이불을 덮은 볶음밥", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Omuturaisu_by_is_as_in_Tokyo.jpg", kcal: 650, carbo: 85, protein: 20, fat: 25 },
    { id: 79, name: "사케동", category: "japanese", spicy: 0, price: 15000, tags: ["연어", "신선", "덮밥"], desc: "입안에서 녹는 부드러운 연어", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Salmon_donburi.jpg", kcal: 550, carbo: 70, protein: 30, fat: 15 },
    { id: 80, name: "스키야키", category: "japanese", spicy: 0, price: 22000, tags: ["소고기", "전골", "달콤"], desc: "간장 베이스의 일본식 소고기 전골", image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Sukiyaki_001.jpg", kcal: 600, carbo: 35, protein: 40, fat: 35 },
    // Snacks/Others
    { id: 81, name: "팥빙수", category: "snack", spicy: 0, price: 12000, tags: ["얼음", "팥", "시원"], desc: "시원한 얼음과 달콤한 팥", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Korean_dessert-Patbingsu-01.jpg", kcal: 450, carbo: 90, protein: 10, fat: 5 },
    { id: 82, name: "호떡", category: "snack", spicy: 0, price: 2000, tags: ["꿀", "겨울", "쫄깃"], desc: "꿀이 듬뿍 들어간 쫄깃한 간식", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Hotteok.jpg", kcal: 300, carbo: 50, protein: 5, fat: 10 },
    { id: 83, name: "붕어빵", category: "snack", spicy: 0, price: 2000, tags: ["겨울", "팥", "슈크림"], desc: "찬바람 불면 생각나는 친구", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Bungeoppang.jpg", kcal: 250, carbo: 45, protein: 4, fat: 6 },
    { id: 84, name: "베이글", category: "snack", spicy: 0, price: 4500, tags: ["빵", "아침", "담백"], desc: "크림치즈와 찰떡궁합", image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bagel-Plain-Alt.jpg", kcal: 320, carbo: 60, protein: 10, fat: 5 },
    { id: 85, name: "탕후루", category: "snack", spicy: 0, price: 4000, tags: ["과일", "달콤", "인기"], desc: "바삭한 설탕 코팅 속 상큼한 과일", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Tanghulu.jpg", kcal: 280, carbo: 65, protein: 1, fat: 1 }
];


// --- 2. STATE ---
const store = {
    filter: {
        category: 'all',
        price: 50000 // Default to "All" (Max coverage)
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
                예산과 카테고리만 고르면<br class="hidden md:block" />
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

                <div class="mb-8">
                    <div class="flex justify-between items-center mb-3">
                        <label class="text-sm text-gray-400">예산 (1인)</label>
                        <span id="price-label" class="text-neon-cyan font-bold">3만원 이하</span>
                    </div>
                    <div class="flex gap-2">
                            ${[
            { val: 10000, label: '만원 이하' },
            { val: 20000, label: '2만원' },
            { val: 50000, label: '3만원+' }
        ].map(p => `
                                <button data-price="${p.val}" class="price-btn flex-1 py-2 rounded-lg text-sm transition ${store.filter.price === p.val ? 'bg-neon-cyan bg-opacity-20 text-neon-cyan border border-neon-cyan' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}">
                                    ${p.label}
                                </button>
                            `).join('')}
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
        const priceMatch = f.price <= store.filter.price;
        return catMatch && priceMatch;
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
            
            <div class="p-8 text-center pt-6">
                <!-- Tags -->
                <div class="flex justify-center gap-2 mb-4">
                    ${food.tags.map(t => `<span class="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md">#${t}</span>`).join('')}
                </div>

                <!-- Title & Desc -->
                <h2 class="text-4xl font-extrabold text-white mb-2 neon-text">${food.name}</h2>
                <p class="text-gray-400 mb-6">${food.desc}</p>
                
                <!-- Nutrition Info (New) -->
                <div class="bg-gray-800 bg-opacity-50 rounded-2xl p-4 mb-8 grid grid-cols-4 gap-2 text-center text-xs text-gray-300 border border-gray-700">
                    <div class="flex flex-col items-center">
                        <span class="text-lg mb-1">🔥</span>
                        <span class="font-bold text-white text-base">${food.kcal}</span>
                        <span class="text-gray-500 scale-90">kcal</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-lg mb-1">🍚</span>
                        <span class="font-bold text-white text-base">${food.carbo}g</span>
                        <span class="text-gray-500 scale-90">탄수</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-lg mb-1">🍖</span>
                        <span class="font-bold text-white text-base">${food.protein}g</span>
                        <span class="text-gray-500 scale-90">단백</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="text-lg mb-1">🧈</span>
                        <span class="font-bold text-white text-base">${food.fat}g</span>
                        <span class="text-gray-500 scale-90">지방</span>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="grid grid-cols-2 gap-4">
                    <button id="retry-btn" class="py-3 rounded-xl border border-gray-600 hover:border-white transition text-gray-300">
                        🔄 다시 뽑기
                    </button>
                    <button onclick="goToMap('${food.name}')" class="flex items-center justify-center py-3 rounded-xl bg-neon-purple hover:bg-purple-600 text-white font-bold shadow-lg shadow-purple-900/50 transition-all duration-300">
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

// 전역 지도 이동 함수 (모바일 호환성 최강)
window.goToMap = function (foodName) {
    const query = encodeURIComponent(foodName + " 맛집");
    const url = `https://map.naver.com/v5/search/${query}`;
    window.location.href = url;
};

// [CTA Component]
function renderCTA(element) {
    element.innerHTML = `
        <div class="py-20 px-4">
            <div class="max-w-4xl mx-auto glass rounded-3xl p-10 text-center neon-shadow relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-10"></div>
                <h2 class="text-3xl font-bold mb-4 relative z-10">내 취향 저장하고<br/>내일도 고민 없이 뽑으세요!</h2>
                <p class="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                    현재 설정한 취향과 예산을 브라우저에 저장합니다.<br/>
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
                <h1 class="text-xl font-bold text-neon-cyan neon-text">FoodPick <span class="text-xs font-normal text-gray-500 ml-2">(Data: ${foods.length})</span></h1>
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
