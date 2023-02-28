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
        components: [
          {
            internalType: "string",
            name: "winnerId",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Escrow.GameResults",
        name: "gameResults",
        type: "tuple",
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
  "0x6101406040523480156200001257600080fd5b50604051620028db380380620028db8339818101604052810190620000389190620005d1565b6040518060400160405280600a81526020017f4d6f6e65794d61746368000000000000000000000000000000000000000000008152506040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a081815250506200010d8184846200031d60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050866000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180604001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff1681525060016000820151816000019081620001da919062000903565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508360038190555060405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152506005600082015181600001908162000270919062000903565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600781905550600754600354620002d4919062000a19565b600a819055506000600b60006101000a81548160ff0219169083151502179055506000600b60016101000a81548160ff0219169083151502179055505050505050505062000aee565b600083838346306040516020016200033a95949392919062000a91565b6040516020818303038152906040528051906020012090509392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200039a826200036d565b9050919050565b620003ac816200038d565b8114620003b857600080fd5b50565b600081519050620003cc81620003a1565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200042782620003dc565b810181811067ffffffffffffffff82111715620004495762000448620003ed565b5b80604052505050565b60006200045e62000359565b90506200046c82826200041c565b919050565b600067ffffffffffffffff8211156200048f576200048e620003ed565b5b6200049a82620003dc565b9050602081019050919050565b60005b83811015620004c7578082015181840152602081019050620004aa565b60008484015250505050565b6000620004ea620004e48462000471565b62000452565b905082815260208101848484011115620005095762000508620003d7565b5b62000516848285620004a7565b509392505050565b600082601f830112620005365762000535620003d2565b5b815162000548848260208601620004d3565b91505092915050565b60006200055e826200036d565b9050919050565b620005708162000551565b81146200057c57600080fd5b50565b600081519050620005908162000565565b92915050565b6000819050919050565b620005ab8162000596565b8114620005b757600080fd5b50565b600081519050620005cb81620005a0565b92915050565b600080600080600080600060e0888a031215620005f357620005f262000363565b5b6000620006038a828b01620003bb565b975050602088015167ffffffffffffffff81111562000627576200062662000368565b5b620006358a828b016200051e565b9650506040620006488a828b016200057f565b95505060606200065b8a828b01620005ba565b945050608088015167ffffffffffffffff8111156200067f576200067e62000368565b5b6200068d8a828b016200051e565b93505060a0620006a08a828b016200057f565b92505060c0620006b38a828b01620005ba565b91505092959891949750929550565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200071557607f821691505b6020821081036200072b576200072a620006cd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000756565b620007a1868362000756565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620007e4620007de620007d88462000596565b620007b9565b62000596565b9050919050565b6000819050919050565b6200080083620007c3565b620008186200080f82620007eb565b84845462000763565b825550505050565b600090565b6200082f62000820565b6200083c818484620007f5565b505050565b5b8181101562000864576200085860008262000825565b60018101905062000842565b5050565b601f821115620008b3576200087d8162000731565b620008888462000746565b8101602085101562000898578190505b620008b0620008a78562000746565b83018262000841565b50505b505050565b600082821c905092915050565b6000620008d860001984600802620008b8565b1980831691505092915050565b6000620008f38383620008c5565b9150826002028217905092915050565b6200090e82620006c2565b67ffffffffffffffff8111156200092a5762000929620003ed565b5b620009368254620006fc565b6200094382828562000868565b600060209050601f8311600181146200097b576000841562000966578287015190505b620009728582620008e5565b865550620009e2565b601f1984166200098b8662000731565b60005b82811015620009b5578489015182556001820191506020850194506020810190506200098e565b86831015620009d55784890151620009d1601f891682620008c5565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000a268262000596565b915062000a338362000596565b925082820190508082111562000a4e5762000a4d620009ea565b5b92915050565b6000819050919050565b62000a698162000a54565b82525050565b62000a7a8162000596565b82525050565b62000a8b816200038d565b82525050565b600060a08201905062000aa8600083018862000a5e565b62000ab7602083018762000a5e565b62000ac6604083018662000a5e565b62000ad5606083018562000a6f565b62000ae4608083018462000a80565b9695505050505050565b60805160a05160c05160e0516101005161012051611d9d62000b3e6000396000610da501526000610de701526000610dc601526000610cfb01526000610d5101526000610d7a0152611d9d6000f3fe6080604052600436106100dd5760003560e01c8063d134474c1161007f578063dfbf53ae11610059578063dfbf53ae14610268578063f14125a714610293578063f340fa01146102be578063f668f7b9146102da576100dd565b8063d134474c146101fa578063d30895e414610225578063d65ab5f214610251576100dd565b8063649a827f116100bb578063649a827f14610164578063adf0769f1461018f578063b401faf1146101b8578063b9ecbe95146101cf576100dd565b80632f6fe396146100e257806359a5f12d1461010d5780635e123ce414610139575b600080fd5b3480156100ee57600080fd5b506100f7610305565b6040516101049190611132565b60405180910390f35b34801561011957600080fd5b50610122610318565b60405161013092919061121e565b60405180910390f35b34801561014557600080fd5b5061014e6103d2565b60405161015b9190611132565b60405180910390f35b34801561017057600080fd5b506101796103e5565b6040516101869190611267565b60405180910390f35b34801561019b57600080fd5b506101b660048036038101906101b191906112b0565b6103eb565b005b3480156101c457600080fd5b506101cd610803565b005b3480156101db57600080fd5b506101e461090d565b6040516101f19190611267565b60405180910390f35b34801561020657600080fd5b5061020f610913565b60405161021c9190611267565b60405180910390f35b34801561023157600080fd5b5061023a610919565b60405161024892919061121e565b60405180910390f35b34801561025d57600080fd5b506102666109d3565b005b34801561027457600080fd5b5061027d610ace565b60405161028a91906112f9565b60405180910390f35b34801561029f57600080fd5b506102a8610af4565b6040516102b59190611267565b60405180910390f35b6102d860048036038101906102d39190611352565b610afa565b005b3480156102e657600080fd5b506102ef610cb0565b6040516102fc9190611267565b60405180910390f35b600b60019054906101000a900460ff1681565b6005806000018054610329906113ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610355906113ae565b80156103a25780601f10610377576101008083540402835291602001916103a2565b820191906000526020600020905b81548152906001019060200180831161038557829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600b60009054906101000a900460ff1681565b60035481565b600061044e7f1167c4cdd27d4a868dac5501cba3c7bbd69c5090e73a8a295efdf6056b45b9db83806000019061042191906113ee565b604051602001610433939291906114a6565b60405160208183030381529060405280519060200120610cb6565b905060006104ae8284806020019061046691906114d8565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610cd0565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461053e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610535906115ad565b60405180910390fd5b60011515600b60009054906101000a900460ff16151514610594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058b9061163f565b60405180910390fd5b60001515600b60019054906101000a900460ff161515146105ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e1906116ab565b60405180910390fd5b60016000016040516020016105ff919061176e565b6040516020818303038152906040528051906020012083806000019061062591906113ee565b6040516020016106369291906117aa565b60405160208183030381529060405280519060200120036106bb576001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061078a565b60056000016040516020016106d0919061176e565b604051602081830303815290604052805190602001208380600001906106f691906113ee565b6040516020016107079291906117aa565b604051602081830303815290604052805190602001200361078957600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b7f51b77d00d3c0b7e376e9ee146711ceb2c08e58a5dbe38055a618e52109f720c1600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516107db91906112f9565b60405180910390a16001600b60016101000a81548160ff021916908315150217905550505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088a90611835565b60405180910390fd5b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6008546004546108df9190611884565b9081150290604051600060405180830381858888f1935050505015801561090a573d6000803e3d6000fd5b50565b60045481565b600a5481565b600180600001805461092a906113ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610956906113ae565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600b60009054906101000a900460ff1615610a23576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1a90611904565b60405180910390fd5b6001600b60006101000a81548160ff0219169083151502179055507fcc31230e7996101f992c2d8c94915e0df6f91b55aba0eaa74bcdc9eccf3c51d86001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600001600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166005600001604051610ac494939291906119a8565b60405180910390a1565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b6001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bb3576003543414610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611a47565b60405180910390fd5b3460046000828254610ba79190611884565b92505081905550610c6a565b600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c69576007543414610c4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4690611a47565b60405180910390fd5b3460086000828254610c619190611884565b925050819055505b5b8073ffffffffffffffffffffffffffffffffffffffff167f20a3fe276908af20d1fa2f8f48225ac6a1997eb2d38695c580adeb4124a1a59b60405160405180910390a250565b60085481565b6000610cc9610cc3610cf7565b83610e11565b9050919050565b6000806000610cdf8585610e44565b91509150610cec81610e95565b819250505092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610d7357507f000000000000000000000000000000000000000000000000000000000000000046145b15610da0577f00000000000000000000000000000000000000000000000000000000000000009050610e0e565b610e0b7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610ffb565b90505b90565b60008282604051602001610e26929190611ad4565b60405160208183030381529060405280519060200120905092915050565b6000806041835103610e855760008060006020860151925060408601519150606086015160001a9050610e7987828585611035565b94509450505050610e8e565b60006002915091505b9250929050565b60006004811115610ea957610ea8611b0b565b5b816004811115610ebc57610ebb611b0b565b5b0315610ff85760016004811115610ed657610ed5611b0b565b5b816004811115610ee957610ee8611b0b565b5b03610f29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2090611b86565b60405180910390fd5b60026004811115610f3d57610f3c611b0b565b5b816004811115610f5057610f4f611b0b565b5b03610f90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8790611bf2565b60405180910390fd5b60036004811115610fa457610fa3611b0b565b5b816004811115610fb757610fb6611b0b565b5b03610ff7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fee90611c84565b60405180910390fd5b5b50565b60008383834630604051602001611016959493929190611cb3565b6040516020818303038152906040528051906020012090509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561107057600060039150915061110e565b6000600187878787604051600081526020016040526040516110959493929190611d22565b6020604051602081039080840390855afa1580156110b7573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111055760006001925092505061110e565b80600092509250505b94509492505050565b60008115159050919050565b61112c81611117565b82525050565b60006020820190506111476000830184611123565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561118757808201518184015260208101905061116c565b60008484015250505050565b6000601f19601f8301169050919050565b60006111af8261114d565b6111b98185611158565b93506111c9818560208601611169565b6111d281611193565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611208826111dd565b9050919050565b611218816111fd565b82525050565b6000604082019050818103600083015261123881856111a4565b9050611247602083018461120f565b9392505050565b6000819050919050565b6112618161124e565b82525050565b600060208201905061127c6000830184611258565b92915050565b600080fd5b600080fd5b600080fd5b6000604082840312156112a7576112a661128c565b5b81905092915050565b6000602082840312156112c6576112c5611282565b5b600082013567ffffffffffffffff8111156112e4576112e3611287565b5b6112f084828501611291565b91505092915050565b600060208201905061130e600083018461120f565b92915050565b600061131f826111dd565b9050919050565b61132f81611314565b811461133a57600080fd5b50565b60008135905061134c81611326565b92915050565b60006020828403121561136857611367611282565b5b60006113768482850161133d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113c657607f821691505b6020821081036113d9576113d861137f565b5b50919050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261140b5761140a6113df565b5b80840192508235915067ffffffffffffffff82111561142d5761142c6113e4565b5b602083019250600182023603831315611449576114486113e9565b5b509250929050565b6000819050919050565b61146481611451565b82525050565b82818337600083830152505050565b60006114858385611158565b935061149283858461146a565b61149b83611193565b840190509392505050565b60006040820190506114bb600083018661145b565b81810360208301526114ce818486611479565b9050949350505050565b600080833560016020038436030381126114f5576114f46113df565b5b80840192508235915067ffffffffffffffff821115611517576115166113e4565b5b602083019250600182023603831315611533576115326113e9565b5b509250929050565b7f4f6e6c792074686520617262697465722063616e20656e64207468652067616d60008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b6000611597602183611158565b91506115a28261153b565b604082019050919050565b600060208201905081810360008301526115c68161158a565b9050919050565b7f47616d652068617320746f2062652073746172746564206265666f726520656e60008201527f64696e6700000000000000000000000000000000000000000000000000000000602082015250565b6000611629602483611158565b9150611634826115cd565b604082019050919050565b600060208201905081810360008301526116588161161c565b9050919050565b7f47616d6520616c7265616479206f766572000000000000000000000000000000600082015250565b6000611695601183611158565b91506116a08261165f565b602082019050919050565b600060208201905081810360008301526116c481611688565b9050919050565b600081905092915050565b60008190508160005260206000209050919050565b600081546116f8816113ae565b61170281866116cb565b9450600182166000811461171d576001811461173257611765565b60ff1983168652811515820286019350611765565b61173b856116d6565b60005b8381101561175d5781548189015260018201915060208101905061173e565b838801955050505b50505092915050565b600061177a82846116eb565b915081905092915050565b600061179183856116cb565b935061179e83858461146a565b82840190509392505050565b60006117b7828486611785565b91508190509392505050565b7f4f6e6c79207468652077696e6e65722063616e20636c61696d2074686520776960008201527f6e6e696e67732100000000000000000000000000000000000000000000000000602082015250565b600061181f602783611158565b915061182a826117c3565b604082019050919050565b6000602082019050818103600083015261184e81611812565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061188f8261124e565b915061189a8361124e565b92508282019050808211156118b2576118b1611855565b5b92915050565b7f47616d6520616c72656164792073746172746564000000000000000000000000600082015250565b60006118ee601483611158565b91506118f9826118b8565b602082019050919050565b6000602082019050818103600083015261191d816118e1565b9050919050565b60008154611931816113ae565b61193b8186611158565b94506001821660008114611956576001811461196c5761199f565b60ff19831686528115156020028601935061199f565b611975856116d6565b60005b8381101561199757815481890152600182019150602081019050611978565b808801955050505b50505092915050565b60006080820190506119bd600083018761120f565b81810360208301526119cf8186611924565b90506119de604083018561120f565b81810360608301526119f08184611924565b905095945050505050565b7f496e636f72726563742062657420616d6f756e74000000000000000000000000600082015250565b6000611a31601483611158565b9150611a3c826119fb565b602082019050919050565b60006020820190508181036000830152611a6081611a24565b9050919050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611a9d6002836116cb565b9150611aa882611a67565b600282019050919050565b6000819050919050565b611ace611ac982611451565b611ab3565b82525050565b6000611adf82611a90565b9150611aeb8285611abd565b602082019150611afb8284611abd565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611b70601883611158565b9150611b7b82611b3a565b602082019050919050565b60006020820190508181036000830152611b9f81611b63565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611bdc601f83611158565b9150611be782611ba6565b602082019050919050565b60006020820190508181036000830152611c0b81611bcf565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c6e602283611158565b9150611c7982611c12565b604082019050919050565b60006020820190508181036000830152611c9d81611c61565b9050919050565b611cad81611314565b82525050565b600060a082019050611cc8600083018861145b565b611cd5602083018761145b565b611ce2604083018661145b565b611cef6060830185611258565b611cfc6080830184611ca4565b9695505050505050565b600060ff82169050919050565b611d1c81611d06565b82525050565b6000608082019050611d37600083018761145b565b611d446020830186611d13565b611d51604083018561145b565b611d5e606083018461145b565b9594505050505056fea2646970667358221220a8c8e16d9f43b542f0952230efc0604df6686b5eb047cb7560b31bcebccd51f464736f6c63430008110033";

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
