// Task A: Resolves after 1s
function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
      // To simulate failure, you could use: reject("Task A failed");
    }, 1000);
  });
}

// Task B: Takes Task A's output, resolves after 1.5s
function processTask(prevOutput) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${prevOutput}`);
      // Or: reject("Task B failed");
    }, 1500);
  });
}

// Task C: Takes Task B's output, resolves after 0.5s
function finalizeTask(prevOutput) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${prevOutput}`);
      // Or: reject("Task C failed");
    }, 500);
  });
}

// Chaining the tasks
startTask()
  .then(resultA => {
    console.log(resultA); // "Task A completed"
    return processTask(resultA);
  })
  .then(resultB => {
    console.log(resultB); // "Task B processed: Task A completed"
    return finalizeTask(resultB);
  })
  .then(finalResult => {
    console.log(finalResult); // "Final result: Task B processed: Task A completed"
  })
  .catch(error => {
    console.error("Workflow failed:", error);
  });
