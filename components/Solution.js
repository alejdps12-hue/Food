import { store } from '../app.js';
import { foods } from '../data/foods.js';

export function renderSolution(element, triggerAnimation = false) {
    // If not triggered, show empty state or placeholder
    if (!triggerAnimation && !store.result) {
        element.innerHTML = `<div class="min-h-[50vh] bg-dark-bg"></div>`; // Placeholder
        return;
    }

    element.innerHTML = `
        <div class="py-20 px-4 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            <div id="roulette-container" class="relative z-10 text-center">
                <div class="text-neon-cyan text-xl font-bold mb-8 animate-pulse">
                    최고의 메뉴를찾는 중...
                </div>
                
                <!-- Slot Machine Window -->
                <div class="w-80 h-96 bg-gray-900 rounded-3xl border-4 border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.4)] relative overflow-hidden flex flex-col items-center justify-center p-6">
                    <div id="slot-viewport" class="text-center">
                        <span class="text-6xl mb-4 block filter grayscale" id="slot-icon">❔</span>
                        <h3 class="text-2xl font-bold text-white" id="slot-text">두근두근</h3>
                    </div>
                </div>
            </div>

            <!-- Result Card (Hidden Initially) -->
            <div id="result-card" class="hidden relative z-20 w-full max-w-md">
                <!-- Injected via JS -->
            </div>
        </div>
    `;

    if (triggerAnimation) {
        runRoulette(element);
    }
}

function runRoulette(element) {
    // 1. Filter Candidates
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

    // 2. Animation Logic
    const slotText = element.querySelector('#slot-text');
    const slotIcon = element.querySelector('#slot-icon');
    const container = element.querySelector('#roulette-container');
    const resultCard = element.querySelector('#result-card');

    let iterations = 0;
    const maxIterations = 20; // Run for about 2 seconds total roughly
    const interval = setInterval(() => {
        // Random temporary pick for animation
        const temp = candidates[Math.floor(Math.random() * candidates.length)];
        slotText.textContent = temp.name;
        // Optional: Change emoji icon based on category if available, or just generic
        slotIcon.textContent = getCategoryEmoji(temp.category);

        iterations++;
        if (iterations >= maxIterations) {
            clearInterval(interval);
            // Final Pick
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
    // Hide roulette, show result
    container.style.display = 'none';
    cardContainer.classList.remove('hidden');
    cardContainer.classList.add('fade-in');

    const spicyLevel = ['순한맛', '약간 매움', '매콤함', ''][food.spicy] || '';

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
        // Reset view
        cardContainer.classList.add('hidden');
        container.style.display = 'block';
        renderSolution(document.getElementById('solution-section'), true);
    });
}
