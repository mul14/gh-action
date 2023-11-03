import core from '@actions/core';
import github from '@actions/github';
import axios from 'axios';
import { Octokit } from "@octokit/rest";

try {
  (async () => {
    // const response = await axios.get('https://httpbin.org/get');
    // core.setOutput("data", response.data);
    // console.log(response.data);

    const response = await octokit.rest.pulls.checkIfMerged({
      owner: 'mul14',
      repo: 'demo',
      pull_number: 3,
    });

    console.log(response);

  })();
} catch (error) {
  core.setFailed(error.message);
}
