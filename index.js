require("dotenv").config();
const {
  FusionSDK,
  NetworkEnum,
  PrivateKeyProviderConnector,
} = require("@1inch/fusion-sdk");

const main = async () => {
  console.log("Fetching Orders");

  const sdk = new FusionSDK({
    url: "https://fusion.1inch.io",
    network: NetworkEnum.ARBITRUM,
  });

  const orders = await sdk.getActiveOrders({ page: 1, limit: 10 });

  const USDC_TOKEN = "0xaf88d065e77c8cc2239327c5edb3a432268e5831";

  const WETH_TOKEN = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";

  //   for (var i = 0; i < orders.items.length; i++) {
  //     console.log(orders.items[i]);
  //   }

  const params = {
    fromTokenAddress: WETH_TOKEN,
    toTokenAddress: USDC_TOKEN,
    amount: "1000000000000000000",
  };

  // To GET quote of following details with tokens to swap

  //

  sdk.createOrder();

  const quote = await sdk.getQuote(params);
  console.log(quote);
};

main();
