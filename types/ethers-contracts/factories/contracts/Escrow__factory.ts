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
        internalType: "string",
        name: "_playerId",
        type: "string",
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
  "0x6101406040523480156200001257600080fd5b50604051620029ff380380620029ff8339818101604052810190620000389190620005d1565b6040518060400160405280600a81526020017f4d6f6e65794d61746368000000000000000000000000000000000000000000008152506040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a081815250506200010d8184846200031d60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508061012081815250505050505050866000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060405180604001604052808781526020018673ffffffffffffffffffffffffffffffffffffffff1681525060016000820151816000019081620001da919062000903565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508360038190555060405180604001604052808481526020018373ffffffffffffffffffffffffffffffffffffffff168152506005600082015181600001908162000270919062000903565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505080600781905550600754600354620002d4919062000a19565b600a819055506000600b60006101000a81548160ff0219169083151502179055506000600b60016101000a81548160ff0219169083151502179055505050505050505062000aee565b600083838346306040516020016200033a95949392919062000a91565b6040516020818303038152906040528051906020012090509392505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200039a826200036d565b9050919050565b620003ac816200038d565b8114620003b857600080fd5b50565b600081519050620003cc81620003a1565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200042782620003dc565b810181811067ffffffffffffffff82111715620004495762000448620003ed565b5b80604052505050565b60006200045e62000359565b90506200046c82826200041c565b919050565b600067ffffffffffffffff8211156200048f576200048e620003ed565b5b6200049a82620003dc565b9050602081019050919050565b60005b83811015620004c7578082015181840152602081019050620004aa565b60008484015250505050565b6000620004ea620004e48462000471565b62000452565b905082815260208101848484011115620005095762000508620003d7565b5b62000516848285620004a7565b509392505050565b600082601f830112620005365762000535620003d2565b5b815162000548848260208601620004d3565b91505092915050565b60006200055e826200036d565b9050919050565b620005708162000551565b81146200057c57600080fd5b50565b600081519050620005908162000565565b92915050565b6000819050919050565b620005ab8162000596565b8114620005b757600080fd5b50565b600081519050620005cb81620005a0565b92915050565b600080600080600080600060e0888a031215620005f357620005f262000363565b5b6000620006038a828b01620003bb565b975050602088015167ffffffffffffffff81111562000627576200062662000368565b5b620006358a828b016200051e565b9650506040620006488a828b016200057f565b95505060606200065b8a828b01620005ba565b945050608088015167ffffffffffffffff8111156200067f576200067e62000368565b5b6200068d8a828b016200051e565b93505060a0620006a08a828b016200057f565b92505060c0620006b38a828b01620005ba565b91505092959891949750929550565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200071557607f821691505b6020821081036200072b576200072a620006cd565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000756565b620007a1868362000756565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620007e4620007de620007d88462000596565b620007b9565b62000596565b9050919050565b6000819050919050565b6200080083620007c3565b620008186200080f82620007eb565b84845462000763565b825550505050565b600090565b6200082f62000820565b6200083c818484620007f5565b505050565b5b8181101562000864576200085860008262000825565b60018101905062000842565b5050565b601f821115620008b3576200087d8162000731565b620008888462000746565b8101602085101562000898578190505b620008b0620008a78562000746565b83018262000841565b50505b505050565b600082821c905092915050565b6000620008d860001984600802620008b8565b1980831691505092915050565b6000620008f38383620008c5565b9150826002028217905092915050565b6200090e82620006c2565b67ffffffffffffffff8111156200092a5762000929620003ed565b5b620009368254620006fc565b6200094382828562000868565b600060209050601f8311600181146200097b576000841562000966578287015190505b620009728582620008e5565b865550620009e2565b601f1984166200098b8662000731565b60005b82811015620009b5578489015182556001820191506020850194506020810190506200098e565b86831015620009d55784890151620009d1601f891682620008c5565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600062000a268262000596565b915062000a338362000596565b925082820190508082111562000a4e5762000a4d620009ea565b5b92915050565b6000819050919050565b62000a698162000a54565b82525050565b62000a7a8162000596565b82525050565b62000a8b816200038d565b82525050565b600060a08201905062000aa8600083018862000a5e565b62000ab7602083018762000a5e565b62000ac6604083018662000a5e565b62000ad5606083018562000a6f565b62000ae4608083018462000a80565b9695505050505050565b60805160a05160c05160e0516101005161012051611ec162000b3e6000396000610d6101526000610da301526000610d8201526000610cb701526000610d0d01526000610d360152611ec16000f3fe6080604052600436106100dd5760003560e01c8063b9ecbe951161007f578063d65ab5f211610059578063d65ab5f21461026d578063dfbf53ae14610284578063f14125a7146102af578063f668f7b9146102da576100dd565b8063b9ecbe95146101eb578063d134474c14610216578063d30895e414610241576100dd565b8063649a827f116100bb578063649a827f14610164578063a26e11861461018f578063adf0769f146101ab578063b401faf1146101d4576100dd565b80632f6fe396146100e257806359a5f12d1461010d5780635e123ce414610139575b600080fd5b3480156100ee57600080fd5b506100f7610305565b60405161010491906110ee565b60405180910390f35b34801561011957600080fd5b50610122610318565b6040516101309291906111da565b60405180910390f35b34801561014557600080fd5b5061014e6103d2565b60405161015b91906110ee565b60405180910390f35b34801561017057600080fd5b506101796103e5565b6040516101869190611223565b60405180910390f35b6101a960048036038101906101a49190611387565b6103eb565b005b3480156101b757600080fd5b506101d260048036038101906101cd91906113f4565b61055d565b005b3480156101e057600080fd5b506101e9610975565b005b3480156101f757600080fd5b50610200610a7f565b60405161020d9190611223565b60405180910390f35b34801561022257600080fd5b5061022b610a85565b6040516102389190611223565b60405180910390f35b34801561024d57600080fd5b50610256610a8b565b6040516102649291906111da565b60405180910390f35b34801561027957600080fd5b50610282610b45565b005b34801561029057600080fd5b50610299610c40565b6040516102a6919061143d565b60405180910390f35b3480156102bb57600080fd5b506102c4610c66565b6040516102d19190611223565b60405180910390f35b3480156102e657600080fd5b506102ef610c6c565b6040516102fc9190611223565b60405180910390f35b600b60019054906101000a900460ff1681565b600580600001805461032990611487565b80601f016020809104026020016040519081016040528092919081815260200182805461035590611487565b80156103a25780601f10610377576101008083540402835291602001916103a2565b820191906000526020600020905b81548152906001019060200180831161038557829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600b60009054906101000a900460ff1681565b60035481565b6001600001604051602001610400919061155b565b604051602081830303815290604052805190602001208160405160200161042791906115a3565b60405160208183030381529060405280519060200120036104a4576003543414610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d90611606565b60405180910390fd5b34600460008282546104989190611655565b9250508190555061055a565b60056000016040516020016104b9919061155b565b60405160208183030381529060405280519060200120816040516020016104e091906115a3565b604051602081830303815290604052805190602001200361055957600754341461053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053690611606565b60405180910390fd5b34600860008282546105519190611655565b925050819055505b5b50565b60006105c07f1167c4cdd27d4a868dac5501cba3c7bbd69c5090e73a8a295efdf6056b45b9db8380600001906105939190611698565b6040516020016105a593929190611741565b60405160208183030381529060405280519060200120610c72565b90506000610620828480602001906105d89190611773565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610c8c565b905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a790611848565b60405180910390fd5b60011515600b60009054906101000a900460ff16151514610706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fd906118da565b60405180910390fd5b60001515600b60019054906101000a900460ff1615151461075c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075390611946565b60405180910390fd5b6001600001604051602001610771919061155b565b604051602081830303815290604052805190602001208380600001906107979190611698565b6040516020016107a892919061198b565b604051602081830303815290604052805190602001200361082d576001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108fc565b6005600001604051602001610842919061155b565b604051602081830303815290604052805190602001208380600001906108689190611698565b60405160200161087992919061198b565b60405160208183030381529060405280519060200120036108fb57600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b7f51b77d00d3c0b7e376e9ee146711ceb2c08e58a5dbe38055a618e52109f720c1600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405161094d919061143d565b60405180910390a16001600b60016101000a81548160ff021916908315150217905550505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fc90611a16565b60405180910390fd5b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600854600454610a519190611655565b9081150290604051600060405180830381858888f19350505050158015610a7c573d6000803e3d6000fd5b50565b60045481565b600a5481565b6001806000018054610a9c90611487565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac890611487565b8015610b155780601f10610aea57610100808354040283529160200191610b15565b820191906000526020600020905b815481529060010190602001808311610af857829003601f168201915b5050505050908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b600b60009054906101000a900460ff1615610b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8c90611a82565b60405180910390fd5b6001600b60006101000a81548160ff0219169083151502179055507fcc31230e7996101f992c2d8c94915e0df6f91b55aba0eaa74bcdc9eccf3c51d86001800160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600001600560010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166005600001604051610c369493929190611b26565b60405180910390a1565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60085481565b6000610c85610c7f610cb3565b83610dcd565b9050919050565b6000806000610c9b8585610e00565b91509150610ca881610e51565b819250505092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015610d2f57507f000000000000000000000000000000000000000000000000000000000000000046145b15610d5c577f00000000000000000000000000000000000000000000000000000000000000009050610dca565b610dc77f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610fb7565b90505b90565b60008282604051602001610de2929190611be6565b60405160208183030381529060405280519060200120905092915050565b6000806041835103610e415760008060006020860151925060408601519150606086015160001a9050610e3587828585610ff1565b94509450505050610e4a565b60006002915091505b9250929050565b60006004811115610e6557610e64611c1d565b5b816004811115610e7857610e77611c1d565b5b0315610fb45760016004811115610e9257610e91611c1d565b5b816004811115610ea557610ea4611c1d565b5b03610ee5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610edc90611c98565b60405180910390fd5b60026004811115610ef957610ef8611c1d565b5b816004811115610f0c57610f0b611c1d565b5b03610f4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4390611d04565b60405180910390fd5b60036004811115610f6057610f5f611c1d565b5b816004811115610f7357610f72611c1d565b5b03610fb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610faa90611d96565b60405180910390fd5b5b50565b60008383834630604051602001610fd2959493929190611dd7565b6040516020818303038152906040528051906020012090509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c111561102c5760006003915091506110ca565b6000600187878787604051600081526020016040526040516110519493929190611e46565b6020604051602081039080840390855afa158015611073573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110c1576000600192509250506110ca565b80600092509250505b94509492505050565b60008115159050919050565b6110e8816110d3565b82525050565b600060208201905061110360008301846110df565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611143578082015181840152602081019050611128565b60008484015250505050565b6000601f19601f8301169050919050565b600061116b82611109565b6111758185611114565b9350611185818560208601611125565b61118e8161114f565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111c482611199565b9050919050565b6111d4816111b9565b82525050565b600060408201905081810360008301526111f48185611160565b905061120360208301846111cb565b9392505050565b6000819050919050565b61121d8161120a565b82525050565b60006020820190506112386000830184611214565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6112948261114f565b810181811067ffffffffffffffff821117156112b3576112b261125c565b5b80604052505050565b60006112c661123e565b90506112d2828261128b565b919050565b600067ffffffffffffffff8211156112f2576112f161125c565b5b6112fb8261114f565b9050602081019050919050565b82818337600083830152505050565b600061132a611325846112d7565b6112bc565b90508281526020810184848401111561134657611345611257565b5b611351848285611308565b509392505050565b600082601f83011261136e5761136d611252565b5b813561137e848260208601611317565b91505092915050565b60006020828403121561139d5761139c611248565b5b600082013567ffffffffffffffff8111156113bb576113ba61124d565b5b6113c784828501611359565b91505092915050565b600080fd5b6000604082840312156113eb576113ea6113d0565b5b81905092915050565b60006020828403121561140a57611409611248565b5b600082013567ffffffffffffffff8111156114285761142761124d565b5b611434848285016113d5565b91505092915050565b600060208201905061145260008301846111cb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061149f57607f821691505b6020821081036114b2576114b1611458565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b600081546114e581611487565b6114ef81866114b8565b9450600182166000811461150a576001811461151f57611552565b60ff1983168652811515820286019350611552565b611528856114c3565b60005b8381101561154a5781548189015260018201915060208101905061152b565b838801955050505b50505092915050565b600061156782846114d8565b915081905092915050565b600061157d82611109565b61158781856114b8565b9350611597818560208601611125565b80840191505092915050565b60006115af8284611572565b915081905092915050565b7f496e636f72726563742062657420616d6f756e74000000000000000000000000600082015250565b60006115f0601483611114565b91506115fb826115ba565b602082019050919050565b6000602082019050818103600083015261161f816115e3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006116608261120a565b915061166b8361120a565b925082820190508082111561168357611682611626565b5b92915050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126116b5576116b4611689565b5b80840192508235915067ffffffffffffffff8211156116d7576116d661168e565b5b6020830192506001820236038313156116f3576116f2611693565b5b509250929050565b6000819050919050565b61170e816116fb565b82525050565b60006117208385611114565b935061172d838584611308565b6117368361114f565b840190509392505050565b60006040820190506117566000830186611705565b8181036020830152611769818486611714565b9050949350505050565b600080833560016020038436030381126117905761178f611689565b5b80840192508235915067ffffffffffffffff8211156117b2576117b161168e565b5b6020830192506001820236038313156117ce576117cd611693565b5b509250929050565b7f4f6e6c792074686520617262697465722063616e20656e64207468652067616d60008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b6000611832602183611114565b915061183d826117d6565b604082019050919050565b6000602082019050818103600083015261186181611825565b9050919050565b7f47616d652068617320746f2062652073746172746564206265666f726520656e60008201527f64696e6700000000000000000000000000000000000000000000000000000000602082015250565b60006118c4602483611114565b91506118cf82611868565b604082019050919050565b600060208201905081810360008301526118f3816118b7565b9050919050565b7f47616d6520616c7265616479206f766572000000000000000000000000000000600082015250565b6000611930601183611114565b915061193b826118fa565b602082019050919050565b6000602082019050818103600083015261195f81611923565b9050919050565b600061197283856114b8565b935061197f838584611308565b82840190509392505050565b6000611998828486611966565b91508190509392505050565b7f4f6e6c79207468652077696e6e65722063616e20636c61696d2074686520776960008201527f6e6e696e67732100000000000000000000000000000000000000000000000000602082015250565b6000611a00602783611114565b9150611a0b826119a4565b604082019050919050565b60006020820190508181036000830152611a2f816119f3565b9050919050565b7f47616d6520616c72656164792073746172746564000000000000000000000000600082015250565b6000611a6c601483611114565b9150611a7782611a36565b602082019050919050565b60006020820190508181036000830152611a9b81611a5f565b9050919050565b60008154611aaf81611487565b611ab98186611114565b94506001821660008114611ad45760018114611aea57611b1d565b60ff198316865281151560200286019350611b1d565b611af3856114c3565b60005b83811015611b1557815481890152600182019150602081019050611af6565b808801955050505b50505092915050565b6000608082019050611b3b60008301876111cb565b8181036020830152611b4d8186611aa2565b9050611b5c60408301856111cb565b8181036060830152611b6e8184611aa2565b905095945050505050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000611baf6002836114b8565b9150611bba82611b79565b600282019050919050565b6000819050919050565b611be0611bdb826116fb565b611bc5565b82525050565b6000611bf182611ba2565b9150611bfd8285611bcf565b602082019150611c0d8284611bcf565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611c82601883611114565b9150611c8d82611c4c565b602082019050919050565b60006020820190508181036000830152611cb181611c75565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611cee601f83611114565b9150611cf982611cb8565b602082019050919050565b60006020820190508181036000830152611d1d81611ce1565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611d80602283611114565b9150611d8b82611d24565b604082019050919050565b60006020820190508181036000830152611daf81611d73565b9050919050565b6000611dc182611199565b9050919050565b611dd181611db6565b82525050565b600060a082019050611dec6000830188611705565b611df96020830187611705565b611e066040830186611705565b611e136060830185611214565b611e206080830184611dc8565b9695505050505050565b600060ff82169050919050565b611e4081611e2a565b82525050565b6000608082019050611e5b6000830187611705565b611e686020830186611e37565b611e756040830185611705565b611e826060830184611705565b9594505050505056fea26469706673582212203b51d0c788473a1ea223e7992cb8f4af1d64f4817a47ce7bbd26f26ca99f0ab064736f6c63430008110033";

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
