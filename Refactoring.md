# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
The original function had multiple nested if/else statements that were doing the different tasks.  I broke the function down to two different functions.  `deterministicPartitionKey` is returning the candidate based on if event and event.partitionKey is null or not.  `deterministicCandidate` uses `deterministicPartitionKey` to get candidate.  Based on if candidate is null or not, and depends on candidate's type and length, function manipulates candidate and returns it.  Refactored code is more readable and each function takes care of each event and candidate.  It passes all the unit tests.     