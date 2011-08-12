| package |
package := Package name: 'MessagePackTest-Core'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #MpPackUnpackTestCase;
	add: #MpTestCase;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\Object Arts\Dolphin\Base\Dolphin';
	add: 'MessagePack-Core';
	add: '..\Camp Smalltalk\SUnit\SUnit';
	yourself).

package!

"Class Definitions"!

TestCase subclass: #MpTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
MpTestCase subclass: #MpPackUnpackTestCase
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

MpTestCase guid: (GUID fromString: '{69416983-0D62-4C02-A16E-34E1CB9AE2B8}')!
MpTestCase comment: ''!
!MpTestCase categoriesForClass!MessagePackTest-Core! !
!MpTestCase methodsFor!

atRandom: integer

collectionEquals: aCollection with: otherCollection

newCollection: aCollectionClass sized: size withAll: elem
!MpTestCase categoriesFor: #atRandom:!private! !
!MpTestCase categoriesFor: #collectionEquals:with:!private! !
!MpTestCase categoriesFor: #newCollection:sized:withAll:!private! !

MpPackUnpackTestCase guid: (GUID fromString: '{4A008951-5058-41C9-9961-A649FF8C9B5C}')!
MpPackUnpackTestCase comment: ''!
!MpPackUnpackTestCase categoriesForClass!MessagePackTest-Core! !
!MpPackUnpackTestCase methodsFor!

complexArraysArray

complexCollectionSizes

complexMapsArray

createArraySized: size

createComplexArraySized: size

createComplexMapSized: size

createRawBytesSized: size

createSimpleArraySized: size

createSimpleMapSized: size

floatsArray

integersArray

mapSizes

rawBytesArray

rawBytesSizes

simpleArraysArray

simpleCollectionSizes

simpleMapsArray

testPackUnpackArray

testPackUnpackComplexArray

testPackUnpackComplexMap

testPackUnpackFalse

testPackUnpackFloatingPoint

testPackUnpackInteger

testPackUnpackMap

testPackUnpackNil

testPackUnpackRawBytes

testPackUnpackTrue
!MpPackUnpackTestCase categoriesFor: #complexArraysArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #complexCollectionSizes!private! !
!MpPackUnpackTestCase categoriesFor: #complexMapsArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #createArraySized:!private! !
!MpPackUnpackTestCase categoriesFor: #createComplexArraySized:!private! !
!MpPackUnpackTestCase categoriesFor: #createComplexMapSized:!private! !
!MpPackUnpackTestCase categoriesFor: #createRawBytesSized:!private! !
!MpPackUnpackTestCase categoriesFor: #createSimpleArraySized:!private! !
!MpPackUnpackTestCase categoriesFor: #createSimpleMapSized:!private! !
!MpPackUnpackTestCase categoriesFor: #floatsArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #integersArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #mapSizes!private! !
!MpPackUnpackTestCase categoriesFor: #rawBytesArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #rawBytesSizes!private! !
!MpPackUnpackTestCase categoriesFor: #simpleArraysArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #simpleCollectionSizes!private! !
!MpPackUnpackTestCase categoriesFor: #simpleMapsArray!fixtures!public! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackArray!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackComplexArray!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackComplexMap!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackFalse!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackFloatingPoint!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackInteger!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackMap!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackNil!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackRawBytes!public!testing! !
!MpPackUnpackTestCase categoriesFor: #testPackUnpackTrue!public!testing! !

"Binary Globals"!
