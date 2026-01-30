export function renderProblem(element) {
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
