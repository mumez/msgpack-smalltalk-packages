| package |
package := Package name: 'MessagePack-Core'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #MpConstants;
	add: #MpDecoder;
	add: #MpDecodeTypeMapper;
	add: #MpEncoder;
	add: #MpEncodeTypeMapper;
	add: #MpError;
	add: #MpMessagePack;
	add: #MpPortableUtil;
	add: #MpSettings;
	add: #MpTypeMapper;
	yourself.

package methodNames
	add: #Behavior -> #fromMessagePack:;
	add: #Object -> #messagePacked;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\Object Arts\Dolphin\Base\Dolphin';
	yourself).

package!

"Class Definitions"!

Object subclass: #MpConstants
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #MpDecoder
	instanceVariableNames: 'readStream typeMapper settings'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #MpEncoder
	instanceVariableNames: 'writeStream typeMapper settings'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #MpMessagePack
	instanceVariableNames: ''
	classVariableNames: 'Default DialectSpecificClass'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #MpPortableUtil
	instanceVariableNames: ''
	classVariableNames: 'Default DialectSpecificClass'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #MpSettings
	instanceVariableNames: 'settingsDict'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #MpTypeMapper
	instanceVariableNames: 'actionMap'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: 'actionMap'!
Error subclass: #MpError
	instanceVariableNames: 'type'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
MpTypeMapper subclass: #MpDecodeTypeMapper
	instanceVariableNames: 'decoder'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
MpTypeMapper subclass: #MpEncodeTypeMapper
	instanceVariableNames: 'encoder'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

!Behavior methodsFor!

fromMessagePack: bytes
!Behavior categoriesFor: #fromMessagePack:!*MessagePack/Core/unpacking!public! !

!Object methodsFor!

messagePacked
!Object categoriesFor: #messagePacked!*MessagePack/Core/packing!public! !

"End of package definition"!

"Source Globals"!

"Classes"!

MpConstants guid: (GUID fromString: '{73C91E8E-85C6-43A9-A947-AE9A782C33D4}')!
MpConstants comment: ''!
!MpConstants categoriesForClass!MessagePack-Core! !
!MpConstants class methodsFor!

array16

array32

double

false

float

int16

int32

int64

int8

map16

map32

nil

raw16

raw32

true

uint16

uint32

uint64

uint8
!MpConstants class categoriesFor: #array16!public!typecodes! !
!MpConstants class categoriesFor: #array32!public!typecodes! !
!MpConstants class categoriesFor: #double!public!typecodes! !
!MpConstants class categoriesFor: #false!public!typecodes! !
!MpConstants class categoriesFor: #float!public!typecodes! !
!MpConstants class categoriesFor: #int16!public!typecodes! !
!MpConstants class categoriesFor: #int32!public!typecodes! !
!MpConstants class categoriesFor: #int64!public!typecodes! !
!MpConstants class categoriesFor: #int8!public!typecodes! !
!MpConstants class categoriesFor: #map16!public!typecodes! !
!MpConstants class categoriesFor: #map32!public!typecodes! !
!MpConstants class categoriesFor: #nil!public!typecodes! !
!MpConstants class categoriesFor: #raw16!public!typecodes! !
!MpConstants class categoriesFor: #raw32!public!typecodes! !
!MpConstants class categoriesFor: #true!public!typecodes! !
!MpConstants class categoriesFor: #uint16!public!typecodes! !
!MpConstants class categoriesFor: #uint32!public!typecodes! !
!MpConstants class categoriesFor: #uint64!public!typecodes! !
!MpConstants class categoriesFor: #uint8!public!typecodes! !

MpDecoder guid: (GUID fromString: '{89723DAD-1204-43F6-9F3D-47EDE62D693E}')!
MpDecoder comment: ''!
!MpDecoder categoriesForClass!MessagePack-Core! !
!MpDecoder methodsFor!

atEnd

createArray: size

createDictionary: size

createOrderedCollection: size

decode

decode: byteArray

decodeFrom: aStream

next

read

readArray16

readArray32

readArraySized: size

readDouble

readFalse

readFixArray: firstByte

readFixMap: firstByte

readFixRaw: firstByte

readFloat

readInt16

readInt32

readInt64

readInt8

readMap16

readMap32

readMapSized: size

readNegativeFixNum: firstByte

readNil

readObject

readObjectOf: type

readObjectOf: type ifNotApplied: aBlock

readPositiveFixNum: firstByte

readRaw16

readRaw32

readStream

readStream: anObject

readTrue

readType

readUint16

readUint32

readUint64

