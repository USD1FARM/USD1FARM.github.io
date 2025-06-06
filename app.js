const LOTTERY_CONTRACT_ADDRESS = '0x4dA4A1058B3Ea184733ae8FfE76C1D66f3f9049c';
const CHAIN_EXPLORER = 'https://bscscan.com/address/'; 
const LOTTERY_ABI = [
    // 只包含getAllInfo方法的ABI片段
    {
        "inputs": [
            { "internalType": "address", "name": "user", "type": "address" }
        ],
        "name": "getAllInfo",
        "outputs": [
            { "internalType": "uint256[]", "name": "", "type": "uint256[]" },
            { "internalType": "address[]", "name": "", "type": "address[]" },
            { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// 更新状态指示器
function updateStatusIndicator(status, message) {
    const indicator = document.getElementById('status-indicator');
    if (!indicator) return;
    
    switch (status) {
        case 'loading':
            indicator.innerHTML = '🔄 加载中...';
            indicator.style.color = '#f59e0b';
            indicator.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
            indicator.style.borderColor = 'rgba(245, 158, 11, 0.2)';
            break;
        case 'connected':
            indicator.innerHTML = '🟢 实时连接';
            indicator.style.color = '#10b981';
            indicator.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            indicator.style.borderColor = 'rgba(16, 185, 129, 0.2)';
            break;
        case 'wallet-connected':
            indicator.innerHTML = `👛 ${message}`;
            indicator.style.color = '#10b981';
            indicator.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            indicator.style.borderColor = 'rgba(16, 185, 129, 0.2)';
            break;
        case 'error':
            indicator.innerHTML = '🔴 连接失败';
            indicator.style.color = '#ef4444';
            indicator.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            indicator.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            break;
        case 'wallet':
            indicator.innerHTML = '👛 请连接钱包';
            indicator.style.color = '#8b5cf6';
            indicator.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
            indicator.style.borderColor = 'rgba(139, 92, 246, 0.2)';
            break;
    }
}

// 添加动画效果到奖池金额
function animateJackpot(amount) {
    const jackpotElement = document.getElementById('jackpot-amount');
    const currentAmount = parseFloat(jackpotElement.textContent.replace(/[,，]/g, '')) || 0;
    const targetAmount = parseFloat(amount);
    
    if (currentAmount !== targetAmount) {
        let start = currentAmount;
        const increment = (targetAmount - start) / 30; // 30帧动画
        let frame = 0;
        
        function animate() {
            if (frame < 30) {
                start += increment;
                jackpotElement.textContent = Number(start).toLocaleString('zh-CN', { 
                    maximumFractionDigits: 2, 
                    minimumFractionDigits: 2 
                });
                frame++;
                requestAnimationFrame(animate);
            } else {
                jackpotElement.textContent = Number(targetAmount).toLocaleString('zh-CN', { 
                    maximumFractionDigits: 2, 
                    minimumFractionDigits: 2 
                });
            }
        }
        animate();
    }
}

async function connectWallet() {
    if (window.ethereum) {
        try {
            updateStatusIndicator('loading', '正在连接钱包...');
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            updateStatusIndicator('connected', '钱包已连接');
            return accounts[0];
        } catch (err) {
            updateStatusIndicator('error', '用户拒绝连接');
            alert('请授权钱包访问以获取完整功能');
            return null;
        }
    } else {
        updateStatusIndicator('wallet', '未安装钱包');
        alert('请先安装MetaMask等以太坊钱包插件');
        return null;
    }
}

// 公告栏功能
class AnnouncementManager {
    constructor() {
        this.announcements = [
            { id: 2, text: "6月5日 - 修复了一点小问题", type: "info" },
            { id: 3, text: "6月4日 - 更新网页UI", type: "security" },
            { id: 4, text: "6月3日 - 优化开奖gas", type: "reward" }
        ];
        this.currentIndex = 0;
        this.autoRotate = false;
    }

    // 添加新公告
    addAnnouncement(text, type = "info") {
        const newId = Math.max(...this.announcements.map(a => a.id)) + 1;
        this.announcements.unshift({ id: newId, text, type });
        this.updateDisplay();
    }

    // 更新显示
    updateDisplay() {
        const content = document.querySelector('.announcement-content');
        if (!content) return;

        content.innerHTML = '';
        this.announcements.forEach((announcement, index) => {
            const item = document.createElement('div');
            item.className = 'announcement-item';
            item.style.animationDelay = `${0.4 + index * 0.1}s`;
            
            item.innerHTML = `
                <span class="announcement-dot"></span>
                <span class="announcement-text">${announcement.text}</span>
            `;
            
            content.appendChild(item);
        });
    }
}

function addAnnouncementStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .announcement-item.highlighted {
            background: rgba(102, 126, 234, 0.1);
            border-radius: 12px;
            padding: 16px 12px;
            transform: translateX(8px);
            box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
        }
        
        .announcement-item.highlighted .announcement-dot {
            animation: highlightPulse 1s ease-in-out;
        }
        
        @keyframes highlightPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.5); }
        }
    `;
    document.head.appendChild(style);
}

// 初始化公告管理器
let announcementManager;

async function loadLotteryInfo() {
    try {
        updateStatusIndicator('loading', '正在获取数据...');
        
        if (!window.ethereum) {
            updateStatusIndicator('wallet', '未安装钱包');
            // 仍然可以显示部分信息，但不显示用户特定数据
            document.getElementById('user-weight').innerText = '请安装钱包';
            return;
        }

        // 连接钱包
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const userAddress = accounts[0];

        // 用 window.ethereum 初始化 Web3
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(LOTTERY_ABI, LOTTERY_CONTRACT_ADDRESS);

        const result = await contract.methods.getAllInfo(userAddress).call();
        // result[0]: info(uint256[])
        // result[1]: winners(address[])
        // result[2]: winnersWinning(uint256[])
        const info = result[0];
        const winners = result[1];
        const winnersWinning = result[2];

        // 动画更新奖池金额
        const jackpotAmount = Number(web3.utils.fromWei(info[6], 'ether'));
        animateJackpot(jackpotAmount);

        // 更新信息区块
        const lastDraw = new Date(Number(info[4]) * 1000);
        const now = new Date();
        const isRecent = (now - lastDraw) < 3600000; // 1小时内
        
        document.getElementById('last-draw-time').innerText = lastDraw.toLocaleString('zh-CN');
        document.getElementById('total-weight').innerText = Number(info[1]).toLocaleString('zh-CN');
        document.getElementById('user-weight').innerText = Number(info[0]).toLocaleString('zh-CN');

        // 更新中奖者列表
        const winnersList = document.getElementById('winners-list');
        winnersList.innerHTML = '';
        
        if (winners.length === 0) {
            winnersList.innerHTML = '<div class="winner-placeholder">🔍 暂无中奖记录</div>';
        } else {
            for (let i = 0; i < Math.min(winners.length, 10); i++) { // 最多显示10个
                const addr = winners[i];
                if (addr.toLowerCase() === '0xf48b408d66CCA4956C4fE243cE577c739eA5A2ff'.toLowerCase()) {
                    continue;
                }
                const winAmount = winnersWinning[i] ? web3.utils.fromWei(winnersWinning[i], 'ether') : 0;
                const div = document.createElement('div');
                div.className = 'winner-address fomo';
                div.innerHTML = `
                    <a href="${CHAIN_EXPLORER}${addr}" target="_blank" title="在区块浏览器中查看">
                        ${addr.slice(0,6)}...${addr.slice(-4)}
                    </a> 
                    <span class="win-amount">+${Number(winAmount).toLocaleString('zh-CN', {maximumFractionDigits:2})} USD1</span>
                `;
                
                // 添加进入动画
                div.style.opacity = '0';
                div.style.transform = 'translateY(20px)';
                winnersList.appendChild(div);
                
                setTimeout(() => {
                    div.style.transition = 'all 0.5s ease-out';
                    div.style.opacity = '1';
                    div.style.transform = 'translateY(0)';
                }, i * 100);
            }
        }

        const shortAddress = `${userAddress.slice(0,6)}...${userAddress.slice(-4)}`;
        updateStatusIndicator('wallet-connected', shortAddress);
        
    } catch (e) {
        console.error('获取合约信息失败:', e);
        updateStatusIndicator('error', '获取数据失败');
        
        // 显示友好的错误信息
        if (e.message.includes('network')) {
            alert('网络连接错误，请检查网络设置');
        } else if (e.message.includes('contract')) {
            alert('合约连接失败，请检查合约地址');
        } else {
            alert('数据获取失败，请稍后重试');
        }
    }
}

// 自动刷新数据
function startAutoRefresh() {
    // 每30秒刷新一次数据
    setInterval(async () => {
        try {
            await loadLotteryInfo();
        } catch (e) {
            console.error('自动刷新失败:', e);
        }
    }, 30000);
}

window.addEventListener('DOMContentLoaded', () => {
    announcementManager = new AnnouncementManager();
    addAnnouncementStyles();
    announcementManager.updateDisplay();

    // 检查web3.js
    if (typeof window.Web3 === 'undefined') {
        const script = document.createElement('script');
        script.src = './web3.min.js';
        script.onload = () => {
            loadLotteryInfo();
            startAutoRefresh();
        };
        script.onerror = () => {
            updateStatusIndicator('error', 'Web3加载失败');
            alert('Web3.js 加载失败，请检查网络连接');
        };
        document.body.appendChild(script);
    } else {
        loadLotteryInfo();
        startAutoRefresh();
    }

    // 监听账户变化
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                loadLotteryInfo();
            } else {
                updateStatusIndicator('wallet', '请连接钱包');
            }
        });

        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
}); 
