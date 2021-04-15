init code hash
4fe36116b38bf844d62171adbf27af0a91ea69f2fc204c2d54efdddeab4a7432

factory
0xd882faf5213061d1dEeB42C6aEf54461C36BF257

router
0x121409Cf16dD87035A161b539B9B7f99f3999a54

WHT
0x7A34743a5ec2B097C7d4bb3F4D0284b81380FA76

test token
TS1:0xd57781c2Eb910D381B53B7e5e4a8B553c45f5435
TS2:0x1EF01C4fcF92dAcA89552431bAaF0b4A146003e3
TS3:0x017f53d9714fd748fB252536bccF183B8e598eA4


修改
src/constants/index.ts
export const ROUTER_ADDRESS = router addr

删除：node_modules/@uniswap/sdk/dist/sdk.cjs.development.js.map
删除：node_modules/@uniswap/sdk/dist/sdk.cjs.production.min.js
删除：node_modules/@uniswap/sdk/dist/sdk.cjs.production.min.js.map
删除：node_modules/@uniswap/sdk/dist/sdk.esm.js.map

增加
node_modules/@uniswap/sdk/dist/constants.d.ts
KOVAN = 42,
HECO_TESTNET = 256

增加
node_modules/@uniswap/sdk/dist/entities/token.d.ts
42: Token;
256: Token;

修改
node_modules/@uniswap/sdk/dist/constants.d.ts
export declare const FACTORY_ADDRESS = factory addr
export declare const INIT_CODE_HASH = init code hash

修改
node_modules/@uniswap/sdk/dist/sdk.cjs.development.js
export declare const FACTORY_ADDRESS = factory addr
export declare const INIT_CODE_HASH = init code hash

修改
node_modules/@uniswap/sdk/dist/sdk.esm.js
export declare const FACTORY_ADDRESS = factory addr
export declare const INIT_CODE_HASH = init code hash

增加
node_modules/@uniswap/sdk/dist/sdk.esm.js
ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
ChainId[ChainId["HECO_TESTNET"] = 256] = "HECO_TESTNET";

_WETH[ChainId.HECO_TESTNET] = /*#__PURE__*/new Token(ChainId.HECO_TESTNET, '0x7A34743a5ec2B097C7d4bb3F4D0284b81380FA76', 18, 'WHT', 'Wrapped HT'),

增加
node_modules/@uniswap/sdk/dist/sdk.cjs.development.js
ChainId[ChainId["KOVAN"] = 42] = "KOVAN";
ChainId[ChainId["HECO_TESTNET"] = 256] = "HECO_TESTNET";

_WETH[exports.ChainId.HECO_TESTNET] = /*#__PURE__*/new Token(exports.ChainId.HECO_TESTNET, '0x7A34743a5ec2B097C7d4bb3F4D0284b81380FA76', 18, 'WHT', 'Wrapped HT'),
