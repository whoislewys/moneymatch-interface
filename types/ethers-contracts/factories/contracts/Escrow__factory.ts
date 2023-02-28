/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Escrow, EscrowInterface } from "../../contracts/Escrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_arbiter",
        type: "address",
      },
      {
        internalType: "string",
        name: "_player1Id",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_player1Address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_player1BetAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_player2Id",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_player2Address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_player2BetAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositer",
        type: "address",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "winner",
        type: "address",
      },
    ],
    name: "GameEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "player1Address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "player1Id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "player2Address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "player2Id",
        type: "string",
      },
    ],
    name: "GameStarted",
    type: "event",
  },
  {
    inputs: [],
    name: "claimWinnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositorAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_winnerId",
        type: "string",
      },
    ],
    name: "endGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gameEnded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gameStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "player1",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "publicAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "player1BetAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "player1BetBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "player2",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "publicAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "player2BetAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "player2BetBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "winner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnings",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101406040523480156200001257600080fd5b506040516200207e3803806200207e8339818101604052810190620000389190620005d1565b6040518060400160405280600a81526020017f4d6f6e65794d61746368000000000000000000000000000000000000000000008152506040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a081815250506200010d8184846200031d60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050866000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180604001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff1681525060016000820151816000019081620001da919062000903565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508360038190555060405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152506005600082015181600001908162000270919062000903565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600781905550600754600354620002d4919062000a19565b600a819055506000600b60006101000a81548160ff0219169083151502179055506000600b60016101000a81548160ff0219169083151502179055505050505050505062000aee565b600083838346306040516020016200033a95949392919062000a91565b6040516020818303038152906040528051906020012090509392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200039a826200036d565b9050919050565b620003ac816200038d565b8114620003b857600080fd5b50565b600081519050620003cc81620003a1565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200042782620003dc565b810181811067ffffffffffffffff82111715620004495762000448620003ed565b5b80604052505050565b60006200045e62000359565b90506200046c82826200041c565b919050565b600067ffffffffffffffff8211156200048f576200048e620003ed565b5b6200049a82620003dc565b9050602081019050919050565b60005b83811015620004c7578082015181840152602081019050620004aa565b60008484015250505050565b6000620004ea620004e48462000471565b62000452565b905082815260208101848484011115620005095762000508620003d7565b5b62000516848285620004a7565b509392505050565b600082601f830112620005365762000535620003d2565b5b815162000548848260208601620004d3565b91505092915050565b60006200055e826200036d565b9050919050565b620005708162000551565b81146200057c57600080fd5b50565b600081519050620005908162000565565b92915050565b6000819050919050565b620005ab8162000596565b8114620005b757600080fd5b50565b600081519050620005cb81620005a0565b92915050565b600080600080600080600060e0888a031215620005f357620005f262000363565b5b6000620006038a828b01620003bb565b975050602088015167ffffffffffffffff81111562000627576200062662000368565b5b620006358a828b016200051e565b9650506040620006488a828b016200057f565b95505060606200065b8a828b01620005ba565b945050608088015167ffffffffffffffff8111156200067f576200067e62000368565b5b6200068d8a828b016200051e565b93505060a0620006a08a828b016200057f565b92505060c0620006b38a828b01620005ba565b91505092959891949750929550565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200071557607f821691505b6020821081036200072b576200072a620006cd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000756565b620007a1868362000756565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620007e4620007de620007d88462000596565b620007b9565b62000596565b9050919050565b6000819050919050565b6200080083620007c3565b620008186200080f82620007eb565b84845462000763565b825550505050565b600090565b6200082f62000820565b6200083c818484620007f5565b505050565b5b8181101562000864576200085860008262000825565b60018101905062000842565b5050565b601f821115620008b3576200087d8162000731565b620008888462000746565b8101602085101562000898578190505b620008b0620008a78562000746565b83018262000841565b50505b505050565b600082821c905092915050565b6000620008d860001984600802620008b8565b1980831691505092915050565b6000620008f38383620008c5565b9150826002028217905092915050565b6200090e82620006c2565b67ffffffffffffffff8111156200092a5762000929620003ed565b5b620009368254620006fc565b6200094382828562000868565b600060209050601f8311600181146200097b576000841562000966578287015190505b620009728582620008e5565b865550620009e2565b601f1984166200098b8662000731565b60005b82811015620009b5578489015182556001820191506020850194506020810190506200098e565b86831015620009d55784890151620009d1601f891682620008c5565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000a268262000596565b915062000a338362000596565b925082820190508082111562000a4e5762000a4d620009ea565b5b92915050565b6000819050919050565b62000a698162000a54565b82525050565b62000a7a8162000596565b82525050565b62000a8b816200038d565b82525050565b600060a08201905062000aa8600083018862000a5e565b62000ab7602083018762000a5e565b62000ac6604083018662000a5e565b62000ad5606083018562000a6f565b62000ae4608083018462000a80565b9695505050505050565b60805160a05160c05160e051610100516101205161155262000b2c6000396000505060005050600050506000505060005050600050506115526000f3fe6080604052600436106100dd5760003560e01c8063d30895e41161007f578063e9170c3b11610059578063e9170c3b1461026a578063f14125a714610293578063f340fa01146102be578063f668f7b9146102da576100dd565b8063d30895e4146101fc578063d65ab5f214610228578063dfbf53ae1461023f576100dd565b8063649a827f116100bb578063649a827f14610164578063b401faf11461018f578063b9ecbe95146101a6578063d134474c146101d1576100dd565b80632f6fe396146100e257806359a5f12d1461010d5780635e123ce414610139575b600080fd5b3480156100ee57600080fd5b506100f7610305565b6040516101049190610c37565b60405180910390f35b34801561011957600080fd5b50610122610318565b604051610130929190610d23565b60405180910390f35b34801561014557600080fd5b5061014e6103d2565b60405161015b9190610c37565b60405180910390f35b34801561017057600080fd5b506101796103e5565b6040516101869190610d6c565b60405180910390f35b34801561019b57600080fd5b506101a46103eb565b005b3480156101b257600080fd5b506101bb6104f5565b6040516101c89190610d6c565b60405180910390f35b3480156101dd57600080fd5b506101e66104fb565b6040516101f39190610d6c565b60405180910390f35b34801561020857600080fd5b50610211610501565b60405161021f929190610d23565b60405180910390f35b34801561023457600080fd5b5061023d6105bb565b005b34801561024b57600080fd5b5061025461070b565b6040516102619190610d87565b60405180910390f35b34801561027657600080fd5b50610291600480360381019061028c9190610e11565b610731565b005b34801561029f57600080fd5b506102a8610a5a565b6040516102b59190610d6c565b60405180910390f35b6102d860048036038101906102d39190610e9c565b610a60565b005b3480156102e657600080fd5b506102ef610c16565b6040516102fc9190610d6c565b60405180910390f35b600b60019054906101000a900460ff1681565b600580600001805461032990610ef8565b80601f016020809104026020016040519081016040528092919081815260200182805461035590610ef8565b80156103a25780601f10610377576101008083540402835291602001916103a2565b820191906000526020600020905b81548152906001019060200180831161038557829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600b60009054906101000a900460ff1681565b60035481565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461047b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047290610f9b565b60405180910390fd5b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6008546004546104c79190610fea565b9081150290604051600060405180830381858888f193505050501580156104f2573d6000803e3d6000fd5b50565b60045481565b600a5481565b600180600001805461051290610ef8565b80601f016020809104026020016040519081016040528092919081815260200182805461053e90610ef8565b801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6004546003541480156105d15750600854600754145b610610576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610607906110b6565b60405180910390fd5b600b60009054906101000a900460ff1615610660576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065790611122565b60405180910390fd5b6001600b60006101000a81548160ff0219169083151502179055507fcc31230e7996101f992c2d8c94915e0df6f91b55aba0eaa74bcdc9eccf3c51d86001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600001600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600560000160405161070194939291906111db565b60405180910390a1565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b6906112a0565b60405180910390fd5b600b60009054906101000a900460ff1661080e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080590611332565b60405180910390fd5b600b60019054906101000a900460ff161561085e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108559061139e565b60405180910390fd5b6001600001604051602001610873919061144c565b60405160208183030381529060405280519060200120828260405160200161089c929190611497565b6040516020818303038152906040528051906020012003610921576001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506109e2565b6005600001604051602001610936919061144c565b60405160208183030381529060405280519060200120828260405160200161095f929190611497565b60405160208183030381529060405280519060200120036109e157600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b7f51b77d00d3c0b7e376e9ee146711ceb2c08e58a5dbe38055a618e52109f720c1600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051610a339190610d87565b60405180910390a16001600b60016101000a81548160ff0219169083151502179055505050565b60075481565b6001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b19576003543414610afb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610af2906114fc565b60405180910390fd5b3460046000828254610b0d9190610fea565b92505081905550610bd0565b600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bcf576007543414610bb5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bac906114fc565b60405180910390fd5b3460086000828254610bc79190610fea565b925050819055505b5b8073ffffffffffffffffffffffffffffffffffffffff167f20a3fe276908af20d1fa2f8f48225ac6a1997eb2d38695c580adeb4124a1a59b60405160405180910390a250565b60085481565b60008115159050919050565b610c3181610c1c565b82525050565b6000602082019050610c4c6000830184610c28565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c8c578082015181840152602081019050610c71565b60008484015250505050565b6000601f19601f8301169050919050565b6000610cb482610c52565b610cbe8185610c5d565b9350610cce818560208601610c6e565b610cd781610c98565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610d0d82610ce2565b9050919050565b610d1d81610d02565b82525050565b60006040820190508181036000830152610d3d8185610ca9565b9050610d4c6020830184610d14565b9392505050565b6000819050919050565b610d6681610d53565b82525050565b6000602082019050610d816000830184610d5d565b92915050565b6000602082019050610d9c6000830184610d14565b92915050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112610dd157610dd0610dac565b5b8235905067ffffffffffffffff811115610dee57610ded610db1565b5b602083019150836001820283011115610e0a57610e09610db6565b5b9250929050565b60008060208385031215610e2857610e27610da2565b5b600083013567ffffffffffffffff811115610e4657610e45610da7565b5b610e5285828601610dbb565b92509250509250929050565b6000610e6982610ce2565b9050919050565b610e7981610e5e565b8114610e8457600080fd5b50565b600081359050610e9681610e70565b92915050565b600060208284031215610eb257610eb1610da2565b5b6000610ec084828501610e87565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f1057607f821691505b602082108103610f2357610f22610ec9565b5b50919050565b7f4f6e6c79207468652077696e6e65722063616e20636c61696d2074686520776960008201527f6e6e696e67732100000000000000000000000000000000000000000000000000602082015250565b6000610f85602783610c5d565b9150610f9082610f29565b604082019050919050565b60006020820190508181036000830152610fb481610f78565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ff582610d53565b915061100083610d53565b925082820190508082111561101857611017610fbb565b5b92915050565b7f506c6179657273206d7573742068617665206465706f7369746564207468656960008201527f722062657420616d6f756e7473206265666f7265207374617274696e6720746860208201527f652067616d650000000000000000000000000000000000000000000000000000604082015250565b60006110a0604683610c5d565b91506110ab8261101e565b606082019050919050565b600060208201905081810360008301526110cf81611093565b9050919050565b7f47616d6520616c72656164792073746172746564000000000000000000000000600082015250565b600061110c601483610c5d565b9150611117826110d6565b602082019050919050565b6000602082019050818103600083015261113b816110ff565b9050919050565b60008190508160005260206000209050919050565b6000815461116481610ef8565b61116e8186610c5d565b94506001821660008114611189576001811461119f576111d2565b60ff1983168652811515602002860193506111d2565b6111a885611142565b60005b838110156111ca578154818901526001820191506020810190506111ab565b808801955050505b50505092915050565b60006080820190506111f06000830187610d14565b81810360208301526112028186611157565b90506112116040830185610d14565b81810360608301526112238184611157565b905095945050505050565b7f4f6e6c792074686520617262697465722063616e20656e64207468652067616d60008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b600061128a602183610c5d565b91506112958261122e565b604082019050919050565b600060208201905081810360008301526112b98161127d565b9050919050565b7f47616d652068617320746f2062652073746172746564206265666f726520656e60008201527f64696e6700000000000000000000000000000000000000000000000000000000602082015250565b600061131c602483610c5d565b9150611327826112c0565b604082019050919050565b6000602082019050818103600083015261134b8161130f565b9050919050565b7f47616d6520616c7265616479206f766572000000000000000000000000000000600082015250565b6000611388601183610c5d565b915061139382611352565b602082019050919050565b600060208201905081810360008301526113b78161137b565b9050919050565b600081905092915050565b600081546113d681610ef8565b6113e081866113be565b945060018216600081146113fb576001811461141057611443565b60ff1983168652811515820286019350611443565b61141985611142565b60005b8381101561143b5781548189015260018201915060208101905061141c565b838801955050505b50505092915050565b600061145882846113c9565b915081905092915050565b82818337600083830152505050565b600061147e83856113be565b935061148b838584611463565b82840190509392505050565b60006114a4828486611472565b91508190509392505050565b7f496e636f72726563742062657420616d6f756e74000000000000000000000000600082015250565b60006114e6601483610c5d565b91506114f1826114b0565b602082019050919050565b60006020820190508181036000830152611515816114d9565b905091905056fea2646970667358221220d380527e0e50d496fb51fc7d71af27825511bdc522085991f87708749ea1a28d64736f6c63430008110033";

type EscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Escrow__factory extends ContractFactory {
  constructor(...args: EscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _arbiter: PromiseOrValue<string>,
    _player1Id: PromiseOrValue<string>,
    _player1Address: PromiseOrValue<string>,
    _player1BetAmount: PromiseOrValue<BigNumberish>,
    _player2Id: PromiseOrValue<string>,
    _player2Address: PromiseOrValue<string>,
    _player2BetAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Escrow> {
    return super.deploy(
      _arbiter,
      _player1Id,
      _player1Address,
      _player1BetAmount,
      _player2Id,
      _player2Address,
      _player2BetAmount,
      overrides || {}
    ) as Promise<Escrow>;
  }
  override getDeployTransaction(
    _arbiter: PromiseOrValue<string>,
    _player1Id: PromiseOrValue<string>,
    _player1Address: PromiseOrValue<string>,
    _player1BetAmount: PromiseOrValue<BigNumberish>,
    _player2Id: PromiseOrValue<string>,
    _player2Address: PromiseOrValue<string>,
    _player2BetAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _arbiter,
      _player1Id,
      _player1Address,
      _player1BetAmount,
      _player2Id,
      _player2Address,
      _player2BetAmount,
      overrides || {}
    );
  }
  override attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  override connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new utils.Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}
