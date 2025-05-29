// 合约配置
const CONTRACT_ADDRESS = '0x93fa672A6dA76e14E58dC05D8588E0ab7FB7e107'; // 替换为实际合约地址
const CONTRACT_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "EnforcedPause",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ExpectedPause",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InvalidInitialization",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotInitializing",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "version",
				"type": "uint64"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "EGGS_TO_HATCH_1MINERS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PSN",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PSNH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ref",
				"type": "address"
			}
		],
		"name": "buy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuySimple",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "calculateEggSell",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "bs",
				"type": "uint256"
			}
		],
		"name": "calculateTrade",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "claimedEggs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "devFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getEggsSinceLastHatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyEggs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyMiners",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "getTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "ref",
				"type": "address"
			}
		],
		"name": "hatchEggs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hatcheryMiners",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "lastHatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "limit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketEggs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seedMarket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_limit",
				"type": "uint256"
			}
		],
		"name": "setLimit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTrade",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usd1Address",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// 请在此处填写USD1代币合约ABI和地址
const USD1_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"freeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"frozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unfreeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const USD1_ADDRESS = '0x8d0D000Ee44948FC98c9B98A4FA4921476f08B0d';
// const USD1_ADDRESS = '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814';

const ETH1 = 864000;
const EGGS_PER_DAY_PER_HEN = 86400;

// Web3实例和合约实例
let web3;
let contract;
let userAccount;
let userInfoCache = null;

// 初始化
window.addEventListener('load', async () => {
    // 检查是否有Web3
    if (typeof window.ethereum !== 'undefined') {
        connectWallet();
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        

        // 检查是否已连接
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            userAccount = accounts[0];
            onWalletConnected();
        }
        
        // 监听账户变化
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                userAccount = accounts[0];
                onWalletConnected();
            } else {
                onWalletDisconnected();
            }
        });
    }
    
    // 绑定事件
    document.getElementById('connectWallet').addEventListener('click', connectWallet);
    document.getElementById('buyEggs').addEventListener('click', buyEggs);
    document.getElementById('hatchEggs').addEventListener('click', hatchEggs);
    document.getElementById('sellEggs').addEventListener('click', sellEggs);
    document.getElementById('copyRef').addEventListener('click', copyReferralLink);
    document.getElementById('buyAmount').addEventListener('input', updateBuyEstimate);
    document.querySelectorAll('.quick-buy').forEach(btn => {
        btn.addEventListener('click', function() {
            document.getElementById('buyAmount').value = this.dataset.amount;
            updateBuyEstimate();
        });
    });
    
    // 定时更新数据
    setInterval(updateData, 5000);
});

// 连接钱包
async function connectWallet() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];
        onWalletConnected();
    } catch (error) {
        console.error('连接钱包失败:', error);
        showToast('连接钱包失败，请重试');
    }
}

// 钱包连接成功
function onWalletConnected() {
    // 隐藏连接按钮，显示地址
    document.getElementById('connectWallet').style.display = 'none';
    document.getElementById('walletAddress').style.display = 'block';
    document.querySelector('.address-text').textContent = 
        userAccount.substring(0, 6) + '...' + userAccount.substring(38);
    
    // 更新邀请链接
    const refLink = `${window.location.origin}/?ref=${userAccount}`;
    document.getElementById('refLink').value = refLink;
    
    // 加载用户数据
    loadUserInfo();
    loadContractData();

}

// 钱包断开连接
function onWalletDisconnected() {
    document.getElementById('connectWallet').style.display = 'block';
    document.getElementById('walletAddress').style.display = 'none';
    userAccount = null;
}

// 加载用户数据
async function loadUserInfo() {
    if (!userAccount || !contract) return;
    try {
        // getUserInfo返回(uint256[] memory, address[] memory)
        // 0: 累积鸡蛋 1: 母鸡 2: 市场鸡蛋 3: 合约余额 4: 鸡蛋价值 5: 1蛋价值 6: 1U可买蛋数
        const res = await contract.methods.getUserInfo(userAccount).call({ from: userAccount });
        const u = res[0];
        userInfoCache = u;
        console.log("userInfoCache", userInfoCache);
        // 母鸡数量
        document.getElementById('myHens').textContent = formatNumber(u[1]);
        document.getElementById('eggspersecond').textContent = formatNumber(u[1]);
        // 母鸡每天产蛋
        document.getElementById('hensDailyEggs').textContent = `每天产蛋：${formatNumber(u[1] * EGGS_PER_DAY_PER_HEN)} 颗`;
        // 鸡蛋数量
        document.getElementById('myEggs').textContent = formatNumber(u[0]);
        // 可孵化母鸡数
        document.getElementById('canHatchInfo').textContent = `可孵化 ${Math.floor(u[0] / ETH1)} 只母鸡`;
        // 卖出鸡蛋预估价值
        document.getElementById('sellEstimate').textContent = `预估收益：${Number(toNonExponential(Number(web3.utils.fromWei(u[4], 'ether')).toFixed(5)))} USD1`;

    } catch (error) {
        console.error('加载用户数据失败:', error);
    }
}

