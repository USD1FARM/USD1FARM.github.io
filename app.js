// 需要用户安装MetaMask等以太坊钱包
// 请将下方合约地址替换为你的LotteryPool合约地址
const LOTTERY_CONTRACT_ADDRESS = '0x4dA4A1058B3Ea184733ae8FfE76C1D66f3f9049c';
const CHAIN_EXPLORER = 'https://bscscan.com/address/'; // 可根据实际链更换
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

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            return accounts[0];
        } catch (err) {
            alert('请授权钱包访问');
            return null;
        }
    } else {
        alert('请先安装MetaMask等以太坊钱包插件');
        return null;
    }
}

async function loadLotteryInfo() {
    const userAddress = await connectWallet();
    if (!userAddress) return;

    const provider = new window.ethers.providers.Web3Provider(window.ethereum);
    const contract = new window.ethers.Contract(LOTTERY_CONTRACT_ADDRESS, LOTTERY_ABI, provider);

    try {
        const [info, winners, winnersWinning] = await contract.getAllInfo(userAddress);
        // info[6] 是奖池金额
        document.getElementById('jackpot-amount').innerText =
            Number(window.ethers.utils.formatUnits(info[6], 18)).toLocaleString('zh-CN', { maximumFractionDigits: 2 });

        // 新增信息区块
        // info[4] 上次开奖时间（秒）
        const lastDraw = new Date(Number(info[4]) * 1000);
        document.getElementById('last-draw-time').innerText = lastDraw.toLocaleString('zh-CN');
        // info[1] 总权重
        document.getElementById('total-weight').innerText = Number(info[1]).toLocaleString('zh-CN');
        // info[0] 用户权重
        document.getElementById('user-weight').innerText = Number(info[0]).toLocaleString('zh-CN');

        const winnersList = document.getElementById('winners-list');
        winnersList.innerHTML = '';
        if (winners.length === 0) {
            winnersList.innerHTML = '<div class="winner-placeholder">暂无数据</div>';
        } else {
            for (let i = 0; i < winners.length; i++) {
                const addr = winners[i];
                const winAmount = winnersWinning[i] ? Number(window.ethers.utils.formatUnits(winnersWinning[i], 18)) : 0;
                const div = document.createElement('div');
                div.className = 'winner-address fomo';
                div.innerHTML = `<a href="${CHAIN_EXPLORER}${addr}" target="_blank" title="区块浏览器">${addr.slice(0,6)}...${addr.slice(-4)}</a> <span class="win-amount">+${winAmount.toLocaleString('zh-CN', {maximumFractionDigits:2})} USD1</span>`;
                winnersList.appendChild(div);
            }
        }
    } catch (e) {
        alert('合约信息获取失败，请检查网络和合约地址');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // 检查ethers.js
    if (!window.ethers) {
        const script = document.createElement('script');
        script.src = 'ether.js';
        script.onload = loadLotteryInfo;
        document.body.appendChild(script);
    } else {
        loadLotteryInfo();
    }
}); 