readUint8

settings

settingsClass

signalError

signalError: message

typeMapper

typeMapperClass
!MpDecoder categoriesFor: #atEnd!public!stream/like! !
!MpDecoder categoriesFor: #createArray:!factory!public! !
!MpDecoder categoriesFor: #createDictionary:!factory!public! !
!MpDecoder categoriesFor: #createOrderedCollection:!factory!public! !
!MpDecoder categoriesFor: #decode!decoding!public! !
!MpDecoder categoriesFor: #decode:!decoding!public! !
!MpDecoder categoriesFor: #decodeFrom:!decoding!public! !
!MpDecoder categoriesFor: #next!public!stream/like! !
!MpDecoder categoriesFor: #read!public!reading! !
!MpDecoder categoriesFor: #readArray16!public!reading! !
!MpDecoder categoriesFor: #readArray32!public!reading! !
!MpDecoder categoriesFor: #readArraySized:!public!reading/helper! !
!MpDecoder categoriesFor: #readDouble!public!reading! !
!MpDecoder categoriesFor: #readFalse!public!reading! !
!MpDecoder categoriesFor: #readFixArray:!public!reading! !
!MpDecoder categoriesFor: #readFixMap:!public!reading! !
!MpDecoder categoriesFor: #readFixRaw:!public!reading! !
!MpDecoder categoriesFor: #readFloat!public!reading! !
!MpDecoder categoriesFor: #readInt16!public!reading/integer! !
!MpDecoder categoriesFor: #readInt32!public!reading/integer! !
!MpDecoder categoriesFor: #readInt64!public!reading/integer! !
!MpDecoder categoriesFor: #readInt8!public!reading/integer! !
!MpDecoder categoriesFor: #readMap16!public!reading! !
!MpDecoder categoriesFor: #readMap32!public!reading! !
!MpDecoder categoriesFor: #readMapSized:!public!reading/helper! !
!MpDecoder categoriesFor: #readNegativeFixNum:!public!reading! !
!MpDecoder categoriesFor: #readNil!public!reading! !
!MpDecoder categoriesFor: #readObject!dispatching!public! !
!MpDecoder categoriesFor: #readObjectOf:!dispatching!public! !
!MpDecoder categoriesFor: #readObjectOf:ifNotApplied:!dispatching!public! !
!MpDecoder categoriesFor: #readPositiveFixNum:!public!reading! !
!MpDecoder categoriesFor: #readRaw16!public!reading! !
!MpDecoder categoriesFor: #readRaw32!public!reading! !
!MpDecoder categoriesFor: #readStream!accessing!public! !
!MpDecoder categoriesFor: #readStream:!accessing!public! !
!MpDecoder categoriesFor: #readTrue!public!reading! !
!MpDecoder categoriesFor: #readType!public!reading/helper! !
!MpDecoder categoriesFor: #readUint16!public!reading/integer! !
!MpDecoder categoriesFor: #readUint32!public!reading/integer! !
!MpDecoder categoriesFor: #readUint64!public!reading/integer! !
!MpDecoder categoriesFor: #readUint8!public!reading/integer! !
!MpDecoder categoriesFor: #settings!accessing!public! !
!MpDecoder categoriesFor: #settingsClass!factory!public! !
!MpDecoder categoriesFor: #signalError!public!signaling error! !
!MpDecoder categoriesFor: #signalError:!public!signaling error! !
!MpDecoder categoriesFor: #typeMapper!accessing!public! !
!MpDecoder categoriesFor: #typeMapperClass!factory!public! !

!MpDecoder class methodsFor!

decode: byteArray

decodeFrom: aStream

on: aStream

onBytes: byteArray
!MpDecoder class categoriesFor: #decode:!actions!public! !
!MpDecoder class categoriesFor: #decodeFrom:!actions!public! !
!MpDecoder class categoriesFor: #on:!actions!public! !
!MpDecoder class categoriesFor: #onBytes:!actions!public! !

MpEncoder guid: (GUID fromString: '{20B63E24-CF65-4958-8522-56F3122EA482}')!
MpEncoder comment: ''!
!MpEncoder categoriesForClass!MessagePack-Core! !
!MpEncoder methodsFor!

contents

encode: anObject

encode: anObject on: aStream

nextPut: anObject

nextPutAll: aCollection

settings

settingsClass

signalError

signalError: message

typeMapper

typeMapperClass

write: anObject on: aStream

writeArray: array

writeArraySize: size

writeDouble: aFloat

writeFalse: ignore

writeFloat: aFloat

writeInt16: value

