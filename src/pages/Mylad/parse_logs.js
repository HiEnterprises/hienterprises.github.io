const fs = require('fs');
const readline = require('readline');

async function findSubagentOutput() {
  const ourTranscriptPath = 'C:\\Users\\weebo\\.gemini\\antigravity-ide\\brain\\cdd4388a-57d1-4e14-9361-45fb0acb6f85\\.system_generated\\logs\\transcript.jsonl';
  const fileStream = fs.createReadStream(ourTranscriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let found = false;
  for await (const line of rl) {
    if (!line) continue;
    try {
      const step = JSON.parse(line);
      if (step.step_index >= 645 && step.step_index <= 655) {
        console.log(`--- STEP ${step.step_index} (${step.source}, ${step.type}, status=${step.status}) ---`);
        if (step.content) {
          console.log(step.content.substring(0, 2000));
        }
      }
    } catch (e) {}
  }
}

findSubagentOutput();
