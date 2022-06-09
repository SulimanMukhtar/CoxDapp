

var submit = document.getElementById("mintButton");
var amount = document.getElementById('amount');
var connect = document.getElementById("ConnectBTN");
var counter = document.getElementById("counter");
var Account = document.getElementById("account");
var result = document.getElementById("result");
var mintProgressBar = document.getElementById('mintProgressBar')
var mintTotalsupply = document.getElementById('totalsupply')
let ShowResult = document.getElementById('ShowResult');
var ProgressWidth;
// result.style.display = "none";

function hideobject(objectid) {
    console.log('clicked close button')
    document.getElementById(objectid).style.display = 'none'
}

function setProgressbarSupply(mintNumber) {
    mintProgressBar.ariaValueNow = mintNumber
    mintTotalsupply.innerHTML = mintNumber
    ProgressWidth = mintNumber / 6969 * 100;
    mintProgressBar.style.width = ProgressWidth + "%";
}

function addsupply(mintNumber) {
    mintProgressBar.ariaValueNow = parseInt(mintProgressBar.ariaValueNow) + mintNumber
    mintTotalsupply.innerHTML = mintProgressBar.ariaValueNow
}
// setProgressbarSupply(2278)
// addsupply(8)

const Contract = "0x35C8e7398A2e491eA355baB5aE657B6456F51AB3";
const ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_publicCost",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_publicMax",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_maxAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_maxFree",
                "type": "uint256"
            }
        ],
        "name": "Set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_newBaseExtension",
                "type": "string"
            }
        ],
        "name": "setBaseExtension",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_newBaseURI",
                "type": "string"
            }
        ],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_freeQuantity",
                "type": "uint256"
            }
        ],
        "name": "setFreeQuantity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_state",
                "type": "bool"
            }
        ],
        "name": "setPaused",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "teamReserve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
        "name": "baseExtension",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "freeQuantity",
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
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
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
        "inputs": [],
        "name": "maxAmount",
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
        "name": "maxFree",
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
        "name": "maxPublic",
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
        "name": "maxSupply",
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
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
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
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
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
        "inputs": [],
        "name": "publicCost",
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
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
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
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TeamReserve",
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
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
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
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
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
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


const isMetaMaskConnected = async () => {

    const accounts = await provider.listAccounts();
    return accounts.length > 0;
}

if (window.ethereum) {
    var provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    var signer = provider.getSigner();

    var instance = new ethers.Contract(Contract, ABI, signer);


    isMetaMaskConnected().then(async (connected) => {
        if (connected) {

            getAccount();

        } else {

            console.log('Not Connected');
            submit.style.display = "none";
            connect.style.display = "flex";



        } {

        }
    });

    ethereum.on('disconnect', () => window.location.reload());
    ethereum.on('accountsChanged', () => window.location.reload());
    ethereum.on('networkChanged', () => window.location.reload());
} else {
    // if no window.ethereum then MetaMask is not installed
    // MainForm.style.display = "none";


    submit.style.display = "none";
    connect.style.display = "flex";



    // MainForm.style.display = "block";


    // alert(
    //     "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
    // );
}


let account;
let balance;

console.log(instance);



// console.log(signer);




async function switchNetwork() {

    // Check if MetaMask is installed
    // MetaMask injects the global API into window.ethereum
    if (window.ethereum) {

        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x1' }],
            });

        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4001) {
                console.log("Please Switch To Ethereum Mainnet");
            }
            // handle other "switch" errors
        }
    } else {
        // if no window.ethereum then MetaMask is not installed
        // alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }

}


async function getAccount() {
    switchNetwork();
    let from = await instance.totalSupply();
    let to = await instance.maxSupply();
    setProgressbarSupply(from)

    account = await signer.getAddress();
    balance = await signer.getBalance();
    // account = ` ${account.substring(0, 5)}***${account.substring(account.length - 5)}`
    Account.innerHTML = ` ${account.substring(0, 5)}***${account.substring(account.length - 5)}`;

    connect.style.display = "none";
    balance = balance.toString() / 10 ** 18;

    console.log(account);
    console.log(balance.toString() / 10 ** 18);
    submit.style.display = "flex";

}

async function Mint() {


    await switchNetwork();

    let account = await signer.getAddress();
    // let price = 280000000000000000; 
    // let price = ethers.utils.parseUnits("0", 18); //Whitelist Price
    let price = await instance.publicCost();;
    let ETHPaid = 0;
    console.log(account);

    let balance = await instance.balanceOf(account);
    balance = balance.toString();
    console.log(balance);
    let freeAmount = await instance.maxFree();

    if (amount.value > 1) {
        console.log("More than 1");
        if (balance == 0) {
            console.log("Balance is 0");
            let Amount = amount.value - freeAmount;
            ETHPaid = price * Amount / 10 ** 18;
        } else {
            console.log("Balance is not 0");
            ETHPaid = price * amount.value / 10 ** 18;
        }
    } else {
        console.log("amount is 1");
        if (balance == 0) {
            console.log("Balance is 0");
            ETHPaid = 0;
        } else {
            ETHPaid = price * amount.value / 10 ** 18;
        }
    }


    await instance.mint(amount.value, { value: ethers.utils.parseUnits(ETHPaid.toString()) })
        .then(function (Result) {
            console.log(Result);
            // result.style.display = "block";
            let hash = Result.hash;
            document.getElementById('lovecox').style.display = 'block';
            // ShowResult.innerHTML = "COX Minted Successfully . <a href='https://www.etherscan.io/tx/" + hash + "'>Transaction</a>";
            // result.style.display = "flex";

            console.log(hash);
        })
        .catch((error) => {
            console.log(error);
            if (error.error) {
                if (error.error.code === -32603) {
                    alert(error.error.message.slice(20));
                    ShowResult.innerHTML = error.error.message.slice(20);
                } else if (error.error.code === -32000) {
                    //ShowResult.innerHTML = "Insufficient funds";
                    document.getElementById('oops-popup').style.display = 'block';

                } else {
                    console.log("???");
                }
            } else if (error.code === 4001) {
                //ShowResult.innerHTML = "Mint Canceled , Please Try Again";
                document.getElementById('sad-popup').style.display = 'block';
            }

        });


}


submit.addEventListener("click", Mint);


connect.addEventListener("click", async function (e) {
    try {
        switchNetwork();

        console.log("Trying to connect");
        if (window.ethereum) {
            console.log("Trying to connect to MetaMask");
            var provider = new ethers.providers.Web3Provider(window.ethereum, "any");

            var signer = provider.getSigner();

            var instance = new ethers.Contract(Contract, ABI, signer);
            await provider.send("eth_requestAccounts", []);

        }
        getAccount();

    } catch (e) {
        if (e.code === 4001) {
            ShowResult.innerHTML = "Please Connect Your Wallet";
        } else if (e.code === -32002) {

            alert("Please Wait");
        }
    }

});