// 加载合约数据
async function loadContractData() {
    if (!contract) return;
    
    try {
        // getUserInfo返回的市场鸡蛋/合约余额/1蛋价值
        let u = userInfoCache;
        if (!u) {
            const res = await contract.methods.getUserInfo(userAccount).call({ from: userAccount });
            u = res[0];
        }
        updateBuyEstimate();

        document.getElementById('contractBalance').textContent = formatNumber(web3.utils.fromWei(u[3], 'ether')) + ' USD1';
        document.getElementById('marketEggs').textContent = formatNumber(u[2]);
        document.getElementById('eggPrice').textContent = toNonExponential((u[5] / 1e18).toFixed(9)) + ' USD1';
    } catch (error) {
        console.error('加载合约数据失败:', error);
    }
}

// 购买鸡蛋
async function buyEggs() {
    if (!userAccount) {
        showToast('请先连接钱包');
        return;
    }
    const amount = document.getElementById('buyAmount').value;
    if (!amount || amount <= 0) {
        showToast('请输入购买数量');
        return;
    }
    try {
        // 获取推荐人地址
        let ref = null;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('ref')) {
            ref = urlParams.get('ref');
        } else if (localStorage.getItem('ref')) {
            ref = localStorage.getItem('ref');
        } else {
            ref = '0x0000000000000000000000000000000000000000';
        }
        const amountWei = web3.utils.toWei(amount, 'ether');
        // 检查授权额度
        const usd1 = new web3.eth.Contract(USD1_ABI, USD1_ADDRESS);
        const allowance = await usd1.methods.allowance(userAccount, CONTRACT_ADDRESS).call();
        if (BigInt(allowance) < BigInt(amountWei)) {
            showToast('正在给予转账额度');
            await usd1.methods.approve(CONTRACT_ADDRESS, web3.utils.toWei('100000', 'ether')).send({from: userAccount});
        }
        // 预估gas
        try {
            await contract.methods.buy(amountWei, ref).estimateGas({from: userAccount});
        } catch (e) {
            showToast('Gas预估失败: ' + (e?.message || e));
            return;
        }
        showToast('正在购买鸡蛋孵化');
        await contract.methods.buy(amountWei, ref).send({ from: userAccount });
        showToast('购买成功！');
        loadUserInfo();
        loadContractData();
    } catch (error) {
        console.error('购买失败:', error);
        showToast('购买失败，请重试');
    }
}

// 孵化鸡蛋
async function hatchEggs() {
    if (!userAccount) {
        showToast('请先连接钱包');
        return;
    }
    try {
        // 获取推荐人地址
        let ref = null;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('ref')) {
            ref = urlParams.get('ref');
        } else if (localStorage.getItem('ref')) {
            ref = localStorage.getItem('ref');
        } else {
            ref = '0x0000000000000000000000000000000000000000';
        }
        // 预估gas
        try {
            await contract.methods.hatchEggs(ref).estimateGas({from: userAccount});
        } catch (e) {
            showToast('Gas预估失败: ' + (e?.message || e));
            return;
        }
        showToast('正在孵化母鸡');
        await contract.methods.hatchEggs(ref).send({ from: userAccount });
        showToast('孵化成功！');
        loadUserInfo();
    } catch (error) {
        console.error('孵化失败:', error);
        showToast('孵化失败，请重试');
    }
}

// 卖出鸡蛋
async function sellEggs() {
    if (!userAccount) {
        showToast('请先连接钱包');
        return;
    }
    
    try {
        await contract.methods.sell().send({ from: userAccount });
        
        showToast('卖出成功！');
        loadUserInfo();
        loadContractData();
    } catch (error) {
        console.error('卖出失败:', error);
        showToast('卖出失败，请重试');
    }
}

// 复制邀请链接
function copyReferralLink() {
    const refInput = document.getElementById('refLink');
    refInput.select();
    document.execCommand('copy');
    showToast('已复制');
}

function updateBuyEstimate() {
    
    const amount = document.getElementById('buyAmount').value;
    console.log("amount", amount);
    if (!amount || !userInfoCache) {
        document.getElementById('buyEstimate').textContent = '';
        console.log("!userInfoCache");
        return;
    }
    // userInfoCache[6] = 1U能买多少蛋
    const eggs = Math.floor(amount * userInfoCache[6]);
    document.getElementById('buyEstimate').textContent = `约可获得 ${(formatNumber(eggs/ETH1))} 只母鸡`;
}

// 更新数据（每秒调用）
function updateData() {
    if (!userAccount) return;
    
    loadUserInfo();
    loadContractData();
}

// 格式化数字
function formatNumber(num) {
    if (!num) return '0';
    return parseInt(num).toLocaleString('zh-CN');
}

function toNonExponential(num) {
    if (typeof num === 'string') num = num.toString();
    if (num === undefined || num === null) return '0';
    let n = num.toString();
    if (n.indexOf('e') !== -1) {
        let fixed = Number(num).toFixed(18);
        fixed = fixed.replace(/0+$/, '');
        return fixed;
    }
    return n;
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.pointerEvents = 'none';
        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 400);
    }, 2000);
}
