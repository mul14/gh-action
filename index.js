const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
  (async () => {
    const response = await axios.get('https://httpbin.org/get');
    const data = await response.data();
    core.setOutput("data", data);
  })();
} catch (error) {
  core.setFailed(error.message);
}
