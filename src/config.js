const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "sal-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://p5t9v4u4w2.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_5LUSuOTrL",
      APP_CLIENT_ID: "3bihf14g99jg8ubg0h9bu5nm4j",
      IDENTITY_POOL_ID: "us-east-2:9cdf5aea-be1f-4bd2-9a3a-e79d97c2fd96",
    },
};

export default config;