'use strict';
const cp = require('child_process');
const util = require('util');

const execFilePromise = util.promisify(cp.execFile);

function buildDotnetCore(projectPath) {
    return execFilePromise('dotnet', ['run', '--project', projectPath, '--no-restore', '--no-dependencies']).then(({ stdout, stderr }) => {
        if (stderr) {
            return Promise.reject(stderr);
        }
        return stdout;
    });
}

Promise.all([
    buildDotnetCore('..\\AppA\\AppA.csproj'),
    buildDotnetCore('..\\AppB\\AppB.csproj')
]).then(([outA, outB]) => {
    console.log(outA);
    console.log(outB);
    console.log('done');
}).catch(error => console.error(error));
