SeqX = require "./lib/SeqX"
ParX = require "./lib/ParX"

seqx = ( opts ) -> new SeqX opts
parx = ( opts ) -> new ParX opts

seqx.SeqX = SeqX
seqx.par = parx
parx.ParX = ParX

module.exports = seqx