writeInt32: value

writeInt64: value

writeInt8: value

writeInteger: anInteger 

writeMap: aDictionary

writeMapSize: size

writeNegativeFixNum: number

writeNil: ignore

writeObject: anObject 

writeObject: anObject ifNotApplied: aBlock 

writePositiveFixNum: number

writeRawBytes: bytes

writeRawBytesSize: size

writeStream

writeStream: anObject

writeTrue: ignore

writeUint16: value

writeUint32: value

writeUint64: value

writeUint8: value
!MpEncoder categoriesFor: #contents!accessing!public! !
!MpEncoder categoriesFor: #encode:!encoding!public! !
!MpEncoder categoriesFor: #encode:on:!encoding!public! !
!MpEncoder categoriesFor: #nextPut:!public!stream/like! !
!MpEncoder categoriesFor: #nextPutAll:!public!stream/like! !
!MpEncoder categoriesFor: #settings!accessing!public! !
!MpEncoder categoriesFor: #settingsClass!factory!public! !
!MpEncoder categoriesFor: #signalError!public!signaling error! !
!MpEncoder categoriesFor: #signalError:!public!signaling error! !
!MpEncoder categoriesFor: #typeMapper!accessing!public! !
!MpEncoder categoriesFor: #typeMapperClass!accessing!public! !
!MpEncoder categoriesFor: #write:on:!encoding!public! !
!MpEncoder categoriesFor: #writeArray:!public!writing! !
!MpEncoder categoriesFor: #writeArraySize:!public!writing/helper! !
!MpEncoder categoriesFor: #writeDouble:!public!writing! !
!MpEncoder categoriesFor: #writeFalse:!public!writing! !
!MpEncoder categoriesFor: #writeFloat:!public!writing! !
!MpEncoder categoriesFor: #writeInt16:!public!writing/helper! !
!MpEncoder categoriesFor: #writeInt32:!public!writing/helper! !
!MpEncoder categoriesFor: #writeInt64:!public!writing/helper! !
!MpEncoder categoriesFor: #writeInt8:!public!writing/helper! !
!MpEncoder categoriesFor: #writeInteger:!public!writing! !
!MpEncoder categoriesFor: #writeMap:!public!writing! !
!MpEncoder categoriesFor: #writeMapSize:!public!writing/helper! !
!MpEncoder categoriesFor: #writeNegativeFixNum:!public!writing/helper! !
!MpEncoder categoriesFor: #writeNil:!public!writing! !
!MpEncoder categoriesFor: #writeObject:!dispatching!public! !
!MpEncoder categoriesFor: #writeObject:ifNotApplied:!dispatching!public! !
!MpEncoder categoriesFor: #writePositiveFixNum:!public!writing/helper! !
!MpEncoder categoriesFor: #writeRawBytes:!public!writing! !
!MpEncoder categoriesFor: #writeRawBytesSize:!public!writing/helper! !
!MpEncoder categoriesFor: #writeStream!accessing!public! !
!MpEncoder categoriesFor: #writeStream:!accessing!public! !
!MpEncoder categoriesFor: #writeTrue:!public!writing! !
!MpEncoder categoriesFor: #writeUint16:!public!writing/helper! !
!MpEncoder categoriesFor: #writeUint32:!public!writing/helper! !
!MpEncoder categoriesFor: #writeUint64:!public!writing/helper! !
!MpEncoder categoriesFor: #writeUint8:!public!writing/helper! !

!MpEncoder class methodsFor!

encode: anObject 

encode: anObject on: aStream

on: aStream

onBytes: byteArray
!MpEncoder class categoriesFor: #encode:!actions!public! !
!MpEncoder class categoriesFor: #encode:on:!actions!public! !
!MpEncoder class categoriesFor: #on:!actions!public! !
!MpEncoder class categoriesFor: #onBytes:!actions!public! !

MpMessagePack guid: (GUID fromString: '{31D67B60-74CB-481F-AA2E-CD18C230C365}')!
MpMessagePack comment: ''!
!MpMessagePack categoriesForClass!MessagePack-Core! !
!MpMessagePack class methodsFor!

pack: anObject

packUnpack: anObject

unpack: aByteArray
!MpMessagePack class categoriesFor: #pack:!public!utilities! !
!MpMessagePack class categoriesFor: #packUnpack:!public!utilities! !
!MpMessagePack class categoriesFor: #unpack:!public!utilities! !

MpPortableUtil guid: (GUID fromString: '{69E71C80-220C-4A66-8F33-675342359FAE}')!
MpPortableUtil comment: ''!
!MpPortableUtil categoriesForClass!MessagePack-Core! !
!MpPortableUtil methodsFor!

