import { store } from '../app.js';

export function renderCTA(element) {
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

    // Check for saved prefs on load (This logic technically belongs in app init, but adding helper here)
    // In a real module system we might expose a helper 'loadPrefs', but simplified here.
}
