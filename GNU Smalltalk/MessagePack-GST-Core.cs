'From Squeak4.2 of 4 February 2011 [latest update: #10966] on 8 August 2011 at 10:30:22 am'!MpEncodeTypeMapper subclass: #MpSqEncodeTypeMapper	instanceVariableNames: ''	classVariableNames: ''	poolDictionaries: ''	category: 'MessagePack-Squeak-Core'!MpPortableUtil subclass: #MpSqPortableUtil	instanceVariableNames: ''	classVariableNames: ''	poolDictionaries: ''	category: 'MessagePack-Squeak-Core'!!MpSqEncodeTypeMapper class methodsFor: 'actions for primitives' stamp: 'mu 4/29/2011 23:13'!defineDoubleActionTo: map	map at: Float put: #writeDouble:! !!MpSqPortableUtil methodsFor: 'factory' stamp: 'mu 5/1/2011 15:28'!encodeTypeMapperClass	^MpSqEncodeTypeMapper! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 5/30/2011 00:00'!readDoubleFrom: stream	| float |	float := Float new: 2.	float at: 1 put: (stream nextNumber: 4).	float at: 2 put: (stream nextNumber: 4).	^float! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 5/30/2011 00:03'!readFloatFrom: stream	"32 bit"	^ Float fromIEEE32Bit: (stream nextNumber: 4)! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/30/2011 23:35'!readInt16From: stream	^stream int16! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!readInt32From: stream	^stream int32! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/30/2011 23:36'!readInt64From: stream	^stream int64! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!readUint16From: stream	^stream uint16! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!readUint32From: stream	^stream uint32! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!readUint64From: stream	^stream uint64! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 5/1/2011 15:53'!writeDouble: value to: stream	self writeUint32: (value at:1) to: stream.	self writeUint32: (value at:2) to: stream.	! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 5/1/2011 15:23'!writeFloat: value to: stream	self writeInt32: value asIEEE32BitWord to: stream! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:51'!writeInt16: value to: stream	stream int16: value! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!writeInt32: value to: stream	stream int32: value! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:55'!writeInt64: value to: stream	stream int64: value! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!writeUint16: value to: stream	stream uint16: value! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:41'!writeUint32: value to: stream	stream uint32: value! !!MpSqPortableUtil methodsFor: 'actions-stream' stamp: 'mu 4/29/2011 15:49'!writeUint64: value to: stream	stream uint64: value! !!MpSqPortableUtil class methodsFor: 'class initialization' stamp: 'mu 4/29/2011 23:36'!initialize	"MpSqPortableUtil initialize"	super initialize.	MpPortableUtil dialectSpecificClass: self! !!PositionableStream methodsFor: '*MessagePack-Squeak-Core' stamp: 'mu 5/1/2011 17:03'!int64	"Answer the next signed, 32-bit integer from this (binary) stream."	"Details: As a fast check for negative number, check the high bit of the first digit"	| n firstDigit |	n := firstDigit := self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	firstDigit >= 128 ifTrue: [n := -16r10000000000000000 + n].  "decode negative 64-bit integer"	^ n! !!PositionableStream methodsFor: '*MessagePack-Squeak-Core' stamp: 'mu 5/1/2011 21:33'!int64: anInteger	"Store the given signed, 64-bit integer on this (binary) stream."	| n |	(anInteger < -16r8000000000000000) | (anInteger >= 16r8000000000000000)		ifTrue: [self error: 'outside 64-bit integer range'].	anInteger < 0		ifTrue: [n := 16r10000000000000000 + anInteger]		ifFalse: [n := anInteger].	self nextPut: (n digitAt: 8).	self nextPut: (n digitAt: 7).	self nextPut: (n digitAt: 6).	self nextPut: (n digitAt: 5).	self nextPut: (n digitAt: 4).	self nextPut: (n digitAt: 3).	self nextPut: (n digitAt: 2).	self nextPut: (n digitAt: 1).! !!PositionableStream methodsFor: '*MessagePack-Squeak-Core' stamp: 'mu 5/1/2011 15:57'!uint64	"Answer the next unsigned, 64-bit integer from this (binary) stream."	| n |	n := self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	n := (n bitShift: 8) + self next.	^ n! !!PositionableStream methodsFor: '*MessagePack-Squeak-Core' stamp: 'mu 4/29/2011 15:48'!uint64: anInteger	"Store the given unsigned, 64-bit integer on this (binary) stream."	(anInteger < 0) | (anInteger >= 16r10000000000000000)		ifTrue: [self error: 'outside unsigned 64-bit integer range'].			self nextPut: (anInteger digitAt: 8).	self nextPut: (anInteger digitAt: 7).	self nextPut: (anInteger digitAt: 6).	self nextPut: (anInteger digitAt: 5).	self nextPut: (anInteger digitAt: 4).	self nextPut: (anInteger digitAt: 3).	self nextPut: (anInteger digitAt: 2).	self nextPut: (anInteger digitAt: 1).! !MpSqPortableUtil initialize!