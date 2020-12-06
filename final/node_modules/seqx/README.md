# seqx

[![Build Status](https://travis-ci.org/venkatperi/seqx.svg?branch=master)](https://travis-ci.org/venkatperi/seqx)

Executes tasks sequentially. The result of a task is passed to the next. Returns promises which resolve when tasks are completed. Fires events when tasks are completed.

# Installation

Install with npm

```
npm install seqx --save
```

# Example

```javascript
var seqx = require("seqx")

task = function (result, id, context) { }
executor = seqx({context: someObj, manual: false});
var taskPromise = executor.add(task);
```

# Tasks
Tasks are functions. A task can receive one or more arguments, in the following order:

1. `result` The result from the previous task. Can be `undefined`.
2. `id` The task's id which is an incrementing counter.
3. `context` An optional context object which is was supplied when the executor was created.

```javascript
function task(result, id, context) {
  return valueForNextTask;
 }
```

# API

## Create

### seq( {context: Object, manual: Boolean} )

* `context` `{Object}` - A custom context object which is passed to each task
* `manual` `{Boolean} - If set, `start` must be called on the executor to begin task execution.

Creates a sequential executor.

## Methods

### seq.add(task[,task...])

* `task` `{Function}`- task function to be executed
* `return` `{Promise}`- A promise which resolves when the task completes and returns the output, if any.

Adds a task to the executor's queue.

### seq.addn(task, n)
* `task` `{Function}`- task function to be executed
* `n` `{Number}` - Number of times to sequentially execute the task. Each time, the output of a previous iteration is provided to the next.
* `return` `{Promise}`- A promise which resolves when the task completes and returns the output, if any.

Adds a task multiple times to the executor's queue.

### seq.start()
Starts executing tasks on the task queue. Relevant only when the `manual: true` option is provided to the constructor `seq()`. `start` is automatically called for auto start executors.

## Events
`seqx` emits the following events:

### on('start', cb())
Emitted when task execution begins.

### on('task', cb(fn))
Emitted when a new task is added. The task **fn** is available as an argument to the event.

### on('completed', cb(result, id, context))
Emitted when a  task is completed. Callback receives the result of the task, the task id and the context, if any.

### on('abort', cb())
Emitted if `abort()` is called.