collectionEquals: aCollection with: otherCollection

encodeTypeMapperClass

newCollection: aCollectionClass sized: size withAll: elem

randomClass

readDoubleFrom: stream

readFloatFrom: stream

readInt16From: stream

readInt32From: stream

readInt64From: stream

readUint16From: stream

readUint32From: stream

readUint64From: stream

signalException: anException

writeDouble: value to: stream

writeFloat: value to: stream

writeInt16: value to: stream

writeInt32: value to: stream

writeInt64: value to: stream

writeUint16: value to: stream

writeUint32: value to: stream

writeUint64: value to: stream
!MpPortableUtil categoriesFor: #collectionEquals:with:!public!testing! !
!MpPortableUtil categoriesFor: #encodeTypeMapperClass!factory!public! !
!MpPortableUtil categoriesFor: #newCollection:sized:withAll:!factory!public! !
!MpPortableUtil categoriesFor: #randomClass!factory!public! !
!MpPortableUtil categoriesFor: #readDoubleFrom:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readFloatFrom:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readInt16From:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readInt32From:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readInt64From:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readUint16From:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readUint32From:!actions/stream!public! !
!MpPortableUtil categoriesFor: #readUint64From:!actions/stream!public! !
!MpPortableUtil categoriesFor: #signalException:!actions!public! !
!MpPortableUtil categoriesFor: #writeDouble:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeFloat:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeInt16:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeInt32:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeInt64:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeUint16:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeUint32:to:!actions/stream!public! !
!MpPortableUtil categoriesFor: #writeUint64:to:!actions/stream!public! !

!MpPortableUtil class methodsFor!

default

dialectSpecificClass

dialectSpecificClass: aClass

initialize

stomp
!MpPortableUtil class categoriesFor: #default!instance creation!public! !
!MpPortableUtil class categoriesFor: #dialectSpecificClass!factory!public! !
!MpPortableUtil class categoriesFor: #dialectSpecificClass:!factory!public! !
!MpPortableUtil class categoriesFor: #initialize!class initialization!public! !
!MpPortableUtil class categoriesFor: #stomp!*stomp/core!public! !

MpSettings guid: (GUID fromString: '{EF50FFC9-A990-41DF-80BA-9C82CE619756}')!
MpSettings comment: ''!
!MpSettings categoriesForClass!MessagePack-Core! !
!MpSettings methodsFor!

at: key

at: key ifAbsent: aBlock

at: key ifAbsentPut: aBlock

at: key put: value

defaultStreamSize

defaultStreamSize: anInteger

includesKey: key

initialize

keys

settingsDict
!MpSettings categoriesFor: #at:!actions/dictionary!public! !
!MpSettings categoriesFor: #at:ifAbsent:!actions/dictionary!public! !
!MpSettings categoriesFor: #at:ifAbsentPut:!actions/dictionary!public! !
!MpSettings categoriesFor: #at:put:!actions/dictionary!public! !
!MpSettings categoriesFor: #defaultStreamSize!accessing!public! !
!MpSettings categoriesFor: #defaultStreamSize:!accessing!public! !
!MpSettings categoriesFor: #includesKey:!actions/dictionary!public! !
!MpSettings categoriesFor: #initialize!class initialization!public! !
!MpSettings categoriesFor: #keys!actions/dictionary!public! !
!MpSettings categoriesFor: #settingsDict!accessing/private!public! !

MpTypeMapper guid: (GUID fromString: '{D65F572E-6BCB-4FBF-ABC9-2A71EF8796A8}')!
MpTypeMapper comment: ''!
!MpTypeMapper categoriesForClass!MessagePack-Core! !
!MpTypeMapper methodsFor!

actionMap

defaultActionMap

initActionMaps
!MpTypeMapper categoriesFor: #actionMap!accessing!public! !
!MpTypeMapper categoriesFor: #defaultActionMap!accessing!public! !
!MpTypeMapper categoriesFor: #initActionMaps!initialization!public! !

!MpTypeMapper class methodsFor!

actionMap

createActionMap

defineCompoundsActionsTo: map

definePrimitivesActionsTo: map

initialize

initializeAll
!MpTypeMapper class categoriesFor: #actionMap!accessing!public! !
!MpTypeMapper class categoriesFor: #createActionMap!factory!public! !
!MpTypeMapper class categoriesFor: #defineCompoundsActionsTo:!actions for compounds!public! !
!MpTypeMapper class categoriesFor: #definePrimitivesActionsTo:!actions for primitives!public! !
!MpTypeMapper class categoriesFor: #initialize!class initialization!public! !
!MpTypeMapper class categoriesFor: #initializeAll!class initialization!public! !

