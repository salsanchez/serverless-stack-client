const dev = {
  STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-qwj9ghlbxg5j"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xwc7fqq8l3.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_DRqhS87yi",
    APP_CLIENT_ID: "mmrh2i13ac3ijkao1blqdeigp",
    IDENTITY_POOL_ID: "us-east-1:821b83f5-4bd3-498c-95f3-7def11683781"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-pu4b441tlos4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://p5t9v4u4w2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LuSMVs4Yl",
    APP_CLIENT_ID: "3dmd9tn8kus5s0j83v50glbalc",
    IDENTITY_POOL_ID: "us-east-1:b28692d9-2c63-4d64-94fa-f1d181e81cf6"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;