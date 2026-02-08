
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BINGO_ITEMS, WIN_COMBINATIONS } from './constants';
import { BingoItem, GridCell } from './types';

// Helper for shuffling
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const App: React.FC = () => {
  const [grid, setGrid] = useState<GridCell[]>([]);
  const [isWinner, setIsWinner] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  
  // Quiz Modal States
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizItem, setCurrentQuizItem] = useState<BingoItem | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizStatus, setQuizStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Audio/Visual Refs
  const winAudioPlayed = useRef(false);

  // Initialize game
  const createNewCard = useCallback(() => {
    const shuffledItems = shuffleArray(BINGO_ITEMS).slice(0, 16);
    const newGrid = shuffledItems.map(item => ({ item, isSelected: false }));
    setGrid(newGrid);
    setIsWinner(false);
    setHistory([]);
    setShowQuiz(false);
    setCurrentQuizItem(null);
    winAudioPlayed.current = false;
  }, []);

  useEffect(() => {
    createNewCard();
  }, [createNewCard]);

  // Check win condition whenever grid changes
  useEffect(() => {
    if (grid.length === 0 || isWinner) return;

    const selectedIndices = grid
      .map((cell, idx) => cell.isSelected ? idx : -1)
      .filter(idx => idx !== -1);
    
    const hasWon = WIN_COMBINATIONS.some(combo => 
      combo.every(idx => selectedIndices.includes(idx))
    );

    if (hasWon) {
      setIsWinner(true);
      triggerFireworks();
    }
  }, [grid, isWinner]);

  // Handle manual cell click (optional, but kept for flexibility)
  const toggleCell = (index: number) => {
    if (isWinner) return;
    const newGrid = [...grid];
    newGrid[index].isSelected = !newGrid[index].isSelected;
    setGrid(newGrid);
  };

  const drawRandom = () => {
    const remaining = BINGO_ITEMS.filter(item => !history.includes(item.id));
    if (remaining.length === 0) {
      alert("Đã bốc hết tất cả các từ khóa!");
      return;
    }
    const randomItem = remaining[Math.floor(Math.random() * remaining.length)];
    setCurrentQuizItem(randomItem);
    setSelectedOption(null);
    setQuizStatus('idle');
    setShowQuiz(true);
  };

  const handleAnswer = (optionIdx: number) => {
    if (quizStatus !== 'idle') return;
    
    setSelectedOption(optionIdx);
    if (optionIdx === currentQuizItem?.correctAnswer) {
      setQuizStatus('correct');
      setHistory(prev => [...prev, currentQuizItem!.id]);
      
      // AUTO-SELECT IN GRID: Find the keyword in the 4x4 grid and mark it
      setGrid(prevGrid => prevGrid.map(cell => {
        if (cell.item.id === currentQuizItem!.id) {
          return { ...cell, isSelected: true };
        }
        return cell;
      }));
    } else {
      setQuizStatus('wrong');
    }
  };

  const triggerFireworks = () => {
    // @ts-ignore
    if (window.confetti) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        // @ts-ignore
        window.confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        // @ts-ignore
        window.confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  };

  return (
    <div className="min-h-screen bg-[#8b0000] flex items-center justify-center p-0 md:p-4 overflow-hidden">
      {/* 16:9 Aspect Ratio Container for Computer Screens */}
      <div className="w-full max-w-[1280px] aspect-video bg-[#fef2f2] shadow-[0_0_100px_rgba(0,0,0,0.5)] relative flex flex-col overflow-hidden border-4 border-yellow-500 rounded-none md:rounded-3xl">
        
        {/* Top Header - Updated for 2026 Year of the Horse */}
        <header className="bg-red-700 py-3 px-6 shadow-lg text-center border-b-4 border-yellow-400 flex justify-between items-center shrink-0">
          <div className="text-yellow-400 text-2xl font-bold">🐎 TẾT BÍNH NGỌ</div>
          <h1 className="text-2xl md:text-4xl font-black text-yellow-300 drop-shadow-lg tracking-widest uppercase">
            BINGO CÔNG DÂN SỐ
          </h1>
          <div className="text-yellow-400 text-2xl font-bold">2026 🎠</div>
        </header>

        {/* Main Game Area - Split for 16:9 Landscape */}
        <main className="flex-1 flex overflow-hidden p-4 gap-6">
          
          {/* Left Side: Bingo Grid - Takes about 60% of width */}
          <div className="flex-[1.2] flex flex-col justify-center items-center h-full relative">
            <div className="bg-red-600 p-3 rounded-[2rem] shadow-2xl border-4 border-yellow-400 w-full max-w-[550px] aspect-square relative">
              <div className="grid grid-cols-4 gap-2 h-full">
                {grid.map((cell, index) => (
                  <div
                    key={`${cell.item.id}-${index}`}
                    className={`
                      relative transition-all duration-500 rounded-xl flex flex-col items-center justify-center text-center border-2
                      aspect-square overflow-hidden
                      ${cell.isSelected 
                        ? 'bg-yellow-400 border-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] scale-95' 
                        : 'bg-white border-red-200'}
                    `}
                  >
                    <span className={`text-2xl md:text-3xl mb-1 ${cell.isSelected ? 'animate-bounce' : ''}`}>
                      {cell.item.icon}
                    </span>
                    <span className={`
                      text-[9px] md:text-xs font-black uppercase leading-tight px-1
                      ${cell.isSelected ? 'text-red-700' : 'text-red-900'}
                    `}>
                      {cell.item.keyword}
                    </span>
                    {cell.isSelected && (
                      <div className="absolute inset-0 bg-red-600/10 pointer-events-none"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Win Overlay */}
              {isWinner && (
                <div className="absolute inset-0 bg-red-700/95 rounded-[1.8rem] flex flex-col items-center justify-center text-center p-6 z-20 animate-in fade-in zoom-in duration-500 border-4 border-yellow-400">
                  <div className="text-8xl mb-4 drop-shadow-xl animate-bounce">🏆</div>
                  <h2 className="text-4xl md:text-6xl font-black text-yellow-300 mb-2 italic tracking-tighter">BINGO!</h2>
                  <p className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest">
                    CÔNG DÂN SỐ THÔNG THÁI
                  </p>
                  <button 
                    onClick={createNewCard}
                    className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-red-800 font-black py-4 px-12 rounded-full shadow-[0_5px_0_rgb(180,140,0)] transition-all active:translate-y-1 active:shadow-none uppercase text-xl"
                  >
                    CHƠI LẠI
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Controls & History - Takes about 40% */}
          <div className="flex-1 flex flex-col gap-4 py-4 pr-2">
            <div className="bg-white rounded-3xl border-4 border-red-600 p-6 shadow-xl flex flex-col items-center text-center justify-center flex-1">
              <h3 className="text-xl font-black text-red-700 mb-6 flex items-center gap-2">
                <span className="text-2xl">🎲</span> LƯỢT TIẾP THEO
              </h3>
              
              <button 
                onClick={drawRandom}
                disabled={isWinner}
                className={`
                  w-full py-8 px-6 rounded-3xl font-black text-2xl shadow-[0_8px_0_rgb(150,0,0)] transition-all
                  ${isWinner 
                    ? 'bg-gray-300 shadow-none translate-y-2 cursor-not-allowed text-gray-500' 
                    : 'bg-red-600 hover:bg-red-700 text-white active:translate-y-2 active:shadow-none animate-bounce-subtle border-2 border-yellow-400'}
                `}
              >
                🧧 MỞ LÌ XÌ MAY MẮN
              </button>

              <div className="mt-8 w-full">
                <div className="flex justify-between text-xs font-bold text-red-800 uppercase mb-2">
                  <span>Tiến độ bốc thăm</span>
                  <span>{history.length} / {BINGO_ITEMS.length}</span>
                </div>
                <div className="w-full h-4 bg-red-100 rounded-full border border-red-200 overflow-hidden">
                  <div 
                    className="h-full bg-red-600 transition-all duration-500" 
                    style={{ width: `${(history.length / BINGO_ITEMS.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick Rules */}
            <div className="bg-yellow-100 p-4 rounded-3xl border-2 border-yellow-500 shadow-md">
              <h4 className="font-black text-red-700 mb-2 uppercase text-sm flex items-center gap-2">
                📖 CÁCH CHƠI
              </h4>
              <p className="text-xs text-red-900 font-bold leading-relaxed">
                Năm mới 2026 rực rỡ! Bốc lì xì ➔ Trả lời đúng ➔ Ô Bingo sẽ tự động sáng lên!
              </p>
            </div>

            <button 
              onClick={createNewCard}
              className="bg-white hover:bg-gray-100 text-red-700 font-black py-3 px-6 rounded-2xl border-2 border-red-600 transition-all flex items-center justify-center gap-2 text-sm"
            >
              🔄 ĐỔI THẺ MỚI
            </button>
          </div>
        </main>

        <footer className="bg-red-800 py-2 px-6 text-center text-yellow-200 font-bold text-[10px] md:text-xs shrink-0 border-t-2 border-yellow-500">
          © 2026 STEM EDUCATION - VUI TẾT AN TOÀN TRÊN KHÔNG GIAN MẠNG
        </footer>

        {/* QUIZ MODAL - 80% screen area */}
        {showQuiz && currentQuizItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="bg-white w-[90%] h-[90%] max-w-[1100px] max-h-[85vh] rounded-[3rem] border-8 border-yellow-500 shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden flex flex-col relative">
              
              <div className="bg-red-700 p-6 text-center border-b-4 border-yellow-500">
                <h2 className="text-2xl md:text-4xl font-black text-yellow-300 uppercase tracking-widest">🧧 THỬ THÁCH CÔNG DÂN SỐ 2026 🧧</h2>
              </div>

              <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center overflow-y-auto">
                <div className="text-8xl mb-6 animate-pulse">{currentQuizItem.icon}</div>
                
                <h3 className="text-2xl md:text-4xl font-black text-red-900 text-center mb-10 max-w-4xl leading-tight">
                  {currentQuizItem.question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                  {currentQuizItem.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={quizStatus !== 'idle'}
                      className={`
                        p-8 rounded-[2rem] text-xl font-black transition-all border-4 shadow-xl flex flex-col items-center justify-center min-h-[160px]
                        ${quizStatus === 'idle' 
                          ? 'bg-red-50 border-red-200 hover:border-yellow-500 hover:bg-yellow-50 hover:scale-105 text-red-900' 
                          : (idx === currentQuizItem.correctAnswer 
                              ? 'bg-green-500 border-green-700 text-white scale-110 rotate-1 shadow-[0_0_30px_rgba(34,197,94,0.5)]' 
                              : (selectedOption === idx ? 'bg-red-600 border-red-800 text-white opacity-50 grayscale' : 'bg-gray-100 border-gray-300 text-gray-400'))
                        }
                      `}
                    >
                      <div className="mb-3 text-4xl">
                        {idx === 0 ? '🅰️' : idx === 1 ? '🅱️' : '©️'}
                      </div>
                      {option}
                    </button>
                  ))}
                </div>

                <div className="mt-10 h-20 flex items-center justify-center">
                  {quizStatus === 'correct' && (
                    <div className="text-center animate-in zoom-in duration-300">
                      <p className="text-green-600 font-black text-3xl mb-2 italic">TUYỆT VỜI! CHÍNH XÁC 🌟</p>
                      <p className="text-gray-700 font-bold text-lg">"{currentQuizItem.explanation}"</p>
                    </div>
                  )}
                  {quizStatus === 'wrong' && (
                    <div className="text-center animate-in shake duration-300">
                      <p className="text-red-600 font-black text-3xl mb-2 italic">ỐI! CHƯA ĐÚNG RỒI 🏮</p>
                      <p className="text-gray-600 font-bold">Lượt sau em hãy thử lại nhé!</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8 bg-red-50 border-t-4 border-red-100 flex justify-center">
                <button 
                  onClick={() => setShowQuiz(false)}
                  className={`
                    py-4 px-16 rounded-full font-black text-2xl transition-all shadow-lg uppercase tracking-widest
                    ${quizStatus !== 'idle' ? 'bg-red-600 text-white hover:bg-red-700 border-4 border-yellow-400' : 'bg-gray-400 text-white cursor-not-allowed'}
                  `}
                  disabled={quizStatus === 'idle'}
                >
                  XÁC NHẬN VÀ QUAY LẠI
                </button>
              </div>

              <button 
                onClick={() => setShowQuiz(false)}
                className="absolute top-4 right-8 text-white text-5xl font-black hover:scale-125 transition-transform drop-shadow-lg"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
