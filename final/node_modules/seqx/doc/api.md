## API

<a name="classes">**Classes**</a>
* <code>[SeqX](#class-SeqX)</code> [{SeqX}](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L46) Execute tasks sequentially.

### <a name="class-SeqX">SeqX</a><b><sub><sup><code>CLASS  </code></sup></sub></b> [<img src="https://cdn.rawgit.com/github/octicons/master/svg/arrow-up.svg" height= "16px">|back to class list](#classes)

[{SeqX}](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L46) Execute tasks sequentially.

######<a href="#" target="_blank"><img src="https://rawgit.com/venkatperi/line-segment-ops/master/assets/Line.svg" width="100%" height="1px"></a>


#### Methods


<code><a href="#class-SeqX">SeqX::</a></a>**constructor(**opts**)**</code> <b><sub><sup><code>PUBLIC  </code></sup></sub></b> [<img src="https://cdn.rawgit.com/github/octicons/master/svg/code.svg" height= "16px">](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L54)
 [<img src="https://cdn.rawgit.com/github/octicons/master/svg/arrow-up.svg" height= "16px">](#class-SeqX)

* <code>opts</code> [{Object}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) options
  * <code>manual</code> [{Boolean}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If set, don't start immediate task execution
  * <code>context</code> optional context [{Object}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) which is passed to tasks

Create a SeqX sequential executor



######<a href="#" target="_blank"><img src="https://rawgit.com/venkatperi/line-segment-ops/master/assets/Line.svg" width="100%" height="1px"></a>


<code><a href="#class-SeqX">SeqX::</a></a>**start(****)**</code> <b><sub><sup><code>PUBLIC  </code></sup></sub></b> [<img src="https://cdn.rawgit.com/github/octicons/master/svg/code.svg" height= "16px">](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L69)
 [<img src="https://cdn.rawgit.com/github/octicons/master/svg/arrow-up.svg" height= "16px">](#class-SeqX)


Start the executor 



######<a href="#" target="_blank"><img src="https://rawgit.com/venkatperi/line-segment-ops/master/assets/Line.svg" width="100%" height="1px"></a>


<code><a href="#class-SeqX">SeqX::</a></a>**add(**fn...**)**</code> <b><sub><sup><code>PUBLIC  </code></sup></sub></b> [<img src="https://cdn.rawgit.com/github/octicons/master/svg/code.svg" height= "16px">](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L81)
 [<img src="https://cdn.rawgit.com/github/octicons/master/svg/arrow-up.svg" height= "16px">](#class-SeqX)

* <code>fn...</code> a [{Function}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) or array of [{Function}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)s to add to the to add to the queue

Add the given task(s) to the queue

<em>Returns</em>
* Returns [{Promise}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves when the task(s) complete


######<a href="#" target="_blank"><img src="https://rawgit.com/venkatperi/line-segment-ops/master/assets/Line.svg" width="100%" height="1px"></a>


<code><a href="#class-SeqX">SeqX::</a></a>**addn(**fn, null**)**</code> <b><sub><sup><code>PUBLIC  </code></sup></sub></b> [<img src="https://cdn.rawgit.com/github/octicons/master/svg/code.svg" height= "16px">](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L92)
 [<img src="https://cdn.rawgit.com/github/octicons/master/svg/arrow-up.svg" height= "16px">](#class-SeqX)

* <code>fn</code> [{Function}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) task 
* <code></code> `n ` [{Number}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) of time to execute the task

Add the given task `n` times

<em>Returns</em>
* Returns [{Promise}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves the last iteration is complete


######<a href="#" target="_blank"><img src="https://rawgit.com/venkatperi/line-segment-ops/master/assets/Line.svg" width="100%" height="1px"></a>


<code><a href="#class-SeqX">SeqX::</a></a>**abort(****)**</code> <b><sub><sup><code>PUBLIC  </code></sup></sub></b> [<img src="https://cdn.rawgit.com/github/octicons/master/svg/code.svg" height= "16px">](https://github.com/venkatperi/seqx/blob/v1.1.1/lib/SeqX.coffee#L99)
 [<img src="https://cdn.rawgit.com/github/octicons/master/svg/arrow-up.svg" height= "16px">](#class-SeqX)


Abort pending tasks. Executor will throw an exeption
which can be caught with a promise .fail() handler








