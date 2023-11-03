import core from '@actions/core';
import github from '@actions/github';
import axios from 'axios';

try {
  (async () => {
    const response = await axios.get('https://httpbin.org/get');
    core.setOutput("data", response);
  })();
} catch (error) {
  core.setFailed(error.message);
}
