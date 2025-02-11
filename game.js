// 灯谜题目和答案
const riddles = [
    { question: "圆圆甜甜心里藏，元宵佳节送情长，你若猜中我的心，此生与你共月光，猜一物", answer: "汤圆" },
    { question: "一盏花灯亮又明，照见我心似月清，你若猜中灯下意，此生与你共前行，猜一物", answer: "心灯" },
    { question: "元宵月圆人团圆，我心只为你缠绵，猜中此谜不解语，只因情意在眼前，猜一物", answer: "喜欢你" },
    { question: "一只动物胖又圆，耳朵大大像蒲扇，尾巴短短像绳子，最爱睡觉不爱动，猜一物", answer: "猪" }
];

let currentRiddle = 0;
let correctAnswers = 0;  // 用来记录答对的题目数

// 获取页面元素
const riddleElement = document.getElementById('riddle');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart');
const musicControlButton = document.getElementById('music-control');
const bgMusic = document.getElementById('bg-music');
const resultElement = document.getElementById('result');

// 显示灯谜
function displayRiddle() {
    const riddle = riddles[currentRiddle];
    riddleElement.textContent = riddle.question;
    feedbackElement.textContent = '';
    answerElement.value = '';
    submitButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
}

// 提交答案
function checkAnswer() {
    const answer = answerElement.value.trim();
    const correctAnswer = riddles[currentRiddle].answer;

    // 判断用户输入的答案是否正确
    if (answer === correctAnswer) {
        feedbackElement.textContent = "答对了！"; // 显示答对了
        correctAnswers++;  // 增加答对的数量
    } else {
        feedbackElement.textContent = `答错了，正确答案是：${correctAnswer}`;  // 显示答错了
    }

    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

// 显示下一个灯谜
function nextRiddle() {
    currentRiddle++;

    if (currentRiddle < riddles.length) {
        displayRiddle();
    } else {
        feedbackElement.textContent = "恭喜你完成了所有灯谜！元宵节快乐！";
        nextButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
        showResult();
    }
}

// 重启游戏
function restartGame() {
    currentRiddle = 0;
    correctAnswers = 0;  // 重置答对数量
    displayRiddle();
    restartButton.style.display = 'none';
    resultElement.innerHTML = '';  // 清空结果
}

// 显示爱心或猪
function showResult() {
    if (correctAnswers === riddles.length) {
        resultElement.innerHTML = '<img src="C:/Users/CC/Desktop/YuanXiao/images/1.png" alt="答对了奖励个么么哒" class="result-image">';  // 小爱心图片
    } else {
        resultElement.innerHTML = '<img src="iC:/Users/CC/Desktop/YuanXiao/images/1.png" alt="果然是大猪蹄子" class="result-image">';  // 小猪图片
    }
}

// 初始化游戏
displayRiddle();

// 绑定按钮事件
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextRiddle);
restartButton.addEventListener('click', restartGame);

// 控制音乐播放
musicControlButton.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControlButton.textContent = '暂停音乐';
    } else {
        bgMusic.pause();
        musicControlButton.textContent = '播放音乐';
    }
});