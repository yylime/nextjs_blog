module.exports = {
    apps: [
      {
        name: "yylime-blog",
        script: "yarn",
        args: "start",
        instances: 1,
        env: {
          NODE_ENV: "production",
          PORT: 8443
        }
      }
    ]
  };
  