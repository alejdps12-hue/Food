import { store } from '../app.js';
import { renderSolution } from './Solution.js';

export function renderHero(element) {
    element.innerHTML = `
        <div class="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
            <!-- Background Elements -->
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

            <!-- Filter UI -->
            <div class="w-full max-w-3xl glass rounded-3xl p-6 md:p-8 neon-shadow mb-10 z-10">
                <!-- Categories -->
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
                    <!-- Spicy Level -->
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

                    <!-- Price -->
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

                <!-- Main CTA -->
                <button id="pick-btn" class="w-full py-4 text-xl font-bold rounded-xl bg-gradient-to-r from-neon-cyan to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
                    <span class="relative z-10 flex items-center justify-center gap-2">
                        🎰 지금 뽑기
                    </span>
                    <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
            </div>
        </div>
    `;

    // Event Listeners
    setupEventListeners(element);
}

function getCategoryName(cat) {
    const names = { all: '전체', korean: '한식', western: '양식', chinese: '중식', japanese: '일식', snack: '분식/기타' };
    return names[cat];
}

function setupEventListeners(element) {
    // Category chips
    element.querySelectorAll('.filter-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            store.filter.category = e.target.dataset.cat;
            renderHero(element); // Re-render to update active state
        });
    });

    // Spicy Range
    const spicyRange = element.querySelector('#spicy-range');
    const spicyLabel = element.querySelector('#spicy-label');
    spicyRange.value = store.filter.spicy;

    // Update label on load
    const labels = ['👶 순한맛', '🌶️ 약간 매움', '🔥🔥 매운맛', '🌶️ 상관없음'];
    spicyLabel.textContent = labels[store.filter.spicy];

    spicyRange.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        store.filter.spicy = val;
        spicyLabel.textContent = labels[val];
    });

    // Price Buttons
    element.querySelectorAll('.price-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            store.filter.price = parseInt(e.target.dataset.price);
            renderHero(element);
        });
    });

    // Pick Now Button
    element.querySelector('#pick-btn').addEventListener('click', () => {
        const solutionSection = document.getElementById('solution-section');
        solutionSection.scrollIntoView({ behavior: 'smooth' });
        renderSolution(solutionSection, true); // true = trigger animation
    });
}
