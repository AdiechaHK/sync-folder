const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try {
            let source = core.getInput('source');
            core.info('Yes here in my action >> ' + source);
        } catch (error) {
            core.setFailed(error.message);
        }
    }

)();
