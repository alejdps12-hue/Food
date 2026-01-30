export const foods = [
    // Korean (20 items)
    { id: 1, name: "김치찌개", category: "korean", spicy: 2, price: 9000, tags: ["국물", "혼밥", "점심"], desc: "한국인의 소울푸드, 얼큰한 김치찌개", image: "images/kimchi_stew.png" },
    { id: 2, name: "된장찌개", category: "korean", spicy: 0, price: 8000, tags: ["국물", "집밥", "속편함"], desc: "구수한 국물과 두부의 조화", image: "images/doenjang.png" },
    { id: 3, name: "비빔밥", category: "korean", spicy: 1, price: 9000, tags: ["건강", "야채", "든든"], desc: "여러가지 나물과 고추장의 만남", image: "images/bibimbap.jpg" },
    { id: 4, name: "삼겹살", category: "korean", spicy: 0, price: 16000, tags: ["회식", "고기", "술안주"], desc: "지글지글 구워먹는 삼겹살", image: "images/samgyeopsal.jpg" },
    { id: 5, name: "불고기", category: "korean", spicy: 0, price: 12000, tags: ["고기", "달달", "밥도둑"], desc: "남녀노소 좋아하는 달콤 짭짤한 맛", image: "images/bulgogi.jpg" },
    { id: 6, name: "국밥", category: "korean", spicy: 0, price: 9000, tags: ["국물", "든든", "해장"], desc: "뜨끈한 국물에 밥 한 그릇 뚝딱", image: "images/gukbap.jpg" },
    { id: 7, name: "냉면", category: "korean", spicy: 1, price: 10000, tags: ["시원", "면", "여름"], desc: "살얼음 동동 띄운 시원한 육수", image: "images/naengmyeon.jpg" },
    { id: 8, name: "닭갈비", category: "korean", spicy: 2, price: 13000, tags: ["매콤", "고기", "볶음밥"], desc: "매콤한 양념에 볶아먹는 닭고기", image: "images/dakgalbi.jpg" },
    { id: 9, name: "순두부찌개", category: "korean", spicy: 2, price: 9000, tags: ["국물", "부드러움", "얼큰"], desc: "부드러운 순두부와 얼큰한 국물", image: "images/kimchi_stew.png" }, // Using Kimchi stew as fallback/similar
    { id: 10, name: "제육볶음", category: "korean", spicy: 2, price: 9000, tags: ["고기", "매콤", "점심"], desc: "매콤달콤한 양념 돼지고기", image: "images/samgyeopsal.jpg" }, // Fallback
    { id: 11, name: "감자탕", category: "korean", spicy: 2, price: 10000, tags: ["국물", "해장", "고기"], desc: "진한 국물과 부드러운 등뼈", image: "images/gukbap.jpg" },
    { id: 12, name: "부대찌개", category: "korean", spicy: 2, price: 10000, tags: ["국물", "라면사리", "햄"], desc: "햄과 라면의 완벽한 조화", image: "images/kimchi_stew.png" },
    { id: 13, name: "설렁탕", category: "korean", spicy: 0, price: 11000, tags: ["국물", "보양", "담백"], desc: "뽀얀 국물의 깊은 맛", image: "images/gukbap.jpg" },
    { id: 14, name: "갈비탕", category: "korean", spicy: 0, price: 14000, tags: ["국물", "고기", "든든"], desc: "큼직한 갈비가 들어간 보양식", image: "images/gukbap.jpg" },
    { id: 15, name: "닭볶음탕", category: "korean", spicy: 3, price: 25000, tags: ["매콤", "술안주", "고기"], desc: "매콤한 국물에 빠진 닭고기", image: "images/dakgalbi.jpg" },
    { id: 16, name: "보쌈", category: "korean", spicy: 0, price: 30000, tags: ["고기", "담백", "쌈"], desc: "부드럽게 삶아낸 돼지고기", image: "images/samgyeopsal.jpg" },
    { id: 17, name: "족발", category: "korean", spicy: 0, price: 35000, tags: ["고기", "쫄깃", "야식"], desc: "콜라겐 가득 쫄깃한 맛", image: "images/samgyeopsal.jpg" },
    { id: 18, name: "낙지볶음", category: "korean", spicy: 3, price: 12000, tags: ["매콤", "해물", "입맛"], desc: "화끈하게 매운 낙지 요리", image: "images/dakgalbi.jpg" },
    { id: 19, name: "칼국수", category: "korean", spicy: 0, price: 8000, tags: ["면", "따뜻", "비오는날"], desc: "뜨끈한 국물과 쫄깃한 면발", image: "images/naengmyeon.jpg" }, // Using noodle fallback
    { id: 20, name: "콩국수", category: "korean", spicy: 0, price: 9000, tags: ["면", "시원", "고소"], desc: "여름 별미 고소한 콩국물", image: "images/naengmyeon.jpg" },

    // Western (12 items)
    { id: 21, name: "피자", category: "western", spicy: 0, price: 20000, tags: ["파티", "치즈", "배달"], desc: "치즈가 쭉 늘어나는 행복", image: "images/pizza.png" },
    { id: 22, name: "파스타", category: "western", spicy: 0, price: 15000, tags: ["면", "데이트", "분위기"], desc: "크림, 토마토, 오일 취향대로", image: "images/pasta.jpg" },
    { id: 23, name: "햄버거", category: "western", spicy: 0, price: 8000, tags: ["패스트푸드", "간편", "고기"], desc: "한 입 가득 베어 무는 즐거움", image: "images/hamburger.jpg" },
    { id: 24, name: "스테이크", category: "western", spicy: 0, price: 35000, tags: ["고기", "기념일", "칼질"], desc: "특별한 날을 위한 선택", image: "images/steak.jpg" },
    { id: 25, name: "샐러드", category: "western", spicy: 0, price: 11000, tags: ["다이어트", "건강", "가볍게"], desc: "신선하고 가벼운 한 끼", image: "images/salad.jpg" },
    { id: 26, name: "샌드위치", category: "western", spicy: 0, price: 7000, tags: ["간편", "아침", "빵"], desc: "신선한 재료로 꽉 채운 맛", image: "images/sandwich.jpg" },
    { id: 27, name: "타코", category: "western", spicy: 1, price: 12000, tags: ["이색", "멕시코", "스낵"], desc: "다채로운 재료의 조화", image: "images/taco.jpg" },
    { id: 28, name: "치킨", category: "western", spicy: 1, price: 22000, tags: ["야식", "튀김", "파티"], desc: "바삭바삭한 국민 야식", image: "images/fried_chicken.jpg" },
    { id: 29, name: "리조또", category: "western", spicy: 0, price: 16000, tags: ["밥", "크림", "부드러움"], desc: "부드럽고 고소한 쌀 요리", image: "images/pasta.jpg" },
    { id: 30, name: "브런치", category: "western", spicy: 0, price: 15000, tags: ["아침", "빵", "여유"], desc: "팬케이크와 스크램블 에그", image: "images/toast.jpg" },
    { id: 31, name: "라자냐", category: "western", spicy: 0, price: 18000, tags: ["치즈", "오븐", "면"], desc: "층층이 쌓인 맛의 향연", image: "images/pasta.jpg" },
    { id: 32, name: "핫윙", category: "western", spicy: 2, price: 15000, tags: ["매콤", "맥주", "안주"], desc: "매콤한 버팔로 윙", image: "images/fried_chicken.jpg" },

    // Chinese (10 items)
    { id: 33, name: "짜장면", category: "chinese", spicy: 0, price: 7000, tags: ["면", "국민음식", "단짠"], desc: "언제 먹어도 맛있는 짜장면", image: "images/jajangmyeon.png" },
    { id: 34, name: "짬뽕", category: "chinese", spicy: 3, price: 8000, tags: ["면", "얼큰", "해물"], desc: "속 풀리는 얼큰한 국물", image: "images/jjamppong.jpg" },
    { id: 35, name: "탕수육", category: "chinese", spicy: 0, price: 18000, tags: ["튀김", "고기", "달콤"], desc: "바삭하고 달콤한 소스", image: "images/tangsuyuk.jpg" },
    { id: 36, name: "마라탕", category: "chinese", spicy: 3, price: 12000, tags: ["매콤", "중독성", "국물"], desc: "얼얼하게 매운 중독적인 맛", image: "images/malatang.jpg" },
    { id: 37, name: "볶음밥", category: "chinese", spicy: 0, price: 8000, tags: ["밥", "고소", "기름"], desc: "고슬고슬하게 볶아낸 밥", image: "images/bokkeumbap.jpg" },
    { id: 38, name: "마파두부", category: "chinese", spicy: 2, price: 10000, tags: ["두부", "매콤", "덮밥"], desc: "부드러운 두부와 매콤한 소스", image: "images/mapo_tofu.jpg" },
    { id: 39, name: "딤섬", category: "chinese", spicy: 0, price: 15000, tags: ["만두", "촉촉", "별미"], desc: "육즙 가득한 만두", image: "images/dim_sum.jpg" },
    { id: 40, name: "양꼬치", category: "chinese", spicy: 1, price: 15000, tags: ["술안주", "고기", "구이"], desc: "돌아가며 굽는 재미", image: "images/samgyeopsal.jpg" },
    { id: 41, name: "깐풍기", category: "chinese", spicy: 2, price: 25000, tags: ["튀김", "매콤", "닭고기"], desc: "매콤새콤한 닭튀김 요리", image: "images/fried_chicken.jpg" },
    { id: 42, name: "고추잡채", category: "chinese", spicy: 1, price: 28000, tags: ["야채", "꽃빵", "별미"], desc: "꽃빵에 싸먹는 즐거움", image: "images/dim_sum.jpg" },

    // Japanese (10 items)
    { id: 43, name: "초밥", category: "japanese", spicy: 0, price: 18000, tags: ["해산물", "깔끔", "신선"], desc: "신선한 회와 밥의 조화", image: "images/sushi.png" },
    { id: 44, name: "돈까스", category: "japanese", spicy: 0, price: 11000, tags: ["튀김", "고기", "바삭"], desc: "바삭바삭한 튀김옷과 육즙", image: "images/tonkatsu.jpg" },
    { id: 45, name: "우동", category: "japanese", spicy: 0, price: 7000, tags: ["면", "따뜻", "국물"], desc: "오통통한 면발과 따뜻한 국물", image: "images/udon.jpg" },
    { id: 46, name: "라멘", category: "japanese", spicy: 1, price: 10000, tags: ["면", "국물", "진함"], desc: "진한 돈코츠 육수의 맛", image: "images/ramen.jpg" },
    { id: 47, name: "규동", category: "japanese", spicy: 0, price: 9000, tags: ["덮밥", "고기", "간편"], desc: "단짠단짠 소고기 덮밥", image: "images/gyudon.jpg" },
    { id: 48, name: "야키소바", category: "japanese", spicy: 0, price: 10000, tags: ["면", "볶음", "짭짤"], desc: "철판에 볶아낸 면 요리", image: "images/yakisoba.jpg" },
    { id: 49, name: "타코야키", category: "japanese", spicy: 0, price: 5000, tags: ["간식", "문어", "길거리"], desc: "동글동글 문어가 씹히는 맛", image: "images/takoyaki.jpg" },
    { id: 50, name: "사시미", category: "japanese", spicy: 0, price: 35000, tags: ["회", "술안주", "고급"], desc: "본연의 맛을 즐기는 회", image: "images/sashimi.jpg" },
    { id: 51, name: "메밀소바", category: "japanese", spicy: 0, price: 9000, tags: ["면", "시원", "여름"], desc: "쯔유에 적셔먹는 시원한 면", image: "images/naengmyeon.jpg" },
    { id: 52, name: "오코노미야키", category: "japanese", spicy: 0, price: 15000, tags: ["철판", "양배추", "푸짐"], desc: "일본식 부침개", image: "images/big_pancake.jpg" }, // Fallback needed or basic match

    // Snack/Others (8 items)
    { id: 53, name: "떡볶이", category: "snack", spicy: 2, price: 5000, tags: ["분식", "매콤", "국민간식"], desc: "매콤달콤한 국민 간식", image: "images/tteokbokki.png" },
    { id: 54, name: "순대", category: "snack", spicy: 0, price: 5000, tags: ["분식", "쫄깃", "내장"], desc: "소금이나 막장에 콕", image: "images/sundae.jpg" },
    { id: 55, name: "라면", category: "snack", spicy: 2, price: 4000, tags: ["면", "간편", "얼큰"], desc: "가장 맛있는 한 끼", image: "images/ramyeun.jpg" },
    { id: 56, name: "김밥", category: "snack", spicy: 0, price: 4000, tags: ["밥", "간편", "소풍"], desc: "한 줄로 든든한 식사", image: "images/gimbap.jpg" },
    { id: 57, name: "핫도그", category: "snack", spicy: 0, price: 3000, tags: ["간식", "튀김", "햄"], desc: "바삭하고 짭짤한 맛", image: "images/hotdog.jpg" },
    { id: 58, name: "토스트", category: "snack", spicy: 0, price: 4000, tags: ["빵", "아침", "달콤"], desc: "버터 향 가득한 토스트", image: "images/toast.jpg" },
    { id: 59, name: "어묵", category: "snack", spicy: 0, price: 3000, tags: ["국물", "따뜻", "겨울"], desc: "추운 날 생각나는 그 맛", image: "images/udon.jpg" },
    { id: 60, name: "튀김", category: "snack", spicy: 0, price: 5000, tags: ["바삭", "분식", "기름"], desc: "떡볶이 국물과 찰떡궁합", image: "images/tonkatsu.jpg" },

    // New Additions (25 items)
    // Korean
    { id: 61, name: "육개장", category: "korean", spicy: 3, price: 10000, tags: ["국물", "얼큰", "든든"], desc: "소고기와 대파가 듬뿍 들어간 얼큰한 국물", image: "images/kimchi_stew.png" },
    { id: 62, name: "곰탕", category: "korean", spicy: 0, price: 11000, tags: ["국물", "보양", "담백"], desc: "진하게 우려낸 고기 육수", image: "images/gukbap.jpg" },
    { id: 63, name: "김치볶음밥", category: "korean", spicy: 1, price: 8000, tags: ["밥", "계란후라이", "간편"], desc: "잘 익은 김치로 볶아낸 맛", image: "images/bokkeumbap.jpg" },
    { id: 64, name: "회덮밥", category: "korean", spicy: 1, price: 12000, tags: ["해산물", "야채", "신선"], desc: "신선한 회와 야채의 만남", image: "images/bibimbap.jpg" },
    { id: 65, name: "청국장", category: "korean", spicy: 0, price: 9000, tags: ["국물", "진함", "전통"], desc: "구수하고 진한 고향의 맛", image: "images/doenjang.png" },

    // Western
    { id: 66, name: "에그 베네딕트", category: "western", spicy: 0, price: 14000, tags: ["브런치", "계란", "여유"], desc: "홀랜다이즈 소스의 부드러움", image: "images/brunch.jpg" },
    { id: 67, name: "까르보나라", category: "western", spicy: 0, price: 15000, tags: ["면", "크림", "베이컨"], desc: "진하고 고소한 크림 파스타", image: "images/pasta.jpg" },
    { id: 68, name: "피쉬앤칩스", category: "western", spicy: 0, price: 16000, tags: ["튀김", "생선", "영국"], desc: "겉바속촉 생선 튀김", image: "images/fried_chicken.jpg" },
    { id: 69, name: "클럽 샌드위치", category: "western", spicy: 0, price: 10000, tags: ["간편", "푸짐", "샌드위치"], desc: "여러 층으로 쌓인 풍부한 맛", image: "images/sandwich.jpg" },
    { id: 70, name: "비프 부르기뇽", category: "western", spicy: 0, price: 28000, tags: ["고기", "고급", "프랑스"], desc: "와인에 푹 고아낸 소고기 요리", image: "images/steak.jpg" },

    // Chinese
    { id: 71, name: "꿔바로우", category: "chinese", spicy: 0, price: 22000, tags: ["튀김", "새콤달콤", "찹쌀"], desc: "쫀득한 식감의 북경식 탕수육", image: "images/tangsuyuk.jpg" },
    { id: 72, name: "양장피", category: "chinese", spicy: 1, price: 30000, tags: ["해산물", "야채", "겨자"], desc: "코 끝 찡한 해산물 볶음 요리", image: "images/dim_sum.jpg" },
    { id: 73, name: "동파육", category: "chinese", spicy: 0, price: 35000, tags: ["고기", "부드러움", "간장"], desc: "입에서 살살 녹는 돼지고기 찜", image: "images/bossam.jpg" },
    { id: 74, name: "유린기", category: "chinese", spicy: 1, price: 25000, tags: ["튀김", "닭고기", "깔끔"], desc: "아삭한 야채와 새콤한 간장소스", image: "images/fried_chicken.jpg" },
    { id: 75, name: "멘보샤", category: "chinese", spicy: 0, price: 18000, tags: ["튀김", "새우", "바삭"], desc: "새우살을 넣은 식빵 튀김", image: "images/twigim.jpg" },

    // Japanese
    { id: 76, name: "텐동", category: "japanese", spicy: 0, price: 13000, tags: ["튀김", "덮밥", "푸짐"], desc: "다양한 튀김이 올라간 덮밥", image: "images/twigim.jpg" },
    { id: 77, name: "가츠동", category: "japanese", spicy: 0, price: 10000, tags: ["돈까스", "덮밥", "간편"], desc: "돈까스와 계란의 환상 조합", image: "images/tonkatsu.jpg" },
    { id: 78, name: "오므라이스", category: "japanese", spicy: 0, price: 9000, tags: ["밥", "소스", "인기"], desc: "부드러운 계란 이불을 덮은 볶음밥", image: "images/bokkeumbap.jpg" },
    { id: 79, name: "사케동", category: "japanese", spicy: 0, price: 15000, tags: ["연어", "덮밥", "신선"], desc: "입안에서 녹는 부드러운 연어", image: "images/sashimi.jpg" },
    { id: 80, name: "스키야키", category: "japanese", spicy: 0, price: 22000, tags: ["고기", "국물", "나베"], desc: "간장 베이스의 일본식 소고기 전골", image: "images/budaejjigae.jpg" },

    // Snacks/Others
    { id: 81, name: "팥빙수", category: "snack", spicy: 0, price: 12000, tags: ["여름", "달콤", "시원"], desc: "시원한 얼음과 달콤한 팥", image: "images/salad.jpg" },
    { id: 82, name: "호떡", category: "snack", spicy: 0, price: 2000, tags: ["겨울", "달콤", "길거리"], desc: "꿀이 듬뿍 들어간 쫄깃한 간식", image: "images/toast.jpg" },
    { id: 83, name: "붕어빵", category: "snack", spicy: 0, price: 2000, tags: ["겨울", "단팥", "슈크림"], desc: "찬바람 불면 생각나는 친구", image: "images/toast.jpg" },
    { id: 84, name: "베이글", category: "snack", spicy: 0, price: 4500, tags: ["빵", "아침", "든든"], desc: "크림치즈와 찰떡궁합", image: "images/sandwich.jpg" },
    { id: 85, name: "탕후루", category: "snack", spicy: 0, price: 4000, tags: ["과일", "달콤", "간식"], desc: "바삭한 설탕 코팅 속 상큼한 과일", image: "images/taco.jpg" }
];