MpError guid: (GUID fromString: '{1B68E4DB-4DCF-4B35-ADC9-5A637A9454B9}')!
MpError comment: ''!
!MpError categoriesForClass!MessagePack-Core! !
!MpError methodsFor!

type

type: anObject
!MpError categoriesFor: #type!accessing!public! !
!MpError categoriesFor: #type:!accessing!public! !

!MpError class methodsFor!

decode

encode
!MpError class categoriesFor: #decode!instance creation!public! !
!MpError class categoriesFor: #encode!instance creation!public! !

MpDecodeTypeMapper guid: (GUID fromString: '{D7C2DF5D-3E36-44DC-A75D-CC93D84CBBC8}')!
MpDecodeTypeMapper comment: ''!
!MpDecodeTypeMapper categoriesForClass!MessagePack-Core! !
!MpDecodeTypeMapper methodsFor!

decoder

decoder: anObject

readObjectOf: typeCode ifNotApplied: aBlock 
!MpDecodeTypeMapper categoriesFor: #decoder!accessing!public! !
!MpDecodeTypeMapper categoriesFor: #decoder:!accessing!public! !
!MpDecodeTypeMapper categoriesFor: #readObjectOf:ifNotApplied:!actions!public! !

!MpDecodeTypeMapper class methodsFor!

defineArrayActionTo: map

defineCompoundsActionsTo: map

defineDoubleActionTo: map

defineFalseActionTo: map

defineFloatActionTo: map

defineIntegerActionTo: map

defineMapActionTo: map	

defineNilActionTo: map

definePrimitivesActionsTo: map

defineRawBytesActionTo: map

defineTrueActionTo: map

defineUnsignedIntegerActionTo: map

on: bertDecoder 
!MpDecodeTypeMapper class categoriesFor: #defineArrayActionTo:!actions for compounds!public! !
!MpDecodeTypeMapper class categoriesFor: #defineCompoundsActionsTo:!actions for compounds!public! !
!MpDecodeTypeMapper class categoriesFor: #defineDoubleActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineFalseActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineFloatActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineIntegerActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineMapActionTo:!actions for compounds!public! !
!MpDecodeTypeMapper class categoriesFor: #defineNilActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #definePrimitivesActionsTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineRawBytesActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineTrueActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #defineUnsignedIntegerActionTo:!actions for primitives!public! !
!MpDecodeTypeMapper class categoriesFor: #on:!instance creation!public! !

MpEncodeTypeMapper guid: (GUID fromString: '{22BDA04F-F7A6-4B70-B71C-CC4FB07C836D}')!
MpEncodeTypeMapper comment: ''!
!MpEncodeTypeMapper categoriesForClass!MessagePack-Core! !
!MpEncodeTypeMapper methodsFor!

encoder

encoder: anObject

writeObject: anObject ifNotApplied: aBlock 
!MpEncodeTypeMapper categoriesFor: #encoder!accessing!public! !
!MpEncodeTypeMapper categoriesFor: #encoder:!accessing!public! !
!MpEncodeTypeMapper categoriesFor: #writeObject:ifNotApplied:!actions!public! !

!MpEncodeTypeMapper class methodsFor!

defineArrayActionTo: map

defineCompoundsActionsTo: map

defineDoubleActionTo: map

defineFalseActionTo: map

defineFloatActionTo: map

defineIntegerActionTo: map

defineMapActionTo: map	

defineNilActionTo: map

definePrimitivesActionsTo: map

defineRawBytesActionTo: map

defineTrueActionTo: map

on: bertEncoder 
!MpEncodeTypeMapper class categoriesFor: #defineArrayActionTo:!actions for compounds!public! !
!MpEncodeTypeMapper class categoriesFor: #defineCompoundsActionsTo:!actions for compounds!public! !
!MpEncodeTypeMapper class categoriesFor: #defineDoubleActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #defineFalseActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #defineFloatActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #defineIntegerActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #defineMapActionTo:!actions for compounds!public! !
!MpEncodeTypeMapper class categoriesFor: #defineNilActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #definePrimitivesActionsTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #defineRawBytesActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #defineTrueActionTo:!actions for primitives!public! !
!MpEncodeTypeMapper class categoriesFor: #on:!instance creation!public! !

"Binary Globals"!
