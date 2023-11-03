import core from '@actions/core';
import github from '@actions/github';
import axios from 'axios';

try {
  (async () => {
    const response = await axios.get('https://httpbin.org/get');
    const data = await response.data();
    core.setOutput("data", data);
  })();
} catch (error) {
  core.setFailed(error.message);
}
