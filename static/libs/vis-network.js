var vis=function(exports){"use strict"
;var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
;function createCommonjsModule(fn,module){
return fn(module={exports:{}
},module.exports),module.exports}
var O="object",check=function(it){
return it&&it.Math==Math&&it
},global_1=check(typeof globalThis==O&&globalThis)||check(typeof window==O&&window)||check(typeof self==O&&self)||check(typeof commonjsGlobal==O&&commonjsGlobal)||Function("return this")(),fails=function(exec){
try{return!!exec()}catch(error){return!0}
},descriptors=!fails((function(){
return 7!=Object.defineProperty({},"a",{
get:function(){return 7}}).a
})),nativePropertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,objectPropertyIsEnumerable={
f:getOwnPropertyDescriptor&&!nativePropertyIsEnumerable.call({
1:2},1)?function(V){
var descriptor=getOwnPropertyDescriptor(this,V)
;return!!descriptor&&descriptor.enumerable
}:nativePropertyIsEnumerable
},createPropertyDescriptor=function(bitmap,value){
return{enumerable:!(1&bitmap),
configurable:!(2&bitmap),writable:!(4&bitmap),
value:value}
},toString={}.toString,classofRaw=function(it){
return toString.call(it).slice(8,-1)
},split="".split,indexedObject=fails((function(){
return!Object("z").propertyIsEnumerable(0)
}))?function(it){
return"String"==classofRaw(it)?split.call(it,""):Object(it)
}:Object,requireObjectCoercible=function(it){
if(null==it)throw TypeError("Can't call method on "+it)
;return it},toIndexedObject=function(it){
return indexedObject(requireObjectCoercible(it))
},isObject=function(it){
return"object"==typeof it?null!==it:"function"==typeof it
},toPrimitive=function(input,PREFERRED_STRING){
if(!isObject(input))return input;var fn,val
;if(PREFERRED_STRING&&"function"==typeof(fn=input.toString)&&!isObject(val=fn.call(input)))return val
;if("function"==typeof(fn=input.valueOf)&&!isObject(val=fn.call(input)))return val
;if(!PREFERRED_STRING&&"function"==typeof(fn=input.toString)&&!isObject(val=fn.call(input)))return val
;throw TypeError("Can't convert object to primitive value")
},hasOwnProperty={}.hasOwnProperty,has=function(it,key){
return hasOwnProperty.call(it,key)
},document$1=global_1.document,EXISTS=isObject(document$1)&&isObject(document$1.createElement),documentCreateElement=function(it){
return EXISTS?document$1.createElement(it):{}
},ie8DomDefine=!descriptors&&!fails((function(){
return 7!=Object.defineProperty(documentCreateElement("div"),"a",{
get:function(){return 7}}).a
})),nativeGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,objectGetOwnPropertyDescriptor={
f:descriptors?nativeGetOwnPropertyDescriptor:function(O,P){
if(O=toIndexedObject(O),
P=toPrimitive(P,!0),ie8DomDefine)try{
return nativeGetOwnPropertyDescriptor(O,P)
}catch(error){}
if(has(O,P))return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O,P),O[P])
}
},replacement=/#|\.prototype\./,isForced=function(feature,detection){
var value=data[normalize(feature)]
;return value==POLYFILL||value!=NATIVE&&("function"==typeof detection?fails(detection):!!detection)
},normalize=isForced.normalize=function(string){
return String(string).replace(replacement,".").toLowerCase()
},data=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,path={},aFunction=function(it){
if("function"!=typeof it)throw TypeError(String(it)+" is not a function")
;return it},bindContext=function(fn,that,length){
if(aFunction(fn),void 0===that)return fn
;switch(length){case 0:return function(){
return fn.call(that)};case 1:return function(a){
return fn.call(that,a)};case 2:
return function(a,b){return fn.call(that,a,b)}
;case 3:return function(a,b,c){
return fn.call(that,a,b,c)}}return function(){
return fn.apply(that,arguments)}
},anObject=function(it){
if(!isObject(it))throw TypeError(String(it)+" is not an object")
;return it
},nativeDefineProperty=Object.defineProperty,objectDefineProperty={
f:descriptors?nativeDefineProperty:function(O,P,Attributes){
if(anObject(O),P=toPrimitive(P,!0),
anObject(Attributes),ie8DomDefine)try{
return nativeDefineProperty(O,P,Attributes)
}catch(error){}
if("get"in Attributes||"set"in Attributes)throw TypeError("Accessors not supported")
;return"value"in Attributes&&(O[P]=Attributes.value),
O}},hide=descriptors?function(object,key,value){
return objectDefineProperty.f(object,key,createPropertyDescriptor(1,value))
}:function(object,key,value){
return object[key]=value,object
},getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,wrapConstructor=function(NativeConstructor){
var Wrapper=function(a,b,c){
if(this instanceof NativeConstructor){
switch(arguments.length){case 0:
return new NativeConstructor;case 1:
return new NativeConstructor(a);case 2:
return new NativeConstructor(a,b)}
return new NativeConstructor(a,b,c)}
return NativeConstructor.apply(this,arguments)}
;return Wrapper.prototype=NativeConstructor.prototype,
Wrapper},_export=function(options,source){
var USE_NATIVE,VIRTUAL_PROTOTYPE,key,sourceProperty,targetProperty,nativeProperty,resultProperty,descriptor,TARGET=options.target,GLOBAL=options.global,STATIC=options.stat,PROTO=options.proto,nativeSource=GLOBAL?global_1:STATIC?global_1[TARGET]:(global_1[TARGET]||{}).prototype,target=GLOBAL?path:path[TARGET]||(path[TARGET]={}),targetPrototype=target.prototype
;for(key in source)USE_NATIVE=!isForced_1(GLOBAL?key:TARGET+(STATIC?".":"#")+key,options.forced)&&nativeSource&&has(nativeSource,key),
targetProperty=target[key],
USE_NATIVE&&(nativeProperty=options.noTargetGet?(descriptor=getOwnPropertyDescriptor$1(nativeSource,key))&&descriptor.value:nativeSource[key]),
sourceProperty=USE_NATIVE&&nativeProperty?nativeProperty:source[key],
USE_NATIVE&&typeof targetProperty==typeof sourceProperty||(resultProperty=options.bind&&USE_NATIVE?bindContext(sourceProperty,global_1):options.wrap&&USE_NATIVE?wrapConstructor(sourceProperty):PROTO&&"function"==typeof sourceProperty?bindContext(Function.call,sourceProperty):sourceProperty,
(options.sham||sourceProperty&&sourceProperty.sham||targetProperty&&targetProperty.sham)&&hide(resultProperty,"sham",!0),
target[key]=resultProperty,
PROTO&&(has(path,VIRTUAL_PROTOTYPE=TARGET+"Prototype")||hide(path,VIRTUAL_PROTOTYPE,{}),
path[VIRTUAL_PROTOTYPE][key]=sourceProperty,
options.real&&targetPrototype&&!targetPrototype[key]&&hide(targetPrototype,key,sourceProperty)))
},globalIsFinite=global_1.isFinite,numberIsFinite=Number.isFinite||function(it){
return"number"==typeof it&&globalIsFinite(it)}
;_export({target:"Number",stat:!0},{
isFinite:numberIsFinite})
;var _isFinite$2=path.Number.isFinite,aFunction$1=function(variable){
return"function"==typeof variable?variable:void 0
},getBuiltIn=function(namespace,method){
return arguments.length<2?aFunction$1(path[namespace])||aFunction$1(global_1[namespace]):path[namespace]&&path[namespace][method]||global_1[namespace]&&global_1[namespace][method]
},userAgent=getBuiltIn("navigator","userAgent")||"",slice=[].slice,MSIE=/MSIE .\./.test(userAgent),wrap=function(scheduler){
return function(handler,timeout){
var boundArgs=arguments.length>2,args=boundArgs?slice.call(arguments,2):void 0
;return scheduler(boundArgs?function(){
("function"==typeof handler?handler:Function(handler)).apply(this,args)
}:handler,timeout)}};_export({global:!0,bind:!0,
forced:MSIE},{
setTimeout:wrap(global_1.setTimeout),
setInterval:wrap(global_1.setInterval)})
;var setInterval$1=path.setInterval,isArray=Array.isArray||function(arg){
return"Array"==classofRaw(arg)
},nativeReverse=[].reverse,test=[1,2];_export({
target:"Array",proto:!0,
forced:String(test)===String(test.reverse())},{
reverse:function(){
return isArray(this)&&(this.length=this.length),nativeReverse.call(this)
}});var entryVirtual=function(CONSTRUCTOR){
return path[CONSTRUCTOR+"Prototype"]
},reverse=entryVirtual("Array").reverse,ArrayPrototype=Array.prototype,reverse$2=function(it){
var own=it.reverse
;return it===ArrayPrototype||it instanceof Array&&own===ArrayPrototype.reverse?reverse:own
},$hypot=Math.hypot,abs=Math.abs,sqrt=Math.sqrt,BUGGY=!!$hypot&&$hypot(1/0,NaN)!==1/0
;_export({target:"Math",stat:!0,forced:BUGGY},{
hypot:function(value1,value2){
for(var arg,div,sum=0,i=0,aLen=arguments.length,larg=0;i<aLen;)larg<(arg=abs(arguments[i++]))?(sum=sum*(div=larg/arg)*div+1,
larg=arg):sum+=arg>0?(div=arg/larg)*div:arg
;return larg===1/0?1/0:larg*sqrt(sum)}})
;var hypot$2=path.Math.hypot,toObject=function(argument){
return Object(requireObjectCoercible(argument))
},shared=createCommonjsModule((function(module){
var store=global_1["__core-js_shared__"]||function(key,value){
try{hide(global_1,key,value)}catch(error){
global_1[key]=value}return value
}("__core-js_shared__",{})
;(module.exports=function(key,value){
return store[key]||(store[key]=void 0!==value?value:{})
})("versions",[]).push({version:"3.2.1",
mode:"pure",
copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})
})),id=0,postfix=Math.random(),uid=function(key){
return"Symbol("+String(void 0===key?"":key)+")_"+(++id+postfix).toString(36)
},keys=shared("keys"),sharedKey=function(key){
return keys[key]||(keys[key]=uid(key))
},correctPrototypeGetter=!fails((function(){
function F(){}
return F.prototype.constructor=null,Object.getPrototypeOf(new F)!==F.prototype
})),IE_PROTO=sharedKey("IE_PROTO"),ObjectPrototype=Object.prototype,objectGetPrototypeOf=correctPrototypeGetter?Object.getPrototypeOf:function(O){
return O=toObject(O),
has(O,IE_PROTO)?O[IE_PROTO]:"function"==typeof O.constructor&&O instanceof O.constructor?O.constructor.prototype:O instanceof Object?ObjectPrototype:null
};_export({target:"Reflect",stat:!0},{
get:function get(target,propertyKey){
var descriptor,prototype,receiver=arguments.length<3?target:arguments[2]
;return anObject(target)===receiver?target[propertyKey]:(descriptor=objectGetOwnPropertyDescriptor.f(target,propertyKey))?has(descriptor,"value")?descriptor.value:void 0===descriptor.get?void 0:descriptor.get.call(receiver):isObject(prototype=objectGetPrototypeOf(target))?get(prototype,propertyKey,receiver):void 0
}})
;var get$3=path.Reflect.get,ceil=Math.ceil,floor=Math.floor,toInteger=function(argument){
return isNaN(argument=+argument)?0:(argument>0?floor:ceil)(argument)
},max=Math.max,min=Math.min,toAbsoluteIndex=function(index,length){
var integer=toInteger(index)
;return integer<0?max(integer+length,0):min(integer,length)
},min$1=Math.min,toLength=function(argument){
return argument>0?min$1(toInteger(argument),9007199254740991):0
};_export({target:"Array",proto:!0},{
fill:function(value){
for(var O=toObject(this),length=toLength(O.length),argumentsLength=arguments.length,index=toAbsoluteIndex(argumentsLength>1?arguments[1]:void 0,length),end=argumentsLength>2?arguments[2]:void 0,endPos=void 0===end?length:toAbsoluteIndex(end,length);endPos>index;)O[index++]=value
;return O}})
;var set,get$4,has$1,fill=entryVirtual("Array").fill,ArrayPrototype$1=Array.prototype,fill$2=function(it){
var own=it.fill
;return it===ArrayPrototype$1||it instanceof Array&&own===ArrayPrototype$1.fill?fill:own
},iterators={},functionToString=shared("native-function-to-string",Function.toString),WeakMap=global_1.WeakMap,nativeWeakMap="function"==typeof WeakMap&&/native code/.test(functionToString.call(WeakMap)),hiddenKeys={},WeakMap$1=global_1.WeakMap
;if(nativeWeakMap){
var store=new WeakMap$1,wmget=store.get,wmhas=store.has,wmset=store.set
;set=function(it,metadata){
return wmset.call(store,it,metadata),metadata
},get$4=function(it){
return wmget.call(store,it)||{}
},has$1=function(it){return wmhas.call(store,it)}
}else{var STATE=sharedKey("state")
;hiddenKeys[STATE]=!0,set=function(it,metadata){
return hide(it,STATE,metadata),metadata
},get$4=function(it){
return has(it,STATE)?it[STATE]:{}
},has$1=function(it){return has(it,STATE)}}
var IteratorPrototype,PrototypeOfArrayIteratorPrototype,arrayIterator,internalState={
set:set,get:get$4,has:has$1,enforce:function(it){
return has$1(it)?get$4(it):set(it,{})},
getterFor:function(TYPE){return function(it){
var state
;if(!isObject(it)||(state=get$4(it)).type!==TYPE)throw TypeError("Incompatible receiver, "+TYPE+" required")
;return state}}
},nativeSymbol=!!Object.getOwnPropertySymbols&&!fails((function(){
return!String(Symbol())
})),Symbol$1=global_1.Symbol,store$1=shared("wks"),wellKnownSymbol=function(name){
return store$1[name]||(store$1[name]=nativeSymbol&&Symbol$1[name]||(nativeSymbol?Symbol$1:uid)("Symbol."+name))
},BUGGY_SAFARI_ITERATORS=(wellKnownSymbol("iterator"),
!1)
;[].keys&&("next"in(arrayIterator=[].keys())?(PrototypeOfArrayIteratorPrototype=objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)))!==Object.prototype&&(IteratorPrototype=PrototypeOfArrayIteratorPrototype):BUGGY_SAFARI_ITERATORS=!0),
null==IteratorPrototype&&(IteratorPrototype={})
;var iteratorsCore={
IteratorPrototype:IteratorPrototype,
BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS
},createMethod=function(IS_INCLUDES){
return function($this,el,fromIndex){
var value,O=toIndexedObject($this),length=toLength(O.length),index=toAbsoluteIndex(fromIndex,length)
;if(IS_INCLUDES&&el!=el){
for(;length>index;)if((value=O[index++])!=value)return!0
}else for(;length>index;index++)if((IS_INCLUDES||index in O)&&O[index]===el)return IS_INCLUDES||index||0
;return!IS_INCLUDES&&-1}},arrayIncludes={
includes:createMethod(!0),indexOf:createMethod(!1)
},indexOf=arrayIncludes.indexOf,objectKeysInternal=function(object,names){
var key,O=toIndexedObject(object),i=0,result=[]
;for(key in O)!has(hiddenKeys,key)&&has(O,key)&&result.push(key)
;for(;names.length>i;)has(O,key=names[i++])&&(~indexOf(result,key)||result.push(key))
;return result
},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],objectKeys=Object.keys||function(O){
return objectKeysInternal(O,enumBugKeys)
},objectDefineProperties=descriptors?Object.defineProperties:function(O,Properties){
anObject(O)
;for(var key,keys=objectKeys(Properties),length=keys.length,index=0;length>index;)objectDefineProperty.f(O,key=keys[index++],Properties[key])
;return O
},html=getBuiltIn("document","documentElement"),IE_PROTO$1=sharedKey("IE_PROTO"),Empty=function(){},createDict=function(){
var iframeDocument,iframe=documentCreateElement("iframe"),length=enumBugKeys.length
;for(iframe.style.display="none",
html.appendChild(iframe),iframe.src=String("javascript:"),
(iframeDocument=iframe.contentWindow.document).open(),
iframeDocument.write("<script>document.F=Object<\/script>"),
iframeDocument.close(),
createDict=iframeDocument.F;length--;)delete createDict.prototype[enumBugKeys[length]]
;return createDict()
},objectCreate=Object.create||function(O,Properties){
var result
;return null!==O?(Empty.prototype=anObject(O),result=new Empty,Empty.prototype=null,
result[IE_PROTO$1]=O):result=createDict(),
void 0===Properties?result:objectDefineProperties(result,Properties)
};hiddenKeys[IE_PROTO$1]=!0
;var TO_STRING_TAG=wellKnownSymbol("toStringTag"),CORRECT_ARGUMENTS="Arguments"==classofRaw(function(){
return arguments}()),classof=function(it){
var O,tag,result
;return void 0===it?"Undefined":null===it?"Null":"string"==typeof(tag=function(it,key){
try{return it[key]}catch(error){}
}(O=Object(it),TO_STRING_TAG))?tag:CORRECT_ARGUMENTS?classofRaw(O):"Object"==(result=classofRaw(O))&&"function"==typeof O.callee?"Arguments":result
},test$1={}
;test$1[wellKnownSymbol("toStringTag")]="z"
;var objectToString="[object z]"!==String(test$1)?function(){
return"[object "+classof(this)+"]"
}:test$1.toString,defineProperty=objectDefineProperty.f,TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),METHOD_REQUIRED=objectToString!=={}.toString,setToStringTag=function(it,TAG,STATIC,SET_METHOD){
if(it){var target=STATIC?it:it.prototype
;has(target,TO_STRING_TAG$2)||defineProperty(target,TO_STRING_TAG$2,{
configurable:!0,value:TAG
}),SET_METHOD&&METHOD_REQUIRED&&hide(target,"toString",objectToString)
}
},IteratorPrototype$1=iteratorsCore.IteratorPrototype,returnThis=function(){
return this
},objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){
var setter,CORRECT_SETTER=!1,test={};try{
(setter=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(test,[]),
CORRECT_SETTER=test instanceof Array
}catch(error){}return function(O,proto){
return anObject(O),function(it){
if(!isObject(it)&&null!==it)throw TypeError("Can't set "+String(it)+" as a prototype")
}(proto),
CORRECT_SETTER?setter.call(O,proto):O.__proto__=proto,O
}
}():void 0),redefine=function(target,key,value,options){
options&&options.enumerable?target[key]=value:hide(target,key,value)
},IteratorPrototype$2=iteratorsCore.IteratorPrototype,BUGGY_SAFARI_ITERATORS$1=iteratorsCore.BUGGY_SAFARI_ITERATORS,ITERATOR$1=wellKnownSymbol("iterator"),returnThis$1=function(){
return this
},defineIterator=function(Iterable,NAME,IteratorConstructor,next,DEFAULT,IS_SET,FORCED){
!function(IteratorConstructor,NAME,next){
var TO_STRING_TAG=NAME+" Iterator"
;IteratorConstructor.prototype=objectCreate(IteratorPrototype$1,{
next:createPropertyDescriptor(1,next)
}),setToStringTag(IteratorConstructor,TO_STRING_TAG,!1,!0),
iterators[TO_STRING_TAG]=returnThis
}(IteratorConstructor,NAME,next)
;var CurrentIteratorPrototype,methods,KEY,getIterationMethod=function(KIND){
if(KIND===DEFAULT&&defaultIterator)return defaultIterator
;if(!BUGGY_SAFARI_ITERATORS$1&&KIND in IterablePrototype)return IterablePrototype[KIND]
;switch(KIND){case"keys":case"values":
case"entries":return function(){
return new IteratorConstructor(this,KIND)}}
return function(){
return new IteratorConstructor(this)}
},TO_STRING_TAG=NAME+" Iterator",INCORRECT_VALUES_NAME=!1,IterablePrototype=Iterable.prototype,nativeIterator=IterablePrototype[ITERATOR$1]||IterablePrototype["@@iterator"]||DEFAULT&&IterablePrototype[DEFAULT],defaultIterator=!BUGGY_SAFARI_ITERATORS$1&&nativeIterator||getIterationMethod(DEFAULT),anyNativeIterator="Array"==NAME&&IterablePrototype.entries||nativeIterator
;if(anyNativeIterator&&(CurrentIteratorPrototype=objectGetPrototypeOf(anyNativeIterator.call(new Iterable)),
IteratorPrototype$2!==Object.prototype&&CurrentIteratorPrototype.next&&(setToStringTag(CurrentIteratorPrototype,TO_STRING_TAG,!0,!0),
iterators[TO_STRING_TAG]=returnThis$1)),
"values"==DEFAULT&&nativeIterator&&"values"!==nativeIterator.name&&(INCORRECT_VALUES_NAME=!0,
defaultIterator=function(){
return nativeIterator.call(this)
}),FORCED&&IterablePrototype[ITERATOR$1]!==defaultIterator&&hide(IterablePrototype,ITERATOR$1,defaultIterator),
iterators[NAME]=defaultIterator,
DEFAULT)if(methods={
values:getIterationMethod("values"),
keys:IS_SET?defaultIterator:getIterationMethod("keys"),
entries:getIterationMethod("entries")
},FORCED)for(KEY in methods)!BUGGY_SAFARI_ITERATORS$1&&!INCORRECT_VALUES_NAME&&KEY in IterablePrototype||redefine(IterablePrototype,KEY,methods[KEY]);else _export({
target:NAME,proto:!0,
forced:BUGGY_SAFARI_ITERATORS$1||INCORRECT_VALUES_NAME
},methods);return methods
},setInternalState=internalState.set,getInternalState=internalState.getterFor("Array Iterator")
;defineIterator(Array,"Array",(function(iterated,kind){
setInternalState(this,{type:"Array Iterator",
target:toIndexedObject(iterated),index:0,kind:kind
})}),(function(){
var state=getInternalState(this),target=state.target,kind=state.kind,index=state.index++
;return!target||index>=target.length?(state.target=void 0,
{value:void 0,done:!0}):"keys"==kind?{value:index,
done:!1}:"values"==kind?{value:target[index],
done:!1}:{value:[index,target[index]],done:!1}
}),"values");iterators.Arguments=iterators.Array
;var TO_STRING_TAG$3=wellKnownSymbol("toStringTag")
;for(var COLLECTION_NAME in{CSSRuleList:0,
CSSStyleDeclaration:0,CSSValueList:0,
ClientRectList:0,DOMRectList:0,DOMStringList:0,
DOMTokenList:1,DataTransferItemList:0,FileList:0,
HTMLAllCollection:0,HTMLCollection:0,
HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,
MimeTypeArray:0,NamedNodeMap:0,NodeList:1,
PaintRequestList:0,Plugin:0,PluginArray:0,
SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,
SVGPointList:0,SVGStringList:0,SVGTransformList:0,
SourceBufferList:0,StyleSheetList:0,
TextTrackCueList:0,TextTrackList:0,TouchList:0}){
var Collection=global_1[COLLECTION_NAME],CollectionPrototype=Collection&&Collection.prototype
;CollectionPrototype&&!CollectionPrototype[TO_STRING_TAG$3]&&hide(CollectionPrototype,TO_STRING_TAG$3,COLLECTION_NAME),
iterators[COLLECTION_NAME]=iterators.Array}
var values$1=entryVirtual("Array").values,ArrayPrototype$2=Array.prototype,DOMIterables={
DOMTokenList:!0,NodeList:!0
},values$2=function(it){var own=it.values
;return it===ArrayPrototype$2||it instanceof Array&&own===ArrayPrototype$2.values||DOMIterables.hasOwnProperty(classof(it))?values$1:own
},$includes=arrayIncludes.includes;_export({
target:"Array",proto:!0},{includes:function(el){
return $includes(this,el,arguments.length>1?arguments[1]:void 0)
}})
;var includes=entryVirtual("Array").includes,MATCH=wellKnownSymbol("match"),notARegexp=function(it){
if(function(it){var isRegExp
;return isObject(it)&&(void 0!==(isRegExp=it[MATCH])?!!isRegExp:"RegExp"==classofRaw(it))
}(it))throw TypeError("The method doesn't accept regular expressions")
;return it},MATCH$1=wellKnownSymbol("match")
;_export({target:"String",proto:!0,
forced:!function(METHOD_NAME){var regexp=/./;try{
"/./"[METHOD_NAME](regexp)}catch(e){try{
return regexp[MATCH$1]=!1,"/./"[METHOD_NAME](regexp)
}catch(f){}}return!1}("includes")},{
includes:function(searchString){
return!!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString),arguments.length>1?arguments[1]:void 0)
}})
;var includes$1=entryVirtual("String").includes,ArrayPrototype$3=Array.prototype,StringPrototype=String.prototype,includes$4=function(it){
var own=it.includes
;return it===ArrayPrototype$3||it instanceof Array&&own===ArrayPrototype$3.includes?includes:"string"==typeof it||it===StringPrototype||it instanceof String&&own===StringPrototype.includes?includes$1:own
},slice$1=[].slice,factories={},construct=function(C,argsLength,args){
if(!(argsLength in factories)){
for(var list=[],i=0;i<argsLength;i++)list[i]="a["+i+"]"
;factories[argsLength]=Function("C,a","return new C("+list.join(",")+")")
}return factories[argsLength](C,args)
},functionBind=Function.bind||function(that){
var fn=aFunction(this),partArgs=slice$1.call(arguments,1),boundFunction=function(){
var args=partArgs.concat(slice$1.call(arguments))
;return this instanceof boundFunction?construct(fn,args.length,args):fn.apply(that,args)
}
;return isObject(fn.prototype)&&(boundFunction.prototype=fn.prototype),boundFunction
};_export({target:"Function",proto:!0},{
bind:functionBind})
;var bind=entryVirtual("Function").bind,FunctionPrototype=Function.prototype,bind$2=function(it){
var own=it.bind
;return it===FunctionPrototype||it instanceof Function&&own===FunctionPrototype.bind?bind:own
},$JSON=path.JSON||(path.JSON={
stringify:JSON.stringify
}),stringify$2=function(it){
return $JSON.stringify.apply($JSON,arguments)
},createMethod$1=function(IS_RIGHT){
return function(that,callbackfn,argumentsLength,memo){
aFunction(callbackfn)
;var O=toObject(that),self=indexedObject(O),length=toLength(O.length),index=IS_RIGHT?length-1:0,i=IS_RIGHT?-1:1
;if(argumentsLength<2)for(;;){if(index in self){
memo=self[index],index+=i;break}
if(index+=i,IS_RIGHT?index<0:length<=index)throw TypeError("Reduce of empty array with no initial value")
}
for(;IS_RIGHT?index>=0:length>index;index+=i)index in self&&(memo=callbackfn(memo,self[index],index,O))
;return memo}
},sloppyArrayMethod=function(METHOD_NAME,argument){
var method=[][METHOD_NAME]
;return!method||!fails((function(){
method.call(null,argument||function(){throw 1},1)
}))},$reduce={left:createMethod$1(!1),
right:createMethod$1(!0)}.left;_export({
target:"Array",proto:!0,
forced:sloppyArrayMethod("reduce")},{
reduce:function(callbackfn){
return $reduce(this,callbackfn,arguments.length,arguments.length>1?arguments[1]:void 0)
}})
;var reduce=entryVirtual("Array").reduce,ArrayPrototype$4=Array.prototype,reduce$2=function(it){
var own=it.reduce
;return it===ArrayPrototype$4||it instanceof Array&&own===ArrayPrototype$4.reduce?reduce:own
},SPECIES=wellKnownSymbol("species"),arraySpeciesCreate=function(originalArray,length){
var C
;return isArray(originalArray)&&("function"!=typeof(C=originalArray.constructor)||C!==Array&&!isArray(C.prototype)?isObject(C)&&null===(C=C[SPECIES])&&(C=void 0):C=void 0),
new(void 0===C?Array:C)(0===length?0:length)
},createProperty=function(object,key,value){
var propertyKey=toPrimitive(key)
;propertyKey in object?objectDefineProperty.f(object,propertyKey,createPropertyDescriptor(0,value)):object[propertyKey]=value
},SPECIES$1=wellKnownSymbol("species"),arrayMethodHasSpeciesSupport=function(METHOD_NAME){
return!fails((function(){var array=[]
;return(array.constructor={})[SPECIES$1]=function(){
return{foo:1}},1!==array[METHOD_NAME](Boolean).foo
}))},max$1=Math.max,min$2=Math.min;_export({
target:"Array",proto:!0,
forced:!arrayMethodHasSpeciesSupport("splice")},{
splice:function(start,deleteCount){
var insertCount,actualDeleteCount,A,k,from,to,O=toObject(this),len=toLength(O.length),actualStart=toAbsoluteIndex(start,len),argumentsLength=arguments.length
;if(0===argumentsLength?insertCount=actualDeleteCount=0:1===argumentsLength?(insertCount=0,
actualDeleteCount=len-actualStart):(insertCount=argumentsLength-2,
actualDeleteCount=min$2(max$1(toInteger(deleteCount),0),len-actualStart)),
len+insertCount-actualDeleteCount>9007199254740991)throw TypeError("Maximum allowed length exceeded")
;for(A=arraySpeciesCreate(O,actualDeleteCount),
k=0;k<actualDeleteCount;k++)(from=actualStart+k)in O&&createProperty(A,k,O[from])
;if(A.length=actualDeleteCount,
insertCount<actualDeleteCount){
for(k=actualStart;k<len-actualDeleteCount;k++)to=k+insertCount,
(from=k+actualDeleteCount)in O?O[to]=O[from]:delete O[to]
;for(k=len;k>len-actualDeleteCount+insertCount;k--)delete O[k-1]
}else if(insertCount>actualDeleteCount)for(k=len-actualDeleteCount;k>actualStart;k--)to=k+insertCount-1,
(from=k+actualDeleteCount-1)in O?O[to]=O[from]:delete O[to]
;for(k=0;k<insertCount;k++)O[k+actualStart]=arguments[k+2]
;return O.length=len-actualDeleteCount+insertCount,
A}})
;var splice=entryVirtual("Array").splice,ArrayPrototype$5=Array.prototype,splice$2=function(it){
var own=it.splice
;return it===ArrayPrototype$5||it instanceof Array&&own===ArrayPrototype$5.splice?splice:own
},setTimeout$1=path.setTimeout,freezing=!fails((function(){
return Object.isExtensible(Object.preventExtensions({}))
})),internalMetadata=createCommonjsModule((function(module){
var defineProperty=objectDefineProperty.f,METADATA=uid("meta"),id=0,isExtensible=Object.isExtensible||function(){
return!0},setMetadata=function(it){
defineProperty(it,METADATA,{value:{
objectID:"O"+ ++id,weakData:{}}})
},meta=module.exports={REQUIRED:!1,
fastKey:function(it,create){
if(!isObject(it))return"symbol"==typeof it?it:("string"==typeof it?"S":"P")+it
;if(!has(it,METADATA)){
if(!isExtensible(it))return"F"
;if(!create)return"E";setMetadata(it)}
return it[METADATA].objectID},
getWeakData:function(it,create){
if(!has(it,METADATA)){
if(!isExtensible(it))return!0;if(!create)return!1
;setMetadata(it)}return it[METADATA].weakData},
onFreeze:function(it){
return freezing&&meta.REQUIRED&&isExtensible(it)&&!has(it,METADATA)&&setMetadata(it),
it}};hiddenKeys[METADATA]=!0
})),onFreeze=(internalMetadata.REQUIRED,internalMetadata.fastKey,
internalMetadata.getWeakData,
internalMetadata.onFreeze,internalMetadata.onFreeze),nativeFreeze=Object.freeze,FAILS_ON_PRIMITIVES=fails((function(){
nativeFreeze(1)}));_export({target:"Object",
stat:!0,forced:FAILS_ON_PRIMITIVES,sham:!freezing
},{freeze:function(it){
return nativeFreeze&&isObject(it)?nativeFreeze(onFreeze(it)):it
}})
;var freeze$2=path.Object.freeze,createMethod$2=function(CONVERT_TO_STRING){
return function($this,pos){
var first,second,S=String(requireObjectCoercible($this)),position=toInteger(pos),size=S.length
;return position<0||position>=size?CONVERT_TO_STRING?"":void 0:(first=S.charCodeAt(position))<55296||first>56319||position+1===size||(second=S.charCodeAt(position+1))<56320||second>57343?CONVERT_TO_STRING?S.charAt(position):first:CONVERT_TO_STRING?S.slice(position,position+2):second-56320+(first-55296<<10)+65536
}},charAt={codeAt:createMethod$2(!1),
charAt:createMethod$2(!0)
}.charAt,setInternalState$1=internalState.set,getInternalState$1=internalState.getterFor("String Iterator")
;defineIterator(String,"String",(function(iterated){
setInternalState$1(this,{type:"String Iterator",
string:String(iterated),index:0})}),(function(){
var point,state=getInternalState$1(this),string=state.string,index=state.index
;return index>=string.length?{value:void 0,done:!0
}:(point=charAt(string,index),
state.index+=point.length,{value:point,done:!1})
}))
;var ITERATOR$2=wellKnownSymbol("iterator"),getIteratorMethod=function(it){
if(null!=it)return it[ITERATOR$2]||it["@@iterator"]||iterators[classof(it)]
},getIterator$2=function(it){
var iteratorMethod=getIteratorMethod(it)
;if("function"!=typeof iteratorMethod)throw TypeError(String(it)+" is not iterable")
;return anObject(iteratorMethod.call(it))
},push=[].push,createMethod$3=function(TYPE){
var IS_MAP=1==TYPE,IS_FILTER=2==TYPE,IS_SOME=3==TYPE,IS_EVERY=4==TYPE,IS_FIND_INDEX=6==TYPE,NO_HOLES=5==TYPE||IS_FIND_INDEX
;return function($this,callbackfn,that,specificCreate){
for(var value,result,O=toObject($this),self=indexedObject(O),boundFunction=bindContext(callbackfn,that,3),length=toLength(self.length),index=0,create=specificCreate||arraySpeciesCreate,target=IS_MAP?create($this,length):IS_FILTER?create($this,0):void 0;length>index;index++)if((NO_HOLES||index in self)&&(result=boundFunction(value=self[index],index,O),
TYPE))if(IS_MAP)target[index]=result;else if(result)switch(TYPE){
case 3:return!0;case 5:return value;case 6:
return index;case 2:push.call(target,value)
}else if(IS_EVERY)return!1
;return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:target
}},arrayIteration={forEach:createMethod$3(0),
map:createMethod$3(1),filter:createMethod$3(2),
some:createMethod$3(3),every:createMethod$3(4),
find:createMethod$3(5),findIndex:createMethod$3(6)
},$map=arrayIteration.map;_export({target:"Array",
proto:!0,
forced:!arrayMethodHasSpeciesSupport("map")},{
map:function(callbackfn){
return $map(this,callbackfn,arguments.length>1?arguments[1]:void 0)
}})
;var map=entryVirtual("Array").map,ArrayPrototype$6=Array.prototype,map$2=function(it){
var own=it.map
;return it===ArrayPrototype$6||it instanceof Array&&own===ArrayPrototype$6.map?map:own
},propertyIsEnumerable=objectPropertyIsEnumerable.f,createMethod$4=function(TO_ENTRIES){
return function(it){
for(var key,O=toIndexedObject(it),keys=objectKeys(O),length=keys.length,i=0,result=[];length>i;)key=keys[i++],
descriptors&&!propertyIsEnumerable.call(O,key)||result.push(TO_ENTRIES?[key,O[key]]:O[key])
;return result}},$values={
entries:createMethod$4(!0),
values:createMethod$4(!1)}.values;_export({
target:"Object",stat:!0},{values:function(O){
return $values(O)}})
;var values$5=path.Object.values;_export({
target:"Date",stat:!0},{now:function(){
return(new Date).getTime()}})
;var now$2=path.Date.now,$some=arrayIteration.some
;_export({target:"Array",proto:!0,
forced:sloppyArrayMethod("some")},{
some:function(callbackfn){
return $some(this,callbackfn,arguments.length>1?arguments[1]:void 0)
}})
;var some=entryVirtual("Array").some,ArrayPrototype$7=Array.prototype,some$2=function(it){
var own=it.some
;return it===ArrayPrototype$7||it instanceof Array&&own===ArrayPrototype$7.some?some:own
},whitespaces="\t\n\v\f\r                　\u2028\u2029\ufeff",whitespace="["+whitespaces+"]",ltrim=RegExp("^"+whitespace+whitespace+"*"),rtrim=RegExp(whitespace+whitespace+"*$"),createMethod$5=function(TYPE){
return function($this){
var string=String(requireObjectCoercible($this))
;return 1&TYPE&&(string=string.replace(ltrim,"")),
2&TYPE&&(string=string.replace(rtrim,"")),string}
},stringTrim={start:createMethod$5(1),
end:createMethod$5(2),trim:createMethod$5(3)
},trim=stringTrim.trim,nativeParseFloat=global_1.parseFloat,_parseFloat=1/nativeParseFloat(whitespaces+"-0")!=-1/0?function(string){
var trimmedString=trim(String(string)),result=nativeParseFloat(trimmedString)
;return 0===result&&"-"==trimmedString.charAt(0)?-0:result
}:nativeParseFloat;_export({global:!0,
forced:parseFloat!=_parseFloat},{
parseFloat:_parseFloat})
;var _parseFloat$3=path.parseFloat,$indexOf=arrayIncludes.indexOf,nativeIndexOf=[].indexOf,NEGATIVE_ZERO=!!nativeIndexOf&&1/[1].indexOf(1,-0)<0,SLOPPY_METHOD=sloppyArrayMethod("indexOf")
;_export({target:"Array",proto:!0,
forced:NEGATIVE_ZERO||SLOPPY_METHOD},{
indexOf:function(searchElement){
return NEGATIVE_ZERO?nativeIndexOf.apply(this,arguments)||0:$indexOf(this,searchElement,arguments.length>1?arguments[1]:void 0)
}})
;var indexOf$1=entryVirtual("Array").indexOf,ArrayPrototype$8=Array.prototype,indexOf$3=function(it){
var own=it.indexOf
;return it===ArrayPrototype$8||it instanceof Array&&own===ArrayPrototype$8.indexOf?indexOf$1:own
},nativeSort=[].sort,test$2=[1,2,3],FAILS_ON_UNDEFINED=fails((function(){
test$2.sort(void 0)
})),FAILS_ON_NULL=fails((function(){
test$2.sort(null)
})),SLOPPY_METHOD$1=sloppyArrayMethod("sort")
;_export({target:"Array",proto:!0,
forced:FAILS_ON_UNDEFINED||!FAILS_ON_NULL||SLOPPY_METHOD$1
},{sort:function(comparefn){
return void 0===comparefn?nativeSort.call(toObject(this)):nativeSort.call(toObject(this),aFunction(comparefn))
}})
;var sort=entryVirtual("Array").sort,ArrayPrototype$9=Array.prototype,sort$2=function(it){
var own=it.sort
;return it===ArrayPrototype$9||it instanceof Array&&own===ArrayPrototype$9.sort?sort:own
},nativeIsFrozen=Object.isFrozen,FAILS_ON_PRIMITIVES$1=fails((function(){
nativeIsFrozen(1)}));_export({target:"Object",
stat:!0,forced:FAILS_ON_PRIMITIVES$1},{
isFrozen:function(it){
return!isObject(it)||!!nativeIsFrozen&&nativeIsFrozen(it)
}})
;var isFrozen$2=path.Object.isFrozen,trim$1=stringTrim.trim,nativeParseInt=global_1.parseInt,hex=/^[+-]?0[Xx]/,_parseInt=8!==nativeParseInt(whitespaces+"08")||22!==nativeParseInt(whitespaces+"0x16")?function(string,radix){
var S=trim$1(String(string))
;return nativeParseInt(S,radix>>>0||(hex.test(S)?16:10))
}:nativeParseInt;_export({global:!0,
forced:parseInt!=_parseInt},{parseInt:_parseInt})
;var METHOD_NAME,_parseInt$3=path.parseInt,$trim=stringTrim.trim
;_export({target:"String",proto:!0,
forced:(METHOD_NAME="trim",fails((function(){
return!!whitespaces[METHOD_NAME]()||"​᠎"!="​᠎"[METHOD_NAME]()||whitespaces[METHOD_NAME].name!==METHOD_NAME
})))},{trim:function(){return $trim(this)}})
;var trim$2=entryVirtual("String").trim,StringPrototype$1=String.prototype,trim$4=function(it){
var own=it.trim
;return"string"==typeof it||it===StringPrototype$1||it instanceof String&&own===StringPrototype$1.trim?trim$2:own
};_export({target:"Object",stat:!0},{
setPrototypeOf:objectSetPrototypeOf})
;var setPrototypeOf$2=path.Object.setPrototypeOf,objectGetOwnPropertySymbols={
f:Object.getOwnPropertySymbols
},nativeAssign=Object.assign,objectAssign=!nativeAssign||fails((function(){
var A={},B={},symbol=Symbol()
;return A[symbol]=7,"abcdefghijklmnopqrst".split("").forEach((function(chr){
B[chr]=chr
})),7!=nativeAssign({},A)[symbol]||"abcdefghijklmnopqrst"!=objectKeys(nativeAssign({},B)).join("")
}))?function(target,source){
for(var T=toObject(target),argumentsLength=arguments.length,index=1,getOwnPropertySymbols=objectGetOwnPropertySymbols.f,propertyIsEnumerable=objectPropertyIsEnumerable.f;argumentsLength>index;)for(var key,S=indexedObject(arguments[index++]),keys=getOwnPropertySymbols?objectKeys(S).concat(getOwnPropertySymbols(S)):objectKeys(S),length=keys.length,j=0;length>j;)key=keys[j++],
descriptors&&!propertyIsEnumerable.call(S,key)||(T[key]=S[key])
;return T}:nativeAssign;_export({target:"Object",
stat:!0,forced:Object.assign!==objectAssign},{
assign:objectAssign})
;var assign$2=path.Object.assign,entries$1=entryVirtual("Array").entries,ArrayPrototype$a=Array.prototype,DOMIterables$1={
DOMTokenList:!0,NodeList:!0
},entries$2=function(it){var own=it.entries
;return it===ArrayPrototype$a||it instanceof Array&&own===ArrayPrototype$a.entries||DOMIterables$1.hasOwnProperty(classof(it))?entries$1:own
},keys$2=entryVirtual("Array").keys,ArrayPrototype$b=Array.prototype,DOMIterables$2={
DOMTokenList:!0,NodeList:!0},keys$3=function(it){
var own=it.keys
;return it===ArrayPrototype$b||it instanceof Array&&own===ArrayPrototype$b.keys||DOMIterables$2.hasOwnProperty(classof(it))?keys$2:own
},FAILS_ON_PRIMITIVES$2=fails((function(){
objectGetPrototypeOf(1)}));_export({
target:"Object",stat:!0,
forced:FAILS_ON_PRIMITIVES$2,
sham:!correctPrototypeGetter},{
getPrototypeOf:function(it){
return objectGetPrototypeOf(toObject(it))}})
;var getPrototypeOf$2=path.Object.getPrototypeOf,regexpFlags=function(){
var that=anObject(this),result=""
;return that.global&&(result+="g"),that.ignoreCase&&(result+="i"),
that.multiline&&(result+="m"),
that.dotAll&&(result+="s"),that.unicode&&(result+="u"),
that.sticky&&(result+="y"),result
},flags_1=function(it){return regexpFlags.call(it)
},RegExpPrototype=RegExp.prototype,flags$1=function(it){
return!(it===RegExpPrototype||it instanceof RegExp)||"flags"in it?it.flags:flags_1(it)
},callWithSafeIterationClosing=function(iterator,fn,value,ENTRIES){
try{
return ENTRIES?fn(anObject(value)[0],value[1]):fn(value)
}catch(error){var returnMethod=iterator.return
;throw void 0!==returnMethod&&anObject(returnMethod.call(iterator)),
error}
},ITERATOR$3=wellKnownSymbol("iterator"),ArrayPrototype$c=Array.prototype,isArrayIteratorMethod=function(it){
return void 0!==it&&(iterators.Array===it||ArrayPrototype$c[ITERATOR$3]===it)
},ITERATOR$4=wellKnownSymbol("iterator"),SAFE_CLOSING=!1
;try{var called=0,iteratorWithReturn={
next:function(){return{done:!!called++}},
return:function(){SAFE_CLOSING=!0}}
;iteratorWithReturn[ITERATOR$4]=function(){
return this
},Array.from(iteratorWithReturn,(function(){
throw 2}))}catch(error){}
var INCORRECT_ITERATION=!function(exec,SKIP_CLOSING){
if(!SKIP_CLOSING&&!SAFE_CLOSING)return!1
;var ITERATION_SUPPORT=!1;try{var object={}
;object[ITERATOR$4]=function(){return{
next:function(){return{done:ITERATION_SUPPORT=!0}}
}},exec(object)}catch(error){}
return ITERATION_SUPPORT}((function(iterable){
Array.from(iterable)}));_export({target:"Array",
stat:!0,forced:INCORRECT_ITERATION},{
from:function(arrayLike){
var length,result,step,iterator,O=toObject(arrayLike),C="function"==typeof this?this:Array,argumentsLength=arguments.length,mapfn=argumentsLength>1?arguments[1]:void 0,mapping=void 0!==mapfn,index=0,iteratorMethod=getIteratorMethod(O)
;if(mapping&&(mapfn=bindContext(mapfn,argumentsLength>2?arguments[2]:void 0,2)),
null==iteratorMethod||C==Array&&isArrayIteratorMethod(iteratorMethod))for(result=new C(length=toLength(O.length));length>index;index++)createProperty(result,index,mapping?mapfn(O[index],index):O[index]);else for(iterator=iteratorMethod.call(O),
result=new C;!(step=iterator.next()).done;index++)createProperty(result,index,mapping?callWithSafeIterationClosing(iterator,mapfn,[step.value,index],!0):step.value)
;return result.length=index,result}})
;var from_1$2=path.Array.from,ITERATOR$5=wellKnownSymbol("iterator"),isIterable$2=function(it){
var O=Object(it)
;return void 0!==O[ITERATOR$5]||"@@iterator"in O||iterators.hasOwnProperty(classof(O))
},hiddenKeys$1=enumBugKeys.concat("length","prototype"),objectGetOwnPropertyNames={
f:Object.getOwnPropertyNames||function(O){
return objectKeysInternal(O,hiddenKeys$1)}
},ownKeys=getBuiltIn("Reflect","ownKeys")||function(it){
var keys=objectGetOwnPropertyNames.f(anObject(it)),getOwnPropertySymbols=objectGetOwnPropertySymbols.f
;return getOwnPropertySymbols?keys.concat(getOwnPropertySymbols(it)):keys
};_export({target:"Object",stat:!0,
sham:!descriptors},{
getOwnPropertyDescriptors:function(object){
for(var key,descriptor,O=toIndexedObject(object),getOwnPropertyDescriptor=objectGetOwnPropertyDescriptor.f,keys=ownKeys(O),result={},index=0;keys.length>index;)void 0!==(descriptor=getOwnPropertyDescriptor(O,key=keys[index++]))&&createProperty(result,key,descriptor)
;return result}})
;var getOwnPropertyDescriptors$2=path.Object.getOwnPropertyDescriptors,$forEach=arrayIteration.forEach,arrayForEach=sloppyArrayMethod("forEach")?function(callbackfn){
return $forEach(this,callbackfn,arguments.length>1?arguments[1]:void 0)
}:[].forEach;_export({target:"Array",proto:!0,
forced:[].forEach!=arrayForEach},{
forEach:arrayForEach})
;var forEach$1=entryVirtual("Array").forEach,ArrayPrototype$d=Array.prototype,DOMIterables$3={
DOMTokenList:!0,NodeList:!0
},forEach$2=function(it){var own=it.forEach
;return it===ArrayPrototype$d||it instanceof Array&&own===ArrayPrototype$d.forEach||DOMIterables$3.hasOwnProperty(classof(it))?forEach$1:own
},$filter=arrayIteration.filter;_export({
target:"Array",proto:!0,
forced:!arrayMethodHasSpeciesSupport("filter")},{
filter:function(callbackfn){
return $filter(this,callbackfn,arguments.length>1?arguments[1]:void 0)
}})
;var filter=entryVirtual("Array").filter,ArrayPrototype$e=Array.prototype,filter$2=function(it){
var own=it.filter
;return it===ArrayPrototype$e||it instanceof Array&&own===ArrayPrototype$e.filter?filter:own
},wrappedWellKnownSymbol={f:wellKnownSymbol
},defineProperty$1=objectDefineProperty.f,defineWellKnownSymbol=function(NAME){
var Symbol=path.Symbol||(path.Symbol={})
;has(Symbol,NAME)||defineProperty$1(Symbol,NAME,{
value:wrappedWellKnownSymbol.f(NAME)})}
;defineWellKnownSymbol("iterator")
;var iterator$2=wrappedWellKnownSymbol.f("iterator"),IS_CONCAT_SPREADABLE=wellKnownSymbol("isConcatSpreadable"),IS_CONCAT_SPREADABLE_SUPPORT=!fails((function(){
var array=[]
;return array[IS_CONCAT_SPREADABLE]=!1,array.concat()[0]!==array
})),SPECIES_SUPPORT=arrayMethodHasSpeciesSupport("concat"),isConcatSpreadable=function(O){
if(!isObject(O))return!1
;var spreadable=O[IS_CONCAT_SPREADABLE]
;return void 0!==spreadable?!!spreadable:isArray(O)
};_export({target:"Array",proto:!0,
forced:!IS_CONCAT_SPREADABLE_SUPPORT||!SPECIES_SUPPORT
},{concat:function(arg){
var i,k,length,len,E,O=toObject(this),A=arraySpeciesCreate(O,0),n=0
;for(i=-1,length=arguments.length;i<length;i++)if(E=-1===i?O:arguments[i],
isConcatSpreadable(E)){
if(n+(len=toLength(E.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded")
;for(k=0;k<len;k++,
n++)k in E&&createProperty(A,n,E[k])}else{
if(n>=9007199254740991)throw TypeError("Maximum allowed index exceeded")
;createProperty(A,n++,E)}return A.length=n,A}})
;var nativeGetOwnPropertyNames=objectGetOwnPropertyNames.f,toString$1={}.toString,windowNames="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],objectGetOwnPropertyNamesExternal={
f:function(it){
return windowNames&&"[object Window]"==toString$1.call(it)?function(it){
try{return nativeGetOwnPropertyNames(it)
}catch(error){return windowNames.slice()}
}(it):nativeGetOwnPropertyNames(toIndexedObject(it))
}
},$forEach$1=arrayIteration.forEach,HIDDEN=sharedKey("hidden"),TO_PRIMITIVE=wellKnownSymbol("toPrimitive"),setInternalState$2=internalState.set,getInternalState$2=internalState.getterFor("Symbol"),ObjectPrototype$1=Object.prototype,$Symbol=global_1.Symbol,JSON$1=global_1.JSON,nativeJSONStringify=JSON$1&&JSON$1.stringify,nativeGetOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,nativeDefineProperty$1=objectDefineProperty.f,nativeGetOwnPropertyNames$1=objectGetOwnPropertyNamesExternal.f,nativePropertyIsEnumerable$1=objectPropertyIsEnumerable.f,AllSymbols=shared("symbols"),ObjectPrototypeSymbols=shared("op-symbols"),StringToSymbolRegistry=shared("string-to-symbol-registry"),SymbolToStringRegistry=shared("symbol-to-string-registry"),WellKnownSymbolsStore=shared("wks"),QObject=global_1.QObject,USE_SETTER=!QObject||!QObject.prototype||!QObject.prototype.findChild,setSymbolDescriptor=descriptors&&fails((function(){
return 7!=objectCreate(nativeDefineProperty$1({},"a",{
get:function(){
return nativeDefineProperty$1(this,"a",{value:7
}).a}})).a}))?function(O,P,Attributes){
var ObjectPrototypeDescriptor=nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1,P)
;ObjectPrototypeDescriptor&&delete ObjectPrototype$1[P],
nativeDefineProperty$1(O,P,Attributes),
ObjectPrototypeDescriptor&&O!==ObjectPrototype$1&&nativeDefineProperty$1(ObjectPrototype$1,P,ObjectPrototypeDescriptor)
}:nativeDefineProperty$1,wrap$1=function(tag,description){
var symbol=AllSymbols[tag]=objectCreate($Symbol.prototype)
;return setInternalState$2(symbol,{type:"Symbol",
tag:tag,description:description
}),descriptors||(symbol.description=description),
symbol
},isSymbol=nativeSymbol&&"symbol"==typeof $Symbol.iterator?function(it){
return"symbol"==typeof it}:function(it){
return Object(it)instanceof $Symbol
},$defineProperty=function(O,P,Attributes){
O===ObjectPrototype$1&&$defineProperty(ObjectPrototypeSymbols,P,Attributes),
anObject(O);var key=toPrimitive(P,!0)
;return anObject(Attributes),has(AllSymbols,key)?(Attributes.enumerable?(has(O,HIDDEN)&&O[HIDDEN][key]&&(O[HIDDEN][key]=!1),
Attributes=objectCreate(Attributes,{
enumerable:createPropertyDescriptor(0,!1)
})):(has(O,HIDDEN)||nativeDefineProperty$1(O,HIDDEN,createPropertyDescriptor(1,{})),
O[HIDDEN][key]=!0),
setSymbolDescriptor(O,key,Attributes)):nativeDefineProperty$1(O,key,Attributes)
},$defineProperties=function(O,Properties){
anObject(O)
;var properties=toIndexedObject(Properties),keys=objectKeys(properties).concat($getOwnPropertySymbols(properties))
;return $forEach$1(keys,(function(key){
descriptors&&!$propertyIsEnumerable.call(properties,key)||$defineProperty(O,key,properties[key])
})),O},$propertyIsEnumerable=function(V){
var P=toPrimitive(V,!0),enumerable=nativePropertyIsEnumerable$1.call(this,P)
;return!(this===ObjectPrototype$1&&has(AllSymbols,P)&&!has(ObjectPrototypeSymbols,P))&&(!(enumerable||!has(this,P)||!has(AllSymbols,P)||has(this,HIDDEN)&&this[HIDDEN][P])||enumerable)
},$getOwnPropertyDescriptor=function(O,P){
var it=toIndexedObject(O),key=toPrimitive(P,!0)
;if(it!==ObjectPrototype$1||!has(AllSymbols,key)||has(ObjectPrototypeSymbols,key)){
var descriptor=nativeGetOwnPropertyDescriptor$1(it,key)
;return!descriptor||!has(AllSymbols,key)||has(it,HIDDEN)&&it[HIDDEN][key]||(descriptor.enumerable=!0),
descriptor}},$getOwnPropertyNames=function(O){
var names=nativeGetOwnPropertyNames$1(toIndexedObject(O)),result=[]
;return $forEach$1(names,(function(key){
has(AllSymbols,key)||has(hiddenKeys,key)||result.push(key)
})),result},$getOwnPropertySymbols=function(O){
var IS_OBJECT_PROTOTYPE=O===ObjectPrototype$1,names=nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE?ObjectPrototypeSymbols:toIndexedObject(O)),result=[]
;return $forEach$1(names,(function(key){
!has(AllSymbols,key)||IS_OBJECT_PROTOTYPE&&!has(ObjectPrototype$1,key)||result.push(AllSymbols[key])
})),result}
;nativeSymbol||(redefine(($Symbol=function(){
if(this instanceof $Symbol)throw TypeError("Symbol is not a constructor")
;var description=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,tag=uid(description),setter=function(value){
this===ObjectPrototype$1&&setter.call(ObjectPrototypeSymbols,value),
has(this,HIDDEN)&&has(this[HIDDEN],tag)&&(this[HIDDEN][tag]=!1),
setSymbolDescriptor(this,tag,createPropertyDescriptor(1,value))
}
;return descriptors&&USE_SETTER&&setSymbolDescriptor(ObjectPrototype$1,tag,{
configurable:!0,set:setter
}),wrap$1(tag,description)
}).prototype,"toString",(function(){
return getInternalState$2(this).tag
})),objectPropertyIsEnumerable.f=$propertyIsEnumerable,
objectDefineProperty.f=$defineProperty,
objectGetOwnPropertyDescriptor.f=$getOwnPropertyDescriptor,
objectGetOwnPropertyNames.f=objectGetOwnPropertyNamesExternal.f=$getOwnPropertyNames,
objectGetOwnPropertySymbols.f=$getOwnPropertySymbols,
descriptors&&nativeDefineProperty$1($Symbol.prototype,"description",{
configurable:!0,get:function(){
return getInternalState$2(this).description}
}),wrappedWellKnownSymbol.f=function(name){
return wrap$1(wellKnownSymbol(name),name)
}),_export({global:!0,wrap:!0,
forced:!nativeSymbol,sham:!nativeSymbol},{
Symbol:$Symbol
}),$forEach$1(objectKeys(WellKnownSymbolsStore),(function(name){
defineWellKnownSymbol(name)})),_export({
target:"Symbol",stat:!0,forced:!nativeSymbol},{
for:function(key){var string=String(key)
;if(has(StringToSymbolRegistry,string))return StringToSymbolRegistry[string]
;var symbol=$Symbol(string)
;return StringToSymbolRegistry[string]=symbol,SymbolToStringRegistry[symbol]=string,
symbol},keyFor:function(sym){
if(!isSymbol(sym))throw TypeError(sym+" is not a symbol")
;if(has(SymbolToStringRegistry,sym))return SymbolToStringRegistry[sym]
},useSetter:function(){USE_SETTER=!0},
useSimple:function(){USE_SETTER=!1}}),_export({
target:"Object",stat:!0,forced:!nativeSymbol,
sham:!descriptors},{create:function(O,Properties){
return void 0===Properties?objectCreate(O):$defineProperties(objectCreate(O),Properties)
},defineProperty:$defineProperty,
defineProperties:$defineProperties,
getOwnPropertyDescriptor:$getOwnPropertyDescriptor
}),_export({target:"Object",stat:!0,
forced:!nativeSymbol},{
getOwnPropertyNames:$getOwnPropertyNames,
getOwnPropertySymbols:$getOwnPropertySymbols
}),_export({target:"Object",stat:!0,
forced:fails((function(){
objectGetOwnPropertySymbols.f(1)}))},{
getOwnPropertySymbols:function(it){
return objectGetOwnPropertySymbols.f(toObject(it))
}}),JSON$1&&_export({target:"JSON",stat:!0,
forced:!nativeSymbol||fails((function(){
var symbol=$Symbol()
;return"[null]"!=nativeJSONStringify([symbol])||"{}"!=nativeJSONStringify({
a:symbol
})||"{}"!=nativeJSONStringify(Object(symbol))}))
},{stringify:function(it){
for(var replacer,$replacer,args=[it],index=1;arguments.length>index;)args.push(arguments[index++])
;if($replacer=replacer=args[1],
(isObject(replacer)||void 0!==it)&&!isSymbol(it))return isArray(replacer)||(replacer=function(key,value){
if("function"==typeof $replacer&&(value=$replacer.call(this,key,value)),
!isSymbol(value))return value
}),args[1]=replacer,nativeJSONStringify.apply(JSON$1,args)
}
}),$Symbol.prototype[TO_PRIMITIVE]||hide($Symbol.prototype,TO_PRIMITIVE,$Symbol.prototype.valueOf),
setToStringTag($Symbol,"Symbol"),
hiddenKeys[HIDDEN]=!0,defineWellKnownSymbol("asyncIterator"),
defineWellKnownSymbol("hasInstance"),
defineWellKnownSymbol("isConcatSpreadable"),
defineWellKnownSymbol("match"),defineWellKnownSymbol("matchAll"),
defineWellKnownSymbol("replace"),
defineWellKnownSymbol("search"),defineWellKnownSymbol("species"),
defineWellKnownSymbol("split"),
defineWellKnownSymbol("toPrimitive"),defineWellKnownSymbol("toStringTag"),
defineWellKnownSymbol("unscopables"),
setToStringTag(Math,"Math",!0),setToStringTag(global_1.JSON,"JSON",!0)
;var symbol$2=path.Symbol,nativeGetOwnPropertyDescriptor$2=objectGetOwnPropertyDescriptor.f,FAILS_ON_PRIMITIVES$3=fails((function(){
nativeGetOwnPropertyDescriptor$2(1)}));_export({
target:"Object",stat:!0,
forced:!descriptors||FAILS_ON_PRIMITIVES$3,
sham:!descriptors},{
getOwnPropertyDescriptor:function(it,key){
return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it),key)
}})
;var getOwnPropertyDescriptor$3=createCommonjsModule((function(module){
var Object=path.Object,getOwnPropertyDescriptor=module.exports=function(it,key){
return Object.getOwnPropertyDescriptor(it,key)}
;Object.getOwnPropertyDescriptor.sham&&(getOwnPropertyDescriptor.sham=!0)
})),nativeGetOwnPropertyNames$2=objectGetOwnPropertyNamesExternal.f,FAILS_ON_PRIMITIVES$4=fails((function(){
return!Object.getOwnPropertyNames(1)}));_export({
target:"Object",stat:!0,
forced:FAILS_ON_PRIMITIVES$4},{
getOwnPropertyNames:nativeGetOwnPropertyNames$2})
;var Object$1=path.Object,getOwnPropertyNames$2=function(it){
return Object$1.getOwnPropertyNames(it)
},concat=entryVirtual("Array").concat,ArrayPrototype$f=Array.prototype,concat$2=function(it){
var own=it.concat
;return it===ArrayPrototype$f||it instanceof Array&&own===ArrayPrototype$f.concat?concat:own
};_export({target:"Object",stat:!0,
sham:!descriptors},{create:objectCreate})
;var Object$2=path.Object,create$2=function(P,D){
return Object$2.create(P,D)};_export({
target:"Object",stat:!0,forced:!descriptors,
sham:!descriptors},{
defineProperties:objectDefineProperties})
;var defineProperties$1=createCommonjsModule((function(module){
var Object=path.Object,defineProperties=module.exports=function(T,D){
return Object.defineProperties(T,D)}
;Object.defineProperties.sham&&(defineProperties.sham=!0)
}));_export({target:"Array",stat:!0},{
isArray:isArray})
;var isArray$3=path.Array.isArray,getOwnPropertySymbols$2=path.Object.getOwnPropertySymbols,FAILS_ON_PRIMITIVES$5=fails((function(){
objectKeys(1)}));_export({target:"Object",stat:!0,
forced:FAILS_ON_PRIMITIVES$5},{keys:function(it){
return objectKeys(toObject(it))}})
;var keys$6=path.Object.keys,SPECIES$2=wellKnownSymbol("species"),nativeSlice=[].slice,max$2=Math.max
;_export({target:"Array",proto:!0,
forced:!arrayMethodHasSpeciesSupport("slice")},{
slice:function(start,end){
var Constructor,result,n,O=toIndexedObject(this),length=toLength(O.length),k=toAbsoluteIndex(start,length),fin=toAbsoluteIndex(void 0===end?length:end,length)
;if(isArray(O)&&("function"!=typeof(Constructor=O.constructor)||Constructor!==Array&&!isArray(Constructor.prototype)?isObject(Constructor)&&null===(Constructor=Constructor[SPECIES$2])&&(Constructor=void 0):Constructor=void 0,
Constructor===Array||void 0===Constructor))return nativeSlice.call(O,k,fin)
;for(result=new(void 0===Constructor?Array:Constructor)(max$2(fin-k,0)),
n=0;k<fin;k++,
n++)k in O&&createProperty(result,n,O[k])
;return result.length=n,result}})
;var slice$2=entryVirtual("Array").slice,ArrayPrototype$g=Array.prototype,slice$4=function(it){
var own=it.slice
;return it===ArrayPrototype$g||it instanceof Array&&own===ArrayPrototype$g.slice?slice$2:own
},onFreeze$1=internalMetadata.onFreeze,nativePreventExtensions=Object.preventExtensions,FAILS_ON_PRIMITIVES$6=fails((function(){
nativePreventExtensions(1)}));_export({
target:"Object",stat:!0,
forced:FAILS_ON_PRIMITIVES$6,sham:!freezing},{
preventExtensions:function(it){
return nativePreventExtensions&&isObject(it)?nativePreventExtensions(onFreeze$1(it)):it
}})
;var preventExtensions$2=path.Object.preventExtensions,nativeIsExtensible=Object.isExtensible,FAILS_ON_PRIMITIVES$7=fails((function(){
nativeIsExtensible(1)}));_export({target:"Object",
stat:!0,forced:FAILS_ON_PRIMITIVES$7},{
isExtensible:function(it){
return!!isObject(it)&&(!nativeIsExtensible||nativeIsExtensible(it))
}});var isExtensible$2=path.Object.isExtensible
;_export({target:"Object",stat:!0,
forced:!descriptors,sham:!descriptors},{
defineProperty:objectDefineProperty.f})
;var _context5,defineProperty$3=createCommonjsModule((function(module){
var Object=path.Object,defineProperty=module.exports=function(it,key,desc){
return Object.defineProperty(it,key,desc)}
;Object.defineProperty.sham&&(defineProperty.sham=!0)
}))
;"undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self||self:global:window:globalThis
;function createCommonjsModule$1(e,t){return e(t={
exports:{}},t.exports),t.exports}
var _global=createCommonjsModule$1((function(e){
var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()
;"number"==typeof __g&&(__g=t)
})),_core=createCommonjsModule$1((function(e){
var t=e.exports={version:"2.6.9"}
;"number"==typeof __e&&(__e=t)
})),_shared=(_core.version,createCommonjsModule$1((function(e){
var t=_global["__core-js_shared__"]||(_global["__core-js_shared__"]={})
;(e.exports=function(e,o){
return t[e]||(t[e]=void 0===o?{}:o)
})("versions",[]).push({version:_core.version,
mode:"global",
copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})
}))),id$1=0,px=Math.random(),_uid=function(e){
return"Symbol(".concat(void 0===e?"":e,")_",(++id$1+px).toString(36))
},_wks=createCommonjsModule$1((function(e){
var t=_shared("wks"),o=_global.Symbol,n="function"==typeof o
;(e.exports=function(e){
return t[e]||(t[e]=n&&o[e]||(n?o:_uid)("Symbol."+e))
}).store=t})),_wksExt={f:_wks
},_isObject=function(e){
return"object"==typeof e?null!==e:"function"==typeof e
},_anObject=function(e){
if(!_isObject(e))throw TypeError(e+" is not an object!")
;return e},_fails=function(e){try{return!!e()
}catch(t){return!0}
},_descriptors=!_fails((function(){
return 7!=defineProperty$3({},"a",{get:function(){
return 7}}).a
})),document$1$1=_global.document,is=_isObject(document$1$1)&&_isObject(document$1$1.createElement),_domCreate=function(e){
return is?document$1$1.createElement(e):{}
},_ie8DomDefine=!_descriptors&&!_fails((function(){
return 7!=defineProperty$3(_domCreate("div"),"a",{
get:function(){return 7}}).a
})),_toPrimitive=function(e,t){
if(!_isObject(e))return e;var o,n
;if(t&&"function"==typeof(o=e.toString)&&!_isObject(n=o.call(e)))return n
;if("function"==typeof(o=e.valueOf)&&!_isObject(n=o.call(e)))return n
;if(!t&&"function"==typeof(o=e.toString)&&!_isObject(n=o.call(e)))return n
;throw TypeError("Can't convert object to primitive value")
},dP=defineProperty$3,_objectDp={
f:_descriptors?defineProperty$3:function(e,t,o){
if(_anObject(e),t=_toPrimitive(t,!0),
_anObject(o),_ie8DomDefine)try{return dP(e,t,o)
}catch(t){}
if("get"in o||"set"in o)throw TypeError("Accessors not supported!")
;return"value"in o&&(e[t]=o.value),e}
},defineProperty$4=_objectDp.f,_wksDefine=function(e){
var t=_core.Symbol||(_core.Symbol=_global.Symbol||{})
;"_"==e.charAt(0)||e in t||defineProperty$4(t,e,{
value:_wksExt.f(e)})};_wksDefine("asyncIterator")
;var hasOwnProperty$1={}.hasOwnProperty,_has=function(e,t){
return hasOwnProperty$1.call(e,t)
},_propertyDesc=function(e,t){return{
enumerable:!(1&e),configurable:!(2&e),
writable:!(4&e),value:t}
},_hide=_descriptors?function(e,t,o){
return _objectDp.f(e,t,_propertyDesc(1,o))
}:function(e,t,o){return e[t]=o,e
},_functionToString=_shared("native-function-to-string",Function.toString),_redefine=createCommonjsModule$1((function(e){
var t=_uid("src"),o="toString",n=(""+_functionToString).split(o)
;_core.inspectSource=function(e){
return _functionToString.call(e)
},(e.exports=function(e,o,i,a){
var d="function"==typeof i
;d&&(_has(i,"name")||_hide(i,"name",o)),e[o]===i||(d&&(_has(i,t)||_hide(i,t,e[o]?""+e[o]:n.join(o+""))),
e===_global?e[o]=i:a?e[o]?e[o]=i:_hide(e,o,i):(delete e[o],
_hide(e,o,i)))})(Function.prototype,o,(function(){
return"function"==typeof this&&this[t]||_functionToString.call(this)
}))})),_aFunction=function(e){
if("function"!=typeof e)throw TypeError(e+" is not a function!")
;return e},_ctx=function(e,t,o){
return _aFunction(e),void 0===t?e:1===o?function(o){
return e.call(t,o)}:2===o?function(o,n){
return e.call(t,o,n)}:3===o?function(o,n,i){
return e.call(t,o,n,i)}:function(){
return e.apply(t,arguments)}
},$export=function $export(e,t,o){
var u,p,h,m,n=e&$export.F,i=e&$export.G,d=e&$export.P,s=e&$export.B,r=i?_global:e&$export.S?_global[t]||(_global[t]={}):(_global[t]||{}).prototype,l=i?_core:_core[t]||(_core[t]={}),c=l.prototype||(l.prototype={})
;for(u in i&&(o=t),
o)h=((p=!n&&r&&void 0!==r[u])?r:o)[u],m=s&&p?_ctx(h,_global):d&&"function"==typeof h?_ctx(Function.call,h):h,
r&&_redefine(r,u,h,e&$export.U),
l[u]!=h&&_hide(l,u,m),d&&c[u]!=h&&(c[u]=h)}
;_global.core=_core,$export.F=1,$export.G=2,
$export.S=4,$export.P=8,$export.B=16,
$export.W=32,$export.U=64,$export.R=128
;var e,_export$1=$export,_meta=createCommonjsModule$1((function(e){
var t=_uid("meta"),o=_objectDp.f,n=0,i=isExtensible$2||function(){
return!0},a=!_fails((function(){
return i(preventExtensions$2({}))
})),d=function(e){o(e,t,{value:{i:"O"+ ++n,w:{}}})
},s=e.exports={KEY:t,NEED:!1,
fastKey:function(e,o){
if(!_isObject(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e
;if(!_has(e,t)){if(!i(e))return"F";if(!o)return"E"
;d(e)}return e[t].i},getWeak:function(e,o){
if(!_has(e,t)){if(!i(e))return!0;if(!o)return!1
;d(e)}return e[t].w},onFreeze:function(e){
return a&&s.NEED&&i(e)&&!_has(e,t)&&d(e),e}}
})),def=(_meta.KEY,_meta.NEED,_meta.fastKey,
_meta.getWeak,_meta.onFreeze,_objectDp.f),TAG=_wks("toStringTag"),_setToStringTag=function(e,t,o){
e&&!_has(e=o?e:e.prototype,TAG)&&def(e,TAG,{
configurable:!0,value:t})
},toString$2={}.toString,_cof=function(e){
var _context
;return slice$4(_context=toString$2.call(e)).call(_context,8,-1)
},_iobject=Object("z").propertyIsEnumerable(0)?Object:function(e){
return"String"==_cof(e)?e.split(""):Object(e)
},_defined=function(e){
if(null==e)throw TypeError("Can't call method on  "+e)
;return e},_toIobject=function(e){
return _iobject(_defined(e))
},ceil$1=Math.ceil,floor$1=Math.floor,_toInteger=function(e){
return isNaN(e=+e)?0:(0<e?floor$1:ceil$1)(e)
},min$3=Math.min,_toLength=function(e){
return 0<e?min$3(_toInteger(e),9007199254740991):0
},max$3=Math.max,min$1$1=Math.min,shared$1=_shared("keys"),_sharedKey=function(e){
return shared$1[e]||(shared$1[e]=_uid(e))
},arrayIndexOf=(e=!1,function(t,o,n){
var s,i=_toIobject(t),a=_toLength(i.length),d=function(e,t){
return 0>(e=_toInteger(e))?max$3(e+t,0):min$1$1(e,t)
}(n,a);if(e&&o!=o){
for(;a>d;)if((s=i[d++])!=s)return!0
}else for(;a>d;d++)if((e||d in i)&&i[d]===o)return e||d||0
;return!e&&-1
}),IE_PROTO$2=_sharedKey("IE_PROTO"),_objectKeysInternal=function(e,t){
var d,o=_toIobject(e),n=0,a=[]
;for(d in o)d!=IE_PROTO$2&&_has(o,d)&&a.push(d)
;for(;t.length>n;)_has(o,d=t[n++])&&(~arrayIndexOf(a,d)||a.push(d))
;return a
},_enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_objectKeys=keys$6||function(e){
return _objectKeysInternal(e,_enumBugKeys)
},_objectGops={f:getOwnPropertySymbols$2
},_objectPie={f:{}.propertyIsEnumerable
},_isArray=isArray$3||function(e){
return"Array"==_cof(e)},_toObject=function(e){
return Object(_defined(e))
},_objectDps=_descriptors?defineProperties$1:function(e,t){
_anObject(e)
;for(var d,o=_objectKeys(t),n=o.length,a=0;n>a;)_objectDp.f(e,d=o[a++],t[d])
;return e
},document$2=_global.document,_html=document$2&&document$2.documentElement,IE_PROTO$1$1=_sharedKey("IE_PROTO"),Empty$1=function(){},_createDict=function(){
var a,e=_domCreate("iframe"),t=_enumBugKeys.length
;for(e.style.display="none",_html.appendChild(e),
e.src="javascript:",(a=e.contentWindow.document).open(),
a.write("<script>document.F=Object<\/script>"),
a.close(),_createDict=a.F;t--;)delete _createDict.prototype[_enumBugKeys[t]]
;return _createDict()
},_objectCreate=create$2||function(e,t){var o
;return null===e?o=_createDict():(Empty$1.prototype=_anObject(e),
o=new Empty$1,Empty$1.prototype=null,
o[IE_PROTO$1$1]=e),void 0===t?o:_objectDps(o,t)
},hiddenKeys$2=concat$2(_enumBugKeys).call(_enumBugKeys,"length","prototype"),_objectGopn={
f:getOwnPropertyNames$2||function(e){
return _objectKeysInternal(e,hiddenKeys$2)}
},gOPN=_objectGopn.f,toString$1$1={}.toString,windowNames$1="object"==typeof window&&window&&getOwnPropertyNames$2?getOwnPropertyNames$2(window):[],_objectGopnExt={
f:function(e){
return windowNames$1&&"[object Window]"==toString$1$1.call(e)?function(e){
try{return gOPN(e)}catch(t){
return slice$4(windowNames$1).call(windowNames$1)}
}(e):gOPN(_toIobject(e))}
},gOPD=getOwnPropertyDescriptor$3,_objectGopd={
f:_descriptors?gOPD:function(e,t){
if(e=_toIobject(e),t=_toPrimitive(t,!0),_ie8DomDefine)try{
return gOPD(e,t)}catch(t){}
return _has(e,t)?_propertyDesc(!_objectPie.f.call(e,t),e[t]):void 0
}
},META=_meta.KEY,gOPD$1=_objectGopd.f,dP$1=_objectDp.f,gOPN$1=_objectGopnExt.f,_$Symbol=_global.Symbol,$JSON$1=_global.JSON,_stringify=$JSON$1&&$JSON$1.stringify,HIDDEN$1=_wks("_hidden"),TO_PRIMITIVE$1=_wks("toPrimitive"),isEnum={}.propertyIsEnumerable,SymbolRegistry=_shared("symbol-registry"),AllSymbols$1=_shared("symbols"),OPSymbols=_shared("op-symbols"),ObjectProto=Object.prototype,USE_NATIVE="function"==typeof _$Symbol&&!!_objectGops.f,QObject$1=_global.QObject,setter=!QObject$1||!QObject$1.prototype||!QObject$1.prototype.findChild,setSymbolDesc=_descriptors&&_fails((function(){
return 7!=_objectCreate(dP$1({},"a",{
get:function(){return dP$1(this,"a",{value:7}).a}
})).a}))?function(e,t,o){
var n=gOPD$1(ObjectProto,t)
;n&&delete ObjectProto[t],dP$1(e,t,o),n&&e!==ObjectProto&&dP$1(ObjectProto,t,n)
}:dP$1,wrap$2=function(e){
var t=AllSymbols$1[e]=_objectCreate(_$Symbol.prototype)
;return t._k=e,t
},isSymbol$1=USE_NATIVE&&"symbol"==typeof _$Symbol.iterator?function(e){
return"symbol"==typeof e}:function(e){
return e instanceof _$Symbol
},$defineProperty$1=function $defineProperty(e,t,o){
return e===ObjectProto&&$defineProperty(OPSymbols,t,o),
_anObject(e),t=_toPrimitive(t,!0),
_anObject(o),_has(AllSymbols$1,t)?(o.enumerable?(_has(e,HIDDEN$1)&&e[HIDDEN$1][t]&&(e[HIDDEN$1][t]=!1),
o=_objectCreate(o,{enumerable:_propertyDesc(0,!1)
})):(!_has(e,HIDDEN$1)&&dP$1(e,HIDDEN$1,_propertyDesc(1,{})),
e[HIDDEN$1][t]=!0),
setSymbolDesc(e,t,o)):dP$1(e,t,o)
},$defineProperties$1=function(e,t){_anObject(e)
;for(var d,o=function(e){
var t=_objectKeys(e),o=_objectGops.f
;if(o)for(var s,n=o(e),a=_objectPie.f,d=0;n.length>d;)a.call(e,s=n[d++])&&t.push(s)
;return t
}(t=_toIobject(t)),n=0,a=o.length;a>n;)$defineProperty$1(e,d=o[n++],t[d])
;return e},$propertyIsEnumerable$1=function(e){
var t=isEnum.call(this,e=_toPrimitive(e,!0))
;return(this!==ObjectProto||!_has(AllSymbols$1,e)||_has(OPSymbols,e))&&(!(t||!_has(this,e)||!_has(AllSymbols$1,e)||_has(this,HIDDEN$1)&&this[HIDDEN$1][e])||t)
},$getOwnPropertyDescriptor$1=function(e,t){
if(e=_toIobject(e),t=_toPrimitive(t,!0),
e!==ObjectProto||!_has(AllSymbols$1,t)||_has(OPSymbols,t)){
var o=gOPD$1(e,t)
;return o&&_has(AllSymbols$1,t)&&!(_has(e,HIDDEN$1)&&e[HIDDEN$1][t])&&(o.enumerable=!0),
o}},$getOwnPropertyNames$1=function(e){
for(var a,t=gOPN$1(_toIobject(e)),o=[],n=0;t.length>n;)_has(AllSymbols$1,a=t[n++])||a==HIDDEN$1||a==META||o.push(a)
;return o},$getOwnPropertySymbols$1=function(e){
for(var d,t=e===ObjectProto,o=gOPN$1(t?OPSymbols:_toIobject(e)),n=[],a=0;o.length>a;)_has(AllSymbols$1,d=o[a++])&&(!t||_has(ObjectProto,d))&&n.push(AllSymbols$1[d])
;return n}
;USE_NATIVE||(_redefine((_$Symbol=function(){
if(this instanceof _$Symbol)throw TypeError("Symbol is not a constructor!")
;var e=_uid(0<arguments.length?arguments[0]:void 0),t=function t(o){
this===ObjectProto&&t.call(OPSymbols,o),
_has(this,HIDDEN$1)&&_has(this[HIDDEN$1],e)&&(this[HIDDEN$1][e]=!1),
setSymbolDesc(this,e,_propertyDesc(1,o))}
;return _descriptors&&setter&&setSymbolDesc(ObjectProto,e,{
configurable:!0,set:t}),wrap$2(e)
}).prototype,"toString",(function(){return this._k
})),_objectGopd.f=$getOwnPropertyDescriptor$1,
_objectDp.f=$defineProperty$1,_objectGopn.f=_objectGopnExt.f=$getOwnPropertyNames$1,
_objectPie.f=$propertyIsEnumerable$1,
_objectGops.f=$getOwnPropertySymbols$1,_descriptors&&_redefine(ObjectProto,"propertyIsEnumerable",$propertyIsEnumerable$1,!0),
_wksExt.f=function(e){return wrap$2(_wks(e))
}),_export$1(_export$1.G+_export$1.W+_export$1.F*!USE_NATIVE,{
Symbol:_$Symbol})
;for(var es6Symbols=["hasInstance","isConcatSpreadable","iterator","match","replace","search","species","split","toPrimitive","toStringTag","unscopables"],j=0;es6Symbols.length>j;)_wks(es6Symbols[j++])
;for(var wellKnownSymbols=_objectKeys(_wks.store),k=0;wellKnownSymbols.length>k;)_wksDefine(wellKnownSymbols[k++])
;_export$1(_export$1.S+_export$1.F*!USE_NATIVE,"Symbol",{
for:function(e){
return _has(SymbolRegistry,e+="")?SymbolRegistry[e]:SymbolRegistry[e]=_$Symbol(e)
},keyFor:function(e){
if(!isSymbol$1(e))throw TypeError(e+" is not a symbol!")
;for(var t in SymbolRegistry)if(SymbolRegistry[t]===e)return t
},useSetter:function(){setter=!0},
useSimple:function(){setter=!1}
}),_export$1(_export$1.S+_export$1.F*!USE_NATIVE,"Object",{
create:function(e,t){
return void 0===t?_objectCreate(e):$defineProperties$1(_objectCreate(e),t)
},defineProperty:$defineProperty$1,
defineProperties:$defineProperties$1,
getOwnPropertyDescriptor:$getOwnPropertyDescriptor$1,
getOwnPropertyNames:$getOwnPropertyNames$1,
getOwnPropertySymbols:$getOwnPropertySymbols$1})
;var FAILS_ON_PRIMITIVES$8=_fails((function(){
_objectGops.f(1)}));function _typeof(e){
return(_typeof="function"==typeof symbol$2&&"symbol"==typeof iterator$2?function(e){
return typeof e}:function(e){
return e&&"function"==typeof symbol$2&&e.constructor===symbol$2&&e!==symbol$2.prototype?"symbol":typeof e
})(e)}function _defineProperty(e,t,o){
return t in e?defineProperty$3(e,t,{value:o,
enumerable:!0,configurable:!0,writable:!0
}):e[t]=o,e}function ownKeys$1(e,t){
var o=keys$6(e)
;return getOwnPropertySymbols$2&&o.push.apply(o,getOwnPropertySymbols$2(e)),
t&&(o=filter$2(o).call(o,(function(t){
return getOwnPropertyDescriptor$3(e,t).enumerable
}))),o}function _toConsumableArray(e){
return function(e){if(isArray$3(e)){
for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t]
;return o}}(e)||function(e){
if(isIterable$2(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return from_1$2(e)
}(e)||function(){
throw new TypeError("Invalid attempt to spread non-iterable instance")
}()}
_export$1(_export$1.S+_export$1.F*FAILS_ON_PRIMITIVES$8,"Object",{
getOwnPropertySymbols:function(e){
return _objectGops.f(_toObject(e))}
}),$JSON$1&&_export$1(_export$1.S+_export$1.F*(!USE_NATIVE||_fails((function(){
var e=_$Symbol()
;return"[null]"!=_stringify([e])||"{}"!=_stringify({
a:e})||"{}"!=_stringify(Object(e))}))),"JSON",{
stringify:function(e){
for(var n,a,t=[e],o=1;arguments.length>o;)t.push(arguments[o++])
;if(a=n=t[1],(_isObject(n)||void 0!==e)&&!isSymbol$1(e))return _isArray(n)||(n=function(e,t){
if("function"==typeof a&&(t=a.call(this,e,t)),
!isSymbol$1(t))return t
}),t[1]=n,_stringify.apply($JSON$1,t)}
}),_$Symbol.prototype[TO_PRIMITIVE$1]||_hide(_$Symbol.prototype,TO_PRIMITIVE$1,_$Symbol.prototype.valueOf),
_setToStringTag(_$Symbol,"Symbol"),
_setToStringTag(Math,"Math",!0),_setToStringTag(_global.JSON,"JSON",!0)
;!function(e,t){
var o=(_core.Object||{})[e]||Object[e],n={}
;n[e]=t(o),_export$1(_export$1.S+_export$1.F*_fails((function(){
o(1)})),"Object",n)}("keys",(function(){
return function(e){
return _objectKeys(_toObject(e))}}))
;var _flags=function(){var e=_anObject(this),t=""
;return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),
e.multiline&&(t+="m"),e.unicode&&(t+="u"),
e.sticky&&(t+="y"),t}
;_descriptors&&"g"!=flags$1(/./g)&&_objectDp.f(RegExp.prototype,"flags",{
configurable:!0,get:_flags})
;var $toString=/./.toString,define=function(e){
_redefine(RegExp.prototype,"toString",e,!0)}
;_fails((function(){return"/a/b"!=$toString.call({
source:"a",flags:"b"})}))?define((function(){
var e=_anObject(this)
;return"/".concat(e.source,"/","flags"in e?flags$1(e):!_descriptors&&e instanceof RegExp?_flags.call(e):void 0)
})):"toString"!=$toString.name&&define((function(){
return $toString.call(this)}));var at=function(e){
return function(t,o){
var s,r,n=_defined(t)+"",d=_toInteger(o),i=n.length
;return 0>d||d>=i?e?"":void 0:55296>(s=n.charCodeAt(d))||56319<s||d+1===i||56320>(r=n.charCodeAt(d+1))||57343<r?e?n.charAt(d):s:e?slice$4(n).call(n,d,d+2):r-56320+(s-55296<<10)+65536
}}(!0),_advanceStringIndex=function(e,t,o){
return t+(o?at(e,t).length:1)
},TAG$1=_wks("toStringTag"),ARG="Arguments"==_cof(function(){
return arguments}()),_classof=function(e){
var t,o,n
;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(o=function(e,t){
try{return e[t]}catch(t){}
}(t=Object(e),TAG$1))?o:ARG?_cof(t):"Object"==(n=_cof(t))&&"function"==typeof t.callee?"Arguments":n
},builtinExec=RegExp.prototype.exec,_regexpExecAbstract=function(e,t){
var o=e.exec;if("function"==typeof o){
var n=o.call(e,t)
;if("object"!=typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null")
;return n}
if("RegExp"!==_classof(e))throw new TypeError("RegExp#exec called on incompatible receiver")
;return builtinExec.call(e,t)
},nativeExec=RegExp.prototype.exec,nativeReplace=String.prototype.replace,patchedExec=nativeExec,UPDATES_LAST_INDEX_WRONG=function(){
var e=/a/,t=/b*/g
;return nativeExec.call(e,"a"),nativeExec.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex
}(),NPCG_INCLUDED=void 0!==/()??/.exec("")[1]
;(UPDATES_LAST_INDEX_WRONG||NPCG_INCLUDED)&&(patchedExec=function(e){
var o,n,a,d,t=this
;return NPCG_INCLUDED&&(n=new RegExp("^"+t.source+"$(?!\\s)",_flags.call(t))),
UPDATES_LAST_INDEX_WRONG&&(o=t.lastIndex),
a=nativeExec.call(t,e),UPDATES_LAST_INDEX_WRONG&&a&&(t.lastIndex=t.global?a.index+a[0].length:o),
NPCG_INCLUDED&&a&&1<a.length&&nativeReplace.call(a[0],n,(function(){
for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(a[d]=void 0)
})),a});var _regexpExec=patchedExec;_export$1({
target:"RegExp",proto:!0,
forced:_regexpExec!==/./.exec},{exec:_regexpExec})
;var SPECIES$3=_wks("species"),REPLACE_SUPPORTS_NAMED_GROUPS=!_fails((function(){
var e=/./;return e.exec=function(){var e=[]
;return e.groups={a:"7"},e
},"7"!=="".replace(e,"$<a>")
})),SPLIT_WORKS_WITH_OVERWRITTEN_EXEC=function(){
var e=/(?:)/,t=e.exec;e.exec=function(){
return t.apply(this,arguments)}
;var o="ab".split(e)
;return 2===o.length&&"a"===o[0]&&"b"===o[1]
}(),_fixReWks=function(e,t,o){
var n=_wks(e),i=!_fails((function(){var t={}
;return t[n]=function(){return 7},7!=""[e](t)
})),a=i?!_fails((function(){var t=!1,o=/a/
;return o.exec=function(){return t=!0,null
},"split"===e&&(o.constructor={},o.constructor[SPECIES$3]=function(){
return o}),o[n](""),!t})):void 0
;if(!i||!a||"replace"===e&&!REPLACE_SUPPORTS_NAMED_GROUPS||"split"===e&&!SPLIT_WORKS_WITH_OVERWRITTEN_EXEC){
var d=/./[n],s=o(_defined,n,""[e],(function(e,t,o,n,a){
return t.exec===_regexpExec?i&&!a?{done:!0,
value:d.call(t,o,n)}:{done:!0,value:e.call(o,t,n)
}:{done:!1}})),r=s[0],l=s[1]
;_redefine(String.prototype,e,r),_hide(RegExp.prototype,n,2==t?function(e,t){
return l.call(e,this,t)}:function(e){
return l.call(e,this)})}
},max$1$1=Math.max,min$2$1=Math.min,floor$1$1=Math.floor,SUBSTITUTION_SYMBOLS=/\$([$&`']|\d\d?|<[^>]*>)/g,SUBSTITUTION_SYMBOLS_NO_NAMED=/\$([$&`']|\d\d?)/g,maybeToString=function(e){
return void 0===e?e:e+""}
;_fixReWks("replace",2,(function(e,t,o,n){
function a(e,t,i,a,d,s){
var r=i+e.length,l=a.length,n=SUBSTITUTION_SYMBOLS_NO_NAMED
;return void 0!==d&&(d=_toObject(d),
n=SUBSTITUTION_SYMBOLS),o.call(s,n,(function(o,s){
var c;switch(s.charAt(0)){case"$":return"$"
;case"&":return e;case"`":
return slice$4(t).call(t,0,i);case"'":
return slice$4(t).call(t,r);case"<":
c=d[slice$4(s).call(s,1,-1)];break;default:
var u=+s;if(0==u)return o;if(u>l){
var n=floor$1$1(u/10)
;return 0===n?o:n<=l?void 0===a[n-1]?s.charAt(1):a[n-1]+s.charAt(1):o
}c=a[u-1]}return void 0===c?"":c}))}
return[function(n,i){
var a=e(this),d=null==n?void 0:n[t]
;return void 0===d?o.call(a+"",n,i):d.call(n,a,i)
},function(e,t){var d=n(o,e,this,t)
;if(d.done)return d.value
;var s=_anObject(e),r=this+"",l="function"==typeof t
;l||(t+="");var c=s.global;if(c){var u=s.unicode
;s.lastIndex=0}
for(var h,p=[];null!==(h=_regexpExecAbstract(s,r))&&(p.push(h),c);){
""==h[0]+""&&(s.lastIndex=_advanceStringIndex(r,_toLength(s.lastIndex),u))
}for(var g="",y=0,f=0;f<p.length;f++){
for(var b=(h=p[f])[0]+"",_=max$1$1(min$2$1(_toInteger(h.index),r.length),0),v=[],k=1;k<h.length;k++)v.push(maybeToString(h[k]))
;var w=h.groups;if(l){
var _context4,x=concat$2(_context4=[b]).call(_context4,v,_,r)
;void 0!==w&&x.push(w);var S=t.apply(void 0,x)+""
}else S=a(b,r,_,v,w,t)
;_>=y&&(g+=slice$4(r).call(r,y,_)+S,y=_+b.length)}
return g+slice$4(r).call(r,y)}]}))
;var UNSCOPABLES=_wks("unscopables"),ArrayProto=Array.prototype
;null==ArrayProto[UNSCOPABLES]&&_hide(ArrayProto,UNSCOPABLES,{})
;var _addToUnscopables=function(e){
ArrayProto[UNSCOPABLES][e]=!0
},_iterStep=function(e,t){return{value:t,done:!!e}
},_iterators={},IteratorPrototype$3={}
;_hide(IteratorPrototype$3,_wks("iterator"),(function(){
return this}))
;var IE_PROTO$2$1=_sharedKey("IE_PROTO"),ObjectProto$1=Object.prototype,_objectGpo=getPrototypeOf$2||function(e){
return e=_toObject(e),
_has(e,IE_PROTO$2$1)?e[IE_PROTO$2$1]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectProto$1:null
},ITERATOR$6=_wks("iterator"),BUGGY$1=!(keys$3([])&&"next"in keys$3(_context5=[]).call(_context5)),returnThis$2=function(){
return this
},es6_array_iterator=function(e,t,o,n,i,a,d){
!function(e,t,o){
e.prototype=_objectCreate(IteratorPrototype$3,{
next:_propertyDesc(1,o)
}),_setToStringTag(e,t+" Iterator")}(o,t,n)
;var y,f,b,s=function(e){
return!BUGGY$1&&e in u?u[e]:function(){
return new o(this,e)}
},r=t+" Iterator",l="values"==i,c=!1,u=e.prototype,p=u[ITERATOR$6]||u["@@iterator"]||i&&u[i],h=p||s(i),m=i?l?s("entries"):h:void 0,g="Array"==t&&entries$2(u)||p
;if(g&&((b=_objectGpo(g.call(new e)))!==Object.prototype&&b.next&&(_setToStringTag(b,r,!0),
"function"!=typeof b[ITERATOR$6]&&_hide(b,ITERATOR$6,returnThis$2))),
l&&p&&"values"!==p.name&&(c=!0,h=function(){
return p.call(this)
}),(BUGGY$1||c||!u[ITERATOR$6])&&_hide(u,ITERATOR$6,h),_iterators[t]=h,
_iterators[r]=returnThis$2,i)if(y={
values:l?h:s("values"),keys:a?h:s("keys"),
entries:m
},d)for(f in y)f in u||_redefine(u,f,y[f]);else _export$1(_export$1.P+_export$1.F*(BUGGY$1||c),t,y)
;return y}(Array,"Array",(function(e,t){
this._t=_toIobject(e),this._i=0,this._k=t
}),(function(){var e=this._t,t=this._k,o=this._i++
;return!e||o>=e.length?(this._t=void 0,
_iterStep(1)):_iterStep(0,"keys"==t?o:"values"==t?e[o]:[o,e[o]])
}),"values")
;_iterators.Arguments=_iterators.Array,_addToUnscopables("keys"),_addToUnscopables("values"),
_addToUnscopables("entries")
;for(var ITERATOR$1$1=_wks("iterator"),TO_STRING_TAG$4=_wks("toStringTag"),ArrayValues=_iterators.Array,DOMIterables$4={
CSSRuleList:!0,CSSStyleDeclaration:!1,
CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,
DOMStringList:!1,DOMTokenList:!0,
DataTransferItemList:!1,FileList:!1,
HTMLAllCollection:!1,HTMLCollection:!1,
HTMLFormElement:!1,HTMLSelectElement:!1,
MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,
NodeList:!0,PaintRequestList:!1,Plugin:!1,
PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,
SVGPathSegList:!1,SVGPointList:!1,
SVGStringList:!1,SVGTransformList:!1,
SourceBufferList:!1,StyleSheetList:!0,
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1
},collections=_objectKeys(DOMIterables$4),i=0;i<collections.length;i++){
var key,NAME=collections[i],explicit=DOMIterables$4[NAME],Collection$1=_global[NAME],proto=Collection$1&&Collection$1.prototype
;if(proto&&(proto[ITERATOR$1$1]||_hide(proto,ITERATOR$1$1,ArrayValues),
proto[TO_STRING_TAG$4]||_hide(proto,TO_STRING_TAG$4,NAME),
_iterators[NAME]=ArrayValues,
explicit))for(key in es6_array_iterator)proto[key]||_redefine(proto,key,es6_array_iterator[key],!0)
}
({})[_wks("toStringTag")]="z",_redefine(Object.prototype,"toString",(function(){
return"[object "+_classof(this)+"]"}),!0)
;var isEnum$1=_objectPie.f,$values$1=function(e){
return function(t){
for(var r,o=_toIobject(t),n=_objectKeys(o),a=n.length,d=0,s=[];a>d;)r=n[d++],
(!_descriptors||isEnum$1.call(o,r))&&s.push(e?[r,o[r]]:o[r])
;return s}}(!1);_export$1(_export$1.S,"Object",{
values:function(e){return $values$1(e)}})
;var MATCH$2=_wks("match"),SPECIES$1$1=_wks("species"),$min=Math.min,$push=[].push,SUPPORTS_Y=!_fails((function(){
RegExp(4294967295,"y")}))
;_fixReWks("split",2,(function(e,t,o,n){var a
;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||1<".".split(/()()/).length||"".split(/.?/).length?function(e,t){
var n=this+"";if(void 0===e&&0===t)return[]
;if(!function(e){var t
;return _isObject(e)&&(void 0===(t=e[MATCH$2])?"RegExp"==_cof(e):!!t)
}(e))return o.call(n,e,t)
;for(var l,c,u,i=[],a=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,s=void 0===t?4294967295:t>>>0,r=new RegExp(e.source,a+"g");(l=_regexpExec.call(r,n))&&!((c=r.lastIndex)>d&&(i.push(slice$4(n).call(n,d,l.index)),
1<l.length&&l.index<n.length&&$push.apply(i,slice$4(l).call(l,1)),
u=l[0].length,
d=c,i.length>=s));)r.lastIndex===l.index&&r.lastIndex++
;return d===n.length?(u||!r.test(""))&&i.push(""):i.push(slice$4(n).call(n,d)),
i.length>s?slice$4(i).call(i,0,s):i
}:"0".split(void 0,0).length?function(e,t){
return void 0===e&&0===t?[]:o.call(this,e,t)
}:o,[function(o,n){
var i=e(this),d=null==o?void 0:o[t]
;return void 0===d?a.call(i+"",o,n):d.call(o,i,n)
},function(t,d){var s=n(a,t,this,d,a!==o)
;if(s.done)return s.value
;var r=_anObject(t),l=this+"",c=function(e,t){
var n,o=_anObject(e).constructor
;return void 0===o||null==(n=_anObject(o)[SPECIES$1$1])?t:_aFunction(n)
}(r,RegExp),u=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(SUPPORTS_Y?"y":"g"),m=new c(SUPPORTS_Y?r:"^(?:"+r.source+")",h),g=void 0===d?4294967295:d>>>0
;if(0===g)return[]
;if(0===l.length)return null===_regexpExecAbstract(m,l)?[l]:[]
;for(var y=0,f=0,b=[];f<l.length;){
m.lastIndex=SUPPORTS_Y?f:0
;var v,_=_regexpExecAbstract(m,SUPPORTS_Y?l:slice$4(l).call(l,f))
;if(null===_||(v=$min(_toLength(m.lastIndex+(SUPPORTS_Y?0:f)),l.length))===y)f=_advanceStringIndex(l,f,u);else{
if(b.push(slice$4(l).call(l,y,f)),
b.length===g)return b
;for(var k=1;k<=_.length-1;k++)if(b.push(_[k]),b.length===g)return b
;f=y=v}}return b.push(slice$4(l).call(l,y)),b}]}))
;var $assign=assign$2,_objectAssign=!$assign||_fails((function(){
var _context6,e={},t={},o=symbol$2(),n="abcdefghijklmnopqrst"
;return e[o]=7,forEach$2(_context6=n.split("")).call(_context6,(function(e){
t[e]=e
})),7!=$assign({},e)[o]||keys$6($assign({},t)).join("")!=n
}))?function(e){
for(var t=_toObject(e),o=arguments.length,n=1,i=_objectGops.f,a=_objectPie.f;o>n;)for(var c,d=_iobject(arguments[n++]),s=i?concat$2(_context7=_objectKeys(d)).call(_context7,i(d)):_objectKeys(d),r=s.length,l=0;r>l;){
var _context7
;c=s[l++],(!_descriptors||a.call(d,c))&&(t[c]=d[c])
}return t}:$assign
;_export$1(_export$1.S+_export$1.F,"Object",{
assign:_objectAssign});var check$1=function(e,t){
if(_anObject(e),!_isObject(t)&&null!==t)throw TypeError(t+": can't set as prototype!")
},setPrototypeOf$3={
set:setPrototypeOf$2||("__proto__"in{}?function(e,t,o){
try{
(o=_ctx(Function.call,_objectGopd.f(Object.prototype,"__proto__").set,2))(e,[]),
t=!(e instanceof Array)}catch(o){t=!0}
return function(e,n){
return check$1(e,n),t?e.__proto__=n:o(e,n),e}
}({},!1):void 0),check:check$1
}.set,_inheritIfRequired=function(e,t,o){
var i,n=t.constructor
;return n!==o&&"function"==typeof n&&(i=n.prototype)!==o.prototype&&_isObject(i)&&setPrototypeOf$3&&setPrototypeOf$3(e,i),
e
},_stringWs="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",space="["+_stringWs+"]",ltrim$1=RegExp("^"+space+space+"*"),rtrim$1=RegExp(space+space+"*$"),exporter=function(e,t,o){
var n={},i=_fails((function(){
return!!_stringWs[e]()||"​"!="​"[e]()
})),a=n[e]=i?t(trim$5):_stringWs[e]
;o&&(n[o]=a),_export$1(_export$1.P+_export$1.F*i,"String",n)
},trim$5=exporter.trim=function(e,t){
return e=_defined(e)+"",1&t&&(e=e.replace(ltrim$1,"")),
2&t&&(e=e.replace(rtrim$1,"")),e
},_stringTrim=exporter,gOPN$2=_objectGopn.f,gOPD$2=_objectGopd.f,dP$2=_objectDp.f,$trim$1=trim$4(_stringTrim),_$Number=_global.Number,Base=_$Number,proto$1=_$Number.prototype,BROKEN_COF="Number"==_cof(_objectCreate(proto$1)),TRIM="trim"in String.prototype,toNumber=function(e){
var t=_toPrimitive(e,!1)
;if("string"==typeof t&&2<t.length){
var n,a,d,o=(t=TRIM?trim$4(t).call(t):$trim$1(t,3)).charCodeAt(0)
;if(43===o||45===o){
if(88===(n=t.charCodeAt(2))||120===n)return NaN
}else if(48===o){switch(t.charCodeAt(1)){case 66:
case 98:a=2,d=49;break;case 79:case 111:a=8,d=55
;break;default:return+t}
for(var l,s=slice$4(t).call(t,2),r=0,c=s.length;r<c;r++)if(48>(l=s.charCodeAt(r))||l>d)return NaN
;return _parseInt$3(s,a)}}return+t}
;if(!_$Number(" 0o1")||!_$Number("0b1")||_$Number("+0x1")){
_$Number=function(e){
var t=1>arguments.length?0:e,o=this
;return o instanceof _$Number&&(BROKEN_COF?_fails((function(){
proto$1.valueOf.call(o)
})):"Number"!=_cof(o))?_inheritIfRequired(new Base(toNumber(t)),o,_$Number):toNumber(t)
}
;for(var key$1,keys$7=_descriptors?gOPN$2(Base):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j$1=0;keys$7.length>j$1;j$1++)_has(Base,key$1=keys$7[j$1])&&!_has(_$Number,key$1)&&dP$2(_$Number,key$1,gOPD$2(Base,key$1))
;_$Number.prototype=proto$1,
proto$1.constructor=_$Number,_redefine(_global,"Number",_$Number)
}
for(var moment=createCommonjsModule$1((function(e){
var t=Math.round,o=Math.pow,n=Math.max,a=Math.abs,d=Math.min,s=Math.floor,r=Math.ceil
;!function(t,o){e.exports=o()}(0,(function(){
function l(){return $t.apply(null,arguments)}
function u(e){
return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)
}function p(e){
return null!=e&&"[object Object]"===Object.prototype.toString.call(e)
}function m(e){return void 0===e}function g(e){
return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)
}function y(e){
return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)
}function f(e,t){var n,o=[]
;for(n=0;n<e.length;++n)o.push(t(e[n],n));return o
}function _(e,t){
return Object.prototype.hasOwnProperty.call(e,t)}
function v(e,t){for(var o in t)_(t,o)&&(e[o]=t[o])
;return _(t,"toString")&&(e.toString=t.toString),
_(t,"valueOf")&&(e.valueOf=t.valueOf),e}
function k(e,t,o,n){return dt(e,t,o,n,!0).utc()}
function x(e){return null==e._pf&&(e._pf={
empty:!1,unusedTokens:[],unusedInput:[],
overflow:-2,charsLeftOver:0,nullInput:!1,
invalidMonth:null,invalidFormat:!1,
userInvalidated:!1,iso:!1,parsedDateParts:[],
meridiem:null,rfc2822:!1,weekdayMismatch:!1
}),e._pf}function S(e){if(null==e._isValid){
var t=x(e),o=Kt.call(t.parsedDateParts,(function(e){
return null!=e
})),n=!isNaN(e._d.getTime())&&0>t.overflow&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&o)
;if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),
null!=isFrozen$2&&isFrozen$2(e))return n
;e._isValid=n}return e._isValid}function O(e){
var t=k(NaN)
;return null==e?x(t).userInvalidated=!0:v(x(t),e),t
}function D(e,t){var o,n,a
;if(m(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),
m(t._i)||(e._i=t._i),
m(t._f)||(e._f=t._f),m(t._l)||(e._l=t._l),m(t._strict)||(e._strict=t._strict),
m(t._tzm)||(e._tzm=t._tzm),
m(t._isUTC)||(e._isUTC=t._isUTC),m(t._offset)||(e._offset=t._offset),
m(t._pf)||(e._pf=x(t)),
m(t._locale)||(e._locale=t._locale),0<Qt.length)for(o=0;o<Qt.length;o++)m(a=t[n=Qt[o]])||(e[n]=a)
;return e}function T(e){
D(this,e),this._d=new Date(null==e._d?NaN:e._d.getTime()),
this.isValid()||(this._d=new Date(NaN)),
!1===Jt&&(Jt=!0,l.updateOffset(this),Jt=!1)}
function E(e){
return e instanceof T||null!=e&&null!=e._isAMomentObject
}function C(e){return 0>e?r(e)||0:s(e)}
function M(e){var t=+e,o=0
;return 0!=t&&isFinite(t)&&(o=C(t)),o}
function I(e,t,o){
var l,n=d(e.length,t.length),s=a(e.length-t.length),r=0
;for(l=0;l<n;l++)(o&&e[l]!==t[l]||!o&&M(e[l])!==M(t[l]))&&r++
;return r+s}function P(e){
!1===l.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)
}function F(e,t){var o=!0;return v((function(){
if(null!=l.deprecationHandler&&l.deprecationHandler(null,e),
o){for(var d,n=[],a=0;a<arguments.length;a++){
if(d="","object"==typeof arguments[a]){
for(var s in d+="\n["+a+"] ",arguments[0])d+=s+": "+arguments[0][s]+", "
;d=slice$4(d).call(d,0,-2)}else d=arguments[a]
;n.push(d)}
P(e+"\nArguments: "+slice$4(Array.prototype).call(n).join("")+"\n"+(new Error).stack),
o=!1}return t.apply(this,arguments)}),t)}
function N(e,t){
null!=l.deprecationHandler&&l.deprecationHandler(e,t),eo[e]||(P(t),
eo[e]=!0)}function Y(e){
return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)
}function z(e,t){var n,o=v({},e)
;for(n in t)_(t,n)&&(p(e[n])&&p(t[n])?(o[n]={},v(o[n],e[n]),
v(o[n],t[n])):null==t[n]?delete o[n]:o[n]=t[n])
;for(n in e)_(e,n)&&!_(t,n)&&p(e[n])&&(o[n]=v({},o[n]))
;return o}function B(e){null!=e&&this.set(e)}
function H(e,t){var o=e.toLowerCase()
;no[o]=no[o+"s"]=no[t]=e}function W(e){
return"string"==typeof e?no[e]||no[e.toLowerCase()]:void 0
}function j(e){var o,n,t={}
;for(n in e)_(e,n)&&((o=W(n))&&(t[o]=e[n]))
;return t}function U(e,t){io[e]=t}
function G(e,t,i){var d=""+a(e)
;return(0<=e?i?"+":"":"-")+o(10,n(0,t-d.length)).toString().substr(1)+d
}function q(e,t,o,n){var i=n
;"string"==typeof n&&(i=function(){
return this[n]()
}),e&&(lo[e]=i),t&&(lo[t[0]]=function(){
return G(i.apply(this,arguments),t[1],t[2])
}),o&&(lo[o]=function(){
return this.localeData().ordinal(i.apply(this,arguments),e)
})}function X(e){
return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")
}function $(e,t){
return e.isValid()?(t=K(t,e.localeData()),ro[t]=ro[t]||function(e){
var o,n,t=e.match(ao)
;for(o=0,n=t.length;o<n;o++)t[o]=lo[t[o]]?lo[t[o]]:X(t[o])
;return function(o){var d,a=""
;for(d=0;d<n;d++)a+=Y(t[d])?t[d].call(o,e):t[d]
;return a}
}(t),ro[t](e)):e.localeData().invalidDate()}
function K(e,t){function o(e){
return t.longDateFormat(e)||e}var n=5
;for(so.lastIndex=0;0<=n&&so.test(e);)e=e.replace(so,o),
so.lastIndex=0,n-=1;return e}function Q(e,t,o){
To[e]=Y(t)?t:function(e){return e&&o?o:t}}
function J(e,t){
return _(To,e)?To[e](t._strict,t._locale):new RegExp(function(e){
return te(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,o,n,i){
return t||o||n||i})))}(e))}function te(e){
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}
function oe(e,t){var n,o=t
;for("string"==typeof e&&(e=[e]),g(t)&&(o=function(e,_o2){
_o2[t]=M(e)}),n=0;n<e.length;n++)Eo[e[n]]=o}
function ne(e,t){oe(e,(function(e,o,n,i){
n._w=n._w||{},t(e,n._w,n,i)}))}function ie(e,t,o){
null!=t&&_(Eo,e)&&Eo[e](t,o._a,o,e)}
function ae(e){return de(e)?366:365}
function de(e){return 0==e%4&&0!=e%100||0==e%400}
function se(e,t){return function(o){
return null==o?re(this,e):(le(this,e,o),l.updateOffset(this,t),
this)}}function re(e,t){
return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN
}function le(e,t,o){
e.isValid()&&!isNaN(o)&&("FullYear"===t&&de(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](o,e.month(),pe(o,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](o))
}function pe(e,t){if(isNaN(e)||isNaN(t))return NaN
;var o=function(e,t){return(e%t+t)%t}(t,12)
;return e+=(t-o)/12,1===o?de(e)?29:28:31-o%7%2}
function he(e,t,o){
var a,d,s,n=e.toLocaleLowerCase()
;if(!this._monthsParse)for(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[],
a=0;12>a;++a)s=k([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(s,"").toLocaleLowerCase(),
this._longMonthsParse[a]=this.months(s,"").toLocaleLowerCase()
;return o?"MMM"===t?-1===(d=Ro.call(this._shortMonthsParse,n))?null:d:-1===(d=Ro.call(this._longMonthsParse,n))?null:d:"MMM"===t?-1!==(d=Ro.call(this._shortMonthsParse,n))?d:-1===(d=Ro.call(this._longMonthsParse,n))?null:d:-1!==(d=Ro.call(this._longMonthsParse,n))?d:-1===(d=Ro.call(this._shortMonthsParse,n))?null:d
}function ge(e,t){var o;if(!e.isValid())return e
;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!g(t=e.localeData().monthsParse(t)))return e
;return o=d(e.date(),pe(e.year(),t)),
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,o),e}
function ye(e){
return null==e?re(this,"Month"):(ge(this,e),l.updateOffset(this,!0),
this)}function fe(){function e(e,t){
return t.length-e.length}var a,d,t=[],o=[],n=[]
;for(a=0;12>a;a++)d=k([2e3,a]),t.push(this.monthsShort(d,"")),
o.push(this.months(d,"")),
n.push(this.months(d,"")),n.push(this.monthsShort(d,""))
;for(sort$2(t).call(t,e),
sort$2(o).call(o,e),sort$2(n).call(n,e),a=0;12>a;a++)t[a]=te(t[a]),
o[a]=te(o[a]);for(a=0;24>a;a++)n[a]=te(n[a])
;this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,
this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")
}function be(e,t,o,n,i,a,d){var s
;return 100>e&&0<=e?(s=new Date(e+400,t,o,n,i,a,d),
isFinite(s.getFullYear())&&s.setFullYear(e)):s=new Date(e,t,o,n,i,a,d),
s}function _e(e){var t;if(100>e&&0<=e){
var o=slice$4(Array.prototype).call(arguments)
;o[0]=e+400,t=new Date(Date.UTC.apply(null,o)),
isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)
}else t=new Date(Date.UTC.apply(null,arguments))
;return t}function ve(e,t,o){var n=7+t-o
;return-((7+_e(e,0,n).getUTCDay()-t)%7)+n-1}
function ke(e,t,o,n,i){
var s,r,d=1+7*(t-1)+(7+o-n)%7+ve(e,n,i)
;return 0>=d?r=ae(s=e-1)+d:d>ae(e)?(s=e+1,
r=d-ae(e)):(s=e,r=d),{year:s,dayOfYear:r}}
function we(e,t,o){
var a,d,n=ve(e.year(),t,o),i=s((e.dayOfYear()-n-1)/7)+1
;return 1>i?a=i+xe(d=e.year()-1,t,o):i>xe(e.year(),t,o)?(a=i-xe(e.year(),t,o),
d=e.year()+1):(d=e.year(),a=i),{week:a,year:d}}
function xe(e,t,o){var n=ve(e,t,o),i=ve(e+1,t,o)
;return(ae(e)-n+i)/7}function De(e,t){
var _context8
;return concat$2(_context8=slice$4(e).call(e,t,7)).call(_context8,slice$4(e).call(e,0,t))
}function Te(e,t,o){
var a,d,s,n=e.toLocaleLowerCase()
;if(!this._weekdaysParse)for(this._weekdaysParse=[],
this._shortWeekdaysParse=[],
this._minWeekdaysParse=[],a=0;7>a;++a)s=k([2e3,1]).day(a),
this._minWeekdaysParse[a]=this.weekdaysMin(s,"").toLocaleLowerCase(),
this._shortWeekdaysParse[a]=this.weekdaysShort(s,"").toLocaleLowerCase(),
this._weekdaysParse[a]=this.weekdays(s,"").toLocaleLowerCase()
;return o?"dddd"===t?-1===(d=Ro.call(this._weekdaysParse,n))?null:d:"ddd"===t?-1===(d=Ro.call(this._shortWeekdaysParse,n))?null:d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:"dddd"===t?-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1!==(d=Ro.call(this._shortWeekdaysParse,n))?d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:"ddd"===t?-1!==(d=Ro.call(this._shortWeekdaysParse,n))?d:-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:-1!==(d=Ro.call(this._minWeekdaysParse,n))?d:-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1===(d=Ro.call(this._shortWeekdaysParse,n))?null:d
}function Ce(){function e(e,t){
return t.length-e.length}
var d,s,r,l,c,t=[],o=[],n=[],a=[]
;for(d=0;7>d;d++)s=k([2e3,1]).day(d),r=this.weekdaysMin(s,""),
l=this.weekdaysShort(s,""),
c=this.weekdays(s,""),t.push(r),o.push(l),n.push(c),a.push(r),
a.push(l),a.push(c)
;for(sort$2(t).call(t,e),sort$2(o).call(o,e),sort$2(n).call(n,e),
sort$2(a).call(a,e),
d=0;7>d;d++)o[d]=te(o[d]),n[d]=te(n[d]),a[d]=te(a[d])
;this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),
this._weekdaysShortRegex=this._weekdaysRegex,
this._weekdaysMinRegex=this._weekdaysRegex,
this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),
this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")
}function Me(){return this.hours()%12||12}
function Ie(e,t){q(e,0,0,(function(){
return this.localeData().meridiem(this.hours(),this.minutes(),t)
}))}function Pe(e,t){return t._meridiemParse}
function Fe(e){
return e?e.toLowerCase().replace("_","-"):e}
function Ye(t){var o=null
;if(!jo[t]&&e&&e.exports)try{
o=Jo._abbr,function(){
throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
}(),Re(o)}catch(t){}return jo[t]}function Re(e,t){
var o
;return e&&((o=m(t)?Be(e):ze(e,t))?Jo=o:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),
Jo._abbr}function ze(e,t){if(null!==t){
var _context9,n,o=Wo
;if(t.abbr=e,null!=jo[e])N("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
o=jo[e]._config;else if(null!=t.parentLocale)if(null!=jo[t.parentLocale])o=jo[t.parentLocale]._config;else{
if(null==(n=Ye(t.parentLocale)))return Uo[t.parentLocale]||(Uo[t.parentLocale]=[]),
Uo[t.parentLocale].push({name:e,config:t}),null
;o=n._config}
return jo[e]=new B(z(o,t)),Uo[e]&&forEach$2(_context9=Uo[e]).call(_context9,(function(e){
ze(e.name,e.config)})),Re(e),jo[e]}
return delete jo[e],null}function Be(e){var t
;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),
!e)return Jo;if(!u(e)){if(t=Ye(e))return t;e=[e]}
return function(e){
for(var o,n,a,d,t=0;t<e.length;){
for(o=(d=Fe(e[t]).split("-")).length,n=(n=Fe(e[t+1]))?n.split("-"):null;0<o;){
if(a=Ye(slice$4(d).call(d,0,o).join("-")))return a
;if(n&&n.length>=o&&I(d,n,!0)>=o-1)break;o--}t++}
return Jo}(e)}function Ae(e){var o,t=e._a
;return t&&-2===x(e).overflow&&(o=0>t[1]||11<t[1]?1:1>t[2]||t[2]>pe(t[0],t[1])?2:0>t[3]||24<t[3]||24===t[3]&&(0!==t[4]||0!==t[5]||0!==t[6])?3:0>t[4]||59<t[4]?4:0>t[5]||59<t[5]?5:0>t[6]||999<t[6]?6:-1,
x(e)._overflowDayOfYear&&(0>o||2<o)&&(o=2),
x(e)._overflowWeeks&&-1===o&&(o=7),x(e)._overflowWeekday&&-1===o&&(o=8),
x(e).overflow=o),e}function He(e,t,o){
return null==e?null==t?o:t:e}function je(e){
var o,n,a,d,s,t=[];if(!e._d){for(a=function(e){
var t=new Date(l.now())
;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]
}(e),
e._w&&null==e._a[2]&&null==e._a[1]&&function(e){
var t,o,n,i,a,d,s,r
;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)a=1,d=4,o=He(t.GG,e._a[0],we(st(),1,4).year),
n=He(t.W,1),(1>(i=He(t.E,1))||7<i)&&(r=!0);else{
a=e._locale._week.dow,d=e._locale._week.doy
;var l=we(st(),a,d)
;o=He(t.gg,e._a[0],l.year),n=He(t.w,l.week),null==t.d?null==t.e?i=a:(i=t.e+a,
(0>t.e||6<t.e)&&(r=!0)):(0>(i=t.d)||6<i)&&(r=!0)}
1>n||n>xe(o,a,d)?x(e)._overflowWeeks=!0:null==r?(s=ke(o,n,i,a,d),
e._a[0]=s.year,
e._dayOfYear=s.dayOfYear):x(e)._overflowWeekday=!0
}(e),null!=e._dayOfYear&&(s=He(e._a[0],a[0]),
(e._dayOfYear>ae(s)||0===e._dayOfYear)&&(x(e)._overflowDayOfYear=!0),
n=_e(s,0,e._dayOfYear),
e._a[1]=n.getUTCMonth(),e._a[2]=n.getUTCDate()),o=0;3>o&&null==e._a[o];++o)e._a[o]=t[o]=a[o]
;for(;7>o;o++)e._a[o]=t[o]=null==e._a[o]?2===o?1:0:e._a[o]
;24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,
e._a[3]=0),
e._d=(e._useUTC?_e:be).apply(null,t),d=e._useUTC?e._d.getUTCDay():e._d.getDay(),
null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
e._nextDay&&(e._a[3]=24),
e._w&&void 0!==e._w.d&&e._w.d!==d&&(x(e).weekdayMismatch=!0)
}}function Ve(e){
var n,a,d,s,r,c,t=e._i,o=Vo.exec(t)||Go.exec(t)
;if(o){
for(x(e).iso=!0,n=0,a=Xo.length;n<a;n++)if(Xo[n][1].exec(o[1])){
s=Xo[n][0],d=!1!==Xo[n][2];break}
if(null==s)return void(e._isValid=!1);if(o[3]){
for(n=0,a=Zo.length;n<a;n++)if(Zo[n][1].exec(o[3])){
r=(o[2]||" ")+Zo[n][0];break}
if(null==r)return void(e._isValid=!1)}
if(!d&&null!=r)return void(e._isValid=!1)
;if(o[4]){
if(!qo.exec(o[4]))return void(e._isValid=!1);c="Z"
}e._f=s+(r||"")+(c||""),Je(e)}else e._isValid=!1}
function qe(e){var t=_parseInt$3(e,10)
;return 49>=t?2e3+t:999>=t?1900+t:t}
function Ke(e){var t=Ko.exec(function(e){
return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}(e._i));if(t){var o=function(e,t,o,n,i,a){
var d=[qe(e),indexOf$3(Bo).call(Bo,t),_parseInt$3(o,10),_parseInt$3(n,10),_parseInt$3(i,10)]
;return a&&d.push(_parseInt$3(a,10)),d
}(t[4],t[3],t[2],t[5],t[6],t[7])
;if(!function(e,t,o){
return!e||indexOf$3(Lo).call(Lo,e)===new Date(t[0],t[1],t[2]).getDay()||(x(o).weekdayMismatch=!0,
o._isValid=!1,!1)}(t[1],o,e))return
;e._a=o,e._tzm=function(e,t,o){if(e)return Qo[e]
;if(t)return 0;var n=_parseInt$3(o,10),i=n%100
;return(n-i)/100*60+i
}(t[8],t[9],t[10]),e._d=_e.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
x(e).rfc2822=!0}else e._isValid=!1}function Je(e){
var _context10
;if(e._f!==l.ISO_8601)if(e._f!==l.RFC_2822){
e._a=[],x(e).empty=!0
;var a,d,s,r,c,t=""+e._i,o=t.length,n=0
;for(s=K(e._f,e._locale).match(ao)||[],a=0;a<s.length;a++)r=s[a],
(d=(t.match(J(r,e))||[])[0])&&(0<(c=t.substr(0,indexOf$3(t).call(t,d))).length&&x(e).unusedInput.push(c),
t=slice$4(t).call(t,indexOf$3(t).call(t,d)+d.length),
n+=d.length),lo[r]?(d?x(e).empty=!1:x(e).unusedTokens.push(r),
ie(r,d,e)):e._strict&&!d&&x(e).unusedTokens.push(r)
;x(e).charsLeftOver=o-n,0<t.length&&x(e).unusedInput.push(t),
12>=e._a[3]&&!0===x(e).bigHour&&0<e._a[3]&&(x(e).bigHour=void 0),
x(e).parsedDateParts=slice$4(_context10=e._a).call(_context10,0),
x(e).meridiem=e._meridiem,e._a[3]=function(e,t,o){
var n
;return null==o?t:null==e.meridiemHour?null==e.isPM?t:((n=e.isPM(o))&&12>t&&(t+=12),
n||12!==t||(t=0),t):e.meridiemHour(t,o)
}(e._locale,e._a[3],e._meridiem),je(e),Ae(e)
}else Ke(e);else Ve(e)}function it(e){
var t=e._i,o=e._f
;return e._locale=e._locale||Be(e._l),null===t||void 0===o&&""===t?O({
nullInput:!0
}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),E(t)?new T(Ae(t)):(y(t)?e._d=t:u(o)?function(e){
var t,o,n,a,d
;if(0===e._f.length)return x(e).invalidFormat=!0,void(e._d=new Date(NaN))
;for(a=0;a<e._f.length;a++)d=0,
t=D({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),
t._f=e._f[a],Je(t),S(t)&&(d+=x(t).charsLeftOver,
d+=10*x(t).unusedTokens.length,x(t).score=d,
(null==n||d<n)&&(n=d,o=t));v(e,o||t)
}(e):o?Je(e):function(e){var t=e._i
;m(t)?e._d=new Date(l.now()):y(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){
var t=$o.exec(e._i)
;null===t?(Ve(e),!1===e._isValid&&(delete e._isValid,Ke(e),!1===e._isValid&&(delete e._isValid,
l.createFromInputFallback(e)))):e._d=new Date(+t[1])
}(e):u(t)?(e._a=f(slice$4(t).call(t,0),(function(e){
return _parseInt$3(e,10)
})),je(e)):p(t)?function(e){if(!e._d){
var t=j(e._i)
;e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],(function(e){
return e&&_parseInt$3(e,10)})),je(e)}
}(e):g(t)?e._d=new Date(t):l.createFromInputFallback(e)
}(e),S(e)||(e._d=null),e))}function dt(e,t,o,n,i){
var a={}
;return(!0===o||!1===o)&&(n=o,o=void 0),(p(e)&&function(e){
if(getOwnPropertyNames$2)return 0===getOwnPropertyNames$2(e).length
;for(var t in e)if(e.hasOwnProperty(t))return!1
;return!0
}(e)||u(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,
a._l=o,a._i=e,a._f=t,a._strict=n,function(e){
var t=new T(Ae(it(e)))
;return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t
}(a)}function st(e,t,o,n){return dt(e,t,o,n,!1)}
function rt(e,t){var o,n
;if(1===t.length&&u(t[0])&&(t=t[0]),!t.length)return st()
;for(o=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](o))&&(o=t[n])
;return o}function ct(e){
var t=j(e),o=t.year||0,n=t.quarter||0,i=t.month||0,a=t.week||t.isoWeek||0,d=t.day||0,s=t.hour||0,r=t.minute||0,l=t.second||0,c=t.millisecond||0
;this._isValid=function(e){
for(var t in e)if(-1===Ro.call(on,t)||null!=e[t]&&isNaN(e[t]))return!1
;for(var o=!1,n=0;n<on.length;++n)if(e[on[n]]){
if(o)return!1
;_parseFloat$3(e[on[n]])!==M(e[on[n]])&&(o=!0)}
return!0
}(t),this._milliseconds=+c+1e3*l+6e4*r+1e3*s*60*60,this._days=+d+7*a,this._months=+i+3*n+12*o,
this._data={},this._locale=Be(),this._bubble()}
function ut(e){return e instanceof ct}
function pt(e){return 0>e?-1*t(-1*e):t(e)}
function ht(e,t){q(e,0,0,(function(){
var e=this.utcOffset(),o="+"
;return 0>e&&(e=-e,o="-"),o+G(~~(e/60),2)+t+G(~~e%60,2)
}))}function mt(e,t){var o=(t||"").match(e)
;if(null===o)return null
;var i=((o[o.length-1]||[])+"").match(nn)||["-",0,0],a=60*i[1]+M(i[2])
;return 0===a?0:"+"===i[0]?a:-a}function gt(e,t){
var o,n
;return t._isUTC?(o=t.clone(),n=(E(e)||y(e)?e.valueOf():st(e).valueOf())-o.valueOf(),
o._d.setTime(o._d.valueOf()+n),
l.updateOffset(o,!1),o):st(e).local()}
function yt(e){
return 15*-t(e._d.getTimezoneOffset()/15)}
function bt(){
return!!this.isValid()&&this._isUTC&&0===this._offset
}function _t(e,t){var i,a,d,o=e,n=null
;return ut(e)?o={ms:e._milliseconds,d:e._days,
M:e._months
}:g(e)?(o={},t?o[t]=e:o.milliseconds=e):(n=an.exec(e))?(i="-"===n[1]?-1:1,
o={y:0,d:M(n[2])*i,h:M(n[3])*i,m:M(n[4])*i,
s:M(n[5])*i,ms:M(pt(1e3*n[6]))*i
}):(n=dn.exec(e))?(i="-"===n[1]?-1:1,o={
y:vt(n[2],i),M:vt(n[3],i),w:vt(n[4],i),
d:vt(n[5],i),h:vt(n[6],i),m:vt(n[7],i),
s:vt(n[8],i)
}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(d=function(e,t){
var o
;return e.isValid()&&t.isValid()?(t=gt(t,e),e.isBefore(t)?o=kt(e,t):((o=kt(t,e)).milliseconds=-o.milliseconds,
o.months=-o.months),o):{milliseconds:0,months:0}
}(st(o.from),st(o.to)),(o={}).ms=d.milliseconds,
o.M=d.months),a=new ct(o),ut(e)&&_(e,"_locale")&&(a._locale=e._locale),
a}function vt(e,t){
var o=e&&_parseFloat$3(e.replace(",","."))
;return(isNaN(o)?0:o)*t}function kt(e,t){var o={}
;return o.months=t.month()-e.month()+12*(t.year()-e.year()),
e.clone().add(o.months,"M").isAfter(t)&&--o.months,
o.milliseconds=+t-+e.clone().add(o.months,"M"),o}
function xt(e,t){return function(o,n){var a
;return null===n||isNaN(+n)||(N(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
a=o,
o=n,n=a),St(this,_t(o="string"==typeof o?+o:o,n),e),this
}}function St(e,t,o,n){
var i=t._milliseconds,a=pt(t._days),d=pt(t._months)
;e.isValid()&&(n=null==n||n,d&&ge(e,re(e,"Month")+d*o),
a&&le(e,"Date",re(e,"Date")+a*o),
i&&e._d.setTime(e._d.valueOf()+i*o),n&&l.updateOffset(e,a||d))
}function Ot(e,t){
var a,o=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(o,"months")
;return 0>t-n?a=(t-n)/(n-e.clone().add(o-1,"months")):a=(t-n)/(e.clone().add(o+1,"months")-n),
-(o+a)||0}function Dt(e){var t
;return void 0===e?this._locale._abbr:(null!=(t=Be(e))&&(this._locale=t),
this)}function Tt(){return this._locale}
function Et(e,t){return(e%t+t)%t}
function Ct(e,t,o){
return 100>e&&0<=e?new Date(e+400,t,o)-126227808e5:new Date(e,t,o).valueOf()
}function Mt(e,t,o){
return 100>e&&0<=e?Date.UTC(e+400,t,o)-126227808e5:Date.UTC(e,t,o)
}function It(e,t){q(0,[e,e.length],0,t)}
function Pt(e,t,o,n,i){var a
;return null==e?we(this,n,i).year:(t>(a=xe(e,n,i))&&(t=a),
Ft.call(this,e,t,o,n,i))}function Ft(e,t,o,n,i){
var a=ke(e,t,o,n,i),d=_e(a.year,0,a.dayOfYear)
;return this.year(d.getUTCFullYear()),
this.month(d.getUTCMonth()),this.date(d.getUTCDate()),
this}function Nt(e,t){t[6]=M(1e3*("0."+e))}
function Yt(e){return e}function Rt(e,t,o,n){
var i=Be(),a=k().set(n,t);return i[o](a,e)}
function zt(e,t,o){
if(g(e)&&(t=e,e=void 0),e=e||"",null!=t)return Rt(e,t,o,"month")
;var a,n=[]
;for(a=0;12>a;a++)n[a]=Rt(e,a,o,"month");return n}
function Bt(e,t,o,n){
"boolean"==typeof e?(g(t)&&(o=t,t=void 0),t=t||""):(o=t=e,e=!1,
g(t)&&(o=t,t=void 0),t=t||"")
;var a=Be(),d=e?a._week.dow:0
;if(null!=o)return Rt(t,(o+d)%7,n,"day")
;var r,s=[]
;for(r=0;7>r;r++)s[r]=Rt(t,(r+d)%7,n,"day")
;return s}function Lt(e,t,o,n){var i=_t(t,o)
;return e._milliseconds+=n*i._milliseconds,
e._days+=n*i._days,e._months+=n*i._months,
e._bubble()}function At(e){return 0>e?s(e):r(e)}
function Ht(e){return 4800*e/146097}
function Wt(e){return 146097*e/4800}
function jt(e){return function(){return this.as(e)
}}function Ut(e){return function(){
return this.isValid()?this._data[e]:NaN}}
function Vt(e,t,o,n,i){
return i.relativeTime(t||1,!!o,e,n)}
function Xt(e){return(0<e)-(0>e)||+e}
function Zt(){
if(!this.isValid())return this.localeData().invalidDate()
;var n,i,e=Rn(this._milliseconds)/1e3,t=Rn(this._days),o=Rn(this._months)
;n=C(e/60),i=C(n/60),e%=60,n%=60
;var d=C(o/12),r=o%=12,l=t,c=i,u=n,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",s=this.asSeconds()
;if(!s)return"P0D"
;var h=0>s?"-":"",m=Xt(this._months)===Xt(s)?"":"-",g=Xt(this._days)===Xt(s)?"":"-",y=Xt(this._milliseconds)===Xt(s)?"":"-"
;return h+"P"+(d?m+d+"Y":"")+(r?m+r+"M":"")+(l?g+l+"D":"")+(c||u||p?"T":"")+(c?y+c+"H":"")+(u?y+u+"M":"")+(p?y+p+"S":"")
}var $t,Kt
;Kt=some$2(Array.prototype)?some$2(Array.prototype):function(e){
for(var o=Object(this),t=o.length>>>0,n=0;n<t;n++)if(n in o&&e.call(this,o[n],n,o))return!0
;return!1}
;var Qt=l.momentProperties=[],Jt=!1,eo={}
;l.suppressDeprecationWarnings=!1,l.deprecationHandler=null
;var to=keys$6||function(e){var o,t=[]
;for(o in e)_(e,o)&&t.push(o);return t
},no={},io={},ao=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,so=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ro={},lo={},co=/\d/,uo=/\d\d/,po=/\d{3}/,ho=/\d{4}/,mo=/[+-]?\d{6}/,go=/\d\d?/,yo=/\d\d\d\d?/,fo=/\d\d\d\d\d\d?/,bo=/\d{1,3}/,_o=/\d{1,4}/,vo=/[+-]?\d{1,6}/,ko=/\d+/,wo=/[+-]?\d+/,xo=/Z|[+-]\d\d:?\d\d/gi,So=/Z|[+-]\d\d(?::?\d\d)?/gi,Do=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,To={},Eo={}
;q("Y",0,0,(function(){var e=this.year()
;return 9999>=e?""+e:"+"+e
})),q(0,["YY",2],0,(function(){
return this.year()%100
})),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),
H("year","y"),
U("year",1),Q("Y",wo),Q("YY",go,uo),Q("YYYY",_o,ho),Q("YYYYY",vo,mo),
Q("YYYYYY",vo,mo),
oe(["YYYYY","YYYYYY"],0),oe("YYYY",(function(e,t){
t[0]=2===e.length?l.parseTwoDigitYear(e):M(e)
})),oe("YY",(function(e,t){
t[0]=l.parseTwoDigitYear(e)
})),oe("Y",(function(e,t){t[0]=_parseInt$3(e,10)
})),l.parseTwoDigitYear=function(e){
return M(e)+(68<M(e)?1900:2e3)}
;var Ro,Yo=se("FullYear",!0)
;Ro=indexOf$3(Array.prototype)?indexOf$3(Array.prototype):function(e){
var t
;for(t=0;t<this.length;++t)if(this[t]===e)return t
;return-1},q("M",["MM",2],"Mo",(function(){
return this.month()+1})),q("MMM",0,0,(function(e){
return this.localeData().monthsShort(this,e)
})),q("MMMM",0,0,(function(e){
return this.localeData().months(this,e)
})),H("month","M"),U("month",8),Q("M",go),
Q("MM",go,uo),Q("MMM",(function(e,t){
return t.monthsShortRegex(e)
})),Q("MMMM",(function(e,t){
return t.monthsRegex(e)
})),oe(["M","MM"],(function(e,t){t[1]=M(e)-1
})),oe(["MMM","MMMM"],(function(e,t,o,n){
var i=o._locale.monthsParse(e,n,o._strict)
;null==i?x(o).invalidMonth=e:t[1]=i}))
;var zo=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Bo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
;q("w",["ww",2],"wo","week"),
q("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),
U("week",5),U("isoWeek",5),
Q("w",go),Q("ww",go,uo),Q("W",go),Q("WW",go,uo),ne(["w","ww","W","WW"],(function(e,t,o,n){
t[n.substr(0,1)]=M(e)
})),q("d",0,"do","day"),q("dd",0,0,(function(e){
return this.localeData().weekdaysMin(this,e)
})),q("ddd",0,0,(function(e){
return this.localeData().weekdaysShort(this,e)
})),q("dddd",0,0,(function(e){
return this.localeData().weekdays(this,e)
})),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),
H("day","d"),H("weekday","e"),H("isoWeekday","E"),
U("day",11),U("weekday",11),U("isoWeekday",11),
Q("d",go),Q("e",go),Q("E",go),Q("dd",(function(e,t){
return t.weekdaysMinRegex(e)
})),Q("ddd",(function(e,t){
return t.weekdaysShortRegex(e)
})),Q("dddd",(function(e,t){
return t.weekdaysRegex(e)
})),ne(["dd","ddd","dddd"],(function(e,t,o,n){
var i=o._locale.weekdaysParse(e,n,o._strict)
;null==i?x(o).invalidWeekday=e:t.d=i
})),ne(["d","e","E"],(function(e,t,o,n){t[n]=M(e)
}))
;var Lo=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
;q("H",["HH",2],0,"hour"),q("h",["hh",2],0,Me),
q("k",["kk",2],0,(function(){
return this.hours()||24
})),q("hmm",0,0,(function(){
return""+Me.apply(this)+G(this.minutes(),2)
})),q("hmmss",0,0,(function(){
return""+Me.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)
})),q("Hmm",0,0,(function(){
return""+this.hours()+G(this.minutes(),2)
})),q("Hmmss",0,0,(function(){
return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)
})),Ie("a",!0),Ie("A",!1),
H("hour","h"),U("hour",13),Q("a",Pe),Q("A",Pe),Q("H",go),
Q("h",go),Q("k",go),Q("HH",go,uo),
Q("hh",go,uo),Q("kk",go,uo),Q("hmm",yo),Q("hmmss",fo),
Q("Hmm",yo),Q("Hmmss",fo),
oe(["H","HH"],3),oe(["k","kk"],(function(e,t){
var o=M(e);t[3]=24===o?0:o
})),oe(["a","A"],(function(e,t,o){
o._isPm=o._locale.isPM(e),o._meridiem=e
})),oe(["h","hh"],(function(e,t,o){
t[3]=M(e),x(o).bigHour=!0
})),oe("hmm",(function(e,t,o){var n=e.length-2
;t[3]=M(e.substr(0,n)),t[4]=M(e.substr(n)),
x(o).bigHour=!0})),oe("hmmss",(function(e,t,o){
var n=e.length-4,i=e.length-2
;t[3]=M(e.substr(0,n)),t[4]=M(e.substr(n,2)),t[5]=M(e.substr(i)),
x(o).bigHour=!0})),oe("Hmm",(function(e,t){
var o=e.length-2
;t[3]=M(e.substr(0,o)),t[4]=M(e.substr(o))
})),oe("Hmmss",(function(e,t){
var o=e.length-4,n=e.length-2
;t[3]=M(e.substr(0,o)),t[4]=M(e.substr(o,2)),t[5]=M(e.substr(n))
}));var Jo,Ho=se("Hours",!0),Wo={calendar:{
sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",
nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",
lastWeek:"[Last] dddd [at] LT",sameElse:"L"},
longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",
L:"MM/DD/YYYY",LL:"MMMM D, YYYY",
LLL:"MMMM D, YYYY h:mm A",
LLLL:"dddd, MMMM D, YYYY h:mm A"},
invalidDate:"Invalid date",ordinal:"%d",
dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{
future:"in %s",past:"%s ago",s:"a few seconds",
ss:"%d seconds",m:"a minute",mm:"%d minutes",
h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",
M:"a month",MM:"%d months",y:"a year",
yy:"%d years"},
months:["January","February","March","April","May","June","July","August","September","October","November","December"],
monthsShort:Bo,week:{dow:0,doy:6},
weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],
weekdaysShort:Lo,meridiemParse:/[ap]\.?m?\.?/i
},jo={},Uo={},Vo=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Go=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qo=/Z|[+-]\d\d(?::?\d\d)?/,Xo=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Zo=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],$o=/^\/?Date\((\-?\d+)/i,Ko=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Qo={
UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,
MDT:-360,MST:-420,PDT:-420,PST:-480}
;l.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){
e._d=new Date(e._i+(e._useUTC?" UTC":""))
})),l.ISO_8601=function(){},l.RFC_2822=function(){}
;var en=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=st.apply(null,arguments)
;return this.isValid()&&e.isValid()?e<this?this:e:O()
})),tn=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=st.apply(null,arguments)
;return this.isValid()&&e.isValid()?e>this?this:e:O()
})),on=["year","quarter","month","week","day","hour","minute","second","millisecond"]
;ht("Z",":"),
ht("ZZ",""),Q("Z",So),Q("ZZ",So),oe(["Z","ZZ"],(function(e,t,o){
o._useUTC=!0,o._tzm=mt(So,e)}))
;var nn=/([\+\-]|\d\d)/gi
;l.updateOffset=function(){}
;var an=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,dn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
;_t.fn=ct.prototype,_t.invalid=function(){
return _t(NaN)}
;var sn=xt(1,"add"),rn=xt(-1,"subtract")
;l.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",
l.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
;var ln=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){
return void 0===e?this.localeData():this.locale(e)
}));q(0,["gg",2],0,(function(){
return this.weekYear()%100
})),q(0,["GG",2],0,(function(){
return this.isoWeekYear()%100
})),It("gggg","weekYear"),It("ggggg","weekYear"),It("GGGG","isoWeekYear"),
It("GGGGG","isoWeekYear"),
H("weekYear","gg"),H("isoWeekYear","GG"),U("weekYear",1),
U("isoWeekYear",1),Q("G",wo),
Q("g",wo),Q("GG",go,uo),Q("gg",go,uo),Q("GGGG",_o,ho),
Q("gggg",_o,ho),Q("GGGGG",vo,mo),
Q("ggggg",vo,mo),ne(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,o,n){
t[n.substr(0,2)]=M(e)
})),ne(["gg","GG"],(function(e,t,o,n){
t[n]=l.parseTwoDigitYear(e)
})),q("Q",0,"Qo","quarter"),H("quarter","Q"),U("quarter",7),
Q("Q",co),oe("Q",(function(e,t){t[1]=3*(M(e)-1)
})),q("D",["DD",2],"Do","date"),H("date","D"),
U("date",9),Q("D",go),Q("DD",go,uo),
Q("Do",(function(e,t){
return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient
})),oe(["D","DD"],2),oe("Do",(function(e,t){
t[2]=M(e.match(go)[0])}));var cn=se("Date",!0)
;q("DDD",["DDDD",3],"DDDo","dayOfYear"),
H("dayOfYear","DDD"),U("dayOfYear",4),Q("DDD",bo),
Q("DDDD",po),oe(["DDD","DDDD"],(function(e,t,o){
o._dayOfYear=M(e)
})),q("m",["mm",2],0,"minute"),H("minute","m"),U("minute",14),Q("m",go),
Q("mm",go,uo),oe(["m","mm"],4)
;var un=se("Minutes",!1)
;q("s",["ss",2],0,"second"),H("second","s"),U("second",15),
Q("s",go),Q("ss",go,uo),oe(["s","ss"],5)
;var hn,pn=se("Seconds",!1)
;for(q("S",0,0,(function(){
return~~(this.millisecond()/100)
})),q(0,["SS",2],0,(function(){
return~~(this.millisecond()/10)
})),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,(function(){
return 10*this.millisecond()
})),q(0,["SSSSS",5],0,(function(){
return 100*this.millisecond()
})),q(0,["SSSSSS",6],0,(function(){
return 1e3*this.millisecond()
})),q(0,["SSSSSSS",7],0,(function(){
return 1e4*this.millisecond()
})),q(0,["SSSSSSSS",8],0,(function(){
return 1e5*this.millisecond()
})),q(0,["SSSSSSSSS",9],0,(function(){
return 1e6*this.millisecond()
})),H("millisecond","ms"),U("millisecond",16),Q("S",bo,co),
Q("SS",bo,uo),Q("SSS",bo,po),
hn="SSSS";9>=hn.length;hn+="S")Q(hn,ko)
;for(hn="S";9>=hn.length;hn+="S")oe(hn,Nt)
;var mn=se("Milliseconds",!1)
;q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName")
;var gn=T.prototype
;gn.add=sn,gn.calendar=function(e,t){
var o=e||st(),n=gt(o,this).startOf("day"),i=l.calendarFormat(this,n)||"sameElse",a=t&&(Y(t[i])?t[i].call(this,o):t[i])
;return this.format(a||this.localeData().calendar(i,this,st(o)))
},gn.clone=function(){return new T(this)
},gn.diff=function(e,t,o){var n,i,a
;return this.isValid()?(n=gt(e,this)).isValid()?(i=6e4*(n.utcOffset()-this.utcOffset()),
a="year"===(t=W(t))?Ot(this,n)/12:"month"===t?Ot(this,n):"quarter"===t?Ot(this,n)/3:"second"===t?(this-n)/1e3:"minute"===t?(this-n)/6e4:"hour"===t?(this-n)/36e5:"day"===t?(this-n-i)/864e5:"week"===t?(this-n-i)/6048e5:this-n,
o?a:C(a)):NaN:NaN},gn.endOf=function(e){var t
;if(void 0===(e=W(e))||"millisecond"===e||!this.isValid())return this
;var o=this._isUTC?Mt:Ct
;return"year"===e?t=o(this.year()+1,0,1)-1:"quarter"===e?t=o(this.year(),this.month()-this.month()%3+3,1)-1:"month"===e?t=o(this.year(),this.month()+1,1)-1:"week"===e?t=o(this.year(),this.month(),this.date()-this.weekday()+7)-1:"isoWeek"===e?t=o(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1:"day"===e||"date"===e?t=o(this.year(),this.month(),this.date()+1)-1:"hour"===e?(t=this._d.valueOf(),
t+=36e5-Et(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1):"minute"===e?(t=this._d.valueOf(),
t+=6e4-Et(t,6e4)-1):"second"===e&&(t=this._d.valueOf(),
t+=1e3-Et(t,1e3)-1),this._d.setTime(t),
l.updateOffset(this,!0),this
},gn.format=function(e){
e||(e=this.isUtc()?l.defaultFormatUtc:l.defaultFormat)
;var t=$(this,e)
;return this.localeData().postformat(t)
},gn.from=function(e,t){
return this.isValid()&&(E(e)&&e.isValid()||st(e).isValid())?_t({
to:this,from:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},gn.fromNow=function(e){return this.from(st(),e)
},gn.to=function(e,t){
return this.isValid()&&(E(e)&&e.isValid()||st(e).isValid())?_t({
from:this,to:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},gn.toNow=function(e){return this.to(st(),e)
},gn.get=function(e){
return Y(this[e=W(e)])?this[e]():this
},gn.invalidAt=function(){return x(this).overflow
},gn.isAfter=function(e,t){var o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()>o.valueOf():o.valueOf()<this.clone().startOf(t).valueOf())
},gn.isBefore=function(e,t){var o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()<o.valueOf():this.clone().endOf(t).valueOf()<o.valueOf())
},gn.isBetween=function(e,t,o,n){
var i=E(e)?e:st(e),a=E(t)?t:st(t)
;return!!(this.isValid()&&i.isValid()&&a.isValid())&&(("("===(n=n||"()")[0]?this.isAfter(i,o):!this.isBefore(i,o))&&(")"===n[1]?this.isBefore(a,o):!this.isAfter(a,o)))
},gn.isSame=function(e,t){var n,o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()===o.valueOf():(n=o.valueOf(),
this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))
},gn.isSameOrAfter=function(e,t){
return this.isSame(e,t)||this.isAfter(e,t)
},gn.isSameOrBefore=function(e,t){
return this.isSame(e,t)||this.isBefore(e,t)
},gn.isValid=function(){return S(this)
},gn.lang=ln,gn.locale=Dt,gn.localeData=Tt,
gn.max=tn,gn.min=en,gn.parsingFlags=function(){
return v({},x(this))},gn.set=function(e,t){
if("object"==typeof e)for(var o=function(e){
var t=[];for(var o in e)t.push({unit:o,
priority:io[o]})
;return sort$2(t).call(t,(function(e,t){
return e.priority-t.priority})),t
}(e=j(e)),n=0;n<o.length;n++)this[o[n].unit](e[o[n].unit]);else if(Y(this[e=W(e)]))return this[e](t)
;return this},gn.startOf=function(e){var t
;if(void 0===(e=W(e))||"millisecond"===e||!this.isValid())return this
;var o=this._isUTC?Mt:Ct
;return"year"===e?t=o(this.year(),0,1):"quarter"===e?t=o(this.year(),this.month()-this.month()%3,1):"month"===e?t=o(this.year(),this.month(),1):"week"===e?t=o(this.year(),this.month(),this.date()-this.weekday()):"isoWeek"===e?t=o(this.year(),this.month(),this.date()-(this.isoWeekday()-1)):"day"===e||"date"===e?t=o(this.year(),this.month(),this.date()):"hour"===e?(t=this._d.valueOf(),
t-=Et(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)):"minute"===e?(t=this._d.valueOf(),
t-=Et(t,6e4)):"second"===e&&(t=this._d.valueOf(),
t-=Et(t,1e3)),this._d.setTime(t),
l.updateOffset(this,!0),this
},gn.subtract=rn,gn.toArray=function(){var e=this
;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]
},gn.toObject=function(){var e=this;return{
years:e.year(),months:e.month(),date:e.date(),
hours:e.hours(),minutes:e.minutes(),
seconds:e.seconds(),milliseconds:e.milliseconds()}
},gn.toDate=function(){
return new Date(this.valueOf())
},gn.toISOString=function(e){
if(!this.isValid())return null
;var t=!0!==e,o=t?this.clone().utc():this
;return 0>o.year()||9999<o.year()?$(o,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Y(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",$(o,"Z")):$(o,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")
},gn.inspect=function(){
if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
;var e="moment",t=""
;this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",
t="Z")
;var o="["+e+'("]',n=0<=this.year()&&9999>=this.year()?"YYYY":"YYYYYY",i=t+'[")]'
;return this.format(o+n+"-MM-DD[T]HH:mm:ss.SSS"+i)
},gn.toJSON=function(){
return this.isValid()?this.toISOString():null
},gn.toString=function(){
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},gn.unix=function(){return s(this.valueOf()/1e3)
},gn.valueOf=function(){
return this._d.valueOf()-6e4*(this._offset||0)
},gn.creationData=function(){return{input:this._i,
format:this._f,locale:this._locale,
isUTC:this._isUTC,strict:this._strict}
},gn.year=Yo,gn.isLeapYear=function(){
return de(this.year())},gn.weekYear=function(e){
return Pt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
},gn.isoWeekYear=function(e){
return Pt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)
},gn.quarter=gn.quarters=function(e){
return null==e?r((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)
},gn.month=ye,gn.daysInMonth=function(){
return pe(this.year(),this.month())
},gn.week=gn.weeks=function(e){
var t=this.localeData().week(this)
;return null==e?t:this.add(7*(e-t),"d")
},gn.isoWeek=gn.isoWeeks=function(e){
var t=we(this,1,4).week
;return null==e?t:this.add(7*(e-t),"d")
},gn.weeksInYear=function(){
var e=this.localeData()._week
;return xe(this.year(),e.dow,e.doy)
},gn.isoWeeksInYear=function(){
return xe(this.year(),1,4)
},gn.date=cn,gn.day=gn.days=function(e){
if(!this.isValid())return null==e?NaN:this
;var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
;return null==e?t:(e=function(e,t){
return"string"==typeof e?isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:_parseInt$3(e,10):e
}(e,this.localeData()),this.add(e-t,"d"))
},gn.weekday=function(e){
if(!this.isValid())return null==e?NaN:this
;var t=(this.day()+7-this.localeData()._week.dow)%7
;return null==e?t:this.add(e-t,"d")
},gn.isoWeekday=function(e){
if(!this.isValid())return null==e?NaN:this
;if(null!=e){var t=function(e,t){
return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e
}(e,this.localeData())
;return this.day(this.day()%7?t:t-7)}
return this.day()||7},gn.dayOfYear=function(e){
var o=t((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
;return null==e?o:this.add(e-o,"d")
},gn.hour=gn.hours=Ho,gn.minute=gn.minutes=un,
gn.second=gn.seconds=pn,gn.millisecond=gn.milliseconds=mn,
gn.utcOffset=function(e,t,o){
var i,n=this._offset||0
;if(!this.isValid())return null==e?NaN:this
;if(null!=e){
if("string"!=typeof e)16>a(e)&&!o&&(e*=60);else if(null===(e=mt(So,e)))return this
;return!this._isUTC&&t&&(i=yt(this)),
this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),
n!==e&&(!t||this._changeInProgress?St(this,_t(e-n,"m"),1,!1):!this._changeInProgress&&(this._changeInProgress=!0,
l.updateOffset(this,!0),
this._changeInProgress=null)),this}
return this._isUTC?n:yt(this)},gn.utc=function(e){
return this.utcOffset(0,e)},gn.local=function(e){
return this._isUTC&&(this.utcOffset(0,e),
this._isUTC=!1,e&&this.subtract(yt(this),"m")),
this},gn.parseZone=function(){
if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){
var e=mt(xo,this._i)
;null==e?this.utcOffset(0,!0):this.utcOffset(e)}
return this},gn.hasAlignedHourOffset=function(e){
return!!this.isValid()&&(e=e?st(e).utcOffset():0,
0==(this.utcOffset()-e)%60)},gn.isDST=function(){
return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
},gn.isLocal=function(){
return!!this.isValid()&&!this._isUTC
},gn.isUtcOffset=function(){
return!!this.isValid()&&this._isUTC
},gn.isUtc=bt,gn.isUTC=bt,gn.zoneAbbr=function(){
return this._isUTC?"UTC":""
},gn.zoneName=function(){
return this._isUTC?"Coordinated Universal Time":""
},gn.dates=F("dates accessor is deprecated. Use date instead.",cn),
gn.months=F("months accessor is deprecated. Use month instead",ye),
gn.years=F("years accessor is deprecated. Use year instead",Yo),
gn.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(e,t){
return null==e?-this.utcOffset():("string"!=typeof e&&(e=-e),
this.utcOffset(e,t),this)
})),gn.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){
if(!m(this._isDSTShifted))return this._isDSTShifted
;var e={};if(D(e,this),(e=it(e))._a){
var t=e._isUTC?k(e._a):st(e._a)
;this._isDSTShifted=this.isValid()&&0<I(e._a,t.toArray())
}else this._isDSTShifted=!1
;return this._isDSTShifted}));var yn=B.prototype
;yn.calendar=function(e,t,o){
var n=this._calendar[e]||this._calendar.sameElse
;return Y(n)?n.call(t,o):n
},yn.longDateFormat=function(e){
var t=this._longDateFormat[e],o=this._longDateFormat[e.toUpperCase()]
;return t||!o?t:(this._longDateFormat[e]=o.replace(/MMMM|MM|DD|dddd/g,(function(e){
return slice$4(e).call(e,1)
})),this._longDateFormat[e])
},yn.invalidDate=function(){
return this._invalidDate},yn.ordinal=function(e){
return this._ordinal.replace("%d",e)
},yn.preparse=Yt,yn.postformat=Yt,yn.relativeTime=function(e,t,o,n){
var i=this._relativeTime[o]
;return Y(i)?i(e,t,o,n):i.replace(/%d/i,e)
},yn.pastFuture=function(e,t){
var o=this._relativeTime[0<e?"future":"past"]
;return Y(o)?o(t):o.replace(/%s/i,t)
},yn.set=function(e){var t,o
;for(o in e)Y(t=e[o])?this[o]=t:this["_"+o]=t
;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)
},yn.months=function(e,t){
return e?u(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||zo).test(t)?"format":"standalone"][e.month()]:u(this._months)?this._months:this._months.standalone
},yn.monthsShort=function(e,t){
return e?u(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[zo.test(t)?"format":"standalone"][e.month()]:u(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
},yn.monthsParse=function(e,t,o){var n,a,d
;if(this._monthsParseExact)return he.call(this,e,t,o)
;for(this._monthsParse||(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[]),
n=0;12>n;n++){
if(a=k([2e3,n]),o&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),
this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),
o||this._monthsParse[n]||(d="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),
this._monthsParse[n]=new RegExp(d.replace(".",""),"i")),
o&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n
;if(o&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n
;if(!o&&this._monthsParse[n].test(e))return n}
},yn.monthsRegex=function(e){
return this._monthsParseExact?(_(this,"_monthsRegex")||fe.call(this),
e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Do),
this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)
},yn.monthsShortRegex=function(e){
return this._monthsParseExact?(_(this,"_monthsRegex")||fe.call(this),
e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Do),
this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)
},yn.week=function(e){
return we(e,this._week.dow,this._week.doy).week
},yn.firstDayOfYear=function(){
return this._week.doy
},yn.firstDayOfWeek=function(){
return this._week.dow},yn.weekdays=function(e,t){
var o=u(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"]
;return!0===e?De(o,this._week.dow):e?o[e.day()]:o
},yn.weekdaysMin=function(e){
return!0===e?De(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin
},yn.weekdaysShort=function(e){
return!0===e?De(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort
},yn.weekdaysParse=function(e,t,o){var n,a,d
;if(this._weekdaysParseExact)return Te.call(this,e,t,o)
;for(this._weekdaysParse||(this._weekdaysParse=[],
this._minWeekdaysParse=[],this._shortWeekdaysParse=[],
this._fullWeekdaysParse=[]),n=0;7>n;n++){
if(a=k([2e3,1]).day(n),o&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),
this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),
this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),
this._weekdaysParse[n]||(d="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),
this._weekdaysParse[n]=new RegExp(d.replace(".",""),"i")),
o&&"dddd"===t&&this._fullWeekdaysParse[n].test(e))return n
;if(o&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n
;if(o&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n
;if(!o&&this._weekdaysParse[n].test(e))return n}
},yn.weekdaysRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=Do),
this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)
},yn.weekdaysShortRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Do),
this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
},yn.weekdaysMinRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Do),
this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
},yn.isPM=function(e){
return"p"===(e+"").toLowerCase().charAt(0)
},yn.meridiem=function(e,t,o){
return 11<e?o?"pm":"PM":o?"am":"AM"},Re("en",{
dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,
ordinal:function(e){var t=e%10
;return e+(1===M(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")
}
}),l.lang=F("moment.lang is deprecated. Use moment.locale instead.",Re),l.langData=F("moment.langData is deprecated. Use moment.localeData instead.",Be)
;var fn=a,bn=jt("ms"),_n=jt("s"),vn=jt("m"),kn=jt("h"),wn=jt("d"),xn=jt("w"),Sn=jt("M"),On=jt("Q"),Dn=jt("y"),Tn=Ut("milliseconds"),En=Ut("seconds"),Cn=Ut("minutes"),Mn=Ut("hours"),In=Ut("days"),Pn=Ut("months"),Fn=Ut("years"),Nn=t,Yn={
ss:44,s:45,m:45,h:22,d:26,M:11
},Rn=a,zn=ct.prototype
;return zn.isValid=function(){return this._isValid
},zn.abs=function(){var e=this._data
;return this._milliseconds=fn(this._milliseconds),
this._days=fn(this._days),this._months=fn(this._months),
e.milliseconds=fn(e.milliseconds),
e.seconds=fn(e.seconds),e.minutes=fn(e.minutes),
e.hours=fn(e.hours),e.months=fn(e.months),
e.years=fn(e.years),this},zn.add=function(e,t){
return Lt(this,e,t,1)},zn.subtract=function(e,t){
return Lt(this,e,t,-1)},zn.as=function(e){
if(!this.isValid())return NaN
;var n,i,o=this._milliseconds
;if("month"===(e=W(e))||"quarter"===e||"year"===e)switch(n=this._days+o/864e5,
i=this._months+Ht(n),e){case"month":return i
;case"quarter":return i/3;case"year":return i/12
}else switch(n=this._days+t(Wt(this._months)),e){
case"week":return n/7+o/6048e5;case"day":
return n+o/864e5;case"hour":return 24*n+o/36e5
;case"minute":return 1440*n+o/6e4;case"second":
return 86400*n+o/1e3;case"millisecond":
return s(864e5*n)+o;default:
throw new Error("Unknown unit "+e)}
},zn.asMilliseconds=bn,zn.asSeconds=_n,zn.asMinutes=vn,
zn.asHours=kn,zn.asDays=wn,
zn.asWeeks=xn,zn.asMonths=Sn,zn.asQuarters=On,zn.asYears=Dn,
zn.valueOf=function(){
return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN
},zn._bubble=function(){
var i,a,d,s,r,e=this._milliseconds,t=this._days,o=this._months,n=this._data
;return 0<=e&&0<=t&&0<=o||0>=e&&0>=t&&0>=o||(e+=864e5*At(Wt(o)+t),
t=0,o=0),n.milliseconds=e%1e3,
i=C(e/1e3),n.seconds=i%60,a=C(i/60),n.minutes=a%60,
d=C(a/60),n.hours=d%24,t+=C(d/24),
o+=r=C(Ht(t)),t-=At(Wt(r)),s=C(o/12),o%=12,n.days=t,
n.months=o,n.years=s,this},zn.clone=function(){
return _t(this)},zn.get=function(e){
return e=W(e),this.isValid()?this[e+"s"]():NaN
},zn.milliseconds=Tn,zn.seconds=En,
zn.minutes=Cn,zn.hours=Mn,zn.days=In,zn.weeks=function(){
return C(this.days()/7)
},zn.months=Pn,zn.years=Fn,zn.humanize=function(e){
if(!this.isValid())return this.localeData().invalidDate()
;var t=this.localeData(),o=function(e,t,o){
var n=_t(e).abs(),i=Nn(n.as("s")),d=Nn(n.as("m")),s=Nn(n.as("h")),r=Nn(n.as("d")),l=Nn(n.as("M")),c=Nn(n.as("y")),u=i<=Yn.ss&&["s",i]||i<Yn.s&&["ss",i]||1>=d&&["m"]||d<Yn.m&&["mm",d]||1>=s&&["h"]||s<Yn.h&&["hh",s]||1>=r&&["d"]||r<Yn.d&&["dd",r]||1>=l&&["M"]||l<Yn.M&&["MM",l]||1>=c&&["y"]||["yy",c]
;return u[2]=t,u[3]=0<+e,u[4]=o,Vt.apply(null,u)
}(this,!e,t)
;return e&&(o=t.pastFuture(+this,o)),t.postformat(o)
},zn.toISOString=Zt,zn.toString=Zt,
zn.toJSON=Zt,zn.locale=Dt,zn.localeData=Tt,zn.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Zt),
zn.lang=ln,
q("X",0,0,"unix"),q("x",0,0,"valueOf"),Q("x",wo),Q("X",/[+-]?\d+(\.\d{1,3})?/),
oe("X",(function(e,t,o){
o._d=new Date(1e3*_parseFloat$3(e,10))
})),oe("x",(function(e,t,o){o._d=new Date(M(e))
})),l.version="2.24.0",function(e){$t=e
}(st),l.fn=gn,l.min=function(){
var e=slice$4([]).call(arguments,0)
;return rt("isBefore",e)},l.max=function(){
var e=slice$4([]).call(arguments,0)
;return rt("isAfter",e)},l.now=function(){
return now$2?now$2():+new Date
},l.utc=k,l.unix=function(e){return st(1e3*e)
},l.months=function(e,t){return zt(e,t,"months")
},l.isDate=y,l.locale=Re,l.invalid=O,
l.duration=_t,l.isMoment=E,l.weekdays=function(e,t,o){
return Bt(e,t,o,"weekdays")
},l.parseZone=function(){
return st.apply(null,arguments).parseZone()
},l.localeData=Be,l.isDuration=ut,l.monthsShort=function(e,t){
return zt(e,t,"monthsShort")
},l.weekdaysMin=function(e,t,o){
return Bt(e,t,o,"weekdaysMin")
},l.defineLocale=ze,l.updateLocale=function(e,t){
if(null!=t){var n,i,o=Wo
;null!=(i=Ye(e))&&(o=i._config),(n=new B(t=z(o,t))).parentLocale=jo[e],
jo[e]=n,Re(e)
}else null!=jo[e]&&(null==jo[e].parentLocale?null!=jo[e]&&delete jo[e]:jo[e]=jo[e].parentLocale)
;return jo[e]},l.locales=function(){return to(jo)
},l.weekdaysShort=function(e,t,o){
return Bt(e,t,o,"weekdaysShort")
},l.normalizeUnits=W,l.relativeTimeRounding=function(e){
return void 0===e?Nn:"function"==typeof e&&(Nn=e,
!0)},l.relativeTimeThreshold=function(e,t){
return void 0!==Yn[e]&&(void 0===t?Yn[e]:(Yn[e]=t,
"s"===e&&(Yn.ss=t-1),!0))
},l.calendarFormat=function(e,t){
var o=e.diff(t,"days",!0)
;return-6>o?"sameElse":-1>o?"lastWeek":0>o?"lastDay":1>o?"sameDay":2>o?"nextDay":7>o?"nextWeek":"sameElse"
},l.prototype=gn,l.HTML5_FMT={
DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",
DATE:"YYYY-MM-DD",TIME:"HH:mm",
TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",
WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},l}))
})),byteToHex=[],i$1=0;256>i$1;i$1++)byteToHex[i$1]=(i$1+256).toString(16).substr(1)
;for(var random=function(){
if("undefined"!=typeof crypto&&crypto.getRandomValues){
var e=new Uint8Array(16);return function(){
return crypto.getRandomValues(e),e}}
var t=Array(16);return function(){
for(var o,e=0;16>e;e++)0==(3&e)&&(o=4294967296*Math.random()),
t[e]=255&o>>>((3&e)<<3);return t}
}(),byteToHex$1=[],i$1$1=0;256>i$1$1;i$1$1++)byteToHex$1[i$1$1]=(i$1$1+256).toString(16).substr(1)
;var seedBytes=random()
;seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],
seedBytes[5],seedBytes[6],seedBytes[7]
;function uuid4(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,o=2<arguments.length?arguments[2]:void 0,n=t&&o||0
;"string"==typeof e&&(t="binary"===e?Array(16):void 0,
e={});var i=e.random||(e.rng||random)()
;if(i[6]=64|15&i[6],i[8]=128|63&i[8],t)for(var a=0;16>a;a++)t[n+a]=i[a]
;return t||function(e,t){var o=t||0,n=byteToHex
;return n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]
}(i)}
var ASPDateRegex=/^\/?Date\((-?\d+)/i,fullHexRE=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,shortHexRE=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,rgbRE=/^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i,rgbaRE=/^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i
;function isNumber(e){
return e instanceof Number||"number"==typeof e}
function recursiveDOMDelete(e){
if(e)for(;!0===e.hasChildNodes();){
var t=e.firstChild
;t&&(recursiveDOMDelete(t),e.removeChild(t))}}
function isString(e){
return e instanceof String||"string"==typeof e}
function isObject$1(e){
return"object"===_typeof(e)&&null!==e}
function isDate(e){if(e instanceof Date)return!0
;if(isString(e)){if(ASPDateRegex.exec(e))return!0
;if(!isNaN(Date.parse(e)))return!0}return!1}
function isMoment(e){return moment.isMoment(e)}
function copyOrDelete(e,t,o,n){var i=!1
;!0===n&&(i=null===t[o]&&void 0!==e[o]),i?delete e[o]:e[o]=t[o]
}function fillIfDefined(e,t){
var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2]
;for(var n in e)if(void 0!==t[n])if(null===t[n]||"object"!==_typeof(t[n]))copyOrDelete(e,t,n,o);else{
var i=e[n],a=t[n]
;isObject$1(i)&&isObject$1(a)&&fillIfDefined(i,a,o)
}}var extend=assign$2
;function selectiveExtend(e,t){
if(!isArray$3(e))throw new Error("Array with property names expected as first argument")
;for(var o=arguments.length,n=Array(2<o?o-2:0),i=2;i<o;i++)n[i-2]=arguments[i]
;for(var s,a=0,d=n;a<d.length;a++){s=d[a]
;for(var l,r=0;r<e.length;r++)l=e[r],s&&Object.prototype.hasOwnProperty.call(s,l)&&(t[l]=s[l])
}return t}function selectiveDeepExtend(e,t,o){
var n=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3]
;if(isArray$3(o))throw new TypeError("Arrays are not supported by deepExtend")
;for(var a,i=0;i<e.length;i++)if(a=e[i],
Object.prototype.hasOwnProperty.call(o,a))if(o[a]&&o[a].constructor===Object)void 0===t[a]&&(t[a]={}),
t[a].constructor===Object?deepExtend(t[a],o[a],!1,n):copyOrDelete(t,o,a,n);else{
if(isArray$3(o[a]))throw new TypeError("Arrays are not supported by deepExtend")
;copyOrDelete(t,o,a,n)}return t}
function selectiveNotDeepExtend(e,t,o){
var n=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3]
;if(isArray$3(o))throw new TypeError("Arrays are not supported by deepExtend")
;for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)&&-1===indexOf$3(e).call(e,a))if(o[a]&&o[a].constructor===Object)void 0===t[a]&&(t[a]={}),
t[a].constructor===Object?deepExtend(t[a],o[a]):copyOrDelete(t,o,a,n);else if(isArray$3(o[a])){
t[a]=[]
;for(var d=0;d<o[a].length;d++)t[a].push(o[a][d])
}else copyOrDelete(t,o,a,n);return t}
function deepExtend(e,t){
var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],n=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3]
;for(var i in t){var _context11
;(Object.prototype.hasOwnProperty.call(t,i)||!0===o)&&(t[i]&&getPrototypeOf$2(t[i])===Object.prototype?void 0===e[i]?e[i]=deepExtend({},t[i],o):e[i]&&getPrototypeOf$2(e[i])===Object.prototype?deepExtend(e[i],t[i],o):copyOrDelete(e,t,i,n):isArray$3(t[i])?e[i]=slice$4(_context11=t[i]).call(_context11):copyOrDelete(e,t,i,n))
}return e}function equalArray(e,t){
if(e.length!==t.length)return!1
;for(var o=0,n=e.length;o<n;o++)if(e[o]!=t[o])return!1
;return!0}function convert(e,t){var o
;if(void 0!==e){if(null===e)return null
;if(!t)return e
;if("string"!=typeof t&&!(t instanceof String))throw new Error("Type must be a string")
;switch(t){case"boolean":case"Boolean":return!!e
;case"number":case"Number":
return isString(e)&&!isNaN(Date.parse(e))?moment(e).valueOf():+e.valueOf()
;case"string":case"String":return e+"";case"Date":
if(isNumber(e))return new Date(e)
;if(e instanceof Date)return new Date(e.valueOf())
;if(isMoment(e))return new Date(e.valueOf())
;if(isString(e))return(o=ASPDateRegex.exec(e))?new Date(+o[1]):moment(new Date(e)).toDate()
;throw new Error("Cannot convert object of type "+getType(e)+" to type Date")
;case"Moment":if(isNumber(e))return moment(e)
;if(e instanceof Date)return moment(e.valueOf())
;if(isMoment(e))return moment(e)
;if(isString(e))return o=ASPDateRegex.exec(e),moment(o?+o[1]:e)
;throw new Error("Cannot convert object of type "+getType(e)+" to type Date")
;case"ISODate":if(isNumber(e))return new Date(e)
;if(e instanceof Date)return e.toISOString()
;if(isMoment(e))return e.toDate().toISOString()
;if(isString(e))return(o=ASPDateRegex.exec(e))?new Date(+o[1]).toISOString():moment(e).format()
;throw new Error("Cannot convert object of type "+getType(e)+" to type ISODate")
;case"ASPDate":
if(isNumber(e))return"/Date("+e+")/"
;if(e instanceof Date||isMoment(e))return"/Date("+e.valueOf()+")/"
;if(isString(e))return"/Date("+((o=ASPDateRegex.exec(e))?new Date(+o[1]).valueOf():new Date(e).valueOf())+")/"
;throw new Error("Cannot convert object of type "+getType(e)+" to type ASPDate")
;default:
throw new Error("Unknown type ".concat(t))}}}
function getType(e){var t=_typeof(e)
;return"object"===t?null===e?"null":e instanceof Boolean?"Boolean":e instanceof Number?"Number":e instanceof String?"String":isArray$3(e)?"Array":e instanceof Date?"Date":"Object":"number"===t?"Number":"boolean"===t?"Boolean":"string"===t?"String":void 0===t?"undefined":t
}function copyAndExtendArray(e,t){var _context12
;return concat$2(_context12=[]).call(_context12,_toConsumableArray(e),[t])
}function copyArray(e){return slice$4(e).call(e)}
function getAbsoluteLeft(e){
return e.getBoundingClientRect().left}
function getAbsoluteRight(e){
return e.getBoundingClientRect().right}
function getAbsoluteTop(e){
return e.getBoundingClientRect().top}
function addClassName(e,t){
var o=e.className.split(" "),n=t.split(" ")
;o=concat$2(o).call(o,filter$2(n).call(n,(function(e){
return 0>indexOf$3(o).call(o,e)
}))),e.className=o.join(" ")}
function removeClassName(e,t){
var o=e.className.split(" "),n=t.split(" ")
;o=filter$2(o).call(o,(function(e){
return 0>indexOf$3(n).call(n,e)
})),e.className=o.join(" ")}
function forEach$3(e,t){
if(isArray$3(e))for(var o=e.length,n=0;n<o;n++)t(e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t(e[a],a,e)
}var toArray=values$5
;function updateProperty(e,t,o){
return e[t]!==o&&(e[t]=o,!0)}function throttle(e){
var t=!1;return function(){
t||(t=!0,requestAnimationFrame((function(){
t=!1,e()})))}}function addEventListener(e,t,o,n){
var _context13
;e.addEventListener?(void 0===n&&(n=!1),"mousewheel"===t&&0<=indexOf$3(_context13=navigator.userAgent).call(_context13,"Firefox")&&(t="DOMMouseScroll"),
e.addEventListener(t,o,n)):e.attachEvent("on"+t,o)
}function removeEventListener(e,t,o,n){
var _context14
;e.removeEventListener?(void 0===n&&(n=!1),"mousewheel"===t&&0<=indexOf$3(_context14=navigator.userAgent).call(_context14,"Firefox")&&(t="DOMMouseScroll"),
e.removeEventListener(t,o,n)):e.detachEvent("on"+t,o)
}function preventDefault(e){
e||(e=window.event),e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)
}function getTarget(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window.event,t=null
;return e&&(e.target?t=e.target:e.srcElement&&(t=e.srcElement)),
t instanceof Element&&(null==t.nodeType||3!=t.nodeType||(t=t.parentNode)instanceof Element)?t:null
}function hasParent(e,t){for(var o=e;o;){
if(o===t)return!0;if(!o.parentNode)return!1
;o=o.parentNode}return!1}var option={
asBoolean:function(e,t){
return"function"==typeof e&&(e=e()),null==e?t||null:0!=e
},asNumber:function(e,t){
return"function"==typeof e&&(e=e()),null==e?t||null:+e||t||null
},asString:function(e,t){
return"function"==typeof e&&(e=e()),null==e?t||null:e+""
},asSize:function(e,t){
return"function"==typeof e&&(e=e()),isString(e)?e:isNumber(e)?e+"px":t||null
},asElement:function(e,t){
return"function"==typeof e&&(e=e()),e||t||null}}
;function hexToRGB(e){var t;switch(e.length){
case 3:case 4:return(t=shortHexRE.exec(e))?{
r:_parseInt$3(t[1]+t[1],16),
g:_parseInt$3(t[2]+t[2],16),
b:_parseInt$3(t[3]+t[3],16)}:null;case 6:case 7:
return(t=fullHexRE.exec(e))?{
r:_parseInt$3(t[1],16),g:_parseInt$3(t[2],16),
b:_parseInt$3(t[3],16)}:null;default:return null}}
function overrideOpacity(e,t){
if(-1!==indexOf$3(e).call(e,"rgba"))return e
;if(-1!==indexOf$3(e).call(e,"rgb")){
var o=e.substr(indexOf$3(e).call(e,"(")+1).replace(")","").split(",")
;return"rgba("+o[0]+","+o[1]+","+o[2]+","+t+")"}
var n=hexToRGB(e)
;return null==n?e:"rgba("+n.r+","+n.g+","+n.b+","+t+")"
}function RGBToHex(e,t,o){var _context15
;return"#"+slice$4(_context15=(16777216+(e<<16)+(t<<8)+o).toString(16)).call(_context15,1)
}function parseColor(e,t){var o=Math.min
;if(isString(e)){var n=e;if(isValidRGB(n)){
var _context16,i=map$2(_context16=n.substr(4).substr(0,n.length-5).split(",")).call(_context16,(function(e){
return _parseInt$3(e)}))
;n=RGBToHex(i[0],i[1],i[2])}
if(!0===isValidHex(n)){var a=hexToHSV(n),d={h:a.h,
s:.8*a.s,v:o(1,1.02*a.v)},s={h:a.h,
s:o(1,1.25*a.s),v:.8*a.v
},r=HSVToHex(s.h,s.s,s.v),l=HSVToHex(d.h,d.s,d.v)
;return{background:n,border:r,highlight:{
background:l,border:r},hover:{background:l,
border:r}}}return{background:n,border:n,
highlight:{background:n,border:n},hover:{
background:n,border:n}}}return t?{
background:e.background||t.background,
border:e.border||t.border,
highlight:isString(e.highlight)?{
border:e.highlight,background:e.highlight}:{
background:e.highlight&&e.highlight.background||t.highlight.background,
border:e.highlight&&e.highlight.border||t.highlight.border
},hover:isString(e.hover)?{border:e.hover,
background:e.hover}:{
border:e.hover&&e.hover.border||t.hover.border,
background:e.hover&&e.hover.background||t.hover.background
}}:{background:e.background||void 0,
border:e.border||void 0,
highlight:isString(e.highlight)?{
border:e.highlight,background:e.highlight}:{
background:e.highlight&&e.highlight.background||void 0,
border:e.highlight&&e.highlight.border||void 0},
hover:isString(e.hover)?{border:e.hover,
background:e.hover}:{
border:e.hover&&e.hover.border||void 0,
background:e.hover&&e.hover.background||void 0}}}
function RGBToHSV(e,t,o){
var n=Math.max,i=Math.min,a=i(e/=255,i(t/=255,o/=255)),s=n(e,n(t,o))
;return a===s?{h:0,s:0,v:a}:{
h:60*((e===a?3:o===a?1:5)-(e===a?t-o:o===a?e-t:o-e)/(s-a))/360,
s:(s-a)/s,v:s}}var cssUtil={split:function(e){
var _context17,t={}
;return forEach$2(_context17=e.split(";")).call(_context17,(function(e){
if(""!=trim$4(e).call(e)){
var _context18,_context19,o=e.split(":"),n=trim$4(_context18=o[0]).call(_context18),i=trim$4(_context19=o[1]).call(_context19)
;t[n]=i}})),t},join:function(e){var _context20
;return map$2(_context20=keys$6(e)).call(_context20,(function(t){
return t+": "+e[t]})).join("; ")}}
;function addCssText(e,t){var i=function(e){
for(var o,t=1;t<arguments.length;t++){
var _context2,_context3
;o=null==arguments[t]?{}:arguments[t],t%2?forEach$2(_context2=ownKeys$1(o,!0)).call(_context2,(function(t){
_defineProperty(e,t,o[t])
})):getOwnPropertyDescriptors$2?defineProperties$1(e,getOwnPropertyDescriptors$2(o)):forEach$2(_context3=ownKeys$1(o)).call(_context3,(function(t){
defineProperty$3(e,t,getOwnPropertyDescriptor$3(o,t))
}))}return e
}({},cssUtil.split(e.style.cssText),{},cssUtil.split(t))
;e.style.cssText=cssUtil.join(i)}
function removeCssText(e,t){
var o=cssUtil.split(e.style.cssText),n=cssUtil.split(t)
;for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&delete o[i]
;e.style.cssText=cssUtil.join(o)}
function HSVToRGB(e,o,n){
var t,u,p,a=Math.floor,d=a(6*e),i=6*e-d,s=n*(1-o),l=n*(1-i*o),c=n*(1-(1-i)*o)
;switch(d%6){case 0:t=n,u=c,p=s;break;case 1:
t=l,u=n,p=s;break;case 2:t=s,u=n,p=c;break;case 3:
t=s,u=l,p=n;break;case 4:t=c,u=s,p=n;break;case 5:
t=n,u=s,p=l}return{r:a(255*t),g:a(255*u),
b:a(255*p)}}function HSVToHex(e,t,o){
var n=HSVToRGB(e,t,o);return RGBToHex(n.r,n.g,n.b)
}function hexToHSV(e){var t=hexToRGB(e)
;if(!t)throw new TypeError("'".concat(e,"' is not a valid color."))
;return RGBToHSV(t.r,t.g,t.b)}
function isValidHex(e){
return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
}function isValidRGB(e){return rgbRE.test(e)}
function isValidRGBA(e){return rgbaRE.test(e)}
function selectiveBridgeObject(e,t){
if(null!==t&&"object"===_typeof(t)){
for(var o=create$2(t),n=0;n<e.length;n++)Object.prototype.hasOwnProperty.call(t,e[n])&&"object"==_typeof(t[e[n]])&&(o[e[n]]=bridgeObject(t[e[n]]))
;return o}return null}function bridgeObject(e){
if(null===e||"object"!==_typeof(e))return null
;if(e instanceof Element)return e
;var t=create$2(e)
;for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&"object"==_typeof(e[o])&&(t[o]=bridgeObject(e[o]))
;return t}function insertSort(e,t){
for(var o=0;o<e.length;o++){var n=e[o],a=void 0
;for(a=o;0<a&&0>t(n,e[a-1]);a--)e[a]=e[a-1];e[a]=n
}return e}function mergeOptions(e,t,o){
var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=function(e){
return null!=e},a=function(e){
return null!==e&&"object"===_typeof(e)}
;if(!a(e))throw new Error("Parameter mergeTarget must be an object")
;if(!a(t))throw new Error("Parameter options must be an object")
;if(!i(o))throw new Error("Parameter option must have a value")
;if(!a(n))throw new Error("Parameter globalOptions must be an object")
;var s=t[o],l=a(n)&&!function(e){
for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1
;return!0}(n)?n[o]:void 0,c=l?l.enabled:void 0
;if(void 0!==s){
if("boolean"==typeof s)return a(e[o])||(e[o]={}),void(e[o].enabled=s)
;if(null===s&&!a(e[o])){if(!i(l))return
;e[o]=create$2(l)}if(a(s)){var u=!0
;void 0===s.enabled?void 0!==c&&(u=l.enabled):u=s.enabled,
function(e,t,o){a(e[o])||(e[o]={})
;var n=t[o],i=e[o]
;for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(i[d]=n[d])
}(e,t,o),e[o].enabled=u}}}
function binarySearchCustom(e,t,o,n){
for(var i=0,a=0,d=e.length-1;a<=d&&i<1e4;){
var s=Math.floor((a+d)/2),r=e[s],c=t(void 0===n?r[o]:r[o][n])
;if(0==c)return s;-1==c?a=s+1:d=s-1,i++}return-1}
function binarySearchValue(e,t,o,n,i){
var u,p,h,m,a=Math.max,d=Math.min,s=Math.floor,r=0,l=0,c=e.length-1
;for(i=null==i?function(e,t){
return e==t?0:e<t?-1:1}:i;l<=c&&1e4>r;){
if(u=e[a(0,(m=s(.5*(c+l)))-1)][o],p=e[m][o],
h=e[d(e.length-1,m+1)][o],0==i(p,t))return m
;if(0>i(u,t)&&0<i(p,t))return"before"==n?a(0,m-1):m
;if(0>i(p,t)&&0<i(h,t))return"before"==n?m:d(e.length-1,m+1)
;0>i(p,t)?l=m+1:c=m-1,r++}return-1}
var easingFunctions={linear:function(e){return e},
easeInQuad:function(e){return e*e},
easeOutQuad:function(e){return e*(2-e)},
easeInOutQuad:function(e){
return.5>e?2*e*e:(4-2*e)*e-1},
easeInCubic:function(e){return e*e*e},
easeOutCubic:function(e){return--e*e*e+1},
easeInOutCubic:function(e){
return.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},
easeInQuart:function(e){return e*e*e*e},
easeOutQuart:function(e){return 1- --e*e*e*e},
easeInOutQuart:function(e){
return.5>e?8*e*e*e*e:1-8*--e*e*e*e},
easeInQuint:function(e){return e*e*e*e*e},
easeOutQuint:function(e){return 1+--e*e*e*e*e},
easeInOutQuint:function(e){
return.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e}}
;function getScrollBarWidth(){
var e=document.createElement("p")
;e.style.width="100%",e.style.height="200px"
;var t=document.createElement("div")
;t.style.position="absolute",t.style.top="0px",
t.style.left="0px",t.style.visibility="hidden",
t.style.width="200px",t.style.height="150px",
t.style.overflow="hidden",t.appendChild(e),
document.body.appendChild(t);var o=e.offsetWidth
;t.style.overflow="scroll";var n=e.offsetWidth
;return o==n&&(n=t.clientWidth),document.body.removeChild(t),
o-n}function topMost(e,t){var o
;isArray$3(t)||(t=[t]);var n=!0,a=!1,d=void 0;try{
for(var r,l,s=getIterator$2(e);!(n=(r=s.next()).done);n=!0)if(l=r.value){
o=l[t[0]]
;for(var c=1;c<t.length;c++)o&&(o=o[t[c]])
;if(void 0!==o)break}}catch(e){a=!0,d=e}finally{
try{n||null==s.return||s.return()}finally{
if(a)throw d}}return o}var util=freeze$2({
isNumber:isNumber,
recursiveDOMDelete:recursiveDOMDelete,
isString:isString,isObject:isObject$1,
isDate:isDate,isMoment:isMoment,
fillIfDefined:fillIfDefined,extend:extend,
selectiveExtend:selectiveExtend,
selectiveDeepExtend:selectiveDeepExtend,
selectiveNotDeepExtend:selectiveNotDeepExtend,
deepExtend:deepExtend,equalArray:equalArray,
convert:convert,getType:getType,
copyAndExtendArray:copyAndExtendArray,
copyArray:copyArray,
getAbsoluteLeft:getAbsoluteLeft,
getAbsoluteRight:getAbsoluteRight,
getAbsoluteTop:getAbsoluteTop,
addClassName:addClassName,
removeClassName:removeClassName,forEach:forEach$3,
toArray:toArray,updateProperty:updateProperty,
throttle:throttle,
addEventListener:addEventListener,
removeEventListener:removeEventListener,
preventDefault:preventDefault,getTarget:getTarget,
hasParent:hasParent,option:option,
hexToRGB:hexToRGB,overrideOpacity:overrideOpacity,
RGBToHex:RGBToHex,parseColor:parseColor,
RGBToHSV:RGBToHSV,addCssText:addCssText,
removeCssText:removeCssText,HSVToRGB:HSVToRGB,
HSVToHex:HSVToHex,hexToHSV:hexToHSV,
isValidHex:isValidHex,isValidRGB:isValidRGB,
isValidRGBA:isValidRGBA,
selectiveBridgeObject:selectiveBridgeObject,
bridgeObject:bridgeObject,insertSort:insertSort,
mergeOptions:mergeOptions,
binarySearchCustom:binarySearchCustom,
binarySearchValue:binarySearchValue,
easingFunctions:easingFunctions,
getScrollBarWidth:getScrollBarWidth,
topMost:topMost,randomUUID:uuid4}),esm=freeze$2({
default:util,HSVToHex:HSVToHex,HSVToRGB:HSVToRGB,
RGBToHSV:RGBToHSV,RGBToHex:RGBToHex,
addClassName:addClassName,addCssText:addCssText,
addEventListener:addEventListener,
binarySearchCustom:binarySearchCustom,
binarySearchValue:binarySearchValue,
bridgeObject:bridgeObject,convert:convert,
copyAndExtendArray:copyAndExtendArray,
copyArray:copyArray,deepExtend:deepExtend,
easingFunctions:easingFunctions,
equalArray:equalArray,extend:extend,
fillIfDefined:fillIfDefined,forEach:forEach$3,
getAbsoluteLeft:getAbsoluteLeft,
getAbsoluteRight:getAbsoluteRight,
getAbsoluteTop:getAbsoluteTop,
getScrollBarWidth:getScrollBarWidth,
getTarget:getTarget,getType:getType,
hasParent:hasParent,hexToHSV:hexToHSV,
hexToRGB:hexToRGB,insertSort:insertSort,
isDate:isDate,isMoment:isMoment,isNumber:isNumber,
isObject:isObject$1,isString:isString,
isValidHex:isValidHex,isValidRGB:isValidRGB,
isValidRGBA:isValidRGBA,mergeOptions:mergeOptions,
option:option,overrideOpacity:overrideOpacity,
parseColor:parseColor,
preventDefault:preventDefault,randomUUID:uuid4,
recursiveDOMDelete:recursiveDOMDelete,
removeClassName:removeClassName,
removeCssText:removeCssText,
removeEventListener:removeEventListener,
selectiveBridgeObject:selectiveBridgeObject,
selectiveDeepExtend:selectiveDeepExtend,
selectiveExtend:selectiveExtend,
selectiveNotDeepExtend:selectiveNotDeepExtend,
throttle:throttle,toArray:toArray,topMost:topMost,
updateProperty:updateProperty})
;var defineProperty$1$1=function(e,t,o){
return t in e?defineProperty$3(e,t,{value:o,
enumerable:!0,configurable:!0,writable:!0
}):e[t]=o,e}
;function createCommonjsModule$1$1(e,t){
return e(t={exports:{}},t.exports),t.exports}
var _typeof_1=createCommonjsModule$1$1((function(e){
function t(e){
return(t="function"==typeof symbol$2&&"symbol"==typeof iterator$2?function(e){
return typeof e}:function(e){
return e&&"function"==typeof symbol$2&&e.constructor===symbol$2&&e!==symbol$2.prototype?"symbol":typeof e
})(e)}function o(n){
return e.exports=o="function"==typeof symbol$2&&"symbol"===t(iterator$2)?function(e){
return t(e)}:function(e){
return e&&"function"==typeof symbol$2&&e.constructor===symbol$2&&e!==symbol$2.prototype?"symbol":t(e)
},o(n)}e.exports=o}))
;var classCallCheck=function(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
};function _defineProperties(e,t){
for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,
n.configurable=!0,
"value"in n&&(n.writable=!0),defineProperty$3(e,n.key,n)
}var createClass=function(e,t,o){
return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),
e};var assertThisInitialized=function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
;return e}
;var possibleConstructorReturn=function(e,t){
return!t||"object"!==_typeof_1(t)&&"function"!=typeof t?assertThisInitialized(e):t
},getPrototypeOf$3=createCommonjsModule$1$1((function(e){
function t(n){
return e.exports=t=setPrototypeOf$2?getPrototypeOf$2:function(e){
return e.__proto__||getPrototypeOf$2(e)},t(n)}
e.exports=t
})),setPrototypeOf$1$1=createCommonjsModule$1$1((function(e){
function t(n,o){
return e.exports=t=setPrototypeOf$2||function(e,t){
return e.__proto__=t,e},t(n,o)}e.exports=t}))
;for(var inherits=function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
;e.prototype=create$2(t&&t.prototype,{
constructor:{value:e,writable:!0,configurable:!0}
}),t&&setPrototypeOf$1$1(e,t)
},byteToHex$2=[],i$2=0;256>i$2;i$2++)byteToHex$2[i$2]=(i$2+256).toString(16).substr(1)
;for(var random$1=function(){
if("undefined"!=typeof crypto&&crypto.getRandomValues){
var e=new Uint8Array(16);return function(){
return crypto.getRandomValues(e),e}}
var t=Array(16);return function(){
for(var o,e=0;16>e;e++)0==(3&e)&&(o=4294967296*Math.random()),
t[e]=255&o>>>((3&e)<<3);return t}
}(),byteToHex$1$1=[],i$1$2=0;256>i$1$2;i$1$2++)byteToHex$1$1[i$1$2]=(i$1$2+256).toString(16).substr(1)
;var seedBytes$1=random$1()
;seedBytes$1[0],seedBytes$1[1],seedBytes$1[2],seedBytes$1[3],
seedBytes$1[4],seedBytes$1[5],
seedBytes$1[6],seedBytes$1[7];function uuid4$1(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,o=2<arguments.length?arguments[2]:void 0,n=t&&o||0
;"string"==typeof e&&(t="binary"===e?Array(16):void 0,
e={});var i=e.random||(e.rng||random$1)()
;if(i[6]=64|15&i[6],i[8]=128|63&i[8],t)for(var a=0;16>a;a++)t[n+a]=i[a]
;return t||function(e,t){var o=t||0,n=byteToHex$2
;return n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+"-"+n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]+n[e[o++]]
}(i)}function _typeof$1(e){
return(_typeof$1="function"==typeof symbol$2&&"symbol"==typeof iterator$2?function(e){
return typeof e}:function(e){
return e&&"function"==typeof symbol$2&&e.constructor===symbol$2&&e!==symbol$2.prototype?"symbol":typeof e
})(e)}
"undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self||self:global:window:globalThis
;for(var moment$1=function(e,t){return e(t={
exports:{}},t.exports),t.exports}((function(e){
var t=Math.round,o=Math.pow,n=Math.max,a=Math.abs,d=Math.min,s=Math.floor,r=Math.ceil
;!function(t,o){e.exports=o()}(0,(function(){
function l(){return $t.apply(null,arguments)}
function u(e){
return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)
}function p(e){
return null!=e&&"[object Object]"===Object.prototype.toString.call(e)
}function m(e){return void 0===e}function g(e){
return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)
}function y(e){
return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)
}function f(e,t){var n,o=[]
;for(n=0;n<e.length;++n)o.push(t(e[n],n));return o
}function _(e,t){
return Object.prototype.hasOwnProperty.call(e,t)}
function v(e,t){for(var o in t)_(t,o)&&(e[o]=t[o])
;return _(t,"toString")&&(e.toString=t.toString),
_(t,"valueOf")&&(e.valueOf=t.valueOf),e}
function k(e,t,o,n){return dt(e,t,o,n,!0).utc()}
function x(e){return null==e._pf&&(e._pf={
empty:!1,unusedTokens:[],unusedInput:[],
overflow:-2,charsLeftOver:0,nullInput:!1,
invalidMonth:null,invalidFormat:!1,
userInvalidated:!1,iso:!1,parsedDateParts:[],
meridiem:null,rfc2822:!1,weekdayMismatch:!1
}),e._pf}function S(e){if(null==e._isValid){
var t=x(e),o=Kt.call(t.parsedDateParts,(function(e){
return null!=e
})),n=!isNaN(e._d.getTime())&&0>t.overflow&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&o)
;if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),
null!=isFrozen$2&&isFrozen$2(e))return n
;e._isValid=n}return e._isValid}function O(e){
var t=k(NaN)
;return null==e?x(t).userInvalidated=!0:v(x(t),e),t
}function D(e,t){var o,n,a
;if(m(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),
m(t._i)||(e._i=t._i),
m(t._f)||(e._f=t._f),m(t._l)||(e._l=t._l),m(t._strict)||(e._strict=t._strict),
m(t._tzm)||(e._tzm=t._tzm),
m(t._isUTC)||(e._isUTC=t._isUTC),m(t._offset)||(e._offset=t._offset),
m(t._pf)||(e._pf=x(t)),
m(t._locale)||(e._locale=t._locale),0<Qt.length)for(o=0;o<Qt.length;o++)m(a=t[n=Qt[o]])||(e[n]=a)
;return e}function T(e){
D(this,e),this._d=new Date(null==e._d?NaN:e._d.getTime()),
this.isValid()||(this._d=new Date(NaN)),
!1===Jt&&(Jt=!0,l.updateOffset(this),Jt=!1)}
function E(e){
return e instanceof T||null!=e&&null!=e._isAMomentObject
}function C(e){return 0>e?r(e)||0:s(e)}
function M(e){var t=+e,o=0
;return 0!=t&&isFinite(t)&&(o=C(t)),o}
function I(e,t,o){
var l,n=d(e.length,t.length),s=a(e.length-t.length),r=0
;for(l=0;l<n;l++)(o&&e[l]!==t[l]||!o&&M(e[l])!==M(t[l]))&&r++
;return r+s}function P(e){
!1===l.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)
}function F(e,t){var o=!0;return v((function(){
if(null!=l.deprecationHandler&&l.deprecationHandler(null,e),
o){for(var d,n=[],a=0;a<arguments.length;a++){
if(d="","object"==typeof arguments[a]){
for(var s in d+="\n["+a+"] ",arguments[0])d+=s+": "+arguments[0][s]+", "
;d=slice$4(d).call(d,0,-2)}else d=arguments[a]
;n.push(d)}
P(e+"\nArguments: "+slice$4(Array.prototype).call(n).join("")+"\n"+(new Error).stack),
o=!1}return t.apply(this,arguments)}),t)}
function N(e,t){
null!=l.deprecationHandler&&l.deprecationHandler(e,t),eo[e]||(P(t),
eo[e]=!0)}function Y(e){
return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)
}function z(e,t){var n,o=v({},e)
;for(n in t)_(t,n)&&(p(e[n])&&p(t[n])?(o[n]={},v(o[n],e[n]),
v(o[n],t[n])):null==t[n]?delete o[n]:o[n]=t[n])
;for(n in e)_(e,n)&&!_(t,n)&&p(e[n])&&(o[n]=v({},o[n]))
;return o}function B(e){null!=e&&this.set(e)}
function H(e,t){var o=e.toLowerCase()
;no[o]=no[o+"s"]=no[t]=e}function W(e){
return"string"==typeof e?no[e]||no[e.toLowerCase()]:void 0
}function j(e){var o,n,t={}
;for(n in e)_(e,n)&&((o=W(n))&&(t[o]=e[n]))
;return t}function U(e,t){io[e]=t}
function G(e,t,i){var d=""+a(e)
;return(0<=e?i?"+":"":"-")+o(10,n(0,t-d.length)).toString().substr(1)+d
}function q(e,t,o,n){var i=n
;"string"==typeof n&&(i=function(){
return this[n]()
}),e&&(lo[e]=i),t&&(lo[t[0]]=function(){
return G(i.apply(this,arguments),t[1],t[2])
}),o&&(lo[o]=function(){
return this.localeData().ordinal(i.apply(this,arguments),e)
})}function X(e){
return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")
}function $(e,t){
return e.isValid()?(t=K(t,e.localeData()),ro[t]=ro[t]||function(e){
var o,n,t=e.match(ao)
;for(o=0,n=t.length;o<n;o++)t[o]=lo[t[o]]?lo[t[o]]:X(t[o])
;return function(o){var d,a=""
;for(d=0;d<n;d++)a+=Y(t[d])?t[d].call(o,e):t[d]
;return a}
}(t),ro[t](e)):e.localeData().invalidDate()}
function K(e,t){function o(e){
return t.longDateFormat(e)||e}var n=5
;for(so.lastIndex=0;0<=n&&so.test(e);)e=e.replace(so,o),
so.lastIndex=0,n-=1;return e}function Q(e,t,o){
To[e]=Y(t)?t:function(e){return e&&o?o:t}}
function J(e,t){
return _(To,e)?To[e](t._strict,t._locale):new RegExp(function(e){
return te(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,o,n,i){
return t||o||n||i})))}(e))}function te(e){
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}
function oe(e,t){var n,o=t
;for("string"==typeof e&&(e=[e]),g(t)&&(o=function(e,_o3){
_o3[t]=M(e)}),n=0;n<e.length;n++)Eo[e[n]]=o}
function ne(e,t){oe(e,(function(e,o,n,i){
n._w=n._w||{},t(e,n._w,n,i)}))}function ie(e,t,o){
null!=t&&_(Eo,e)&&Eo[e](t,o._a,o,e)}
function ae(e){return de(e)?366:365}
function de(e){return 0==e%4&&0!=e%100||0==e%400}
function se(e,t){return function(o){
return null==o?re(this,e):(le(this,e,o),l.updateOffset(this,t),
this)}}function re(e,t){
return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN
}function le(e,t,o){
e.isValid()&&!isNaN(o)&&("FullYear"===t&&de(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](o,e.month(),pe(o,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](o))
}function pe(e,t){if(isNaN(e)||isNaN(t))return NaN
;var o=function(e,t){return(e%t+t)%t}(t,12)
;return e+=(t-o)/12,1===o?de(e)?29:28:31-o%7%2}
function he(e,t,o){
var a,d,s,n=e.toLocaleLowerCase()
;if(!this._monthsParse)for(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[],
a=0;12>a;++a)s=k([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(s,"").toLocaleLowerCase(),
this._longMonthsParse[a]=this.months(s,"").toLocaleLowerCase()
;return o?"MMM"===t?-1===(d=Ro.call(this._shortMonthsParse,n))?null:d:-1===(d=Ro.call(this._longMonthsParse,n))?null:d:"MMM"===t?-1!==(d=Ro.call(this._shortMonthsParse,n))?d:-1===(d=Ro.call(this._longMonthsParse,n))?null:d:-1!==(d=Ro.call(this._longMonthsParse,n))?d:-1===(d=Ro.call(this._shortMonthsParse,n))?null:d
}function ge(e,t){var o;if(!e.isValid())return e
;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!g(t=e.localeData().monthsParse(t)))return e
;return o=d(e.date(),pe(e.year(),t)),
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,o),e}
function ye(e){
return null==e?re(this,"Month"):(ge(this,e),l.updateOffset(this,!0),
this)}function fe(){function e(e,t){
return t.length-e.length}var a,d,t=[],o=[],n=[]
;for(a=0;12>a;a++)d=k([2e3,a]),t.push(this.monthsShort(d,"")),
o.push(this.months(d,"")),
n.push(this.months(d,"")),n.push(this.monthsShort(d,""))
;for(sort$2(t).call(t,e),
sort$2(o).call(o,e),sort$2(n).call(n,e),a=0;12>a;a++)t[a]=te(t[a]),
o[a]=te(o[a]);for(a=0;24>a;a++)n[a]=te(n[a])
;this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,
this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")
}function be(e,t,o,n,i,a,d){var s
;return 100>e&&0<=e?(s=new Date(e+400,t,o,n,i,a,d),
isFinite(s.getFullYear())&&s.setFullYear(e)):s=new Date(e,t,o,n,i,a,d),
s}function _e(e){var t;if(100>e&&0<=e){
var o=slice$4(Array.prototype).call(arguments)
;o[0]=e+400,t=new Date(Date.UTC.apply(null,o)),
isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)
}else t=new Date(Date.UTC.apply(null,arguments))
;return t}function ve(e,t,o){var n=7+t-o
;return-((7+_e(e,0,n).getUTCDay()-t)%7)+n-1}
function ke(e,t,o,n,i){
var s,r,d=1+7*(t-1)+(7+o-n)%7+ve(e,n,i)
;return 0>=d?r=ae(s=e-1)+d:d>ae(e)?(s=e+1,
r=d-ae(e)):(s=e,r=d),{year:s,dayOfYear:r}}
function we(e,t,o){
var a,d,n=ve(e.year(),t,o),i=s((e.dayOfYear()-n-1)/7)+1
;return 1>i?a=i+xe(d=e.year()-1,t,o):i>xe(e.year(),t,o)?(a=i-xe(e.year(),t,o),
d=e.year()+1):(d=e.year(),a=i),{week:a,year:d}}
function xe(e,t,o){var n=ve(e,t,o),i=ve(e+1,t,o)
;return(ae(e)-n+i)/7}function De(e,t){
var _context21
;return concat$2(_context21=slice$4(e).call(e,t,7)).call(_context21,slice$4(e).call(e,0,t))
}function Te(e,t,o){
var a,d,s,n=e.toLocaleLowerCase()
;if(!this._weekdaysParse)for(this._weekdaysParse=[],
this._shortWeekdaysParse=[],
this._minWeekdaysParse=[],a=0;7>a;++a)s=k([2e3,1]).day(a),
this._minWeekdaysParse[a]=this.weekdaysMin(s,"").toLocaleLowerCase(),
this._shortWeekdaysParse[a]=this.weekdaysShort(s,"").toLocaleLowerCase(),
this._weekdaysParse[a]=this.weekdays(s,"").toLocaleLowerCase()
;return o?"dddd"===t?-1===(d=Ro.call(this._weekdaysParse,n))?null:d:"ddd"===t?-1===(d=Ro.call(this._shortWeekdaysParse,n))?null:d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:"dddd"===t?-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1!==(d=Ro.call(this._shortWeekdaysParse,n))?d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:"ddd"===t?-1!==(d=Ro.call(this._shortWeekdaysParse,n))?d:-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:-1!==(d=Ro.call(this._minWeekdaysParse,n))?d:-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1===(d=Ro.call(this._shortWeekdaysParse,n))?null:d
}function Ce(){function e(e,t){
return t.length-e.length}
var d,s,r,l,c,t=[],o=[],n=[],a=[]
;for(d=0;7>d;d++)s=k([2e3,1]).day(d),r=this.weekdaysMin(s,""),
l=this.weekdaysShort(s,""),
c=this.weekdays(s,""),t.push(r),o.push(l),n.push(c),a.push(r),
a.push(l),a.push(c)
;for(sort$2(t).call(t,e),sort$2(o).call(o,e),sort$2(n).call(n,e),
sort$2(a).call(a,e),
d=0;7>d;d++)o[d]=te(o[d]),n[d]=te(n[d]),a[d]=te(a[d])
;this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),
this._weekdaysShortRegex=this._weekdaysRegex,
this._weekdaysMinRegex=this._weekdaysRegex,
this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),
this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")
}function Me(){return this.hours()%12||12}
function Ie(e,t){q(e,0,0,(function(){
return this.localeData().meridiem(this.hours(),this.minutes(),t)
}))}function Pe(e,t){return t._meridiemParse}
function Fe(e){
return e?e.toLowerCase().replace("_","-"):e}
function Ye(t){var o=null
;if(!jo[t]&&e&&e.exports)try{
o=Jo._abbr,function(){
throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
}(),Re(o)}catch(t){}return jo[t]}function Re(e,t){
var o
;return e&&((o=m(t)?Be(e):ze(e,t))?Jo=o:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),
Jo._abbr}function ze(e,t){if(null!==t){
var _context22,n,o=Wo
;if(t.abbr=e,null!=jo[e])N("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
o=jo[e]._config;else if(null!=t.parentLocale)if(null!=jo[t.parentLocale])o=jo[t.parentLocale]._config;else{
if(null==(n=Ye(t.parentLocale)))return Uo[t.parentLocale]||(Uo[t.parentLocale]=[]),
Uo[t.parentLocale].push({name:e,config:t}),null
;o=n._config}
return jo[e]=new B(z(o,t)),Uo[e]&&forEach$2(_context22=Uo[e]).call(_context22,(function(e){
ze(e.name,e.config)})),Re(e),jo[e]}
return delete jo[e],null}function Be(e){var t
;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),
!e)return Jo;if(!u(e)){if(t=Ye(e))return t;e=[e]}
return function(e){
for(var o,n,a,d,t=0;t<e.length;){
for(o=(d=Fe(e[t]).split("-")).length,n=(n=Fe(e[t+1]))?n.split("-"):null;0<o;){
if(a=Ye(slice$4(d).call(d,0,o).join("-")))return a
;if(n&&n.length>=o&&I(d,n,!0)>=o-1)break;o--}t++}
return Jo}(e)}function Ae(e){var o,t=e._a
;return t&&-2===x(e).overflow&&(o=0>t[1]||11<t[1]?1:1>t[2]||t[2]>pe(t[0],t[1])?2:0>t[3]||24<t[3]||24===t[3]&&(0!==t[4]||0!==t[5]||0!==t[6])?3:0>t[4]||59<t[4]?4:0>t[5]||59<t[5]?5:0>t[6]||999<t[6]?6:-1,
x(e)._overflowDayOfYear&&(0>o||2<o)&&(o=2),
x(e)._overflowWeeks&&-1===o&&(o=7),x(e)._overflowWeekday&&-1===o&&(o=8),
x(e).overflow=o),e}function He(e,t,o){
return null==e?null==t?o:t:e}function je(e){
var o,n,a,d,s,t=[];if(!e._d){for(a=function(e){
var t=new Date(l.now())
;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]
}(e),
e._w&&null==e._a[2]&&null==e._a[1]&&function(e){
var t,o,n,i,a,d,s,r
;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)a=1,d=4,o=He(t.GG,e._a[0],we(st(),1,4).year),
n=He(t.W,1),(1>(i=He(t.E,1))||7<i)&&(r=!0);else{
a=e._locale._week.dow,d=e._locale._week.doy
;var l=we(st(),a,d)
;o=He(t.gg,e._a[0],l.year),n=He(t.w,l.week),null==t.d?null==t.e?i=a:(i=t.e+a,
(0>t.e||6<t.e)&&(r=!0)):(0>(i=t.d)||6<i)&&(r=!0)}
1>n||n>xe(o,a,d)?x(e)._overflowWeeks=!0:null==r?(s=ke(o,n,i,a,d),
e._a[0]=s.year,
e._dayOfYear=s.dayOfYear):x(e)._overflowWeekday=!0
}(e),null!=e._dayOfYear&&(s=He(e._a[0],a[0]),
(e._dayOfYear>ae(s)||0===e._dayOfYear)&&(x(e)._overflowDayOfYear=!0),
n=_e(s,0,e._dayOfYear),
e._a[1]=n.getUTCMonth(),e._a[2]=n.getUTCDate()),o=0;3>o&&null==e._a[o];++o)e._a[o]=t[o]=a[o]
;for(;7>o;o++)e._a[o]=t[o]=null==e._a[o]?2===o?1:0:e._a[o]
;24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,
e._a[3]=0),
e._d=(e._useUTC?_e:be).apply(null,t),d=e._useUTC?e._d.getUTCDay():e._d.getDay(),
null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
e._nextDay&&(e._a[3]=24),
e._w&&void 0!==e._w.d&&e._w.d!==d&&(x(e).weekdayMismatch=!0)
}}function Ve(e){
var n,a,d,s,r,c,t=e._i,o=Vo.exec(t)||Go.exec(t)
;if(o){
for(x(e).iso=!0,n=0,a=Xo.length;n<a;n++)if(Xo[n][1].exec(o[1])){
s=Xo[n][0],d=!1!==Xo[n][2];break}
if(null==s)return void(e._isValid=!1);if(o[3]){
for(n=0,a=Zo.length;n<a;n++)if(Zo[n][1].exec(o[3])){
r=(o[2]||" ")+Zo[n][0];break}
if(null==r)return void(e._isValid=!1)}
if(!d&&null!=r)return void(e._isValid=!1)
;if(o[4]){
if(!qo.exec(o[4]))return void(e._isValid=!1);c="Z"
}e._f=s+(r||"")+(c||""),Je(e)}else e._isValid=!1}
function qe(e){var t=_parseInt$3(e,10)
;return 49>=t?2e3+t:999>=t?1900+t:t}
function Ke(e){var t=Ko.exec(function(e){
return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}(e._i));if(t){var o=function(e,t,o,n,i,a){
var d=[qe(e),indexOf$3(Bo).call(Bo,t),_parseInt$3(o,10),_parseInt$3(n,10),_parseInt$3(i,10)]
;return a&&d.push(_parseInt$3(a,10)),d
}(t[4],t[3],t[2],t[5],t[6],t[7])
;if(!function(e,t,o){
return!e||indexOf$3(Lo).call(Lo,e)===new Date(t[0],t[1],t[2]).getDay()||(x(o).weekdayMismatch=!0,
o._isValid=!1,!1)}(t[1],o,e))return
;e._a=o,e._tzm=function(e,t,o){if(e)return Qo[e]
;if(t)return 0;var n=_parseInt$3(o,10),i=n%100
;return(n-i)/100*60+i
}(t[8],t[9],t[10]),e._d=_e.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
x(e).rfc2822=!0}else e._isValid=!1}function Je(e){
var _context23
;if(e._f!==l.ISO_8601)if(e._f!==l.RFC_2822){
e._a=[],x(e).empty=!0
;var a,d,s,r,c,t=""+e._i,o=t.length,n=0
;for(s=K(e._f,e._locale).match(ao)||[],a=0;a<s.length;a++)r=s[a],
(d=(t.match(J(r,e))||[])[0])&&(0<(c=t.substr(0,indexOf$3(t).call(t,d))).length&&x(e).unusedInput.push(c),
t=slice$4(t).call(t,indexOf$3(t).call(t,d)+d.length),
n+=d.length),lo[r]?(d?x(e).empty=!1:x(e).unusedTokens.push(r),
ie(r,d,e)):e._strict&&!d&&x(e).unusedTokens.push(r)
;x(e).charsLeftOver=o-n,0<t.length&&x(e).unusedInput.push(t),
12>=e._a[3]&&!0===x(e).bigHour&&0<e._a[3]&&(x(e).bigHour=void 0),
x(e).parsedDateParts=slice$4(_context23=e._a).call(_context23,0),
x(e).meridiem=e._meridiem,e._a[3]=function(e,t,o){
var n
;return null==o?t:null==e.meridiemHour?null==e.isPM?t:((n=e.isPM(o))&&12>t&&(t+=12),
n||12!==t||(t=0),t):e.meridiemHour(t,o)
}(e._locale,e._a[3],e._meridiem),je(e),Ae(e)
}else Ke(e);else Ve(e)}function it(e){
var t=e._i,o=e._f
;return e._locale=e._locale||Be(e._l),null===t||void 0===o&&""===t?O({
nullInput:!0
}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),E(t)?new T(Ae(t)):(y(t)?e._d=t:u(o)?function(e){
var t,o,n,a,d
;if(0===e._f.length)return x(e).invalidFormat=!0,void(e._d=new Date(NaN))
;for(a=0;a<e._f.length;a++)d=0,
t=D({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),
t._f=e._f[a],Je(t),S(t)&&(d+=x(t).charsLeftOver,
d+=10*x(t).unusedTokens.length,x(t).score=d,
(null==n||d<n)&&(n=d,o=t));v(e,o||t)
}(e):o?Je(e):function(e){var t=e._i
;m(t)?e._d=new Date(l.now()):y(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){
var t=$o.exec(e._i)
;null===t?(Ve(e),!1===e._isValid&&(delete e._isValid,Ke(e),!1===e._isValid&&(delete e._isValid,
l.createFromInputFallback(e)))):e._d=new Date(+t[1])
}(e):u(t)?(e._a=f(slice$4(t).call(t,0),(function(e){
return _parseInt$3(e,10)
})),je(e)):p(t)?function(e){if(!e._d){
var t=j(e._i)
;e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],(function(e){
return e&&_parseInt$3(e,10)})),je(e)}
}(e):g(t)?e._d=new Date(t):l.createFromInputFallback(e)
}(e),S(e)||(e._d=null),e))}function dt(e,t,o,n,i){
var a={}
;return(!0===o||!1===o)&&(n=o,o=void 0),(p(e)&&function(e){
if(getOwnPropertyNames$2)return 0===getOwnPropertyNames$2(e).length
;for(var t in e)if(e.hasOwnProperty(t))return!1
;return!0
}(e)||u(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,
a._l=o,a._i=e,a._f=t,a._strict=n,function(e){
var t=new T(Ae(it(e)))
;return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t
}(a)}function st(e,t,o,n){return dt(e,t,o,n,!1)}
function rt(e,t){var o,n
;if(1===t.length&&u(t[0])&&(t=t[0]),!t.length)return st()
;for(o=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](o))&&(o=t[n])
;return o}function ct(e){
var t=j(e),o=t.year||0,n=t.quarter||0,i=t.month||0,a=t.week||t.isoWeek||0,d=t.day||0,s=t.hour||0,r=t.minute||0,l=t.second||0,c=t.millisecond||0
;this._isValid=function(e){
for(var t in e)if(-1===Ro.call(on,t)||null!=e[t]&&isNaN(e[t]))return!1
;for(var o=!1,n=0;n<on.length;++n)if(e[on[n]]){
if(o)return!1
;_parseFloat$3(e[on[n]])!==M(e[on[n]])&&(o=!0)}
return!0
}(t),this._milliseconds=+c+1e3*l+6e4*r+1e3*s*60*60,this._days=+d+7*a,this._months=+i+3*n+12*o,
this._data={},this._locale=Be(),this._bubble()}
function ut(e){return e instanceof ct}
function pt(e){return 0>e?-1*t(-1*e):t(e)}
function ht(e,t){q(e,0,0,(function(){
var e=this.utcOffset(),o="+"
;return 0>e&&(e=-e,o="-"),o+G(~~(e/60),2)+t+G(~~e%60,2)
}))}function mt(e,t){var o=(t||"").match(e)
;if(null===o)return null
;var i=((o[o.length-1]||[])+"").match(nn)||["-",0,0],a=60*i[1]+M(i[2])
;return 0===a?0:"+"===i[0]?a:-a}function gt(e,t){
var o,n
;return t._isUTC?(o=t.clone(),n=(E(e)||y(e)?e.valueOf():st(e).valueOf())-o.valueOf(),
o._d.setTime(o._d.valueOf()+n),
l.updateOffset(o,!1),o):st(e).local()}
function yt(e){
return 15*-t(e._d.getTimezoneOffset()/15)}
function bt(){
return!!this.isValid()&&this._isUTC&&0===this._offset
}function _t(e,t){var i,a,d,o=e,n=null
;return ut(e)?o={ms:e._milliseconds,d:e._days,
M:e._months
}:g(e)?(o={},t?o[t]=e:o.milliseconds=e):(n=an.exec(e))?(i="-"===n[1]?-1:1,
o={y:0,d:M(n[2])*i,h:M(n[3])*i,m:M(n[4])*i,
s:M(n[5])*i,ms:M(pt(1e3*n[6]))*i
}):(n=dn.exec(e))?(i="-"===n[1]?-1:1,o={
y:vt(n[2],i),M:vt(n[3],i),w:vt(n[4],i),
d:vt(n[5],i),h:vt(n[6],i),m:vt(n[7],i),
s:vt(n[8],i)
}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(d=function(e,t){
var o
;return e.isValid()&&t.isValid()?(t=gt(t,e),e.isBefore(t)?o=kt(e,t):((o=kt(t,e)).milliseconds=-o.milliseconds,
o.months=-o.months),o):{milliseconds:0,months:0}
}(st(o.from),st(o.to)),(o={}).ms=d.milliseconds,
o.M=d.months),a=new ct(o),ut(e)&&_(e,"_locale")&&(a._locale=e._locale),
a}function vt(e,t){
var o=e&&_parseFloat$3(e.replace(",","."))
;return(isNaN(o)?0:o)*t}function kt(e,t){var o={}
;return o.months=t.month()-e.month()+12*(t.year()-e.year()),
e.clone().add(o.months,"M").isAfter(t)&&--o.months,
o.milliseconds=+t-+e.clone().add(o.months,"M"),o}
function xt(e,t){return function(o,n){var a
;return null===n||isNaN(+n)||(N(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
a=o,
o=n,n=a),St(this,_t(o="string"==typeof o?+o:o,n),e),this
}}function St(e,t,o,n){
var i=t._milliseconds,a=pt(t._days),d=pt(t._months)
;e.isValid()&&(n=null==n||n,d&&ge(e,re(e,"Month")+d*o),
a&&le(e,"Date",re(e,"Date")+a*o),
i&&e._d.setTime(e._d.valueOf()+i*o),n&&l.updateOffset(e,a||d))
}function Ot(e,t){
var a,o=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(o,"months")
;return 0>t-n?a=(t-n)/(n-e.clone().add(o-1,"months")):a=(t-n)/(e.clone().add(o+1,"months")-n),
-(o+a)||0}function Dt(e){var t
;return void 0===e?this._locale._abbr:(null!=(t=Be(e))&&(this._locale=t),
this)}function Tt(){return this._locale}
function Et(e,t){return(e%t+t)%t}
function Ct(e,t,o){
return 100>e&&0<=e?new Date(e+400,t,o)-126227808e5:new Date(e,t,o).valueOf()
}function Mt(e,t,o){
return 100>e&&0<=e?Date.UTC(e+400,t,o)-126227808e5:Date.UTC(e,t,o)
}function It(e,t){q(0,[e,e.length],0,t)}
function Pt(e,t,o,n,i){var a
;return null==e?we(this,n,i).year:(t>(a=xe(e,n,i))&&(t=a),
Ft.call(this,e,t,o,n,i))}function Ft(e,t,o,n,i){
var a=ke(e,t,o,n,i),d=_e(a.year,0,a.dayOfYear)
;return this.year(d.getUTCFullYear()),
this.month(d.getUTCMonth()),this.date(d.getUTCDate()),
this}function Nt(e,t){t[6]=M(1e3*("0."+e))}
function Yt(e){return e}function Rt(e,t,o,n){
var i=Be(),a=k().set(n,t);return i[o](a,e)}
function zt(e,t,o){
if(g(e)&&(t=e,e=void 0),e=e||"",null!=t)return Rt(e,t,o,"month")
;var a,n=[]
;for(a=0;12>a;a++)n[a]=Rt(e,a,o,"month");return n}
function Bt(e,t,o,n){
"boolean"==typeof e?(g(t)&&(o=t,t=void 0),t=t||""):(o=t=e,e=!1,
g(t)&&(o=t,t=void 0),t=t||"")
;var a=Be(),d=e?a._week.dow:0
;if(null!=o)return Rt(t,(o+d)%7,n,"day")
;var r,s=[]
;for(r=0;7>r;r++)s[r]=Rt(t,(r+d)%7,n,"day")
;return s}function Lt(e,t,o,n){var i=_t(t,o)
;return e._milliseconds+=n*i._milliseconds,
e._days+=n*i._days,e._months+=n*i._months,
e._bubble()}function At(e){return 0>e?s(e):r(e)}
function Ht(e){return 4800*e/146097}
function Wt(e){return 146097*e/4800}
function jt(e){return function(){return this.as(e)
}}function Ut(e){return function(){
return this.isValid()?this._data[e]:NaN}}
function Vt(e,t,o,n,i){
return i.relativeTime(t||1,!!o,e,n)}
function Xt(e){return(0<e)-(0>e)||+e}
function Zt(){
if(!this.isValid())return this.localeData().invalidDate()
;var n,i,e=Rn(this._milliseconds)/1e3,t=Rn(this._days),o=Rn(this._months)
;n=C(e/60),i=C(n/60),e%=60,n%=60
;var d=C(o/12),r=o%=12,l=t,c=i,u=n,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",s=this.asSeconds()
;if(!s)return"P0D"
;var h=0>s?"-":"",m=Xt(this._months)===Xt(s)?"":"-",g=Xt(this._days)===Xt(s)?"":"-",y=Xt(this._milliseconds)===Xt(s)?"":"-"
;return h+"P"+(d?m+d+"Y":"")+(r?m+r+"M":"")+(l?g+l+"D":"")+(c||u||p?"T":"")+(c?y+c+"H":"")+(u?y+u+"M":"")+(p?y+p+"S":"")
}var $t,Kt
;Kt=some$2(Array.prototype)?some$2(Array.prototype):function(e){
for(var o=Object(this),t=o.length>>>0,n=0;n<t;n++)if(n in o&&e.call(this,o[n],n,o))return!0
;return!1}
;var Qt=l.momentProperties=[],Jt=!1,eo={}
;l.suppressDeprecationWarnings=!1,l.deprecationHandler=null
;var to=keys$6||function(e){var o,t=[]
;for(o in e)_(e,o)&&t.push(o);return t
},no={},io={},ao=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,so=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ro={},lo={},co=/\d/,uo=/\d\d/,po=/\d{3}/,ho=/\d{4}/,mo=/[+-]?\d{6}/,go=/\d\d?/,yo=/\d\d\d\d?/,fo=/\d\d\d\d\d\d?/,bo=/\d{1,3}/,_o=/\d{1,4}/,vo=/[+-]?\d{1,6}/,ko=/\d+/,wo=/[+-]?\d+/,xo=/Z|[+-]\d\d:?\d\d/gi,So=/Z|[+-]\d\d(?::?\d\d)?/gi,Do=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,To={},Eo={}
;q("Y",0,0,(function(){var e=this.year()
;return 9999>=e?""+e:"+"+e
})),q(0,["YY",2],0,(function(){
return this.year()%100
})),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),
H("year","y"),
U("year",1),Q("Y",wo),Q("YY",go,uo),Q("YYYY",_o,ho),Q("YYYYY",vo,mo),
Q("YYYYYY",vo,mo),
oe(["YYYYY","YYYYYY"],0),oe("YYYY",(function(e,t){
t[0]=2===e.length?l.parseTwoDigitYear(e):M(e)
})),oe("YY",(function(e,t){
t[0]=l.parseTwoDigitYear(e)
})),oe("Y",(function(e,t){t[0]=_parseInt$3(e,10)
})),l.parseTwoDigitYear=function(e){
return M(e)+(68<M(e)?1900:2e3)}
;var Ro,Yo=se("FullYear",!0)
;Ro=indexOf$3(Array.prototype)?indexOf$3(Array.prototype):function(e){
var t
;for(t=0;t<this.length;++t)if(this[t]===e)return t
;return-1},q("M",["MM",2],"Mo",(function(){
return this.month()+1})),q("MMM",0,0,(function(e){
return this.localeData().monthsShort(this,e)
})),q("MMMM",0,0,(function(e){
return this.localeData().months(this,e)
})),H("month","M"),U("month",8),Q("M",go),
Q("MM",go,uo),Q("MMM",(function(e,t){
return t.monthsShortRegex(e)
})),Q("MMMM",(function(e,t){
return t.monthsRegex(e)
})),oe(["M","MM"],(function(e,t){t[1]=M(e)-1
})),oe(["MMM","MMMM"],(function(e,t,o,n){
var i=o._locale.monthsParse(e,n,o._strict)
;null==i?x(o).invalidMonth=e:t[1]=i}))
;var zo=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Bo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
;q("w",["ww",2],"wo","week"),
q("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),
U("week",5),U("isoWeek",5),
Q("w",go),Q("ww",go,uo),Q("W",go),Q("WW",go,uo),ne(["w","ww","W","WW"],(function(e,t,o,n){
t[n.substr(0,1)]=M(e)
})),q("d",0,"do","day"),q("dd",0,0,(function(e){
return this.localeData().weekdaysMin(this,e)
})),q("ddd",0,0,(function(e){
return this.localeData().weekdaysShort(this,e)
})),q("dddd",0,0,(function(e){
return this.localeData().weekdays(this,e)
})),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),
H("day","d"),H("weekday","e"),H("isoWeekday","E"),
U("day",11),U("weekday",11),U("isoWeekday",11),
Q("d",go),Q("e",go),Q("E",go),Q("dd",(function(e,t){
return t.weekdaysMinRegex(e)
})),Q("ddd",(function(e,t){
return t.weekdaysShortRegex(e)
})),Q("dddd",(function(e,t){
return t.weekdaysRegex(e)
})),ne(["dd","ddd","dddd"],(function(e,t,o,n){
var i=o._locale.weekdaysParse(e,n,o._strict)
;null==i?x(o).invalidWeekday=e:t.d=i
})),ne(["d","e","E"],(function(e,t,o,n){t[n]=M(e)
}))
;var Lo=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
;q("H",["HH",2],0,"hour"),q("h",["hh",2],0,Me),
q("k",["kk",2],0,(function(){
return this.hours()||24
})),q("hmm",0,0,(function(){
return""+Me.apply(this)+G(this.minutes(),2)
})),q("hmmss",0,0,(function(){
return""+Me.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)
})),q("Hmm",0,0,(function(){
return""+this.hours()+G(this.minutes(),2)
})),q("Hmmss",0,0,(function(){
return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)
})),Ie("a",!0),Ie("A",!1),
H("hour","h"),U("hour",13),Q("a",Pe),Q("A",Pe),Q("H",go),
Q("h",go),Q("k",go),Q("HH",go,uo),
Q("hh",go,uo),Q("kk",go,uo),Q("hmm",yo),Q("hmmss",fo),
Q("Hmm",yo),Q("Hmmss",fo),
oe(["H","HH"],3),oe(["k","kk"],(function(e,t){
var o=M(e);t[3]=24===o?0:o
})),oe(["a","A"],(function(e,t,o){
o._isPm=o._locale.isPM(e),o._meridiem=e
})),oe(["h","hh"],(function(e,t,o){
t[3]=M(e),x(o).bigHour=!0
})),oe("hmm",(function(e,t,o){var n=e.length-2
;t[3]=M(e.substr(0,n)),t[4]=M(e.substr(n)),
x(o).bigHour=!0})),oe("hmmss",(function(e,t,o){
var n=e.length-4,i=e.length-2
;t[3]=M(e.substr(0,n)),t[4]=M(e.substr(n,2)),t[5]=M(e.substr(i)),
x(o).bigHour=!0})),oe("Hmm",(function(e,t){
var o=e.length-2
;t[3]=M(e.substr(0,o)),t[4]=M(e.substr(o))
})),oe("Hmmss",(function(e,t){
var o=e.length-4,n=e.length-2
;t[3]=M(e.substr(0,o)),t[4]=M(e.substr(o,2)),t[5]=M(e.substr(n))
}));var Jo,Ho=se("Hours",!0),Wo={calendar:{
sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",
nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",
lastWeek:"[Last] dddd [at] LT",sameElse:"L"},
longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",
L:"MM/DD/YYYY",LL:"MMMM D, YYYY",
LLL:"MMMM D, YYYY h:mm A",
LLLL:"dddd, MMMM D, YYYY h:mm A"},
invalidDate:"Invalid date",ordinal:"%d",
dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{
future:"in %s",past:"%s ago",s:"a few seconds",
ss:"%d seconds",m:"a minute",mm:"%d minutes",
h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",
M:"a month",MM:"%d months",y:"a year",
yy:"%d years"},
months:["January","February","March","April","May","June","July","August","September","October","November","December"],
monthsShort:Bo,week:{dow:0,doy:6},
weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],
weekdaysShort:Lo,meridiemParse:/[ap]\.?m?\.?/i
},jo={},Uo={},Vo=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Go=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qo=/Z|[+-]\d\d(?::?\d\d)?/,Xo=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Zo=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],$o=/^\/?Date\((\-?\d+)/i,Ko=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Qo={
UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,
MDT:-360,MST:-420,PDT:-420,PST:-480}
;l.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){
e._d=new Date(e._i+(e._useUTC?" UTC":""))
})),l.ISO_8601=function(){},l.RFC_2822=function(){}
;var en=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=st.apply(null,arguments)
;return this.isValid()&&e.isValid()?e<this?this:e:O()
})),tn=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=st.apply(null,arguments)
;return this.isValid()&&e.isValid()?e>this?this:e:O()
})),on=["year","quarter","month","week","day","hour","minute","second","millisecond"]
;ht("Z",":"),
ht("ZZ",""),Q("Z",So),Q("ZZ",So),oe(["Z","ZZ"],(function(e,t,o){
o._useUTC=!0,o._tzm=mt(So,e)}))
;var nn=/([\+\-]|\d\d)/gi
;l.updateOffset=function(){}
;var an=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,dn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
;_t.fn=ct.prototype,_t.invalid=function(){
return _t(NaN)}
;var sn=xt(1,"add"),rn=xt(-1,"subtract")
;l.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",
l.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
;var ln=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){
return void 0===e?this.localeData():this.locale(e)
}));q(0,["gg",2],0,(function(){
return this.weekYear()%100
})),q(0,["GG",2],0,(function(){
return this.isoWeekYear()%100
})),It("gggg","weekYear"),It("ggggg","weekYear"),It("GGGG","isoWeekYear"),
It("GGGGG","isoWeekYear"),
H("weekYear","gg"),H("isoWeekYear","GG"),U("weekYear",1),
U("isoWeekYear",1),Q("G",wo),
Q("g",wo),Q("GG",go,uo),Q("gg",go,uo),Q("GGGG",_o,ho),
Q("gggg",_o,ho),Q("GGGGG",vo,mo),
Q("ggggg",vo,mo),ne(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,o,n){
t[n.substr(0,2)]=M(e)
})),ne(["gg","GG"],(function(e,t,o,n){
t[n]=l.parseTwoDigitYear(e)
})),q("Q",0,"Qo","quarter"),H("quarter","Q"),U("quarter",7),
Q("Q",co),oe("Q",(function(e,t){t[1]=3*(M(e)-1)
})),q("D",["DD",2],"Do","date"),H("date","D"),
U("date",9),Q("D",go),Q("DD",go,uo),
Q("Do",(function(e,t){
return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient
})),oe(["D","DD"],2),oe("Do",(function(e,t){
t[2]=M(e.match(go)[0])}));var cn=se("Date",!0)
;q("DDD",["DDDD",3],"DDDo","dayOfYear"),
H("dayOfYear","DDD"),U("dayOfYear",4),Q("DDD",bo),
Q("DDDD",po),oe(["DDD","DDDD"],(function(e,t,o){
o._dayOfYear=M(e)
})),q("m",["mm",2],0,"minute"),H("minute","m"),U("minute",14),Q("m",go),
Q("mm",go,uo),oe(["m","mm"],4)
;var un=se("Minutes",!1)
;q("s",["ss",2],0,"second"),H("second","s"),U("second",15),
Q("s",go),Q("ss",go,uo),oe(["s","ss"],5)
;var hn,pn=se("Seconds",!1)
;for(q("S",0,0,(function(){
return~~(this.millisecond()/100)
})),q(0,["SS",2],0,(function(){
return~~(this.millisecond()/10)
})),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,(function(){
return 10*this.millisecond()
})),q(0,["SSSSS",5],0,(function(){
return 100*this.millisecond()
})),q(0,["SSSSSS",6],0,(function(){
return 1e3*this.millisecond()
})),q(0,["SSSSSSS",7],0,(function(){
return 1e4*this.millisecond()
})),q(0,["SSSSSSSS",8],0,(function(){
return 1e5*this.millisecond()
})),q(0,["SSSSSSSSS",9],0,(function(){
return 1e6*this.millisecond()
})),H("millisecond","ms"),U("millisecond",16),Q("S",bo,co),
Q("SS",bo,uo),Q("SSS",bo,po),
hn="SSSS";9>=hn.length;hn+="S")Q(hn,ko)
;for(hn="S";9>=hn.length;hn+="S")oe(hn,Nt)
;var mn=se("Milliseconds",!1)
;q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName")
;var gn=T.prototype
;gn.add=sn,gn.calendar=function(e,t){
var o=e||st(),n=gt(o,this).startOf("day"),i=l.calendarFormat(this,n)||"sameElse",a=t&&(Y(t[i])?t[i].call(this,o):t[i])
;return this.format(a||this.localeData().calendar(i,this,st(o)))
},gn.clone=function(){return new T(this)
},gn.diff=function(e,t,o){var n,i,a
;return this.isValid()?(n=gt(e,this)).isValid()?(i=6e4*(n.utcOffset()-this.utcOffset()),
a="year"===(t=W(t))?Ot(this,n)/12:"month"===t?Ot(this,n):"quarter"===t?Ot(this,n)/3:"second"===t?(this-n)/1e3:"minute"===t?(this-n)/6e4:"hour"===t?(this-n)/36e5:"day"===t?(this-n-i)/864e5:"week"===t?(this-n-i)/6048e5:this-n,
o?a:C(a)):NaN:NaN},gn.endOf=function(e){var t
;if(void 0===(e=W(e))||"millisecond"===e||!this.isValid())return this
;var o=this._isUTC?Mt:Ct
;return"year"===e?t=o(this.year()+1,0,1)-1:"quarter"===e?t=o(this.year(),this.month()-this.month()%3+3,1)-1:"month"===e?t=o(this.year(),this.month()+1,1)-1:"week"===e?t=o(this.year(),this.month(),this.date()-this.weekday()+7)-1:"isoWeek"===e?t=o(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1:"day"===e||"date"===e?t=o(this.year(),this.month(),this.date()+1)-1:"hour"===e?(t=this._d.valueOf(),
t+=36e5-Et(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1):"minute"===e?(t=this._d.valueOf(),
t+=6e4-Et(t,6e4)-1):"second"===e&&(t=this._d.valueOf(),
t+=1e3-Et(t,1e3)-1),this._d.setTime(t),
l.updateOffset(this,!0),this
},gn.format=function(e){
e||(e=this.isUtc()?l.defaultFormatUtc:l.defaultFormat)
;var t=$(this,e)
;return this.localeData().postformat(t)
},gn.from=function(e,t){
return this.isValid()&&(E(e)&&e.isValid()||st(e).isValid())?_t({
to:this,from:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},gn.fromNow=function(e){return this.from(st(),e)
},gn.to=function(e,t){
return this.isValid()&&(E(e)&&e.isValid()||st(e).isValid())?_t({
from:this,to:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},gn.toNow=function(e){return this.to(st(),e)
},gn.get=function(e){
return Y(this[e=W(e)])?this[e]():this
},gn.invalidAt=function(){return x(this).overflow
},gn.isAfter=function(e,t){var o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()>o.valueOf():o.valueOf()<this.clone().startOf(t).valueOf())
},gn.isBefore=function(e,t){var o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()<o.valueOf():this.clone().endOf(t).valueOf()<o.valueOf())
},gn.isBetween=function(e,t,o,n){
var i=E(e)?e:st(e),a=E(t)?t:st(t)
;return!!(this.isValid()&&i.isValid()&&a.isValid())&&(("("===(n=n||"()")[0]?this.isAfter(i,o):!this.isBefore(i,o))&&(")"===n[1]?this.isBefore(a,o):!this.isAfter(a,o)))
},gn.isSame=function(e,t){var n,o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()===o.valueOf():(n=o.valueOf(),
this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))
},gn.isSameOrAfter=function(e,t){
return this.isSame(e,t)||this.isAfter(e,t)
},gn.isSameOrBefore=function(e,t){
return this.isSame(e,t)||this.isBefore(e,t)
},gn.isValid=function(){return S(this)
},gn.lang=ln,gn.locale=Dt,gn.localeData=Tt,
gn.max=tn,gn.min=en,gn.parsingFlags=function(){
return v({},x(this))},gn.set=function(e,t){
if("object"==typeof e)for(var o=function(e){
var t=[];for(var o in e)t.push({unit:o,
priority:io[o]})
;return sort$2(t).call(t,(function(e,t){
return e.priority-t.priority})),t
}(e=j(e)),n=0;n<o.length;n++)this[o[n].unit](e[o[n].unit]);else if(Y(this[e=W(e)]))return this[e](t)
;return this},gn.startOf=function(e){var t
;if(void 0===(e=W(e))||"millisecond"===e||!this.isValid())return this
;var o=this._isUTC?Mt:Ct
;return"year"===e?t=o(this.year(),0,1):"quarter"===e?t=o(this.year(),this.month()-this.month()%3,1):"month"===e?t=o(this.year(),this.month(),1):"week"===e?t=o(this.year(),this.month(),this.date()-this.weekday()):"isoWeek"===e?t=o(this.year(),this.month(),this.date()-(this.isoWeekday()-1)):"day"===e||"date"===e?t=o(this.year(),this.month(),this.date()):"hour"===e?(t=this._d.valueOf(),
t-=Et(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)):"minute"===e?(t=this._d.valueOf(),
t-=Et(t,6e4)):"second"===e&&(t=this._d.valueOf(),
t-=Et(t,1e3)),this._d.setTime(t),
l.updateOffset(this,!0),this
},gn.subtract=rn,gn.toArray=function(){var e=this
;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]
},gn.toObject=function(){var e=this;return{
years:e.year(),months:e.month(),date:e.date(),
hours:e.hours(),minutes:e.minutes(),
seconds:e.seconds(),milliseconds:e.milliseconds()}
},gn.toDate=function(){
return new Date(this.valueOf())
},gn.toISOString=function(e){
if(!this.isValid())return null
;var t=!0!==e,o=t?this.clone().utc():this
;return 0>o.year()||9999<o.year()?$(o,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Y(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",$(o,"Z")):$(o,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")
},gn.inspect=function(){
if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
;var e="moment",t=""
;this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",
t="Z")
;var o="["+e+'("]',n=0<=this.year()&&9999>=this.year()?"YYYY":"YYYYYY",i=t+'[")]'
;return this.format(o+n+"-MM-DD[T]HH:mm:ss.SSS"+i)
},gn.toJSON=function(){
return this.isValid()?this.toISOString():null
},gn.toString=function(){
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},gn.unix=function(){return s(this.valueOf()/1e3)
},gn.valueOf=function(){
return this._d.valueOf()-6e4*(this._offset||0)
},gn.creationData=function(){return{input:this._i,
format:this._f,locale:this._locale,
isUTC:this._isUTC,strict:this._strict}
},gn.year=Yo,gn.isLeapYear=function(){
return de(this.year())},gn.weekYear=function(e){
return Pt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
},gn.isoWeekYear=function(e){
return Pt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)
},gn.quarter=gn.quarters=function(e){
return null==e?r((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)
},gn.month=ye,gn.daysInMonth=function(){
return pe(this.year(),this.month())
},gn.week=gn.weeks=function(e){
var t=this.localeData().week(this)
;return null==e?t:this.add(7*(e-t),"d")
},gn.isoWeek=gn.isoWeeks=function(e){
var t=we(this,1,4).week
;return null==e?t:this.add(7*(e-t),"d")
},gn.weeksInYear=function(){
var e=this.localeData()._week
;return xe(this.year(),e.dow,e.doy)
},gn.isoWeeksInYear=function(){
return xe(this.year(),1,4)
},gn.date=cn,gn.day=gn.days=function(e){
if(!this.isValid())return null==e?NaN:this
;var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
;return null==e?t:(e=function(e,t){
return"string"==typeof e?isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:_parseInt$3(e,10):e
}(e,this.localeData()),this.add(e-t,"d"))
},gn.weekday=function(e){
if(!this.isValid())return null==e?NaN:this
;var t=(this.day()+7-this.localeData()._week.dow)%7
;return null==e?t:this.add(e-t,"d")
},gn.isoWeekday=function(e){
if(!this.isValid())return null==e?NaN:this
;if(null!=e){var t=function(e,t){
return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e
}(e,this.localeData())
;return this.day(this.day()%7?t:t-7)}
return this.day()||7},gn.dayOfYear=function(e){
var o=t((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
;return null==e?o:this.add(e-o,"d")
},gn.hour=gn.hours=Ho,gn.minute=gn.minutes=un,
gn.second=gn.seconds=pn,gn.millisecond=gn.milliseconds=mn,
gn.utcOffset=function(e,t,o){
var i,n=this._offset||0
;if(!this.isValid())return null==e?NaN:this
;if(null!=e){
if("string"!=typeof e)16>a(e)&&!o&&(e*=60);else if(null===(e=mt(So,e)))return this
;return!this._isUTC&&t&&(i=yt(this)),
this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),
n!==e&&(!t||this._changeInProgress?St(this,_t(e-n,"m"),1,!1):!this._changeInProgress&&(this._changeInProgress=!0,
l.updateOffset(this,!0),
this._changeInProgress=null)),this}
return this._isUTC?n:yt(this)},gn.utc=function(e){
return this.utcOffset(0,e)},gn.local=function(e){
return this._isUTC&&(this.utcOffset(0,e),
this._isUTC=!1,e&&this.subtract(yt(this),"m")),
this},gn.parseZone=function(){
if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){
var e=mt(xo,this._i)
;null==e?this.utcOffset(0,!0):this.utcOffset(e)}
return this},gn.hasAlignedHourOffset=function(e){
return!!this.isValid()&&(e=e?st(e).utcOffset():0,
0==(this.utcOffset()-e)%60)},gn.isDST=function(){
return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
},gn.isLocal=function(){
return!!this.isValid()&&!this._isUTC
},gn.isUtcOffset=function(){
return!!this.isValid()&&this._isUTC
},gn.isUtc=bt,gn.isUTC=bt,gn.zoneAbbr=function(){
return this._isUTC?"UTC":""
},gn.zoneName=function(){
return this._isUTC?"Coordinated Universal Time":""
},gn.dates=F("dates accessor is deprecated. Use date instead.",cn),
gn.months=F("months accessor is deprecated. Use month instead",ye),
gn.years=F("years accessor is deprecated. Use year instead",Yo),
gn.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(e,t){
return null==e?-this.utcOffset():("string"!=typeof e&&(e=-e),
this.utcOffset(e,t),this)
})),gn.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){
if(!m(this._isDSTShifted))return this._isDSTShifted
;var e={};if(D(e,this),(e=it(e))._a){
var t=e._isUTC?k(e._a):st(e._a)
;this._isDSTShifted=this.isValid()&&0<I(e._a,t.toArray())
}else this._isDSTShifted=!1
;return this._isDSTShifted}));var yn=B.prototype
;yn.calendar=function(e,t,o){
var n=this._calendar[e]||this._calendar.sameElse
;return Y(n)?n.call(t,o):n
},yn.longDateFormat=function(e){
var t=this._longDateFormat[e],o=this._longDateFormat[e.toUpperCase()]
;return t||!o?t:(this._longDateFormat[e]=o.replace(/MMMM|MM|DD|dddd/g,(function(e){
return slice$4(e).call(e,1)
})),this._longDateFormat[e])
},yn.invalidDate=function(){
return this._invalidDate},yn.ordinal=function(e){
return this._ordinal.replace("%d",e)
},yn.preparse=Yt,yn.postformat=Yt,yn.relativeTime=function(e,t,o,n){
var i=this._relativeTime[o]
;return Y(i)?i(e,t,o,n):i.replace(/%d/i,e)
},yn.pastFuture=function(e,t){
var o=this._relativeTime[0<e?"future":"past"]
;return Y(o)?o(t):o.replace(/%s/i,t)
},yn.set=function(e){var t,o
;for(o in e)Y(t=e[o])?this[o]=t:this["_"+o]=t
;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)
},yn.months=function(e,t){
return e?u(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||zo).test(t)?"format":"standalone"][e.month()]:u(this._months)?this._months:this._months.standalone
},yn.monthsShort=function(e,t){
return e?u(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[zo.test(t)?"format":"standalone"][e.month()]:u(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
},yn.monthsParse=function(e,t,o){var n,a,d
;if(this._monthsParseExact)return he.call(this,e,t,o)
;for(this._monthsParse||(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[]),
n=0;12>n;n++){
if(a=k([2e3,n]),o&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),
this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),
o||this._monthsParse[n]||(d="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),
this._monthsParse[n]=new RegExp(d.replace(".",""),"i")),
o&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n
;if(o&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n
;if(!o&&this._monthsParse[n].test(e))return n}
},yn.monthsRegex=function(e){
return this._monthsParseExact?(_(this,"_monthsRegex")||fe.call(this),
e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Do),
this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)
},yn.monthsShortRegex=function(e){
return this._monthsParseExact?(_(this,"_monthsRegex")||fe.call(this),
e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Do),
this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)
},yn.week=function(e){
return we(e,this._week.dow,this._week.doy).week
},yn.firstDayOfYear=function(){
return this._week.doy
},yn.firstDayOfWeek=function(){
return this._week.dow},yn.weekdays=function(e,t){
var o=u(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"]
;return!0===e?De(o,this._week.dow):e?o[e.day()]:o
},yn.weekdaysMin=function(e){
return!0===e?De(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin
},yn.weekdaysShort=function(e){
return!0===e?De(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort
},yn.weekdaysParse=function(e,t,o){var n,a,d
;if(this._weekdaysParseExact)return Te.call(this,e,t,o)
;for(this._weekdaysParse||(this._weekdaysParse=[],
this._minWeekdaysParse=[],this._shortWeekdaysParse=[],
this._fullWeekdaysParse=[]),n=0;7>n;n++){
if(a=k([2e3,1]).day(n),o&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),
this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),
this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),
this._weekdaysParse[n]||(d="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),
this._weekdaysParse[n]=new RegExp(d.replace(".",""),"i")),
o&&"dddd"===t&&this._fullWeekdaysParse[n].test(e))return n
;if(o&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n
;if(o&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n
;if(!o&&this._weekdaysParse[n].test(e))return n}
},yn.weekdaysRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=Do),
this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)
},yn.weekdaysShortRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Do),
this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
},yn.weekdaysMinRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Do),
this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
},yn.isPM=function(e){
return"p"===(e+"").toLowerCase().charAt(0)
},yn.meridiem=function(e,t,o){
return 11<e?o?"pm":"PM":o?"am":"AM"},Re("en",{
dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,
ordinal:function(e){var t=e%10
;return e+(1===M(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")
}
}),l.lang=F("moment.lang is deprecated. Use moment.locale instead.",Re),l.langData=F("moment.langData is deprecated. Use moment.localeData instead.",Be)
;var fn=a,bn=jt("ms"),_n=jt("s"),vn=jt("m"),kn=jt("h"),wn=jt("d"),xn=jt("w"),Sn=jt("M"),On=jt("Q"),Dn=jt("y"),Tn=Ut("milliseconds"),En=Ut("seconds"),Cn=Ut("minutes"),Mn=Ut("hours"),In=Ut("days"),Pn=Ut("months"),Fn=Ut("years"),Nn=t,Yn={
ss:44,s:45,m:45,h:22,d:26,M:11
},Rn=a,zn=ct.prototype
;return zn.isValid=function(){return this._isValid
},zn.abs=function(){var e=this._data
;return this._milliseconds=fn(this._milliseconds),
this._days=fn(this._days),this._months=fn(this._months),
e.milliseconds=fn(e.milliseconds),
e.seconds=fn(e.seconds),e.minutes=fn(e.minutes),
e.hours=fn(e.hours),e.months=fn(e.months),
e.years=fn(e.years),this},zn.add=function(e,t){
return Lt(this,e,t,1)},zn.subtract=function(e,t){
return Lt(this,e,t,-1)},zn.as=function(e){
if(!this.isValid())return NaN
;var n,i,o=this._milliseconds
;if("month"===(e=W(e))||"quarter"===e||"year"===e)switch(n=this._days+o/864e5,
i=this._months+Ht(n),e){case"month":return i
;case"quarter":return i/3;case"year":return i/12
}else switch(n=this._days+t(Wt(this._months)),e){
case"week":return n/7+o/6048e5;case"day":
return n+o/864e5;case"hour":return 24*n+o/36e5
;case"minute":return 1440*n+o/6e4;case"second":
return 86400*n+o/1e3;case"millisecond":
return s(864e5*n)+o;default:
throw new Error("Unknown unit "+e)}
},zn.asMilliseconds=bn,zn.asSeconds=_n,zn.asMinutes=vn,
zn.asHours=kn,zn.asDays=wn,
zn.asWeeks=xn,zn.asMonths=Sn,zn.asQuarters=On,zn.asYears=Dn,
zn.valueOf=function(){
return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN
},zn._bubble=function(){
var i,a,d,s,r,e=this._milliseconds,t=this._days,o=this._months,n=this._data
;return 0<=e&&0<=t&&0<=o||0>=e&&0>=t&&0>=o||(e+=864e5*At(Wt(o)+t),
t=0,o=0),n.milliseconds=e%1e3,
i=C(e/1e3),n.seconds=i%60,a=C(i/60),n.minutes=a%60,
d=C(a/60),n.hours=d%24,t+=C(d/24),
o+=r=C(Ht(t)),t-=At(Wt(r)),s=C(o/12),o%=12,n.days=t,
n.months=o,n.years=s,this},zn.clone=function(){
return _t(this)},zn.get=function(e){
return e=W(e),this.isValid()?this[e+"s"]():NaN
},zn.milliseconds=Tn,zn.seconds=En,
zn.minutes=Cn,zn.hours=Mn,zn.days=In,zn.weeks=function(){
return C(this.days()/7)
},zn.months=Pn,zn.years=Fn,zn.humanize=function(e){
if(!this.isValid())return this.localeData().invalidDate()
;var t=this.localeData(),o=function(e,t,o){
var n=_t(e).abs(),i=Nn(n.as("s")),d=Nn(n.as("m")),s=Nn(n.as("h")),r=Nn(n.as("d")),l=Nn(n.as("M")),c=Nn(n.as("y")),u=i<=Yn.ss&&["s",i]||i<Yn.s&&["ss",i]||1>=d&&["m"]||d<Yn.m&&["mm",d]||1>=s&&["h"]||s<Yn.h&&["hh",s]||1>=r&&["d"]||r<Yn.d&&["dd",r]||1>=l&&["M"]||l<Yn.M&&["MM",l]||1>=c&&["y"]||["yy",c]
;return u[2]=t,u[3]=0<+e,u[4]=o,Vt.apply(null,u)
}(this,!e,t)
;return e&&(o=t.pastFuture(+this,o)),t.postformat(o)
},zn.toISOString=Zt,zn.toString=Zt,
zn.toJSON=Zt,zn.locale=Dt,zn.localeData=Tt,zn.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Zt),
zn.lang=ln,
q("X",0,0,"unix"),q("x",0,0,"valueOf"),Q("x",wo),Q("X",/[+-]?\d+(\.\d{1,3})?/),
oe("X",(function(e,t,o){
o._d=new Date(1e3*_parseFloat$3(e,10))
})),oe("x",(function(e,t,o){o._d=new Date(M(e))
})),l.version="2.24.0",function(e){$t=e
}(st),l.fn=gn,l.min=function(){
var e=slice$4([]).call(arguments,0)
;return rt("isBefore",e)},l.max=function(){
var e=slice$4([]).call(arguments,0)
;return rt("isAfter",e)},l.now=function(){
return now$2?now$2():+new Date
},l.utc=k,l.unix=function(e){return st(1e3*e)
},l.months=function(e,t){return zt(e,t,"months")
},l.isDate=y,l.locale=Re,l.invalid=O,
l.duration=_t,l.isMoment=E,l.weekdays=function(e,t,o){
return Bt(e,t,o,"weekdays")
},l.parseZone=function(){
return st.apply(null,arguments).parseZone()
},l.localeData=Be,l.isDuration=ut,l.monthsShort=function(e,t){
return zt(e,t,"monthsShort")
},l.weekdaysMin=function(e,t,o){
return Bt(e,t,o,"weekdaysMin")
},l.defineLocale=ze,l.updateLocale=function(e,t){
if(null!=t){var n,i,o=Wo
;null!=(i=Ye(e))&&(o=i._config),(n=new B(t=z(o,t))).parentLocale=jo[e],
jo[e]=n,Re(e)
}else null!=jo[e]&&(null==jo[e].parentLocale?null!=jo[e]&&delete jo[e]:jo[e]=jo[e].parentLocale)
;return jo[e]},l.locales=function(){return to(jo)
},l.weekdaysShort=function(e,t,o){
return Bt(e,t,o,"weekdaysShort")
},l.normalizeUnits=W,l.relativeTimeRounding=function(e){
return void 0===e?Nn:"function"==typeof e&&(Nn=e,
!0)},l.relativeTimeThreshold=function(e,t){
return void 0!==Yn[e]&&(void 0===t?Yn[e]:(Yn[e]=t,
"s"===e&&(Yn.ss=t-1),!0))
},l.calendarFormat=function(e,t){
var o=e.diff(t,"days",!0)
;return-6>o?"sameElse":-1>o?"lastWeek":0>o?"lastDay":1>o?"sameDay":2>o?"nextDay":7>o?"nextWeek":"sameElse"
},l.prototype=gn,l.HTML5_FMT={
DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",
DATE:"YYYY-MM-DD",TIME:"HH:mm",
TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",
WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},l}))
})),byteToHex$2$1=[],i$2$1=0;256>i$2$1;i$2$1++)byteToHex$2$1[i$2$1]=(i$2$1+256).toString(16).substr(1)
;for(var random$1$1=function(){
if("undefined"!=typeof crypto&&crypto.getRandomValues){
var e=new Uint8Array(16);return function(){
return crypto.getRandomValues(e),e}}
var t=Array(16);return function(){
for(var o,e=0;16>e;e++)0==(3&e)&&(o=4294967296*Math.random()),
t[e]=255&o>>>((3&e)<<3);return t}
}(),byteToHex$1$1$1=[],i$1$1$1=0;256>i$1$1$1;i$1$1$1++)byteToHex$1$1$1[i$1$1$1]=(i$1$1$1+256).toString(16).substr(1)
;var seedBytes$1$1=random$1$1(),ASPDateRegex$1=(seedBytes$1$1[0],
seedBytes$1$1[1],
seedBytes$1$1[2],seedBytes$1$1[3],seedBytes$1$1[4],seedBytes$1$1[5],
seedBytes$1$1[6],
seedBytes$1$1[7],/^\/?Date\((-?\d+)/i)
;function isNumber$1(e){
return e instanceof Number||"number"==typeof e}
function isString$1(e){
return e instanceof String||"string"==typeof e}
function isMoment$1(e){return moment$1.isMoment(e)
}function convert$1(e,t){var o;if(void 0!==e){
if(null===e)return null;if(!t)return e
;if("string"!=typeof t&&!(t instanceof String))throw new Error("Type must be a string")
;switch(t){case"boolean":case"Boolean":return!!e
;case"number":case"Number":
return isString$1(e)&&!isNaN(Date.parse(e))?moment$1(e).valueOf():+e.valueOf()
;case"string":case"String":return e+"";case"Date":
if(isNumber$1(e))return new Date(e)
;if(e instanceof Date)return new Date(e.valueOf())
;if(isMoment$1(e))return new Date(e.valueOf())
;if(isString$1(e))return(o=ASPDateRegex$1.exec(e))?new Date(+o[1]):moment$1(new Date(e)).toDate()
;throw new Error("Cannot convert object of type "+getType$1(e)+" to type Date")
;case"Moment":if(isNumber$1(e))return moment$1(e)
;if(e instanceof Date)return moment$1(e.valueOf())
;if(isMoment$1(e))return moment$1(e)
;if(isString$1(e))return o=ASPDateRegex$1.exec(e),
moment$1(o?+o[1]:e)
;throw new Error("Cannot convert object of type "+getType$1(e)+" to type Date")
;case"ISODate":if(isNumber$1(e))return new Date(e)
;if(e instanceof Date)return e.toISOString()
;if(isMoment$1(e))return e.toDate().toISOString()
;if(isString$1(e))return(o=ASPDateRegex$1.exec(e))?new Date(+o[1]).toISOString():moment$1(e).format()
;throw new Error("Cannot convert object of type "+getType$1(e)+" to type ISODate")
;case"ASPDate":
if(isNumber$1(e))return"/Date("+e+")/"
;if(e instanceof Date)return"/Date("+e.valueOf()+")/"
;if(isString$1(e))return"/Date("+((o=ASPDateRegex$1.exec(e))?new Date(+o[1]).valueOf():new Date(e).valueOf())+")/"
;throw new Error("Cannot convert object of type "+getType$1(e)+" to type ASPDate")
;default:
throw new Error("Unknown type ".concat(t))}}}
function getType$1(e){var t=_typeof$1(e)
;return"object"===t?null===e?"null":e instanceof Boolean?"Boolean":e instanceof Number?"Number":e instanceof String?"String":isArray$3(e)?"Array":e instanceof Date?"Date":"Object":"number"===t?"Number":"boolean"===t?"Boolean":"string"===t?"String":void 0===t?"undefined":t
}function isId(e){
return"string"==typeof e||"number"==typeof e}
var Queue=function(){function e(t){
classCallCheck(this,e),this._queue=[],this._timeout=null,
this._extended=null,this.delay=null,
this.max=1/0,this.setOptions(t)}
return createClass(e,[{key:"setOptions",
value:function(e){
e&&void 0!==e.delay&&(this.delay=e.delay),e&&void 0!==e.max&&(this.max=e.max),
this._flushIfNeeded()}},{key:"destroy",
value:function(){if(this.flush(),this._extended){
for(var n,e=this._extended.object,t=this._extended.methods,o=0;o<t.length;o++)(n=t[o]).original?e[n.name]=n.original:delete e[n.name]
;this._extended=null}}},{key:"replace",
value:function(e,t){var o=this,n=e[t]
;if(!n)throw new Error("Method "+t+" undefined")
;e[t]=function(){
for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i]
;o.queue({args:t,fn:n,context:this})}}},{
key:"queue",value:function(e){
"function"==typeof e?this._queue.push({fn:e
}):this._queue.push(e),this._flushIfNeeded()}},{
key:"_flushIfNeeded",value:function(){var e=this
;this._queue.length>this.max&&this.flush(),
null!=this._timeout&&(clearTimeout(this._timeout),
this._timeout=null),0<this.queue.length&&"number"==typeof this.delay&&(this._timeout=setTimeout$1((function(){
e.flush()}),this.delay))}},{key:"flush",
value:function(){var _context24,_context25
;forEach$2(_context24=splice$2(_context25=this._queue).call(_context25,0)).call(_context24,(function(e){
e.fn.apply(e.context||e.fn,e.args||[])}))}}],[{
key:"extend",value:function(t,o){var n=new e(o)
;if(void 0!==t.flush)throw new Error("Target object already has a property flush")
;t.flush=function(){n.flush()};var a=[{
name:"flush",original:void 0}]
;if(o&&o.replace)for(var s,d=0;d<o.replace.length;d++)s=o.replace[d],
a.push({name:s,original:t[s]}),n.replace(t,s)
;return n._extended={object:t,methods:a},n}}]),e
}();var arrayWithoutHoles=function(e){
if(isArray$3(e)){
for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t]
;return o}};var iterableToArray=function(e){
if(isIterable$2(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return from_1$2(e)
};var nonIterableSpread=function(){
throw new TypeError("Invalid attempt to spread non-iterable instance")
};var toConsumableArray=function(e){
return arrayWithoutHoles(e)||iterableToArray(e)||nonIterableSpread()
},DataSetPart=function(){function e(){
classCallCheck(this,e),this._subscribers={"*":[],
add:[],remove:[],update:[]
},this.subscribe=e.prototype.on,this.unsubscribe=e.prototype.off
}return createClass(e,[{key:"_trigger",
value:function(e,t,o){
if("*"===e)throw new Error("Cannot trigger event *")
;for(var s,n=concat$2(_context26=[]).call(_context26,toConsumableArray(this._subscribers[e]),toConsumableArray(this._subscribers["*"])),a=0,d=n.length;a<d;a++){
var _context26
;(s=n[a]).callback&&s.callback(e,t,null==o?null:o)
}}},{key:"on",value:function(e,t){
this._subscribers[e].push({callback:t})}},{
key:"off",value:function(e,t){var _context27
;this._subscribers[e]=filter$2(_context27=this._subscribers[e]).call(_context27,(function(e){
return e.callback!==t}))}}]),e}()
;function ownKeys$1$1(e,t){var o=keys$6(e)
;return getOwnPropertySymbols$2&&o.push.apply(o,getOwnPropertySymbols$2(e)),
t&&(o=filter$2(o).call(o,(function(t){
return getOwnPropertyDescriptor$3(e,t).enumerable
}))),o}var DataSet=function(e){function t(e,o){
var n
;if(classCallCheck(this,t),n=possibleConstructorReturn(this,getPrototypeOf$3(t).call(this)),
e&&!isArray$3(e)&&(o=e,
e=[]),n._options=o||{},n._data=create$2({}),n.length=0,n._idProp=n._options.fieldId||"id",
n._type={},
n._options.type)for(var a=keys$6(n._options.type),d=0,s=a.length;d<s;d++){
var r=a[d],l=n._options.type[r]
;n._type[r]="Date"==l||"ISODate"==l||"ASPDate"==l?"Date":l
}return e&&e.length&&n.add(e),n.setOptions(o),n}
return inherits(t,e),createClass(t,[{
key:"setOptions",value:function(e){
e&&void 0!==e.queue&&(!1===e.queue?this._queue&&(this._queue.destroy(),
delete this._queue):(!this._queue&&(this._queue=Queue.extend(this,{
replace:["add","update","remove"]
})),e.queue&&"object"===_typeof_1(e.queue)&&this._queue.setOptions(e.queue)))
}},{key:"add",value:function(e,t){var n,o=[]
;if(isArray$3(e))for(var a=0,d=e.length;a<d;a++)n=this._addItem(e[a]),
o.push(n);else{
if(!e||"object"!==_typeof_1(e))throw new Error("Unknown dataType")
;n=this._addItem(e),o.push(n)}
return o.length&&this._trigger("add",{items:o
},t),o}},{key:"update",value:function(e,t){
var o=this,n=[],a=[],d=[],s=[],r=this._idProp,l=function(e){
var t=e[r];if(null!=t&&o._data[t]){
var i=e,l=assign$2({},o._data[t]),c=o._updateItem(i)
;a.push(c),s.push(i),d.push(l)}else{
var u=o._addItem(e);n.push(u)}}
;if(isArray$3(e))for(var c=0,u=e.length;c<u;c++)e[c]&&"object"===_typeof_1(e[c])?l(e[c]):console.warn("Ignoring input item, which is not an object at index "+c);else{
if(!e||"object"!==_typeof_1(e))throw new Error("Unknown dataType")
;l(e)}return n.length&&this._trigger("add",{
items:n},t),a.length&&this._trigger("update",{
items:a,oldData:d,data:s},t),concat$2(n).call(n,a)
}},{key:"get",value:function(e,t){
var o=void 0,n=void 0,a=void 0
;isId(e)?(o=e,a=t):isArray$3(e)?(n=e,a=t):a=e
;var d=a&&"Object"===a.returnType?"Object":"Array",s=a&&a.type||this._options.type,r=a&&filter$2(a),l=[],c=null,u=null,p=null
;if(null!=o)(c=this._getItem(o,s))&&r&&!r(c)&&(c=null);else if(null!=n)for(var h=0,m=n.length;h<m;h++)null!=(c=this._getItem(n[h],s))&&(!r||r(c))&&l.push(c);else for(var g=0,y=(u=keys$6(this._data)).length;g<y;g++)p=u[g],
null!=(c=this._getItem(p,s))&&(!r||r(c))&&l.push(c)
;if(a&&a.order&&null==o&&this._sort(l,a.order),
a&&a.fields){var f=a.fields
;if(null!=o&&null!=c)c=this._filterFields(c,f);else for(var b=0,_=l.length;b<_;b++)l[b]=this._filterFields(l[b],f)
}if("Object"==d){
for(var v={},k=0,w=l.length;k<w;k++){var x=l[k]
;v[x[this._idProp]]=x}return v}return null==o?l:c}
},{key:"getIds",value:function(e){
var r,l,t=this._data,o=e&&filter$2(e),n=e&&e.order,a=e&&e.type||this._options.type,d=keys$6(t),s=[]
;if(o)if(n){l=[]
;for(var p,c=0,u=d.length;c<u;c++)p=d[c],o(r=this._getItem(p,a))&&l.push(r)
;this._sort(l,n)
;for(var h=0,m=l.length;h<m;h++)s.push(l[h][this._idProp])
}else for(var f,g=0,y=d.length;g<y;g++)f=d[g],
o(r=this._getItem(f,a))&&s.push(r[this._idProp]);else if(n){
l=[]
;for(var v,b=0,_=d.length;b<_;b++)v=d[b],l.push(t[v])
;this._sort(l,n)
;for(var k=0,w=l.length;k<w;k++)s.push(l[k][this._idProp])
}else for(var x=0,S=d.length;x<S;x++)r=t[d[x]],
s.push(r[this._idProp]);return s}},{
key:"getDataSet",value:function(){return this}},{
key:"forEach",value:function(e,t){
var o=t&&filter$2(t),n=t&&t.type||this._options.type,a=this._data,d=keys$6(a)
;if(t&&t.order)for(var s=this.get(t),r=0,l=s.length;r<l;r++){
var c=s[r];e(c,c[this._idProp])
}else for(var p=0,h=d.length;p<h;p++){
var m=d[p],g=this._getItem(m,n);(!o||o(g))&&e(g,m)
}}},{key:"map",value:function(e,t){
for(var o=t&&filter$2(t),n=t&&t.type||this._options.type,a=[],d=this._data,s=keys$6(d),r=0,l=s.length;r<l;r++){
var c=s[r],u=this._getItem(c,n)
;(!o||o(u))&&a.push(e(u,c))}
return t&&t.order&&this._sort(a,t.order),a}},{
key:"_filterFields",value:function(e,t){
var _context30
;return e?reduce$2(_context30=isArray$3(t)?t:keys$6(t)).call(_context30,(function(t,o){
return t[o]=e[o],t}),{}):e}},{key:"_sort",
value:function(e,t){if("string"==typeof t){var o=t
;sort$2(e).call(e,(function(e,t){var n=e[o],i=t[o]
;return n>i?1:n<i?-1:0}))}else{
if("function"!=typeof t)throw new TypeError("Order must be a function or a string")
;sort$2(e).call(e,t)}}},{key:"remove",
value:function(e,t){
for(var r,o=[],n=[],a=isArray$3(e)?e:[e],d=0,s=a.length;d<s;d++)if(r=this._remove(a[d])){
var l=r[this._idProp]
;null!=l&&(o.push(l),n.push(r))}
return o.length&&this._trigger("remove",{items:o,
oldData:n},t),o}},{key:"_remove",
value:function(e){var t
;if(isId(e)?t=e:e&&"object"===_typeof_1(e)&&(t=e[this._idProp]),
null!=t&&this._data[t]){var o=this._data[t]
;return delete this._data[t],--this.length,o}
return null}},{key:"clear",value:function(e){
for(var t=keys$6(this._data),o=[],n=0,a=t.length;n<a;n++)o.push(this._data[t[n]])
;return this._data={},
this.length=0,this._trigger("remove",{items:t,
oldData:o},e),t}},{key:"max",value:function(t){
for(var o=this._data,n=keys$6(o),e=null,a=null,d=0,s=n.length;d<s;d++){
var l=o[n[d]],c=l[t]
;null!=c&&(null==a||c>a)&&(e=l,a=c)}return e}},{
key:"min",value:function(t){
for(var o=this._data,n=keys$6(o),e=null,a=null,d=0,s=n.length;d<s;d++){
var l=o[n[d]],c=l[t]
;null!=c&&(null==a||c<a)&&(e=l,a=c)}return e}},{
key:"distinct",value:function(e){
for(var t=this._data,o=keys$6(t),n=[],a=this._options.type&&this._options.type[e]||null,d=0,s=0,r=o.length;s<r;s++){
for(var u=t[o[s]][e],p=!1,h=0;h<d;h++)if(n[h]==u){
p=!0;break}p||void 0===u||(n[d]=u,d++)}
if(a)for(var m=0,g=n.length;m<g;m++)n[m]=convert$1(n[m],a)
;return n}},{key:"_addItem",value:function(e){
var t=e[this._idProp]
;if(null==t)t=uuid4$1(),e[this._idProp]=t;else if(this._data[t])throw new Error("Cannot add item: item with id "+t+" already exists")
;for(var o={},n=keys$6(e),a=0,d=n.length;a<d;a++){
var s=n[a],r=this._type[s];o[s]=convert$1(e[s],r)}
return this._data[t]=o,this.length++,t}},{
key:"_getItem",value:function(e,t){
var o=this._data[e];if(!o)return null
;var a,n=keys$6(o);if(t){a={}
;for(var d=0,s=n.length;d<s;d++){var r=n[d],l=o[r]
;a[r]=convert$1(l,t[r])}}else a=function(e){
for(var o,t=1;t<arguments.length;t++){
var _context28,_context29
;o=null==arguments[t]?{}:arguments[t],t%2?forEach$2(_context28=ownKeys$1$1(o,!0)).call(_context28,(function(t){
defineProperty$1$1(e,t,o[t])
})):getOwnPropertyDescriptors$2?defineProperties$1(e,getOwnPropertyDescriptors$2(o)):forEach$2(_context29=ownKeys$1$1(o)).call(_context29,(function(t){
defineProperty$3(e,t,getOwnPropertyDescriptor$3(o,t))
}))}return e}({},o)
;return null==a[this._idProp]&&(a[this._idProp]=o.id),a
}},{key:"_updateItem",value:function(e){
var t=e[this._idProp]
;if(null==t)throw new Error("Cannot update item: item has no id (item: "+stringify$2(e)+")")
;var o=this._data[t]
;if(!o)throw new Error("Cannot update item: no item with id "+t+" found")
;for(var n=keys$6(e),a=0,d=n.length;a<d;a++){
var s=n[a],r=this._type[s];o[s]=convert$1(e[s],r)}
return t}}]),t}(DataSetPart),DataView=function(e){
function t(e,o){var _context31,n
;return classCallCheck(this,t),(n=possibleConstructorReturn(this,getPrototypeOf$3(t).call(this))).length=0,
n._ids={},
n._options=o||{},n.listener=bind$2(_context31=n._onEvent).call(_context31,assertThisInitialized(n)),
n.setData(e),n}
return inherits(t,e),createClass(t,[{
key:"setData",value:function(e){if(this._data){
this._data.off&&this._data.off("*",this.listener)
;var t=this._data.getIds({
filter:filter$2(this._options)
}),o=this._data.get(t)
;this._ids={},this.length=0,this._trigger("remove",{
items:t,oldData:o})}if(null!=e){this._data=e
;for(var s,n=this._data.getIds({
filter:filter$2(this._options)
}),a=0,d=n.length;a<d;a++)s=n[a],this._ids[s]=!0
;this.length=n.length,this._trigger("add",{items:n
})}else this._data=new DataSet
;this._data.on&&this._data.on("*",this.listener)}
},{key:"refresh",value:function(){
for(var l,e=this._data.getIds({
filter:filter$2(this._options)
}),t=keys$6(this._ids),o={},n=[],a=[],d=[],s=0,r=e.length;s<r;s++)o[l=e[s]]=!0,
this._ids[l]||(n.push(l),this._ids[l]=!0)
;for(var c=0,u=t.length;c<u;c++){
var p=t[c],h=this._data.get(p)
;null==h?console.error("If you see this, report it please."):!o[p]&&(a.push(p),
d.push(h),delete this._ids[p])}
this.length+=n.length-a.length,n.length&&this._trigger("add",{
items:n}),a.length&&this._trigger("remove",{
items:a,oldData:d})}},{key:"get",
value:function(e,t){
if(null==this._data)return null;var n,o=null
;isId(e)||isArray$3(e)?(o=e,n=t):n=e
;var i=assign$2({},this._options,n),a=filter$2(this._options),d=n&&filter$2(n)
;return a&&d&&(i.filter=function(e){
return a(e)&&d(e)
}),null==o?this._data.get(i):this._data.get(o,i)}
},{key:"getIds",value:function(e){
if(this._data.length){
var n,t=filter$2(this._options),o=null==e?null:filter$2(e)
;return n=o?t?function(e){return t(e)&&o(e)
}:o:t,this._data.getIds({filter:n,order:e&&e.order
})}return[]}},{key:"forEach",value:function(e,t){
if(this._data){
var _context32,i,o=filter$2(this._options),n=t&&filter$2(t)
;i=n?o?function(e){return o(e)&&n(e)
}:n:o,forEach$2(_context32=this._data).call(_context32,e,{
filter:i,order:t&&t.order})}}},{key:"map",
value:function(e,t){if(this._data){
var _context33,i,o=filter$2(this._options),n=t&&filter$2(t)
;return i=n?o?function(e){return o(e)&&n(e)
}:n:o,map$2(_context33=this._data).call(_context33,e,{
filter:i,order:t&&t.order})}return[]}},{
key:"getDataSet",value:function(){
return this._data.getDataSet()}},{key:"_onEvent",
value:function(e,t,o){if(t&&t.items&&this._data){
var n=t.items,a=[],d=[],s=[],r=[],l=[],c=[]
;switch(e){case"add":
for(var u=0,p=n.length;u<p;u++){var h=n[u]
;this.get(h)&&(this._ids[h]=!0,a.push(h))}break
;case"update":for(var g=0,y=n.length;g<y;g++){
var f=n[g]
;this.get(f)?this._ids[f]?(d.push(f),l.push(t.data[g]),r.push(t.oldData[g])):(this._ids[f]=!0,
a.push(f)):this._ids[f]&&(delete this._ids[f],
s.push(f),c.push(t.oldData[g]))}break
;case"remove":
for(var k,_=0,v=n.length;_<v;_++)k=n[_],this._ids[k]&&(delete this._ids[k],
s.push(k),c.push(t.oldData[_]))}
this.length+=a.length-s.length,a.length&&this._trigger("add",{
items:a},o),d.length&&this._trigger("update",{
items:d,oldData:r,data:l
},o),s.length&&this._trigger("remove",{items:s,
oldData:c},o)}}}]),t
}(DataSetPart),esm$1=freeze$2({default:{
DataSet:DataSet,DataView:DataView,Queue:Queue},
DataSet:DataSet,DataView:DataView,Queue:Queue})
;"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.circle=function(e,t,o){
this.beginPath(),
this.arc(e,t,o,0,2*Math.PI,!1),this.closePath()
},CanvasRenderingContext2D.prototype.square=function(e,t,o){
this.beginPath(),this.rect(e-o,t-o,2*o,2*o),
this.closePath()
},CanvasRenderingContext2D.prototype.triangle=function(e,t,o){
var n=Math.sqrt;this.beginPath(),t+=.275*(o*=1.15)
;var i=2*o,a=i/2,d=n(3)/6*i,s=n(i*i-a*a)
;this.moveTo(e,t-(s-d)),this.lineTo(e+a,t+d),
this.lineTo(e-a,t+d),this.lineTo(e,t-(s-d)),
this.closePath()
},CanvasRenderingContext2D.prototype.triangleDown=function(e,t,o){
var n=Math.sqrt;this.beginPath(),t-=.275*(o*=1.15)
;var i=2*o,a=i/2,d=n(3)/6*i,s=n(i*i-a*a)
;this.moveTo(e,t+(s-d)),this.lineTo(e+a,t-d),
this.lineTo(e-a,t-d),this.lineTo(e,t+(s-d)),
this.closePath()
},CanvasRenderingContext2D.prototype.star=function(e,t,o){
var i=Math.cos,a=Math.sin,d=Math.PI
;this.beginPath(),t+=.1*(o*=.82)
;for(var l,s=0;10>s;s++)l=0==s%2?1.3*o:.5*o,this.lineTo(e+l*a(2*s*d/10),t-l*i(2*s*d/10))
;this.closePath()
},CanvasRenderingContext2D.prototype.diamond=function(e,t,o){
this.beginPath(),this.lineTo(e,t+o),
this.lineTo(e+o,t),this.lineTo(e,t-o),this.lineTo(e-o,t),
this.closePath()
},CanvasRenderingContext2D.prototype.roundRect=function(e,t,o,n,i){
var a=Math.PI/180
;0>o-2*i&&(i=o/2),0>n-2*i&&(i=n/2),this.beginPath(),this.moveTo(e+i,t),
this.lineTo(e+o-i,t),
this.arc(e+o-i,t+i,i,270*a,360*a,!1),this.lineTo(e+o,t+n-i),
this.arc(e+o-i,t+n-i,i,0,90*a,!1),
this.lineTo(e+i,t+n),this.arc(e+i,t+n-i,i,90*a,180*a,!1),
this.lineTo(e,t+i),this.arc(e+i,t+i,i,180*a,270*a,!1),
this.closePath()
},CanvasRenderingContext2D.prototype.ellipse_vis=function(e,t,o,n){
var i=.5522848,a=o/2*i,d=n/2*i,s=e+o,r=t+n,l=e+o/2,c=t+n/2
;this.beginPath(),this.moveTo(e,c),
this.bezierCurveTo(e,c-d,l-a,t,l,t),this.bezierCurveTo(l+a,t,s,c-d,s,c),
this.bezierCurveTo(s,c+d,l+a,r,l,r),
this.bezierCurveTo(l-a,r,e,c+d,e,c),this.closePath()
},CanvasRenderingContext2D.prototype.database=function(e,t,o,n){
var a=n*(1/3),d=.5522848,s=o/2*d,r=a/2*d,l=e+o,c=t+a,u=e+o/2,p=t+a/2,h=t+(n-a/2),m=t+n
;this.beginPath(),
this.moveTo(l,p),this.bezierCurveTo(l,p+r,u+s,c,u,c),this.bezierCurveTo(u-s,c,e,p+r,e,p),
this.bezierCurveTo(e,p-r,u-s,t,u,t),
this.bezierCurveTo(u+s,t,l,p-r,l,p),this.lineTo(l,h),
this.bezierCurveTo(l,h+r,u+s,m,u,m),
this.bezierCurveTo(u-s,m,e,h+r,e,h),this.lineTo(e,p)
},CanvasRenderingContext2D.prototype.dashedLine=function(e,t,o,n,i){
var a=Math.sqrt;this.beginPath(),this.moveTo(e,t)
;for(var d=i.length,s=o-e,r=n-t,l=r/s,c=a(s*s+r*r),u=0,p=!0,h=0,m=+i[0];.1<=c;)(m=+i[u++%d])>c&&(m=c),
h=a(m*m/(1+l*l)),
e+=h=0>s?-h:h,t+=l*h,!0===p?this.lineTo(e,t):this.moveTo(e,t),c-=m,
p=!p
},CanvasRenderingContext2D.prototype.hexagon=function(e,t,o){
this.beginPath();var n=2*Math.PI/6
;this.moveTo(e+o,t)
;for(var a=1;a<6;a++)this.lineTo(e+o*Math.cos(n*a),t+o*Math.sin(n*a))
;this.closePath()})
;"undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self||self:global:window:globalThis
;function createCommonjsModule$2(e,t){return e(t={
exports:{}},t.exports),t.exports}
var componentEmitter=createCommonjsModule$2((function(e){
function t(e){if(e)return function(e){
for(var o in t.prototype)e[o]=t.prototype[o]
;return e}(e)}
e.exports=t,t.prototype.on=t.prototype.addEventListener=function(e,t){
return this._callbacks=this._callbacks||{},
(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),
this},t.prototype.once=function(e,t){function o(){
this.off(e,o),t.apply(this,arguments)}
return o.fn=t,this.on(e,o),this
},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,t){
if(this._callbacks=this._callbacks||{},
0==arguments.length)return this._callbacks={},this
;var o=this._callbacks["$"+e];if(!o)return this
;if(1==arguments.length)return delete this._callbacks["$"+e],
this
;for(var a,n=0;n<o.length;n++)if((a=o[n])===t||a.fn===t){
splice$2(o).call(o,n,1);break}
return 0===o.length&&delete this._callbacks["$"+e],
this},t.prototype.emit=function(e){
this._callbacks=this._callbacks||{}
;for(var t=Array(arguments.length-1),o=this._callbacks["$"+e],n=1;n<arguments.length;n++)t[n-1]=arguments[n]
;if(o){n=0
;for(var a=(o=slice$4(o).call(o,0)).length;n<a;++n)o[n].apply(this,t)
}return this},t.prototype.listeners=function(e){
return this._callbacks=this._callbacks||{},
this._callbacks["$"+e]||[]
},t.prototype.hasListeners=function(e){
return!!this.listeners(e).length}}))
;function parseDOT(e){return dot=e,function(){
var e={}
;if(index$1=0,c=dot.charAt(0),getToken(),"strict"===token&&(e.strict=!0,
getToken()),
("graph"===token||"digraph"===token)&&(e.type=token,getToken()),tokenType===TOKENTYPE.IDENTIFIER&&(e.id=token,
getToken()),
"{"!=token)throw newSyntaxError("Angle bracket { expected")
;if(getToken(),parseStatements(e),
"}"!=token)throw newSyntaxError("Angle bracket } expected")
;if(getToken(),""!==token)throw newSyntaxError("End of file expected")
;return getToken(),
delete e.node,delete e.edge,delete e.graph,e}()}
var NODE_ATTR_MAPPING={fontsize:"font.size",
fontcolor:"font.color",
labelfontcolor:"font.color",fontname:"font.face",
color:["color.border","color.background"],
fillcolor:"color.background",tooltip:"title",
labeltooltip:"title"
},EDGE_ATTR_MAPPING=create$2(NODE_ATTR_MAPPING)
;EDGE_ATTR_MAPPING.color="color.color",
EDGE_ATTR_MAPPING.style="dashes";var TOKENTYPE={
NULL:0,DELIMITER:1,IDENTIFIER:2,UNKNOWN:3
},DELIMITERS={"{":!0,"}":!0,"[":!0,"]":!0,";":!0,
"=":!0,",":!0,"->":!0,"--":!0
},dot="",index$1=0,c="",token="",tokenType=TOKENTYPE.NULL
;function next(){index$1++,c=dot.charAt(index$1)}
function nextPreview(){
return dot.charAt(index$1+1)}
var regexAlphaNumeric=/[a-zA-Z_0-9.:#]/
;function isAlphaNumeric(e){
return regexAlphaNumeric.test(e)}
function merge(e,t){
if(e||(e={}),t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])
;return e}function setValue(e,t,n){
for(var i=t.split("."),a=e;i.length;){
var d=i.shift()
;i.length?(!a[d]&&(a[d]={}),a=a[d]):a[d]=n}}
function addNode(e,t){
for(var d,s,o=null,n=[e],a=e;a.parent;)n.push(a.parent),a=a.parent
;if(a.nodes)for(d=0,
s=a.nodes.length;d<s;d++)if(t.id===a.nodes[d].id){
o=a.nodes[d];break}for(o||(o={id:t.id
},e.node&&(o.attr=merge(o.attr,e.node))),d=n.length-1;0<=d;d--){
var _context34,r=n[d]
;r.nodes||(r.nodes=[]),-1===indexOf$3(_context34=r.nodes).call(_context34,o)&&r.nodes.push(o)
}t.attr&&(o.attr=merge(o.attr,t.attr))}
function addEdge(e,t){
if(e.edges||(e.edges=[]),e.edges.push(t),e.edge){
var o=merge({},e.edge);t.attr=merge(o,t.attr)}}
function createEdge(e,t,o,n,i){var a={from:t,to:o,
type:n}
;return e.edge&&(a.attr=merge({},e.edge)),a.attr=merge(a.attr||{},i),null!=i&&i.hasOwnProperty("arrows")&&null!=i.arrows&&(a.arrows={
to:{enabled:!0,type:i.arrows.type}
},i.arrows=null),a}function getToken(){
for(tokenType=TOKENTYPE.NULL,token="";" "===c||"\t"===c||"\n"===c||"\r"===c;)next()
;do{var e=!1;if("#"===c){
for(var t=index$1-1;" "===dot.charAt(t)||"\t"===dot.charAt(t);)t--
;if("\n"===dot.charAt(t)||""===dot.charAt(t)){
for(;""!=c&&"\n"!=c;)next();e=!0}}
if("/"===c&&"/"===nextPreview()){
for(;""!=c&&"\n"!=c;)next();e=!0}
if("/"===c&&"*"===nextPreview()){for(;""!=c;){
if("*"===c&&"/"===nextPreview()){next(),next()
;break}next()}e=!0}
for(;" "===c||"\t"===c||"\n"===c||"\r"===c;)next()
}while(e);if(""!==c){var o=c+nextPreview()
;if(DELIMITERS[o])return tokenType=TOKENTYPE.DELIMITER,
token=o,next(),void next()
;if(DELIMITERS[c])return tokenType=TOKENTYPE.DELIMITER,
token=c,void next()
;if(isAlphaNumeric(c)||"-"===c){
for(token+=c,next();isAlphaNumeric(c);)token+=c,
next()
;return"false"===token?token=!1:"true"===token?token=!0:!isNaN(+token)&&(token=+token),
void(tokenType=TOKENTYPE.IDENTIFIER)}if('"'===c){
for(next();""!=c&&('"'!=c||'"'===c&&'"'===nextPreview());)'"'===c?(token+=c,
next()):"\\"===c&&"n"===nextPreview()?(token+="\n",
next()):token+=c,next()
;if('"'!=c)throw newSyntaxError('End of string " expected')
;return next(),void(tokenType=TOKENTYPE.IDENTIFIER)
}
for(tokenType=TOKENTYPE.UNKNOWN;""!=c;)token+=c,next()
;throw new SyntaxError('Syntax error in part "'+chop(token,30)+'"')
}tokenType=TOKENTYPE.DELIMITER}
function parseStatements(e){
for(;""!==token&&"}"!=token;)parseStatement(e),";"===token&&getToken()
}function parseStatement(e){var t=parseSubgraph(e)
;if(t)parseEdge(e,t);else if(!function(e){
return"node"===token?(getToken(),e.node=parseAttributeList(),
"node"):"edge"===token?(getToken(),
e.edge=parseAttributeList(),"edge"):"graph"===token?(getToken(),
e.graph=parseAttributeList(),"graph"):null}(e)){
if(tokenType!=TOKENTYPE.IDENTIFIER)throw newSyntaxError("Identifier expected")
;var n=token;if(getToken(),"="===token){
if(getToken(),tokenType!=TOKENTYPE.IDENTIFIER)throw newSyntaxError("Identifier expected")
;e[n]=token,getToken()}else!function(e,t){var o={
id:t},n=parseAttributeList()
;n&&(o.attr=n),addNode(e,o),parseEdge(e,t)}(e,n)}}
function parseSubgraph(e){var t=null
;if("subgraph"===token&&((t={}).type="subgraph",
getToken(),tokenType===TOKENTYPE.IDENTIFIER&&(t.id=token,
getToken())),"{"===token){
if(getToken(),t||(t={}),t.parent=e,t.node=e.node,t.edge=e.edge,
t.graph=e.graph,parseStatements(t),
"}"!=token)throw newSyntaxError("Angle bracket } expected")
;getToken(),delete t.node,
delete t.edge,delete t.graph,delete t.parent,e.subgraphs||(e.subgraphs=[]),
e.subgraphs.push(t)}return t}
function parseEdge(e,t){
for(;"->"===token||"--"===token;){var n,o=token
;getToken();var i=parseSubgraph(e);if(i)n=i;else{
if(tokenType!=TOKENTYPE.IDENTIFIER)throw newSyntaxError("Identifier or subgraph expected")
;addNode(e,{id:n=token}),getToken()}
addEdge(e,createEdge(e,t,n,o,parseAttributeList())),
t=n}}function parseAttributeList(){
for(var d,e=null,t={dashed:!0,solid:!1,
dotted:[1,5]},o={dot:"circle",box:"box",
crow:"crow",curve:"curve",icurve:"inv_curve",
normal:"triangle",inv:"inv_triangle",
diamond:"diamond",tee:"bar",vee:"vee"
},n=[],a=[];"["===token;){
for(getToken(),e={};""!==token&&"]"!=token;){
if(tokenType!=TOKENTYPE.IDENTIFIER)throw newSyntaxError("Attribute name expected")
;var s=token
;if(getToken(),"="!=token)throw newSyntaxError("Equal sign = expected")
;if(getToken(),
tokenType!=TOKENTYPE.IDENTIFIER)throw newSyntaxError("Attribute value expected")
;var r=token
;"style"===s&&(r=t[r]),"arrowhead"===s&&(s="arrows",r={
to:{enabled:!0,type:o[r]}
}),"arrowtail"===s&&(s="arrows",r={from:{
enabled:!0,type:o[r]}}),n.push({attr:e,name:s,
value:r
}),a.push(s),getToken(),","==token&&getToken()}
if("]"!=token)throw newSyntaxError("Bracket ] expected")
;getToken()}if(includes$4(a).call(a,"dir")){
var c={arrows:{}}
;for(d=0;d<n.length;d++)if("arrows"!==n[d].name)"dir"===n[d].name&&(c.dir=d);else if(null!=n[d].value.to)c.arrows.to=d;else{
if(null==n[d].value.from)throw newSyntaxError("Invalid value of arrows")
;c.arrows.from=d}var p,h,u=n[c.dir].value
;if(!includes$4(a).call(a,"arrows"))if("both"===u)n.push({
attr:n[c.dir].attr,name:"arrows",value:{to:{
enabled:!0}}}),c.arrows.to=n.length-1,n.push({
attr:n[c.dir].attr,name:"arrows",value:{from:{
enabled:!0}}
}),c.arrows.from=n.length-1;else if("forward"===u)n.push({
attr:n[c.dir].attr,name:"arrows",value:{to:{
enabled:!0}}
}),c.arrows.to=n.length-1;else if("back"===u)n.push({
attr:n[c.dir].attr,name:"arrows",value:{from:{
enabled:!0}}}),c.arrows.from=n.length-1;else{
if("none"!==u)throw newSyntaxError('Invalid dir type "'+u+'"')
;n.push({attr:n[c.dir].attr,name:"arrows",value:""
}),c.arrows.to=n.length-1}
if("both"===u)c.arrows.to&&c.arrows.from?(h=n[c.arrows.to].value.to.type,
p=n[c.arrows.from].value.from.type,
n[c.arrows.to]={attr:n[c.arrows.to].attr,
name:n[c.arrows.to].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
},splice$2(n).call(n,c.arrows.from,1)):c.arrows.to?(h=n[c.arrows.to].value.to.type,
p="arrow",n[c.arrows.to]={
attr:n[c.arrows.to].attr,name:n[c.arrows.to].name,
value:{to:{enabled:!0,type:h},from:{enabled:!0,
type:p}}
}):c.arrows.from&&(h="arrow",p=n[c.arrows.from].value.from.type,n[c.arrows.from]={
attr:n[c.arrows.from].attr,
name:n[c.arrows.from].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
});else if("back"===u)c.arrows.to&&c.arrows.from?(h="",
p=n[c.arrows.from].value.from.type,
n[c.arrows.from]={attr:n[c.arrows.from].attr,
name:n[c.arrows.from].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
}):c.arrows.to?(h="",p="arrow",c.arrows.from=c.arrows.to,
n[c.arrows.from]={attr:n[c.arrows.from].attr,
name:n[c.arrows.from].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
}):c.arrows.from&&(h="",p=n[c.arrows.from].value.from.type,
n[c.arrows.to]={attr:n[c.arrows.from].attr,
name:n[c.arrows.from].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
}),n[c.arrows.from]={attr:n[c.arrows.from].attr,
name:n[c.arrows.from].name,value:{from:{
enabled:!0,type:n[c.arrows.from].value.from.type}}
};else if("none"===u){var m
;n[m=c.arrows.to?c.arrows.to:c.arrows.from]={
attr:n[m].attr,name:n[m].name,value:""}}else{
if("forward"!==u)throw newSyntaxError('Invalid dir type "'+u+'"')
;c.arrows.to&&c.arrows.from?(h=n[c.arrows.to].value.to.type,
p="",n[c.arrows.to]={attr:n[c.arrows.to].attr,
name:n[c.arrows.to].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
}):c.arrows.to?(h=n[c.arrows.to].value.to.type,
p="",n[c.arrows.to]={attr:n[c.arrows.to].attr,
name:n[c.arrows.to].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
}):c.arrows.from&&(h="arrow",p="",c.arrows.to=c.arrows.from,
n[c.arrows.to]={attr:n[c.arrows.to].attr,
name:n[c.arrows.to].name,value:{to:{enabled:!0,
type:h},from:{enabled:!0,type:p}}
}),n[c.arrows.to]={attr:n[c.arrows.to].attr,
name:n[c.arrows.to].name,value:{to:{enabled:!0,
type:n[c.arrows.to].value.to.type}}}}
splice$2(n).call(n,c.dir,1)}var g
;if(includes$4(a).call(a,"penwidth")){var y=[]
;for(g=n.length,d=0;d<g;d++)"width"!==n[d].name&&("penwidth"===n[d].name&&(n[d].name="width"),
y.push(n[d]));n=y}
for(g=n.length,d=0;d<g;d++)setValue(n[d].attr,n[d].name,n[d].value)
;return e}function newSyntaxError(e){
return new SyntaxError(e+', got "'+chop(token,30)+'" (char '+index$1+")")
}function chop(e,t){
return e.length<=t?e:e.substr(0,27)+"..."}
function setProp(e,t,o){
for(var r,n=t.split("."),a=n.pop(),d=e,s=0;s<n.length;s++)(r=n[s])in d||(d[r]={}),
d=d[r];return d[a]=o,e}function convertAttr(e,t){
var o={};for(var n in e)if(e.hasOwnProperty(n)){
var i=t[n]
;isArray$3(i)?forEach$2(i).call(i,(function(t){
setProp(o,t,e[n])
})):setProp(o,"string"==typeof i?i:n,e[n])}
return o}var DOTToGraph_1=function(e){
var _context35,t=parseDOT(e),o={nodes:[],edges:[],
options:{}}
;if(t.nodes&&forEach$2(_context35=t.nodes).call(_context35,(function(e){
var t={id:e.id,label:(e.label||e.id)+""}
;merge(t,convertAttr(e.attr,NODE_ATTR_MAPPING)),
t.image&&(t.shape="image"),o.nodes.push(t)
})),t.edges){var _context36,n=function(e){var t={
from:e.from,to:e.to}
;return merge(t,convertAttr(e.attr,EDGE_ATTR_MAPPING)),null==t.arrows&&"->"===e.type&&(t.arrows="to"),
t}
;forEach$2(_context36=t.edges).call(_context36,(function(e){
var _context37,_context38,t,i
;t=e.from instanceof Object?e.from.nodes:{
id:e.from},i=e.to instanceof Object?e.to.nodes:{
id:e.to
},e.from instanceof Object&&e.from.edges&&forEach$2(_context37=e.from.edges).call(_context37,(function(e){
var t=n(e);o.edges.push(t)})),function(e,t,o){
isArray$3(e)?forEach$2(e).call(e,(function(e){
isArray$3(t)?forEach$2(t).call(t,(function(t){
o(e,t)})):o(e,t)
})):isArray$3(t)?forEach$2(t).call(t,(function(t){
o(e,t)})):o(e,t)}(t,i,(function(t,i){
var a=createEdge(o,t.id,i.id,e.type,e.attr),d=n(a)
;o.edges.push(d)
})),e.to instanceof Object&&e.to.edges&&forEach$2(_context38=e.to.edges).call(_context38,(function(e){
var t=n(e);o.edges.push(t)}))}))}
return t.attr&&(o.options=t.attr),o},dotparser={
parseDOT:parseDOT,DOTToGraph:DOTToGraph_1
},dotparser$1=freeze$2({default:dotparser,
__moduleExports:dotparser,parseDOT:parseDOT,
DOTToGraph:DOTToGraph_1})
;function parseGephi(e,t){var _context39,o={
edges:{inheritColor:!1},nodes:{fixed:!1,
parseColor:!1}}
;null!=t&&(null!=t.fixed&&(o.nodes.fixed=t.fixed),null!=t.parseColor&&(o.nodes.parseColor=t.parseColor),
null!=t.inheritColor&&(o.edges.inheritColor=t.inheritColor))
;var n=e.edges,i=map$2(n).call(n,(function(e){
var t={from:e.source,id:e.id,to:e.target}
;return null!=e.attributes&&(t.attributes=e.attributes),
null!=e.label&&(t.label=e.label),
null!=e.attributes&&null!=e.attributes.title&&(t.title=e.attributes.title),
"Directed"===e.type&&(t.arrows="to"),
e.color&&!1===o.edges.inheritColor&&(t.color=e.color),
t}));return{
nodes:map$2(_context39=e.nodes).call(_context39,(function(e){
var t={id:e.id,
fixed:o.nodes.fixed&&null!=e.x&&null!=e.y}
;return null!=e.attributes&&(t.attributes=e.attributes),
null!=e.label&&(t.label=e.label),
null!=e.size&&(t.size=e.size),null!=e.attributes&&null!=e.attributes.title&&(t.title=e.attributes.title),
null!=e.title&&(t.title=e.title),
null!=e.x&&(t.x=e.x),null!=e.y&&(t.y=e.y),null!=e.color&&(!0===o.nodes.parseColor?t.color=e.color:t.color={
background:e.color,border:e.color,highlight:{
background:e.color,border:e.color},hover:{
background:e.color,border:e.color}}),t})),edges:i}
}var gephiParser=freeze$2({parseGephi:parseGephi
}),Activator=freeze$2({}),keycharm=createCommonjsModule$2((function(e){
e.exports=function(e){
var r,t=String.fromCharCode,o=e&&e.preventDefault||!1,n=e&&e.container||window,a={},d={
keydown:{},keyup:{}},s={}
;for(r=97;122>=r;r++)s[t(r)]={code:r-97+65,
shift:!1};for(r=65;90>=r;r++)s[t(r)]={code:r,
shift:!0};for(r=0;9>=r;r++)s[""+r]={code:48+r,
shift:!1};for(r=1;12>=r;r++)s["F"+r]={code:111+r,
shift:!1};for(r=0;9>=r;r++)s["num"+r]={code:96+r,
shift:!1};s["num*"]={code:106,shift:!1
},s["num+"]={code:107,shift:!1},s["num-"]={
code:109,shift:!1},s["num/"]={code:111,shift:!1
},s["num."]={code:110,shift:!1},s.left={code:37,
shift:!1},s.up={code:38,shift:!1},s.right={
code:39,shift:!1},s.down={code:40,shift:!1
},s.space={code:32,shift:!1},s.enter={code:13,
shift:!1},s.shift={code:16,shift:void 0},s.esc={
code:27,shift:!1},s.backspace={code:8,shift:!1
},s.tab={code:9,shift:!1},s.ctrl={code:17,shift:!1
},s.alt={code:18,shift:!1},s.delete={code:46,
shift:!1},s.pageup={code:33,shift:!1},s.pagedown={
code:34,shift:!1},s["="]={code:187,shift:!1
},s["-"]={code:189,shift:!1},s["]"]={code:221,
shift:!1},s["["]={code:219,shift:!1}
;var l=function(e){u(e,"keydown")},c=function(e){
u(e,"keyup")},u=function(e,t){
if(void 0!==d[t][e.keyCode]){
for(var n=d[t][e.keyCode],a=0;a<n.length;a++)void 0===n[a].shift?n[a].fn(e):1==n[a].shift&&1==e.shiftKey?n[a].fn(e):0==n[a].shift&&0==e.shiftKey&&n[a].fn(e)
;1==o&&e.preventDefault()}}
;return a.bind=function(e,t,o){
if(void 0===o&&(o="keydown"),void 0===s[e])throw new Error("unsupported key: "+e)
;void 0===d[o][s[e].code]&&(d[o][s[e].code]=[]),
d[o][s[e].code].push({fn:t,shift:s[e].shift})
},a.bindAll=function(e,t){
for(var o in void 0===t&&(t="keydown"),s)s.hasOwnProperty(o)&&bind$2(a).call(a,o,e,t)
},a.getKey=function(e){
for(var t in s)if(s.hasOwnProperty(t)){
if(1==e.shiftKey&&1==s[t].shift&&e.keyCode==s[t].code)return t
;if(0==e.shiftKey&&0==s[t].shift&&e.keyCode==s[t].code)return t
;if(e.keyCode==s[t].code&&"shift"==t)return t}
return"unknown key, currently not supported"
},a.unbind=function(e,t,o){
if(void 0===o&&(o="keydown"),void 0===s[e])throw new Error("unsupported key: "+e)
;if(void 0!==t){var n=[],a=d[o][s[e].code]
;if(void 0!==a)for(var r=0;r<a.length;r++)(a[r].fn!=t||a[r].shift!=s[e].shift)&&n.push(d[o][s[e].code][r])
;d[o][s[e].code]=n}else d[o][s[e].code]=[]
},a.reset=function(){d={keydown:{},keyup:{}}
},a.destroy=function(){d={keydown:{},keyup:{}
},n.removeEventListener("keydown",l,!0),
n.removeEventListener("keyup",c,!0)
},n.addEventListener("keydown",l,!0),n.addEventListener("keyup",c,!0),
a}})),keycharm$1=freeze$2({default:keycharm,
__moduleExports:keycharm});function _extends(){
return(_extends=assign$2||function(e){
for(var o,t=1;t<arguments.length;t++)for(var n in o=arguments[t])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])
;return e}).apply(this,arguments)}
function _inheritsLoose(e,t){
e.prototype=create$2(t.prototype),e.prototype.constructor=e,
e.__proto__=t}
function _assertThisInitialized$1(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
;return e}
var assign$1$1="function"==typeof assign$2?assign$2:function(e){
if(null==e)throw new TypeError("Cannot convert undefined or null to object")
;for(var n,t=Object(e),o=1;o<arguments.length;o++)if(null!=(n=arguments[o]))for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])
;return t
},VENDOR_PREFIXES=["","webkit","Moz","MS","ms","o"],TEST_ELEMENT="undefined"==typeof document?{
style:{}
}:document.createElement("div"),TYPE_FUNCTION="function",round=Math.round,abs$1=Math.abs,now$3=now$2
;function prefixed(e,t){
for(var a,d,o=t[0].toUpperCase()+slice$4(t).call(t,1),n=0;n<VENDOR_PREFIXES.length;){
if((d=(a=VENDOR_PREFIXES[n])?a+o:t)in e)return d
;n++}}
var win="undefined"==typeof window?{}:window,PREFIXED_TOUCH_ACTION=prefixed(TEST_ELEMENT.style,"touchAction"),NATIVE_TOUCH_ACTION=void 0!==PREFIXED_TOUCH_ACTION
;var TOUCH_ACTION_AUTO="auto",TOUCH_ACTION_MANIPULATION="manipulation",TOUCH_ACTION_NONE="none",TOUCH_ACTION_PAN_X="pan-x",TOUCH_ACTION_PAN_Y="pan-y",TOUCH_ACTION_MAP=function(){
var _context40;if(!NATIVE_TOUCH_ACTION)return!1
;var e={},t=win.CSS&&win.CSS.supports
;return forEach$2(_context40=["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"]).call(_context40,(function(o){
return e[o]=!t||win.CSS.supports("touch-action",o)
})),e
}(),SUPPORT_TOUCH="ontouchstart"in win,SUPPORT_POINTER_EVENTS=void 0!==prefixed(win,"PointerEvent"),SUPPORT_ONLY_TOUCH=SUPPORT_TOUCH&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),INPUT_TYPE_TOUCH="touch",INPUT_TYPE_MOUSE="mouse",COMPUTE_INTERVAL=25,INPUT_START=1,INPUT_MOVE=2,INPUT_END=4,INPUT_CANCEL=8,DIRECTION_NONE=1,DIRECTION_LEFT=2,DIRECTION_RIGHT=4,DIRECTION_UP=8,DIRECTION_DOWN=16,DIRECTION_HORIZONTAL=DIRECTION_LEFT|DIRECTION_RIGHT,DIRECTION_VERTICAL=DIRECTION_UP|DIRECTION_DOWN,DIRECTION_ALL=DIRECTION_HORIZONTAL|DIRECTION_VERTICAL,PROPS_XY=["x","y"],PROPS_CLIENT_XY=["clientX","clientY"]
;function each(e,t,o){
if(e)if(forEach$2(e))forEach$2(e).call(e,t,o);else if(void 0!==e.length)for(n=0;n<e.length;)t.call(o,e[n],n,e),
n++;else for(var n in e)e.hasOwnProperty(n)&&t.call(o,e[n],n,e)
}function boolOrFn(e,t){
return typeof e===TYPE_FUNCTION?e.apply(t&&t[0]||void 0,t):e
}function inStr(e,t){
return-1<indexOf$3(e).call(e,t)}
var TouchAction=function(){function e(e,t){
this.manager=e,this.set(t)}var t=e.prototype
;return t.set=function(e){var _context41
;"compute"===e&&(e=this.compute()),NATIVE_TOUCH_ACTION&&this.manager.element.style&&TOUCH_ACTION_MAP[e]&&(this.manager.element.style[PREFIXED_TOUCH_ACTION]=e),
this.actions=trim$4(_context41=e.toLowerCase()).call(_context41)
},t.update=function(){
this.set(this.manager.options.touchAction)
},t.compute=function(){var e=[]
;return each(this.manager.recognizers,(function(t){
boolOrFn(t.options.enable,[t])&&(e=concat$2(e).call(e,t.getTouchAction()))
})),function(e){
if(inStr(e,TOUCH_ACTION_NONE))return TOUCH_ACTION_NONE
;var t=inStr(e,TOUCH_ACTION_PAN_X),o=inStr(e,TOUCH_ACTION_PAN_Y)
;return t&&o?TOUCH_ACTION_NONE:t||o?t?TOUCH_ACTION_PAN_X:TOUCH_ACTION_PAN_Y:inStr(e,TOUCH_ACTION_MANIPULATION)?TOUCH_ACTION_MANIPULATION:TOUCH_ACTION_AUTO
}(e.join(" "))},t.preventDefaults=function(e){
var t=e.srcEvent,o=e.offsetDirection
;if(!this.manager.session.prevented){
var n=this.actions,i=inStr(n,TOUCH_ACTION_NONE)&&!TOUCH_ACTION_MAP[TOUCH_ACTION_NONE],a=inStr(n,TOUCH_ACTION_PAN_Y)&&!TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y],d=inStr(n,TOUCH_ACTION_PAN_X)&&!TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X]
;if(i){
var s=1===e.pointers.length,r=2>e.distance,l=250>e.deltaTime
;if(s&&r&&l)return}
return d&&a?void 0:i||a&&o&DIRECTION_HORIZONTAL||d&&o&DIRECTION_VERTICAL?this.preventSrc(t):void 0
}t.preventDefault()},t.preventSrc=function(e){
this.manager.session.prevented=!0,
e.preventDefault()},e}()
;function hasParent$1(e,t){for(;e;){
if(e===t)return!0;e=e.parentNode}return!1}
function getCenter(e){var t=e.length
;if(1===t)return{x:round(e[0].clientX),
y:round(e[0].clientY)}
;for(var o=0,n=0,a=0;a<t;)o+=e[a].clientX,n+=e[a].clientY,
a++;return{x:round(o/t),y:round(n/t)}}
function simpleCloneInputData(e){
for(var t=[],o=0;o<e.pointers.length;)t[o]={
clientX:round(e.pointers[o].clientX),
clientY:round(e.pointers[o].clientY)},o++;return{
timeStamp:now$3(),pointers:t,center:getCenter(t),
deltaX:e.deltaX,deltaY:e.deltaY}}
function getDistance(e,t,o){o||(o=PROPS_XY)
;var n=t[o[0]]-e[o[0]],i=t[o[1]]-e[o[1]]
;return Math.sqrt(n*n+i*i)}
function getAngle(e,t,o){o||(o=PROPS_XY)
;var n=t[o[0]]-e[o[0]],i=t[o[1]]-e[o[1]]
;return 180*Math.atan2(i,n)/Math.PI}
function getDirection(e,t){
return e===t?DIRECTION_NONE:abs$1(e)>=abs$1(t)?0>e?DIRECTION_LEFT:DIRECTION_RIGHT:0>t?DIRECTION_UP:DIRECTION_DOWN
}function getVelocity(e,t,o){return{x:t/e||0,
y:o/e||0}}function computeInputData(e,t){
var o=e.session,n=t.pointers,i=n.length
;o.firstInput||(o.firstInput=simpleCloneInputData(t)),
1<i&&!o.firstMultiple?o.firstMultiple=simpleCloneInputData(t):1===i&&(o.firstMultiple=!1)
;var a=o.firstInput,d=o.firstMultiple,s=d?d.center:a.center,r=t.center=getCenter(n)
;t.timeStamp=now$3(),
t.deltaTime=t.timeStamp-a.timeStamp,t.angle=getAngle(s,r),t.distance=getDistance(s,r),
function(e,t){
var o=t.center,n=e.offsetDelta||{},i=e.prevDelta||{},a=e.prevInput||{}
;(t.eventType===INPUT_START||a.eventType===INPUT_END)&&(i=e.prevDelta={
x:a.deltaX||0,y:a.deltaY||0},n=e.offsetDelta={
x:o.x,y:o.y
}),t.deltaX=i.x+(o.x-n.x),t.deltaY=i.y+(o.y-n.y)
}(o,t),t.offsetDirection=getDirection(t.deltaX,t.deltaY)
;var l=getVelocity(t.deltaTime,t.deltaX,t.deltaY)
;t.overallVelocityX=l.x,t.overallVelocityY=l.y,
t.overallVelocity=abs$1(l.x)>abs$1(l.y)?l.x:l.y,
t.scale=d?function(e,t){
return getDistance(t[0],t[1],PROPS_CLIENT_XY)/getDistance(e[0],e[1],PROPS_CLIENT_XY)
}(d.pointers,n):1,t.rotation=d?function(e,t){
return getAngle(t[1],t[0],PROPS_CLIENT_XY)+getAngle(e[1],e[0],PROPS_CLIENT_XY)
}(d.pointers,n):0,
t.maxPointers=o.prevInput?t.pointers.length>o.prevInput.maxPointers?t.pointers.length:o.prevInput.maxPointers:t.pointers.length,
function(e,t){
var i,a,d,s,o=e.lastInterval||t,n=t.timeStamp-o.timeStamp
;if(t.eventType!==INPUT_CANCEL&&(n>COMPUTE_INTERVAL||void 0===o.velocity)){
var r=t.deltaX-o.deltaX,l=t.deltaY-o.deltaY,c=getVelocity(n,r,l)
;a=c.x,d=c.y,i=abs$1(c.x)>abs$1(c.y)?c.x:c.y,
s=getDirection(r,l),e.lastInterval=t
}else i=o.velocity,a=o.velocityX,d=o.velocityY,
s=o.direction
;t.velocity=i,t.velocityX=a,t.velocityY=d,t.direction=s
}(o,t);var c=e.element
;hasParent$1(t.srcEvent.target,c)&&(c=t.srcEvent.target),t.target=c
}function inputHandler(e,t,o){
var n=o.pointers.length,i=o.changedPointers.length,a=t&INPUT_START&&0==n-i
;o.isFirst=!!a,
o.isFinal=!!(t&(INPUT_END|INPUT_CANCEL)&&0==n-i),a&&(e.session={}),
o.eventType=t,
computeInputData(e,o),e.emit("hammer.input",o),e.recognize(o),e.session.prevInput=o
}function splitStr(e){
return trim$4(e).call(e).split(/\s+/g)}
function addEventListeners(e,t,o){
each(splitStr(t),(function(t){
e.addEventListener(t,o,!1)}))}
function removeEventListeners(e,t,o){
each(splitStr(t),(function(t){
e.removeEventListener(t,o,!1)}))}
function getWindowForElement(e){
var t=e.ownerDocument||e
;return t.defaultView||t.parentWindow||window}
var Input=function(){function e(e,t){var o=this
;this.manager=e,this.callback=t,this.element=e.element,
this.target=e.options.inputTarget,
this.domHandler=function(t){
boolOrFn(e.options.enable,[e])&&o.handler(t)
},this.init()}var t=e.prototype
;return t.handler=function(){},t.init=function(){
this.evEl&&addEventListeners(this.element,this.evEl,this.domHandler),
this.evTarget&&addEventListeners(this.target,this.evTarget,this.domHandler),
this.evWin&&addEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler)
},t.destroy=function(){
this.evEl&&removeEventListeners(this.element,this.evEl,this.domHandler),
this.evTarget&&removeEventListeners(this.target,this.evTarget,this.domHandler),
this.evWin&&removeEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler)
},e}();function inArray(e,t,o){
if(indexOf$3(e)&&!o)return indexOf$3(e).call(e,t)
;for(var n=0;n<e.length;){
if(o&&e[n][o]==t||!o&&e[n]===t)return n;n++}
return-1}var POINTER_INPUT_MAP={
pointerdown:INPUT_START,pointermove:INPUT_MOVE,
pointerup:INPUT_END,pointercancel:INPUT_CANCEL,
pointerout:INPUT_CANCEL},IE10_POINTER_TYPE_ENUM={
2:INPUT_TYPE_TOUCH,3:"pen",4:INPUT_TYPE_MOUSE,
5:"kinect"
},POINTER_ELEMENT_EVENTS="pointerdown",POINTER_WINDOW_EVENTS="pointermove pointerup pointercancel"
;win.MSPointerEvent&&!win.PointerEvent&&(POINTER_ELEMENT_EVENTS="MSPointerDown",
POINTER_WINDOW_EVENTS="MSPointerMove MSPointerUp MSPointerCancel")
;var PointerEventInput=function(e){function t(){
var n,o=t.prototype
;return o.evEl=POINTER_ELEMENT_EVENTS,o.evWin=POINTER_WINDOW_EVENTS,
(n=e.apply(this,arguments)||this).store=n.manager.session.pointerEvents=[],
n}
return _inheritsLoose(t,e),t.prototype.handler=function(e){
var t=this.store,o=!1,n=e.type.toLowerCase().replace("ms",""),i=POINTER_INPUT_MAP[n],a=IE10_POINTER_TYPE_ENUM[e.pointerType]||e.pointerType,d=inArray(t,e.pointerId,"pointerId")
;i&INPUT_START&&(0===e.button||a===INPUT_TYPE_TOUCH)?0>d&&(t.push(e),
d=t.length-1):i&(INPUT_END|INPUT_CANCEL)&&(o=!0),
0>d||(t[d]=e,this.callback(this.manager,i,{
pointers:t,changedPointers:[e],pointerType:a,
srcEvent:e}),o&&splice$2(t).call(t,d,1))},t
}(Input);function toArray$1(e){
return slice$4(Array.prototype).call(e,0)}
function uniqueArray(e,t,o){
for(var s,n=[],a=[],d=0;d<e.length;)0>inArray(a,s=t?e[d][t]:e[d])&&n.push(e[d]),
a[d]=s,d++
;return o&&(n=t?sort$2(n).call(n,(function(e,o){
return e[t]>o[t]})):sort$2(n).call(n)),n}
var TOUCH_INPUT_MAP={touchstart:INPUT_START,
touchmove:INPUT_MOVE,touchend:INPUT_END,
touchcancel:INPUT_CANCEL
},TOUCH_TARGET_EVENTS="touchstart touchmove touchend touchcancel",TouchInput=function(e){
function t(){var o
;return t.prototype.evTarget=TOUCH_TARGET_EVENTS,(o=e.apply(this,arguments)||this).targetIds={},
o}
return _inheritsLoose(t,e),t.prototype.handler=function(e){
var t=TOUCH_INPUT_MAP[e.type],o=getTouches.call(this,e,t)
;o&&this.callback(this.manager,t,{pointers:o[0],
changedPointers:o[1],pointerType:INPUT_TYPE_TOUCH,
srcEvent:e})},t}(Input);function getTouches(e,t){
var o=toArray$1(e.touches),n=this.targetIds
;if(t&(INPUT_START|INPUT_MOVE)&&1===o.length)return n[o[0].identifier]=!0,
[o,o]
;var r,l,a=toArray$1(e.changedTouches),d=[],s=this.target
;if(l=filter$2(o).call(o,(function(e){
return hasParent$1(e.target,s)
})),t===INPUT_START)for(r=0;r<l.length;)n[l[r].identifier]=!0,
r++
;for(r=0;r<a.length;)n[a[r].identifier]&&d.push(a[r]),t&(INPUT_END|INPUT_CANCEL)&&delete n[a[r].identifier],
r++
;return d.length?[uniqueArray(concat$2(l).call(l,d),"identifier",!0),d]:void 0
}var MOUSE_INPUT_MAP={mousedown:INPUT_START,
mousemove:INPUT_MOVE,mouseup:INPUT_END
},MOUSE_ELEMENT_EVENTS="mousedown",MOUSE_WINDOW_EVENTS="mousemove mouseup",MouseInput=function(e){
function t(){var n,o=t.prototype
;return o.evEl=MOUSE_ELEMENT_EVENTS,o.evWin=MOUSE_WINDOW_EVENTS,
(n=e.apply(this,arguments)||this).pressed=!1,n}
return _inheritsLoose(t,e),t.prototype.handler=function(e){
var t=MOUSE_INPUT_MAP[e.type]
;t&INPUT_START&&0===e.button&&(this.pressed=!0),t&INPUT_MOVE&&1!==e.which&&(t=INPUT_END),
this.pressed&&(t&INPUT_END&&(this.pressed=!1),
this.callback(this.manager,t,{pointers:[e],
changedPointers:[e],pointerType:INPUT_TYPE_MOUSE,
srcEvent:e}))},t
}(Input),DEDUP_TIMEOUT=2500,DEDUP_DISTANCE=25
;function setLastTouch(e){
var o=e.changedPointers[0]
;if(o.identifier===this.primaryTouch){var n={
x:o.clientX,y:o.clientY},a=this.lastTouches
;this.lastTouches.push(n)
;setTimeout$1((function(){
var e=indexOf$3(a).call(a,n)
;-1<e&&splice$2(a).call(a,e,1)}),DEDUP_TIMEOUT)}}
function recordTouches(e,t){
e&INPUT_START?(this.primaryTouch=t.changedPointers[0].identifier,
setLastTouch.call(this,t)):e&(INPUT_END|INPUT_CANCEL)&&setLastTouch.call(this,t)
}function isSyntheticEvent(e){
for(var o=Math.abs,n=e.srcEvent.clientX,a=e.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){
var s=this.lastTouches[d],t=o(n-s.x),r=o(a-s.y)
;if(t<=DEDUP_DISTANCE&&r<=DEDUP_DISTANCE)return!0}
return!1}var TouchMouseInput=function(e){
function t(t,o){var n
;return(n=e.call(this,t,o)||this).handler=function(e,t,o){
var i=o.pointerType===INPUT_TYPE_TOUCH,a=o.pointerType===INPUT_TYPE_MOUSE
;if(!(a&&o.sourceCapabilities&&o.sourceCapabilities.firesTouchEvents)){
if(i)recordTouches.call(_assertThisInitialized$1(_assertThisInitialized$1(n)),t,o);else if(a&&isSyntheticEvent.call(_assertThisInitialized$1(_assertThisInitialized$1(n)),o))return
;n.callback(e,t,o)}
},n.touch=new TouchInput(n.manager,n.handler),n.mouse=new MouseInput(n.manager,n.handler),
n.primaryTouch=null,n.lastTouches=[],n}
return _inheritsLoose(t,e),t.prototype.destroy=function(){
this.touch.destroy(),this.mouse.destroy()},t
}(Input);function invokeArrayArg(e,t,o){
return!!isArray$3(e)&&(each(e,o[t],o),!0)}
var STATE_POSSIBLE=1,STATE_BEGAN=2,STATE_CHANGED=4,STATE_ENDED=8,STATE_RECOGNIZED=STATE_ENDED,STATE_CANCELLED=16,_uniqueId=1
;function getRecognizerByNameIfManager(e,t){
var o=t.manager;return o?o.get(e):e}
function stateStr(e){
return e&STATE_CANCELLED?"cancel":e&STATE_ENDED?"end":e&STATE_CHANGED?"move":e&STATE_BEGAN?"start":""
}var Recognizer=function(){function e(e){
void 0===e&&(e={}),this.options=_extends({
enable:!0
},e),this.id=_uniqueId++,this.manager=null,this.state=STATE_POSSIBLE,this.simultaneous={},
this.requireFail=[]}var t=e.prototype
;return t.set=function(e){
return assign$1$1(this.options,e),this.manager&&this.manager.touchAction.update(),
this},t.recognizeWith=function(e){
if(invokeArrayArg(e,"recognizeWith",this))return this
;var t=this.simultaneous
;return t[(e=getRecognizerByNameIfManager(e,this)).id]||(t[e.id]=e,
e.recognizeWith(this)),this
},t.dropRecognizeWith=function(e){
return invokeArrayArg(e,"dropRecognizeWith",this)?this:(e=getRecognizerByNameIfManager(e,this),
delete this.simultaneous[e.id],this)
},t.requireFailure=function(e){
if(invokeArrayArg(e,"requireFailure",this))return this
;var t=this.requireFail
;return-1===inArray(t,e=getRecognizerByNameIfManager(e,this))&&(t.push(e),
e.requireFailure(this)),this
},t.dropRequireFailure=function(e){var _context42
;if(invokeArrayArg(e,"dropRequireFailure",this))return this
;e=getRecognizerByNameIfManager(e,this)
;var t=inArray(this.requireFail,e)
;return-1<t&&splice$2(_context42=this.requireFail).call(_context42,t,1),
this},t.hasRequireFailures=function(){
return 0<this.requireFail.length
},t.canRecognizeWith=function(e){
return!!this.simultaneous[e.id]
},t.emit=function(t){function e(n){
o.manager.emit(n,t)}var o=this,n=this.state
;n<STATE_ENDED&&e(o.options.event+stateStr(n)),
e(o.options.event),t.additionalEvent&&e(t.additionalEvent),
n>=STATE_ENDED&&e(o.options.event+stateStr(n))
},t.tryEmit=function(e){
return this.canEmit()?this.emit(e):void(this.state=32)
},t.canEmit=function(){
for(var e=0;e<this.requireFail.length;){
if(!(this.requireFail[e].state&(32|STATE_POSSIBLE)))return!1
;e++}return!0},t.recognize=function(e){
var t=assign$1$1({},e)
;return boolOrFn(this.options.enable,[this,t])?(this.state&(STATE_RECOGNIZED|STATE_CANCELLED|32)&&(this.state=STATE_POSSIBLE),
this.state=this.process(t),
void(this.state&(STATE_BEGAN|STATE_CHANGED|STATE_ENDED|STATE_CANCELLED)&&this.tryEmit(t))):(this.reset(),
void(this.state=32))
},t.process=function(){},t.getTouchAction=function(){},t.reset=function(){},
e}(),defaults={domEvents:!1,touchAction:"compute",
enable:!0,inputTarget:null,inputClass:null,
preset:[],cssProps:{userSelect:"none",
touchSelect:"none",touchCallout:"none",
contentZooming:"none",userDrag:"none",
tapHighlightColor:"rgba(0,0,0,0)"}}
;function toggleCssProps(e,t){var n,o=e.element
;o.style&&(each(e.options.cssProps,(function(i,a){
n=prefixed(o.style,a),t?(e.oldCssProps[n]=o.style[n],
o.style[n]=i):o.style[n]=e.oldCssProps[n]||""
})),t||(e.oldCssProps={}))}var Manager=function(){
function e(e,t){var o=this
;this.options=assign$1$1({},defaults,t||{}),this.options.inputTarget=this.options.inputTarget||e,
this.handlers={},
this.session={},this.recognizers=[],this.oldCssProps={},this.element=e,
this.input=function(e){var t=e.options.inputClass
;return new(t||(SUPPORT_POINTER_EVENTS?PointerEventInput:SUPPORT_ONLY_TOUCH?TouchInput:SUPPORT_TOUCH?TouchMouseInput:MouseInput))(e,inputHandler)
}(this),
this.touchAction=new TouchAction(this,this.options.touchAction),toggleCssProps(this,!0),
each(this.options.recognizers,(function(e){
var t=o.add(new e[0](e[1]))
;e[2]&&t.recognizeWith(e[2]),e[3]&&t.requireFailure(e[3])
}),this)}var t=e.prototype
;return t.set=function(e){
return assign$1$1(this.options,e),e.touchAction&&this.touchAction.update(),
e.inputTarget&&(this.input.destroy(),
this.input.target=e.inputTarget,this.input.init()),
this},t.stop=function(e){
this.session.stopped=e?2:1
},t.recognize=function(e){var t=this.session
;if(!t.stopped){
this.touchAction.preventDefaults(e)
;var a,o=this.recognizers,n=t.curRecognizer
;(!n||n&&n.state&STATE_RECOGNIZED)&&(t.curRecognizer=null,
n=null)
;for(var d=0;d<o.length;)a=o[d],2===t.stopped||n&&a!==n&&!a.canRecognizeWith(n)?a.reset():a.recognize(e),
!n&&a.state&(STATE_BEGAN|STATE_CHANGED|STATE_ENDED)&&(t.curRecognizer=a,
n=a),d++}},t.get=function(e){
if(e instanceof Recognizer)return e
;for(var t=this.recognizers,o=0;o<t.length;o++)if(t[o].options.event===e)return t[o]
;return null},t.add=function(e){
if(invokeArrayArg(e,"add",this))return this
;var t=this.get(e.options.event)
;return t&&this.remove(t),this.recognizers.push(e),
e.manager=this,this.touchAction.update(),e
},t.remove=function(e){
if(invokeArrayArg(e,"remove",this))return this
;var t=this.get(e);if(e){
var o=this.recognizers,n=inArray(o,t)
;-1!==n&&(splice$2(o).call(o,n,1),this.touchAction.update())
}return this},t.on=function(e,t){
if(void 0===e||void 0===t)return this
;var o=this.handlers
;return each(splitStr(e),(function(e){
o[e]=o[e]||[],o[e].push(t)})),this
},t.off=function(e,t){if(void 0===e)return this
;var o=this.handlers
;return each(splitStr(e),(function(e){
var _context43
;t?o[e]&&splice$2(_context43=o[e]).call(_context43,inArray(o[e],t),1):delete o[e]
})),this},t.emit=function(e,t){var _context44
;this.options.domEvents&&function(e,t){
var o=document.createEvent("Event")
;o.initEvent(e,!0,!0),o.gesture=t,t.target.dispatchEvent(o)
}(e,t)
;var o=this.handlers[e]&&slice$4(_context44=this.handlers[e]).call(_context44)
;if(o&&o.length){
t.type=e,t.preventDefault=function(){
t.srcEvent.preventDefault()}
;for(var n=0;n<o.length;)o[n](t),n++}
},t.destroy=function(){
this.element&&toggleCssProps(this,!1),this.handlers={},this.session={},
this.input.destroy(),this.element=null},e
}(),SINGLE_TOUCH_INPUT_MAP={
touchstart:INPUT_START,touchmove:INPUT_MOVE,
touchend:INPUT_END,touchcancel:INPUT_CANCEL
},SINGLE_TOUCH_TARGET_EVENTS="touchstart",SINGLE_TOUCH_WINDOW_EVENTS="touchstart touchmove touchend touchcancel",SingleTouchInput=function(e){
function t(){var n,o=t.prototype
;return o.evTarget=SINGLE_TOUCH_TARGET_EVENTS,o.evWin=SINGLE_TOUCH_WINDOW_EVENTS,
(n=e.apply(this,arguments)||this).started=!1,n}
return _inheritsLoose(t,e),t.prototype.handler=function(e){
var t=SINGLE_TOUCH_INPUT_MAP[e.type]
;if(t===INPUT_START&&(this.started=!0),this.started){
var o=normalizeSingleTouches.call(this,e,t)
;t&(INPUT_END|INPUT_CANCEL)&&0==o[0].length-o[1].length&&(this.started=!1),
this.callback(this.manager,t,{pointers:o[0],
changedPointers:o[1],pointerType:INPUT_TYPE_TOUCH,
srcEvent:e})}},t}(Input)
;function normalizeSingleTouches(e,t){
var o=toArray$1(e.touches),n=toArray$1(e.changedTouches)
;return t&(INPUT_END|INPUT_CANCEL)&&(o=uniqueArray(concat$2(o).call(o,n),"identifier",!0)),
[o,n]}var AttrRecognizer=function(e){
function t(t){
return void 0===t&&(t={}),e.call(this,_extends({
pointers:1},t))||this}_inheritsLoose(t,e)
;var o=t.prototype;return o.attrTest=function(e){
var t=this.options.pointers
;return 0===t||e.pointers.length===t
},o.process=function(e){
var t=this.state,o=e.eventType,n=t&(STATE_BEGAN|STATE_CHANGED),i=this.attrTest(e)
;return n&&(o&INPUT_CANCEL||!i)?t|STATE_CANCELLED:n||i?o&INPUT_END?t|STATE_ENDED:t&STATE_BEGAN?t|STATE_CHANGED:STATE_BEGAN:32
},t}(Recognizer),TapRecognizer=function(e){
function t(t){var o
;return void 0===t&&(t={}),(o=e.call(this,_extends({
event:"tap",pointers:1,taps:1,interval:300,
time:250,threshold:9,posThreshold:10
},t))||this).pTime=!1,o.pCenter=!1,o._timer=null,
o._input=null,o.count=0,o}_inheritsLoose(t,e)
;var o=t.prototype
;return o.getTouchAction=function(){
return[TOUCH_ACTION_MANIPULATION]
},o.process=function(e){
var t=this,o=this.options,n=e.pointers.length===o.pointers,i=e.distance<o.threshold,a=e.deltaTime<o.time
;if(this.reset(),
e.eventType&INPUT_START&&0===this.count)return this.failTimeout()
;if(i&&a&&n){
if(e.eventType!==INPUT_END)return this.failTimeout()
;var d=!this.pTime||e.timeStamp-this.pTime<o.interval,s=!this.pCenter||getDistance(this.pCenter,e.center)<o.posThreshold
;if(this.pTime=e.timeStamp,
this.pCenter=e.center,s&&d?this.count+=1:this.count=1,
this._input=e,0==this.count%o.taps)return this.hasRequireFailures()?(this._timer=setTimeout$1((function(){
t.state=STATE_RECOGNIZED,t.tryEmit()
}),o.interval),STATE_BEGAN):STATE_RECOGNIZED}
return 32},o.failTimeout=function(){var e=this
;return this._timer=setTimeout$1((function(){
e.state=32}),this.options.interval),32
},o.reset=function(){clearTimeout(this._timer)
},o.emit=function(){
this.state===STATE_RECOGNIZED&&(this._input.tapCount=this.count,
this.manager.emit(this.options.event,this._input))
},t}(Recognizer);function directionStr(e){
return e===DIRECTION_DOWN?"down":e===DIRECTION_UP?"up":e===DIRECTION_LEFT?"left":e===DIRECTION_RIGHT?"right":""
}var PanRecognizer=function(e){var o=Math.abs
;function t(t){var o
;return void 0===t&&(t={}),(o=e.call(this,_extends({
event:"pan",threshold:10,pointers:1,
direction:DIRECTION_ALL
},t))||this).pX=null,o.pY=null,o}
_inheritsLoose(t,e);var n=t.prototype
;return n.getTouchAction=function(){
var e=this.options.direction,t=[]
;return e&DIRECTION_HORIZONTAL&&t.push(TOUCH_ACTION_PAN_Y),
e&DIRECTION_VERTICAL&&t.push(TOUCH_ACTION_PAN_X),t
},n.directionTest=function(e){
var t=this.options,n=!0,i=e.distance,a=e.direction,d=e.deltaX,s=e.deltaY
;return a&t.direction||(t.direction&DIRECTION_HORIZONTAL?(a=0===d?DIRECTION_NONE:0>d?DIRECTION_LEFT:DIRECTION_RIGHT,
n=d!==this.pX,
i=o(e.deltaX)):(a=0===s?DIRECTION_NONE:0>s?DIRECTION_UP:DIRECTION_DOWN,
n=s!==this.pY,
i=o(e.deltaY))),e.direction=a,n&&i>t.threshold&&a&t.direction
},n.attrTest=function(e){
return AttrRecognizer.prototype.attrTest.call(this,e)&&(this.state&STATE_BEGAN||!(this.state&STATE_BEGAN)&&this.directionTest(e))
},n.emit=function(t){
this.pX=t.deltaX,this.pY=t.deltaY
;var o=directionStr(t.direction)
;o&&(t.additionalEvent=this.options.event+o),e.prototype.emit.call(this,t)
},t}(AttrRecognizer),SwipeRecognizer=function(e){
function t(t){
return void 0===t&&(t={}),e.call(this,_extends({
event:"swipe",threshold:10,velocity:.3,
direction:DIRECTION_HORIZONTAL|DIRECTION_VERTICAL,
pointers:1},t))||this}_inheritsLoose(t,e)
;var o=t.prototype
;return o.getTouchAction=function(){
return PanRecognizer.prototype.getTouchAction.call(this)
},o.attrTest=function(t){
var n,o=this.options.direction
;return o&(DIRECTION_HORIZONTAL|DIRECTION_VERTICAL)?n=t.overallVelocity:o&DIRECTION_HORIZONTAL?n=t.overallVelocityX:o&DIRECTION_VERTICAL&&(n=t.overallVelocityY),
e.prototype.attrTest.call(this,t)&&o&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers===this.options.pointers&&abs$1(n)>this.options.velocity&&t.eventType&INPUT_END
},o.emit=function(e){
var t=directionStr(e.offsetDirection)
;t&&this.manager.emit(this.options.event+t,e),
this.manager.emit(this.options.event,e)},t
}(AttrRecognizer),PinchRecognizer=function(e){
var o=Math.abs;function t(t){
return void 0===t&&(t={}),e.call(this,_extends({
event:"pinch",threshold:0,pointers:2},t))||this}
_inheritsLoose(t,e);var n=t.prototype
;return n.getTouchAction=function(){
return[TOUCH_ACTION_NONE]},n.attrTest=function(t){
return e.prototype.attrTest.call(this,t)&&(o(t.scale-1)>this.options.threshold||this.state&STATE_BEGAN)
},n.emit=function(t){if(1!==t.scale){
var o=1>t.scale?"in":"out"
;t.additionalEvent=this.options.event+o}
e.prototype.emit.call(this,t)},t
}(AttrRecognizer),RotateRecognizer=function(e){
var o=Math.abs;function t(t){
return void 0===t&&(t={}),e.call(this,_extends({
event:"rotate",threshold:0,pointers:2},t))||this}
_inheritsLoose(t,e);var n=t.prototype
;return n.getTouchAction=function(){
return[TOUCH_ACTION_NONE]},n.attrTest=function(t){
return e.prototype.attrTest.call(this,t)&&(o(t.rotation)>this.options.threshold||this.state&STATE_BEGAN)
},t}(AttrRecognizer),PressRecognizer=function(e){
function t(t){var o
;return void 0===t&&(t={}),(o=e.call(this,_extends({
event:"press",pointers:1,time:251,threshold:9
},t))||this)._timer=null,o._input=null,o}
_inheritsLoose(t,e);var o=t.prototype
;return o.getTouchAction=function(){
return[TOUCH_ACTION_AUTO]},o.process=function(e){
var t=this,o=this.options,n=e.pointers.length===o.pointers,i=e.distance<o.threshold,a=e.deltaTime>o.time
;if(this._input=e,
!i||!n||e.eventType&(INPUT_END|INPUT_CANCEL)&&!a)this.reset();else if(e.eventType&INPUT_START)this.reset(),
this._timer=setTimeout$1((function(){
t.state=STATE_RECOGNIZED,t.tryEmit()
}),o.time);else if(e.eventType&INPUT_END)return STATE_RECOGNIZED
;return 32},o.reset=function(){
clearTimeout(this._timer)},o.emit=function(e){
this.state!==STATE_RECOGNIZED||(e&&e.eventType&INPUT_END?this.manager.emit(this.options.event+"up",e):(this._input.timeStamp=now$3(),
this.manager.emit(this.options.event,this._input)))
},t}(Recognizer);function deprecate(t,o,n){
return function(){
var i=new Error("get-stack-trace"),e=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",a=window.console&&(window.console.warn||window.console.log)
;return a&&a.call(window.console,"DEPRECATED METHOD: "+o+"\n"+n+" AT \n",e),
t.apply(this,arguments)}}
var extend$1=deprecate((function(e,t,o){
for(var n=keys$6(t),a=0;a<n.length;)(!o||o&&void 0===e[n[a]])&&(e[n[a]]=t[n[a]]),
a++;return e
}),"extend","Use `assign`."),merge$1=deprecate((function(e,t){
return extend$1(e,t,!0)}),"merge","Use `assign`.")
;function inherit(e,t,o){var i,n=t.prototype
;(i=e.prototype=create$2(n)).constructor=e,
i._super=n,o&&assign$1$1(i,o)}
function bindFn(e,t){return function(){
return e.apply(t,arguments)}}
var Hammer=function(){var e=function(_e2,t){
return void 0===t&&(t={}),new Manager(_e2,_extends({
recognizers:[[RotateRecognizer,{enable:!1
}],[PinchRecognizer,{enable:!1
},["rotate"]],[SwipeRecognizer,{
direction:DIRECTION_HORIZONTAL}],[PanRecognizer,{
direction:DIRECTION_HORIZONTAL
},["swipe"]],[TapRecognizer],[TapRecognizer,{
event:"doubletap",taps:2
},["tap"]],[PressRecognizer]]},t))}
;return e.VERSION="2.0.15",e.DIRECTION_ALL=DIRECTION_ALL,
e.DIRECTION_DOWN=DIRECTION_DOWN,
e.DIRECTION_LEFT=DIRECTION_LEFT,e.DIRECTION_RIGHT=DIRECTION_RIGHT,
e.DIRECTION_UP=DIRECTION_UP,
e.DIRECTION_HORIZONTAL=DIRECTION_HORIZONTAL,e.DIRECTION_VERTICAL=DIRECTION_VERTICAL,
e.DIRECTION_NONE=DIRECTION_NONE,
e.DIRECTION_DOWN=DIRECTION_DOWN,e.INPUT_START=INPUT_START,
e.INPUT_MOVE=INPUT_MOVE,
e.INPUT_END=INPUT_END,e.INPUT_CANCEL=INPUT_CANCEL,e.STATE_POSSIBLE=STATE_POSSIBLE,
e.STATE_BEGAN=STATE_BEGAN,
e.STATE_CHANGED=STATE_CHANGED,e.STATE_ENDED=STATE_ENDED,
e.STATE_RECOGNIZED=STATE_RECOGNIZED,
e.STATE_CANCELLED=STATE_CANCELLED,e.STATE_FAILED=32,
e.Manager=Manager,e.Input=Input,
e.TouchAction=TouchAction,e.TouchInput=TouchInput,
e.MouseInput=MouseInput,e.PointerEventInput=PointerEventInput,
e.TouchMouseInput=TouchMouseInput,
e.SingleTouchInput=SingleTouchInput,e.Recognizer=Recognizer,
e.AttrRecognizer=AttrRecognizer,
e.Tap=TapRecognizer,e.Pan=PanRecognizer,e.Swipe=SwipeRecognizer,
e.Pinch=PinchRecognizer,
e.Rotate=RotateRecognizer,e.Press=PressRecognizer,e.on=addEventListeners,
e.off=removeEventListeners,
e.each=each,e.merge=merge$1,e.extend=extend$1,e.bindFn=bindFn,
e.assign=assign$1$1,
e.inherit=inherit,e.bindFn=bindFn,e.prefixed=prefixed,e.toArray=toArray$1,
e.inArray=inArray,
e.uniqueArray=uniqueArray,e.splitStr=splitStr,e.boolOrFn=boolOrFn,
e.hasParent=hasParent$1,
e.addEventListeners=addEventListeners,e.removeEventListeners=removeEventListeners,
e.defaults=defaults,e
}(),hammer=createCommonjsModule$2((function(e){
if("undefined"!=typeof window){
var o=window.Hammer||Hammer;e.exports=o
}else e.exports=function(){return function(){
var e=function(){};return{on:e,off:e,destroy:e,
emit:e,get:function(){return{set:e}}}}()}
})),hammer$1=freeze$2({default:hammer,
__moduleExports:hammer});function Activator$1(e){
var _context45,_context46,_context47
;this.active=!1,this.dom={container:e
},this.dom.overlay=document.createElement("div"),
this.dom.overlay.className="vis-overlay",
this.dom.container.appendChild(this.dom.overlay),
this.hammer=hammer(this.dom.overlay),
this.hammer.on("tap",bind$2(_context45=this._onTapOverlay).call(_context45,this))
;var t=this
;forEach$2(_context46=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"]).call(_context46,(function(e){
t.hammer.on(e,(function(e){e.stopPropagation()}))
})),document&&document.body&&(this.onClick=function(o){
(function(e,t){for(;e;){if(e===t)return!0
;e=e.parentNode}return!1
})(o.target,e)||t.deactivate()
},document.body.addEventListener("click",this.onClick)),
void 0!==this.keycharm&&this.keycharm.destroy(),
this.keycharm=keycharm(),this.escListener=bind$2(_context47=this.deactivate).call(_context47,this)
}!function(e){e&&e.default
}(Activator),componentEmitter(Activator$1.prototype),Activator$1.current=null,
Activator$1.prototype.destroy=function(){
this.deactivate(),this.dom.overlay.parentNode.removeChild(this.dom.overlay),
this.onClick&&document.body.removeEventListener("click",this.onClick),
void 0!==this.keycharm&&this.keycharm.destroy(),
this.keycharm=null,this.hammer.destroy(),
this.hammer=null
},Activator$1.prototype.activate=function(){
var _context48
;Activator$1.current&&Activator$1.current.deactivate(),Activator$1.current=this,
this.active=!0,
this.dom.overlay.style.display="none",util.addClassName(this.dom.container,"vis-active"),
this.emit("change"),
this.emit("activate"),bind$2(_context48=this.keycharm).call(_context48,"esc",this.escListener)
},Activator$1.prototype.deactivate=function(){
this.active=!1,this.dom.overlay.style.display="",
util.removeClassName(this.dom.container,"vis-active"),
this.keycharm.unbind("esc",this.escListener),
this.emit("change"),this.emit("deactivate")
},Activator$1.prototype._onTapOverlay=function(e){
this.activate(),e.stopPropagation()}
;var Activator_1=Activator$1,locales=createCommonjsModule$2((function(e,t){
t.en={edit:"Edit",del:"Delete selected",
back:"Back",addNode:"Add Node",addEdge:"Add Edge",
editNode:"Edit Node",editEdge:"Edit Edge",
addDescription:"Click in an empty space to place a new node.",
edgeDescription:"Click on a node and drag the edge to another node to connect them.",
editEdgeDescription:"Click on the control points and drag them to a node to connect to it.",
createEdgeError:"Cannot link edges to a cluster.",
deleteClusterError:"Clusters cannot be deleted.",
editClusterError:"Clusters cannot be edited."
},t.en_EN=t.en,t.en_US=t.en,t.de={
edit:"Editieren",del:"Lösche Auswahl",
back:"Zurück",addNode:"Knoten hinzufügen",
addEdge:"Kante hinzufügen",
editNode:"Knoten editieren",
editEdge:"Kante editieren",
addDescription:"Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.",
edgeDescription:"Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.",
editEdgeDescription:"Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.",
createEdgeError:"Es ist nicht möglich, Kanten mit Clustern zu verbinden.",
deleteClusterError:"Cluster können nicht gelöscht werden.",
editClusterError:"Cluster können nicht editiert werden."
},t.de_DE=t.de,t.es={edit:"Editar",
del:"Eliminar selección",back:"Atrás",
addNode:"Añadir nodo",addEdge:"Añadir arista",
editNode:"Editar nodo",editEdge:"Editar arista",
addDescription:"Haga clic en un lugar vacío para colocar un nuevo nodo.",
edgeDescription:"Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.",
editEdgeDescription:"Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.",
createEdgeError:"No se puede conectar una arista a un grupo.",
deleteClusterError:"No es posible eliminar grupos.",
editClusterError:"No es posible editar grupos."
},t.es_ES=t.es,t.it={edit:"Modifica",
del:"Cancella la selezione",back:"Indietro",
addNode:"Aggiungi un nodo",
addEdge:"Aggiungi un vertice",
editNode:"Modifica il nodo",
editEdge:"Modifica il vertice",
addDescription:"Clicca per aggiungere un nuovo nodo",
edgeDescription:"Clicca su un nodo e trascinalo ad un altro nodo per connetterli.",
editEdgeDescription:"Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.",
createEdgeError:"Non si possono collegare vertici ad un cluster",
deleteClusterError:"I cluster non possono essere cancellati",
editClusterError:"I clusters non possono essere modificati."
},t.it_IT=t.it,t.nl={edit:"Wijzigen",
del:"Selectie verwijderen",back:"Terug",
addNode:"Node toevoegen",addEdge:"Link toevoegen",
editNode:"Node wijzigen",editEdge:"Link wijzigen",
addDescription:"Klik op een leeg gebied om een nieuwe node te maken.",
edgeDescription:"Klik op een node en sleep de link naar een andere node om ze te verbinden.",
editEdgeDescription:"Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.",
createEdgeError:"Kan geen link maken naar een cluster.",
deleteClusterError:"Clusters kunnen niet worden verwijderd.",
editClusterError:"Clusters kunnen niet worden aangepast."
},t.nl_NL=t.nl,t.nl_BE=t.nl,t["pt-br"]={
edit:"Editar",del:"Remover selecionado",
back:"Voltar",addNode:"Adicionar nó",
addEdge:"Adicionar aresta",editNode:"Editar nó",
editEdge:"Editar aresta",
addDescription:"Clique em um espaço em branco para adicionar um novo nó",
edgeDescription:"Clique em um nó e arraste a aresta até outro nó para conectá-los",
editEdgeDescription:"Clique nos pontos de controle e os arraste para um nó para conectá-los",
createEdgeError:"Não foi possível linkar arestas a um cluster.",
deleteClusterError:"Clusters não puderam ser removidos.",
editClusterError:"Clusters não puderam ser editados."
},t["pt-BR"]=t["pt-br"],t.pt_BR=t["pt-br"],
t.pt_br=t["pt-br"],t.ru={edit:"Редактировать",
del:"Удалить выбранное",back:"Назад",
addNode:"Добавить узел",addEdge:"Добавить ребро",
editNode:"Редактировать узел",
editEdge:"Редактировать ребро",
addDescription:"Кликните в свободное место, чтобы добавить новый узел.",
edgeDescription:"Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.",
editEdgeDescription:"Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.",
createEdgeError:"Невозможно соединить ребра в кластер.",
deleteClusterError:"Кластеры не могут быть удалены",
editClusterError:"Кластеры недоступны для редактирования."
},t.ru_RU=t.ru,t.cn={edit:"编辑",del:"删除选定",
back:"返回",addNode:"添加节点",addEdge:"添加连接线",
editNode:"编辑节点",editEdge:"编辑连接线",
addDescription:"单击空白处放置新节点。",
edgeDescription:"单击某个节点并将该连接线拖动到另一个节点以连接它们。",
editEdgeDescription:"单击控制节点并将它们拖到节点上连接。",
createEdgeError:"无法将连接线连接到群集。",
deleteClusterError:"无法删除群集。",
editClusterError:"无法编辑群集。"},t.zh_CN=t.cn,t.uk={
edit:"Редагувати",del:"Видалити обране",
back:"Назад",addNode:"Додати вузол",
addEdge:"Додати край",editNode:"Редагувати вузол",
editEdge:"Редагувати край",
addDescription:"Kлікніть на вільне місце, щоб додати новий вузол.",
edgeDescription:"Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",
editEdgeDescription:"Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.",
createEdgeError:"Не можливо об'єднати краї в групу.",
deleteClusterError:"Групи не можуть бути видалені.",
editClusterError:"Групи недоступні для редагування."
},t.uk_UA=t.uk,t.fr={edit:"Editer",
del:"Effacer la selection",back:"Retour",
addNode:"Ajouter un noeud",
addEdge:"Ajouter un lien",
editNode:"Editer le noeud",
editEdge:"Editer le lien",
addDescription:"Cliquez dans un endroit vide pour placer un noeud.",
edgeDescription:"Cliquez sur un noeud et glissez le lien vers un autre noeud pour les connecter.",
editEdgeDescription:"Cliquez sur les points de contrôle et glissez-les pour connecter un noeud.",
createEdgeError:"Impossible de créer un lien vers un cluster.",
deleteClusterError:"Les clusters ne peuvent pas être éffacés.",
editClusterError:"Les clusters ne peuvent pas être édites."
},t.fr_FR=t.fr,t.cs={edit:"Upravit",
del:"Smazat výběr",back:"Zpět",
addNode:"Přidat vrchol",addEdge:"Přidat hranu",
editNode:"Upravit vrchol",
editEdge:"Upravit hranu",
addDescription:"Kluknutím do prázdného prostoru můžete přidat nový vrchol.",
edgeDescription:"Přetažením z jednoho vrcholu do druhého můžete spojit tyto vrcholy novou hranou.",
editEdgeDescription:"Přetažením kontrolního vrcholu hrany ji můžete připojit k jinému vrcholu.",
createEdgeError:"Nelze připojit hranu ke shluku.",
deleteClusterError:"Nelze mazat shluky.",
editClusterError:"Nelze upravovat shluky."
},t.cs_CZ=t.cs}))
;var classCallCheck$1=function(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
};function _defineProperties$1(e,t){
for(var n,o=0;o<t.length;o++)(n=t[o]).enumerable=n.enumerable||!1,
n.configurable=!0,
"value"in n&&(n.writable=!0),defineProperty$3(e,n.key,n)
}var createClass$1=function(e,t,o){
return t&&_defineProperties$1(e.prototype,t),
o&&_defineProperties$1(e,o),e
},CachedImage=function(){var t=Math.floor
;function e(){
classCallCheck$1(this,e),this.NUM_ITERATIONS=4,this.image=new Image,
this.canvas=document.createElement("canvas")}
return createClass$1(e,[{key:"init",
value:function(){if(!this.initialized()){
this.src=this.image.src
;var e=this.image.width,o=this.image.height
;this.width=e,this.height=o
;var n=t(o/2),i=t(o/4),a=t(o/8),d=t(o/16),s=t(e/2),r=t(e/4),l=t(e/8),c=t(e/16)
;this.canvas.width=3*r,
this.canvas.height=n,this.coordinates=[[0,0,s,n],[s,0,r,i],[s,i,l,a],[5*l,i,c,d]],
this._fillMipMap()}}},{key:"initialized",
value:function(){return void 0!==this.coordinates}
},{key:"_fillMipMap",value:function(){
var e=this.canvas.getContext("2d"),t=this.coordinates[0]
;e.drawImage(this.image,t[0],t[1],t[2],t[3])
;for(var o=1;o<this.NUM_ITERATIONS;o++){
var n=this.coordinates[o-1],i=this.coordinates[o]
;e.drawImage(this.canvas,n[0],n[1],n[2],n[3],i[0],i[1],i[2],i[3])
}}},{key:"drawImageAtPosition",
value:function(e,t,o,n,i,a){
if(this.initialized())if(2<t){t*=.5
;for(var d=0;2<t&&d<this.NUM_ITERATIONS;)t*=.5,
d+=1
;d>=this.NUM_ITERATIONS&&(d=this.NUM_ITERATIONS-1)
;var s=this.coordinates[d]
;e.drawImage(this.canvas,s[0],s[1],s[2],s[3],o,n,i,a)
}else e.drawImage(this.image,o,n,i,a)}}]),e
}(),Images=function(){function e(t){
classCallCheck$1(this,e),this.images={},this.imageBroken={},
this.callback=t}return createClass$1(e,[{
key:"_tryloadBrokenUrl",value:function(e,t,o){
return void 0===e||void 0===o?void 0:void 0===t?void console.warn("No broken url image defined"):(o.image.onerror=function(){
console.error("Could not load brokenImage:",t)
},void(o.image.src=t))}},{key:"_redrawWithImage",
value:function(e){this.callback&&this.callback(e)}
},{key:"load",value:function(e,t){
var o=this,n=this.images[e];if(n)return n
;var i=new CachedImage
;return this.images[e]=i,i.image.onload=function(){
o._fixImageCoordinates(i.image),
i.init(),o._redrawWithImage(i)
},i.image.onerror=function(){
console.error("Could not load image:",e),o._tryloadBrokenUrl(e,t,i)
},i.image.src=e,i}},{key:"_fixImageCoordinates",
value:function(e){
0===e.width&&(document.body.appendChild(e),e.width=e.offsetWidth,
e.height=e.offsetHeight,
document.body.removeChild(e))}}]),e
}(),Groups=function(){function e(){
classCallCheck$1(this,e),this.clear(),this.defaultIndex=0,
this.groupsArray=[],this.groupIndex=0,
this.defaultGroups=[{border:"#2B7CE9",
background:"#97C2FC",highlight:{border:"#2B7CE9",
background:"#D2E5FF"},hover:{border:"#2B7CE9",
background:"#D2E5FF"}},{border:"#FFA500",
background:"#FFFF00",highlight:{border:"#FFA500",
background:"#FFFFA3"},hover:{border:"#FFA500",
background:"#FFFFA3"}},{border:"#FA0A10",
background:"#FB7E81",highlight:{border:"#FA0A10",
background:"#FFAFB1"},hover:{border:"#FA0A10",
background:"#FFAFB1"}},{border:"#41A906",
background:"#7BE141",highlight:{border:"#41A906",
background:"#A1EC76"},hover:{border:"#41A906",
background:"#A1EC76"}},{border:"#E129F0",
background:"#EB7DF4",highlight:{border:"#E129F0",
background:"#F0B3F5"},hover:{border:"#E129F0",
background:"#F0B3F5"}},{border:"#7C29F0",
background:"#AD85E4",highlight:{border:"#7C29F0",
background:"#D3BDF0"},hover:{border:"#7C29F0",
background:"#D3BDF0"}},{border:"#C37F00",
background:"#FFA807",highlight:{border:"#C37F00",
background:"#FFCA66"},hover:{border:"#C37F00",
background:"#FFCA66"}},{border:"#4220FB",
background:"#6E6EFD",highlight:{border:"#4220FB",
background:"#9B9BFD"},hover:{border:"#4220FB",
background:"#9B9BFD"}},{border:"#FD5A77",
background:"#FFC0CB",highlight:{border:"#FD5A77",
background:"#FFD1D9"},hover:{border:"#FD5A77",
background:"#FFD1D9"}},{border:"#4AD63A",
background:"#C2FABC",highlight:{border:"#4AD63A",
background:"#E6FFE3"},hover:{border:"#4AD63A",
background:"#E6FFE3"}},{border:"#990000",
background:"#EE0000",highlight:{border:"#BB0000",
background:"#FF3333"},hover:{border:"#BB0000",
background:"#FF3333"}},{border:"#FF6000",
background:"#FF6000",highlight:{border:"#FF6000",
background:"#FF6000"},hover:{border:"#FF6000",
background:"#FF6000"}},{border:"#97C2FC",
background:"#2B7CE9",highlight:{border:"#D2E5FF",
background:"#2B7CE9"},hover:{border:"#D2E5FF",
background:"#2B7CE9"}},{border:"#399605",
background:"#255C03",highlight:{border:"#399605",
background:"#255C03"},hover:{border:"#399605",
background:"#255C03"}},{border:"#B70054",
background:"#FF007E",highlight:{border:"#B70054",
background:"#FF007E"},hover:{border:"#B70054",
background:"#FF007E"}},{border:"#AD85E4",
background:"#7C29F0",highlight:{border:"#D3BDF0",
background:"#7C29F0"},hover:{border:"#D3BDF0",
background:"#7C29F0"}},{border:"#4557FA",
background:"#000EA1",highlight:{border:"#6E6EFD",
background:"#000EA1"},hover:{border:"#6E6EFD",
background:"#000EA1"}},{border:"#FFC0CB",
background:"#FD5A77",highlight:{border:"#FFD1D9",
background:"#FD5A77"},hover:{border:"#FFD1D9",
background:"#FD5A77"}},{border:"#C2FABC",
background:"#74D66A",highlight:{border:"#E6FFE3",
background:"#74D66A"},hover:{border:"#E6FFE3",
background:"#74D66A"}},{border:"#EE0000",
background:"#990000",highlight:{border:"#FF3333",
background:"#BB0000"},hover:{border:"#FF3333",
background:"#BB0000"}
}],this.options={},this.defaultOptions={
useDefaultGroups:!0
},util.extend(this.options,this.defaultOptions)}
return createClass$1(e,[{key:"setOptions",
value:function(e){var t=["useDefaultGroups"]
;if(void 0!==e)for(var o in e)if(e.hasOwnProperty(o)&&-1===indexOf$3(t).call(t,o)){
var n=e[o];this.add(o,n)}}},{key:"clear",
value:function(){
this.groups={},this.groupsArray=[]}},{key:"get",
value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],o=this.groups[e]
;if(void 0===o&&t)if(!1===this.options.useDefaultGroups&&0<this.groupsArray.length){
var n=this.groupIndex%this.groupsArray.length
;this.groupIndex++,(o={}).color=this.groups[this.groupsArray[n]],
this.groups[e]=o}else{
var i=this.defaultIndex%this.defaultGroups.length
;this.defaultIndex++,(o={}).color=this.defaultGroups[i],
this.groups[e]=o}return o}},{key:"add",
value:function(e,t){
return this.groups[e]=t,this.groupsArray.push(e),t
}}]),e}();var defineProperty$2$1=function(e,t,o){
return t in e?defineProperty$3(e,t,{value:o,
enumerable:!0,configurable:!0,writable:!0
}):e[t]=o,e};var arrayWithHoles=function(e){
if(isArray$3(e))return e}
;var iterableToArrayLimit=function(e,t){
var o=[],n=!0,i=!1,a=void 0;try{
for(var s,d=getIterator$2(e);!(n=(s=d.next()).done)&&(o.push(s.value),
!t||o.length!==t);n=!0);}catch(e){i=!0,a=e
}finally{try{n||null==d.return||d.return()
}finally{if(i)throw a}}return o}
;var nonIterableRest=function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance")
};var slicedToArray=function(e,t){
return arrayWithHoles(e)||iterableToArrayLimit(e,t)||nonIterableRest()
},_typeof_1$1=createCommonjsModule$2((function(e){
function t(e){
return(t="function"==typeof symbol$2&&"symbol"==typeof iterator$2?function(e){
return typeof e}:function(e){
return e&&"function"==typeof symbol$2&&e.constructor===symbol$2&&e!==symbol$2.prototype?"symbol":typeof e
})(e)}function o(n){
return e.exports=o="function"==typeof symbol$2&&"symbol"===t(iterator$2)?function(e){
return t(e)}:function(e){
return e&&"function"==typeof symbol$2&&e.constructor===symbol$2&&e!==symbol$2.prototype?"symbol":t(e)
},o(n)}e.exports=o})),ComponentUtil=function(){
var t=Math.cos,o=Math.sin;function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"choosify",
value:function(e,t){
var o=["node","edge","label"],n=!0,i=util.topMost(t,"chosen")
;if("boolean"==typeof i)n=i;else if("object"===_typeof_1$1(i)){
if(-1===indexOf$3(o).call(o,e))throw new Error("choosify: subOption '"+e+"' should be one of '"+o.join("', '")+"'")
;var a=util.topMost(t,["chosen",e])
;("boolean"==typeof a||"function"==typeof a)&&(n=a)
}return n}},{key:"pointInRect",
value:function(e,n,i){
if(0>=e.width||0>=e.height)return!1
;if(void 0!==i){var a={x:n.x-i.x,y:n.y-i.y}
;if(0!==i.angle){var d=-i.angle;n={
x:t(d)*a.x-o(d)*a.y,y:o(d)*a.x+t(d)*a.y}}else n=a}
var r=e.x+e.width,l=e.y+e.width
;return e.left<n.x&&r>n.x&&e.top<n.y&&l>n.y}},{
key:"isValidLabel",value:function(e){
return"string"==typeof e&&""!==e}}]),e
}(),LabelAccumulator=function(){function e(t){
classCallCheck$1(this,e),this.measureText=t,
this.current=0,this.width=0,this.height=0,
this.lines=[]}return createClass$1(e,[{key:"_add",
value:function(e,t){
var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"normal"
;void 0===this.lines[e]&&(this.lines[e]={width:0,
height:0,blocks:[]});var n=t
;(void 0===t||""===t)&&(n=" ")
;var i=this.measureText(n,o),a=assign$2({},values$2(i))
;a.text=t,a.width=i.width,
a.mod=o,(void 0===t||""===t)&&(a.width=0),this.lines[e].blocks.push(a),
this.lines[e].width+=a.width}},{key:"curWidth",
value:function(){var e=this.lines[this.current]
;return void 0===e?0:e.width}},{key:"append",
value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"normal"
;this._add(this.current,e,t)}},{key:"newLine",
value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"normal"
;this._add(this.current,e,t),this.current++}},{
key:"determineLineHeights",value:function(){
for(var e=0;e<this.lines.length;e++){
var t=this.lines[e],o=0
;if(void 0!==t.blocks)for(var i,n=0;n<t.blocks.length;n++)o<(i=t.blocks[n]).height&&(o=i.height)
;t.height=o}}},{key:"determineLabelSize",
value:function(){
for(var n,e=0,t=0,o=0;o<this.lines.length;o++)(n=this.lines[o]).width>e&&(e=n.width),
t+=n.height;this.width=e,this.height=t}},{
key:"removeEmptyBlocks",value:function(){
for(var o,e=[],t=0;t<this.lines.length;t++)if(0!==(o=this.lines[t]).blocks.length){
if(t==this.lines.length-1&&0===o.width)continue
;var n={};assign$2(n,o),n.blocks=[]
;for(var s,i=void 0,a=[],d=0;d<o.blocks.length;d++)0===(s=o.blocks[d]).width?void 0===i&&(i=s):a.push(s)
;0===a.length&&void 0!==i&&a.push(i),
n.blocks=a,e.push(n)}return e}},{key:"finalize",
value:function(){
this.determineLineHeights(),this.determineLabelSize()
;var e=this.removeEmptyBlocks();return{
width:this.width,height:this.height,lines:e}}}]),e
}(),tagPattern={"<b>":/<b>/,"<i>":/<i>/,
"<code>":/<code>/,"</b>":/<\/b>/,"</i>":/<\/i>/,
"</code>":/<\/code>/,"*":/\*/,_:/\_/,"`":/`/,
afterBold:/[^\*]/,afterItal:/[^_]/,
afterMono:/[^`]/},MarkupAccumulator=function(){
function e(t){
classCallCheck$1(this,e),this.text=t,this.bold=!1,this.ital=!1,this.mono=!1,
this.spacing=!1,
this.position=0,this.buffer="",this.modStack=[],this.blocks=[]
}return createClass$1(e,[{key:"mod",
value:function(){
return 0===this.modStack.length?"normal":this.modStack[0]
}},{key:"modName",value:function(){
return 0===this.modStack.length?"normal":"mono"===this.modStack[0]?"mono":this.bold&&this.ital?"boldital":this.bold?"bold":this.ital?"ital":void 0
}},{key:"emitBlock",value:function(){
this.spacing&&(this.add(" "),this.spacing=!1),
0<this.buffer.length&&(this.blocks.push({
text:this.buffer,mod:this.modName()
}),this.buffer="")}},{key:"add",value:function(e){
" "===e&&(this.spacing=!0),this.spacing&&(this.buffer+=" ",
this.spacing=!1)," "!=e&&(this.buffer+=e)}},{
key:"parseWS",value:function(e){
return!!/[ \t]/.test(e)&&(this.mono?this.add(e):this.spacing=!0,
!0)}},{key:"setTag",value:function(e){
this.emitBlock(),this[e]=!0,this.modStack.unshift(e)
}},{key:"unsetTag",value:function(e){
this.emitBlock(),this[e]=!1,this.modStack.shift()}
},{key:"parseStartTag",value:function(e,t){
return!(this.mono||this[e]||!this.match(t)||(this.setTag(e),
0))}},{key:"match",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],o=this.prepareRegExp(e),n=slicedToArray(o,2),i=n[0],a=n[1],d=i.test(this.text.substr(this.position,a))
;return d&&t&&(this.position+=a-1),d}},{
key:"parseEndTag",value:function(e,t,o){
var n=this.mod()===e
;return!(!(n="mono"===e?n&&this.mono:n&&!this.mono)||!this.match(t)||(void 0===o?this.unsetTag(e):(this.position===this.text.length-1||this.match(o,!1))&&this.unsetTag(e),
0))}},{key:"replace",value:function(e,t){
return!!this.match(e)&&(this.add(t),this.position+=length-1,
!0)}},{key:"prepareRegExp",value:function(e){
var t,o;if(e instanceof RegExp)o=e,t=1;else{
var n=tagPattern[e]
;o=void 0===n?new RegExp(e):n,t=e.length}
return[o,t]}}]),e}(),LabelSplitter=function(){
function e(t,o,n,i){var a=this
;classCallCheck$1(this,e),this.ctx=t,this.parent=o,
this.selected=n,this.hover=i,
this.lines=new LabelAccumulator((function(e,o){
if(void 0===e)return 0
;var d=a.parent.getFormattingValues(t,n,i,o),s=0
;""!==e&&(s=a.ctx.measureText(e).width);return{
width:s,values:d}}))}return createClass$1(e,[{
key:"process",value:function(e){
if(!ComponentUtil.isValidLabel(e))return this.lines.finalize()
;var t=this.parent.fontOptions,o=((e=(e=e.replace(/\r\n/g,"\n")).replace(/\r/g,"\n"))+"").split("\n"),n=o.length
;if(t.multi){
for(var d,a=0;a<n;a++)if(void 0!==(d=this.splitBlocks(o[a],t.multi))){
if(0===d.length){this.lines.newLine("");continue}
if(0<t.maxWdt)for(var s=0;s<d.length;s++){
var r=d[s].mod,l=d[s].text
;this.splitStringIntoLines(l,r,!0)
}else for(var c=0;c<d.length;c++){
var u=d[c].mod,p=d[c].text;this.lines.append(p,u)}
this.lines.newLine()}
}else if(0<t.maxWdt)for(var h=0;h<n;h++)this.splitStringIntoLines(o[h]);else for(var m=0;m<n;m++)this.lines.newLine(o[m])
;return this.lines.finalize()}},{
key:"decodeMarkupSystem",value:function(e){
var t="none"
;return"markdown"===e||"md"===e?t="markdown":(!0===e||"html"===e)&&(t="html"),
t}},{key:"splitHtmlBlocks",value:function(e){
for(var t=new MarkupAccumulator(e),o=function(e){
if(/&/.test(e)){
var o=t.replace(t.text,"&lt;","<")||t.replace(t.text,"&amp;","&")
;return o||t.add("&"),!0}return!1
};t.position<t.text.length;){
var n=t.text.charAt(t.position)
;t.parseWS(n)||/</.test(n)&&(t.parseStartTag("bold","<b>")||t.parseStartTag("ital","<i>")||t.parseStartTag("mono","<code>")||t.parseEndTag("bold","</b>")||t.parseEndTag("ital","</i>")||t.parseEndTag("mono","</code>"))||o(n)||t.add(n),
t.position++}return t.emitBlock(),t.blocks}},{
key:"splitMarkdownBlocks",value:function(e){
for(var t=this,o=new MarkupAccumulator(e),n=!0,i=function(e){
return!!/\\/.test(e)&&(o.position<t.text.length+1&&(o.position++,
e=t.text.charAt(o.position),
/ \t/.test(e)?o.spacing=!0:(o.add(e),n=!1)),!0)
};o.position<o.text.length;){
var a=o.text.charAt(o.position)
;o.parseWS(a)||i(a)||(n||o.spacing)&&(o.parseStartTag("bold","*")||o.parseStartTag("ital","_")||o.parseStartTag("mono","`"))||o.parseEndTag("bold","*","afterBold")||o.parseEndTag("ital","_","afterItal")||o.parseEndTag("mono","`","afterMono")||(o.add(a),
n=!1),o.position++}return o.emitBlock(),o.blocks}
},{key:"splitBlocks",value:function(e,t){
var o=this.decodeMarkupSystem(t)
;return"none"===o?[{text:e,mod:"normal"
}]:"markdown"===o?this.splitMarkdownBlocks(e):"html"===o?this.splitHtmlBlocks(e):void 0
}},{key:"overMaxWidth",value:function(e){
var t=this.ctx.measureText(e).width
;return this.lines.curWidth()+t>this.parent.fontOptions.maxWdt
}},{key:"getLongestFit",value:function(e){
for(var t="",o=0;o<e.length;){
var i=t+(""===t?"":" ")+e[o]
;if(this.overMaxWidth(i))break;t=i,o++}return o}
},{key:"getLongestFitWord",value:function(e){
for(var t=0;t<e.length&&!this.overMaxWidth(slice$4(e).call(e,0,t));)t++
;return t}},{key:"splitStringIntoLines",
value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"normal",o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2]
;this.parent.getFormattingValues(this.ctx,this.selected,this.hover,t)
;for(var i,n=(e=(e=e.replace(/^( +)/g,"$1\r")).replace(/([^\r][^ ]*)( +)/g,"$1\r$2\r")).split("\r");0<n.length;)if(0===(i=this.getLongestFit(n))){
var a=n[0],d=this.getLongestFitWord(a)
;this.lines.newLine(slice$4(a).call(a,0,d),t),
n[0]=slice$4(a).call(a,d)}else{var s=i
;" "===n[i-1]?i--:" "===n[s]&&s++
;var r=slice$4(n).call(n,0,i).join("")
;i==n.length&&o?this.lines.append(r,t):this.lines.newLine(r,t),
n=slice$4(n).call(n,s)}}}]),e
}(),multiFontStyle=["bold","ital","boldital","mono"],Label=function(){
var t=Math.max,o=Math.min;function e(t,o){
var n=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2]
;classCallCheck$1(this,e),
this.body=t,this.pointToSelf=!1,this.baseSize=void 0,this.fontOptions={},
this.setOptions(o),this.size={top:0,left:0,
width:0,height:0,yLine:0},this.isEdgeLabel=n}
return createClass$1(e,[{key:"setOptions",
value:function(e){
if(this.elementOptions=e,this.initFontOptions(e.font),ComponentUtil.isValidLabel(e.label)?this.labelDirty=!0:e.label=void 0,
void 0!==e.font&&null!==e.font)if("string"==typeof e.font)this.baseSize=this.fontOptions.size;else if("object"===_typeof_1$1(e.font)){
var t=e.font.size;void 0!==t&&(this.baseSize=t)}}
},{key:"initFontOptions",value:function(t){
var o=this
;return forEach$2(util).call(util,multiFontStyle,(function(e){
o.fontOptions[e]={}
})),e.parseFontString(this.fontOptions,t)?void(this.fontOptions.vadjust=0):void forEach$2(util).call(util,t,(function(e,t){
null!=e&&"object"!==_typeof_1$1(e)&&(o.fontOptions[t]=e)
}))}},{key:"constrain",value:function(e){var t={
constrainWidth:!1,maxWdt:-1,minWdt:-1,
constrainHeight:!1,minHgt:-1,valign:"middle"
},o=util.topMost(e,"widthConstraint")
;if("number"==typeof o)t.maxWdt=+o,t.minWdt=+o;else if("object"===_typeof_1$1(o)){
var n=util.topMost(e,["widthConstraint","maximum"])
;"number"==typeof n&&(t.maxWdt=+n)
;var i=util.topMost(e,["widthConstraint","minimum"])
;"number"==typeof i&&(t.minWdt=+i)}
var a=util.topMost(e,"heightConstraint")
;if("number"==typeof a)t.minHgt=+a;else if("object"===_typeof_1$1(a)){
var d=util.topMost(e,["heightConstraint","minimum"])
;"number"==typeof d&&(t.minHgt=+d)
;var s=util.topMost(e,["heightConstraint","valign"])
;"string"==typeof s&&("top"===s||"bottom"===s)&&(t.valign=s)
}return t}},{key:"update",value:function(e,t){
this.setOptions(e,!0),this.propagateFonts(t),
util.deepExtend(this.fontOptions,this.constrain(t)),
this.fontOptions.chooser=ComponentUtil.choosify("label",t)
}},{key:"adjustSizes",value:function(e){
var t=e?e.right+e.left:0
;this.fontOptions.constrainWidth&&(this.fontOptions.maxWdt-=t,
this.fontOptions.minWdt-=t)
;var o=e?e.top+e.bottom:0
;this.fontOptions.constrainHeight&&(this.fontOptions.minHgt-=o)
}},{key:"addFontOptionsToPile",
value:function(e,t){
for(var o=0;o<t.length;++o)this.addFontToPile(e,t[o])
}},{key:"addFontToPile",value:function(e,t){
if(void 0!==t&&void 0!==t.font&&null!==t.font){
var o=t.font;e.push(o)}}},{key:"getBasicOptions",
value:function(t){
for(var o={},i=0;i<t.length;++i){var a=t[i],d={}
;e.parseFontString(d,a)&&(a=d),forEach$2(util).call(util,a,(function(e,t){
void 0===e||o.hasOwnProperty(t)||(-1===indexOf$3(multiFontStyle).call(multiFontStyle,t)?o[t]=e:o[t]={})
}))}return o}},{key:"getFontOption",
value:function(t,o,i){
for(var d,s,a=0;a<t.length;++a)if((s=t[a]).hasOwnProperty(o)){
if(null==(d=s[o]))continue;var r={}
;if(e.parseFontString(r,d)&&(d=r),d.hasOwnProperty(i))return d[i]
}
if(this.fontOptions.hasOwnProperty(i))return this.fontOptions[i]
;throw new Error("Did not find value for multi-font for property: '"+i+"'")
}},{key:"getFontOptions",value:function(e,t){
for(var d,o={},n=["color","size","face","mod","vadjust"],a=0;a<n.length;++a)o[d=n[a]]=this.getFontOption(e,t,d)
;return o}},{key:"propagateFonts",
value:function(e){var t=this,o=[]
;this.addFontOptionsToPile(o,e),this.fontOptions=this.getBasicOptions(o)
;for(var n=function(e){
var n=multiFontStyle[e],i=t.fontOptions[n],a=t.getFontOptions(o,n)
;forEach$2(util).call(util,a,(function(e,t){i[t]=e
})),i.size=+i.size,i.vadjust=+i.vadjust
},a=0;a<multiFontStyle.length;++a)n(a)}},{
key:"draw",value:function(e,t,o,n,i){
var a=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"middle"
;if(void 0!==this.elementOptions.label){
var d=this.fontOptions.size*this.body.view.scale
;this.elementOptions.label&&d<this.elementOptions.scaling.label.drawThreshold-1||(d>=this.elementOptions.scaling.label.maxVisible&&(d=+this.elementOptions.scaling.label.maxVisible/this.body.view.scale),
this.calculateLabelSize(e,n,i,t,o,a),
this._drawBackground(e),this._drawText(e,t,this.size.yLine,a,d))
}}},{key:"_drawBackground",value:function(e){
if(void 0!==this.fontOptions.background&&"none"!==this.fontOptions.background){
e.fillStyle=this.fontOptions.background
;var t=this.getSize()
;e.fillRect(t.left,t.top,t.width,t.height)}}},{
key:"_drawText",value:function(e,t,o){
var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"middle",a=4<arguments.length?arguments[4]:void 0,d=this._setAlignment(e,t,o,n),s=slicedToArray(d,2)
;t=s[0],
o=s[1],e.textAlign="left",t-=this.size.width/2,this.fontOptions.valign&&this.size.height>this.size.labelHeight&&("top"===this.fontOptions.valign&&(o-=(this.size.height-this.size.labelHeight)/2),
"bottom"===this.fontOptions.valign&&(o+=(this.size.height-this.size.labelHeight)/2))
;for(var l,r=0;r<this.lineCount;r++)if((l=this.lines[r])&&l.blocks){
var c=0
;this.isEdgeLabel||"center"===this.fontOptions.align?c+=(this.size.width-l.width)/2:"right"===this.fontOptions.align&&(c+=this.size.width-l.width)
;for(var p,u=0;u<l.blocks.length;u++){
p=l.blocks[u],e.font=p.font
;var h=this._getColor(p.color,a,p.strokeColor),m=slicedToArray(h,2),g=m[0],f=m[1]
;0<p.strokeWidth&&(e.lineWidth=p.strokeWidth,
e.strokeStyle=f,e.lineJoin="round"),
e.fillStyle=g,0<p.strokeWidth&&e.strokeText(p.text,t+c,o+p.vadjust),
e.fillText(p.text,t+c,o+p.vadjust),c+=p.width}
o+=l.height}}},{key:"_setAlignment",
value:function(e,t,o,n){
return this.isEdgeLabel&&"horizontal"!==this.fontOptions.align&&!1===this.pointToSelf?(t=0,
o=0,
"top"===this.fontOptions.align?(e.textBaseline="alphabetic",o-=4):"bottom"===this.fontOptions.align?(e.textBaseline="hanging",
o+=4):e.textBaseline="middle"):e.textBaseline=n,
[t,o]}},{key:"_getColor",value:function(e,n,i){
var a=e||"#000000",d=i||"#ffffff"
;if(n<=this.elementOptions.scaling.label.drawThreshold){
var s=t(0,o(1,1-(this.elementOptions.scaling.label.drawThreshold-n)))
;a=util.overrideOpacity(a,s),
d=util.overrideOpacity(d,s)}return[a,d]}},{
key:"getTextSize",value:function(e){
var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2]
;return this._processLabel(e,t,o),{
width:this.size.width,height:this.size.height,
lineCount:this.lineCount}}},{key:"getSize",
value:function(){
var e=this.size.left,t=this.size.top-1
;if(this.isEdgeLabel){var o=.5*-this.size.width
;switch(this.fontOptions.align){case"middle":
e=o,t=.5*-this.size.height;break;case"top":
e=o,t=-(this.size.height+2);break;case"bottom":
e=o,t=2}}return{left:e,top:t,
width:this.size.width,height:this.size.height}}},{
key:"calculateLabelSize",value:function(e,t,o){
var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"middle"
;this._processLabel(e,t,o),
this.size.left=n-.5*this.size.width,this.size.top=i-.5*this.size.height,
this.size.yLine=i+.5*(1-this.lineCount)*this.fontOptions.size,
"hanging"===a&&(this.size.top+=.5*this.fontOptions.size,
this.size.top+=4,this.size.yLine+=4)}},{
key:"getFormattingValues",value:function(e,t,o,n){
var i=function(e,t,o){
return"normal"===t?"mod"===o?"":e[o]:void 0===e[t][o]?e[o]:e[t][o]
},a={color:i(this.fontOptions,n,"color"),
size:i(this.fontOptions,n,"size"),
face:i(this.fontOptions,n,"face"),
mod:i(this.fontOptions,n,"mod"),
vadjust:i(this.fontOptions,n,"vadjust"),
strokeWidth:this.fontOptions.strokeWidth,
strokeColor:this.fontOptions.strokeColor}
;(t||o)&&("normal"===n&&!0===this.fontOptions.chooser&&this.elementOptions.labelHighlightBold?a.mod="bold":"function"==typeof this.fontOptions.chooser&&this.fontOptions.chooser(a,this.elementOptions.id,t,o))
;var d=""
;return void 0!==a.mod&&""!==a.mod&&(d+=a.mod+" "),d+=a.size+"px "+a.face,
e.font=d.replace(/"/g,""),
a.font=e.font,a.height=a.size,a}},{
key:"differentState",value:function(e,t){
return e!==this.selectedState||t!==this.hoverState
}},{key:"_processLabelText",
value:function(e,t,o,n){
return new LabelSplitter(e,this,t,o).process(n)}
},{key:"_processLabel",value:function(e,t,o){
if(!1!==this.labelDirty||this.differentState(t,o)){
var n=this._processLabelText(e,t,o,this.elementOptions.label)
;0<this.fontOptions.minWdt&&n.width<this.fontOptions.minWdt&&(n.width=this.fontOptions.minWdt),
this.size.labelHeight=n.height,
0<this.fontOptions.minHgt&&n.height<this.fontOptions.minHgt&&(n.height=this.fontOptions.minHgt),
this.lines=n.lines,
this.lineCount=n.lines.length,this.size.width=n.width,this.size.height=n.height,
this.selectedState=t,
this.hoverState=o,this.labelDirty=!1}}},{
key:"visible",value:function(){
return 0!==this.size.width&&0!==this.size.height&&void 0!==this.elementOptions.label&&!(this.fontOptions.size*this.body.view.scale<this.elementOptions.scaling.label.drawThreshold-1)
}}],[{key:"parseFontString",value:function(e,t){
if(!t||"string"!=typeof t)return!1
;var o=t.split(" ")
;return e.size=+o[0].replace("px",""),e.face=o[1],e.color=o[2],
!0}}]),e}()
;var assertThisInitialized$1=function(e){
if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
;return e}
;var possibleConstructorReturn$1=function(e,t){
return!t||"object"!==_typeof_1$1(t)&&"function"!=typeof t?assertThisInitialized$1(e):t
},getPrototypeOf$1$1=createCommonjsModule$2((function(e){
function t(n){
return e.exports=t=setPrototypeOf$2?getPrototypeOf$2:function(e){
return e.__proto__||getPrototypeOf$2(e)},t(n)}
e.exports=t
})),setPrototypeOf$2$1=createCommonjsModule$2((function(e){
function t(n,o){
return e.exports=t=setPrototypeOf$2||function(e,t){
return e.__proto__=t,e},t(n,o)}e.exports=t}))
;var allOptions,inherits$1=function(e,t){
if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
;e.prototype=create$2(t&&t.prototype,{
constructor:{value:e,writable:!0,configurable:!0}
}),t&&setPrototypeOf$2$1(e,t)
},NodeBase=function(){
var t=Math.cos,o=Math.sin,n=Math.abs,i=Math.min
;function e(t,o,n){
classCallCheck$1(this,e),this.body=o,this.labelModule=n,this.setOptions(t),
this.top=void 0,
this.left=void 0,this.height=void 0,this.width=void 0,this.radius=void 0,
this.margin=void 0,
this.refreshNeeded=!0,this.boundingBox={top:0,
left:0,right:0,bottom:0}}return createClass$1(e,[{
key:"setOptions",value:function(e){this.options=e}
},{key:"_setMargins",value:function(e){
this.margin={},this.options.margin&&("object"==_typeof_1$1(this.options.margin)?(this.margin.top=this.options.margin.top,
this.margin.right=this.options.margin.right,
this.margin.bottom=this.options.margin.bottom,
this.margin.left=this.options.margin.left):(this.margin.top=this.options.margin,
this.margin.right=this.options.margin,
this.margin.bottom=this.options.margin,this.margin.left=this.options.margin)),
e.adjustSizes(this.margin)}},{
key:"_distanceToBorder",value:function(e,a){
var d=this.options.borderWidth
;return this.resize(e),i(n(this.width/2/t(a)),n(this.height/2/o(a)))+d
}},{key:"enableShadow",value:function(e,t){
t.shadow&&(e.shadowColor=t.shadowColor,
e.shadowBlur=t.shadowSize,e.shadowOffsetX=t.shadowX,
e.shadowOffsetY=t.shadowY)}},{key:"disableShadow",
value:function(e,t){
t.shadow&&(e.shadowColor="rgba(0,0,0,0)",e.shadowBlur=0,e.shadowOffsetX=0,
e.shadowOffsetY=0)}},{key:"enableBorderDashes",
value:function(e,t){
if(!1!==t.borderDashes)if(void 0!==e.setLineDash){
var o=t.borderDashes
;!0===o&&(o=[5,15]),e.setLineDash(o)
}else console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),
this.options.shapeProperties.borderDashes=!1,
t.borderDashes=!1}},{key:"disableBorderDashes",
value:function(e,t){
!1!==t.borderDashes&&(void 0===e.setLineDash?(console.warn("setLineDash is not supported in this browser. The dashed borders cannot be used."),
this.options.shapeProperties.borderDashes=!1,
t.borderDashes=!1):e.setLineDash([0]))}},{
key:"needsRefresh",value:function(e,t){
return!0===this.refreshNeeded?(this.refreshNeeded=!1,
!0):void 0===this.width||this.labelModule.differentState(e,t)
}},{key:"initContextForDraw",value:function(e,t){
var o=t.borderWidth/this.body.view.scale
;e.lineWidth=i(this.width,o),e.strokeStyle=t.borderColor,
e.fillStyle=t.color}},{key:"performStroke",
value:function(e,t){
var o=t.borderWidth/this.body.view.scale
;e.save(),0<o&&(this.enableBorderDashes(e,t),
e.stroke(),this.disableBorderDashes(e,t)),
e.restore()}},{key:"performFill",
value:function(e,t){
this.enableShadow(e,t),fill$2(e).call(e),this.disableShadow(e,t),
this.performStroke(e,t)}},{
key:"_addBoundingBoxMargin",value:function(e){
this.boundingBox.left-=e,this.boundingBox.top-=e,
this.boundingBox.bottom+=e,this.boundingBox.right+=e
}},{key:"_updateBoundingBox",
value:function(e,t,o,n,i){
void 0!==o&&this.resize(o,n,i),this.left=e-this.width/2,
this.top=t-this.height/2,
this.boundingBox.left=this.left,this.boundingBox.top=this.top,
this.boundingBox.bottom=this.top+this.height,
this.boundingBox.right=this.left+this.width}},{
key:"updateBoundingBox",value:function(e,t,o,n,i){
this._updateBoundingBox(e,t,o,n,i)}},{
key:"getDimensionsFromLabel",
value:function(e,t,o){
this.textSize=this.labelModule.getTextSize(e,t,o)
;var n=this.textSize.width,i=this.textSize.height
;return 0===n&&(n=14,i=14),{width:n,height:i}}
}]),e}(),Box=function(e){
var o=Math.cos,n=Math.sin,i=Math.abs,a=Math.min
;function t(e,o,n){var i
;return classCallCheck$1(this,t),(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n)))._setMargins(n),
i}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.hover
;if(this.needsRefresh(t,o)){
var n=this.getDimensionsFromLabel(e,t,o)
;this.width=n.width+this.margin.right+this.margin.left,
this.height=n.height+this.margin.top+this.margin.bottom,
this.radius=this.width/2}}},{key:"draw",
value:function(e,t,o,n,i,a){
this.resize(e,n,i),this.left=t-this.width/2,this.top=o-this.height/2,
this.initContextForDraw(e,a),
e.roundRect(this.left,this.top,this.width,this.height,a.borderRadius),
this.performFill(e,a),
this.updateBoundingBox(t,o,e,n,i),this.labelModule.draw(e,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,n,i)
}},{key:"updateBoundingBox",
value:function(e,t,o,n,i){
this._updateBoundingBox(e,t,o,n,i)
;var a=this.options.shapeProperties.borderRadius
;this._addBoundingBoxMargin(a)}},{
key:"distanceToBorder",value:function(e,t){
this.resize(e);var d=this.options.borderWidth
;return a(i(this.width/2/o(t)),i(this.height/2/n(t)))+d
}}]),t}(NodeBase),CircleImageBase=function(e){
function t(e,o,n){var i
;return classCallCheck$1(this,t),(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))).labelOffset=0,
i.selected=!1,i}
return inherits$1(t,e),createClass$1(t,[{
key:"setOptions",value:function(e,t,o){
this.options=e,void 0===t&&void 0===o||this.setImages(t,o)
}},{key:"setImages",value:function(e,t){
t&&this.selected?(this.imageObj=t,this.imageObjAlt=e):(this.imageObj=e,
this.imageObjAlt=t)}},{key:"switchImages",
value:function(e){
var t=e&&!this.selected||!e&&this.selected
;if(this.selected=e,void 0!==this.imageObjAlt&&t){
var o=this.imageObj
;this.imageObj=this.imageObjAlt,this.imageObjAlt=o
}}},{key:"_getImagePadding",value:function(){
var e={top:0,right:0,bottom:0,left:0}
;if(this.options.imagePadding){
var t=this.options.imagePadding
;"object"==_typeof_1$1(t)?(e.top=t.top,e.right=t.right,
e.bottom=t.bottom,e.left=t.left):(e.top=t,
e.right=t,e.bottom=t,e.left=t)}return e}},{
key:"_resizeImage",value:function(){var e,t
;if(!1===this.options.shapeProperties.useImageSize){
var o=1,n=1
;this.imageObj.width&&this.imageObj.height&&(this.imageObj.width>this.imageObj.height?o=this.imageObj.width/this.imageObj.height:n=this.imageObj.height/this.imageObj.width),
e=2*this.options.size*o,t=2*this.options.size*n
}else{var i=this._getImagePadding()
;e=this.imageObj.width+i.left+i.right,t=this.imageObj.height+i.top+i.bottom
}
this.width=e,this.height=t,this.radius=.5*this.width
}},{key:"_drawRawCircle",value:function(e,t,o,n){
this.initContextForDraw(e,n),e.circle(t,o,n.size),
this.performFill(e,n)}},{
key:"_drawImageAtPosition",value:function(e,t){
if(0!=this.imageObj.width){
e.globalAlpha=1,this.enableShadow(e,t);var o=1
;!0===this.options.shapeProperties.interpolation&&(o=this.imageObj.width/this.width/this.body.view.scale)
;var n=this._getImagePadding(),i=this.left+n.left,a=this.top+n.top,d=this.width-n.left-n.right,s=this.height-n.top-n.bottom
;this.imageObj.drawImageAtPosition(e,o,i,a,d,s),
this.disableShadow(e,t)}}},{key:"_drawImageLabel",
value:function(e,t,o,n,i){var d,a=0
;if(void 0!==this.height){a=.5*this.height
;var s=this.labelModule.getTextSize(e,n,i)
;1<=s.lineCount&&(a+=s.height/2)}
d=o+a,this.options.label&&(this.labelOffset=a),
this.labelModule.draw(e,t,d,n,i,"hanging")}}]),t
}(NodeBase),Circle=function(e){var o=Math.max
;function t(e,o,n){var i
;return classCallCheck$1(this,t),(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n)))._setMargins(n),
i}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.hover
;if(this.needsRefresh(t,n)){
var i=this.getDimensionsFromLabel(e,t,n),a=o(i.width+this.margin.right+this.margin.left,i.height+this.margin.top+this.margin.bottom)
;this.options.size=a/2,
this.width=a,this.height=a,this.radius=this.width/2
}}},{key:"draw",value:function(e,t,o,n,i,a){
this.resize(e,n,i),this.left=t-this.width/2,
this.top=o-this.height/2,this._drawRawCircle(e,t,o,a),
this.updateBoundingBox(t,o),
this.labelModule.draw(e,this.left+this.textSize.width/2+this.margin.left,o,n,i)
}},{key:"updateBoundingBox",value:function(e,t){
this.boundingBox.top=t-this.options.size,
this.boundingBox.left=e-this.options.size,
this.boundingBox.right=e+this.options.size,
this.boundingBox.bottom=t+this.options.size}},{
key:"distanceToBorder",value:function(e){
return this.resize(e),.5*this.width}}]),t
}(CircleImageBase),CircularImage=function(e){
var o=Math.max,n=Math.min;function t(e,o,n,i,a){
var d
;return classCallCheck$1(this,t),(d=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))).setImages(i,a),
d}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(){
var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.hover,o=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height
;if(o){var n=2*this.options.size
;return this.width=n,this.height=n,void(this.radius=.5*this.width)
}this.needsRefresh(e,t)&&this._resizeImage()}},{
key:"draw",value:function(e,t,o,n,i,a){
this.switchImages(n),this.resize(),this.left=t-this.width/2,
this.top=o-this.height/2,
this._drawRawCircle(e,t,o,a),e.save(),e.clip(),this._drawImageAtPosition(e,a),
e.restore(),
this._drawImageLabel(e,t,o,n,i),this.updateBoundingBox(t,o)
}},{key:"updateBoundingBox",value:function(e,t){
this.boundingBox.top=t-this.options.size,
this.boundingBox.left=e-this.options.size,
this.boundingBox.right=e+this.options.size,
this.boundingBox.bottom=t+this.options.size,
this.boundingBox.left=n(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=o(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=o(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset)
}},{key:"distanceToBorder",value:function(e){
return this.resize(e),.5*this.width}}]),t
}(CircleImageBase),Database=function(e){
function t(e,o,n){var i
;return classCallCheck$1(this,t),(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n)))._setMargins(n),
i}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e,t,o){
if(this.needsRefresh(t,o)){
var i=this.getDimensionsFromLabel(e,t,o).width+this.margin.right+this.margin.left
;this.width=i,
this.height=i,this.radius=this.width/2}}},{
key:"draw",value:function(e,t,o,n,i,a){
this.resize(e,n,i),this.left=t-this.width/2,
this.top=o-this.height/2,this.initContextForDraw(e,a),
e.database(t-this.width/2,o-this.height/2,this.width,this.height),
this.performFill(e,a),
this.updateBoundingBox(t,o,e,n,i),this.labelModule.draw(e,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,n,i)
}},{key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(NodeBase),ShapeBase=function(e){
var o=Math.max,n=Math.min;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.hover,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{
size:this.options.size}
;if(this.needsRefresh(t,o)){
this.labelModule.getTextSize(e,t,o);var i=2*n.size
;this.width=i,this.height=i,this.radius=.5*this.width
}}},{key:"_drawShape",
value:function(e,t,o,n,i,a,d,s){
if(this.resize(e,a,d,s),this.left=n-this.width/2,
this.top=i-this.height/2,this.initContextForDraw(e,s),
e[t](n,i,s.size),this.performFill(e,s),
void 0!==this.options.icon&&void 0!==this.options.icon.code&&(e.font=(a?"bold ":"")+this.height/2+"px "+(this.options.icon.face||"FontAwesome"),
e.fillStyle=this.options.icon.color||"black",
e.textAlign="center",e.textBaseline="middle",
e.fillText(this.options.icon.code,n,i)),
void 0!==this.options.label){
this.labelModule.calculateLabelSize(e,a,d,n,i,"hanging")
;var r=i+.5*this.height+.5*this.labelModule.size.height
;this.labelModule.draw(e,n,r,a,d,"hanging")}
this.updateBoundingBox(n,i)}},{
key:"updateBoundingBox",value:function(e,t){
this.boundingBox.top=t-this.options.size,
this.boundingBox.left=e-this.options.size,
this.boundingBox.right=e+this.options.size,
this.boundingBox.bottom=t+this.options.size,
void 0!==this.options.label&&0<this.labelModule.size.width&&(this.boundingBox.left=n(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=o(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=o(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height))
}}]),t}(NodeBase),Diamond=function(e){
function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"diamond",4,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(ShapeBase),Dot=function(e){function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"circle",2,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e){
return this.resize(e),this.options.size}}]),t
}(ShapeBase),Ellipse=function(e){
var o=Math.cos,n=Math.sin,i=Math.sqrt
;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.hover
;if(this.needsRefresh(t,o)){
var n=this.getDimensionsFromLabel(e,t,o)
;this.height=2*n.height,this.width=n.width+n.height,
this.radius=.5*this.width}}},{key:"draw",
value:function(e,t,o,n,i,a){
this.resize(e,n,i),this.left=t-.5*this.width,this.top=o-.5*this.height,
this.initContextForDraw(e,a),
e.ellipse_vis(this.left,this.top,this.width,this.height),
this.performFill(e,a),this.updateBoundingBox(t,o,e,n,i),
this.labelModule.draw(e,t,o,n,i)}},{
key:"distanceToBorder",value:function(e,t){
this.resize(e)
;var d=.5*this.width,a=.5*this.height,s=n(t)*d,r=o(t)*a
;return d*a/i(s*s+r*r)}}]),t
}(NodeBase),Icon=function(e){
var o=Math.max,n=Math.min;function t(e,o,n){var i
;return classCallCheck$1(this,t),
(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n)))._setMargins(n),
i}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e,t,o){
this.needsRefresh(t,o)&&(this.iconSize={
width:+this.options.icon.size,
height:+this.options.icon.size
},this.width=this.iconSize.width+this.margin.right+this.margin.left,
this.height=this.iconSize.height+this.margin.top+this.margin.bottom,
this.radius=.5*this.width)}},{key:"draw",
value:function(e,t,o,n,i,a){
this.resize(e,n,i),this.options.icon.size=this.options.icon.size||50,
this.left=t-this.width/2,
this.top=o-this.height/2,this._icon(e,t,o,n,i,a),void 0!==this.options.label&&this.labelModule.draw(e,this.left+this.iconSize.width/2+this.margin.left,o+this.height/2+5,n),
this.updateBoundingBox(t,o)}},{
key:"updateBoundingBox",value:function(e,t){
this.boundingBox.top=t-.5*this.options.icon.size,
this.boundingBox.left=e-.5*this.options.icon.size,
this.boundingBox.right=e+.5*this.options.icon.size,
this.boundingBox.bottom=t+.5*this.options.icon.size,
void 0!==this.options.label&&0<this.labelModule.size.width&&(this.boundingBox.left=n(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=o(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=o(this.boundingBox.bottom,this.boundingBox.bottom+this.labelModule.size.height+5))
}},{key:"_icon",value:function(e,t,o,n,i,a){
var d=+this.options.icon.size
;void 0===this.options.icon.code?console.error("When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally."):(e.font=(n?"bold ":"")+d+"px "+this.options.icon.face,
e.fillStyle=this.options.icon.color||"black",
e.textAlign="center",e.textBaseline="middle",
this.enableShadow(e,a),e.fillText(this.options.icon.code,t,o),
this.disableShadow(e,a))}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(NodeBase),Image$1=function(e){
var o=Math.max,n=Math.min;function t(e,o,n,i,a){
var d
;return classCallCheck$1(this,t),(d=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))).setImages(i,a),
d}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(){
var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.selected,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.hover,o=void 0===this.imageObj.src||void 0===this.imageObj.width||void 0===this.imageObj.height
;if(o){var n=2*this.options.size
;return this.width=n,void(this.height=n)}
this.needsRefresh(e,t)&&this._resizeImage()}},{
key:"draw",value:function(e,t,o,i,a,d){
if(this.switchImages(i),this.resize(),this.left=t-this.width/2,
this.top=o-this.height/2,
!0===this.options.shapeProperties.useBorderWithImage){
var s=this.options.borderWidth,r=this.options.borderWidthSelected||2*this.options.borderWidth,l=(i?r:s)/this.body.view.scale
;e.lineWidth=n(this.width,l),
e.beginPath(),e.strokeStyle=i?this.options.color.highlight.border:a?this.options.color.hover.border:this.options.color.border,
e.fillStyle=i?this.options.color.highlight.background:a?this.options.color.hover.background:this.options.color.background,
e.rect(this.left-.5*e.lineWidth,this.top-.5*e.lineWidth,this.width+e.lineWidth,this.height+e.lineWidth),
fill$2(e).call(e),
this.performStroke(e,d),e.closePath()}
this._drawImageAtPosition(e,d),this._drawImageLabel(e,t,o,i,a),
this.updateBoundingBox(t,o)}},{
key:"updateBoundingBox",value:function(e,t){
this.resize(),this._updateBoundingBox(e,t),
void 0!==this.options.label&&0<this.labelModule.size.width&&(this.boundingBox.left=n(this.boundingBox.left,this.labelModule.size.left),
this.boundingBox.right=o(this.boundingBox.right,this.labelModule.size.left+this.labelModule.size.width),
this.boundingBox.bottom=o(this.boundingBox.bottom,this.boundingBox.bottom+this.labelOffset))
}},{key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(CircleImageBase),Square=function(e){
function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"square",2,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(ShapeBase),Hexagon=function(e){
function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"hexagon",4,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(ShapeBase),Star=function(e){function t(e,o,n){
return classCallCheck$1(this,t),
possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"star",4,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(ShapeBase),Text=function(e){function t(e,o,n){
var i
;return classCallCheck$1(this,t),(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n)))._setMargins(n),
i}return inherits$1(t,e),createClass$1(t,[{
key:"resize",value:function(e,t,o){
this.needsRefresh(t,o)&&(this.textSize=this.labelModule.getTextSize(e,t,o),
this.width=this.textSize.width+this.margin.right+this.margin.left,
this.height=this.textSize.height+this.margin.top+this.margin.bottom,
this.radius=.5*this.width)}},{key:"draw",
value:function(e,t,o,n,i,a){
this.resize(e,n,i),this.left=t-this.width/2,this.top=o-this.height/2,
this.enableShadow(e,a),
this.labelModule.draw(e,this.left+this.textSize.width/2+this.margin.left,this.top+this.textSize.height/2+this.margin.top,n,i),
this.disableShadow(e,a),
this.updateBoundingBox(t,o,e,n,i)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(NodeBase),Triangle=function(e){
function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"triangle",3,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(ShapeBase),TriangleDown=function(e){
function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"draw",value:function(e,t,o,n,i,a){
this._drawShape(e,"triangleDown",3,t,o,n,i,a)}},{
key:"distanceToBorder",value:function(e,t){
return this._distanceToBorder(e,t)}}]),t
}(ShapeBase),errorFound=!1,printStyle="background: #FFeeee; color: #dd0000",Validator=function(){
var t=Math.min;function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"validate",
value:function(t,o,n){errorFound=!1,allOptions=o
;var i=o
;return void 0!==n&&(i=o[n]),e.parse(t,i,[]),errorFound
}},{key:"parse",value:function(t,o,n){
for(var i in t)t.hasOwnProperty(i)&&e.check(i,t,o,n)
}},{key:"check",value:function(t,o,n,i){
if(void 0!==n[t]||void 0!==n.__any__){var a=t,d=!0
;void 0===n[t]&&void 0!==n.__any__&&(a="__any__",
d="object"===e.getType(o[t]));var s=n[a]
;d&&void 0!==s.__type__&&(s=s.__type__),
e.checkFields(t,o,n,a,s,i)
}else e.getSuggestion(t,n,i)}},{key:"checkFields",
value:function(t,o,n,i,a,d){var s=function(o){
console.log("%c"+o+e.printLocation(d,t),printStyle)
},r=e.getType(o[t]),l=a[r]
;void 0===l?void 0===a.any&&(s('Invalid type received for "'+t+'". Expected: '+e.print(keys$6(a))+". Received ["+r+'] "'+o[t]+'"'),
errorFound=!0):"array"===e.getType(l)&&-1===indexOf$3(l).call(l,o[t])?(s('Invalid option detected in "'+t+'". Allowed values are:'+e.print(l)+' not "'+o[t]+'". '),
errorFound=!0):"object"===r&&"__any__"!==i&&(d=util.copyAndExtendArray(d,t),
e.parse(o[t],n[i],d))}},{key:"getType",
value:function(e){var t=_typeof_1$1(e)
;return"object"===t?null===e?"null":e instanceof Boolean?"boolean":e instanceof Number?"number":e instanceof String?"string":isArray$3(e)?"array":e instanceof Date?"date":void 0===e.nodeType?!0===e._isAMomentObject?"moment":"object":"dom":"number"===t?"number":"boolean"===t?"boolean":"string"===t?"string":void 0===t?"undefined":t
}},{key:"getSuggestion",value:function(t,o,n){
var d,i=e.findInOptions(t,o,n,!1),a=e.findInOptions(t,allOptions,[],!0)
;d=void 0===i.indexMatch?a.distance<=4&&i.distance>a.distance?" in "+e.printLocation(i.path,t,"")+"Perhaps it was misplaced? Matching option found at: "+e.printLocation(a.path,a.closestMatch,""):i.distance<=8?'. Did you mean "'+i.closestMatch+'"?'+e.printLocation(i.path,t):". Did you mean one of these: "+e.print(keys$6(o))+e.printLocation(n,t):" in "+e.printLocation(i.path,t,"")+'Perhaps it was incomplete? Did you mean: "'+i.indexMatch+'"?\n\n',
console.log('%cUnknown option detected: "'+t+'"'+d,printStyle),
errorFound=!0}},{key:"findInOptions",
value:function(t,o,n){
var i=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3],a=1e9,d="",s=[],r=t.toLowerCase(),l=void 0
;for(var c in o){var _context49,u=void 0
;if(void 0!==o[c].__type__&&!0===i){
var p=e.findInOptions(t,o[c],util.copyAndExtendArray(n,c))
;a>p.distance&&(d=p.closestMatch,
s=p.path,a=p.distance,l=p.indexMatch)
}else-1!==indexOf$3(_context49=c.toLowerCase()).call(_context49,r)&&(l=c),
a>(u=e.levenshteinDistance(t,c))&&(d=c,
s=util.copyArray(n),a=u)}return{closestMatch:d,
path:s,distance:a,indexMatch:l}}},{
key:"printLocation",value:function(e,t){
for(var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"Problem value found at: \n",n="\n\n"+o+"options = {\n",a=0;a<e.length;a++){
for(var d=0;d<a+1;d++)n+="  ";n+=e[a]+": {\n"}
for(var s=0;s<e.length+1;s++)n+="  ";n+=t+"\n"
;for(var r=0;r<e.length+1;r++){
for(var l=0;l<e.length-r;l++)n+="  ";n+="}\n"}
return n+"\n\n"}},{key:"print",value:function(e){
return stringify$2(e).replace(/(\")|(\[)|(\])|(,"__type__")/g,"").replace(/(\,)/g,", ")
}},{key:"levenshteinDistance",value:function(e,o){
if(0===e.length)return o.length
;if(0===o.length)return e.length;var a,d,n=[]
;for(a=0;a<=o.length;a++)n[a]=[a]
;for(d=0;d<=e.length;d++)n[0][d]=d
;for(a=1;a<=o.length;a++)for(d=1;d<=e.length;d++)n[a][d]=o.charAt(a-1)==e.charAt(d-1)?n[a-1][d-1]:t(n[a-1][d-1]+1,t(n[a][d-1]+1,n[a-1][d]+1))
;return n[o.length][e.length]}}]),e}()
;function ownKeys$2(e,t){var o=keys$6(e)
;if(getOwnPropertySymbols$2){
var n=getOwnPropertySymbols$2(e)
;t&&(n=filter$2(n).call(n,(function(t){
return getOwnPropertyDescriptor$3(e,t).enumerable
}))),o.push.apply(o,n)}return o}
var Node=function(){function e(t,o,n,i,a,d){
classCallCheck$1(this,e),this.options=util.bridgeObject(a),
this.globalOptions=a,
this.defaultOptions=d,this.body=o,this.edges=[],this.id=void 0,
this.imagelist=n,
this.grouplist=i,this.x=void 0,this.y=void 0,this.baseSize=this.options.size,
this.baseFontSize=this.options.font.size,
this.predefinedPosition=!1,this.selected=!1,
this.hover=!1,this.labelModule=new Label(this.body,this.options,!1),
this.setOptions(t)}return createClass$1(e,[{
key:"attachEdge",value:function(e){var _context52
;-1===indexOf$3(_context52=this.edges).call(_context52,e)&&this.edges.push(e)
}},{key:"detachEdge",value:function(e){
var _context53,_context54,t=indexOf$3(_context53=this.edges).call(_context53,e)
;-1!=t&&splice$2(_context54=this.edges).call(_context54,t,1)
}},{key:"setOptions",value:function(t){
var o=this.options.shape;if(t){
if(void 0!==t.color&&(this._localColor=t.color),void 0!==t.id&&(this.id=t.id),
void 0===this.id)throw new Error("Node must have an id")
;e.checkMass(t,this.id),
void 0!==t.x&&(null===t.x?(this.x=void 0,this.predefinedPosition=!1):(this.x=_parseInt$3(t.x),
this.predefinedPosition=!0)),
void 0!==t.y&&(null===t.y?(this.y=void 0,this.predefinedPosition=!1):(this.y=_parseInt$3(t.y),
this.predefinedPosition=!0)),
void 0!==t.size&&(this.baseSize=t.size),void 0!==t.value&&(t.value=_parseFloat$3(t.value)),
e.parseOptions(this.options,t,!0,this.globalOptions,this.grouplist)
;var n=[t,this.options,this.defaultOptions]
;return this.chooser=ComponentUtil.choosify("node",n),
this._load_images(),this.updateLabelModule(t),
this.updateShape(o),void 0!==t.hidden||void 0!==t.physics
}}},{key:"_load_images",value:function(){
if(("circularImage"===this.options.shape||"image"===this.options.shape)&&void 0===this.options.image)throw new Error("Option image must be defined for node type '"+this.options.shape+"'")
;if(void 0!==this.options.image){
if(void 0===this.imagelist)throw new Error("Internal Error: No images provided")
;if("string"==typeof this.options.image)this.imageObj=this.imagelist.load(this.options.image,this.options.brokenImage,this.id);else{
if(void 0===this.options.image.unselected)throw new Error("No unselected image provided")
;this.imageObj=this.imagelist.load(this.options.image.unselected,this.options.brokenImage,this.id),
this.imageObjAlt=void 0===this.options.image.selected?void 0:this.imagelist.load(this.options.image.selected,this.options.brokenImage,this.id)
}}}},{key:"getFormattingValues",value:function(){
var e={color:this.options.color.background,
borderWidth:this.options.borderWidth,
borderColor:this.options.color.border,
size:this.options.size,
borderDashes:this.options.shapeProperties.borderDashes,
borderRadius:this.options.shapeProperties.borderRadius,
shadow:this.options.shadow.enabled,
shadowColor:this.options.shadow.color,
shadowSize:this.options.shadow.size,
shadowX:this.options.shadow.x,
shadowY:this.options.shadow.y}
;return this.selected||this.hover?!0===this.chooser?this.selected?(e.borderWidth*=2,
e.color=this.options.color.highlight.background,
e.borderColor=this.options.color.highlight.border,
e.shadow=this.options.shadow.enabled):this.hover&&(e.color=this.options.color.hover.background,
e.borderColor=this.options.color.hover.border,
e.shadow=this.options.shadow.enabled):"function"==typeof this.chooser&&(this.chooser(e,this.options.id,this.selected,this.hover),
!1===e.shadow&&(e.shadowColor!==this.options.shadow.color||e.shadowSize!==this.options.shadow.size||e.shadowX!==this.options.shadow.x||e.shadowY!==this.options.shadow.y)&&(e.shadow=!0)):e.shadow=this.options.shadow.enabled,
e}},{key:"updateLabelModule",value:function(t){
(void 0===this.options.label||null===this.options.label)&&(this.options.label=""),
e.updateGroupOptions(this.options,function(e){
for(var o,t=1;t<arguments.length;t++){
var _context50,_context51
;o=null==arguments[t]?{}:arguments[t],t%2?forEach$2(_context50=ownKeys$2(o,!0)).call(_context50,(function(t){
defineProperty$2$1(e,t,o[t])
})):getOwnPropertyDescriptors$2?defineProperties$1(e,getOwnPropertyDescriptors$2(o)):forEach$2(_context51=ownKeys$2(o)).call(_context51,(function(t){
defineProperty$3(e,t,getOwnPropertyDescriptor$3(o,t))
}))}return e}({},t,{
color:t&&t.color||this._localColor||void 0
}),this.grouplist)
;var o=this.grouplist.get(this.options.group,!1),n=[t,this.options,o,this.globalOptions,this.defaultOptions]
;this.labelModule.update(this.options,n),
void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)
}},{key:"updateShape",value:function(e){
if(e===this.options.shape&&this.shape)this.shape.setOptions(this.options,this.imageObj,this.imageObjAlt);else switch(this.options.shape){
case"box":
this.shape=new Box(this.options,this.body,this.labelModule)
;break;case"circle":
this.shape=new Circle(this.options,this.body,this.labelModule)
;break;case"circularImage":
this.shape=new CircularImage(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt)
;break;case"database":
this.shape=new Database(this.options,this.body,this.labelModule)
;break;case"diamond":
this.shape=new Diamond(this.options,this.body,this.labelModule)
;break;case"dot":
this.shape=new Dot(this.options,this.body,this.labelModule)
;break;case"ellipse":
this.shape=new Ellipse(this.options,this.body,this.labelModule)
;break;case"icon":
this.shape=new Icon(this.options,this.body,this.labelModule)
;break;case"image":
this.shape=new Image$1(this.options,this.body,this.labelModule,this.imageObj,this.imageObjAlt)
;break;case"square":
this.shape=new Square(this.options,this.body,this.labelModule)
;break;case"hexagon":
this.shape=new Hexagon(this.options,this.body,this.labelModule)
;break;case"star":
this.shape=new Star(this.options,this.body,this.labelModule)
;break;case"text":
this.shape=new Text(this.options,this.body,this.labelModule)
;break;case"triangle":
this.shape=new Triangle(this.options,this.body,this.labelModule)
;break;case"triangleDown":
this.shape=new TriangleDown(this.options,this.body,this.labelModule)
;break;default:
this.shape=new Ellipse(this.options,this.body,this.labelModule)
}this.needsRefresh()}},{key:"select",
value:function(){
this.selected=!0,this.needsRefresh()}},{
key:"unselect",value:function(){
this.selected=!1,this.needsRefresh()}},{
key:"needsRefresh",value:function(){
this.shape.refreshNeeded=!0}},{key:"getTitle",
value:function(){return this.options.title}},{
key:"distanceToBorder",value:function(e,t){
return this.shape.distanceToBorder(e,t)}},{
key:"isFixed",value:function(){
return this.options.fixed.x&&this.options.fixed.y}
},{key:"isSelected",value:function(){
return this.selected}},{key:"getValue",
value:function(){return this.options.value}},{
key:"getLabelSize",value:function(){
return this.labelModule.size()}},{
key:"setValueRange",value:function(e,t,o){
if(void 0!==this.options.value){
var n=this.options.scaling.customScalingFunction(e,t,o,this.options.value),i=this.options.scaling.max-this.options.scaling.min
;if(!0===this.options.scaling.label.enabled){
var a=this.options.scaling.label.max-this.options.scaling.label.min
;this.options.font.size=this.options.scaling.label.min+n*a
}this.options.size=this.options.scaling.min+n*i
}else this.options.size=this.baseSize,
this.options.font.size=this.baseFontSize
;this.updateLabelModule()}},{key:"draw",
value:function(e){var t=this.getFormattingValues()
;this.shape.draw(e,this.x,this.y,this.selected,this.hover,t)
}},{key:"updateBoundingBox",value:function(e){
this.shape.updateBoundingBox(this.x,this.y,e)}},{
key:"resize",value:function(e){
var t=this.getFormattingValues()
;this.shape.resize(e,this.selected,this.hover,t)}
},{key:"getItemsOnPoint",value:function(e){
var t=[]
;return this.labelModule.visible()&&ComponentUtil.pointInRect(this.labelModule.getSize(),e)&&t.push({
nodeId:this.id,labelId:0
}),ComponentUtil.pointInRect(this.shape.boundingBox,e)&&t.push({
nodeId:this.id}),t}},{key:"isOverlappingWith",
value:function(e){
return this.shape.left<e.right&&this.shape.left+this.shape.width>e.left&&this.shape.top<e.bottom&&this.shape.top+this.shape.height>e.top
}},{key:"isBoundingBoxOverlappingWith",
value:function(e){
return this.shape.boundingBox.left<e.right&&this.shape.boundingBox.right>e.left&&this.shape.boundingBox.top<e.bottom&&this.shape.boundingBox.bottom>e.top
}}],[{key:"updateGroupOptions",
value:function(e,t,o){if(void 0!==o){var n=e.group
;if(void 0!==t&&void 0!==t.group&&n!==t.group)throw new Error("updateGroupOptions: group values in options don't match.")
;if("number"==typeof n||"string"==typeof n&&""!=n){
var i=o.get(n),a=["font"]
;void 0!==t&&void 0!==t.color&&null!=t.color&&a.push("color"),
util.selectiveNotDeepExtend(a,e,i),
e.color=util.parseColor(e.color)}}}},{
key:"parseOptions",value:function(t,o){
var n=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},a=4<arguments.length?arguments[4]:void 0
;if(util.selectiveNotDeepExtend(["color","fixed","shadow"],t,o,n),
e.checkMass(o),
util.mergeOptions(t,o,"shadow",i),void 0!==o.color&&null!==o.color){
var d=util.parseColor(o.color)
;util.fillIfDefined(t.color,d)
}else!0===n&&null===o.color&&(t.color=util.bridgeObject(i.color))
;void 0!==o.fixed&&null!==o.fixed&&("boolean"==typeof o.fixed?(t.fixed.x=o.fixed,
t.fixed.y=o.fixed):(void 0!==o.fixed.x&&"boolean"==typeof o.fixed.x&&(t.fixed.x=o.fixed.x),
void 0!==o.fixed.y&&"boolean"==typeof o.fixed.y&&(t.fixed.y=o.fixed.y))),
!0===n&&null===o.font&&(t.font=util.bridgeObject(i.font)),
e.updateGroupOptions(t,o,a),
void 0!==o.scaling&&util.mergeOptions(t.scaling,o.scaling,"label",i.scaling)
}},{key:"checkMass",value:function(e,t){
if(void 0!==e.mass&&0>=e.mass){var o=""
;void 0!==t&&(o=" in node id: "+t),console.log("%cNegative or zero mass disallowed"+o+", setting mass to 1.",printStyle),
e.mass=1}}}]),e}(),NodesHandler=function(){
var t=Math.round,o=Math.max;function e(t,n,i,a){
var _context55,d=this
;if(classCallCheck$1(this,e),this.body=t,this.images=n,this.groups=i,
this.layoutEngine=a,
this.body.functions.createNode=bind$2(_context55=this.create).call(_context55,this),
this.nodesListeners={add:function(e,t){
d.add(t.items)},update:function(e,t){
d.update(t.items,t.data,t.oldData)},
remove:function(e,t){d.remove(t.items)}
},this.defaultOptions={borderWidth:1,
borderWidthSelected:2,brokenImage:void 0,color:{
border:"#2B7CE9",background:"#97C2FC",highlight:{
border:"#2B7CE9",background:"#D2E5FF"},hover:{
border:"#2B7CE9",background:"#D2E5FF"}},fixed:{
x:!1,y:!1},font:{color:"#343434",size:14,
face:"arial",background:"none",strokeWidth:0,
strokeColor:"#ffffff",align:"center",vadjust:0,
multi:!1,bold:{mod:"bold"},boldital:{
mod:"bold italic"},ital:{mod:"italic"},mono:{
mod:"",size:15,face:"monospace",vadjust:2}},
group:void 0,hidden:!1,icon:{face:"FontAwesome",
code:void 0,size:50,color:"#2B7CE9"},image:void 0,
imagePadding:{top:0,right:0,bottom:0,left:0},
label:void 0,labelHighlightBold:!0,level:void 0,
margin:{top:5,right:5,bottom:5,left:5},mass:1,
physics:!0,scaling:{min:10,max:30,label:{
enabled:!1,min:14,max:30,maxVisible:30,
drawThreshold:5},
customScalingFunction:function(e,t,n,i){
return t===e?.5:o(0,1/(t-e)*(i-e))}},shadow:{
enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5
},shape:"ellipse",shapeProperties:{
borderDashes:!1,borderRadius:6,interpolation:!0,
useImageSize:!1,useBorderWithImage:!1},size:25,
title:void 0,value:void 0,x:void 0,y:void 0
},0>=this.defaultOptions.mass)throw"Internal error: mass in defaultOptions of NodesHandler may not be zero or negative"
;this.options=util.bridgeObject(this.defaultOptions),
this.bindEventListeners()}
return createClass$1(e,[{key:"bindEventListeners",
value:function(){var _context56,_context57,e=this
;this.body.emitter.on("refreshNodes",bind$2(_context56=this.refresh).call(_context56,this)),
this.body.emitter.on("refresh",bind$2(_context57=this.refresh).call(_context57,this)),
this.body.emitter.on("destroy",(function(){
forEach$2(util).call(util,e.nodesListeners,(function(t,o){
e.body.data.nodes&&e.body.data.nodes.off(o,t)
})),delete e.body.functions.createNode,
delete e.nodesListeners.add,delete e.nodesListeners.update,
delete e.nodesListeners.remove,
delete e.nodesListeners}))}},{key:"setOptions",
value:function(e){if(void 0!==e){
if(Node.parseOptions(this.options,e),void 0!==e.shape)for(var t in this.body.nodes)this.body.nodes.hasOwnProperty(t)&&this.body.nodes[t].updateShape()
;if(void 0!==e.font)for(var o in this.body.nodes)this.body.nodes.hasOwnProperty(o)&&(this.body.nodes[o].updateLabelModule(),
this.body.nodes[o].needsRefresh())
;if(void 0!==e.size)for(var n in this.body.nodes)this.body.nodes.hasOwnProperty(n)&&this.body.nodes[n].needsRefresh()
;(void 0!==e.hidden||void 0!==e.physics)&&this.body.emitter.emit("_dataChanged")
}}},{key:"setData",value:function(e){
var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=this.body.data.nodes
;if(e instanceof DataSet||e instanceof DataView)this.body.data.nodes=e;else if(isArray$3(e))this.body.data.nodes=new DataSet,
this.body.data.nodes.add(e);else{
if(e)throw new TypeError("Array or DataSet expected")
;this.body.data.nodes=new DataSet}
if(o&&forEach$2(util).call(util,this.nodesListeners,(function(e,t){
o.off(t,e)
})),this.body.nodes={},this.body.data.nodes){
var n=this
;forEach$2(util).call(util,this.nodesListeners,(function(e,t){
n.body.data.nodes.on(t,e)}))
;var i=this.body.data.nodes.getIds()
;this.add(i,!0)}
!1===t&&this.body.emitter.emit("_dataChanged")}},{
key:"add",value:function(e){
for(var a,t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=[],n=0;n<e.length;n++){
a=e[n]
;var d=this.body.data.nodes.get(a),s=this.create(d)
;o.push(s),this.body.nodes[a]=s}
this.layoutEngine.positionInitially(o),!1===t&&this.body.emitter.emit("_dataChanged")
}},{key:"update",value:function(e,t,o){
for(var n=this.body.nodes,a=!1,d=0;d<e.length;d++){
var s=e[d],r=n[s],l=t[d]
;void 0===r?(a=!0,r=this.create(l),n[s]=r):r.setOptions(l)&&(a=!0)
}
a||void 0===o||(a=some$2(t).call(t,(function(e,t){
var n=o[t];return n&&n.level!==e.level
}))),!0===a?this.body.emitter.emit("_dataChanged"):this.body.emitter.emit("_dataUpdated")
}},{key:"remove",value:function(e){
for(var t=this.body.nodes,o=0;o<e.length;o++)delete t[e[o]]
;this.body.emitter.emit("_dataChanged")}},{
key:"create",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Node
;return new t(e,this.body,this.images,this.groups,this.options,this.defaultOptions)
}},{key:"refresh",value:function(){
var e=this,t=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0]
;forEach$2(util).call(util,this.body.nodes,(function(o,n){
var i=e.body.data.nodes.get(n)
;void 0!==i&&(!0===t&&o.setOptions({x:null,y:null
}),o.setOptions({fixed:!1}),o.setOptions(i))}))}
},{key:"getPositions",value:function(e){var o={}
;if(void 0===e)for(var a,n=0;n<this.body.nodeIndices.length;n++)a=this.body.nodes[this.body.nodeIndices[n]],
o[this.body.nodeIndices[n]]={x:t(a.x),y:t(a.y)
};else if(!0===isArray$3(e)){
for(var d=0;d<e.length;d++)if(void 0!==this.body.nodes[e[d]]){
var s=this.body.nodes[e[d]];o[e[d]]={x:t(s.x),
y:t(s.y)}}}else if(void 0!==this.body.nodes[e]){
var r=this.body.nodes[e];o[e]={x:t(r.x),y:t(r.y)}}
return o}},{key:"storePositions",value:function(){
var e=[],o=this.body.data.nodes.getDataSet()
;for(var n in o._data)if(o._data.hasOwnProperty(n)){
var i=this.body.nodes[n]
;(o._data[n].x!=t(i.x)||o._data[n].y!=t(i.y))&&e.push({
id:i.id,x:t(i.x),y:t(i.y)})}o.update(e)}},{
key:"getBoundingBox",value:function(e){
if(void 0!==this.body.nodes[e])return this.body.nodes[e].shape.boundingBox
}},{key:"getConnectedNodes",value:function(e,t){
var o=[]
;if(void 0!==this.body.nodes[e])for(var s,n=this.body.nodes[e],a={},d=0;d<n.edges.length;d++)s=n.edges[d],
"to"!==t&&s.toId==n.id?void 0===a[s.fromId]&&(o.push(s.fromId),
a[s.fromId]=!0):"from"!==t&&s.fromId==n.id&&void 0===a[s.toId]&&(o.push(s.toId),
a[s.toId]=!0);return o}},{key:"getConnectedEdges",
value:function(e){var t=[]
;if(void 0!==this.body.nodes[e])for(var o=this.body.nodes[e],n=0;n<o.edges.length;n++)t.push(o.edges[n].id);else console.log("NodeId provided for getConnectedEdges does not exist. Provided: ",e)
;return t}},{key:"moveNode",value:function(e,t,o){
var n=this
;void 0===this.body.nodes[e]?console.log("Node id supplied to moveNode does not exist. Provided: ",e):(this.body.nodes[e].x=+t,
this.body.nodes[e].y=+o,setTimeout$1((function(){
n.body.emitter.emit("startSimulation")}),0))}}]),e
}();var superPropBase=function(e,t){
for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=getPrototypeOf$1$1(e)););
return e
},get$5=createCommonjsModule$2((function(e){
function t(o,n,i){
return e.exports=t="undefined"!=typeof Reflect&&get$3?get$3:function(e,_t2,o){
var n=superPropBase(e,_t2);if(n){
var i=getOwnPropertyDescriptor$3(n,_t2)
;return i.get?i.get.call(o):i.value}},t(o,n,i||o)}
e.exports=t})),EndPoint=function(){
var t=Math.cos,o=Math.sin;function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"transform",
value:function(e,n){isArray$3(e)||(e=[e])
;for(var a=n.point.x,d=n.point.y,s=n.angle,r=n.length,l=0;l<e.length;++l){
var c=e[l],u=c.x*t(s)-c.y*o(s),p=c.x*o(s)+c.y*t(s)
;c.x=a+r*u,c.y=d+r*p}}},{key:"drawPath",
value:function(e,t){
e.beginPath(),e.moveTo(t[0].x,t[0].y)
;for(var o=1;o<t.length;++o)e.lineTo(t[o].x,t[o].y)
;e.closePath()}}]),e}(),Arrow=function(e){
function t(){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).apply(this,arguments))
}return inherits$1(t,e),createClass$1(t,null,[{
key:"draw",value:function(e,t){var o=[{x:0,y:0},{
x:-1,y:.3},{x:-.9,y:0},{x:-1,y:-.3}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),t}(EndPoint),Crow=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:-1,y:0},{x:0,y:.3},{
x:-.4,y:0},{x:0,y:-.3}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),Curve=function(){var t=Math.PI
;function e(){classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,o){var n={x:-.4,y:0}
;EndPoint.transform(n,o),e.strokeStyle=e.fillStyle,
e.fillStyle="rgba(0, 0, 0, 0)"
;var i=t,a=o.angle-i/2,d=o.angle+i/2
;e.beginPath(),e.arc(n.x,n.y,.4*o.length,a,d,!1),
e.stroke()}}]),e}(),InvertedCurve=function(){
var t=Math.PI;function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,o){var n={x:-.3,y:0}
;EndPoint.transform(n,o),e.strokeStyle=e.fillStyle,
e.fillStyle="rgba(0, 0, 0, 0)"
;var i=t,a=o.angle+i/2,d=o.angle+3*i/2
;e.beginPath(),e.arc(n.x,n.y,.4*o.length,a,d,!1),
e.stroke()}}]),e}(),Triangle$1=function(){
function e(){classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:.02,y:0},{x:-1,y:.3
},{x:-1,y:-.3}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),InvertedTriangle=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:0,y:.3},{x:0,y:-.3
},{x:-1,y:0}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),Circle$1=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o={x:-.4,y:0}
;EndPoint.transform(o,t),e.circle(o.x,o.y,.4*t.length)
}}]),e}(),Bar=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:0,y:.5},{x:0,y:-.5
},{x:-.15,y:-.5},{x:-.15,y:.5}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),Box$1=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:0,y:.3},{x:0,y:-.3
},{x:-.6,y:-.3},{x:-.6,y:.3}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),Diamond$1=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:0,y:0},{x:-.5,y:-.3
},{x:-1,y:0},{x:-.5,y:.3}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),Vee=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o=[{x:-1,y:.3},{x:-.5,y:0
},{x:-1,y:-.3},{x:0,y:0}]
;EndPoint.transform(o,t),EndPoint.drawPath(e,o)}
}]),e}(),EndPoints=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"draw",
value:function(e,t){var o
;switch(t.type&&(o=t.type.toLowerCase()),o){
case"circle":Circle$1.draw(e,t);break;case"box":
Box$1.draw(e,t);break;case"crow":Crow.draw(e,t)
;break;case"curve":Curve.draw(e,t);break
;case"diamond":Diamond$1.draw(e,t);break
;case"inv_curve":InvertedCurve.draw(e,t);break
;case"triangle":Triangle$1.draw(e,t);break
;case"inv_triangle":InvertedTriangle.draw(e,t)
;break;case"bar":Bar.draw(e,t);break;case"vee":
Vee.draw(e,t);break;case"arrow":default:
Arrow.draw(e,t)}}}]),e}();function ownKeys$3(e,t){
var o=keys$6(e);if(getOwnPropertySymbols$2){
var n=getOwnPropertySymbols$2(e)
;t&&(n=filter$2(n).call(n,(function(t){
return getOwnPropertyDescriptor$3(e,t).enumerable
}))),o.push.apply(o,n)}return o}
var EdgeBase=function(){
var t=Math.atan2,o=Math.cos,n=Math.sin,i=Math.sqrt,a=Math.PI,d=Math.pow,s=Math.max,r=Math.abs
;function e(t,o,n){
classCallCheck$1(this,e),this._body=o,this._labelModule=n,this.color={},
this.colorDirty=!0,
this.hoverWidth=1.5,this.selectionWidth=2,this.setOptions(t),
this.fromPoint=this.from,this.toPoint=this.to}
return createClass$1(e,[{key:"connect",
value:function(){
this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to]
}},{key:"cleanup",value:function(){return!1}},{
key:"setOptions",value:function(e){
this.options=e,this.from=this._body.nodes[this.options.from],
this.to=this._body.nodes[this.options.to],
this.id=this.options.id}},{key:"drawLine",
value:function(e,t){
var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:this.getViaNode()
;e.strokeStyle=this.getColor(e,t),
e.lineWidth=t.width,!1===t.dashes?this._drawLine(e,t,o):this._drawDashedLine(e,t,o)
}},{key:"_drawLine",value:function(e,t,o,n,i){
if(this.from!=this.to)this._line(e,t,o,n,i);else{
var a=this._getCircleData(e),d=slicedToArray(a,3),s=d[0],r=d[1],l=d[2]
;this._circle(e,t,s,r,l)}}},{
key:"_drawDashedLine",value:function(e,t,o){
e.lineCap="round"
;var n=isArray$3(t.dashes)?t.dashes:[5,5]
;if(void 0!==e.setLineDash){
if(e.save(),e.setLineDash(n),e.lineDashOffset=0,this.from!=this.to)this._line(e,t,o);else{
var i=this._getCircleData(e),a=slicedToArray(i,3),d=a[0],s=a[1],r=a[2]
;this._circle(e,t,d,s,r)}
e.setLineDash([0]),e.lineDashOffset=0,e.restore()
}else{
if(this.from!=this.to)e.dashedLine(this.from.x,this.from.y,this.to.x,this.to.y,n);else{
var l=this._getCircleData(e),c=slicedToArray(l,3),u=c[0],p=c[1],h=c[2]
;this._circle(e,t,u,p,h)}
this.enableShadow(e,t),e.stroke(),this.disableShadow(e,t)
}}},{key:"findBorderPosition",
value:function(e,t,o){
return this.from==this.to?this._findBorderPositionCircle(e,t,o):this._findBorderPosition(e,t,o)
}},{key:"findBorderPositions",value:function(e){
var _context60;if(this.from!=this.to)return{
from:this._findBorderPosition(this.from,e),
to:this._findBorderPosition(this.to,e)}
;var t=slice$4(_context60=this._getCircleData(e)).call(_context60,0,2),o=slicedToArray(t,2),n=o[0],i=o[1]
;return{
from:this._findBorderPositionCircle(this.from,e,{
x:n,y:i,low:.25,high:.6,direction:-1}),
to:this._findBorderPositionCircle(this.from,e,{
x:n,y:i,low:.6,high:.8,direction:1})}}},{
key:"_getCircleData",value:function(e){
var n,i,t=this.from,o=this.options.selfReferenceSize
;return void 0!==e&&void 0===t.shape.width&&t.shape.resize(e),
t.shape.width>t.shape.height?(n=t.x+.5*t.shape.width,
i=t.y-o):(n=t.x+o,i=t.y-.5*t.shape.height),[n,i,o]
}},{key:"_pointOnCircle",value:function(e,t,i,d){
var s=2*d*a;return{x:e+i*o(s),y:t-i*n(s)}}},{
key:"_findBorderPositionCircle",
value:function(e,o,n){
var g,a=n.x,s=n.y,l=n.low,c=n.high,u=n.direction,p=this.options.selfReferenceSize,h=.5*(l+c),m=0
;do{h=.5*(l+c),g=this._pointOnCircle(a,s,p,h)
;var y=t(e.y-g.y,e.x-g.x),_=e.distanceToBorder(o,y)-i(d(g.x-e.x,2)+d(g.y-e.y,2))
;if(r(_)<.05)break;0<_?0<u?l=h:c=h:0<u?c=h:l=h,++m
}while(l<=c&&m<10);return function(e){
for(var o,t=1;t<arguments.length;t++){
var _context58,_context59
;o=null==arguments[t]?{}:arguments[t],t%2?forEach$2(_context58=ownKeys$3(o,!0)).call(_context58,(function(t){
defineProperty$2$1(e,t,o[t])
})):getOwnPropertyDescriptors$2?defineProperties$1(e,getOwnPropertyDescriptors$2(o)):forEach$2(_context59=ownKeys$3(o)).call(_context59,(function(t){
defineProperty$3(e,t,getOwnPropertyDescriptor$3(o,t))
}))}return e}({},g,{t:h})}},{key:"getLineWidth",
value:function(e,t){
return s(!0===e?this.selectionWidth:!0===t?this.hoverWidth:this.options.width,.3/this._body.view.scale)
}},{key:"getColor",value:function(e,t){
if(!1!==t.inheritsColor){
if("both"===t.inheritsColor&&this.from.id!==this.to.id){
var o=e.createLinearGradient(this.from.x,this.from.y,this.to.x,this.to.y),n=this.from.options.color.highlight.border,i=this.to.options.color.highlight.border
;return!1===this.from.selected&&!1===this.to.selected?(n=overrideOpacity(this.from.options.color.border,t.opacity),
i=overrideOpacity(this.to.options.color.border,t.opacity)):!0===this.from.selected&&!1===this.to.selected?i=this.to.options.color.border:!1===this.from.selected&&!0===this.to.selected&&(n=this.from.options.color.border),
o.addColorStop(0,n),o.addColorStop(1,i),o}
return"to"===t.inheritsColor?overrideOpacity(this.to.options.color.border,t.opacity):overrideOpacity(this.from.options.color.border,t.opacity)
}return overrideOpacity(t.color,t.opacity)}},{
key:"_circle",value:function(e,t,o,n,i){
this.enableShadow(e,t),e.beginPath(),e.arc(o,n,i,0,2*a,!1),
e.stroke(),this.disableShadow(e,t)}},{
key:"getDistanceToEdge",
value:function(e,t,o,n,a,d){
if(this.from!=this.to)return this._getDistanceToEdge(e,t,o,n,a,d)
;var s=this._getCircleData(void 0),l=slicedToArray(s,3),c=l[0],u=l[1],p=l[2],h=c-a,m=u-d
;return r(i(h*h+m*m)-p)}},{
key:"_getDistanceToLine",
value:function(e,t,o,n,a,d){
var s=o-e,r=n-t,l=((a-e)*s+(d-t)*r)/(s*s+r*r)
;1<l?l=1:0>l&&(l=0);var h=e+l*s-a,m=t+l*r-d
;return i(h*h+m*m)}},{key:"getArrowData",
value:function(e,i,d,s,l,c){
var h,m,g,f,b,_,v,u=hypot$2,p=c.width
;"from"===i?(g=this.from,f=this.to,b=0>c.fromArrowScale,
_=r(c.fromArrowScale),v=c.fromArrowType):"to"===i?(g=this.to,
f=this.from,b=0>c.toArrowScale,
_=r(c.toArrowScale),v=c.toArrowType):(g=this.to,f=this.from,
b=0>c.middleArrowScale,
_=r(c.middleArrowScale),v=c.middleArrowType)
;var k=15*_+3*p;if(g!=f){
var S=k/u(g.x-f.x,g.y-f.y);if("middle"===i){
var O=(b?-S:S)/2,D=this.getPoint(.5+O,d),T=this.getPoint(.5-O,d)
;h=t(D.y-T.y,D.x-T.x),m=this.getPoint(.5,d)
}else if(!0===this.options.smooth.enabled){
var E=this._findBorderPosition(g,e,{via:d
}),C=this.getPoint(E.t+S*("from"===i?1:-1),d)
;h=t(E.y-C.y,E.x-C.x),m=E
}else h=t(g.y-f.y,g.x-f.x),m=this._findBorderPosition(g,e)
}else{
var M=this._getCircleData(e),I=slicedToArray(M,3),P=I[0],x=I[1],y=I[2]
;if("from"===i){
var F=this._findBorderPositionCircle(this.from,e,{
x:P,y:x,low:.25,high:.6,direction:-1})
;h=-2*F.t*a+1.5*a+.1*a,m=F}else if("to"===i){
var N=this._findBorderPositionCircle(this.from,e,{
x:P,y:x,low:.6,high:1,direction:1})
;h=-2*N.t*a+1.5*a-1.1*a,m=N
}else m=this._pointOnCircle(P,x,y,.175),h=3.9269908169872414
}return{point:m,core:{x:m.x-.9*k*o(h),
y:m.y-.9*k*n(h)},angle:h,length:k,type:v}}},{
key:"drawArrowHead",value:function(e,t,o,n,i){
e.strokeStyle=this.getColor(e,t),e.fillStyle=e.strokeStyle,
e.lineWidth=t.width,EndPoints.draw(e,i),
this.enableShadow(e,t),fill$2(e).call(e),
this.disableShadow(e,t)}},{key:"enableShadow",
value:function(e,t){
!0===t.shadow&&(e.shadowColor=t.shadowColor,e.shadowBlur=t.shadowSize,
e.shadowOffsetX=t.shadowX,
e.shadowOffsetY=t.shadowY)}},{key:"disableShadow",
value:function(e,t){
!0===t.shadow&&(e.shadowColor="rgba(0,0,0,0)",e.shadowBlur=0,
e.shadowOffsetX=0,e.shadowOffsetY=0)}},{
key:"drawBackground",value:function(e,t){
if(!1!==t.background){var o={
strokeStyle:e.strokeStyle,lineWidth:e.lineWidth,
dashes:e.dashes}
;e.strokeStyle=t.backgroundColor,e.lineWidth=t.backgroundSize,this.setStrokeDashed(e,t.backgroundDashes),
e.stroke(),
e.strokeStyle=o.strokeStyle,e.lineWidth=o.lineWidth,e.dashes=o.dashes,
this.setStrokeDashed(e,t.dashes)}}},{
key:"setStrokeDashed",value:function(e,t){
if(!1===t)void 0===e.setLineDash?console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used."):e.setLineDash([]);else if(void 0!==e.setLineDash){
var o=isArray$3(t)?t:[5,5];e.setLineDash(o)
}else console.warn("setLineDash is not supported in this browser. The dashed stroke cannot be used.")
}}]),e}();function ownKeys$4(e,t){var o=keys$6(e)
;if(getOwnPropertySymbols$2){
var n=getOwnPropertySymbols$2(e)
;t&&(n=filter$2(n).call(n,(function(t){
return getOwnPropertyDescriptor$3(e,t).enumerable
}))),o.push.apply(o,n)}return o}
function _objectSpread$3(e){
for(var o,t=1;t<arguments.length;t++){
var _context61,_context62
;o=null==arguments[t]?{}:arguments[t],t%2?forEach$2(_context61=ownKeys$4(o,!0)).call(_context61,(function(t){
defineProperty$2$1(e,t,o[t])
})):getOwnPropertyDescriptors$2?defineProperties$1(e,getOwnPropertyDescriptors$2(o)):forEach$2(_context62=ownKeys$4(o)).call(_context62,(function(t){
defineProperty$3(e,t,getOwnPropertyDescriptor$3(o,t))
}))}return e}var BezierEdgeBase=function(e){
var o=Math.atan2,n=Math.sqrt,a=Math.pow,d=Math.abs
;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_findBorderPositionBezier",
value:function(e,t){
var u,p,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this._getViaCoordinates(),s=!1,r=1,l=0,c=this.to
;e.id===this.from.id&&(c=this.from,s=!0);var h=0
;do{p=.5*(l+r),u=this.getPoint(p,i)
;var m=o(c.y-u.y,c.x-u.x),g=c.distanceToBorder(t,m),y=n(a(u.x-c.x,2)+a(u.y-c.y,2)),f=g-y
;if(d(f)<.2)break
;0>f?!1===s?l=p:r=p:!1===s?r=p:l=p,++h
}while(l<=r&&h<10);return _objectSpread$3({},u,{
t:p})}},{key:"_getDistanceToBezierEdge",
value:function(e,o,n,d,s,r,l){
var h,m,g,f,b,c=1e9,u=e,p=o
;for(m=1;10>m;m++)f=a(1-(g=.1*m),2)*e+2*g*(1-g)*l.x+a(g,2)*n,
b=a(1-g,2)*o+2*g*(1-g)*l.y+a(g,2)*d,
0<m&&(c=(h=this._getDistanceToLine(u,p,f,b,s,r))<c?h:c),
u=f,p=b;return c}},{key:"_bezierCurve",
value:function(e,t,o,n){
e.beginPath(),e.moveTo(this.fromPoint.x,this.fromPoint.y),
null!=o&&null!=o.x?null!=n&&null!=n.x?e.bezierCurveTo(o.x,o.y,n.x,n.y,this.toPoint.x,this.toPoint.y):e.quadraticCurveTo(o.x,o.y,this.toPoint.x,this.toPoint.y):e.lineTo(this.toPoint.x,this.toPoint.y),
this.drawBackground(e,t),
this.enableShadow(e,t),e.stroke(),this.disableShadow(e,t)
}},{key:"getViaNode",value:function(){
return this._getViaCoordinates()}}]),t
}(EdgeBase),BezierEdgeDynamic=function(e){
var o=Math.cos,n=Math.sin,i=Math.PI,d=Math.pow
;function t(e,o,n){var i
;return classCallCheck$1(this,t),(i=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))).via=i.via,
i._boundFunction=function(){i.positionBezierNode()
},i._body.emitter.on("_repositionBezierNodes",i._boundFunction),
i}return inherits$1(t,e),createClass$1(t,[{
key:"setOptions",value:function(e){
get$5(getPrototypeOf$1$1(t.prototype),"setOptions",this).call(this,e)
;var o=!1
;this.options.physics!==e.physics&&(o=!0),this.options=e,this.id=this.options.id,
this.from=this._body.nodes[this.options.from],
this.to=this._body.nodes[this.options.to],
this.setupSupportNode(),this.connect(),
1==o&&(this.via.setOptions({
physics:this.options.physics
}),this.positionBezierNode())}},{key:"connect",
value:function(){
this.from=this._body.nodes[this.options.from],this.to=this._body.nodes[this.options.to],
void 0===this.from||void 0===this.to||!1===this.options.physics?this.via.setOptions({
physics:!1
}):this.from.id===this.to.id?this.via.setOptions({
physics:!1}):this.via.setOptions({physics:!0})}},{
key:"cleanup",value:function(){
return this._body.emitter.off("_repositionBezierNodes",this._boundFunction),
void 0!==this.via&&(delete this._body.nodes[this.via.id],
this.via=void 0,!0)}},{key:"setupSupportNode",
value:function(){if(void 0===this.via){
var e="edgeId:"+this.id,t=this._body.functions.createNode({
id:e,shape:"circle",physics:!0,hidden:!0})
;this._body.nodes[e]=t,this.via=t,this.via.parentEdgeId=this.id,
this.positionBezierNode()}}},{
key:"positionBezierNode",value:function(){
void 0!==this.via&&void 0!==this.from&&void 0!==this.to?(this.via.x=.5*(this.from.x+this.to.x),
this.via.y=.5*(this.from.y+this.to.y)):void 0!==this.via&&(this.via.x=0,
this.via.y=0)}},{key:"_line",
value:function(e,t,o){this._bezierCurve(e,t,o)}},{
key:"_getViaCoordinates",value:function(){
return this.via}},{key:"getViaNode",
value:function(){return this.via}},{
key:"getPoint",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.via
;if(this.from===this.to){
var s=this._getCircleData(),r=slicedToArray(s,3),l=r[0],c=r[1],u=r[2],p=2*i*(1-e)
;return{x:l+u*n(p),y:c+u-u*(1-o(p))}}return{
x:d(1-e,2)*this.fromPoint.x+2*e*(1-e)*t.x+d(e,2)*this.toPoint.x,
y:d(1-e,2)*this.fromPoint.y+2*e*(1-e)*t.y+d(e,2)*this.toPoint.y
}}},{key:"_findBorderPosition",
value:function(e,t){
return this._findBorderPositionBezier(e,t,this.via)
}},{key:"_getDistanceToEdge",
value:function(e,t,o,n,i,a){
return this._getDistanceToBezierEdge(e,t,o,n,i,a,this.via)
}}]),t
}(BezierEdgeBase),BezierEdgeStatic=function(e){
var o=Math.atan2,n=Math.cos,i=Math.sin,a=Math.sqrt,d=Math.PI,s=Math.pow,r=Math.abs
;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_line",value:function(e,t,o){
this._bezierCurve(e,t,o)}},{key:"getViaNode",
value:function(){return this._getViaCoordinates()}
},{key:"_getViaCoordinates",value:function(){
var D,T,e=this.options.smooth.roundness,t=this.options.smooth.type,s=r(this.from.x-this.to.x),l=r(this.from.y-this.to.y)
;if("discrete"===t||"diagonalCross"===t){var c,u
;c=u=s<=l?e*l:e*s,this.from.x>this.to.x&&(c=-c),
this.from.y>=this.to.y&&(u=-u)
;var p=this.from.x+c,h=this.from.y+u
;return"discrete"===t&&(s<=l?p=s<e*l?this.from.x:p:h=l<e*s?this.from.y:h),
{x:p,y:h}}if("straightCross"===t){
var m=(1-e)*s,g=(1-e)*l
;return s<=l?(m=0,this.from.y<this.to.y&&(g=-g)):(this.from.x<this.to.x&&(m=-m),
g=0),{x:this.to.x+m,y:this.to.y+g}}
if("horizontal"===t){var y=(1-e)*s
;return this.from.x<this.to.x&&(y=-y),{
x:this.to.x+y,y:this.from.y}}if("vertical"===t){
var f=(1-e)*l
;return this.from.y<this.to.y&&(f=-f),{
x:this.from.x,y:this.to.y+f}}if("curvedCW"===t){
s=this.to.x-this.from.x,l=this.from.y-this.to.y
;var b=a(s*s+l*l),_=d,k=(o(l,s)+(.5*e+.5)*_)%(2*_)
;return{x:this.from.x+(.5*e+.5)*b*i(k),
y:this.from.y+(.5*e+.5)*b*n(k)}}
if("curvedCCW"===t){
s=this.to.x-this.from.x,l=this.from.y-this.to.y
;var w=a(s*s+l*l),x=d,O=(o(l,s)+(.5*-e+.5)*x)%(2*x)
;return{x:this.from.x+(.5*e+.5)*w*i(O),
y:this.from.y+(.5*e+.5)*w*n(O)}}
D=T=s<=l?e*l:e*s,this.from.x>this.to.x&&(D=-D),this.from.y>=this.to.y&&(T=-T)
;var E=this.from.x+D,C=this.from.y+T
;return s<=l?E=this.from.x<=this.to.x?this.to.x<E?this.to.x:E:this.to.x>E?this.to.x:E:C=this.from.y>=this.to.y?this.to.y>C?this.to.y:C:this.to.y<C?this.to.y:C,
{x:E,y:C}}},{key:"_findBorderPosition",
value:function(e,t){
var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
;return this._findBorderPositionBezier(e,t,o.via)}
},{key:"_getDistanceToEdge",
value:function(e,t,o,n,i,a){
var d=6<arguments.length&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates()
;return this._getDistanceToBezierEdge(e,t,o,n,i,a,d)
}},{key:"getPoint",value:function(e){
var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),n=e,t=s(1-n,2)*this.fromPoint.x+2*n*(1-n)*o.x+s(n,2)*this.toPoint.x,i=s(1-n,2)*this.fromPoint.y+2*n*(1-n)*o.y+s(n,2)*this.toPoint.y
;return{x:t,y:i}}}]),t
}(BezierEdgeBase),CubicBezierEdge=function(e){
var o=Math.pow,n=Math.abs;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_line",value:function(e,t,o){
var n=o[0],i=o[1];this._bezierCurve(e,t,n,i)}},{
key:"_getViaCoordinates",value:function(){
var i,a,d,s,e=this.from.x-this.to.x,t=this.from.y-this.to.y,o=this.options.smooth.roundness
;return(n(e)>n(t)||!0===this.options.smooth.forceDirection||"horizontal"===this.options.smooth.forceDirection)&&"vertical"!==this.options.smooth.forceDirection?(a=this.from.y,
s=this.to.y,
i=this.from.x-o*e,d=this.to.x+o*e):(a=this.from.y-o*t,s=this.to.y+o*t,
i=this.from.x,d=this.to.x),[{x:i,y:a},{x:d,y:s}]}
},{key:"getViaNode",value:function(){
return this._getViaCoordinates()}},{
key:"_findBorderPosition",value:function(e,t){
return this._findBorderPositionBezier(e,t)}},{
key:"_getDistanceToEdge",
value:function(e,t,o,n,i,a){
var d=6<arguments.length&&void 0!==arguments[6]?arguments[6]:this._getViaCoordinates(),s=slicedToArray(d,2),r=s[0],l=s[1]
;return this._getDistanceToBezierEdge2(e,t,o,n,i,a,r,l)
}},{key:"getPoint",value:function(e){
var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this._getViaCoordinates(),i=slicedToArray(n,2),a=i[0],d=i[1],s=e,t=[o(1-s,3),3*s*o(1-s,2),3*o(s,2)*(1-s),o(s,3)],r=t[0]*this.fromPoint.x+t[1]*a.x+t[2]*d.x+t[3]*this.toPoint.x,l=t[0]*this.fromPoint.y+t[1]*a.y+t[2]*d.y+t[3]*this.toPoint.y
;return{x:r,y:l}}}]),t}(function(e){var o=Math.pow
;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_getDistanceToBezierEdge2",
value:function(e,n,a,d,s,r,l,c){
for(var f,u=1e9,p=e,h=n,m=[0,0,0,0],g=1;10>g;g++){
f=.1*g,m[0]=o(1-f,3),m[1]=3*f*o(1-f,2),
m[2]=3*o(f,2)*(1-f),m[3]=o(f,3)
;var b=m[0]*e+m[1]*l.x+m[2]*c.x+m[3]*a,_=m[0]*n+m[1]*l.y+m[2]*c.y+m[3]*d
;if(0<g){
var y=this._getDistanceToLine(p,h,b,_,s,r)
;u=y<u?y:u}p=b,h=_}return u}}]),t
}(BezierEdgeBase)),StraightEdge=function(e){
var o=Math.atan2,n=Math.sqrt;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_line",value:function(e,t){
e.beginPath(),e.moveTo(this.fromPoint.x,this.fromPoint.y),
e.lineTo(this.toPoint.x,this.toPoint.y),
this.enableShadow(e,t),e.stroke(),this.disableShadow(e,t)
}},{key:"getViaNode",value:function(){}},{
key:"getPoint",value:function(e){return{
x:(1-e)*this.fromPoint.x+e*this.toPoint.x,
y:(1-e)*this.fromPoint.y+e*this.toPoint.y}}},{
key:"_findBorderPosition",value:function(e,t){
var i=this.to,a=this.from
;e.id===this.from.id&&(i=this.from,a=this.to)
;var d=o(i.y-a.y,i.x-a.x),s=i.x-a.x,r=i.y-a.y,l=n(s*s+r*r),u=(l-e.distanceToBorder(t,d))/l
;return{x:(1-u)*a.x+u*i.x,y:(1-u)*a.y+u*i.y,t:0}}
},{key:"_getDistanceToEdge",
value:function(e,t,o,n,i,a){
return this._getDistanceToLine(e,t,o,n,i,a)}}]),t
}(EdgeBase),Edge=function(){
var t=Math.atan2,o=Math.cos,n=Math.sin,i=Math.PI,a=Math.max,d=Math.min
;function e(t,o,n,i){
if(classCallCheck$1(this,e),void 0===o)throw new Error("No body provided")
;this.options=util.bridgeObject(n),
this.globalOptions=n,this.defaultOptions=i,this.body=o,
this.id=void 0,this.fromId=void 0,
this.toId=void 0,this.selected=!1,this.hover=!1,
this.labelDirty=!0,this.baseWidth=this.options.width,
this.baseFontSize=this.options.font.size,
this.from=void 0,this.to=void 0,this.edgeType=void 0,
this.connected=!1,this.labelModule=new Label(this.body,this.options,!0),
this.setOptions(t)}return createClass$1(e,[{
key:"setOptions",value:function(t){if(t){
var o=this.options.hidden
;null==o&&(o=!1),e.parseOptions(this.options,t,!0,this.globalOptions),
void 0!==t.id&&(this.id=t.id),
void 0!==t.from&&(this.fromId=t.from),void 0!==t.to&&(this.toId=t.to),
void 0!==t.title&&(this.title=t.title),
void 0!==t.value&&(t.value=_parseFloat$3(t.value))
;var n=[t,this.options,this.defaultOptions]
;this.chooser=ComponentUtil.choosify("edge",n),
this.updateLabelModule(t)
;var i=this.updateEdgeType()
;this._setInteractionWidths(),this.connect()
;var a=this.options.hidden
;return null==a&&(a=!1),(a!=o||void 0!==t.physics)&&(i=!0),
void 0!==t.physics&&(i=!0),i}}},{
key:"getFormattingValues",value:function(){
var e=!0===this.options.arrows.to||!0===this.options.arrows.to.enabled,t=!0===this.options.arrows.from||!0===this.options.arrows.from.enabled,o=!0===this.options.arrows.middle||!0===this.options.arrows.middle.enabled,n=this.options.color.inherit,i={
toArrow:e,
toArrowScale:this.options.arrows.to.scaleFactor,
toArrowType:this.options.arrows.to.type,
middleArrow:o,
middleArrowScale:this.options.arrows.middle.scaleFactor,
middleArrowType:this.options.arrows.middle.type,
fromArrow:t,
fromArrowScale:this.options.arrows.from.scaleFactor,
fromArrowType:this.options.arrows.from.type,
arrowStrikethrough:this.options.arrowStrikethrough,
color:n?void 0:this.options.color.color,
inheritsColor:n,
opacity:this.options.color.opacity,
hidden:this.options.hidden,
length:this.options.length,
shadow:this.options.shadow.enabled,
shadowColor:this.options.shadow.color,
shadowSize:this.options.shadow.size,
shadowX:this.options.shadow.x,
shadowY:this.options.shadow.y,
dashes:this.options.dashes,
width:this.options.width,
background:this.options.background.enabled,
backgroundColor:this.options.background.color,
backgroundSize:this.options.background.size,
backgroundDashes:this.options.background.dashes}
;if(this.selected||this.hover){
if(!0!==this.chooser)"function"==typeof this.chooser&&(this.chooser(i,this.options.id,this.selected,this.hover),
void 0!==i.color&&(i.inheritsColor=!1),
!1===i.shadow&&(i.shadowColor!==this.options.shadow.color||i.shadowSize!==this.options.shadow.size||i.shadowX!==this.options.shadow.x||i.shadowY!==this.options.shadow.y)&&(i.shadow=!0));else if(this.selected){
var d=this.options.selectionWidth
;"function"==typeof d?i.width=d(i.width):"number"==typeof d&&(i.width+=d),
i.width=a(i.width,.3/this.body.view.scale),
i.color=this.options.color.highlight,
i.shadow=this.options.shadow.enabled
}else if(this.hover){var s=this.options.hoverWidth
;"function"==typeof s?i.width=s(i.width):"number"==typeof s&&(i.width+=s),
i.width=a(i.width,.3/this.body.view.scale),
i.color=this.options.color.hover,i.shadow=this.options.shadow.enabled
}
}else i.shadow=this.options.shadow.enabled,i.width=a(i.width,.3/this.body.view.scale)
;return i}},{key:"updateLabelModule",
value:function(e){
var t=[e,this.options,this.globalOptions,this.defaultOptions]
;this.labelModule.update(this.options,t),
void 0!==this.labelModule.baseSize&&(this.baseFontSize=this.labelModule.baseSize)
}},{key:"updateEdgeType",value:function(){
var e=this.options.smooth,t=!1,o=!0
;return void 0!==this.edgeType&&((this.edgeType instanceof BezierEdgeDynamic&&!0===e.enabled&&"dynamic"===e.type||this.edgeType instanceof CubicBezierEdge&&!0===e.enabled&&"cubicBezier"===e.type||this.edgeType instanceof BezierEdgeStatic&&!0===e.enabled&&"dynamic"!==e.type&&"cubicBezier"!==e.type||this.edgeType instanceof StraightEdge&&!1===e.type.enabled)&&(o=!1),
!0===o&&(t=this.cleanup())),
!0===o?!0===e.enabled?"dynamic"===e.type?(t=!0,this.edgeType=new BezierEdgeDynamic(this.options,this.body,this.labelModule)):"cubicBezier"===e.type?this.edgeType=new CubicBezierEdge(this.options,this.body,this.labelModule):this.edgeType=new BezierEdgeStatic(this.options,this.body,this.labelModule):this.edgeType=new StraightEdge(this.options,this.body,this.labelModule):this.edgeType.setOptions(this.options),
t}},{key:"connect",value:function(){
this.disconnect(),this.from=this.body.nodes[this.fromId]||void 0,
this.to=this.body.nodes[this.toId]||void 0,
this.connected=void 0!==this.from&&void 0!==this.to,
!0===this.connected?(this.from.attachEdge(this),
this.to.attachEdge(this)):(this.from&&this.from.detachEdge(this),
this.to&&this.to.detachEdge(this)),
this.edgeType.connect()}},{key:"disconnect",
value:function(){
this.from&&(this.from.detachEdge(this),this.from=void 0),this.to&&(this.to.detachEdge(this),
this.to=void 0),this.connected=!1}},{
key:"getTitle",value:function(){return this.title}
},{key:"isSelected",value:function(){
return this.selected}},{key:"getValue",
value:function(){return this.options.value}},{
key:"setValueRange",value:function(e,t,o){
if(void 0!==this.options.value){
var n=this.options.scaling.customScalingFunction(e,t,o,this.options.value),i=this.options.scaling.max-this.options.scaling.min
;if(!0===this.options.scaling.label.enabled){
var a=this.options.scaling.label.max-this.options.scaling.label.min
;this.options.font.size=this.options.scaling.label.min+n*a
}this.options.width=this.options.scaling.min+n*i
}else this.options.width=this.baseWidth,
this.options.font.size=this.baseFontSize
;this._setInteractionWidths(),this.updateLabelModule()
}},{key:"_setInteractionWidths",value:function(){
this.edgeType.hoverWidth="function"==typeof this.options.hoverWidth?this.options.hoverWidth(this.options.width):this.options.hoverWidth+this.options.width,
this.edgeType.selectionWidth="function"==typeof this.options.selectionWidth?this.options.selectionWidth(this.options.width):this.options.selectionWidth+this.options.width
}},{key:"draw",value:function(e){
var t=this.getFormattingValues();if(!t.hidden){
var o=this.edgeType.getViaNode(),n={}
;this.edgeType.fromPoint=this.edgeType.from,
this.edgeType.toPoint=this.edgeType.to,
t.fromArrow&&(n.from=this.edgeType.getArrowData(e,"from",o,this.selected,this.hover,t),
!1===t.arrowStrikethrough&&(this.edgeType.fromPoint=n.from.core)),
t.toArrow&&(n.to=this.edgeType.getArrowData(e,"to",o,this.selected,this.hover,t),
!1===t.arrowStrikethrough&&(this.edgeType.toPoint=n.to.core)),
t.middleArrow&&(n.middle=this.edgeType.getArrowData(e,"middle",o,this.selected,this.hover,t)),
this.edgeType.drawLine(e,t,this.selected,this.hover,o),
this.drawArrows(e,n,t),this.drawLabel(e,o)}}},{
key:"drawArrows",value:function(e,t,o){
o.fromArrow&&this.edgeType.drawArrowHead(e,o,this.selected,this.hover,t.from),
o.middleArrow&&this.edgeType.drawArrowHead(e,o,this.selected,this.hover,t.middle),
o.toArrow&&this.edgeType.drawArrowHead(e,o,this.selected,this.hover,t.to)
}},{key:"drawLabel",value:function(e,t){
if(void 0!==this.options.label){
var o=this.from,n=this.to
;if(this.labelModule.differentState(this.selected,this.hover)&&this.labelModule.getTextSize(e,this.selected,this.hover),
o.id!=n.id){this.labelModule.pointToSelf=!1
;var i=this.edgeType.getPoint(.5,t);e.save()
;var a=this._getRotation(e)
;0!=a.angle&&(e.translate(a.x,a.y),e.rotate(a.angle)),
this.labelModule.draw(e,i.x,i.y,this.selected,this.hover),
e.restore()}else{this.labelModule.pointToSelf=!0
;var s,r,d=this.options.selfReferenceSize
;o.shape.width>o.shape.height?(s=o.x+.5*o.shape.width,
r=o.y-d):(s=o.x+d,r=o.y-.5*o.shape.height),
i=this._pointOnCircle(s,r,d,.125),this.labelModule.draw(e,i.x,i.y,this.selected,this.hover)
}}}},{key:"getItemsOnPoint",value:function(e){
var t=[];if(this.labelModule.visible()){
var o=this._getRotation()
;ComponentUtil.pointInRect(this.labelModule.getSize(),e,o)&&t.push({
edgeId:this.id,labelId:0})}var n={left:e.x,top:e.y
};return this.isOverlappingWith(n)&&t.push({
edgeId:this.id}),t}},{key:"isOverlappingWith",
value:function(e){if(this.connected){
var t=this.from.x,o=this.from.y,n=this.to.x,i=this.to.y,a=e.left,d=e.top
;return 10>this.edgeType.getDistanceToEdge(t,o,n,i,a,d)
}return!1}},{key:"_getRotation",value:function(e){
var o=this.edgeType.getViaNode(),n=this.edgeType.getPoint(.5,o)
;void 0!==e&&this.labelModule.calculateLabelSize(e,this.selected,this.hover,n.x,n.y)
;var a={x:n.x,y:this.labelModule.size.yLine,
angle:0};if(!this.labelModule.visible())return a
;if("horizontal"===this.options.font.align)return a
;var d=this.from.y-this.to.y,s=this.from.x-this.to.x,r=t(d,s)
;return(-1>r&&0>s||0<r&&0>s)&&(r+=i),a.angle=r,a}
},{key:"_pointOnCircle",value:function(e,t,a,d){
var s=2*d*i;return{x:e+a*o(s),y:t-a*n(s)}}},{
key:"select",value:function(){this.selected=!0}},{
key:"unselect",value:function(){this.selected=!1}
},{key:"cleanup",value:function(){
return this.edgeType.cleanup()}},{key:"remove",
value:function(){
this.cleanup(),this.disconnect(),delete this.body.edges[this.id]
}},{key:"endPointsValid",value:function(){
return void 0!==this.body.nodes[this.fromId]&&void 0!==this.body.nodes[this.toId]
}}],[{key:"parseOptions",value:function(e,t){
var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},s=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4]
;if(util.selectiveDeepExtend(["arrowStrikethrough","id","from","hidden","hoverWidth","labelHighlightBold","length","line","opacity","physics","scaling","selectionWidth","selfReferenceSize","to","title","value","width","font","chosen","widthConstraint"],e,t,o),
ComponentUtil.isValidLabel(t.label)?e.label=t.label:!ComponentUtil.isValidLabel(e.label)&&(e.label=void 0),
util.mergeOptions(e,t,"smooth",n),
util.mergeOptions(e,t,"shadow",n),util.mergeOptions(e,t,"background",n),
void 0!==t.dashes&&null!==t.dashes?e.dashes=t.dashes:!0===o&&null===t.dashes&&(e.dashes=create$2(n.dashes)),
void 0!==t.scaling&&null!==t.scaling?(void 0!==t.scaling.min&&(e.scaling.min=t.scaling.min),
void 0!==t.scaling.max&&(e.scaling.max=t.scaling.max),
util.mergeOptions(e.scaling,t.scaling,"label",n.scaling)):!0===o&&null===t.scaling&&(e.scaling=create$2(n.scaling)),
void 0===t.arrows||null===t.arrows)!0===o&&null===t.arrows&&(e.arrows=create$2(n.arrows));else if("string"==typeof t.arrows){
var r=t.arrows.toLowerCase()
;e.arrows.to.enabled=-1!=indexOf$3(r).call(r,"to"),e.arrows.middle.enabled=-1!=indexOf$3(r).call(r,"middle"),
e.arrows.from.enabled=-1!=indexOf$3(r).call(r,"from")
}else{
if("object"!==_typeof_1$1(t.arrows))throw new Error("The arrow newOptions can only be an object or a string. Refer to the documentation. You used:"+stringify$2(t.arrows))
;util.mergeOptions(e.arrows,t.arrows,"to",n.arrows),
util.mergeOptions(e.arrows,t.arrows,"middle",n.arrows),
util.mergeOptions(e.arrows,t.arrows,"from",n.arrows)
}if(void 0!==t.color&&null!==t.color){
var l=util.isString(t.color)?{color:t.color,
highlight:t.color,hover:t.color,inherit:!1,
opacity:1}:t.color,c=e.color
;if(s)util.deepExtend(c,n.color,!1,o);else for(var u in c)c.hasOwnProperty(u)&&delete c[u]
;if(util.isString(c))c.color=c,
c.highlight=c,c.hover=c,c.inherit=!1,void 0===l.opacity&&(c.opacity=1);else{
var i=!1
;void 0!==l.color&&(c.color=l.color,i=!0),void 0!==l.highlight&&(c.highlight=l.highlight,
i=!0),
void 0!==l.hover&&(c.hover=l.hover,i=!0),void 0!==l.inherit&&(c.inherit=l.inherit),
void 0!==l.opacity&&(c.opacity=d(1,a(0,l.opacity))),
1==i?c.inherit=!1:void 0===c.inherit&&(c.inherit="from")
}
}else!0===o&&null===t.color&&(e.color=util.bridgeObject(n.color))
;!0===o&&null===t.font&&(e.font=util.bridgeObject(n.font))
}}]),e}(),EdgesHandler=function(){var t=Math.max
;function e(o,n,i){var _context63,a=this
;classCallCheck$1(this,e),this.body=o,this.images=n,
this.groups=i,this.body.functions.createEdge=bind$2(_context63=this.create).call(_context63,this),
this.edgesListeners={add:function(e,t){
a.add(t.items)},update:function(e,t){
a.update(t.items)},remove:function(e,t){
a.remove(t.items)}
},this.options={},this.defaultOptions={arrows:{
to:{enabled:!1,scaleFactor:1,type:"arrow"},
middle:{enabled:!1,scaleFactor:1,type:"arrow"},
from:{enabled:!1,scaleFactor:1,type:"arrow"}},
arrowStrikethrough:!0,color:{color:"#848484",
highlight:"#848484",hover:"#848484",
inherit:"from",opacity:1},dashes:!1,font:{
color:"#343434",size:14,face:"arial",
background:"none",strokeWidth:2,
strokeColor:"#ffffff",align:"horizontal",multi:!1,
vadjust:0,bold:{mod:"bold"},boldital:{
mod:"bold italic"},ital:{mod:"italic"},mono:{
mod:"",size:15,face:"courier new",vadjust:2}},
hidden:!1,hoverWidth:1.5,label:void 0,
labelHighlightBold:!0,length:void 0,physics:!0,
scaling:{min:1,max:15,label:{enabled:!0,min:14,
max:30,maxVisible:30,drawThreshold:5},
customScalingFunction:function(e,o,n,i){
return o===e?.5:t(0,1/(o-e)*(i-e))}},
selectionWidth:1.5,selfReferenceSize:20,shadow:{
enabled:!1,color:"rgba(0,0,0,0.5)",size:10,x:5,y:5
},background:{enabled:!1,
color:"rgba(111,111,111,1)",size:10,dashes:!1},
smooth:{enabled:!0,type:"dynamic",
forceDirection:"none",roundness:.5},title:void 0,
width:1,value:void 0
},util.deepExtend(this.options,this.defaultOptions),this.bindEventListeners()
}return createClass$1(e,[{
key:"bindEventListeners",value:function(){
var _context64,_context65,e=this
;this.body.emitter.on("_forceDisableDynamicCurves",(function(t){
var o=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;"dynamic"===t&&(t="continuous");var n=!1
;for(var i in e.body.edges)if(e.body.edges.hasOwnProperty(i)){
var a=e.body.edges[i],d=e.body.data.edges._data[i]
;if(void 0!==d){var s=d.smooth
;void 0!==s&&!0===s.enabled&&"dynamic"===s.type&&(void 0===t?a.setOptions({
smooth:!1}):a.setOptions({smooth:{type:t}}),n=!0)}
}!0===o&&1==n&&e.body.emitter.emit("_dataChanged")
})),this.body.emitter.on("_dataUpdated",(function(){
e.reconnectEdges()
})),this.body.emitter.on("refreshEdges",bind$2(_context64=this.refresh).call(_context64,this)),
this.body.emitter.on("refresh",bind$2(_context65=this.refresh).call(_context65,this)),
this.body.emitter.on("destroy",(function(){
forEach$2(util).call(util,e.edgesListeners,(function(t,o){
e.body.data.edges&&e.body.data.edges.off(o,t)
})),delete e.body.functions.createEdge,
delete e.edgesListeners.add,delete e.edgesListeners.update,
delete e.edgesListeners.remove,
delete e.edgesListeners}))}},{key:"setOptions",
value:function(e){if(void 0!==e){
Edge.parseOptions(this.options,e,!0,this.defaultOptions,!0)
;var t=!1
;if(void 0!==e.smooth)for(var o in this.body.edges)this.body.edges.hasOwnProperty(o)&&(t=this.body.edges[o].updateEdgeType()||t)
;if(void 0!==e.font)for(var n in this.body.edges)this.body.edges.hasOwnProperty(n)&&this.body.edges[n].updateLabelModule()
;(void 0!==e.hidden||void 0!==e.physics||!0===t)&&this.body.emitter.emit("_dataChanged")
}}},{key:"setData",value:function(e){
var t=this,o=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],n=this.body.data.edges
;if(e instanceof DataSet||e instanceof DataView)this.body.data.edges=e;else if(isArray$3(e))this.body.data.edges=new DataSet,
this.body.data.edges.add(e);else{
if(e)throw new TypeError("Array or DataSet expected")
;this.body.data.edges=new DataSet}
if(n&&forEach$2(util).call(util,this.edgesListeners,(function(e,t){
n.off(t,e)
})),this.body.edges={},this.body.data.edges){
forEach$2(util).call(util,this.edgesListeners,(function(e,o){
t.body.data.edges.on(o,e)}))
;var i=this.body.data.edges.getIds()
;this.add(i,!0)}
this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),!1===o&&this.body.emitter.emit("_dataChanged")
}},{key:"add",value:function(e){
for(var t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=this.body.edges,n=this.body.data.edges,a=0;a<e.length;a++){
var d=e[a],s=o[d];s&&s.disconnect()
;var r=n.get(d,{showInternalIds:!0})
;o[d]=this.create(r)}
this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),
!1===t&&this.body.emitter.emit("_dataChanged")}},{
key:"update",value:function(e){
for(var t=this.body.edges,o=this.body.data.edges,n=!1,a=0;a<e.length;a++){
var d=e[a],s=o.get(d),r=t[d]
;void 0===r?(this.body.edges[d]=this.create(s),n=!0):(r.disconnect(),
n=r.setOptions(s)||n,r.connect())}
!0===n?(this.body.emitter.emit("_adjustEdgesForHierarchicalLayout"),
this.body.emitter.emit("_dataChanged")):this.body.emitter.emit("_dataUpdated")
}},{key:"remove",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;if(0!==e.length){var o=this.body.edges
;forEach$2(util).call(util,e,(function(e){
var t=o[e];void 0!==t&&t.remove()
})),t&&this.body.emitter.emit("_dataChanged")}}},{
key:"refresh",value:function(){var e=this
;forEach$2(util).call(util,this.body.edges,(function(t,o){
var n=e.body.data.edges._data[o]
;void 0!==n&&t.setOptions(n)}))}},{key:"create",
value:function(e){
return new Edge(e,this.body,this.options,this.defaultOptions)
}},{key:"reconnectEdges",value:function(){
var o,e=this.body.nodes,t=this.body.edges
;for(o in e)e.hasOwnProperty(o)&&(e[o].edges=[])
;for(o in t)if(t.hasOwnProperty(o)){var n=t[o]
;n.from=null,n.to=null,n.connect()}}},{
key:"getConnectedNodes",value:function(e){var t=[]
;if(void 0!==this.body.edges[e]){
var o=this.body.edges[e]
;void 0!==o.fromId&&t.push(o.fromId),void 0!==o.toId&&t.push(o.toId)
}return t}},{key:"_updateState",value:function(){
this._addMissingEdges(),this._removeInvalidEdges()
}},{key:"_removeInvalidEdges",value:function(){
var e=this,t=[]
;forEach$2(util).call(util,this.body.edges,(function(o,n){
var i=e.body.nodes[o.toId],a=e.body.nodes[o.fromId]
;void 0!==i&&!0===i.isCluster||void 0!==a&&!0===a.isCluster||(void 0===i||void 0===a)&&t.push(n)
})),this.remove(t,!1)}},{key:"_addMissingEdges",
value:function(){var e=this.body.data.edges
;if(null!=e){var t=this.body.edges,o=[]
;forEach$2(e).call(e,(function(e,n){
void 0===t[n]&&o.push(n)})),this.add(o,!0)}}}]),e
}(),BarnesHutSolver=function(){
var t=Math.sin,o=Math.sqrt,n=Math.pow,a=Math.max,d=Math.abs,s=Math.min,r=Math.floor
;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,this.physicsBody=o,this.barnesHutTree,
this.setOptions(n),this.randomSeed=5}
return createClass$1(e,[{key:"setOptions",
value:function(e){
this.options=e,this.thetaInversed=1/this.options.theta,this.overlapAvoidanceFactor=1-a(0,s(1,this.options.avoidOverlap))
}},{key:"seededRandom",value:function(){
var e=1e4*t(this.randomSeed++);return e-r(e)}},{
key:"solve",value:function(){
if(0!==this.options.gravitationalConstant&&0<this.physicsBody.physicsNodeIndices.length){
var a,e=this.body.nodes,t=this.physicsBody.physicsNodeIndices,o=t.length,n=this._formBarnesHutTree(e,t)
;this.barnesHutTree=n
;for(var d=0;d<o;d++)0<(a=e[t[d]]).options.mass&&this._getForceContributions(n.root,a)
}}},{key:"_getForceContributions",
value:function(e,t){
this._getForceContribution(e.children.NW,t),this._getForceContribution(e.children.NE,t),
this._getForceContribution(e.children.SW,t),
this._getForceContribution(e.children.SE,t)}},{
key:"_getForceContribution",value:function(e,t){
var n,i,a
;0<e.childrenCount&&(n=e.centerOfMass.x-t.x,i=e.centerOfMass.y-t.y,(a=o(n*n+i*i))*e.calcSize>this.thetaInversed?this._calculateForces(a,n,i,t,e):4===e.childrenCount?this._getForceContributions(e,t):e.children.data.id!=t.id&&this._calculateForces(a,n,i,t,e))
}},{key:"_calculateForces",
value:function(e,t,o,i,d){
0===e&&(t=e=.1),1>this.overlapAvoidanceFactor&&i.shape.radius&&(e=a(.1+this.overlapAvoidanceFactor*i.shape.radius,e-i.shape.radius))
;var s=this.options.gravitationalConstant*d.mass*i.options.mass/n(e,3),r=t*s
;this.physicsBody.forces[i.id].x+=r,
this.physicsBody.forces[i.id].y+=o*s}},{
key:"_formBarnesHutTree",value:function(e,t){
for(var u,o=t.length,n=e[t[0]].x,s=e[t[0]].y,r=e[t[0]].x,l=e[t[0]].y,c=1;c<o;c++){
var p=e[t[c]],h=p.x,m=p.y
;0<p.options.mass&&(h<n&&(n=h),h>r&&(r=h),m<s&&(s=m),m>l&&(l=m))
}var g=d(r-n)-d(l-s)
;0<g?(s-=.5*g,l+=.5*g):(n+=.5*g,r-=.5*g)
;var y=a(1e-5,d(r-n)),f=.5*y,b=.5*(n+r),_=.5*(s+l),v={
root:{centerOfMass:{x:0,y:0},mass:0,range:{
minX:b-f,maxX:b+f,minY:_-f,maxY:_+f},size:y,
calcSize:1/y,children:{data:null},maxWidth:0,
level:0,childrenCount:4}}
;this._splitBranch(v.root)
;for(var k=0;k<o;k++)0<(u=e[t[k]]).options.mass&&this._placeInTree(v.root,u)
;return v}},{key:"_updateBranchMass",
value:function(e,t){
var o=e.centerOfMass,n=e.mass+t.options.mass,i=1/n
;o.x=o.x*e.mass+t.x*t.options.mass,
o.x*=i,o.y=o.y*e.mass+t.y*t.options.mass,o.y*=i,
e.mass=n;var d=a(a(t.height,t.radius),t.width)
;e.maxWidth=e.maxWidth<d?d:e.maxWidth}},{
key:"_placeInTree",value:function(e,t,o){
(1!=o||void 0===o)&&this._updateBranchMass(e,t)
;var i,n=e.children.NW.range
;i=n.maxX>t.x?n.maxY>t.y?"NW":"SW":n.maxY>t.y?"NE":"SE",
this._placeInRegion(e,t,i)}},{
key:"_placeInRegion",value:function(e,t,o){
var n=e.children[o];switch(n.childrenCount){
case 0:
n.children.data=t,n.childrenCount=1,this._updateBranchMass(n,t)
;break;case 1:
n.children.data.x===t.x&&n.children.data.y===t.y?(t.x+=this.seededRandom(),
t.y+=this.seededRandom()):(this._splitBranch(n),
this._placeInTree(n,t));break;case 4:
this._placeInTree(n,t)}}},{key:"_splitBranch",
value:function(e){var t=null
;1===e.childrenCount&&(t=e.children.data,e.mass=0,e.centerOfMass.x=0,
e.centerOfMass.y=0),
e.childrenCount=4,e.children.data=null,this._insertRegion(e,"NW"),
this._insertRegion(e,"NE"),
this._insertRegion(e,"SW"),this._insertRegion(e,"SE"),
null!=t&&this._placeInTree(e,t)}},{
key:"_insertRegion",value:function(e,t){
var n,i,a,d,o=.5*e.size
;"NW"===t?(n=e.range.minX,i=e.range.minX+o,a=e.range.minY,
d=e.range.minY+o):"NE"===t?(n=e.range.minX+o,
i=e.range.maxX,a=e.range.minY,d=e.range.minY+o):"SW"===t?(n=e.range.minX,
i=e.range.minX+o,
a=e.range.minY+o,d=e.range.maxY):"SE"===t&&(n=e.range.minX+o,i=e.range.maxX,
a=e.range.minY+o,d=e.range.maxY),e.children[t]={
centerOfMass:{x:0,y:0},mass:0,range:{minX:n,
maxX:i,minY:a,maxY:d},size:.5*e.size,
calcSize:2*e.calcSize,children:{data:null},
maxWidth:0,level:e.level+1,childrenCount:0}}},{
key:"_debug",value:function(e,t){
void 0!==this.barnesHutTree&&(e.lineWidth=1,this._drawBranch(this.barnesHutTree.root,e,t))
}},{key:"_drawBranch",value:function(e,t,o){
void 0===o&&(o="#FF0000"),4===e.childrenCount&&(this._drawBranch(e.children.NW,t),
this._drawBranch(e.children.NE,t),
this._drawBranch(e.children.SE,t),this._drawBranch(e.children.SW,t)),
t.strokeStyle=o,
t.beginPath(),t.moveTo(e.range.minX,e.range.minY),t.lineTo(e.range.maxX,e.range.minY),
t.stroke(),
t.beginPath(),t.moveTo(e.range.maxX,e.range.minY),t.lineTo(e.range.maxX,e.range.maxY),
t.stroke(),
t.beginPath(),t.moveTo(e.range.maxX,e.range.maxY),t.lineTo(e.range.minX,e.range.maxY),
t.stroke(),
t.beginPath(),t.moveTo(e.range.minX,e.range.maxY),t.lineTo(e.range.minX,e.range.minY),
t.stroke()}}]),e}(),RepulsionSolver=function(){
var t=Math.sqrt;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,this.physicsBody=o,
this.setOptions(n)}return createClass$1(e,[{
key:"setOptions",value:function(e){this.options=e}
},{key:"solve",value:function(){
for(var s,r,l,c,u,p,h,m,e=this.body.nodes,o=this.physicsBody.physicsNodeIndices,n=this.physicsBody.forces,a=this.options.nodeDistance,d=0;d<o.length-1;d++){
h=e[o[d]]
;for(var g=d+1;g<o.length;g++)s=(m=e[o[g]]).x-h.x,r=m.y-h.y,0===(l=t(s*s+r*r))&&(s=l=.1*Math.random()),
l<2*a&&(p=l<.5*a?1:-2/3/a*l+4/3,
c=s*(p/=l),u=r*p,n[h.id].x-=c,n[h.id].y-=u,n[m.id].x+=c,
n[m.id].y+=u)}}}]),e
}(),HierarchicalRepulsionSolver=function(){
var t=Math.sqrt,o=Math.pow;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,
this.physicsBody=o,this.setOptions(n)}
return createClass$1(e,[{key:"setOptions",
value:function(e){this.options=e}},{key:"solve",
value:function(){
var s,r,l,c,u,p,h,m,g,y,e=this.body.nodes,n=this.physicsBody.physicsNodeIndices,a=this.physicsBody.forces,d=this.options.nodeDistance
;for(g=0;g<n.length-1;g++)for(h=e[n[g]],
y=g+1;y<n.length;y++)if(m=e[n[y]],h.level===m.level){
s=m.x-h.x,r=m.y-h.y
;p=(l=t(s*s+r*r))<d?-o(.05*l,2)+o(.05*d,2):0,0===l?l=.01:p/=l,
c=s*p,u=r*p,a[h.id].x-=c,
a[h.id].y-=u,a[m.id].x+=c,a[m.id].y+=u}}}]),e
}(),SpringSolver=function(){
var t=Math.sqrt,o=Math.max;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,
this.physicsBody=o,this.setOptions(n)}
return createClass$1(e,[{key:"setOptions",
value:function(e){this.options=e}},{key:"solve",
value:function(){
for(var n,a,d,s,r,e=this.physicsBody.physicsEdgeIndices,t=this.body.edges,o=0;o<e.length;o++)!0===(a=t[e[o]]).connected&&a.toId!==a.fromId&&void 0!==this.body.nodes[a.toId]&&void 0!==this.body.nodes[a.fromId]&&(void 0===a.edgeType.via?(n=void 0===a.options.length?1.5*this.options.springLength:a.options.length,
this._calculateSpringForce(a.from,a.to,n)):(n=void 0===a.options.length?this.options.springLength:a.options.length,
d=a.to,
s=a.edgeType.via,r=a.from,this._calculateSpringForce(d,s,.5*n),this._calculateSpringForce(s,r,.5*n)))
}},{key:"_calculateSpringForce",
value:function(e,n,i){
var a=e.x-n.x,d=e.y-n.y,s=o(t(a*a+d*d),.01),r=this.options.springConstant*(i-s)/s,l=a*r,c=d*r
;void 0!==this.physicsBody.forces[e.id]&&(this.physicsBody.forces[e.id].x+=l,
this.physicsBody.forces[e.id].y+=c),
void 0!==this.physicsBody.forces[n.id]&&(this.physicsBody.forces[n.id].x-=l,
this.physicsBody.forces[n.id].y-=c)}}]),e
}(),HierarchicalSpringSolver=function(){
var t=Math.sqrt,o=Math.max,n=Math.min
;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,this.physicsBody=o,this.setOptions(n)
}return createClass$1(e,[{key:"setOptions",
value:function(e){this.options=e}},{key:"solve",
value:function(){
for(var c,u,p,h,m,g,y,f,b,e=this.body.edges,d=this.physicsBody.physicsEdgeIndices,s=this.physicsBody.physicsNodeIndices,r=this.physicsBody.forces,l=0;l<s.length;l++)r[b=s[l]].springFx=0,
r[b].springFy=0
;for(var _=0;_<d.length;_++)!0===(u=e[d[_]]).connected&&(c=void 0===u.options.length?this.options.springLength:u.options.length,
p=u.from.x-u.to.x,
h=u.from.y-u.to.y,f=0===(f=t(p*p+h*h))?.01:f,m=p*(y=this.options.springConstant*(c-f)/f),
g=h*y,
u.to.level==u.from.level?(void 0!==r[u.toId]&&(r[u.toId].x-=.5*m,r[u.toId].y-=.5*g),
void 0!==r[u.fromId]&&(r[u.fromId].x+=.5*m,
r[u.fromId].y+=.5*g)):(void 0!==r[u.toId]&&(r[u.toId].springFx-=m,
r[u.toId].springFy-=g),
void 0!==r[u.fromId]&&(r[u.fromId].springFx+=m,r[u.fromId].springFy+=g)))
;y=1
;for(var k,w,x,v=0;v<s.length;v++)x=s[v],k=n(y,o(-y,r[x].springFx)),w=n(y,o(-y,r[x].springFy)),
r[x].x+=k,r[x].y+=w
;for(var T,S=0,O=0,D=0;D<s.length;D++)S+=r[T=s[D]].x,O+=r[T].y
;for(var I,E=S/s.length,C=O/s.length,M=0;M<s.length;M++)r[I=s[M]].x-=E,
r[I].y-=C}}]),e
}(),CentralGravitySolver=function(){
var t=Math.sqrt;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,this.physicsBody=o,
this.setOptions(n)}return createClass$1(e,[{
key:"setOptions",value:function(e){this.options=e}
},{key:"solve",value:function(){
for(var d,s,r,l,e=this.body.nodes,o=this.physicsBody.physicsNodeIndices,n=this.physicsBody.forces,a=0;a<o.length;a++)d=-(l=e[o[a]]).x,
s=-l.y,
r=t(d*d+s*s),this._calculateForces(r,d,s,n,l)}},{
key:"_calculateForces",value:function(e,t,o,n,i){
var a=0===e?0:this.options.centralGravity/e
;n[i.id].x=t*a,n[i.id].y=o*a}}]),e
}(),ForceAtlas2BasedRepulsionSolver=function(e){
var o=Math.pow,n=Math.max;function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_calculateForces",value:function(e,t,i,a,d){
0===e&&(t=e=.1*Math.random()),1>this.overlapAvoidanceFactor&&a.shape.radius&&(e=n(.1+this.overlapAvoidanceFactor*a.shape.radius,e-a.shape.radius))
;var s=a.edges.length+1,r=this.options.gravitationalConstant*d.mass*a.options.mass*s/o(e,2),l=t*r
;this.physicsBody.forces[a.id].x+=l,
this.physicsBody.forces[a.id].y+=i*r}}]),t
}(BarnesHutSolver),ForceAtlas2BasedCentralGravitySolver=function(e){
function t(e,o,n){
return classCallCheck$1(this,t),possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n))
}return inherits$1(t,e),createClass$1(t,[{
key:"_calculateForces",value:function(e,t,o,n,i){
if(0<e){
var a=i.edges.length+1,d=this.options.centralGravity*a*i.options.mass
;n[i.id].x=t*d,n[i.id].y=o*d}}}]),t
}(CentralGravitySolver),PhysicsEngine=function(){
var t=Math.atan2,o=Math.sqrt,n=Math.pow,a=Math.max,d=Math.abs,s=Math.min
;function e(t){
classCallCheck$1(this,e),this.body=t,this.physicsBody={
physicsNodeIndices:[],physicsEdgeIndices:[],
forces:{},velocities:{}
},this.physicsEnabled=!0,this.simulationInterval=1e3/60,this.requiresTimeout=!0,
this.previousStates={},
this.referenceState={},this.freezeCache={},this.renderTimer=void 0,
this.adaptiveTimestep=!1,
this.adaptiveTimestepEnabled=!1,this.adaptiveCounter=0,
this.adaptiveInterval=3,this.stabilized=!1,
this.startedStabilization=!1,this.stabilizationIterations=0,
this.ready=!1,this.options={},
this.defaultOptions={enabled:!0,barnesHut:{
theta:.5,gravitationalConstant:-2e3,
centralGravity:.3,springLength:95,
springConstant:.04,damping:.09,avoidOverlap:0},
forceAtlas2Based:{theta:.5,
gravitationalConstant:-50,centralGravity:.01,
springConstant:.08,springLength:100,damping:.4,
avoidOverlap:0},repulsion:{centralGravity:.2,
springLength:200,springConstant:.05,
nodeDistance:100,damping:.09,avoidOverlap:0},
hierarchicalRepulsion:{centralGravity:0,
springLength:100,springConstant:.01,
nodeDistance:120,damping:.09},maxVelocity:50,
minVelocity:.75,solver:"barnesHut",stabilization:{
enabled:!0,iterations:1e3,updateInterval:50,
onlyDynamicEdges:!1,fit:!0},timestep:.5,
adaptiveTimestep:!0
},util.extend(this.options,this.defaultOptions),this.timestep=.5,
this.layoutFailed=!1,this.bindEventListeners()}
return createClass$1(e,[{key:"bindEventListeners",
value:function(){var e=this
;this.body.emitter.on("initPhysics",(function(){
e.initPhysics()
})),this.body.emitter.on("_layoutFailed",(function(){
e.layoutFailed=!0
})),this.body.emitter.on("resetPhysics",(function(){
e.stopSimulation(),e.ready=!1
})),this.body.emitter.on("disablePhysics",(function(){
e.physicsEnabled=!1,e.stopSimulation()
})),this.body.emitter.on("restorePhysics",(function(){
e.setOptions(e.options),!0===e.ready&&e.startSimulation()
})),this.body.emitter.on("startSimulation",(function(){
!0===e.ready&&e.startSimulation()
})),this.body.emitter.on("stopSimulation",(function(){
e.stopSimulation()
})),this.body.emitter.on("destroy",(function(){
e.stopSimulation(!1),e.body.emitter.off()
})),this.body.emitter.on("_dataChanged",(function(){
e.updatePhysicsData()}))}},{key:"setOptions",
value:function(e){
void 0!==e&&(!1===e?(this.options.enabled=!1,this.physicsEnabled=!1,
this.stopSimulation()):!0===e?(this.options.enabled=!0,
this.physicsEnabled=!0,this.startSimulation()):(this.physicsEnabled=!0,
util.selectiveNotDeepExtend(["stabilization"],this.options,e),
util.mergeOptions(this.options,e,"stabilization"),
void 0===e.enabled&&(this.options.enabled=!0),
!1===this.options.enabled&&(this.physicsEnabled=!1,
this.stopSimulation()),this.timestep=this.options.timestep)),
this.init()}},{key:"init",value:function(){var e
;"forceAtlas2Based"===this.options.solver?(e=this.options.forceAtlas2Based,
this.nodesSolver=new ForceAtlas2BasedRepulsionSolver(this.body,this.physicsBody,e),
this.edgesSolver=new SpringSolver(this.body,this.physicsBody,e),
this.gravitySolver=new ForceAtlas2BasedCentralGravitySolver(this.body,this.physicsBody,e)):"repulsion"===this.options.solver?(e=this.options.repulsion,
this.nodesSolver=new RepulsionSolver(this.body,this.physicsBody,e),
this.edgesSolver=new SpringSolver(this.body,this.physicsBody,e),
this.gravitySolver=new CentralGravitySolver(this.body,this.physicsBody,e)):"hierarchicalRepulsion"===this.options.solver?(e=this.options.hierarchicalRepulsion,
this.nodesSolver=new HierarchicalRepulsionSolver(this.body,this.physicsBody,e),
this.edgesSolver=new HierarchicalSpringSolver(this.body,this.physicsBody,e),
this.gravitySolver=new CentralGravitySolver(this.body,this.physicsBody,e)):(e=this.options.barnesHut,
this.nodesSolver=new BarnesHutSolver(this.body,this.physicsBody,e),
this.edgesSolver=new SpringSolver(this.body,this.physicsBody,e),
this.gravitySolver=new CentralGravitySolver(this.body,this.physicsBody,e)),
this.modelOptions=e}},{key:"initPhysics",
value:function(){
!0===this.physicsEnabled&&!0===this.options.enabled?!0===this.options.stabilization.enabled?this.stabilize():(this.stabilized=!1,
this.ready=!0,
this.body.emitter.emit("fit",{},this.layoutFailed),this.startSimulation()):(this.ready=!0,
this.body.emitter.emit("fit"))}},{
key:"startSimulation",value:function(){
var _context66
;!0===this.physicsEnabled&&!0===this.options.enabled?(this.stabilized=!1,
this.adaptiveTimestep=!1,
this.body.emitter.emit("_resizeNodes"),void 0===this.viewFunction&&(this.viewFunction=bind$2(_context66=this.simulationStep).call(_context66,this),
this.body.emitter.on("initRedraw",this.viewFunction),
this.body.emitter.emit("_startRendering"))):this.body.emitter.emit("_redraw")
}},{key:"stopSimulation",value:function(){
var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0]
;this.stabilized=!0,
!0===e&&this._emitStabilized(),void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),
this.viewFunction=void 0,
!0===e&&this.body.emitter.emit("_stopRendering"))}
},{key:"simulationStep",value:function(){
var e=now$2()
;this.physicsTick(),(now$2()-e<.4*this.simulationInterval||!0===this.runDoubleSpeed)&&!1===this.stabilized&&(this.physicsTick(),
this.runDoubleSpeed=!0),
!0===this.stabilized&&this.stopSimulation()}},{
key:"_emitStabilized",value:function(){
var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.stabilizationIterations
;(1<this.stabilizationIterations||!0===this.startedStabilization)&&setTimeout$1((function(){
e.body.emitter.emit("stabilized",{iterations:t
}),e.startedStabilization=!1,e.stabilizationIterations=0
}),0)}},{key:"physicsStep",value:function(){
this.gravitySolver.solve(),this.nodesSolver.solve(),
this.edgesSolver.solve(),this.moveNodes()}},{
key:"adjustTimeStep",value:function(){
!0===this._evaluateStepQuality()?this.timestep=1.2*this.timestep:this.timestep/1.2<this.options.timestep?this.timestep=this.options.timestep:(this.adaptiveCounter=-1,
this.timestep=a(this.options.timestep,this.timestep/1.2))
}},{key:"physicsTick",value:function(){
if(this._startStabilizing(),!0!==this.stabilized){
if(!0===this.adaptiveTimestep&&!0===this.adaptiveTimestepEnabled)0==this.adaptiveCounter%this.adaptiveInterval?(this.timestep=2*this.timestep,
this.physicsStep(),
this.revert(),this.timestep=.5*this.timestep,this.physicsStep(),
this.physicsStep(),
this.adjustTimeStep()):this.physicsStep(),this.adaptiveCounter+=1;else this.timestep=this.options.timestep,
this.physicsStep()
;!0===this.stabilized&&this.revert(),this.stabilizationIterations++
}}},{key:"updatePhysicsData",value:function(){
this.physicsBody.forces={},this.physicsBody.physicsNodeIndices=[],
this.physicsBody.physicsEdgeIndices=[]
;var e=this.body.nodes,t=this.body.edges
;for(var o in e)e.hasOwnProperty(o)&&!0===e[o].options.physics&&this.physicsBody.physicsNodeIndices.push(e[o].id)
;for(var n in t)t.hasOwnProperty(n)&&!0===t[n].options.physics&&this.physicsBody.physicsEdgeIndices.push(t[n].id)
;for(var d,a=0;a<this.physicsBody.physicsNodeIndices.length;a++)d=this.physicsBody.physicsNodeIndices[a],
this.physicsBody.forces[d]={x:0,y:0
},void 0===this.physicsBody.velocities[d]&&(this.physicsBody.velocities[d]={
x:0,y:0})
;for(var s in this.physicsBody.velocities)void 0===e[s]&&delete this.physicsBody.velocities[s]
}},{key:"revert",value:function(){
var e=keys$6(this.previousStates),t=this.body.nodes,o=this.physicsBody.velocities
;this.referenceState={}
;for(var a,n=0;n<e.length;n++)void 0===t[a=e[n]]?delete this.previousStates[a]:!0===t[a].options.physics&&(this.referenceState[a]={
positions:{x:t[a].x,y:t[a].y}
},o[a].x=this.previousStates[a].vx,o[a].y=this.previousStates[a].vy,
t[a].x=this.previousStates[a].x,
t[a].y=this.previousStates[a].y)}},{
key:"_evaluateStepQuality",value:function(){
var i,a,e=this.body.nodes,t=this.referenceState
;for(var s in this.referenceState)if(this.referenceState.hasOwnProperty(s)&&void 0!==e[s]&&(i=e[s].x-t[s].positions.x,
a=e[s].y-t[s].positions.y,
o(n(i,2)+n(a,2))>.3))return!1;return!0}},{
key:"moveNodes",value:function(){
for(var e=this.physicsBody.physicsNodeIndices,t=0,o=0,d=0;d<e.length;d++){
var s=e[d],r=this._performStep(s);t=a(t,r),o+=r}
this.adaptiveTimestepEnabled=o/e.length<5,
this.stabilized=t<this.options.minVelocity}},{
key:"calculateComponentVelocity",
value:function(e,t,o){
e+=(t-this.modelOptions.damping*e)/o*this.timestep
;var i=this.options.maxVelocity||1e9
;return d(e)>i&&(e=0<e?i:-i),e}},{
key:"_performStep",value:function(e){
var t=this.body.nodes[e],i=this.physicsBody.forces[e],a=this.physicsBody.velocities[e]
;return this.previousStates[e]={x:t.x,y:t.y,
vx:a.x,vy:a.y
},!1===t.options.fixed.x?(a.x=this.calculateComponentVelocity(a.x,i.x,t.options.mass),
t.x+=a.x*this.timestep):(i.x=0,
a.x=0),!1===t.options.fixed.y?(a.y=this.calculateComponentVelocity(a.y,i.y,t.options.mass),
t.y+=a.y*this.timestep):(i.y=0,
a.y=0),o(n(a.x,2)+n(a.y,2))}},{key:"_freezeNodes",
value:function(){var e=this.body.nodes
;for(var t in e)if(e.hasOwnProperty(t)&&e[t].x&&e[t].y){
var o=e[t].options.fixed;this.freezeCache[t]={
x:o.x,y:o.y},o.x=!0,o.y=!0}}},{
key:"_restoreFrozenNodes",value:function(){
var e=this.body.nodes
;for(var t in e)e.hasOwnProperty(t)&&void 0!==this.freezeCache[t]&&(e[t].options.fixed.x=this.freezeCache[t].x,
e[t].options.fixed.y=this.freezeCache[t].y)
;this.freezeCache={}}},{key:"stabilize",
value:function(){
var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options.stabilization.iterations
;return"number"!=typeof t&&(t=this.options.stabilization.iterations,
console.log("The stabilize method needs a numeric amount of iterations. Switching to default: ",t)),
0===this.physicsBody.physicsNodeIndices.length?void(this.ready=!0):(this.adaptiveTimestep=this.options.adaptiveTimestep,
this.body.emitter.emit("_resizeNodes"),
this.stopSimulation(),this.stabilized=!1,
this.body.emitter.emit("_blockRedraw"),
this.targetIterations=t,!0===this.options.stabilization.onlyDynamicEdges&&this._freezeNodes(),
this.stabilizationIterations=0,
void setTimeout$1((function(){
return e._stabilizationBatch()}),0))}},{
key:"_startStabilizing",value:function(){
return!0!==this.startedStabilization&&(this.body.emitter.emit("startStabilizing"),
this.startedStabilization=!0,!0)}},{
key:"_stabilizationBatch",value:function(){
var _context67,e=this,t=function(){
return!1===e.stabilized&&e.stabilizationIterations<e.targetIterations
},o=function(){
e.body.emitter.emit("stabilizationProgress",{
iterations:e.stabilizationIterations,
total:e.targetIterations})}
;this._startStabilizing()&&o()
;for(var n=0;t()&&n<this.options.stabilization.updateInterval;)this.physicsTick(),
n++
;o(),t()?setTimeout$1(bind$2(_context67=this._stabilizationBatch).call(_context67,this),0):this._finalizeStabilization()
}},{key:"_finalizeStabilization",value:function(){
this.body.emitter.emit("_allowRedraw"),
!0===this.options.stabilization.fit&&this.body.emitter.emit("fit"),
!0===this.options.stabilization.onlyDynamicEdges&&this._restoreFrozenNodes(),
this.body.emitter.emit("stabilizationIterationsDone"),
this.body.emitter.emit("_requestRedraw"),
!0===this.stabilized?this._emitStabilized():this.startSimulation(),
this.ready=!0}},{key:"_drawForces",
value:function(e){
for(var d=0;d<this.physicsBody.physicsNodeIndices.length;d++){
var r=this.physicsBody.physicsNodeIndices[d],l=this.body.nodes[r],c=this.physicsBody.forces[r],p=o(n(c.x,2)+n(c.x,2)),h=s(a(5,p),15),m=util.HSVToHex((180-180*s(1,a(0,.03*p)))/360,1,1),g={
x:l.x+20*c.x,y:l.y+20*c.y}
;e.lineWidth=h,e.strokeStyle=m,e.beginPath(),e.moveTo(l.x,l.y),
e.lineTo(g.x,g.y),e.stroke();var y=t(c.y,c.x)
;e.fillStyle=m,EndPoints.draw(e,{type:"arrow",
point:g,angle:y,length:3*h}),fill$2(e).call(e)}}
}]),e}(),NetworkUtil=function(){function e(){
classCallCheck$1(this,e)}
return createClass$1(e,null,[{key:"getRange",
value:function(e){
var s,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,a=1e9,d=-1e9
;if(0<t.length)for(var r=0;r<t.length;r++)a>(s=e[t[r]]).shape.boundingBox.left&&(a=s.shape.boundingBox.left),
d<s.shape.boundingBox.right&&(d=s.shape.boundingBox.right),
o>s.shape.boundingBox.top&&(o=s.shape.boundingBox.top),
n<s.shape.boundingBox.bottom&&(n=s.shape.boundingBox.bottom)
;return 1e9===a&&-1e9===d&&1e9===o&&-1e9===n&&(o=0,
n=0,a=0,d=0),{minX:a,maxX:d,minY:o,maxY:n}}},{
key:"getRangeCore",value:function(e){
var s,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],o=1e9,n=-1e9,a=1e9,d=-1e9
;if(0<t.length)for(var r=0;r<t.length;r++)a>(s=e[t[r]]).x&&(a=s.x),
d<s.x&&(d=s.x),o>s.y&&(o=s.y),n<s.y&&(n=s.y)
;return 1e9===a&&-1e9===d&&1e9===o&&-1e9===n&&(o=0,
n=0,a=0,d=0),{minX:a,maxX:d,minY:o,maxY:n}}},{
key:"findCenter",value:function(e){return{
x:.5*(e.maxX+e.minX),y:.5*(e.maxY+e.minY)}}},{
key:"cloneOptions",value:function(e,t){var o={}
;return void 0===t||"node"===t?(util.deepExtend(o,e.options,!0),
o.x=e.x,o.y=e.y,
o.amountOfConnections=e.edges.length):util.deepExtend(o,e.options,!0),
o}}]),e}(),Cluster=function(e){
function t(e,o,n,i,a,d){var s
;return classCallCheck$1(this,t),(s=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this,e,o,n,i,a,d))).isCluster=!0,
s.containedNodes={},s.containedEdges={},s}
return inherits$1(t,e),createClass$1(t,[{
key:"_openChildCluster",value:function(e){
var t=this,o=this.body.nodes[e]
;if(void 0===this.containedNodes[e])throw new Error("node with id: "+e+" not in current cluster")
;if(!o.isCluster)throw new Error("node with id: "+e+" is not a cluster")
;delete this.containedNodes[e],
forEach$2(util).call(util,o.edges,(function(e){
delete t.containedEdges[e.id]
})),forEach$2(util).call(util,o.containedNodes,(function(e,o){
t.containedNodes[o]=e
})),o.containedNodes={},forEach$2(util).call(util,o.containedEdges,(function(e,o){
t.containedEdges[o]=e
})),o.containedEdges={},forEach$2(util).call(util,o.edges,(function(e){
forEach$2(util).call(util,t.edges,(function(o){
var _context68,_context69,n=indexOf$3(_context68=o.clusteringEdgeReplacingIds).call(_context68,e.id)
;-1===n||(forEach$2(util).call(util,e.clusteringEdgeReplacingIds,(function(e){
o.clusteringEdgeReplacingIds.push(e),
t.body.edges[e].edgeReplacedById=o.id
})),splice$2(_context69=o.clusteringEdgeReplacingIds).call(_context69,n,1))
}))})),o.edges=[]}}]),t
}(Node),ClusterEngine=function(){
var t=Math.sqrt,o=Math.pow,n=Math.floor
;function e(t){var o=this
;classCallCheck$1(this,e),this.body=t,this.clusteredNodes={},
this.clusteredEdges={},
this.options={},this.defaultOptions={},util.extend(this.options,this.defaultOptions),
this.body.emitter.on("_resetData",(function(){
o.clusteredNodes={},o.clusteredEdges={}}))}
return createClass$1(e,[{key:"clusterByHubsize",
value:function(e,t){
void 0===e?e=this._getHubSize():"object"===_typeof_1$1(e)&&(t=this._checkOptions(e),
e=this._getHubSize())
;for(var a,o=[],n=0;n<this.body.nodeIndices.length;n++)(a=this.body.nodes[this.body.nodeIndices[n]]).edges.length>=e&&o.push(a.id)
;for(var d=0;d<o.length;d++)this.clusterByConnection(o[d],t,!0)
;this.body.emitter.emit("_dataChanged")}},{
key:"cluster",value:function(){
var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;if(void 0===t.joinCondition)throw new Error("Cannot call clusterByNodeData without a joinCondition function in the options.")
;t=this._checkOptions(t);var n={},i={}
;forEach$2(util).call(util,this.body.nodes,(function(o,a){
o.options&&!0===t.joinCondition(o.options)&&(n[a]=o,
forEach$2(util).call(util,o.edges,(function(t){
void 0===e.clusteredEdges[t.id]&&(i[t.id]=t)})))
})),this._cluster(n,i,t,o)}},{
key:"clusterByEdgeCount",value:function(e,t){
var o=this,n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2]
;t=this._checkOptions(t)
;for(var l,c,u,a=[],d={},s=function(n){
var i={},s={},r=o.body.nodeIndices[n],y=o.body.nodes[r]
;if(void 0===d[r]){u=0,c=[]
;for(var f=0;f<y.edges.length;f++)l=y.edges[f],void 0===o.clusteredEdges[l.id]&&(l.toId!==l.fromId&&u++,
c.push(l));if(u===e){p=function(e){
if(void 0===t.joinCondition||null===t.joinCondition)return!0
;var o=NetworkUtil.cloneOptions(e)
;return t.joinCondition(o)}
;for(var b=!0,_=0;_<c.length;_++){l=c[_]
;var v=o._getConnectedId(l,r);if(!p(y)){b=!1;break
}s[l.id]=l,i[r]=y,i[v]=o.body.nodes[v],d[r]=!0}
if(0<keys$6(i).length&&0<keys$6(s).length&&!0===b)if(void 0!==(g=function(){
for(var e=0;e<a.length;++e)for(var t in i)if(void 0!==a[e].nodes[t])return a[e]
}())){
for(var k in i)void 0===g.nodes[k]&&(g.nodes[k]=i[k])
;for(var m in s)void 0===g.edges[m]&&(g.edges[m]=s[m])
}else a.push({nodes:i,edges:s})}}
},r=0;r<this.body.nodeIndices.length;r++){var p,g
;s(r)}
for(r=0;r<a.length;r++)this._cluster(a[r].nodes,a[r].edges,t,!1)
;!0===n&&this.body.emitter.emit("_dataChanged")}
},{key:"clusterOutliers",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;this.clusterByEdgeCount(1,e,t)}},{
key:"clusterBridges",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;this.clusterByEdgeCount(2,e,t)}},{
key:"clusterByConnection",value:function(e,t){
var _context70,o=!(2<arguments.length&&void 0!==arguments[2])||arguments[2]
;if(void 0===e)throw new Error("No nodeId supplied to clusterByConnection!")
;if(void 0===this.body.nodes[e])throw new Error("The nodeId given to clusterByConnection does not exist!")
;var n=this.body.nodes[e]
;void 0===(t=this._checkOptions(t,n)).clusterNodeProperties.x&&(t.clusterNodeProperties.x=n.x),
void 0===t.clusterNodeProperties.y&&(t.clusterNodeProperties.y=n.y),
void 0===t.clusterNodeProperties.fixed&&(t.clusterNodeProperties.fixed={},
t.clusterNodeProperties.fixed.x=n.options.fixed.x,
t.clusterNodeProperties.fixed.y=n.options.fixed.y)
;var a={},d={},s=n.id,r=NetworkUtil.cloneOptions(n)
;a[s]=n
;for(var c,l=0;l<n.edges.length;l++)if(c=n.edges[l],void 0===this.clusteredEdges[c.id]){
var u=this._getConnectedId(c,s)
;if(void 0===this.clusteredNodes[u])if(u===s)d[c.id]=c;else if(void 0===t.joinCondition)d[c.id]=c,
a[u]=this.body.nodes[u];else{
var p=NetworkUtil.cloneOptions(this.body.nodes[u])
;!0===t.joinCondition(r,p)&&(d[c.id]=c,
a[u]=this.body.nodes[u])}}
var h=map$2(_context70=keys$6(a)).call(_context70,(function(e){
return a[e].id}))
;for(m in a)if(a.hasOwnProperty(m))for(var f,m=a[m],g=0;g<m.edges.length;g++)f=m.edges[g],
-1<indexOf$3(h).call(h,this._getConnectedId(f,m.id))&&(d[f.id]=f)
;this._cluster(a,d,t,o)}},{
key:"_createClusterEdges",value:function(e,t,o,n){
for(var r,l,c,u,p,h,a=keys$6(e),d=[],s=0;s<a.length;s++){
c=e[l=a[s]]
;for(var m=0;m<c.edges.length;m++)r=c.edges[m],void 0===this.clusteredEdges[r.id]&&(r.toId==r.fromId?t[r.id]=r:r.toId==l?(u=o.id,
h=p=r.fromId):(u=r.toId,
p=o.id,h=u),void 0===e[h]&&d.push({edge:r,
fromId:p,toId:u}))}for(var g=[],y=function(e){
for(var t=0;t<g.length;t++){
var o=g[t],n=e.fromId===o.fromId&&e.toId===o.toId,i=e.fromId===o.toId&&e.toId===o.fromId
;if(n||i)return o}return null
},f=0;f<d.length;f++){var b=d[f],_=b.edge,v=y(b)
;null===v?(v=this._createClusteredEdge(b.fromId,b.toId,_,n),
g.push(v)):v.clusteringEdgeReplacingIds.push(_.id),
this.body.edges[_.id].edgeReplacedById=v.id,
this._backupEdgeOptions(_),_.setOptions({
physics:!1})}}},{key:"_checkOptions",
value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
;return void 0===e.clusterEdgeProperties&&(e.clusterEdgeProperties={}),
void 0===e.clusterNodeProperties&&(e.clusterNodeProperties={}),
e}},{key:"_cluster",value:function(e,t,o){
var i=!(3<arguments.length&&void 0!==arguments[3])||arguments[3],a=[]
;for(var d in e)e.hasOwnProperty(d)&&void 0!==this.clusteredNodes[d]&&a.push(d)
;for(var s=0;s<a.length;++s)delete e[a[s]]
;if(0!=keys$6(e).length&&(1!=keys$6(e).length||1==o.clusterNodeProperties.allowSingleNodeCluster)){
var r=util.deepExtend({},o.clusterNodeProperties)
;if(void 0!==o.processProperties){var l=[]
;for(var c in e)if(e.hasOwnProperty(c)){
var u=NetworkUtil.cloneOptions(e[c]);l.push(u)}
var p=[]
;for(var h in t)if(t.hasOwnProperty(h)&&"clusterEdge:"!==h.substr(0,12)){
var m=NetworkUtil.cloneOptions(t[h],"edge")
;p.push(m)}
if(!(r=o.processProperties(r,l,p)))throw new Error("The processProperties function does not return properties!")
}
void 0===r.id&&(r.id="cluster:"+util.randomUUID())
;var y,g=r.id
;void 0===r.label&&(r.label="cluster"),void 0===r.x&&(y=this._getClusterPosition(e),
r.x=y.x),
void 0===r.y&&(void 0===y&&(y=this._getClusterPosition(e)),r.y=y.y),r.id=g
;var f=this.body.functions.createNode(r,Cluster)
;f.containedNodes=e,f.containedEdges=t,
f.clusterEdgeProperties=o.clusterEdgeProperties,
this.body.nodes[r.id]=f,this._clusterEdges(e,t,r,o.clusterEdgeProperties),
r.id=void 0,
!0===i&&this.body.emitter.emit("_dataChanged")}}
},{key:"_backupEdgeOptions",value:function(e){
void 0===this.clusteredEdges[e.id]&&(this.clusteredEdges[e.id]={
physics:e.options.physics})}},{key:"_restoreEdge",
value:function(e){var t=this.clusteredEdges[e.id]
;void 0!==t&&(e.setOptions({physics:t.physics
}),delete this.clusteredEdges[e.id])}},{
key:"isCluster",value:function(e){
return void 0===this.body.nodes[e]?(console.log("Node does not exist."),
!1):!0===this.body.nodes[e].isCluster}},{
key:"_getClusterPosition",value:function(e){
for(var r,t=keys$6(e),o=e[t[0]].x,n=e[t[0]].x,a=e[t[0]].y,d=e[t[0]].y,s=1;s<t.length;s++)o=(r=e[t[s]]).x<o?r.x:o,
n=r.x>n?r.x:n,a=r.y<a?r.y:a,d=r.y>d?r.y:d;return{
x:.5*(o+n),y:.5*(a+d)}}},{key:"openCluster",
value:function(e,t){
var o=!(2<arguments.length&&void 0!==arguments[2])||arguments[2]
;if(void 0===e)throw new Error("No clusterNodeId supplied to openCluster.")
;var n=this.body.nodes[e]
;if(void 0===n)throw new Error("The clusterNodeId supplied to openCluster does not exist.")
;if(!0!==n.isCluster||void 0===n.containedNodes||void 0===n.containedEdges)throw new Error("The node:"+e+" is not a valid cluster.")
;var a=this.findNode(e),d=indexOf$3(a).call(a,e)-1
;if(0<=d){var s=a[d],r=this.body.nodes[s]
;return r._openChildCluster(e),delete this.body.nodes[e],
void(!0===o&&this.body.emitter.emit("_dataChanged"))
}var l=n.containedNodes,c=n.containedEdges
;if(void 0!==t&&void 0!==t.releaseFunction&&"function"==typeof t.releaseFunction){
var u={},p={x:n.x,y:n.y}
;for(var h in l)if(l.hasOwnProperty(h)){
var m=this.body.nodes[h];u[h]={x:m.x,y:m.y}}
var g=t.releaseFunction(p,u)
;for(var y in l)if(l.hasOwnProperty(y)){
var f=this.body.nodes[y]
;void 0!==g[y]&&(f.x=void 0===g[y].x?n.x:g[y].x,f.y=void 0===g[y].y?n.y:g[y].y)
}}else forEach$2(util).call(util,l,(function(e){
!1===e.options.fixed.x&&(e.x=n.x),
!1===e.options.fixed.y&&(e.y=n.y)}))
;for(var b in l)if(l.hasOwnProperty(b)){
var _=this.body.nodes[b]
;_.vx=n.vx,_.vy=n.vy,_.setOptions({physics:!0
}),delete this.clusteredNodes[b]}
for(var v=[],k=0;k<n.edges.length;k++)v.push(n.edges[k])
;for(var w=0;w<v.length;w++){
for(var x=v[w],S=this._getConnectedId(x,e),O=this.clusteredNodes[S],D=0;D<x.clusteringEdgeReplacingIds.length;D++){
var T=x.clusteringEdgeReplacingIds[D],E=this.body.edges[T]
;if(void 0!==E)if(void 0!==O){
var C=this.body.nodes[O.clusterId]
;C.containedEdges[E.id]=E,delete c[E.id]
;var M=E.fromId,I=E.toId
;E.toId==S?I=O.clusterId:M=O.clusterId,this._createClusteredEdge(M,I,E,C.clusterEdgeProperties,{
hidden:!1,physics:!0})}else this._restoreEdge(E)}
x.remove()}
for(var P in c)c.hasOwnProperty(P)&&this._restoreEdge(c[P])
;delete this.body.nodes[e],
!0===o&&this.body.emitter.emit("_dataChanged")}},{
key:"getNodesInCluster",value:function(e){var t=[]
;if(!0===this.isCluster(e)){
var o=this.body.nodes[e].containedNodes
;for(var n in o)o.hasOwnProperty(n)&&t.push(this.body.nodes[n].id)
}return t}},{key:"findNode",value:function(e){
for(var n,t=[],o=0;void 0!==this.clusteredNodes[e]&&o<100;){
if(void 0===(n=this.body.nodes[e]))return[]
;t.push(n.id),e=this.clusteredNodes[e].clusterId,
o++}
return void 0===(n=this.body.nodes[e])?[]:(t.push(n.id),reverse$2(t).call(t),
t)}},{key:"updateClusteredNode",
value:function(e,t){
if(void 0===e)throw new Error("No clusteredNodeId supplied to updateClusteredNode.")
;if(void 0===t)throw new Error("No newOptions supplied to updateClusteredNode.")
;if(void 0===this.body.nodes[e])throw new Error("The clusteredNodeId supplied to updateClusteredNode does not exist.")
;this.body.nodes[e].setOptions(t),
this.body.emitter.emit("_dataChanged")}},{
key:"updateEdge",value:function(e,t){
if(void 0===e)throw new Error("No startEdgeId supplied to updateEdge.")
;if(void 0===t)throw new Error("No newOptions supplied to updateEdge.")
;if(void 0===this.body.edges[e])throw new Error("The startEdgeId supplied to updateEdge does not exist.")
;for(var o=this.getClusteredEdges(e),n=0;n<o.length;n++)this.body.edges[o[n]].setOptions(t)
;this.body.emitter.emit("_dataChanged")}},{
key:"getClusteredEdges",value:function(e){
for(var t=[],o=0;void 0!==e&&void 0!==this.body.edges[e]&&o<100;)t.push(this.body.edges[e].id),
e=this.body.edges[e].edgeReplacedById,o++
;return reverse$2(t).call(t),t}},{
key:"getBaseEdge",value:function(e){
return this.getBaseEdges(e)[0]}},{
key:"getBaseEdges",value:function(e){
for(var d,t=[e],o=[],n=[],a=0;0<t.length&&a<100;)if(void 0!==(d=t.pop())){
var s=this.body.edges[d];if(void 0!==s){a++
;var r=s.clusteringEdgeReplacingIds
;if(void 0===r)n.push(d);else for(var c,l=0;l<r.length;++l)c=r[l],
-1===indexOf$3(t).call(t,r)&&-1===indexOf$3(o).call(o,r)&&t.push(c)
;o.push(d)}}return n}},{key:"_getConnectedId",
value:function(e,t){
return e.toId==t?(e.fromId,e.fromId):e.toId}},{
key:"_getHubSize",value:function(){
for(var l,e=0,a=0,d=0,s=0,r=0;r<this.body.nodeIndices.length;r++)(l=this.body.nodes[this.body.nodeIndices[r]]).edges.length>s&&(s=l.edges.length),
e+=l.edges.length,a+=o(l.edges.length,2),d+=1
;var c=(a/=d)-o(e/=d,2),u=t(c),p=n(e+2*u)
;return p>s&&(p=s),p}},{
key:"_createClusteredEdge",
value:function(e,t,o,n,i){
var a=NetworkUtil.cloneOptions(o,"edge")
;util.deepExtend(a,n),a.from=e,a.to=t,a.id="clusterEdge:"+util.randomUUID(),
void 0!==i&&util.deepExtend(a,i)
;var d=this.body.functions.createEdge(a)
;return d.clusteringEdgeReplacingIds=[o.id],
d.connect(),this.body.edges[d.id]=d,d}},{
key:"_clusterEdges",value:function(e,t,o,n){
if(t instanceof Edge){var i=t,a={};a[i.id]=i,t=a}
if(e instanceof Node){var d=e,s={};s[d.id]=d,e=s}
if(null==o)throw new Error("_clusterEdges: parameter clusterNode required")
;for(var r in void 0===n&&(n=o.clusterEdgeProperties),
this._createClusterEdges(e,t,o,n),
t)if(t.hasOwnProperty(r)&&void 0!==this.body.edges[r]){
var l=this.body.edges[r]
;this._backupEdgeOptions(l),l.setOptions({
physics:!1})}
for(var c in e)e.hasOwnProperty(c)&&(this.clusteredNodes[c]={
clusterId:o.id,node:this.body.nodes[c]
},this.body.nodes[c].setOptions({physics:!1}))}},{
key:"_getClusterNodeForNode",value:function(e){
if(void 0!==e){var t=this.clusteredNodes[e]
;if(void 0!==t){var o=t.clusterId
;return void 0===o?void 0:this.body.nodes[o]}}}},{
key:"_filter",value:function(e,t){var o=[]
;return forEach$2(util).call(util,e,(function(e){
t(e)&&o.push(e)})),o}},{key:"_updateState",
value:function(){
var a,e=this,t=[],o={},i=function(t){
forEach$2(util).call(util,e.body.nodes,(function(e){
!0===e.isCluster&&t(e)}))}
;for(a in this.clusteredNodes){
if(this.clusteredNodes.hasOwnProperty(a))void 0===this.body.nodes[a]&&t.push(a)
}i((function(e){
for(var o=0;o<t.length;o++)delete e.containedNodes[t[o]]
}))
;for(var s=0;s<t.length;s++)delete this.clusteredNodes[t[s]]
;forEach$2(util).call(util,this.clusteredEdges,(function(t){
var n=e.body.edges[t]
;void 0!==n&&n.endPointsValid()||(o[t]=t)
})),i((function(e){
forEach$2(util).call(util,e.containedEdges,(function(e,t){
e.endPointsValid()||o[t]||(o[t]=t)}))
})),forEach$2(util).call(util,this.body.edges,(function(t,n){
var i=!0,a=t.clusteringEdgeReplacingIds
;if(void 0!==a){var d=0
;forEach$2(util).call(util,a,(function(t){
var o=e.body.edges[t]
;void 0!==o&&o.endPointsValid()&&(d+=1)})),i=0<d}
t.endPointsValid()&&i||(o[n]=n)})),i((function(t){
forEach$2(util).call(util,o,(function(n){
delete t.containedEdges[n],forEach$2(util).call(util,t.edges,(function(i,a){
return i.id===n?void(t.edges[a]=null):void(i.clusteringEdgeReplacingIds=e._filter(i.clusteringEdgeReplacingIds,(function(e){
return!o[e]})))
})),t.edges=e._filter(t.edges,(function(e){
return null!==e}))}))
})),forEach$2(util).call(util,o,(function(t){
delete e.clusteredEdges[t]
})),forEach$2(util).call(util,o,(function(t){
delete e.body.edges[t]}))
;var r=keys$6(this.body.edges)
;forEach$2(util).call(util,r,(function(t){
var o=e.body.edges[t],n=e._isClusteredNode(o.fromId)||e._isClusteredNode(o.toId)
;if(n!==e._isClusteredEdge(o.id))if(n){
var i=e._getClusterNodeForNode(o.fromId)
;void 0!==i&&e._clusterEdges(e.body.nodes[o.fromId],o,i)
;var a=e._getClusterNodeForNode(o.toId)
;void 0!==a&&e._clusterEdges(e.body.nodes[o.toId],o,a)
}else delete e._clusterEdges[t],e._restoreEdge(o)
}));for(var l=!1,c=!0,u=function(){var t=[]
;i((function(e){
var o=keys$6(e.containedNodes).length,n=!0===e.options.allowSingleNodeCluster
;(n&&1>o||!n&&2>o)&&t.push(e.id)}))
;for(var o=0;o<t.length;++o)e.openCluster(t[o],{},!1)
;c=0<t.length,l=l||c};c;)u()
;l&&this._updateState()}},{key:"_isClusteredNode",
value:function(e){
return void 0!==this.clusteredNodes[e]}},{
key:"_isClusteredEdge",value:function(e){
return void 0!==this.clusteredEdges[e]}}]),e}()
;var CanvasRenderer=function(){function e(t,o){
classCallCheck$1(this,e),function(){var e
;void 0!==window&&(e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame),
window.requestAnimationFrame=void 0===e?function(e){
e()}:e
}(),this.body=t,this.canvas=o,this.redrawRequested=!1,this.renderTimer=void 0,
this.requiresTimeout=!0,
this.renderingActive=!1,this.renderRequests=0,this.allowRedraw=!0,
this.dragging=!1,
this.zooming=!1,this.options={},this.defaultOptions={
hideEdgesOnDrag:!1,hideEdgesOnZoom:!1,
hideNodesOnDrag:!1
},util.extend(this.options,this.defaultOptions),this._determineBrowserMethod(),
this.bindEventListeners()}
return createClass$1(e,[{key:"bindEventListeners",
value:function(){var _context72,e=this
;this.body.emitter.on("dragStart",(function(){
e.dragging=!0
})),this.body.emitter.on("dragEnd",(function(){
e.dragging=!1
})),this.body.emitter.on("zoom",(function(){
e.zooming=!0,window.clearTimeout(e.zoomTimeoutId),
e.zoomTimeoutId=window.setTimeout((function(){
var _context71
;e.zooming=!1,bind$2(_context71=e._requestRedraw).call(_context71,e)()
}),250)
})),this.body.emitter.on("_resizeNodes",(function(){
e._resizeNodes()
})),this.body.emitter.on("_redraw",(function(){
!1===e.renderingActive&&e._redraw()
})),this.body.emitter.on("_blockRedraw",(function(){
e.allowRedraw=!1
})),this.body.emitter.on("_allowRedraw",(function(){
e.allowRedraw=!0,e.redrawRequested=!1
})),this.body.emitter.on("_requestRedraw",bind$2(_context72=this._requestRedraw).call(_context72,this)),
this.body.emitter.on("_startRendering",(function(){
e.renderRequests+=1,e.renderingActive=!0,
e._startRendering()
})),this.body.emitter.on("_stopRendering",(function(){
e.renderRequests-=1,e.renderingActive=0<e.renderRequests,
e.renderTimer=void 0
})),this.body.emitter.on("destroy",(function(){
e.renderRequests=0,e.allowRedraw=!1,
e.renderingActive=!1,!0===e.requiresTimeout?clearTimeout(e.renderTimer):window.cancelAnimationFrame(e.renderTimer),
e.body.emitter.off()}))}},{key:"setOptions",
value:function(e){
void 0!==e&&util.selectiveDeepExtend(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag"],this.options,e)
}},{key:"_requestNextFrame",value:function(e,t){
if("undefined"!=typeof window){var n,o=window
;return!0===this.requiresTimeout?n=o.setTimeout(e,t):o.requestAnimationFrame&&(n=o.requestAnimationFrame(e)),
n}}},{key:"_startRendering",value:function(){
var _context73
;!0===this.renderingActive&&void 0===this.renderTimer&&(this.renderTimer=this._requestNextFrame(bind$2(_context73=this._renderStep).call(_context73,this),this.simulationInterval))
}},{key:"_renderStep",value:function(){
!0===this.renderingActive&&(this.renderTimer=void 0,
!0===this.requiresTimeout&&this._startRendering(),
this._redraw(),!1===this.requiresTimeout&&this._startRendering())
}},{key:"redraw",value:function(){
this.body.emitter.emit("setSize"),this._redraw()}
},{key:"_requestRedraw",value:function(){
var e=this
;!0!==this.redrawRequested&&!1===this.renderingActive&&!0===this.allowRedraw&&(this.redrawRequested=!0,
this._requestNextFrame((function(){e._redraw(!1)
}),0))}},{key:"_redraw",value:function(){
var e=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0]
;if(!0===this.allowRedraw){
this.body.emitter.emit("initRedraw"),this.redrawRequested=!1,
(0===this.canvas.frame.canvas.width||0===this.canvas.frame.canvas.height)&&this.canvas.setSize(),
this.canvas.setTransform()
;var t=this.canvas.getContext(),o=this.canvas.frame.canvas.clientWidth,n=this.canvas.frame.canvas.clientHeight
;if(t.clearRect(0,0,o,n),
0===this.canvas.frame.clientWidth)return
;t.save(),t.translate(this.body.view.translation.x,this.body.view.translation.y),
t.scale(this.body.view.scale,this.body.view.scale),
t.beginPath(),this.body.emitter.emit("beforeDrawing",t),
t.closePath(),!1===e&&(!1===this.dragging||!0===this.dragging&&!1===this.options.hideEdgesOnDrag)&&(!1===this.zooming||!0===this.zooming&&!1===this.options.hideEdgesOnZoom)&&this._drawEdges(t),
(!1===this.dragging||!0===this.dragging&&!1===this.options.hideNodesOnDrag)&&this._drawNodes(t,e),
t.beginPath(),
this.body.emitter.emit("afterDrawing",t),t.closePath(),t.restore(),
!0===e&&t.clearRect(0,0,o,n)}}},{
key:"_resizeNodes",value:function(){
this.canvas.setTransform()
;var e=this.canvas.getContext()
;e.save(),e.translate(this.body.view.translation.x,this.body.view.translation.y),
e.scale(this.body.view.scale,this.body.view.scale)
;var o,t=this.body.nodes
;for(var n in t)t.hasOwnProperty(n)&&((o=t[n]).resize(e),
o.updateBoundingBox(e,o.selected));e.restore()}},{
key:"_drawNodes",value:function(e){
for(var u,t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],o=this.body.nodes,n=this.body.nodeIndices,a=[],d=20,s=this.canvas.DOMtoCanvas({
x:-d,y:-d}),r=this.canvas.DOMtoCanvas({
x:this.canvas.frame.canvas.clientWidth+d,
y:this.canvas.frame.canvas.clientHeight+d}),l={
top:s.y,left:s.x,bottom:r.y,right:r.x
},c=0;c<n.length;c++)(u=o[n[c]]).isSelected()?a.push(n[c]):!0===t?u.draw(e):!0===u.isBoundingBoxOverlappingWith(l)?u.draw(e):u.updateBoundingBox(e,u.selected)
;for(var p=0;p<a.length;p++)(u=o[a[p]]).draw(e)}
},{key:"_drawEdges",value:function(e){
for(var a,t=this.body.edges,o=this.body.edgeIndices,n=0;n<o.length;n++)!0===(a=t[o[n]]).connected&&a.draw(e)
}},{key:"_determineBrowserMethod",
value:function(){if("undefined"!=typeof window){
var e=navigator.userAgent.toLowerCase()
;this.requiresTimeout=!1,-1==indexOf$3(e).call(e,"msie 9.0")?-1!=indexOf$3(e).call(e,"safari")&&-1>=indexOf$3(e).call(e,"chrome")&&(this.requiresTimeout=!0):this.requiresTimeout=!0
}else this.requiresTimeout=!0}}]),e
}(),hammerUtil=createCommonjsModule$2((function(e,t){
t.onTouch=function(e,t){
t.inputHandler=function(e){e.isFirst&&t(e)
},e.on("hammer.input",t.inputHandler)
},t.onRelease=function(e,t){
return t.inputHandler=function(e){e.isFinal&&t(e)
},e.on("hammer.input",t.inputHandler)
},t.offTouch=function(e,t){
e.off("hammer.input",t.inputHandler)
},t.offRelease=t.offTouch,t.disablePreventDefaultVertically=function(e){
return e.getTouchAction=function(){return["pan-y"]
},e}
})),Canvas=(hammerUtil.onTouch,hammerUtil.onRelease,hammerUtil.offTouch,hammerUtil.offRelease,
hammerUtil.disablePreventDefaultVertically,
function(){var t=Math.round;function e(t){
var _context74
;classCallCheck$1(this,e),this.body=t,this.pixelRatio=1,this.resizeTimer=void 0,
this.resizeFunction=bind$2(_context74=this._onResize).call(_context74,this),
this.cameraState={},
this.initialized=!1,this.canvasViewCenter={},this.options={},
this.defaultOptions={autoResize:!0,height:"100%",
width:"100%"
},util.extend(this.options,this.defaultOptions),this.bindEventListeners()
}return createClass$1(e,[{
key:"bindEventListeners",value:function(){
var _context75,e=this
;this.body.emitter.once("resize",(function(t){
0!==t.width&&(e.body.view.translation.x=.5*t.width),
0!==t.height&&(e.body.view.translation.y=.5*t.height)
})),this.body.emitter.on("setSize",bind$2(_context75=this.setSize).call(_context75,this)),
this.body.emitter.on("destroy",(function(){
e.hammerFrame.destroy(),e.hammer.destroy(),
e._cleanUp()}))}},{key:"setOptions",
value:function(e){var _context76,t=this
;void 0!==e&&util.selectiveDeepExtend(["width","height","autoResize"],this.options,e),
!0===this.options.autoResize&&(this._cleanUp(),
this.resizeTimer=setInterval$1((function(){
!0===t.setSize()&&t.body.emitter.emit("_requestRedraw")
}),1e3),this.resizeFunction=bind$2(_context76=this._onResize).call(_context76,this),
util.addEventListener(window,"resize",this.resizeFunction))
}},{key:"_cleanUp",value:function(){
void 0!==this.resizeTimer&&clearInterval(this.resizeTimer),
util.removeEventListener(window,"resize",this.resizeFunction),
this.resizeFunction=void 0}},{key:"_onResize",
value:function(){
this.setSize(),this.body.emitter.emit("_redraw")}
},{key:"_getCameraState",value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.pixelRatio
;!0===this.initialized&&(this.cameraState.previousWidth=this.frame.canvas.width/e,
this.cameraState.previousHeight=this.frame.canvas.height/e,
this.cameraState.scale=this.body.view.scale,
this.cameraState.position=this.DOMtoCanvas({
x:.5*this.frame.canvas.width/e,
y:.5*this.frame.canvas.height/e}))}},{
key:"_setCameraState",value:function(){
if(void 0!==this.cameraState.scale&&0!==this.frame.canvas.clientWidth&&0!==this.frame.canvas.clientHeight&&0!==this.pixelRatio&&0<this.cameraState.previousWidth){
var e=this.frame.canvas.width/this.pixelRatio/this.cameraState.previousWidth,t=this.frame.canvas.height/this.pixelRatio/this.cameraState.previousHeight,o=this.cameraState.scale
;1!=e&&1!=t?o=.5*this.cameraState.scale*(e+t):1==e?1!=t&&(o=this.cameraState.scale*t):o=this.cameraState.scale*e,
this.body.view.scale=o;var n=this.DOMtoCanvas({
x:.5*this.frame.canvas.clientWidth,
y:.5*this.frame.canvas.clientHeight}),i={
x:n.x-this.cameraState.position.x,
y:n.y-this.cameraState.position.y}
;this.body.view.translation.x+=i.x*this.body.view.scale,
this.body.view.translation.y+=i.y*this.body.view.scale
}}},{key:"_prepareValue",value:function(e){
if("number"==typeof e)return e+"px"
;if("string"==typeof e){
if(-1!==indexOf$3(e).call(e,"%")||-1!==indexOf$3(e).call(e,"px"))return e
;if(-1===indexOf$3(e).call(e,"%"))return e+"px"}
throw new Error("Could not use the value supplied for width or height:"+e)
}},{key:"_create",value:function(){
for(;this.body.container.hasChildNodes();)this.body.container.removeChild(this.body.container.firstChild)
;if(this.frame=document.createElement("div"),
this.frame.className="vis-network",
this.frame.style.position="relative",this.frame.style.overflow="hidden",
this.frame.tabIndex=900,
this.frame.canvas=document.createElement("canvas"),this.frame.canvas.style.position="relative",
this.frame.appendChild(this.frame.canvas),
this.frame.canvas.getContext)this._setPixelRatio(),
this.setTransform();else{
var e=document.createElement("DIV")
;e.style.color="red",e.style.fontWeight="bold",
e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",
this.frame.canvas.appendChild(e)}
this.body.container.appendChild(this.frame),this.body.view.scale=1,
this.body.view.translation={
x:.5*this.frame.canvas.clientWidth,
y:.5*this.frame.canvas.clientHeight
},this._bindHammer()}},{key:"_bindHammer",
value:function(){var e=this
;void 0!==this.hammer&&this.hammer.destroy(),this.drag={},
this.pinch={},this.hammer=new hammer(this.frame.canvas),
this.hammer.get("pinch").set({enable:!0
}),this.hammer.get("pan").set({threshold:5,
direction:hammer.DIRECTION_ALL
}),hammerUtil.onTouch(this.hammer,(function(t){
e.body.eventListeners.onTouch(t)
})),this.hammer.on("tap",(function(t){
e.body.eventListeners.onTap(t)
})),this.hammer.on("doubletap",(function(t){
e.body.eventListeners.onDoubleTap(t)
})),this.hammer.on("press",(function(t){
e.body.eventListeners.onHold(t)
})),this.hammer.on("panstart",(function(t){
e.body.eventListeners.onDragStart(t)
})),this.hammer.on("panmove",(function(t){
e.body.eventListeners.onDrag(t)
})),this.hammer.on("panend",(function(t){
e.body.eventListeners.onDragEnd(t)
})),this.hammer.on("pinch",(function(t){
e.body.eventListeners.onPinch(t)
})),this.frame.canvas.addEventListener("mousewheel",(function(t){
e.body.eventListeners.onMouseWheel(t)
})),this.frame.canvas.addEventListener("DOMMouseScroll",(function(t){
e.body.eventListeners.onMouseWheel(t)
})),this.frame.canvas.addEventListener("mousemove",(function(t){
e.body.eventListeners.onMouseMove(t)
})),this.frame.canvas.addEventListener("contextmenu",(function(t){
e.body.eventListeners.onContext(t)
})),this.hammerFrame=new hammer(this.frame),hammerUtil.onRelease(this.hammerFrame,(function(t){
e.body.eventListeners.onRelease(t)}))}},{
key:"setSize",value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.options.width,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.options.height
;e=this._prepareValue(e),o=this._prepareValue(o)
;var n=!1,i=this.frame.canvas.width,a=this.frame.canvas.height,d=this.pixelRatio
;if(this._setPixelRatio(),
e!=this.options.width||o!=this.options.height||this.frame.style.width!=e||this.frame.style.height!=o)this._getCameraState(d),
this.frame.style.width=e,
this.frame.style.height=o,this.frame.canvas.style.width="100%",
this.frame.canvas.style.height="100%",
this.frame.canvas.width=t(this.frame.canvas.clientWidth*this.pixelRatio),
this.frame.canvas.height=t(this.frame.canvas.clientHeight*this.pixelRatio),
this.options.width=e,
this.options.height=o,this.canvasViewCenter={
x:.5*this.frame.clientWidth,
y:.5*this.frame.clientHeight},n=!0;else{
var s=t(this.frame.canvas.clientWidth*this.pixelRatio),r=t(this.frame.canvas.clientHeight*this.pixelRatio)
;(this.frame.canvas.width!==s||this.frame.canvas.height!==r)&&this._getCameraState(d),
this.frame.canvas.width!==s&&(this.frame.canvas.width=s,
n=!0),this.frame.canvas.height!==r&&(this.frame.canvas.height=r,
n=!0)}
return 1==n&&(this.body.emitter.emit("resize",{
width:t(this.frame.canvas.width/this.pixelRatio),
height:t(this.frame.canvas.height/this.pixelRatio),
oldWidth:t(i/this.pixelRatio),
oldHeight:t(a/this.pixelRatio)
}),this._setCameraState()),this.initialized=!0,n}
},{key:"getContext",value:function(){
return this.frame.canvas.getContext("2d")}},{
key:"_determinePixelRatio",value:function(){
var e=this.getContext()
;if(void 0===e)throw new Error("Could not get canvax context")
;var t=1
;return"undefined"!=typeof window&&(t=window.devicePixelRatio||1),t/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)
}},{key:"_setPixelRatio",value:function(){
this.pixelRatio=this._determinePixelRatio()}},{
key:"setTransform",value:function(){
var e=this.getContext()
;if(void 0===e)throw new Error("Could not get canvax context")
;e.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
}},{key:"_XconvertDOMtoCanvas",value:function(e){
return(e-this.body.view.translation.x)/this.body.view.scale
}},{key:"_XconvertCanvasToDOM",value:function(e){
return e*this.body.view.scale+this.body.view.translation.x
}},{key:"_YconvertDOMtoCanvas",value:function(e){
return(e-this.body.view.translation.y)/this.body.view.scale
}},{key:"_YconvertCanvasToDOM",value:function(e){
return e*this.body.view.scale+this.body.view.translation.y
}},{key:"canvasToDOM",value:function(e){return{
x:this._XconvertCanvasToDOM(e.x),
y:this._YconvertCanvasToDOM(e.y)}}},{
key:"DOMtoCanvas",value:function(e){return{
x:this._XconvertDOMtoCanvas(e.x),
y:this._YconvertDOMtoCanvas(e.y)}}}]),e
}()),View=function(){var t=Math.abs,o=Math.min
;function e(t,o){var _context77,_context78,n=this
;classCallCheck$1(this,e),this.body=t,
this.canvas=o,this.animationSpeed=1/this.renderRefreshRate,
this.animationEasingFunction="easeInOutQuint",
this.easingTime=0,this.sourceScale=0,
this.targetScale=0,this.sourceTranslation=0,
this.targetTranslation=0,this.lockedOnNodeId=void 0,
this.lockedOnNodeOffset=void 0,
this.touchTime=0,this.viewFunction=void 0,this.body.emitter.on("fit",bind$2(_context77=this.fit).call(_context77,this)),
this.body.emitter.on("animationFinished",(function(){
n.body.emitter.emit("_stopRendering")
})),this.body.emitter.on("unlockNode",bind$2(_context78=this.releaseNode).call(_context78,this))
}return createClass$1(e,[{key:"setOptions",
value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
;this.options=e}},{key:"fit",value:function(){
var i,a,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{
nodes:[]
},n=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1]
;if((void 0===(e=assign$2({},e)).nodes||0===e.nodes.length)&&(e.nodes=this.body.nodeIndices),
!0===n){var d=0
;for(var s in this.body.nodes)if(this.body.nodes.hasOwnProperty(s)){
var r=this.body.nodes[s]
;!0===r.predefinedPosition&&(d+=1)}
if(d>.5*this.body.nodeIndices.length)return void this.fit(e,!1)
;i=NetworkUtil.getRange(this.body.nodes,e.nodes)
;var l=this.body.nodeIndices.length
;a=12.662/(l+7.4147)+.0964822
;var c=o(this.canvas.frame.canvas.clientWidth/600,this.canvas.frame.canvas.clientHeight/600)
;a*=c}else{
this.body.emitter.emit("_resizeNodes"),i=NetworkUtil.getRange(this.body.nodes,e.nodes)
;var u=1.1*t(i.maxX-i.minX),p=1.1*t(i.maxY-i.minY),h=this.canvas.frame.canvas.clientWidth/u,m=this.canvas.frame.canvas.clientHeight/p
;a=h<=m?h:m}1<a?a=1:0===a&&(a=1)
;var g=NetworkUtil.findCenter(i),y={position:g,
scale:a,animation:e.animation};this.moveTo(y)}},{
key:"focus",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
;if(void 0!==this.body.nodes[e]){var o={
x:this.body.nodes[e].x,y:this.body.nodes[e].y}
;t.position=o,t.lockedOnNode=e,this.moveTo(t)
}else console.log("Node: "+e+" cannot be found.")}
},{key:"moveTo",value:function(e){
var t=_isFinite$2;if(void 0!==e){
if(null!=e.offset){
if(null==e.offset.x)e.offset.x=0;else if(e.offset.x=+e.offset.x,
!t(e.offset.x))throw new TypeError('The option "offset.x" has to be a finite number.')
;if(null==e.offset.y)e.offset.x=0;else if(e.offset.y=+e.offset.y,
!t(e.offset.y))throw new TypeError('The option "offset.y" has to be a finite number.')
}else e.offset={x:0,y:0};if(null!=e.position){
if(null==e.position.x)e.position.x=0;else if(e.position.x=+e.position.x,
!t(e.position.x))throw new TypeError('The option "position.x" has to be a finite number.')
;if(null==e.position.y)e.position.x=0;else if(e.position.y=+e.position.y,
!t(e.position.y))throw new TypeError('The option "position.y" has to be a finite number.')
}else e.position=this.getViewPosition()
;if(null==e.scale)e.scale=this.body.view.scale;else if(e.scale=+e.scale,
!(0<e.scale))throw new TypeError('The option "scale" has to be a number greater than zero.')
;void 0===e.animation&&(e.animation={duration:0
}),!1===e.animation&&(e.animation={duration:0
}),!0===e.animation&&(e.animation={}),
void 0===e.animation.duration&&(e.animation.duration=1e3),
void 0===e.animation.easingFunction&&(e.animation.easingFunction="easeInOutQuad"),
this.animateView(e)}else e={}}},{
key:"animateView",value:function(e){
if(void 0!==e){var _context79,_context80
;this.animationEasingFunction=e.animation.easingFunction,
this.releaseNode(),!0===e.locked&&(this.lockedOnNodeId=e.lockedOnNode,
this.lockedOnNodeOffset=e.offset),
0!=this.easingTime&&this._transitionRedraw(!0),
this.sourceScale=this.body.view.scale,
this.sourceTranslation=this.body.view.translation,
this.targetScale=e.scale,this.body.view.scale=this.targetScale
;var t=this.canvas.DOMtoCanvas({
x:.5*this.canvas.frame.canvas.clientWidth,
y:.5*this.canvas.frame.canvas.clientHeight}),o={
x:t.x-e.position.x,y:t.y-e.position.y}
;this.targetTranslation={
x:this.sourceTranslation.x+o.x*this.targetScale+e.offset.x,
y:this.sourceTranslation.y+o.y*this.targetScale+e.offset.y
},0===e.animation.duration?null==this.lockedOnNodeId?(this.body.view.scale=this.targetScale,
this.body.view.translation=this.targetTranslation,
this.body.emitter.emit("_requestRedraw")):(this.viewFunction=bind$2(_context79=this._lockedRedraw).call(_context79,this),
this.body.emitter.on("initRedraw",this.viewFunction)):(this.animationSpeed=1/(60*e.animation.duration*.001)||1/60,
this.animationEasingFunction=e.animation.easingFunction,
this.viewFunction=bind$2(_context80=this._transitionRedraw).call(_context80,this),
this.body.emitter.on("initRedraw",this.viewFunction),
this.body.emitter.emit("_startRendering"))}}},{
key:"_lockedRedraw",value:function(){
var e_x=this.body.nodes[this.lockedOnNodeId].x,e_y=this.body.nodes[this.lockedOnNodeId].y,t=this.canvas.DOMtoCanvas({
x:.5*this.canvas.frame.canvas.clientWidth,
y:.5*this.canvas.frame.canvas.clientHeight
}),o_x=t.x-e_x,o_y=t.y-e_y,n=this.body.view.translation,i={
x:n.x+o_x*this.body.view.scale+this.lockedOnNodeOffset.x,
y:n.y+o_y*this.body.view.scale+this.lockedOnNodeOffset.y
};this.body.view.translation=i}},{
key:"releaseNode",value:function(){
void 0!==this.lockedOnNodeId&&void 0!==this.viewFunction&&(this.body.emitter.off("initRedraw",this.viewFunction),
this.lockedOnNodeId=void 0,
this.lockedOnNodeOffset=void 0)}},{
key:"_transitionRedraw",value:function(){
var _context81,e=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0]
;this.easingTime+=this.animationSpeed,
this.easingTime=!0===e?1:this.easingTime
;var t=util.easingFunctions[this.animationEasingFunction](this.easingTime)
;this.body.view.scale=this.sourceScale+(this.targetScale-this.sourceScale)*t,
this.body.view.translation={
x:this.sourceTranslation.x+(this.targetTranslation.x-this.sourceTranslation.x)*t,
y:this.sourceTranslation.y+(this.targetTranslation.y-this.sourceTranslation.y)*t
},
1<=this.easingTime&&(this.body.emitter.off("initRedraw",this.viewFunction),this.easingTime=0,
null!=this.lockedOnNodeId&&(this.viewFunction=bind$2(_context81=this._lockedRedraw).call(_context81,this),
this.body.emitter.on("initRedraw",this.viewFunction)),
this.body.emitter.emit("animationFinished"))}},{
key:"getScale",value:function(){
return this.body.view.scale}},{
key:"getViewPosition",value:function(){
return this.canvas.DOMtoCanvas({
x:.5*this.canvas.frame.canvas.clientWidth,
y:.5*this.canvas.frame.canvas.clientHeight})}}]),e
}(),NavigationHandler=function(){function e(t,o){
var n=this
;classCallCheck$1(this,e),this.body=t,this.canvas=o,this.iconsCreated=!1,
this.navigationHammers=[],
this.boundFunctions={},this.touchTime=0,this.activated=!1,
this.body.emitter.on("activate",(function(){
n.activated=!0,n.configureKeyboardBindings()
})),this.body.emitter.on("deactivate",(function(){
n.activated=!1,n.configureKeyboardBindings()
})),this.body.emitter.on("destroy",(function(){
void 0!==n.keycharm&&n.keycharm.destroy()
})),this.options={}}return createClass$1(e,[{
key:"setOptions",value:function(e){
void 0!==e&&(this.options=e,this.create())}},{
key:"create",value:function(){
!0===this.options.navigationButtons?!1===this.iconsCreated&&this.loadNavigationElements():!0===this.iconsCreated&&this.cleanNavigation(),
this.configureKeyboardBindings()}},{
key:"cleanNavigation",value:function(){
if(0!=this.navigationHammers.length){
for(var e=0;e<this.navigationHammers.length;e++)this.navigationHammers[e].destroy()
;this.navigationHammers=[]}
this.navigationDOM&&this.navigationDOM.wrapper&&this.navigationDOM.wrapper.parentNode&&this.navigationDOM.wrapper.parentNode.removeChild(this.navigationDOM.wrapper),
this.iconsCreated=!1}},{
key:"loadNavigationElements",value:function(){
var e=this
;this.cleanNavigation(),this.navigationDOM={}
;var t=["up","down","left","right","zoomIn","zoomOut","zoomExtends"],o=["_moveUp","_moveDown","_moveLeft","_moveRight","_zoomIn","_zoomOut","_fit"]
;this.navigationDOM.wrapper=document.createElement("div"),
this.navigationDOM.wrapper.className="vis-navigation",
this.canvas.frame.appendChild(this.navigationDOM.wrapper)
;for(var n=0;n<t.length;n++){
var _context82,_context83
;this.navigationDOM[t[n]]=document.createElement("div"),
this.navigationDOM[t[n]].className="vis-button vis-"+t[n],
this.navigationDOM.wrapper.appendChild(this.navigationDOM[t[n]])
;var a=new hammer(this.navigationDOM[t[n]])
;"_fit"===o[n]?hammerUtil.onTouch(a,bind$2(_context82=this._fit).call(_context82,this)):hammerUtil.onTouch(a,bind$2(_context83=this.bindToRedraw).call(_context83,this,o[n])),
this.navigationHammers.push(a)}
var d=new hammer(this.canvas.frame)
;hammerUtil.onRelease(d,(function(){
e._stopMovement()
})),this.navigationHammers.push(d),this.iconsCreated=!0
}},{key:"bindToRedraw",value:function(e){
var _context84
;void 0===this.boundFunctions[e]&&(this.boundFunctions[e]=bind$2(_context84=this[e]).call(_context84,this),
this.body.emitter.on("initRedraw",this.boundFunctions[e]),
this.body.emitter.emit("_startRendering"))}},{
key:"unbindFromRedraw",value:function(e){
void 0!==this.boundFunctions[e]&&(this.body.emitter.off("initRedraw",this.boundFunctions[e]),
this.body.emitter.emit("_stopRendering"),
delete this.boundFunctions[e])}},{key:"_fit",
value:function(){
700<(new Date).valueOf()-this.touchTime&&(this.body.emitter.emit("fit",{
duration:700
}),this.touchTime=(new Date).valueOf())}},{
key:"_stopMovement",value:function(){
for(var e in this.boundFunctions)this.boundFunctions.hasOwnProperty(e)&&(this.body.emitter.off("initRedraw",this.boundFunctions[e]),
this.body.emitter.emit("_stopRendering"))
;this.boundFunctions={}}},{key:"_moveUp",
value:function(){
this.body.view.translation.y+=this.options.keyboard.speed.y
}},{key:"_moveDown",value:function(){
this.body.view.translation.y-=this.options.keyboard.speed.y
}},{key:"_moveLeft",value:function(){
this.body.view.translation.x+=this.options.keyboard.speed.x
}},{key:"_moveRight",value:function(){
this.body.view.translation.x-=this.options.keyboard.speed.x
}},{key:"_zoomIn",value:function(){
var e=this.body.view.scale,t=this.body.view.scale*(1+this.options.keyboard.speed.zoom),o=this.body.view.translation,n=t/e,i=(1-n)*this.canvas.canvasViewCenter.x+o.x*n,a=(1-n)*this.canvas.canvasViewCenter.y+o.y*n
;this.body.view.scale=t,
this.body.view.translation={x:i,y:a
},this.body.emitter.emit("zoom",{direction:"+",
scale:this.body.view.scale,pointer:null})}},{
key:"_zoomOut",value:function(){
var e=this.body.view.scale,t=this.body.view.scale/(1+this.options.keyboard.speed.zoom),o=this.body.view.translation,n=t/e,i=(1-n)*this.canvas.canvasViewCenter.x+o.x*n,a=(1-n)*this.canvas.canvasViewCenter.y+o.y*n
;this.body.view.scale=t,
this.body.view.translation={x:i,y:a
},this.body.emitter.emit("zoom",{direction:"-",
scale:this.body.view.scale,pointer:null})}},{
key:"configureKeyboardBindings",value:function(){
var _context85,_context86,_context87,_context88,_context89,_context90,_context91,_context92,_context93,_context94,_context95,_context96,_context97,_context98,_context99,_context100,_context101,_context102,_context103,_context104,_context105,_context106,_context107,_context108,e=this
;void 0!==this.keycharm&&this.keycharm.destroy(),
!0===this.options.keyboard.enabled&&(this.keycharm=!0===this.options.keyboard.bindToWindow?keycharm({
container:window,preventDefault:!0}):keycharm({
container:this.canvas.frame,preventDefault:!0
}),this.keycharm.reset(),!0===this.activated&&(bind$2(_context85=this.keycharm).call(_context85,"up",(function(){
e.bindToRedraw("_moveUp")
}),"keydown"),bind$2(_context86=this.keycharm).call(_context86,"down",(function(){
e.bindToRedraw("_moveDown")
}),"keydown"),bind$2(_context87=this.keycharm).call(_context87,"left",(function(){
e.bindToRedraw("_moveLeft")
}),"keydown"),bind$2(_context88=this.keycharm).call(_context88,"right",(function(){
e.bindToRedraw("_moveRight")
}),"keydown"),bind$2(_context89=this.keycharm).call(_context89,"=",(function(){
e.bindToRedraw("_zoomIn")
}),"keydown"),bind$2(_context90=this.keycharm).call(_context90,"num+",(function(){
e.bindToRedraw("_zoomIn")
}),"keydown"),bind$2(_context91=this.keycharm).call(_context91,"num-",(function(){
e.bindToRedraw("_zoomOut")
}),"keydown"),bind$2(_context92=this.keycharm).call(_context92,"-",(function(){
e.bindToRedraw("_zoomOut")
}),"keydown"),bind$2(_context93=this.keycharm).call(_context93,"[",(function(){
e.bindToRedraw("_zoomOut")
}),"keydown"),bind$2(_context94=this.keycharm).call(_context94,"]",(function(){
e.bindToRedraw("_zoomIn")
}),"keydown"),bind$2(_context95=this.keycharm).call(_context95,"pageup",(function(){
e.bindToRedraw("_zoomIn")
}),"keydown"),bind$2(_context96=this.keycharm).call(_context96,"pagedown",(function(){
e.bindToRedraw("_zoomOut")
}),"keydown"),bind$2(_context97=this.keycharm).call(_context97,"up",(function(){
e.unbindFromRedraw("_moveUp")
}),"keyup"),bind$2(_context98=this.keycharm).call(_context98,"down",(function(){
e.unbindFromRedraw("_moveDown")
}),"keyup"),bind$2(_context99=this.keycharm).call(_context99,"left",(function(){
e.unbindFromRedraw("_moveLeft")
}),"keyup"),bind$2(_context100=this.keycharm).call(_context100,"right",(function(){
e.unbindFromRedraw("_moveRight")
}),"keyup"),bind$2(_context101=this.keycharm).call(_context101,"=",(function(){
e.unbindFromRedraw("_zoomIn")
}),"keyup"),bind$2(_context102=this.keycharm).call(_context102,"num+",(function(){
e.unbindFromRedraw("_zoomIn")
}),"keyup"),bind$2(_context103=this.keycharm).call(_context103,"num-",(function(){
e.unbindFromRedraw("_zoomOut")
}),"keyup"),bind$2(_context104=this.keycharm).call(_context104,"-",(function(){
e.unbindFromRedraw("_zoomOut")
}),"keyup"),bind$2(_context105=this.keycharm).call(_context105,"[",(function(){
e.unbindFromRedraw("_zoomOut")
}),"keyup"),bind$2(_context106=this.keycharm).call(_context106,"]",(function(){
e.unbindFromRedraw("_zoomIn")
}),"keyup"),bind$2(_context107=this.keycharm).call(_context107,"pageup",(function(){
e.unbindFromRedraw("_zoomIn")
}),"keyup"),bind$2(_context108=this.keycharm).call(_context108,"pagedown",(function(){
e.unbindFromRedraw("_zoomOut")}),"keyup")))}}]),e
}(),Popup=function(){function e(t,o){
classCallCheck$1(this,e),this.container=t,this.overflowMethod=o||"cap",
this.x=0,
this.y=0,this.padding=5,this.hidden=!1,this.frame=document.createElement("div"),
this.frame.className="vis-tooltip",
this.container.appendChild(this.frame)}
return createClass$1(e,[{key:"setPosition",
value:function(e,t){
this.x=_parseInt$3(e),this.y=_parseInt$3(t)}},{
key:"setText",value:function(e){
e instanceof Element?(this.frame.innerHTML="",this.frame.appendChild(e)):this.frame.innerHTML=e
}},{key:"show",value:function(e){
if(void 0===e&&(e=!0),!0===e){
var t=this.frame.clientHeight,o=this.frame.clientWidth,n=this.frame.parentNode.clientHeight,i=this.frame.parentNode.clientWidth,a=0,d=0
;if("flip"==this.overflowMethod){var s=!1,r=!0
;this.y-t<this.padding&&(r=!1),this.x+o>i-this.padding&&(s=!0),
a=s?this.x-o:this.x,d=r?this.y-t:this.y
}else(d=this.y-t)+t+this.padding>n&&(d=n-t-this.padding),
d<this.padding&&(d=this.padding),
(a=this.x)+o+this.padding>i&&(a=i-o-this.padding),
a<this.padding&&(a=this.padding)
;this.frame.style.left=a+"px",this.frame.style.top=d+"px",
this.frame.style.visibility="visible",
this.hidden=!1}else this.hide()}},{key:"hide",
value:function(){
this.hidden=!0,this.frame.style.left="0",this.frame.style.top="0",
this.frame.style.visibility="hidden"}},{
key:"destroy",value:function(){
this.frame.parentNode.removeChild(this.frame)}
}]),e}(),InteractionHandler=function(){
function e(t,o,n){
var _context109,_context110,_context111,_context112,_context113,_context114,_context115,_context116,_context117,_context118,_context119,_context120,_context121
;classCallCheck$1(this,e),
this.body=t,this.canvas=o,this.selectionHandler=n,this.navigationHandler=new NavigationHandler(t,o),
this.body.eventListeners.onTap=bind$2(_context109=this.onTap).call(_context109,this),
this.body.eventListeners.onTouch=bind$2(_context110=this.onTouch).call(_context110,this),
this.body.eventListeners.onDoubleTap=bind$2(_context111=this.onDoubleTap).call(_context111,this),
this.body.eventListeners.onHold=bind$2(_context112=this.onHold).call(_context112,this),
this.body.eventListeners.onDragStart=bind$2(_context113=this.onDragStart).call(_context113,this),
this.body.eventListeners.onDrag=bind$2(_context114=this.onDrag).call(_context114,this),
this.body.eventListeners.onDragEnd=bind$2(_context115=this.onDragEnd).call(_context115,this),
this.body.eventListeners.onMouseWheel=bind$2(_context116=this.onMouseWheel).call(_context116,this),
this.body.eventListeners.onPinch=bind$2(_context117=this.onPinch).call(_context117,this),
this.body.eventListeners.onMouseMove=bind$2(_context118=this.onMouseMove).call(_context118,this),
this.body.eventListeners.onRelease=bind$2(_context119=this.onRelease).call(_context119,this),
this.body.eventListeners.onContext=bind$2(_context120=this.onContext).call(_context120,this),
this.touchTime=0,
this.drag={},this.pinch={},this.popup=void 0,this.popupObj=void 0,
this.popupTimer=void 0,
this.body.functions.getPointer=bind$2(_context121=this.getPointer).call(_context121,this),
this.options={},this.defaultOptions={dragNodes:!0,
dragView:!0,hover:!1,keyboard:{enabled:!1,speed:{
x:10,y:10,zoom:.02},bindToWindow:!0},
navigationButtons:!1,tooltipDelay:300,zoomView:!0,
zoomSpeed:1
},util.extend(this.options,this.defaultOptions),this.bindEventListeners()
}return createClass$1(e,[{
key:"bindEventListeners",value:function(){
var e=this
;this.body.emitter.on("destroy",(function(){
clearTimeout(e.popupTimer),delete e.body.functions.getPointer
}))}},{key:"setOptions",value:function(e){
void 0!==e&&(util.selectiveNotDeepExtend(["hideEdgesOnDrag","hideEdgesOnZoom","hideNodesOnDrag","keyboard","multiselect","selectable","selectConnectedEdges"],this.options,e),
util.mergeOptions(this.options,e,"keyboard"),
e.tooltip&&(util.extend(this.options.tooltip,e.tooltip),
e.tooltip.color&&(this.options.tooltip.color=util.parseColor(e.tooltip.color)))),
this.navigationHandler.setOptions(this.options)}
},{key:"getPointer",value:function(e){return{
x:e.x-util.getAbsoluteLeft(this.canvas.frame.canvas),
y:e.y-util.getAbsoluteTop(this.canvas.frame.canvas)
}}},{key:"onTouch",value:function(e){
50<(new Date).valueOf()-this.touchTime&&(this.drag.pointer=this.getPointer(e.center),
this.drag.pinched=!1,
this.pinch.scale=this.body.view.scale,this.touchTime=(new Date).valueOf())
}},{key:"onTap",value:function(e){
var t=this.getPointer(e.center),o=this.selectionHandler.options.multiselect&&(e.changedPointers[0].ctrlKey||e.changedPointers[0].metaKey)
;this.checkSelectionChanges(t,e,o),
this.selectionHandler._generateClickEvent("click",e,t)
}},{key:"onDoubleTap",value:function(e){
var t=this.getPointer(e.center)
;this.selectionHandler._generateClickEvent("doubleClick",e,t)
}},{key:"onHold",value:function(e){
var t=this.getPointer(e.center),o=this.selectionHandler.options.multiselect
;this.checkSelectionChanges(t,e,o),
this.selectionHandler._generateClickEvent("click",e,t),
this.selectionHandler._generateClickEvent("hold",e,t)
}},{key:"onRelease",value:function(e){
if(10<(new Date).valueOf()-this.touchTime){
var t=this.getPointer(e.center)
;this.selectionHandler._generateClickEvent("release",e,t),
this.touchTime=(new Date).valueOf()}}},{
key:"onContext",value:function(e){
var t=this.getPointer({x:e.clientX,y:e.clientY})
;this.selectionHandler._generateClickEvent("oncontext",e,t)
}},{key:"checkSelectionChanges",
value:function(e,t){
var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],n=this.selectionHandler.getSelection(),i=!1
;i=!0===o?this.selectionHandler.selectAdditionalOnPoint(e):this.selectionHandler.selectOnPoint(e)
;var a=this.selectionHandler.getSelection(),d=this._determineDifference(n,a),s=this._determineDifference(a,n)
;0<d.edges.length&&(this.selectionHandler._generateClickEvent("deselectEdge",t,e,n),
i=!0),
0<d.nodes.length&&(this.selectionHandler._generateClickEvent("deselectNode",t,e,n),
i=!0),
0<s.nodes.length&&(this.selectionHandler._generateClickEvent("selectNode",t,e),
i=!0),
0<s.edges.length&&(this.selectionHandler._generateClickEvent("selectEdge",t,e),
i=!0),
!0===i&&this.selectionHandler._generateClickEvent("select",t,e)
}},{key:"_determineDifference",
value:function(e,t){var o=function(e,t){
for(var a,o=[],n=0;n<e.length;n++)a=e[n],
-1===indexOf$3(t).call(t,a)&&o.push(a);return o}
;return{nodes:o(e.nodes,t.nodes),
edges:o(e.edges,t.edges)}}},{key:"onDragStart",
value:function(e){
void 0===this.drag.pointer&&this.onTouch(e)
;var t=this.selectionHandler.getNodeAt(this.drag.pointer)
;if(this.drag.dragging=!0,
this.drag.selection=[],this.drag.translation=util.extend({},this.body.view.translation),
this.drag.nodeId=void 0,
void 0!==t&&!0===this.options.dragNodes){
this.drag.nodeId=t.id,!1===t.isSelected()&&(this.selectionHandler.unselectAll(),
this.selectionHandler.selectObject(t)),
this.selectionHandler._generateClickEvent("dragStart",e,this.drag.pointer)
;var o=this.selectionHandler.selectionObj.nodes
;for(var n in o)if(o.hasOwnProperty(n)){
var i=o[n],a={id:i.id,node:i,x:i.x,y:i.y,
xFixed:i.options.fixed.x,yFixed:i.options.fixed.y}
;i.options.fixed.x=!0,i.options.fixed.y=!0,
this.drag.selection.push(a)}
}else this.selectionHandler._generateClickEvent("dragStart",e,this.drag.pointer,void 0,!0)
}},{key:"onDrag",value:function(e){var t=this
;if(!0!==this.drag.pinched){
this.body.emitter.emit("unlockNode")
;var o=this.getPointer(e.center),n=this.drag.selection
;if(n&&n.length&&!0===this.options.dragNodes){
this.selectionHandler._generateClickEvent("dragging",e,o)
;var i=o.x-this.drag.pointer.x,a=o.y-this.drag.pointer.y
;forEach$2(n).call(n,(function(e){var o=e.node
;!1===e.xFixed&&(o.x=t.canvas._XconvertDOMtoCanvas(t.canvas._XconvertCanvasToDOM(e.x)+i)),
!1===e.yFixed&&(o.y=t.canvas._YconvertDOMtoCanvas(t.canvas._YconvertCanvasToDOM(e.y)+a))
})),this.body.emitter.emit("startSimulation")
}else if(!0===this.options.dragView){
if(this.selectionHandler._generateClickEvent("dragging",e,o,void 0,!0),
void 0===this.drag.pointer)return void this.onDragStart(e)
;var d=o.x-this.drag.pointer.x,s=o.y-this.drag.pointer.y
;this.body.view.translation={
x:this.drag.translation.x+d,
y:this.drag.translation.y+s
},this.body.emitter.emit("_requestRedraw")}}}},{
key:"onDragEnd",value:function(e){
this.drag.dragging=!1;var t=this.drag.selection
;t&&t.length?(forEach$2(t).call(t,(function(e){
e.node.options.fixed.x=e.xFixed,e.node.options.fixed.y=e.yFixed
})),this.selectionHandler._generateClickEvent("dragEnd",e,this.getPointer(e.center)),
this.body.emitter.emit("startSimulation")):(this.selectionHandler._generateClickEvent("dragEnd",e,this.getPointer(e.center),void 0,!0),
this.body.emitter.emit("_requestRedraw"))}},{
key:"onPinch",value:function(e){
var t=this.getPointer(e.center)
;this.drag.pinched=!0,void 0===this.pinch.scale&&(this.pinch.scale=1)
;var o=this.pinch.scale*e.scale;this.zoom(o,t)}},{
key:"zoom",value:function(e,t){
if(!0===this.options.zoomView){
var n,o=this.body.view.scale
;1e-5>e&&(e=1e-5),10<e&&(e=10),void 0!==this.drag&&!0===this.drag.dragging&&(n=this.canvas.DOMtoCanvas(this.drag.pointer))
;var i=this.body.view.translation,a=e/o,d=(1-a)*t.x+i.x*a,s=(1-a)*t.y+i.y*a
;if(this.body.view.scale=e,
this.body.view.translation={x:d,y:s},null!=n){
var r=this.canvas.canvasToDOM(n)
;this.drag.pointer.x=r.x,this.drag.pointer.y=r.y}
this.body.emitter.emit("_requestRedraw"),
o<e?this.body.emitter.emit("zoom",{direction:"+",
scale:this.body.view.scale,pointer:t
}):this.body.emitter.emit("zoom",{direction:"-",
scale:this.body.view.scale,pointer:t})}}},{
key:"onMouseWheel",value:function(e){
if(!0===this.options.zoomView){var t=0
;if(e.wheelDelta?t=e.wheelDelta/120:e.detail&&(t=-e.detail/3),
0!=t){
var o=this.body.view.scale,n=t*(this.options.zoomSpeed/10)
;0>t&&(n/=1-n),o*=1+n;var i=this.getPointer({
x:e.clientX,y:e.clientY});this.zoom(o,i)}
e.preventDefault()}}},{key:"onMouseMove",
value:function(e){var t=this,o=this.getPointer({
x:e.clientX,y:e.clientY}),n=!1
;void 0!==this.popup&&(!1===this.popup.hidden&&this._checkHidePopup(o),
!1===this.popup.hidden&&(n=!0,
this.popup.setPosition(o.x+3,o.y-5),this.popup.show())),
!1===this.options.keyboard.bindToWindow&&!0===this.options.keyboard.enabled&&this.canvas.frame.focus(),
!1===n&&(void 0!==this.popupTimer&&(clearInterval(this.popupTimer),
this.popupTimer=void 0),
!this.drag.dragging&&(this.popupTimer=setTimeout$1((function(){
return t._checkShowPopup(o)
}),this.options.tooltipDelay))),!0===this.options.hover&&this.selectionHandler.hoverObject(e,o)
}},{key:"_checkShowPopup",value:function(e){
var t=this.canvas._XconvertDOMtoCanvas(e.x),o=this.canvas._YconvertDOMtoCanvas(e.y),n={
left:t,top:o,right:t,bottom:o
},a=void 0===this.popupObj?void 0:this.popupObj.id,d=!1,s="node"
;if(void 0===this.popupObj){
for(var p,r=this.body.nodeIndices,l=this.body.nodes,c=[],u=0;u<r.length;u++)!0===(p=l[r[u]]).isOverlappingWith(n)&&(d=!0,
void 0!==p.getTitle()&&c.push(r[u]))
;0<c.length&&(this.popupObj=l[c[c.length-1]],d=!0)
}if(void 0===this.popupObj&&!1===d){
for(var f,h=this.body.edgeIndices,m=this.body.edges,g=[],y=0;y<h.length;y++)!0===(f=m[h[y]]).isOverlappingWith(n)&&!0===f.connected&&void 0!==f.getTitle()&&g.push(h[y])
;0<g.length&&(this.popupObj=m[g[g.length-1]],
s="edge")}
void 0===this.popupObj?void 0!==this.popup&&(this.popup.hide(),this.body.emitter.emit("hidePopup")):this.popupObj.id!==a&&(void 0===this.popup&&(this.popup=new Popup(this.canvas.frame)),
this.popup.popupTargetType=s,
this.popup.popupTargetId=this.popupObj.id,this.popup.setPosition(e.x+3,e.y-5),
this.popup.setText(this.popupObj.getTitle()),
this.popup.show(),this.body.emitter.emit("showPopup",this.popupObj.id))
}},{key:"_checkHidePopup",value:function(e){
var t=this.selectionHandler._pointerToPositionObject(e),o=!1
;if("node"!==this.popup.popupTargetType)void 0===this.selectionHandler.getNodeAt(e)&&void 0!==this.body.edges[this.popup.popupTargetId]&&(o=this.body.edges[this.popup.popupTargetId].isOverlappingWith(t));else if(void 0!==this.body.nodes[this.popup.popupTargetId]&&!0===(o=this.body.nodes[this.popup.popupTargetId].isOverlappingWith(t))){
var n=this.selectionHandler.getNodeAt(e)
;o=void 0!==n&&n.id===this.popup.popupTargetId}
!1===o&&(this.popupObj=void 0,this.popup.hide(),
this.body.emitter.emit("hidePopup"))}}]),e
}(),SelectionHandler=function(){function e(t,o){
var n=this
;classCallCheck$1(this,e),this.body=t,this.canvas=o,this.selectionObj={
nodes:[],edges:[]},this.hoverObj={nodes:{},
edges:{}},this.options={},this.defaultOptions={
multiselect:!1,selectable:!0,
selectConnectedEdges:!0,hoverConnectedEdges:!0
},util.extend(this.options,this.defaultOptions),
this.body.emitter.on("_dataChanged",(function(){
n.updateSelection()}))}return createClass$1(e,[{
key:"setOptions",value:function(e){
void 0!==e&&util.selectiveDeepExtend(["multiselect","hoverConnectedEdges","selectable","selectConnectedEdges"],this.options,e)
}},{key:"selectOnPoint",value:function(e){var t=!1
;if(!0===this.options.selectable){
var o=this.getNodeAt(e)||this.getEdgeAt(e)
;this.unselectAll(),void 0!==o&&(t=this.selectObject(o)),
this.body.emitter.emit("_requestRedraw")}return t}
},{key:"selectAdditionalOnPoint",
value:function(e){var t=!1
;if(!0===this.options.selectable){
var o=this.getNodeAt(e)||this.getEdgeAt(e)
;void 0!==o&&(t=!0,!0===o.isSelected()?this.deselectObject(o):this.selectObject(o),
this.body.emitter.emit("_requestRedraw"))}return t
}},{key:"_initBaseEvent",value:function(e,t){
return{pointer:{DOM:{x:t.x,y:t.y},
canvas:this.canvas.DOMtoCanvas(t)},event:e}}},{
key:"_generateClickEvent",value:function(e,t,o,n){
var i=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4],a=this._initBaseEvent(t,o)
;if(!0===i)a.nodes=[],a.edges=[];else{
var d=this.getSelection()
;a.nodes=d.nodes,a.edges=d.edges}
void 0!==n&&(a.previousSelection=n),"click"==e&&(a.items=this.getClickedItems(o)),
void 0!==t.controlEdge&&(a.controlEdge=t.controlEdge),
this.body.emitter.emit(e,a)}},{key:"selectObject",
value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.options.selectConnectedEdges
;return void 0!==e&&(e instanceof Node&&!0===t&&this._selectConnectedEdges(e),
e.select(),this._addToSelection(e),!0)}},{
key:"deselectObject",value:function(e){
!0===e.isSelected()&&(e.selected=!1,this._removeFromSelection(e))
}},{key:"_getAllNodesOverlappingWith",
value:function(e){
for(var a,t=[],o=this.body.nodes,n=0;n<this.body.nodeIndices.length;n++)o[a=this.body.nodeIndices[n]].isOverlappingWith(e)&&t.push(a)
;return t}},{key:"_pointerToPositionObject",
value:function(e){var t=this.canvas.DOMtoCanvas(e)
;return{left:t.x-1,top:t.y+1,right:t.x+1,
bottom:t.y-1}}},{key:"getNodeAt",
value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],o=this._pointerToPositionObject(e),n=this._getAllNodesOverlappingWith(o)
;return 0<n.length?!0===t?this.body.nodes[n[n.length-1]]:n[n.length-1]:void 0
}},{key:"_getEdgesOverlappingWith",
value:function(e,t){
for(var a,o=this.body.edges,n=0;n<this.body.edgeIndices.length;n++)o[a=this.body.edgeIndices[n]].isOverlappingWith(e)&&t.push(a)
}},{key:"_getAllEdgesOverlappingWith",
value:function(e){var t=[]
;return this._getEdgesOverlappingWith(e,t),t}},{
key:"getEdgeAt",value:function(e){
for(var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],o=this.canvas.DOMtoCanvas(e),n=10,a=null,d=this.body.edges,s=0;s<this.body.edgeIndices.length;s++){
var r=this.body.edgeIndices[s],l=d[r]
;if(l.connected){
var c=l.from.x,u=l.from.y,p=l.to.x,h=l.to.y,m=l.edgeType.getDistanceToEdge(c,u,p,h,o.x,o.y)
;m<n&&(a=r,n=m)}}
return null===a?void 0:!0===t?this.body.edges[a]:a
}},{key:"_addToSelection",value:function(e){
e instanceof Node?this.selectionObj.nodes[e.id]=e:this.selectionObj.edges[e.id]=e
}},{key:"_addToHover",value:function(e){
e instanceof Node?this.hoverObj.nodes[e.id]=e:this.hoverObj.edges[e.id]=e
}},{key:"_removeFromSelection",value:function(e){
e instanceof Node?(delete this.selectionObj.nodes[e.id],
this._unselectConnectedEdges(e)):delete this.selectionObj.edges[e.id]
}},{key:"unselectAll",value:function(){
for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&this.selectionObj.nodes[e].unselect()
;for(var t in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(t)&&this.selectionObj.edges[t].unselect()
;this.selectionObj={nodes:{},edges:{}}}},{
key:"_getSelectedNodeCount",value:function(){
var e=0
;for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&(e+=1)
;return e}},{key:"_getSelectedNode",
value:function(){
for(var e in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(e))return this.selectionObj.nodes[e]
}},{key:"_getSelectedEdge",value:function(){
for(var e in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(e))return this.selectionObj.edges[e]
}},{key:"_getSelectedEdgeCount",value:function(){
var e=0
;for(var t in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(t)&&(e+=1)
;return e}},{key:"_getSelectedObjectCount",
value:function(){var e=0
;for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&(e+=1)
;for(var o in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(o)&&(e+=1)
;return e}},{key:"_selectionIsEmpty",
value:function(){
for(var e in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(e))return!1
;for(var t in this.selectionObj.edges)if(this.selectionObj.edges.hasOwnProperty(t))return!1
;return!0}},{key:"_clusterInSelection",
value:function(){
for(var e in this.selectionObj.nodes)if(this.selectionObj.nodes.hasOwnProperty(e)&&1<this.selectionObj.nodes[e].clusterSize)return!0
;return!1}},{key:"_selectConnectedEdges",
value:function(e){
for(var o,t=0;t<e.edges.length;t++)(o=e.edges[t]).select(),this._addToSelection(o)
}},{key:"_hoverConnectedEdges",value:function(e){
for(var o,t=0;t<e.edges.length;t++)(o=e.edges[t]).hover=!0,
this._addToHover(o)}},{
key:"_unselectConnectedEdges",value:function(e){
for(var o,t=0;t<e.edges.length;t++)(o=e.edges[t]).unselect(),
this._removeFromSelection(o)}},{
key:"emitBlurEvent",value:function(e,t,o){
var n=this._initBaseEvent(e,t)
;!0===o.hover&&(o.hover=!1,o instanceof Node?(n.node=o.id,
this.body.emitter.emit("blurNode",n)):(n.edge=o.id,
this.body.emitter.emit("blurEdge",n)))}},{
key:"emitHoverEvent",value:function(e,t,o){
var n=this._initBaseEvent(e,t),i=!1
;return!1===o.hover&&(o.hover=!0,this._addToHover(o),
i=!0,o instanceof Node?(n.node=o.id,
this.body.emitter.emit("hoverNode",n)):(n.edge=o.id,
this.body.emitter.emit("hoverEdge",n))),i}},{
key:"hoverObject",value:function(e,t){
var o=this.getNodeAt(t)
;void 0===o&&(o=this.getEdgeAt(t));var n=!1
;for(var i in this.hoverObj.nodes)this.hoverObj.nodes.hasOwnProperty(i)&&(void 0===o||o instanceof Node&&o.id!=i||o instanceof Edge)&&(this.emitBlurEvent(e,t,this.hoverObj.nodes[i]),
delete this.hoverObj.nodes[i],n=!0)
;for(var a in this.hoverObj.edges)this.hoverObj.edges.hasOwnProperty(a)&&(!0===n?(this.hoverObj.edges[a].hover=!1,
delete this.hoverObj.edges[a]):(void 0===o||o instanceof Edge&&o.id!=a||o instanceof Node&&!o.hover)&&(this.emitBlurEvent(e,t,this.hoverObj.edges[a]),
delete this.hoverObj.edges[a],n=!0))
;if(void 0!==o){
var d=keys$6(this.hoverObj.edges).length,s=keys$6(this.hoverObj.nodes).length
;(n||o instanceof Edge&&0===d&&0===s||o instanceof Node&&0===d&&0===s)&&(n=this.emitHoverEvent(e,t,o)),
o instanceof Node&&!0===this.options.hoverConnectedEdges&&this._hoverConnectedEdges(o)
}!0===n&&this.body.emitter.emit("_requestRedraw")}
},{key:"getSelection",value:function(){return{
nodes:this.getSelectedNodes(),
edges:this.getSelectedEdges()}}},{
key:"getSelectedNodes",value:function(){var e=[]
;if(!0===this.options.selectable)for(var t in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(t)&&e.push(this.selectionObj.nodes[t].id)
;return e}},{key:"getSelectedEdges",
value:function(){var e=[]
;if(!0===this.options.selectable)for(var t in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(t)&&e.push(this.selectionObj.edges[t].id)
;return e}},{key:"setSelection",value:function(e){
var o,n,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}
;if(!e||!e.nodes&&!e.edges)throw"Selection must be an object with nodes and/or edges properties"
;if((t.unselectAll||void 0===t.unselectAll)&&this.unselectAll(),
e.nodes)for(o=0;o<e.nodes.length;o++){n=e.nodes[o]
;var a=this.body.nodes[n]
;if(!a)throw new RangeError('Node with id "'+n+'" not found')
;this.selectObject(a,t.highlightEdges)}
if(e.edges)for(o=0;o<e.edges.length;o++){
n=e.edges[o];var d=this.body.edges[n]
;if(!d)throw new RangeError('Edge with id "'+n+'" not found')
;this.selectObject(d)}
this.body.emitter.emit("_requestRedraw")}},{
key:"selectNodes",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;if(!e||void 0===e.length)throw"Selection must be an array with ids"
;this.setSelection({nodes:e},{highlightEdges:t})}
},{key:"selectEdges",value:function(e){
if(!e||void 0===e.length)throw"Selection must be an array with ids"
;this.setSelection({edges:e})}},{
key:"updateSelection",value:function(){
for(var e in this.selectionObj.nodes)this.selectionObj.nodes.hasOwnProperty(e)&&(this.body.nodes.hasOwnProperty(e)||delete this.selectionObj.nodes[e])
;for(var t in this.selectionObj.edges)this.selectionObj.edges.hasOwnProperty(t)&&(this.body.edges.hasOwnProperty(t)||delete this.selectionObj.edges[t])
}},{key:"getClickedItems",value:function(e){
for(var t=this.canvas.DOMtoCanvas(e),o=[],n=this.body.nodeIndices,a=this.body.nodes,d=n.length-1;0<=d;d--){
var r=a[n[d]].getItemsOnPoint(t);o.push.apply(o,r)
}
for(var l=this.body.edgeIndices,c=this.body.edges,u=l.length-1;0<=u;u--){
var h=c[l[u]].getItemsOnPoint(t);o.push.apply(o,h)
}return o}}]),e
}(),timsort=createCommonjsModule$2((function(e,t){
!function(e){function o(e){
return 1e5>e?100>e?10>e?0:1:1e4>e?1e3>e?2:3:4:1e7>e?1e6>e?5:6:1e9>e?1e8>e?7:8:9
}function n(e,n){if(e===n)return 0
;if(~~e===e&&~~n===n){
if(0===e||0===n)return e<n?-1:1;if(0>e||0>n){
if(0<=n)return-1;if(0<=e)return 1;e=-e,n=-n}
var i=o(e),d=o(n),s=0
;return i<d?(e*=p[d-i-1],n/=10,s=-1):i>d&&(n*=p[i-d-1],e/=10,
s=1),e===n?s:e<n?-1:1}var r=e+"",l=n+""
;return r===l?0:r<l?-1:1}function a(e,t,o,n){
var i=t+1;if(i===o)return 1;if(0>n(e[i++],e[t])){
for(;i<o&&0>n(e[i],e[i-1]);)i++;!function(e,o,n){
for(n--;o<n;){var i=e[o];e[o++]=e[n],e[n--]=i}
}(e,t,i)}else for(;i<o&&0<=n(e[i],e[i-1]);)i++
;return i-t}function s(e,t,o,i,a){
for(i===t&&i++;i<o;i++){
for(var d=e[i],s=t,r=i;s<r;){var l=s+r>>>1
;0>a(d,e[l])?r=l:s=l+1}var c=i-s;switch(c){case 3:
e[s+3]=e[s+2];case 2:e[s+2]=e[s+1];case 1:
e[s+1]=e[s];break;default:
for(;0<c;)e[s+c]=e[s+c-1],c--}e[s]=d}}
function r(e,t,o,n,i,a){var d=0,s=0,r=1
;if(0<a(e,t[o+i])){
for(s=n-i;r<s&&0<a(e,t[o+i+r]);)d=r,0>=(r=1+(r<<1))&&(r=s)
;r>s&&(r=s),d+=i,r+=i}else{
for(s=i+1;r<s&&0>=a(e,t[o+i-r]);)d=r,0>=(r=1+(r<<1))&&(r=s)
;r>s&&(r=s);var l=d;d=i-r,r=i-l}for(d++;d<r;){
var c=d+(r-d>>>1);0<a(e,t[o+c])?d=c+1:r=c}return r
}function l(e,t,o,n,i,a){var d=0,s=0,r=1
;if(0>a(e,t[o+i])){
for(s=i+1;r<s&&0>a(e,t[o+i-r]);)d=r,0>=(r=1+(r<<1))&&(r=s)
;r>s&&(r=s);var l=d;d=i-r,r=i-l}else{
for(s=n-i;r<s&&0<=a(e,t[o+i+r]);)d=r,0>=(r=1+(r<<1))&&(r=s)
;r>s&&(r=s),d+=i,r+=i}for(d++;d<r;){
var c=d+(r-d>>>1);0>a(e,t[o+c])?r=c:d=c+1}return r
}e.__esModule=!0,e.sort=function(e,t,o,d){
if(!isArray$3(e))throw new TypeError("Can only sort arrays")
;t?"function"!=typeof t&&(d=o,
o=t,t=n):t=n,o||(o=0),d||(d=e.length);var r=d-o
;if(!(2>r)){var l=0
;if(32>r)return void s(e,o,d,o+(l=a(e,o,d,t)),t)
;var c=new h(e,t),u=function(e){
for(var t=0;e>=32;)t|=1&e,e>>=1;return e+t}(r);do{
if((l=a(e,o,d,t))<u){var p=r
;p>u&&(p=u),s(e,o,o+p,o+l,t),l=p}
c.pushRun(o,l),c.mergeRuns(),r-=l,o+=l
}while(0!==r);c.forceMergeRuns()}}
;var c=7,u=256,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9],h=function(){
function e(o,n){(function(e,t){
if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
})(this,e),
this.array=null,this.compare=null,this.minGallop=c,this.length=0,this.tmpStorageLength=u,
this.stackLength=0,
this.runStart=null,this.runLength=null,this.stackSize=0,this.array=o,
this.compare=n,
this.length=o.length,this.length<2*u&&(this.tmpStorageLength=this.length>>>1),
this.tmp=Array(this.tmpStorageLength),
this.stackLength=120>this.length?5:1542>this.length?10:119151>this.length?19:40,
this.runStart=Array(this.stackLength),
this.runLength=Array(this.stackLength)}
return e.prototype.pushRun=function(e,t){
this.runStart[this.stackSize]=e,this.runLength[this.stackSize]=t,
this.stackSize+=1
},e.prototype.mergeRuns=function(){
for(;1<this.stackSize;){var e=this.stackSize-2
;if(1<=e&&this.runLength[e-1]<=this.runLength[e]+this.runLength[e+1]||2<=e&&this.runLength[e-2]<=this.runLength[e]+this.runLength[e-1])this.runLength[e-1]<this.runLength[e+1]&&e--;else if(this.runLength[e]>this.runLength[e+1])break
;this.mergeAt(e)}
},e.prototype.forceMergeRuns=function(){
for(;1<this.stackSize;){var e=this.stackSize-2
;0<e&&this.runLength[e-1]<this.runLength[e+1]&&e--,
this.mergeAt(e)}},e.prototype.mergeAt=function(e){
var t=this.compare,o=this.array,n=this.runStart[e],i=this.runLength[e],a=this.runStart[e+1],d=this.runLength[e+1]
;this.runLength[e]=i+d,
e===this.stackSize-3&&(this.runStart[e+1]=this.runStart[e+2],
this.runLength[e+1]=this.runLength[e+2]),
this.stackSize--;var s=l(o[a],o,n,i,0,t)
;n+=s,0!=(i-=s)&&(0===(d=r(o[n+i-1],o,a,d,d-1,t))||(i<=d?this.mergeLow(n,i,a,d):this.mergeHigh(n,i,a,d)))
},e.prototype.mergeLow=function(e,t,o,n){
var a=this.compare,d=this.array,s=this.tmp,u=0
;for(u=0;u<t;u++)s[u]=d[e+u];var p=0,h=o,m=e
;if(d[m++]=d[h++],0!=--n)if(1!==t){
for(var g=this.minGallop;;){var y=0,f=0,b=!1;do{
if(0>a(d[h],s[p])){
if(d[m++]=d[h++],f++,y=0,0==--n){b=!0;break}
}else if(d[m++]=s[p++],y++,f=0,1==--t){b=!0;break}
}while((y|f)<g);if(b)break;do{
if(0!==(y=l(d[h],s,p,t,0,a))){
for(u=0;u<y;u++)d[m+u]=s[p+u]
;if(m+=y,p+=y,1>=(t-=y)){b=!0;break}}
if(d[m++]=d[h++],0==--n){b=!0;break}
if(0!==(f=r(s[p],d,h,n,0,a))){
for(u=0;u<f;u++)d[m+u]=d[h+u]
;if(m+=f,h+=f,0==(n-=f)){b=!0;break}}
if(d[m++]=s[p++],1==--t){b=!0;break}g--
}while(y>=c||f>=c);if(b)break;0>g&&(g=0),g+=2}
if(this.minGallop=g,1>g&&(this.minGallop=1),
1===t){for(u=0;u<n;u++)d[m+u]=d[h+u];d[m+n]=s[p]
}else{
if(0===t)throw new Error("mergeLow preconditions were not respected")
;for(u=0;u<t;u++)d[m+u]=s[p+u]}}else{
for(u=0;u<n;u++)d[m+u]=d[h+u];d[m+n]=s[p]
}else for(u=0;u<t;u++)d[m+u]=s[p+u]
},e.prototype.mergeHigh=function(e,t,o,n){
var a=this.compare,d=this.array,s=this.tmp,u=0
;for(u=0;u<n;u++)s[u]=d[o+u]
;var p=e+t-1,h=n-1,m=o+n-1,g=0,y=0
;if(d[m--]=d[p--],0!=--t)if(1!==n){
for(var f=this.minGallop;;){var b=0,_=0,v=!1;do{
if(0>a(s[h],d[p])){
if(d[m--]=d[p--],b++,_=0,0==--t){v=!0;break}
}else if(d[m--]=s[h--],_++,b=0,1==--n){v=!0;break}
}while((b|_)<f);if(v)break;do{
if(0!=(b=t-l(s[h],d,e,t,t-1,a))){
for(t-=b,y=1+(m-=b),g=1+(p-=b),u=b-1;0<=u;u--)d[y+u]=d[g+u]
;if(0===t){v=!0;break}}if(d[m--]=s[h--],1==--n){
v=!0;break}if(0!=(_=n-r(d[p],s,0,n,n-1,a))){
for(n-=_,y=1+(m-=_),g=1+(h-=_),u=0;u<_;u++)d[y+u]=s[g+u]
;if(1>=n){v=!0;break}}if(d[m--]=d[p--],0==--t){
v=!0;break}f--}while(b>=c||_>=c);if(v)break
;0>f&&(f=0),f+=2}
if(this.minGallop=f,1>f&&(this.minGallop=1),1===n){
for(y=1+(m-=t),g=1+(p-=t),u=t-1;0<=u;u--)d[y+u]=d[g+u]
;d[m]=s[h]}else{
if(0===n)throw new Error("mergeHigh preconditions were not respected")
;for(g=m-(n-1),u=0;u<n;u++)d[g+u]=s[u]}}else{
for(y=1+(m-=t),g=1+(p-=t),u=t-1;0<=u;u--)d[y+u]=d[g+u]
;d[m]=s[h]
}else for(g=m-(n-1),u=0;u<n;u++)d[g+u]=s[u]},e}()
}(t)}));!function(e){
e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")&&e.default
}(timsort)
;var timsort$1=timsort,DirectionInterface=function(){
function e(){classCallCheck$1(this,e)}
return createClass$1(e,[{key:"abstract",
value:function(){
throw new Error("Can't instantiate abstract class!")
}},{key:"fake_use",value:function(){}},{
key:"curveType",value:function(){
return this.abstract()}},{key:"getPosition",
value:function(e){
return this.fake_use(e),this.abstract()}},{
key:"setPosition",value:function(e,t){
var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:void 0
;this.fake_use(e,t,o),this.abstract()}},{
key:"getTreeSize",value:function(e){
return this.fake_use(e),this.abstract()}},{
key:"sort",value:function(e){
this.fake_use(e),this.abstract()}},{key:"fix",
value:function(e,t){
this.fake_use(e,t),this.abstract()}},{key:"shift",
value:function(e,t){
this.fake_use(e,t),this.abstract()}}]),e
}(),VerticalStrategy=function(e){function t(e){
var o
;return classCallCheck$1(this,t),(o=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this))).layout=e,
o}return inherits$1(t,e),createClass$1(t,[{
key:"curveType",value:function(){
return"horizontal"}},{key:"getPosition",
value:function(e){return e.x}},{key:"setPosition",
value:function(e,t){
var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:void 0
;void 0!==o&&this.layout.hierarchical.addToOrdering(e,o),
e.x=t}},{key:"getTreeSize",value:function(e){
var t=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,e)
;return{min:t.min_x,max:t.max_x}}},{key:"sort",
value:function(e){
sort$2(timsort$1).call(timsort$1,e,(function(e,t){
return e.x-t.x}))}},{key:"fix",
value:function(e,t){
e.y=this.layout.options.hierarchical.levelSeparation*t,e.options.fixed.y=!0
}},{key:"shift",value:function(e,t){
this.layout.body.nodes[e].x+=t}}]),t
}(DirectionInterface),HorizontalStrategy=function(e){
function t(e){var o
;return classCallCheck$1(this,t),(o=possibleConstructorReturn$1(this,getPrototypeOf$1$1(t).call(this))).layout=e,
o}return inherits$1(t,e),createClass$1(t,[{
key:"curveType",value:function(){return"vertical"}
},{key:"getPosition",value:function(e){return e.y}
},{key:"setPosition",value:function(e,t){
var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:void 0
;void 0!==o&&this.layout.hierarchical.addToOrdering(e,o),
e.y=t}},{key:"getTreeSize",value:function(e){
var t=this.layout.hierarchical.getTreeSize(this.layout.body.nodes,e)
;return{min:t.min_y,max:t.max_y}}},{key:"sort",
value:function(e){
sort$2(timsort$1).call(timsort$1,e,(function(e,t){
return e.y-t.y}))}},{key:"fix",
value:function(e,t){
e.x=this.layout.options.hierarchical.levelSeparation*t,e.options.fixed.x=!0
}},{key:"shift",value:function(e,t){
this.layout.body.nodes[e].y+=t}}]),t
}(DirectionInterface),HierarchicalStatus=function(){
var t=Math.max,o=Math.min;function e(){
classCallCheck$1(this,e),this.childrenReference={},
this.parentReference={},this.trees={},
this.distributionOrdering={},this.levels={},
this.distributionIndex={},this.isTree=!1,
this.treeIndex=-1}return createClass$1(e,[{
key:"addRelation",value:function(e,t){
void 0===this.childrenReference[e]&&(this.childrenReference[e]=[]),
this.childrenReference[e].push(t),
void 0===this.parentReference[t]&&(this.parentReference[t]=[]),
this.parentReference[t].push(e)}},{
key:"checkIfTree",value:function(){
for(var e in this.parentReference)if(1<this.parentReference[e].length)return void(this.isTree=!1)
;this.isTree=!0}},{key:"numTrees",
value:function(){return this.treeIndex+1}},{
key:"setTreeIndex",value:function(e,o){
void 0===o||void 0===this.trees[e.id]&&(this.trees[e.id]=o,
this.treeIndex=t(o,this.treeIndex))}},{
key:"ensureLevel",value:function(e){
void 0===this.levels[e]&&(this.levels[e]=0)}},{
key:"getMaxLevel",value:function(e){
var o=this,n={};return function e(a){
if(void 0!==n[a])return n[a];var d=o.levels[a]
;if(o.childrenReference[a]){
var s=o.childrenReference[a]
;if(0<s.length)for(var r=0;r<s.length;r++)d=t(d,e(s[r]))
}return n[a]=d,d}(e)}},{key:"levelDownstream",
value:function(e,t){
void 0===this.levels[t.id]&&(void 0===this.levels[e.id]&&(this.levels[e.id]=0),
this.levels[t.id]=this.levels[e.id]+1)}},{
key:"setMinLevelToZero",value:function(e){
var t=1e9
;for(var n in e)e.hasOwnProperty(n)&&void 0!==this.levels[n]&&(t=o(this.levels[n],t))
;for(var i in e)e.hasOwnProperty(i)&&void 0!==this.levels[i]&&(this.levels[i]-=t)
}},{key:"getTreeSize",value:function(e,n){
var i=1e9,a=-1e9,d=1e9,s=-1e9
;for(var r in this.trees)if(this.trees.hasOwnProperty(r)&&this.trees[r]===n){
var l=e[r]
;i=o(l.x,i),a=t(l.x,a),d=o(l.y,d),s=t(l.y,s)}
return{min_x:i,max_x:a,min_y:d,max_y:s}}},{
key:"hasSameParent",value:function(e,t){
var o=this.parentReference[e.id],n=this.parentReference[t.id]
;if(void 0===o||void 0===n)return!1
;for(var a=0;a<o.length;a++)for(var d=0;d<n.length;d++)if(o[a]==n[d])return!0
;return!1}},{key:"inSameSubNetwork",
value:function(e,t){
return this.trees[e.id]===this.trees[t.id]}},{
key:"getLevels",value:function(){
return keys$6(this.distributionOrdering)}},{
key:"addToOrdering",value:function(e,t){
void 0===this.distributionOrdering[t]&&(this.distributionOrdering[t]=[])
;var o=!1,i=this.distributionOrdering[t]
;for(var a in i)if(i[a]===e){o=!0;break}
o||(this.distributionOrdering[t].push(e),
this.distributionIndex[e.id]=this.distributionOrdering[t].length-1)
}}]),e}(),LayoutEngine=function(){
var t=Math.cos,o=Math.sin,n=Math.sqrt,a=Math.PI,d=Math.round,s=Math.pow,r=Math.max,l=Math.abs,c=Math.min,u=Math.floor
;function e(t){
classCallCheck$1(this,e),this.body=t,this.initialRandomSeed=d(1e6*Math.random()),
this.randomSeed=this.initialRandomSeed,
this.setPhysics=!1,this.options={},this.optionsBackup={
physics:{}},this.defaultOptions={
randomSeed:void 0,improvedLayout:!0,
clusterThreshold:150,hierarchical:{enabled:!1,
levelSeparation:150,nodeSpacing:100,
treeSpacing:200,blockShifting:!0,
edgeMinimization:!0,parentCentralization:!0,
direction:"UD",sortMethod:"hubsize"}
},util.extend(this.options,this.defaultOptions),
this.bindEventListeners()}
return createClass$1(e,[{key:"bindEventListeners",
value:function(){var e=this
;this.body.emitter.on("_dataChanged",(function(){
e.setupHierarchicalLayout()
})),this.body.emitter.on("_dataLoaded",(function(){
e.layoutNetwork()
})),this.body.emitter.on("_resetHierarchicalLayout",(function(){
e.setupHierarchicalLayout()
})),this.body.emitter.on("_adjustEdgesForHierarchicalLayout",(function(){
if(!0===e.options.hierarchical.enabled){
var t=e.direction.curveType()
;e.body.emitter.emit("_forceDisableDynamicCurves",t,!1)
}}))}},{key:"setOptions",value:function(e,t){
if(void 0!==e){
var o=this.options.hierarchical,n=o.enabled
;if(util.selectiveDeepExtend(["randomSeed","improvedLayout","clusterThreshold"],this.options,e),
util.mergeOptions(this.options,e,"hierarchical"),
void 0!==e.randomSeed&&(this.initialRandomSeed=e.randomSeed),
!0===o.enabled)return!0===n&&this.body.emitter.emit("refresh",!0),
"RL"===o.direction||"DU"===o.direction?0<o.levelSeparation&&(o.levelSeparation*=-1):0>o.levelSeparation&&(o.levelSeparation*=-1),
this.setDirectionStrategy(),
this.body.emitter.emit("_resetHierarchicalLayout"),this.adaptAllOptionsForHierarchicalLayout(t)
;if(!0===n)return this.body.emitter.emit("refresh"),
util.deepExtend(t,this.optionsBackup)}return t}},{
key:"adaptAllOptionsForHierarchicalLayout",
value:function(e){
if(!0===this.options.hierarchical.enabled){
var t=this.optionsBackup.physics
;void 0===e.physics||!0===e.physics?(e.physics={
enabled:void 0===t.enabled||t.enabled,
solver:"hierarchicalRepulsion"
},t.enabled=void 0===t.enabled||t.enabled,t.solver=t.solver||"barnesHut"):"object"===_typeof_1$1(e.physics)?(t.enabled=void 0===e.physics.enabled||e.physics.enabled,
t.solver=e.physics.solver||"barnesHut",
e.physics.solver="hierarchicalRepulsion"):!1!==e.physics&&(t.solver="barnesHut",
e.physics={solver:"hierarchicalRepulsion"})
;var o=this.direction.curveType()
;if(void 0===e.edges)this.optionsBackup.edges={
smooth:{enabled:!0,type:"dynamic"}},e.edges={
smooth:!1
};else if(void 0===e.edges.smooth)this.optionsBackup.edges={
smooth:{enabled:!0,type:"dynamic"}
},e.edges.smooth=!1;else if("boolean"==typeof e.edges.smooth)this.optionsBackup.edges={
smooth:e.edges.smooth},e.edges.smooth={
enabled:e.edges.smooth,type:o};else{
var n=e.edges.smooth
;void 0!==n.type&&"dynamic"!==n.type&&(o=n.type),this.optionsBackup.edges={
smooth:void 0===n.enabled||n.enabled,
type:void 0===n.type?"dynamic":n.type,
roundness:void 0===n.roundness?.5:n.roundness,
forceDirection:void 0!==n.forceDirection&&n.forceDirection
},e.edges.smooth={
enabled:void 0===n.enabled||n.enabled,type:o,
roundness:void 0===n.roundness?.5:n.roundness,
forceDirection:void 0!==n.forceDirection&&n.forceDirection
}}
this.body.emitter.emit("_forceDisableDynamicCurves",o)
}return e}},{key:"seededRandom",value:function(){
var e=1e4*o(this.randomSeed++);return e-u(e)}},{
key:"positionInitially",value:function(e){
if(!0!==this.options.hierarchical.enabled){
this.randomSeed=this.initialRandomSeed
;for(var n=e.length+50,d=0;d<e.length;d++){
var s=e[d],r=2*a*this.seededRandom()
;void 0===s.x&&(s.x=n*t(r)),void 0===s.y&&(s.y=n*o(r))
}}}},{key:"layoutNetwork",value:function(){
if(!0!==this.options.hierarchical.enabled&&!0===this.options.improvedLayout){
for(var e=this.body.nodeIndices,t=0,o=0;o<e.length;o++)!0===this.body.nodes[e[o]].predefinedPosition&&(t+=1)
;if(t<.5*e.length){
var a=0,d=this.options.clusterThreshold,s={
clusterNodeProperties:{shape:"ellipse",label:"",
group:"",font:{multi:!1}},clusterEdgeProperties:{
label:"",font:{multi:!1},smooth:{enabled:!1}}}
;if(e.length>d){
for(var l=e.length;e.length>d&&10>=a;){a+=1
;var c=e.length
;if(0==a%3?this.body.modules.clustering.clusterBridges(s):this.body.modules.clustering.clusterOutliers(s),
c==e.length&&0!=a%3)return this._declusterAll(),
this.body.emitter.emit("_layoutFailed"),
void console.info("This network could not be positioned by this version of the improved layout algorithm. Please disable improvedLayout for better performance.")
}this.body.modules.kamadaKawai.setOptions({
springLength:r(150,2*l)})}
10<a&&console.info("The clustering didn't succeed within the amount of interations allowed, progressing with partial result."),
this.body.modules.kamadaKawai.solve(e,this.body.edgeIndices,!0),
this._shiftToCenter()
;for(var m,h=0;h<e.length;h++)!1===(m=this.body.nodes[e[h]]).predefinedPosition&&(m.x+=70*(.5-this.seededRandom()),
m.y+=70*(.5-this.seededRandom()))
;this._declusterAll(),this.body.emitter.emit("_repositionBezierNodes")
}}}},{key:"_shiftToCenter",value:function(){
for(var n,e=NetworkUtil.getRangeCore(this.body.nodes,this.body.nodeIndices),t=NetworkUtil.findCenter(e),o=0;o<this.body.nodeIndices.length;o++)(n=this.body.nodes[this.body.nodeIndices[o]]).x-=t.x,
n.y-=t.y}},{key:"_declusterAll",value:function(){
for(var e=!0;!0===e;){e=!1
;for(var t=0;t<this.body.nodeIndices.length;t++)!0===this.body.nodes[this.body.nodeIndices[t]].isCluster&&(e=!0,
this.body.modules.clustering.openCluster(this.body.nodeIndices[t],{},!1))
;!0===e&&this.body.emitter.emit("_dataChanged")}}
},{key:"getSeed",value:function(){
return this.initialRandomSeed}},{
key:"setupHierarchicalLayout",value:function(){
if(!0===this.options.hierarchical.enabled&&0<this.body.nodeIndices.length){
var o,n,e=!1,t=!1
;for(n in this.lastNodeOnLevel={},this.hierarchical=new HierarchicalStatus,
this.body.nodes)this.body.nodes.hasOwnProperty(n)&&(void 0===(o=this.body.nodes[n]).options.level?t=!0:(e=!0,
this.hierarchical.levels[n]=o.options.level))
;if(!0===t&&!0===e)throw new Error("To use the hierarchical layout, nodes require either no predefined levels or levels have to be defined for all nodes.")
;if(!0===t){
var i=this.options.hierarchical.sortMethod
;"hubsize"===i?this._determineLevelsByHubsize():"directed"===i?this._determineLevelsDirected():"custom"===i&&this._determineLevelsCustomCallback()
}
for(var a in this.body.nodes)this.body.nodes.hasOwnProperty(a)&&this.hierarchical.ensureLevel(a)
;var d=this._getDistribution()
;this._generateMap(),this._placeNodesByHierarchy(d),
this._condenseHierarchy(),this._shiftToCenter()}}
},{key:"_condenseHierarchy",value:function(){
var e=this,t=!1,o={},a=function(t,o){
var n=e.hierarchical.trees
;for(var i in n)n.hasOwnProperty(i)&&n[i]===t&&e.direction.shift(i,o)
},u=function(){
for(var t=[],o=0;o<e.hierarchical.numTrees();o++)t.push(e.direction.getTreeSize(o))
;return t},p=function t(o,n){
if(!n[o.id]&&(n[o.id]=!0,e.hierarchical.childrenReference[o.id])){
var a=e.hierarchical.childrenReference[o.id]
;if(0<a.length)for(var d=0;d<a.length;d++)t(e.body.nodes[a[d]],n)
}},h=function(t){
var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1e9,n=1e9,i=1e9,a=1e9,d=-1e9
;for(var s in t)if(t.hasOwnProperty(s)){
var l=e.body.nodes[s],u=e.hierarchical.levels[l.id],p=e.direction.getPosition(l),h=e._getSpaceAroundNode(l,t),m=slicedToArray(h,2),g=m[0],y=m[1]
;n=c(g,n),i=c(y,i),u<=o&&(a=c(p,a),d=r(p,d))}
return[a,d,n,i]},m=function(t,o){
var n=e.hierarchical.getMaxLevel(t.id),i=e.hierarchical.getMaxLevel(o.id)
;return c(n,i)},g=function(t,o,n){
for(var a=e.hierarchical,d=0;d<o.length;d++){
var s=o[d],r=a.distributionOrdering[s]
;if(1<r.length)for(var l=0;l<r.length-1;l++){
var c=r[l],u=r[l+1]
;a.hasSameParent(c,u)&&a.inSameSubNetwork(c,u)&&t(c,u,n)
}}},y=function(o,n){
var i=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],a=e.direction.getPosition(o),d=e.direction.getPosition(n),s=l(d-a),r=e.options.hierarchical.nodeSpacing
;if(s>r){var c={},u={};p(o,c),p(n,u)
;var g=m(o,n),y=h(c,g),f=h(u,g),b=y[1],_=f[0],v=f[2],k=l(b-_)
;if(k>r){var w=b-_+r
;w<-v+r&&(w=-v+r),0>w&&(e._shiftBlock(n.id,w),t=!0,!0===i&&e._centerParent(n))
}}},f=function(a,l){
for(var v,u=l.id,m=l.edges,g=e.hierarchical.levels[l.id],y=e.options.hierarchical.levelSeparation*e.options.hierarchical.levelSeparation,f={},b=[],_=0;_<m.length;_++)if((v=m[_]).toId!=v.fromId){
var k=v.toId==u?v.from:v.to
;f[m[_].id]=k,e.hierarchical.levels[k.id]<g&&b.push(v)
}var w=function(t,o){
for(var i=0,d=0;d<o.length;d++)if(void 0!==f[o[d].id]){
var s=e.direction.getPosition(f[o[d].id])-t
;i+=s/n(s*s+y)}return i},x=function(t,o){
for(var n=0,i=0;i<o.length;i++)if(void 0!==f[o[i].id]){
var d=e.direction.getPosition(f[o[i].id])-t
;n-=y*s(d*d+y,-1.5)}return n},S=function(t,o){
for(var n=e.direction.getPosition(l),i={},a=0;a<t;a++){
var s=w(n,o),u=x(n,o)
;if(void 0!==i[n-=r(-40,c(40,d(s/u)))])break
;i[n]=a}return n},T=S(a,b);(function(n){
var i=e.direction.getPosition(l)
;if(void 0===o[l.id]){var a={};p(l,a),o[l.id]=a}
var d=h(o[l.id]),s=d[2],r=d[3],u=n-i,m=0
;0<u?m=c(u,r-e.options.hierarchical.nodeSpacing):0>u&&(m=-c(-u,s-e.options.hierarchical.nodeSpacing)),
0!=m&&(e._shiftBlock(l.id,m),t=!0)
})(T),function(o){
var n=e.direction.getPosition(l),i=e._getSpaceAroundNode(l),a=slicedToArray(i,2),d=a[0],s=a[1],u=o-n,p=n
;0<u?p=c(n+(s-e.options.hierarchical.nodeSpacing),o):0>u&&(p=r(n-(d-e.options.hierarchical.nodeSpacing),o)),
p!==n&&(e.direction.setPosition(l,p),t=!0)
}(T=S(a,m))}
;!0===this.options.hierarchical.blockShifting&&(function(o){
var n=e.hierarchical.getLevels()
;n=reverse$2(n).call(n)
;for(var a=0;a<o&&(t=!1,g(y,n,!0),!0===t);a++);
}(5),function(){
for(var t in e.body.nodes)e.body.nodes.hasOwnProperty(t)&&e._centerParent(e.body.nodes[t])
}()),
!0===this.options.hierarchical.edgeMinimization&&function(o){
var n=e.hierarchical.getLevels()
;n=reverse$2(n).call(n);for(var a=0;a<o;a++){t=!1
;for(var d=0;d<n.length;d++)for(var s=n[d],r=e.hierarchical.distributionOrdering[s],l=0;l<r.length;l++)f(1e3,r[l])
;if(!0!==t)break}
}(20),!0===this.options.hierarchical.parentCentralization&&function(){
var t=e.hierarchical.getLevels()
;t=reverse$2(t).call(t)
;for(var o=0;o<t.length;o++)for(var n=t[o],a=e.hierarchical.distributionOrdering[n],d=0;d<a.length;d++)e._centerParent(a[d])
}(),function(){
for(var t=u(),o=0,n=0;n<t.length-1;n++)o+=t[n].max-t[n+1].min+e.options.hierarchical.treeSpacing,
a(n+1,o)}()}},{key:"_getSpaceAroundNode",
value:function(e,t){var o=!0;void 0===t&&(o=!1)
;var n=this.hierarchical.levels[e.id]
;if(void 0!==n){
var i=this.hierarchical.distributionIndex[e.id],a=this.direction.getPosition(e),d=this.hierarchical.distributionOrdering[n],s=1e9,r=1e9
;if(0!==i){var l=d[i-1]
;if(1==o&&void 0===t[l.id]||0==o)s=a-this.direction.getPosition(l)
}if(i!=d.length-1){var p=d[i+1]
;if(1==o&&void 0===t[p.id]||0==o){
var h=this.direction.getPosition(p);r=c(r,h-a)}}
return[s,r]}return[0,0]}},{key:"_centerParent",
value:function(e){
if(this.hierarchical.parentReference[e.id])for(var t=this.hierarchical.parentReference[e.id],o=0;o<t.length;o++){
var n=t[o],a=this.body.nodes[n],d=this.hierarchical.childrenReference[n]
;if(void 0!==d){
var s=this._getCenterPosition(d),r=this.direction.getPosition(a),c=this._getSpaceAroundNode(a),u=slicedToArray(c,2),p=u[0],h=u[1],m=r-s
;(0>m&&l(m)<h-this.options.hierarchical.nodeSpacing||0<m&&l(m)<p-this.options.hierarchical.nodeSpacing)&&this.direction.setPosition(a,s)
}}}},{key:"_placeNodesByHierarchy",
value:function(e){
for(var t in this.positionedNodes={},e)if(e.hasOwnProperty(t)){
var _context122,o=keys$6(e[t])
;o=this._indexArrayToNodes(o),sort$2(_context122=this.direction).call(_context122,o)
;for(var d,n=0,a=0;a<o.length;a++)if(d=o[a],
void 0===this.positionedNodes[d.id]){
var s=this.options.hierarchical.nodeSpacing,r=s*n
;0<n&&(r=this.direction.getPosition(o[a-1])+s),
this.direction.setPosition(d,r,t),
this._validatePositionAndContinue(d,t,r),n++}}}},{
key:"_placeBranchNodes",value:function(e,t){
var o=this.hierarchical.childrenReference[e]
;if(void 0!==o){
for(var _context123,n=[],a=0;a<o.length;a++)n.push(this.body.nodes[o[a]])
;sort$2(_context123=this.direction).call(_context123,n)
;for(var d=0;d<n.length;d++){
var s=n[d],r=this.hierarchical.levels[s.id]
;if(!(r>t&&void 0===this.positionedNodes[s.id]))return
;var c,l=this.options.hierarchical.nodeSpacing
;c=0==d?this.direction.getPosition(this.body.nodes[e]):this.direction.getPosition(n[d-1])+l,
this.direction.setPosition(s,c,r),
this._validatePositionAndContinue(s,r,c)}
var u=this._getCenterPosition(n)
;this.direction.setPosition(this.body.nodes[e],u,t)
}}},{key:"_validatePositionAndContinue",
value:function(e,t,o){
if(this.hierarchical.isTree){
if(void 0!==this.lastNodeOnLevel[t]){
var n=this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[t]])
;if(o-n<this.options.hierarchical.nodeSpacing){
var i=n+this.options.hierarchical.nodeSpacing-o,a=this._findCommonParent(this.lastNodeOnLevel[t],e.id)
;this._shiftBlock(a.withChild,i)}}
this.lastNodeOnLevel[t]=e.id,this.positionedNodes[e.id]=!0,
this._placeBranchNodes(e.id,t)}}},{
key:"_indexArrayToNodes",value:function(e){
for(var t=[],o=0;o<e.length;o++)t.push(this.body.nodes[e[o]])
;return t}},{key:"_getDistribution",
value:function(){var t,o,e={}
;for(t in this.body.nodes)if(this.body.nodes.hasOwnProperty(t)){
o=this.body.nodes[t]
;var n=void 0===this.hierarchical.levels[t]?0:this.hierarchical.levels[t]
;this.direction.fix(o,n),
void 0===e[n]&&(e[n]={}),e[n][t]=o}return e}},{
key:"_getActiveEdges",value:function(e){
var t=this,o=[]
;return forEach$2(util).call(util,e.edges,(function(e){
var _context124
;-1!==indexOf$3(_context124=t.body.edgeIndices).call(_context124,e.id)&&o.push(e)
})),o}},{key:"_getHubSizes",value:function(){
var e=this,t={},o=this.body.nodeIndices
;forEach$2(util).call(util,o,(function(o){
var n=e.body.nodes[o],i=e._getActiveEdges(n).length
;t[i]=!0}));var n=[]
;return forEach$2(util).call(util,t,(function(e){
n.push(+e)
})),sort$2(timsort$1).call(timsort$1,n,(function(e,t){
return t-e})),n}},{
key:"_determineLevelsByHubsize",value:function(){
for(var e=this,t=function(_t3,o){
e.hierarchical.levelDownstream(_t3,o)
},o=this._getHubSizes(),n=function(_n2){
var i=o[_n2]
;return 0===i?"break":void forEach$2(util).call(util,e.body.nodeIndices,(function(o){
var n=e.body.nodes[o]
;i===e._getActiveEdges(n).length&&e._crawlNetwork(t,o)
}))},a=0;a<o.length&&"break"!==n(a);++a);}},{
key:"_determineLevelsCustomCallback",
value:function(){var e=this
;this._crawlNetwork((function(o,n,i){
var a=e.hierarchical.levels[o.id]
;void 0===a&&(a=e.hierarchical.levels[o.id]=1e5)
;var d=(NetworkUtil.cloneOptions(o,"node"),
NetworkUtil.cloneOptions(n,"node"),void NetworkUtil.cloneOptions(i,"edge"))
;e.hierarchical.levels[n.id]=a+d
})),this.hierarchical.setMinLevelToZero(this.body.nodes)
}},{key:"_determineLevelsDirected",
value:function(){var e=this
;this._crawlNetwork((function(o,n,i){
var _t4,a=e.hierarchical.levels[o.id]
;e.hierarchical.levels[n.id]
;_t4=i,forEach$2(util).call(util,e.body.edges,(function(e){
if(e.toId===_t4.fromId&&e.fromId===_t4.toId)return!0
})),void 0===a&&(a=e.hierarchical.levels[o.id]=1e4),
e.hierarchical.levels[n.id]=i.toId==n.id?a+1:a-1
})),this.hierarchical.setMinLevelToZero(this.body.nodes)
}},{key:"_generateMap",value:function(){var e=this
;this._crawlNetwork((function(t,o){
e.hierarchical.levels[o.id]>e.hierarchical.levels[t.id]&&e.hierarchical.addRelation(t.id,o.id)
})),this.hierarchical.checkIfTree()}},{
key:"_crawlNetwork",value:function(){
var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:function(){},o=1<arguments.length?arguments[1]:void 0,n={},a=function o(a,d){
if(void 0===n[a.id]){
e.hierarchical.setTreeIndex(a,d),n[a.id]=!0
;for(var l,c,s=e._getActiveEdges(a),r=0;r<s.length;r++)!0===(c=s[r]).connected&&(l=c.toId==a.id?c.from:c.to,
a.id!=l.id&&(t(a,l,c),o(l,d)))}};if(void 0===o){
for(var r,d=0,s=0;s<this.body.nodeIndices.length;s++)if(r=this.body.nodeIndices[s],
void 0===n[r]){var l=this.body.nodes[r]
;a(l,d),d+=1}}else{var c=this.body.nodes[o]
;if(void 0===c)return void console.error("Node not found:",o)
;a(c)}}},{key:"_shiftBlock",value:function(e,t){
var o=this,n={};!function e(a){if(!n[a]){
n[a]=!0,o.direction.shift(a,t)
;var d=o.hierarchical.childrenReference[a]
;if(void 0!==d)for(var s=0;s<d.length;s++)e(d[s])}
}(e)}},{key:"_findCommonParent",
value:function(e,t){var o=this,n={}
;return function e(t,n){
var a=o.hierarchical.parentReference[n]
;if(void 0!==a)for(var s,d=0;d<a.length;d++)t[s=a[d]]=!0,
e(t,s)}(n,e),function e(t,n){
var a=o.hierarchical.parentReference[n]
;if(void 0!==a)for(var s,d=0;d<a.length;d++){
if(void 0!==t[s=a[d]])return{foundParent:s,
withChild:n};var r=e(t,s)
;if(null!==r.foundParent)return r}return{
foundParent:null,withChild:n}}(n,t)}},{
key:"setDirectionStrategy",value:function(){
var e="UD"===this.options.hierarchical.direction||"DU"===this.options.hierarchical.direction
;this.direction=e?new VerticalStrategy(this):new HorizontalStrategy(this)
}},{key:"_getCenterPosition",value:function(e){
for(var a,t=1e9,o=-1e9,n=0;n<e.length;n++){
if(a=void 0,void 0!==e[n].id)a=e[n];else{
var d=e[n];a=this.body.nodes[d]}
var s=this.direction.getPosition(a)
;t=c(t,s),o=r(o,s)}return.5*(t+o)}}]),e
}(),ManipulationSystem=function(){
function e(t,o,n){
var _context125,_context126,i=this
;classCallCheck$1(this,e),this.body=t,this.canvas=o,
this.selectionHandler=n,this.editMode=!1,
this.manipulationDiv=void 0,this.editModeDiv=void 0,
this.closeDiv=void 0,this.manipulationHammers=[],
this.temporaryUIFunctions={},this.temporaryEventFunctions=[],
this.touchTime=0,this.temporaryIds={nodes:[],
edges:[]
},this.guiEnabled=!1,this.inMode=!1,this.selectedControlNode=void 0,this.options={},
this.defaultOptions={enabled:!1,
initiallyActive:!1,addNode:!0,addEdge:!0,
editNode:void 0,editEdge:!0,deleteNode:!0,
deleteEdge:!0,controlNodeStyle:{shape:"dot",
size:6,color:{background:"#ff0000",
border:"#3c3c3c",highlight:{background:"#07f968",
border:"#3c3c3c"}},borderWidth:2,
borderWidthSelected:2}
},util.extend(this.options,this.defaultOptions),this.body.emitter.on("destroy",(function(){
i._clean()
})),this.body.emitter.on("_dataChanged",bind$2(_context125=this._restore).call(_context125,this)),
this.body.emitter.on("_resetData",bind$2(_context126=this._restore).call(_context126,this))
}return createClass$1(e,[{key:"_restore",
value:function(){
!1!==this.inMode&&(!0===this.options.initiallyActive?this.enableEditMode():this.disableEditMode())
}},{key:"setOptions",value:function(e,t,o){
void 0!==t&&(this.options.locale=void 0===t.locale?o.locale:t.locale,
this.options.locales=void 0===t.locales?o.locales:t.locales),
void 0!==e&&("boolean"==typeof e?this.options.enabled=e:(this.options.enabled=!0,
util.deepExtend(this.options,e)),
!0===this.options.initiallyActive&&(this.editMode=!0),
this._setup())}},{key:"toggleEditMode",
value:function(){
!0===this.editMode?this.disableEditMode():this.enableEditMode()
}},{key:"enableEditMode",value:function(){
this.editMode=!0,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="block",
this.closeDiv.style.display="block",
this.editModeDiv.style.display="none",this.showManipulatorToolbar())
}},{key:"disableEditMode",value:function(){
this.editMode=!1,this._clean(),!0===this.guiEnabled&&(this.manipulationDiv.style.display="none",
this.closeDiv.style.display="none",
this.editModeDiv.style.display="block",this._createEditButton())
}},{key:"showManipulatorToolbar",value:function(){
if(this._clean(),this.manipulationDOM={},
!0===this.guiEnabled){var _context127,_context128
;this.editMode=!0,this.manipulationDiv.style.display="block",
this.closeDiv.style.display="block"
;var e=this.selectionHandler._getSelectedNodeCount(),t=this.selectionHandler._getSelectedEdgeCount(),o=this.options.locales[this.options.locale],n=!1
;!1!==this.options.addNode&&(this._createAddNodeButton(o),
n=!0),!1!==this.options.addEdge&&(!0===n?this._createSeperator(1):n=!0,
this._createAddEdgeButton(o)),
1===e&&"function"==typeof this.options.editNode?(!0===n?this._createSeperator(2):n=!0,
this._createEditNodeButton(o)):1===t&&0===e&&!1!==this.options.editEdge&&(!0===n?this._createSeperator(3):n=!0,
this._createEditEdgeButton(o)),
0!==e+t&&(0<e&&!1!==this.options.deleteNode?(!0===n&&this._createSeperator(4),
this._createDeleteButton(o)):0===e&&!1!==this.options.deleteEdge&&(!0===n&&this._createSeperator(4),
this._createDeleteButton(o))),
this._bindHammerToDiv(this.closeDiv,bind$2(_context127=this.toggleEditMode).call(_context127,this)),
this._temporaryBindEvent("select",bind$2(_context128=this.showManipulatorToolbar).call(_context128,this))
}this.body.emitter.emit("_redraw")}},{
key:"addNodeMode",value:function(){var _context130
;if(!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="addNode",
!0===this.guiEnabled){
var _context129,e=this.options.locales[this.options.locale]
;this.manipulationDOM={},
this._createBackButton(e),this._createSeperator(),this._createDescription(e.addDescription||this.options.locales.en.addDescription),
this._bindHammerToDiv(this.closeDiv,bind$2(_context129=this.toggleEditMode).call(_context129,this))
}
this._temporaryBindEvent("click",bind$2(_context130=this._performAddNode).call(_context130,this))
}},{key:"editNode",value:function(){var e=this
;!0!==this.editMode&&this.enableEditMode(),
this._clean()
;var t=this.selectionHandler._getSelectedNode()
;if(void 0===t)this.showManipulatorToolbar();else{
if(this.inMode="editNode","function"!=typeof this.options.editNode)throw new Error("No function has been configured to handle the editing of nodes.")
;if(!0!==t.isCluster){
var o=util.deepExtend({},t.options,!1)
;if(o.x=t.x,o.y=t.y,2!==this.options.editNode.length)throw new Error("The function for edit does not support two arguments (data, callback)")
;this.options.editNode(o,(function(t){
null!=t&&"editNode"===e.inMode&&e.body.data.nodes.getDataSet().update(t),
e.showManipulatorToolbar()}))
}else alert(this.options.locales[this.options.locale].editClusterError||this.options.locales.en.editClusterError)
}}},{key:"addEdgeMode",value:function(){
var _context132,_context133,_context134,_context135,_context136
;if(!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="addEdge",
!0===this.guiEnabled){
var _context131,e=this.options.locales[this.options.locale]
;this.manipulationDOM={},
this._createBackButton(e),this._createSeperator(),this._createDescription(e.edgeDescription||this.options.locales.en.edgeDescription),
this._bindHammerToDiv(this.closeDiv,bind$2(_context131=this.toggleEditMode).call(_context131,this))
}
this._temporaryBindUI("onTouch",bind$2(_context132=this._handleConnect).call(_context132,this)),
this._temporaryBindUI("onDragEnd",bind$2(_context133=this._finishConnect).call(_context133,this)),
this._temporaryBindUI("onDrag",bind$2(_context134=this._dragControlNode).call(_context134,this)),
this._temporaryBindUI("onRelease",bind$2(_context135=this._finishConnect).call(_context135,this)),
this._temporaryBindUI("onDragStart",bind$2(_context136=this._dragStartEdge).call(_context136,this)),
this._temporaryBindUI("onHold",(function(){}))}},{
key:"editEdgeMode",value:function(){
if(!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="editEdge",
"object"!==_typeof_1$1(this.options.editEdge)||"function"!=typeof this.options.editEdge.editWithoutDrag||(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],
void 0===this.edgeBeingEditedId)){
if(!0===this.guiEnabled){
var _context137,t=this.options.locales[this.options.locale]
;this.manipulationDOM={},
this._createBackButton(t),this._createSeperator(),this._createDescription(t.editEdgeDescription||this.options.locales.en.editEdgeDescription),
this._bindHammerToDiv(this.closeDiv,bind$2(_context137=this.toggleEditMode).call(_context137,this))
}
if(this.edgeBeingEditedId=this.selectionHandler.getSelectedEdges()[0],void 0!==this.edgeBeingEditedId){
var _context138,_context139,_context140,_context141,o=this.body.edges[this.edgeBeingEditedId],n=this._getNewTargetNode(o.from.x,o.from.y),i=this._getNewTargetNode(o.to.x,o.to.y)
;this.temporaryIds.nodes.push(n.id),
this.temporaryIds.nodes.push(i.id),this.body.nodes[n.id]=n,
this.body.nodeIndices.push(n.id),
this.body.nodes[i.id]=i,this.body.nodeIndices.push(i.id),
this._temporaryBindUI("onTouch",bind$2(_context138=this._controlNodeTouch).call(_context138,this)),
this._temporaryBindUI("onTap",(function(){})),
this._temporaryBindUI("onHold",(function(){})),
this._temporaryBindUI("onDragStart",bind$2(_context139=this._controlNodeDragStart).call(_context139,this)),
this._temporaryBindUI("onDrag",bind$2(_context140=this._controlNodeDrag).call(_context140,this)),
this._temporaryBindUI("onDragEnd",bind$2(_context141=this._controlNodeDragEnd).call(_context141,this)),
this._temporaryBindUI("onMouseMove",(function(){})),
this._temporaryBindEvent("beforeDrawing",(function(e){
var t=o.edgeType.findBorderPositions(e)
;!1===n.selected&&(n.x=t.from.x,n.y=t.from.y),
!1===i.selected&&(i.x=t.to.x,i.y=t.to.y)
})),this.body.emitter.emit("_redraw")
}else this.showManipulatorToolbar()}else{
var e=this.body.edges[this.edgeBeingEditedId]
;this._performEditEdge(e.from,e.to)}}},{
key:"deleteSelected",value:function(){var e=this
;!0!==this.editMode&&this.enableEditMode(),
this._clean(),this.inMode="delete"
;var t=this.selectionHandler.getSelectedNodes(),o=this.selectionHandler.getSelectedEdges(),n=void 0
;if(0<t.length){
for(var a=0;a<t.length;a++)if(!0===this.body.nodes[t[a]].isCluster)return void alert(this.options.locales[this.options.locale].deleteClusterError||this.options.locales.en.deleteClusterError)
;"function"==typeof this.options.deleteNode&&(n=this.options.deleteNode)
}else 0<o.length&&"function"==typeof this.options.deleteEdge&&(n=this.options.deleteEdge)
;if("function"==typeof n){
if(2!==n.length)throw new Error("The function for delete does not support two arguments (data, callback)")
;n({nodes:t,edges:o},(function(t){
null!=t&&"delete"===e.inMode?(e.body.data.edges.getDataSet().remove(t.edges),
e.body.data.nodes.getDataSet().remove(t.nodes),
e.body.emitter.emit("startSimulation"),
e.showManipulatorToolbar()):(e.body.emitter.emit("startSimulation"),
e.showManipulatorToolbar())}))
}else this.body.data.edges.getDataSet().remove(o),
this.body.data.nodes.getDataSet().remove(t),
this.body.emitter.emit("startSimulation"),
this.showManipulatorToolbar()}},{key:"_setup",
value:function(){
!0===this.options.enabled?(this.guiEnabled=!0,this._createWrappers(),
!1===this.editMode?this._createEditButton():this.showManipulatorToolbar()):(this._removeManipulationDOM(),
this.guiEnabled=!1)}},{key:"_createWrappers",
value:function(){
void 0===this.manipulationDiv&&(this.manipulationDiv=document.createElement("div"),
this.manipulationDiv.className="vis-manipulation",
this.manipulationDiv.style.display=!0===this.editMode?"block":"none",
this.canvas.frame.appendChild(this.manipulationDiv)),
void 0===this.editModeDiv&&(this.editModeDiv=document.createElement("div"),
this.editModeDiv.className="vis-edit-mode",
this.editModeDiv.style.display=!0===this.editMode?"none":"block",
this.canvas.frame.appendChild(this.editModeDiv)),
void 0===this.closeDiv&&(this.closeDiv=document.createElement("div"),
this.closeDiv.className="vis-close",
this.closeDiv.style.display=this.manipulationDiv.style.display,
this.canvas.frame.appendChild(this.closeDiv))}},{
key:"_getNewTargetNode",value:function(e,t){
var o=util.deepExtend({},this.options.controlNodeStyle)
;o.id="targetNode"+util.randomUUID(),
o.hidden=!1,o.physics=!1,o.x=e,o.y=t
;var n=this.body.functions.createNode(o)
;return n.shape.boundingBox={left:e,right:e,top:t,
bottom:t},n}},{key:"_createEditButton",
value:function(){var _context142
;this._clean(),this.manipulationDOM={},util.recursiveDOMDelete(this.editModeDiv)
;var e=this.options.locales[this.options.locale],t=this._createButton("editMode","vis-button vis-edit vis-edit-mode",e.edit||this.options.locales.en.edit)
;this.editModeDiv.appendChild(t),
this._bindHammerToDiv(t,bind$2(_context142=this.toggleEditMode).call(_context142,this))
}},{key:"_clean",value:function(){
this.inMode=!1,!0===this.guiEnabled&&(util.recursiveDOMDelete(this.editModeDiv),
util.recursiveDOMDelete(this.manipulationDiv),
this._cleanManipulatorHammers()),this._cleanupTemporaryNodesAndEdges(),
this._unbindTemporaryUIs(),
this._unbindTemporaryEvents(),this.body.emitter.emit("restorePhysics")
}},{key:"_cleanManipulatorHammers",
value:function(){
if(0!=this.manipulationHammers.length){
for(var e=0;e<this.manipulationHammers.length;e++)this.manipulationHammers[e].destroy()
;this.manipulationHammers=[]}}},{
key:"_removeManipulationDOM",value:function(){
this._clean(),util.recursiveDOMDelete(this.manipulationDiv),
util.recursiveDOMDelete(this.editModeDiv),
util.recursiveDOMDelete(this.closeDiv),
this.manipulationDiv&&this.canvas.frame.removeChild(this.manipulationDiv),
this.editModeDiv&&this.canvas.frame.removeChild(this.editModeDiv),
this.closeDiv&&this.canvas.frame.removeChild(this.closeDiv),
this.manipulationDiv=void 0,
this.editModeDiv=void 0,this.closeDiv=void 0}},{
key:"_createSeperator",value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1
;this.manipulationDOM["seperatorLineDiv"+e]=document.createElement("div"),
this.manipulationDOM["seperatorLineDiv"+e].className="vis-separator-line",
this.manipulationDiv.appendChild(this.manipulationDOM["seperatorLineDiv"+e])
}},{key:"_createAddNodeButton",value:function(e){
var _context143,t=this._createButton("addNode","vis-button vis-add",e.addNode||this.options.locales.en.addNode)
;this.manipulationDiv.appendChild(t),
this._bindHammerToDiv(t,bind$2(_context143=this.addNodeMode).call(_context143,this))
}},{key:"_createAddEdgeButton",value:function(e){
var _context144,t=this._createButton("addEdge","vis-button vis-connect",e.addEdge||this.options.locales.en.addEdge)
;this.manipulationDiv.appendChild(t),
this._bindHammerToDiv(t,bind$2(_context144=this.addEdgeMode).call(_context144,this))
}},{key:"_createEditNodeButton",value:function(e){
var _context145,t=this._createButton("editNode","vis-button vis-edit",e.editNode||this.options.locales.en.editNode)
;this.manipulationDiv.appendChild(t),
this._bindHammerToDiv(t,bind$2(_context145=this.editNode).call(_context145,this))
}},{key:"_createEditEdgeButton",value:function(e){
var _context146,t=this._createButton("editEdge","vis-button vis-edit",e.editEdge||this.options.locales.en.editEdge)
;this.manipulationDiv.appendChild(t),
this._bindHammerToDiv(t,bind$2(_context146=this.editEdgeMode).call(_context146,this))
}},{key:"_createDeleteButton",value:function(e){
var _context147,t=this.options.rtl?"vis-button vis-delete-rtl":"vis-button vis-delete",o=this._createButton("delete",t,e.del||this.options.locales.en.del)
;this.manipulationDiv.appendChild(o),
this._bindHammerToDiv(o,bind$2(_context147=this.deleteSelected).call(_context147,this))
}},{key:"_createBackButton",value:function(e){
var _context148,t=this._createButton("back","vis-button vis-back",e.back||this.options.locales.en.back)
;this.manipulationDiv.appendChild(t),
this._bindHammerToDiv(t,bind$2(_context148=this.showManipulatorToolbar).call(_context148,this))
}},{key:"_createButton",value:function(e,t,o){
var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"vis-label"
;return this.manipulationDOM[e+"Div"]=document.createElement("div"),
this.manipulationDOM[e+"Div"].className=t,
this.manipulationDOM[e+"Label"]=document.createElement("div"),
this.manipulationDOM[e+"Label"].className=n,
this.manipulationDOM[e+"Label"].innerHTML=o,
this.manipulationDOM[e+"Div"].appendChild(this.manipulationDOM[e+"Label"]),
this.manipulationDOM[e+"Div"]}},{
key:"_createDescription",value:function(e){
this.manipulationDiv.appendChild(this._createButton("description","vis-button vis-none",e))
}},{key:"_temporaryBindEvent",value:function(e,t){
this.temporaryEventFunctions.push({event:e,
boundFunction:t}),this.body.emitter.on(e,t)}},{
key:"_temporaryBindUI",value:function(e,t){
if(void 0===this.body.eventListeners[e])throw new Error("This UI function does not exist. Typo? You tried: "+e+" possible are: "+stringify$2(keys$6(this.body.eventListeners)))
;this.temporaryUIFunctions[e]=this.body.eventListeners[e],
this.body.eventListeners[e]=t}},{
key:"_unbindTemporaryUIs",value:function(){
for(var e in this.temporaryUIFunctions)this.temporaryUIFunctions.hasOwnProperty(e)&&(this.body.eventListeners[e]=this.temporaryUIFunctions[e],
delete this.temporaryUIFunctions[e])
;this.temporaryUIFunctions={}}},{
key:"_unbindTemporaryEvents",value:function(){
for(var e=0;e<this.temporaryEventFunctions.length;e++){
var t=this.temporaryEventFunctions[e].event,o=this.temporaryEventFunctions[e].boundFunction
;this.body.emitter.off(t,o)}
this.temporaryEventFunctions=[]}},{
key:"_bindHammerToDiv",value:function(e,t){
var o=new hammer(e,{})
;hammerUtil.onTouch(o,t),this.manipulationHammers.push(o)
}},{key:"_cleanupTemporaryNodesAndEdges",
value:function(){
for(var e=0;e<this.temporaryIds.edges.length;e++){
var _context149,_context150
;this.body.edges[this.temporaryIds.edges[e]].disconnect(),
delete this.body.edges[this.temporaryIds.edges[e]]
;var t=indexOf$3(_context149=this.body.edgeIndices).call(_context149,this.temporaryIds.edges[e])
;-1!==t&&splice$2(_context150=this.body.edgeIndices).call(_context150,t,1)
}
for(var o=0;o<this.temporaryIds.nodes.length;o++){
var _context151,_context152
;delete this.body.nodes[this.temporaryIds.nodes[o]]
;var n=indexOf$3(_context151=this.body.nodeIndices).call(_context151,this.temporaryIds.nodes[o])
;-1!==n&&splice$2(_context152=this.body.nodeIndices).call(_context152,n,1)
}this.temporaryIds={nodes:[],edges:[]}}},{
key:"_controlNodeTouch",value:function(e){
this.selectionHandler.unselectAll(),this.lastTouch=this.body.functions.getPointer(e.center),
this.lastTouch.translation=util.extend({},this.body.view.translation)
}},{key:"_controlNodeDragStart",value:function(){
var e=this.lastTouch,t=this.selectionHandler._pointerToPositionObject(e),o=this.body.nodes[this.temporaryIds.nodes[0]],n=this.body.nodes[this.temporaryIds.nodes[1]],i=this.body.edges[this.edgeBeingEditedId]
;this.selectedControlNode=void 0
;var a=o.isOverlappingWith(t),d=n.isOverlappingWith(t)
;!0===a?(this.selectedControlNode=o,
i.edgeType.from=o):!0===d&&(this.selectedControlNode=n,
i.edgeType.to=n),void 0!==this.selectedControlNode&&this.selectionHandler.selectObject(this.selectedControlNode),
this.body.emitter.emit("_redraw")}},{
key:"_controlNodeDrag",value:function(e){
this.body.emitter.emit("disablePhysics")
;var t=this.body.functions.getPointer(e.center),o=this.canvas.DOMtoCanvas(t)
;if(void 0!==this.selectedControlNode)this.selectedControlNode.x=o.x,
this.selectedControlNode.y=o.y;else{
var n=t.x-this.lastTouch.x,i=t.y-this.lastTouch.y
;this.body.view.translation={
x:this.lastTouch.translation.x+n,
y:this.lastTouch.translation.y+i}}
this.body.emitter.emit("_redraw")}},{
key:"_controlNodeDragEnd",value:function(e){
var t=this.body.functions.getPointer(e.center),o=this.selectionHandler._pointerToPositionObject(t),n=this.body.edges[this.edgeBeingEditedId]
;if(void 0!==this.selectedControlNode){
this.selectionHandler.unselectAll()
;for(var a=this.selectionHandler._getAllNodesOverlappingWith(o),d=void 0,s=a.length-1;0<=s;s--)if(a[s]!==this.selectedControlNode.id){
d=this.body.nodes[a[s]];break}
if(void 0===d||void 0===this.selectedControlNode)n.updateEdgeType(),
this.body.emitter.emit("restorePhysics");else if(!0===d.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{
var r=this.body.nodes[this.temporaryIds.nodes[0]]
;this.selectedControlNode.id===r.id?this._performEditEdge(d.id,n.to.id):this._performEditEdge(n.from.id,d.id)
}this.body.emitter.emit("_redraw")}}},{
key:"_handleConnect",value:function(e){
if(100<(new Date).valueOf()-this.touchTime){
this.lastTouch=this.body.functions.getPointer(e.center),
this.lastTouch.translation=util.extend({},this.body.view.translation)
;var t=this.lastTouch,o=this.selectionHandler.getNodeAt(t)
;if(void 0!==o)if(!0===o.isCluster)alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError);else{
var n=this._getNewTargetNode(o.x,o.y)
;this.body.nodes[n.id]=n,this.body.nodeIndices.push(n.id)
;var i=this.body.functions.createEdge({
id:"connectionEdge"+util.randomUUID(),from:o.id,
to:n.id,physics:!1,smooth:{enabled:!0,
type:"continuous",roundness:.5}})
;this.body.edges[i.id]=i,this.body.edgeIndices.push(i.id),
this.temporaryIds.nodes.push(n.id),
this.temporaryIds.edges.push(i.id)}
this.touchTime=(new Date).valueOf()}}},{
key:"_dragControlNode",value:function(e){
var t=this.body.functions.getPointer(e.center),o=this.selectionHandler._pointerToPositionObject(t),n=void 0
;void 0!==this.temporaryIds.edges[0]&&(n=this.body.edges[this.temporaryIds.edges[0]].fromId)
;for(var a=this.selectionHandler._getAllNodesOverlappingWith(o),d=void 0,s=a.length-1;0<=s;s--){
var _context153
;if(-1===indexOf$3(_context153=this.temporaryIds.nodes).call(_context153,a[s])){
d=this.body.nodes[a[s]];break}}if(e.controlEdge={
from:n,to:d?d.id:void 0
},this.selectionHandler._generateClickEvent("controlNodeDragging",e,t),
void 0!==this.temporaryIds.nodes[0]){
var r=this.body.nodes[this.temporaryIds.nodes[0]]
;r.x=this.canvas._XconvertDOMtoCanvas(t.x),
r.y=this.canvas._YconvertDOMtoCanvas(t.y),
this.body.emitter.emit("_redraw")}else{
var l=t.x-this.lastTouch.x,c=t.y-this.lastTouch.y
;this.body.view.translation={
x:this.lastTouch.translation.x+l,
y:this.lastTouch.translation.y+c}}}},{
key:"_finishConnect",value:function(e){
var t=this.body.functions.getPointer(e.center),o=this.selectionHandler._pointerToPositionObject(t),n=void 0
;void 0!==this.temporaryIds.edges[0]&&(n=this.body.edges[this.temporaryIds.edges[0]].fromId)
;for(var a=this.selectionHandler._getAllNodesOverlappingWith(o),d=void 0,s=a.length-1;0<=s;s--){
var _context154
;if(-1===indexOf$3(_context154=this.temporaryIds.nodes).call(_context154,a[s])){
d=this.body.nodes[a[s]];break}}
this._cleanupTemporaryNodesAndEdges(),void 0!==d&&(!0===d.isCluster?alert(this.options.locales[this.options.locale].createEdgeError||this.options.locales.en.createEdgeError):void 0!==this.body.nodes[n]&&void 0!==this.body.nodes[d.id]&&this._performAddEdge(n,d.id)),
e.controlEdge={from:n,to:d?d.id:void 0
},this.selectionHandler._generateClickEvent("controlNodeDragEnd",e,t),
this.body.emitter.emit("_redraw")}},{
key:"_dragStartEdge",value:function(e){
var t=this.lastTouch
;this.selectionHandler._generateClickEvent("dragStart",e,t,void 0,!0)
}},{key:"_performAddNode",value:function(e){
var t=this,o={id:util.randomUUID(),
x:e.pointer.canvas.x,y:e.pointer.canvas.y,
label:"new"}
;if("function"!=typeof this.options.addNode)this.body.data.nodes.getDataSet().add(o),
this.showManipulatorToolbar();else{
if(2!==this.options.addNode.length)throw this.showManipulatorToolbar(),
new Error("The function for add does not support two arguments (data,callback)")
;this.options.addNode(o,(function(e){
null!=e&&"addNode"===t.inMode&&t.body.data.nodes.getDataSet().add(e),
t.showManipulatorToolbar()}))}}},{
key:"_performAddEdge",value:function(e,t){
var o=this,n={from:e,to:t}
;if("function"!=typeof this.options.addEdge)this.body.data.edges.getDataSet().add(n),
this.selectionHandler.unselectAll(),
this.showManipulatorToolbar();else{
if(2!==this.options.addEdge.length)throw new Error("The function for connect does not support two arguments (data,callback)")
;this.options.addEdge(n,(function(e){
null!=e&&"addEdge"===o.inMode&&(o.body.data.edges.getDataSet().add(e),
o.selectionHandler.unselectAll(),
o.showManipulatorToolbar())}))}}},{
key:"_performEditEdge",value:function(e,t){
var o=this,n={id:this.edgeBeingEditedId,from:e,
to:t,
label:this.body.data.edges._data[this.edgeBeingEditedId].label
},i=this.options.editEdge
;if("object"===_typeof_1$1(i)&&(i=i.editWithoutDrag),"function"!=typeof i)this.body.data.edges.getDataSet().update(n),
this.selectionHandler.unselectAll(),
this.showManipulatorToolbar();else{
if(2!==i.length)throw new Error("The function for edit does not support two arguments (data, callback)")
;i(n,(function(e){
null==e||"editEdge"!==o.inMode?(o.body.edges[n.id].updateEdgeType(),
o.body.emitter.emit("_redraw"),
o.showManipulatorToolbar()):(o.body.data.edges.getDataSet().update(e),
o.selectionHandler.unselectAll(),
o.showManipulatorToolbar())}))}}}]),e
}(),htmlColors={black:"#000000",navy:"#000080",
darkblue:"#00008B",mediumblue:"#0000CD",
blue:"#0000FF",darkgreen:"#006400",
green:"#008000",teal:"#008080",darkcyan:"#008B8B",
deepskyblue:"#00BFFF",darkturquoise:"#00CED1",
mediumspringgreen:"#00FA9A",lime:"#00FF00",
springgreen:"#00FF7F",aqua:"#00FFFF",
cyan:"#00FFFF",midnightblue:"#191970",
dodgerblue:"#1E90FF",lightseagreen:"#20B2AA",
forestgreen:"#228B22",seagreen:"#2E8B57",
darkslategray:"#2F4F4F",limegreen:"#32CD32",
mediumseagreen:"#3CB371",turquoise:"#40E0D0",
royalblue:"#4169E1",steelblue:"#4682B4",
darkslateblue:"#483D8B",mediumturquoise:"#48D1CC",
indigo:"#4B0082",darkolivegreen:"#556B2F",
cadetblue:"#5F9EA0",cornflowerblue:"#6495ED",
mediumaquamarine:"#66CDAA",dimgray:"#696969",
slateblue:"#6A5ACD",olivedrab:"#6B8E23",
slategray:"#708090",lightslategray:"#778899",
mediumslateblue:"#7B68EE",lawngreen:"#7CFC00",
chartreuse:"#7FFF00",aquamarine:"#7FFFD4",
maroon:"#800000",purple:"#800080",olive:"#808000",
gray:"#808080",skyblue:"#87CEEB",
lightskyblue:"#87CEFA",blueviolet:"#8A2BE2",
darkred:"#8B0000",darkmagenta:"#8B008B",
saddlebrown:"#8B4513",darkseagreen:"#8FBC8F",
lightgreen:"#90EE90",mediumpurple:"#9370D8",
darkviolet:"#9400D3",palegreen:"#98FB98",
darkorchid:"#9932CC",yellowgreen:"#9ACD32",
sienna:"#A0522D",brown:"#A52A2A",
darkgray:"#A9A9A9",lightblue:"#ADD8E6",
greenyellow:"#ADFF2F",paleturquoise:"#AFEEEE",
lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",
firebrick:"#B22222",darkgoldenrod:"#B8860B",
mediumorchid:"#BA55D3",rosybrown:"#BC8F8F",
darkkhaki:"#BDB76B",silver:"#C0C0C0",
mediumvioletred:"#C71585",indianred:"#CD5C5C",
peru:"#CD853F",chocolate:"#D2691E",tan:"#D2B48C",
lightgrey:"#D3D3D3",palevioletred:"#D87093",
thistle:"#D8BFD8",orchid:"#DA70D6",
goldenrod:"#DAA520",crimson:"#DC143C",
gainsboro:"#DCDCDC",plum:"#DDA0DD",
burlywood:"#DEB887",lightcyan:"#E0FFFF",
lavender:"#E6E6FA",darksalmon:"#E9967A",
violet:"#EE82EE",palegoldenrod:"#EEE8AA",
lightcoral:"#F08080",khaki:"#F0E68C",
aliceblue:"#F0F8FF",honeydew:"#F0FFF0",
azure:"#F0FFFF",sandybrown:"#F4A460",
wheat:"#F5DEB3",beige:"#F5F5DC",
whitesmoke:"#F5F5F5",mintcream:"#F5FFFA",
ghostwhite:"#F8F8FF",salmon:"#FA8072",
antiquewhite:"#FAEBD7",linen:"#FAF0E6",
lightgoldenrodyellow:"#FAFAD2",oldlace:"#FDF5E6",
red:"#FF0000",fuchsia:"#FF00FF",magenta:"#FF00FF",
deeppink:"#FF1493",orangered:"#FF4500",
tomato:"#FF6347",hotpink:"#FF69B4",
coral:"#FF7F50",darkorange:"#FF8C00",
lightsalmon:"#FFA07A",orange:"#FFA500",
lightpink:"#FFB6C1",pink:"#FFC0CB",gold:"#FFD700",
peachpuff:"#FFDAB9",navajowhite:"#FFDEAD",
moccasin:"#FFE4B5",bisque:"#FFE4C4",
mistyrose:"#FFE4E1",blanchedalmond:"#FFEBCD",
papayawhip:"#FFEFD5",lavenderblush:"#FFF0F5",
seashell:"#FFF5EE",cornsilk:"#FFF8DC",
lemonchiffon:"#FFFACD",floralwhite:"#FFFAF0",
snow:"#FFFAFA",yellow:"#FFFF00",
lightyellow:"#FFFFE0",ivory:"#FFFFF0",
white:"#FFFFFF"},ColorPicker=function(){
var t=Math.atan2,o=Math.cos,n=Math.sin,i=Math.sqrt,a=Math.PI,d=Math.min
;function e(){
var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1
;classCallCheck$1(this,e),
this.pixelRatio=t,this.generated=!1,this.centerCoordinates={
x:144.5,y:144.5},this.r=289*.49,this.color={r:255,
g:255,b:255,a:1
},this.hueCircle=void 0,this.initialColor={r:255,
g:255,b:255,a:1
},this.previousColor=void 0,this.applied=!1,this.updateCallback=function(){},
this.closeCallback=function(){},this._create()}
return createClass$1(e,[{key:"insertTo",
value:function(e){
void 0!==this.hammer&&(this.hammer.destroy(),this.hammer=void 0),
this.container=e,
this.container.appendChild(this.frame),this._bindHammer(),this._setSize()
}},{key:"setUpdateCallback",value:function(e){
if("function"!=typeof e)throw new Error("Function attempted to set as colorPicker update callback is not a function.")
;this.updateCallback=e}},{key:"setCloseCallback",
value:function(e){
if("function"!=typeof e)throw new Error("Function attempted to set as colorPicker closing callback is not a function.")
;this.closeCallback=e}},{key:"_isColorString",
value:function(e){
if("string"==typeof e)return htmlColors[e]}},{
key:"setColor",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;if("none"!==e){var n,o=this._isColorString(e)
;if(void 0!==o&&(e=o),!0===util.isString(e)){
if(!0===util.isValidRGB(e)){
var i=e.substr(4).substr(0,e.length-5).split(",")
;n={r:i[0],g:i[1],b:i[2],a:1}
}else if(!0===util.isValidRGBA(e)){
var a=e.substr(5).substr(0,e.length-6).split(",")
;n={r:a[0],g:a[1],b:a[2],a:a[3]}
}else if(!0===util.isValidHex(e)){
var d=util.hexToRGB(e);n={r:d.r,g:d.g,b:d.b,a:1}}
}else if(e instanceof Object&&void 0!==e.r&&void 0!==e.g&&void 0!==e.b){
var s=void 0===e.a?"1.0":e.a;n={r:e.r,g:e.g,b:e.b,
a:s}}
if(void 0===n)throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: "+stringify$2(e))
;this._setColor(n,t)}}},{key:"show",
value:function(){
void 0!==this.closeCallback&&(this.closeCallback(),this.closeCallback=void 0),
this.applied=!1,
this.frame.style.display="block",this._generateHueCircle()
}},{key:"_hide",value:function(){
var e=this,t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0]
;!0===t&&(this.previousColor=util.extend({},this.color)),
!0===this.applied&&this.updateCallback(this.initialColor),
this.frame.style.display="none",
setTimeout$1((function(){
void 0!==e.closeCallback&&(e.closeCallback(),e.closeCallback=void 0)
}),0)}},{key:"_save",value:function(){
this.updateCallback(this.color),this.applied=!1,
this._hide()}},{key:"_apply",value:function(){
this.applied=!0,this.updateCallback(this.color),
this._updatePicker(this.color)}},{key:"_loadLast",
value:function(){
void 0===this.previousColor?alert("There is no last color to load..."):this.setColor(this.previousColor,!1)
}},{key:"_setColor",value:function(e){
var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]
;!0===t&&(this.initialColor=util.extend({},e)),
this.color=e
;var i=util.RGBToHSV(e.r,e.g,e.b),d=2*a,s=this.r*i.s,r=this.centerCoordinates.x+s*n(d*i.h),l=this.centerCoordinates.y+s*o(d*i.h)
;this.colorPickerSelector.style.left=r-.5*this.colorPickerSelector.clientWidth+"px",
this.colorPickerSelector.style.top=l-.5*this.colorPickerSelector.clientHeight+"px",
this._updatePicker(e)}},{key:"_setOpacity",
value:function(e){
this.color.a=e/100,this._updatePicker(this.color)}
},{key:"_setBrightness",value:function(e){
var t=util.RGBToHSV(this.color.r,this.color.g,this.color.b)
;t.v=e/100;var o=util.HSVToRGB(t.h,t.s,t.v)
;o.a=this.color.a,this.color=o,this._updatePicker()
}},{key:"_updatePicker",value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.color,t=util.RGBToHSV(e.r,e.g,e.b),o=this.colorPickerCanvas.getContext("2d")
;void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1)),
o.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
;var n=this.colorPickerCanvas.clientWidth,i=this.colorPickerCanvas.clientHeight
;o.clearRect(0,0,n,i),
o.putImageData(this.hueCircle,0,0),o.fillStyle="rgba(0,0,0,"+(1-t.v)+")",
o.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),
fill$2(o).call(o),
this.brightnessRange.value=100*t.v,this.opacityRange.value=100*e.a,
this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",
this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"
}},{key:"_setSize",value:function(){
this.colorPickerCanvas.style.width="100%",this.colorPickerCanvas.style.height="100%",
this.colorPickerCanvas.width=289*this.pixelRatio,
this.colorPickerCanvas.height=289*this.pixelRatio}
},{key:"_create",value:function(){
var _context155,_context156,_context157,_context158
;if(this.frame=document.createElement("div"),
this.frame.className="vis-color-picker",
this.colorPickerDiv=document.createElement("div"),
this.colorPickerSelector=document.createElement("div"),
this.colorPickerSelector.className="vis-selector",
this.colorPickerDiv.appendChild(this.colorPickerSelector),
this.colorPickerCanvas=document.createElement("canvas"),
this.colorPickerDiv.appendChild(this.colorPickerCanvas),
this.colorPickerCanvas.getContext){
var t=this.colorPickerCanvas.getContext("2d")
;this.pixelRatio=(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1),
this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
}else{var e=document.createElement("DIV")
;e.style.color="red",e.style.fontWeight="bold",
e.style.padding="10px",e.innerHTML="Error: your browser does not support HTML canvas",
this.colorPickerCanvas.appendChild(e)}
this.colorPickerDiv.className="vis-color",
this.opacityDiv=document.createElement("div"),
this.opacityDiv.className="vis-opacity",
this.brightnessDiv=document.createElement("div"),
this.brightnessDiv.className="vis-brightness",
this.arrowDiv=document.createElement("div"),
this.arrowDiv.className="vis-arrow",
this.opacityRange=document.createElement("input")
;try{
this.opacityRange.type="range",this.opacityRange.min="0",this.opacityRange.max="100"
}catch(e){}
this.opacityRange.value="100",this.opacityRange.className="vis-range",
this.brightnessRange=document.createElement("input")
;try{
this.brightnessRange.type="range",this.brightnessRange.min="0",this.brightnessRange.max="100"
}catch(e){}
this.brightnessRange.value="100",this.brightnessRange.className="vis-range",
this.opacityDiv.appendChild(this.opacityRange),
this.brightnessDiv.appendChild(this.brightnessRange)
;var o=this;this.opacityRange.onchange=function(){
o._setOpacity(this.value)
},this.opacityRange.oninput=function(){
o._setOpacity(this.value)
},this.brightnessRange.onchange=function(){
o._setBrightness(this.value)
},this.brightnessRange.oninput=function(){
o._setBrightness(this.value)
},this.brightnessLabel=document.createElement("div"),
this.brightnessLabel.className="vis-label vis-brightness",
this.brightnessLabel.innerHTML="brightness:",
this.opacityLabel=document.createElement("div"),
this.opacityLabel.className="vis-label vis-opacity",
this.opacityLabel.innerHTML="opacity:",
this.newColorDiv=document.createElement("div"),
this.newColorDiv.className="vis-new-color",
this.newColorDiv.innerHTML="new",this.initialColorDiv=document.createElement("div"),
this.initialColorDiv.className="vis-initial-color",
this.initialColorDiv.innerHTML="initial",
this.cancelButton=document.createElement("div"),
this.cancelButton.className="vis-button vis-cancel",
this.cancelButton.innerHTML="cancel",
this.cancelButton.onclick=bind$2(_context155=this._hide).call(_context155,this,!1),
this.applyButton=document.createElement("div"),
this.applyButton.className="vis-button vis-apply",
this.applyButton.innerHTML="apply",
this.applyButton.onclick=bind$2(_context156=this._apply).call(_context156,this),
this.saveButton=document.createElement("div"),
this.saveButton.className="vis-button vis-save",
this.saveButton.innerHTML="save",
this.saveButton.onclick=bind$2(_context157=this._save).call(_context157,this),
this.loadButton=document.createElement("div"),
this.loadButton.className="vis-button vis-load",
this.loadButton.innerHTML="load last",
this.loadButton.onclick=bind$2(_context158=this._loadLast).call(_context158,this),
this.frame.appendChild(this.colorPickerDiv),
this.frame.appendChild(this.arrowDiv),
this.frame.appendChild(this.brightnessLabel),
this.frame.appendChild(this.brightnessDiv),
this.frame.appendChild(this.opacityLabel),
this.frame.appendChild(this.opacityDiv),
this.frame.appendChild(this.newColorDiv),
this.frame.appendChild(this.initialColorDiv),
this.frame.appendChild(this.cancelButton),
this.frame.appendChild(this.applyButton),
this.frame.appendChild(this.saveButton),
this.frame.appendChild(this.loadButton)}},{
key:"_bindHammer",value:function(){var e=this
;this.drag={},this.pinch={},this.hammer=new hammer(this.colorPickerCanvas),
this.hammer.get("pinch").set({enable:!0
}),hammerUtil.onTouch(this.hammer,(function(t){
e._moveSelector(t)
})),this.hammer.on("tap",(function(t){
e._moveSelector(t)
})),this.hammer.on("panstart",(function(t){
e._moveSelector(t)
})),this.hammer.on("panmove",(function(t){
e._moveSelector(t)
})),this.hammer.on("panend",(function(t){
e._moveSelector(t)}))}},{key:"_generateHueCircle",
value:function(){if(!1===this.generated){
var e=this.colorPickerCanvas.getContext("2d")
;void 0===this.pixelRation&&(this.pixelRatio=(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)),
e.setTransform(this.pixelRatio,0,0,this.pixelRatio,0,0)
;var d,s,r,l,t=this.colorPickerCanvas.clientWidth,i=this.colorPickerCanvas.clientHeight
;e.clearRect(0,0,t,i),this.centerCoordinates={
x:.5*t,y:.5*i},this.r=.49*t
;var p,c=2*a/360,u=1/this.r
;for(r=0;360>r;r++)for(l=0;l<this.r;l++)d=this.centerCoordinates.x+l*n(c*r),
s=this.centerCoordinates.y+l*o(c*r),
p=util.HSVToRGB(r*(1/360),l*u,1),e.fillStyle="rgb("+p.r+","+p.g+","+p.b+")",
e.fillRect(d-.5,s-.5,2,2)
;e.strokeStyle="rgba(0,0,0,1)",e.circle(this.centerCoordinates.x,this.centerCoordinates.y,this.r),
e.stroke(),this.hueCircle=e.getImageData(0,0,t,i)}
this.generated=!0}},{key:"_moveSelector",
value:function(e){
var r=this.colorPickerDiv.getBoundingClientRect(),l=e.center.x-r.left,c=e.center.y-r.top,u=.5*this.colorPickerDiv.clientHeight,p=.5*this.colorPickerDiv.clientWidth,m=l-p,g=c-u,y=t(m,g),f=.98*d(i(m*m+g*g),p),b=o(y)*f+u,_=n(y)*f+p
;this.colorPickerSelector.style.top=b-.5*this.colorPickerSelector.clientHeight+"px",
this.colorPickerSelector.style.left=_-.5*this.colorPickerSelector.clientWidth+"px"
;var v=y/(2*a);v=0>v?v+1:v
;var k=f/this.r,s=util.RGBToHSV(this.color.r,this.color.g,this.color.b)
;s.h=v,s.s=k;var w=util.HSVToRGB(s.h,s.s,s.v)
;w.a=this.color.a,this.color=w,this.initialColorDiv.style.backgroundColor="rgba("+this.initialColor.r+","+this.initialColor.g+","+this.initialColor.b+","+this.initialColor.a+")",
this.newColorDiv.style.backgroundColor="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.color.a+")"
}}]),e}(),Configurator=function(){var t=Math.ceil
;function e(t,o,n){
var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1
;classCallCheck$1(this,e),
this.parent=t,this.changedOptions=[],this.container=o,
this.allowCreation=!1,this.options={},
this.initialized=!1,this.popupCounter=0,this.defaultOptions={
enabled:!1,filter:!0,container:void 0,
showButton:!0
},util.extend(this.options,this.defaultOptions),this.configureOptions=n,
this.moduleOptions={},
this.domElements=[],this.popupDiv={},this.popupLimit=5,this.popupHistory={},
this.colorPicker=new ColorPicker(i),
this.wrapper=void 0}return createClass$1(e,[{
key:"setOptions",value:function(e){if(void 0!==e){
this.popupHistory={},this._removePopup();var t=!0
;if("string"==typeof e)this.options.filter=e;else if(e instanceof Array)this.options.filter=e.join();else if("object"===_typeof_1$1(e)){
if(null==e)throw new TypeError("options cannot be null")
;void 0!==e.container&&(this.options.container=e.container),
void 0!==filter$2(e)&&(this.options.filter=filter$2(e)),
void 0!==e.showButton&&(this.options.showButton=e.showButton),
void 0!==e.enabled&&(t=e.enabled)
}else"boolean"==typeof e?(this.options.filter=!0,
t=e):"function"==typeof e&&(this.options.filter=e,
t=!0)
;!1===filter$2(this.options)&&(t=!1),this.options.enabled=t
}this._clean()}},{key:"setModuleOptions",
value:function(e){
this.moduleOptions=e,!0===this.options.enabled&&(this._clean(),
void 0!==this.options.container&&(this.container=this.options.container),
this._create())}},{key:"_create",value:function(){
this._clean(),this.changedOptions=[]
;var e=filter$2(this.options),t=0,o=!1
;for(var n in this.configureOptions)this.configureOptions.hasOwnProperty(n)&&(this.allowCreation=!1,
o=!1,
"function"==typeof e?o=(o=e(n,[]))||this._handleObject(this.configureOptions[n],[n],!0):(!0===e||-1!==indexOf$3(e).call(e,n))&&(o=!0),
!1!==o&&(this.allowCreation=!0,
0<t&&this._makeItem([]),this._makeHeader(n),this._handleObject(this.configureOptions[n],[n])),
t++);this._makeButton(),this._push()}},{
key:"_push",value:function(){
this.wrapper=document.createElement("div"),this.wrapper.className="vis-configuration-wrapper",
this.container.appendChild(this.wrapper)
;for(var e=0;e<this.domElements.length;e++)this.wrapper.appendChild(this.domElements[e])
;this._showPopupIfNeeded()}},{key:"_clean",
value:function(){
for(var e=0;e<this.domElements.length;e++)this.wrapper.removeChild(this.domElements[e])
;void 0!==this.wrapper&&(this.container.removeChild(this.wrapper),
this.wrapper=void 0),
this.domElements=[],this._removePopup()}},{
key:"_getValue",value:function(e){
for(var t=this.moduleOptions,o=0;o<e.length;o++){
if(void 0===t[e[o]]){t=void 0;break}t=t[e[o]]}
return t}},{key:"_makeItem",value:function(e){
if(!0===this.allowCreation){
var t=document.createElement("div")
;t.className="vis-configuration vis-config-item vis-config-s"+e.length
;for(var o=arguments.length,n=Array(1<o?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i]
;return forEach$2(n).call(n,(function(e){
t.appendChild(e)
})),this.domElements.push(t),this.domElements.length
}return 0}},{key:"_makeHeader",value:function(e){
var t=document.createElement("div")
;t.className="vis-configuration vis-config-header",
t.innerHTML=e,this._makeItem([],t)}},{
key:"_makeLabel",value:function(e,t){
var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],n=document.createElement("div")
;return n.className="vis-configuration vis-config-label vis-config-s"+t.length,
n.innerHTML=!0===o?"<i><b>"+e+":</b></i>":e+":",n}
},{key:"_makeDropdown",value:function(e,t,o){
var n=document.createElement("select")
;n.className="vis-configuration vis-config-select"
;var a=0
;void 0!==t&&-1!==indexOf$3(e).call(e,t)&&(a=indexOf$3(e).call(e,t))
;for(var s,d=0;d<e.length;d++)(s=document.createElement("option")).value=e[d],
d==a&&(s.selected="selected"),
s.innerHTML=e[d],n.appendChild(s);var r=this
;n.onchange=function(){r._update(this.value,o)}
;var l=this._makeLabel(o[o.length-1],o)
;this._makeItem(o,l,n)}},{key:"_makeRange",
value:function(e,o,n){
var i=e[0],a=e[1],d=e[2],s=e[3],r=document.createElement("input")
;r.className="vis-configuration vis-config-range"
;try{r.type="range",r.min=a,r.max=d}catch(e){}
r.step=s;var l="",c=0;if(void 0!==o){var u=1.2
;0>o&&o*u<a?(r.min=t(o*u),c=r.min,
l="range increased"):o/u<a&&(r.min=t(o/u),c=r.min,
l="range increased"),o*u>d&&1!==d&&(r.max=t(o*u),
c=r.max,l="range increased"),r.value=o
}else r.value=i
;var p=document.createElement("input")
;p.className="vis-configuration vis-config-rangeinput",
p.value=r.value;var h=this;r.onchange=function(){
p.value=this.value,h._update(+this.value,n)
},r.oninput=function(){p.value=this.value}
;var m=this._makeLabel(n[n.length-1],n),g=this._makeItem(n,m,r,p)
;""!=l&&this.popupHistory[g]!==c&&(this.popupHistory[g]=c,
this._setupPopup(l,g))}},{key:"_makeButton",
value:function(){var e=this
;if(!0===this.options.showButton){
var t=document.createElement("div")
;t.className="vis-configuration vis-config-button",
t.innerHTML="generate options",
t.onclick=function(){e._printOptions()
},t.onmouseover=function(){
t.className="vis-configuration vis-config-button hover"
},t.onmouseout=function(){
t.className="vis-configuration vis-config-button"
},this.optionsContainer=document.createElement("div"),
this.optionsContainer.className="vis-configuration vis-config-option-container",
this.domElements.push(this.optionsContainer),
this.domElements.push(t)}}},{key:"_setupPopup",
value:function(e,t){var o=this
;if(!0===this.initialized&&!0===this.allowCreation&&this.popupCounter<this.popupLimit){
var n=document.createElement("div")
;n.id="vis-configuration-popup",n.className="vis-configuration-popup",
n.innerHTML=e,n.onclick=function(){
o._removePopup()
},this.popupCounter+=1,this.popupDiv={html:n,
index:t}}}},{key:"_removePopup",value:function(){
void 0!==this.popupDiv.html&&(this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),
clearTimeout(this.popupDiv.hideTimeout),
clearTimeout(this.popupDiv.deleteTimeout),
this.popupDiv={})}},{key:"_showPopupIfNeeded",
value:function(){var e=this
;if(void 0!==this.popupDiv.html){
var o=this.domElements[this.popupDiv.index].getBoundingClientRect()
;this.popupDiv.html.style.left=o.left+"px",
this.popupDiv.html.style.top=o.top-30+"px",
document.body.appendChild(this.popupDiv.html),
this.popupDiv.hideTimeout=setTimeout$1((function(){
e.popupDiv.html.style.opacity=0
}),1500),this.popupDiv.deleteTimeout=setTimeout$1((function(){
e._removePopup()}),1800)}}},{key:"_makeCheckbox",
value:function(e,t,o){
var n=document.createElement("input")
;n.type="checkbox",n.className="vis-configuration vis-config-checkbox",
n.checked=e,
void 0!==t&&(n.checked=t,t!==e&&("object"===_typeof_1$1(e)?t!==e.enabled&&this.changedOptions.push({
path:o,value:t}):this.changedOptions.push({path:o,
value:t})));var i=this;n.onchange=function(){
i._update(this.checked,o)}
;var a=this._makeLabel(o[o.length-1],o)
;this._makeItem(o,a,n)}},{key:"_makeTextInput",
value:function(e,t,o){
var n=document.createElement("input")
;n.type="text",n.className="vis-configuration vis-config-text",
n.value=t,t!==e&&this.changedOptions.push({path:o,
value:t});var i=this;n.onchange=function(){
i._update(this.value,o)}
;var a=this._makeLabel(o[o.length-1],o)
;this._makeItem(o,a,n)}},{key:"_makeColorField",
value:function(e,t,o){
var n=this,i=e[1],a=document.createElement("div")
;"none"===(t=void 0===t?i:t)?a.className="vis-configuration vis-config-colorBlock none":(a.className="vis-configuration vis-config-colorBlock",
a.style.backgroundColor=t),
t=void 0===t?i:t,a.onclick=function(){
n._showColorPicker(t,a,o)}
;var d=this._makeLabel(o[o.length-1],o)
;this._makeItem(o,d,a)}},{key:"_showColorPicker",
value:function(e,t,o){var n=this
;t.onclick=function(){},this.colorPicker.insertTo(t),
this.colorPicker.show(),this.colorPicker.setColor(e),
this.colorPicker.setUpdateCallback((function(e){
var i="rgba("+e.r+","+e.g+","+e.b+","+e.a+")"
;t.style.backgroundColor=i,n._update(i,o)
})),this.colorPicker.setCloseCallback((function(){
t.onclick=function(){n._showColorPicker(e,t,o)}}))
}},{key:"_handleObject",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],n=!1,i=filter$2(this.options),a=!1
;for(var d in e)if(e.hasOwnProperty(d)){n=!0
;var s=e[d],r=util.copyAndExtendArray(t,d)
;if("function"==typeof i&&(!1===(n=i(d,t))&&!(s instanceof Array)&&"string"!=typeof s&&"boolean"!=typeof s&&s instanceof Object&&(this.allowCreation=!1,
n=this._handleObject(s,r,!0),
this.allowCreation=!1===o)),!1!==n){a=!0
;var l=this._getValue(r)
;if(s instanceof Array)this._handleArray(s,l,r);else if("string"==typeof s)this._makeTextInput(s,l,r);else if("boolean"==typeof s)this._makeCheckbox(s,l,r);else if(s instanceof Object){
var c=!0
;if(-1!==indexOf$3(t).call(t,"physics")&&this.moduleOptions.physics.solver!==d&&(c=!1),
1==c)if(void 0!==s.enabled){
var u=util.copyAndExtendArray(r,"enabled"),p=this._getValue(u)
;if(!0===p){var h=this._makeLabel(d,r,!0)
;this._makeItem(r,h),a=this._handleObject(s,r)||a
}else this._makeCheckbox(s,p,r)}else{
var m=this._makeLabel(d,r,!0)
;this._makeItem(r,m),a=this._handleObject(s,r)||a}
}else console.error("dont know how to handle",s,d,r)
}}return a}},{key:"_handleArray",
value:function(e,t,o){
"string"==typeof e[0]&&"color"===e[0]?(this._makeColorField(e,t,o),
e[1]!==t&&this.changedOptions.push({path:o,value:t
})):"string"==typeof e[0]?(this._makeDropdown(e,t,o),
e[0]!==t&&this.changedOptions.push({path:o,value:t
})):"number"==typeof e[0]&&(this._makeRange(e,t,o),
e[0]!==t&&this.changedOptions.push({path:o,
value:+t}))}},{key:"_update",value:function(e,t){
var o=this._constructOptions(e,t)
;this.parent.body&&this.parent.body.emitter&&this.parent.body.emitter.emit&&this.parent.body.emitter.emit("configChange",o),
this.initialized=!0,this.parent.setOptions(o)}},{
key:"_constructOptions",value:function(e,t){
var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=o
;e="false"!==(e="true"===e||e)&&e
;for(var a=0;a<t.length;a++)"global"!==t[a]&&(void 0===n[t[a]]&&(n[t[a]]={}),
a==t.length-1?n[t[a]]=e:n=n[t[a]]);return o}},{
key:"_printOptions",value:function(){
var e=this.getOptions()
;this.optionsContainer.innerHTML="<pre>var options = "+stringify$2(e,null,2)+"</pre>"
}},{key:"getOptions",value:function(){
for(var e={},t=0;t<this.changedOptions.length;t++)this._constructOptions(this.changedOptions[t].value,this.changedOptions[t].path,e)
;return e}}]),e
}(),string="string",bool="boolean",number="number",object="object",endPoints=["arrow","circle","bar"],allOptions$1={
configure:{enabled:{boolean:bool},filter:{
boolean:bool,string:string,array:"array",
function:"function"},container:{dom:"dom"},
showButton:{boolean:bool},__type__:{object:object,
boolean:bool,string:string,array:"array",
function:"function"}},edges:{arrows:{to:{enabled:{
boolean:bool},scaleFactor:{number:number},type:{
string:endPoints},__type__:{object:object,
boolean:bool}},middle:{enabled:{boolean:bool},
scaleFactor:{number:number},type:{string:endPoints
},__type__:{object:object,boolean:bool}},from:{
enabled:{boolean:bool},scaleFactor:{number:number
},type:{string:endPoints},__type__:{object:object,
boolean:bool}},__type__:{
string:["from","to","middle"],object:object}},
arrowStrikethrough:{boolean:bool},background:{
enabled:{boolean:bool},color:{string:string},
size:{number:number},dashes:{boolean:bool,
array:"array"},__type__:{object:object,
boolean:bool}},chosen:{label:{boolean:bool,
function:"function"},edge:{boolean:bool,
function:"function"},__type__:{object:object,
boolean:bool}},color:{color:{string:string},
highlight:{string:string},hover:{string:string},
inherit:{string:["from","to","both"],boolean:bool
},opacity:{number:number},__type__:{object:object,
string:string}},dashes:{boolean:bool,array:"array"
},font:{color:{string:string},size:{number:number
},face:{string:string},background:{string:string},
strokeWidth:{number:number},strokeColor:{
string:string},align:{
string:["horizontal","top","middle","bottom"]},
vadjust:{number:number},multi:{boolean:bool,
string:string},bold:{color:{string:string},size:{
number:number},face:{string:string},mod:{
string:string},vadjust:{number:number},__type__:{
object:object,string:string}},boldital:{color:{
string:string},size:{number:number},face:{
string:string},mod:{string:string},vadjust:{
number:number},__type__:{object:object,
string:string}},ital:{color:{string:string},size:{
number:number},face:{string:string},mod:{
string:string},vadjust:{number:number},__type__:{
object:object,string:string}},mono:{color:{
string:string},size:{number:number},face:{
string:string},mod:{string:string},vadjust:{
number:number},__type__:{object:object,
string:string}},__type__:{object:object,
string:string}},hidden:{boolean:bool},hoverWidth:{
function:"function",number:number},label:{
string:string,undefined:"undefined"},
labelHighlightBold:{boolean:bool},length:{
number:number,undefined:"undefined"},physics:{
boolean:bool},scaling:{min:{number:number},max:{
number:number},label:{enabled:{boolean:bool},min:{
number:number},max:{number:number},maxVisible:{
number:number},drawThreshold:{number:number},
__type__:{object:object,boolean:bool}},
customScalingFunction:{function:"function"},
__type__:{object:object}},selectionWidth:{
function:"function",number:number},
selfReferenceSize:{number:number},shadow:{
enabled:{boolean:bool},color:{string:string},
size:{number:number},x:{number:number},y:{
number:number},__type__:{object:object,
boolean:bool}},smooth:{enabled:{boolean:bool},
type:{
string:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"]
},roundness:{number:number},forceDirection:{
string:["horizontal","vertical","none"],
boolean:bool},__type__:{object:object,boolean:bool
}},title:{string:string,undefined:"undefined"},
width:{number:number},widthConstraint:{maximum:{
number:number},__type__:{object:object,
boolean:bool,number:number}},value:{number:number,
undefined:"undefined"},__type__:{object:object}},
groups:{useDefaultGroups:{boolean:bool},
__any__:"get from nodes, will be overwritten below",
__type__:{object:object}},interaction:{dragNodes:{
boolean:bool},dragView:{boolean:bool},
hideEdgesOnDrag:{boolean:bool},hideEdgesOnZoom:{
boolean:bool},hideNodesOnDrag:{boolean:bool},
hover:{boolean:bool},keyboard:{enabled:{
boolean:bool},speed:{x:{number:number},y:{
number:number},zoom:{number:number},__type__:{
object:object}},bindToWindow:{boolean:bool},
__type__:{object:object,boolean:bool}},
multiselect:{boolean:bool},navigationButtons:{
boolean:bool},selectable:{boolean:bool},
selectConnectedEdges:{boolean:bool},
hoverConnectedEdges:{boolean:bool},tooltipDelay:{
number:number},zoomView:{boolean:bool},zoomSpeed:{
number:number},__type__:{object:object}},layout:{
randomSeed:{undefined:"undefined",number:number},
improvedLayout:{boolean:bool},clusterThreshold:{
number:number},hierarchical:{enabled:{boolean:bool
},levelSeparation:{number:number},nodeSpacing:{
number:number},treeSpacing:{number:number},
blockShifting:{boolean:bool},edgeMinimization:{
boolean:bool},parentCentralization:{boolean:bool},
direction:{string:["UD","DU","LR","RL"]},
sortMethod:{string:["hubsize","directed"]},
__type__:{object:object,boolean:bool}},__type__:{
object:object}},manipulation:{enabled:{
boolean:bool},initiallyActive:{boolean:bool},
addNode:{boolean:bool,function:"function"},
addEdge:{boolean:bool,function:"function"},
editNode:{function:"function"},editEdge:{
editWithoutDrag:{function:"function"},__type__:{
object:object,boolean:bool,function:"function"}},
deleteNode:{boolean:bool,function:"function"},
deleteEdge:{boolean:bool,function:"function"},
controlNodeStyle:"get from nodes, will be overwritten below",
__type__:{object:object,boolean:bool}},nodes:{
borderWidth:{number:number},borderWidthSelected:{
number:number,undefined:"undefined"},brokenImage:{
string:string,undefined:"undefined"},chosen:{
label:{boolean:bool,function:"function"},node:{
boolean:bool,function:"function"},__type__:{
object:object,boolean:bool}},color:{border:{
string:string},background:{string:string},
highlight:{border:{string:string},background:{
string:string},__type__:{object:object,
string:string}},hover:{border:{string:string},
background:{string:string},__type__:{
object:object,string:string}},__type__:{
object:object,string:string}},fixed:{x:{
boolean:bool},y:{boolean:bool},__type__:{
object:object,boolean:bool}},font:{align:{
string:string},color:{string:string},size:{
number:number},face:{string:string},background:{
string:string},strokeWidth:{number:number},
strokeColor:{string:string},vadjust:{number:number
},multi:{boolean:bool,string:string},bold:{color:{
string:string},size:{number:number},face:{
string:string},mod:{string:string},vadjust:{
number:number},__type__:{object:object,
string:string}},boldital:{color:{string:string},
size:{number:number},face:{string:string},mod:{
string:string},vadjust:{number:number},__type__:{
object:object,string:string}},ital:{color:{
string:string},size:{number:number},face:{
string:string},mod:{string:string},vadjust:{
number:number},__type__:{object:object,
string:string}},mono:{color:{string:string},size:{
number:number},face:{string:string},mod:{
string:string},vadjust:{number:number},__type__:{
object:object,string:string}},__type__:{
object:object,string:string}},group:{
string:string,number:number,undefined:"undefined"
},heightConstraint:{minimum:{number:number},
valign:{string:string},__type__:{object:object,
boolean:bool,number:number}},hidden:{boolean:bool
},icon:{face:{string:string},code:{string:string},
size:{number:number},color:{string:string},
__type__:{object:object}},id:{string:string,
number:number},image:{selected:{string:string,
undefined:"undefined"},unselected:{string:string,
undefined:"undefined"},__type__:{object:object,
string:string}},imagePadding:{top:{number:number},
right:{number:number},bottom:{number:number},
left:{number:number},__type__:{object:object,
number:number}},label:{string:string,
undefined:"undefined"},labelHighlightBold:{
boolean:bool},level:{number:number,
undefined:"undefined"},margin:{top:{number:number
},right:{number:number},bottom:{number:number},
left:{number:number},__type__:{object:object,
number:number}},mass:{number:number},physics:{
boolean:bool},scaling:{min:{number:number},max:{
number:number},label:{enabled:{boolean:bool},min:{
number:number},max:{number:number},maxVisible:{
number:number},drawThreshold:{number:number},
__type__:{object:object,boolean:bool}},
customScalingFunction:{function:"function"},
__type__:{object:object}},shadow:{enabled:{
boolean:bool},color:{string:string},size:{
number:number},x:{number:number},y:{number:number
},__type__:{object:object,boolean:bool}},shape:{
string:["ellipse","circle","database","box","text","image","circularImage","diamond","dot","star","triangle","triangleDown","square","icon","hexagon"]
},shapeProperties:{borderDashes:{boolean:bool,
array:"array"},borderRadius:{number:number},
interpolation:{boolean:bool},useImageSize:{
boolean:bool},useBorderWithImage:{boolean:bool},
__type__:{object:object}},size:{number:number},
title:{string:string,dom:"dom",
undefined:"undefined"},value:{number:number,
undefined:"undefined"},widthConstraint:{minimum:{
number:number},maximum:{number:number},__type__:{
object:object,boolean:bool,number:number}},x:{
number:number},y:{number:number},__type__:{
object:object}},physics:{enabled:{boolean:bool},
barnesHut:{gravitationalConstant:{number:number},
centralGravity:{number:number},springLength:{
number:number},springConstant:{number:number},
damping:{number:number},avoidOverlap:{
number:number},__type__:{object:object}},
forceAtlas2Based:{gravitationalConstant:{
number:number},centralGravity:{number:number},
springLength:{number:number},springConstant:{
number:number},damping:{number:number},
avoidOverlap:{number:number},__type__:{
object:object}},repulsion:{centralGravity:{
number:number},springLength:{number:number},
springConstant:{number:number},nodeDistance:{
number:number},damping:{number:number},__type__:{
object:object}},hierarchicalRepulsion:{
centralGravity:{number:number},springLength:{
number:number},springConstant:{number:number},
nodeDistance:{number:number},damping:{
number:number},__type__:{object:object}},
maxVelocity:{number:number},minVelocity:{
number:number},solver:{
string:["barnesHut","repulsion","hierarchicalRepulsion","forceAtlas2Based"]
},stabilization:{enabled:{boolean:bool},
iterations:{number:number},updateInterval:{
number:number},onlyDynamicEdges:{boolean:bool},
fit:{boolean:bool},__type__:{object:object,
boolean:bool}},timestep:{number:number},
adaptiveTimestep:{boolean:bool},__type__:{
object:object,boolean:bool}},autoResize:{
boolean:bool},clickToUse:{boolean:bool},locale:{
string:string},locales:{__any__:{any:"any"},
__type__:{object:object}},height:{string:string},
width:{string:string},__type__:{object:object}}
;allOptions$1.groups.__any__=allOptions$1.nodes,
allOptions$1.manipulation.controlNodeStyle=allOptions$1.nodes
;var configureOptions={nodes:{
borderWidth:[1,0,10,1],
borderWidthSelected:[2,0,10,1],color:{
border:["color","#2B7CE9"],
background:["color","#97C2FC"],highlight:{
border:["color","#2B7CE9"],
background:["color","#D2E5FF"]},hover:{
border:["color","#2B7CE9"],
background:["color","#D2E5FF"]}},fixed:{x:!1,y:!1
},font:{color:["color","#343434"],
size:[14,0,100,1],
face:["arial","verdana","tahoma"],
background:["color","none"],
strokeWidth:[0,0,50,1],
strokeColor:["color","#ffffff"]},hidden:!1,
labelHighlightBold:!0,physics:!0,scaling:{
min:[10,0,200,1],max:[30,0,200,1],label:{
enabled:!1,min:[14,0,200,1],max:[30,0,200,1],
maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}
},shadow:{enabled:!1,color:"rgba(0,0,0,0.5)",
size:[10,0,20,1],x:[5,-30,30,1],y:[5,-30,30,1]},
shape:["ellipse","box","circle","database","diamond","dot","square","star","text","triangle","triangleDown","hexagon"],
shapeProperties:{borderDashes:!1,
borderRadius:[6,0,20,1],interpolation:!0,
useImageSize:!1},size:[25,0,200,1]},edges:{
arrows:{to:{enabled:!1,scaleFactor:[1,0,3,.05],
type:"arrow"},middle:{enabled:!1,
scaleFactor:[1,0,3,.05],type:"arrow"},from:{
enabled:!1,scaleFactor:[1,0,3,.05],type:"arrow"}},
arrowStrikethrough:!0,color:{
color:["color","#848484"],
highlight:["color","#848484"],
hover:["color","#848484"],
inherit:["from","to","both",!0,!1],
opacity:[1,0,1,.05]},dashes:!1,font:{
color:["color","#343434"],size:[14,0,100,1],
face:["arial","verdana","tahoma"],
background:["color","none"],
strokeWidth:[2,0,50,1],
strokeColor:["color","#ffffff"],
align:["horizontal","top","middle","bottom"]},
hidden:!1,hoverWidth:[1.5,0,5,.1],
labelHighlightBold:!0,physics:!0,scaling:{
min:[1,0,100,1],max:[15,0,100,1],label:{
enabled:!0,min:[14,0,200,1],max:[30,0,200,1],
maxVisible:[30,0,200,1],drawThreshold:[5,0,20,1]}
},selectionWidth:[1.5,0,5,.1],
selfReferenceSize:[20,0,200,1],shadow:{enabled:!1,
color:"rgba(0,0,0,0.5)",size:[10,0,20,1],
x:[5,-30,30,1],y:[5,-30,30,1]},smooth:{enabled:!0,
type:["dynamic","continuous","discrete","diagonalCross","straightCross","horizontal","vertical","curvedCW","curvedCCW","cubicBezier"],
forceDirection:["horizontal","vertical","none"],
roundness:[.5,0,1,.05]},width:[1,0,30,1]},layout:{
hierarchical:{enabled:!1,
levelSeparation:[150,20,500,5],
nodeSpacing:[100,20,500,5],
treeSpacing:[200,20,500,5],blockShifting:!0,
edgeMinimization:!0,parentCentralization:!0,
direction:["UD","DU","LR","RL"],
sortMethod:["hubsize","directed"]}},interaction:{
dragNodes:!0,dragView:!0,hideEdgesOnDrag:!1,
hideEdgesOnZoom:!1,hideNodesOnDrag:!1,hover:!1,
keyboard:{enabled:!1,speed:{x:[10,0,40,1],
y:[10,0,40,1],zoom:[.02,0,.1,.005]},
bindToWindow:!0},multiselect:!1,
navigationButtons:!1,selectable:!0,
selectConnectedEdges:!0,hoverConnectedEdges:!0,
tooltipDelay:[300,0,1e3,25],zoomView:!0,
zoomSpeed:[1,1,1,1]},manipulation:{enabled:!1,
initiallyActive:!1},physics:{enabled:!0,
barnesHut:{gravitationalConstant:[-2e3,-3e4,0,50],
centralGravity:[.3,0,10,.05],
springLength:[95,0,500,5],
springConstant:[.04,0,1.2,.005],
damping:[.09,0,1,.01],avoidOverlap:[0,0,1,.01]},
forceAtlas2Based:{
gravitationalConstant:[-50,-500,0,1],
centralGravity:[.01,0,1,.005],
springLength:[95,0,500,5],
springConstant:[.08,0,1.2,.005],
damping:[.4,0,1,.01],avoidOverlap:[0,0,1,.01]},
repulsion:{centralGravity:[.2,0,10,.05],
springLength:[200,0,500,5],
springConstant:[.05,0,1.2,.005],
nodeDistance:[100,0,500,5],damping:[.09,0,1,.01]},
hierarchicalRepulsion:{
centralGravity:[.2,0,10,.05],
springLength:[100,0,500,5],
springConstant:[.01,0,1.2,.005],
nodeDistance:[120,0,500,5],damping:[.09,0,1,.01]},
maxVelocity:[50,0,150,1],
minVelocity:[.1,.01,.5,.01],
solver:["barnesHut","forceAtlas2Based","repulsion","hierarchicalRepulsion"],
timestep:[.5,.01,1,.01]}},allOptions$2=freeze$2({
allOptions:allOptions$1,
configureOptions:configureOptions
}),FloydWarshall=function(){var t=Math.min
;function e(){classCallCheck$1(this,e)}
return createClass$1(e,[{key:"getDistances",
value:function(e,o,n){
for(var a={},d=e.edges,s=0;s<o.length;s++){
var l={};a[o[s]]=l
;for(var c=0;c<o.length;c++)l[o[c]]=s==c?0:1e9}
for(var p,u=0;u<n.length;u++)!0===(p=d[n[u]]).connected&&void 0!==a[p.fromId]&&void 0!==a[p.toId]&&(a[p.fromId][p.toId]=1,
a[p.toId][p.fromId]=1)
;for(var h=o.length,m=0;m<h;m++)for(var g=o[m],y=a[g],f=0;f<h-1;f++)for(var b=o[f],_=a[b],v=f+1;v<h;v++){
var w=o[v],x=a[w],S=t(_[w],_[g]+y[w])
;_[w]=S,x[b]=S}return a}}]),e
}(),KamadaKawai=function(){
var t=Math.sqrt,o=Math.pow,n=Math.max,i=Math.min
;function e(t,o,n){
classCallCheck$1(this,e),this.body=t,this.springLength=o,this.springConstant=n,
this.distanceSolver=new FloydWarshall}
return createClass$1(e,[{key:"setOptions",
value:function(e){
e&&(e.springLength&&(this.springLength=e.springLength),e.springConstant&&(this.springConstant=e.springConstant))
}},{key:"solve",value:function(e,t){
var o=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2],a=this.distanceSolver.getDistances(this.body,e,t)
;this._createL_matrix(a),
this._createK_matrix(a),this._createE_matrix()
;for(var d=0,s=n(1e3,i(10*this.body.nodeIndices.length,6e3)),r=1e9,l=0,c=0,u=0,p=0,h=0;r>.01&&d<s;){
d+=1
;var m=this._getHighestEnergyNode(o),g=slicedToArray(m,4)
;for(l=g[0],r=g[1],c=g[2],
u=g[3],p=r,h=0;p>1&&h<5;){
h+=1,this._moveNode(l,c,u)
;var y=this._getEnergy(l),f=slicedToArray(y,3)
;p=f[0],c=f[1],u=f[2]}}}},{
key:"_getHighestEnergyNode",value:function(e){
for(var r,t=this.body.nodeIndices,o=this.body.nodes,n=0,i=t[0],a=0,d=0,s=0;s<t.length;s++)if(!1===o[r=t[s]].predefinedPosition||!0===o[r].isCluster&&!0===e||!0===o[r].options.fixed.x||!0===o[r].options.fixed.y){
var l=this._getEnergy(r),c=slicedToArray(l,3),u=c[0],p=c[1],h=c[2]
;n<u&&(n=u,i=r,a=p,d=h)}return[i,n,a,d]}},{
key:"_getEnergy",value:function(e){
var n=slicedToArray(this.E_sums[e],2),i=n[0],a=n[1]
;return[t(o(i,2)+o(a,2)),i,a]}},{key:"_moveNode",
value:function(e,t,n){
for(var g,a=this.body.nodeIndices,d=this.body.nodes,s=0,r=0,l=0,c=d[e].x,u=d[e].y,p=this.K_matrix[e],h=this.L_matrix[e],m=0;m<a.length;m++)if((g=a[m])!==e){
var y=d[g].x,f=d[g].y,b=p[g],_=h[g],v=1/o(o(c-y,2)+o(u-f,2),1.5)
;s+=b*(1-_*o(u-f,2)*v),
r+=b*(_*(c-y)*(u-f)*v),l+=b*(1-_*o(c-y,2)*v)}
var k=s,w=r,x=t,O=(x/k+n/w)/(w/k-l/w)
;d[e].x+=-(w*O+x)/k,d[e].y+=O,this._updateE_matrix(e)
}},{key:"_createL_matrix",value:function(e){
var t=this.body.nodeIndices,o=this.springLength
;this.L_matrix=[];for(var n=0;n<t.length;n++){
this.L_matrix[t[n]]={}
;for(var a=0;a<t.length;a++)this.L_matrix[t[n]][t[a]]=o*e[t[n]][t[a]]
}}},{key:"_createK_matrix",value:function(e){
var t=this.body.nodeIndices,n=this.springConstant
;this.K_matrix=[];for(var a=0;a<t.length;a++){
this.K_matrix[t[a]]={}
;for(var d=0;d<t.length;d++)this.K_matrix[t[a]][t[d]]=n*o(e[t[a]][t[d]],-2)
}}},{key:"_createE_matrix",value:function(){
var e=this.body.nodeIndices,n=this.body.nodes
;this.E_matrix={},this.E_sums={}
;for(var a=0;a<e.length;a++)this.E_matrix[e[a]]=[]
;for(var d=0;d<e.length;d++){
for(var h,s=e[d],r=n[s].x,l=n[s].y,c=0,u=0,p=d;p<e.length;p++)if((h=e[p])!==s){
var m=n[h].x,g=n[h].y,y=1/t(o(r-m,2)+o(l-g,2))
;this.E_matrix[s][p]=[this.K_matrix[s][h]*(r-m-this.L_matrix[s][h]*(r-m)*y),this.K_matrix[s][h]*(l-g-this.L_matrix[s][h]*(l-g)*y)],
this.E_matrix[h][d]=this.E_matrix[s][p],
c+=this.E_matrix[s][p][0],u+=this.E_matrix[s][p][1]
}this.E_sums[s]=[c,u]}}},{key:"_updateE_matrix",
value:function(e){
for(var m,n=this.body.nodeIndices,a=this.body.nodes,d=this.E_matrix[e],s=this.K_matrix[e],r=this.L_matrix[e],l=a[e].x,c=a[e].y,u=0,p=0,h=0;h<n.length;h++)if((m=n[h])!==e){
var g=d[h],y=g[0],f=g[1],b=a[m].x,_=a[m].y,v=1/t(o(l-b,2)+o(c-_,2)),k=s[m]*(l-b-r[m]*(l-b)*v),w=s[m]*(c-_-r[m]*(c-_)*v)
;d[h]=[k,w],u+=k,p+=w;var x=this.E_sums[m]
;x[0]+=k-y,x[1]+=w-f}this.E_sums[e]=[u,p]}}]),e}()
;function Network(e,t,o){
var _context159,_context160,_context161,_context162,n=this
;if(!(this instanceof Network))throw new SyntaxError("Constructor must be called with the new operator")
;this.options={},this.defaultOptions={locale:"en",
locales:locales,clickToUse:!1
},util.extend(this.options,this.defaultOptions),this.body={
container:e,nodes:{},nodeIndices:[],edges:{},
edgeIndices:[],emitter:{
on:bind$2(_context159=this.on).call(_context159,this),
off:bind$2(_context160=this.off).call(_context160,this),
emit:bind$2(_context161=this.emit).call(_context161,this),
once:bind$2(_context162=this.once).call(_context162,this)
},eventListeners:{onTap:function(){},
onTouch:function(){},onDoubleTap:function(){},
onHold:function(){},onDragStart:function(){},
onDrag:function(){},onDragEnd:function(){},
onMouseWheel:function(){},onPinch:function(){},
onMouseMove:function(){},onRelease:function(){},
onContext:function(){}},data:{nodes:null,
edges:null},functions:{createNode:function(){},
createEdge:function(){},getPointer:function(){}},
modules:{},view:{scale:1,translation:{x:0,y:0}}
},this.bindEventListeners(),this.images=new Images((function(){
return n.body.emitter.emit("_requestRedraw")
})),this.groups=new Groups,this.canvas=new Canvas(this.body),
this.selectionHandler=new SelectionHandler(this.body,this.canvas),
this.interactionHandler=new InteractionHandler(this.body,this.canvas,this.selectionHandler),
this.view=new View(this.body,this.canvas),
this.renderer=new CanvasRenderer(this.body,this.canvas),
this.physics=new PhysicsEngine(this.body),
this.layoutEngine=new LayoutEngine(this.body),
this.clustering=new ClusterEngine(this.body),
this.manipulation=new ManipulationSystem(this.body,this.canvas,this.selectionHandler),
this.nodesHandler=new NodesHandler(this.body,this.images,this.groups,this.layoutEngine),
this.edgesHandler=new EdgesHandler(this.body,this.images,this.groups),
this.body.modules.kamadaKawai=new KamadaKawai(this.body,150,.05),
this.body.modules.clustering=this.clustering,
this.canvas._create(),this.setOptions(o),
this.setData(t)}
componentEmitter(Network.prototype),Network.prototype.setOptions=function(e){
var t=this;if(null===e&&(e=void 0),void 0!==e){
if(!0===Validator.validate(e,allOptions$1)&&console.log("%cErrors have been found in the supplied options object.",printStyle),
util.selectiveDeepExtend(["locale","locales","clickToUse"],this.options,e),
e=this.layoutEngine.setOptions(e.layout,e),
this.canvas.setOptions(e),this.groups.setOptions(e.groups),
this.nodesHandler.setOptions(e.nodes),
this.edgesHandler.setOptions(e.edges),this.physics.setOptions(e.physics),
this.manipulation.setOptions(e.manipulation,e,this.options),
this.interactionHandler.setOptions(e.interaction),
this.renderer.setOptions(e.interaction),
this.selectionHandler.setOptions(e.interaction),
void 0!==e.groups&&this.body.emitter.emit("refreshNodes"),
"configure"in e&&(!this.configurator&&(this.configurator=new Configurator(this,this.body.container,configureOptions,this.canvas.pixelRatio)),
this.configurator.setOptions(e.configure)),
this.configurator&&!0===this.configurator.options.enabled){
var n={nodes:{},edges:{},layout:{},interaction:{},
manipulation:{},physics:{},global:{}}
;util.deepExtend(n.nodes,this.nodesHandler.options),
util.deepExtend(n.edges,this.edgesHandler.options),
util.deepExtend(n.layout,this.layoutEngine.options),
util.deepExtend(n.interaction,this.selectionHandler.options),
util.deepExtend(n.interaction,this.renderer.options),
util.deepExtend(n.interaction,this.interactionHandler.options),
util.deepExtend(n.manipulation,this.manipulation.options),
util.deepExtend(n.physics,this.physics.options),
util.deepExtend(n.global,this.canvas.options),
util.deepExtend(n.global,this.options),
this.configurator.setModuleOptions(n)}
void 0===e.clickToUse?this.body.emitter.emit("activate"):!0===e.clickToUse?void 0===this.activator&&(this.activator=new Activator_1(this.canvas.frame),
this.activator.on("change",(function(){
t.body.emitter.emit("activate")
}))):(void 0!==this.activator&&(this.activator.destroy(),
delete this.activator),
this.body.emitter.emit("activate")),this.canvas.setSize(),
this.body.emitter.emit("startSimulation")}
},Network.prototype._updateVisibleIndices=function(){
var e=this.body.nodes,t=this.body.edges
;for(var o in this.body.nodeIndices=[],this.body.edgeIndices=[],
e)e.hasOwnProperty(o)&&(this.clustering._isClusteredNode(o)||!1!==e[o].options.hidden||this.body.nodeIndices.push(e[o].id))
;for(var n in t)if(t.hasOwnProperty(n)){
var i=t[n],a=e[i.fromId],d=e[i.toId]
;!this.clustering._isClusteredEdge(n)&&!1===i.options.hidden&&void 0!==a&&void 0!==d&&!1===a.options.hidden&&!1===d.options.hidden&&this.body.edgeIndices.push(i.id)
}
},Network.prototype.bindEventListeners=function(){
var e=this
;this.body.emitter.on("_dataChanged",(function(){
e.edgesHandler._updateState(),e.body.emitter.emit("_dataUpdated")
})),this.body.emitter.on("_dataUpdated",(function(){
e.clustering._updateState(),
e._updateVisibleIndices(),e._updateValueRange(e.body.nodes),
e._updateValueRange(e.body.edges),
e.body.emitter.emit("startSimulation"),e.body.emitter.emit("_requestRedraw")
}))},Network.prototype.setData=function(e){
if(this.body.emitter.emit("resetPhysics"),
this.body.emitter.emit("_resetData"),this.selectionHandler.unselectAll(),
e&&e.dot&&(e.nodes||e.edges))throw new SyntaxError('Data must contain either parameter "dot" or  parameter pair "nodes" and "edges", but not both.')
;if(this.setOptions(e&&e.options),e&&e.dot){
console.log("The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);")
;var t=dotparser.DOTToGraph(e.dot);this.setData(t)
}else if(e&&e.gephi){
console.log("The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);")
;var o=parseGephi(e.gephi);this.setData(o)
}else this.nodesHandler.setData(e&&e.nodes,!0),
this.edgesHandler.setData(e&&e.edges,!0),
this.body.emitter.emit("_dataChanged"),
this.body.emitter.emit("_dataLoaded"),this.body.emitter.emit("initPhysics")
},Network.prototype.destroy=function(){
for(var e in this.body.emitter.emit("destroy"),
this.body.emitter.off(),this.off(),
delete this.groups,delete this.canvas,delete this.selectionHandler,
delete this.interactionHandler,
delete this.view,delete this.renderer,delete this.physics,
delete this.layoutEngine,
delete this.clustering,delete this.manipulation,delete this.nodesHandler,
delete this.edgesHandler,
delete this.configurator,delete this.images,this.body.nodes)this.body.nodes.hasOwnProperty(e)&&delete this.body.nodes[e]
;for(var t in this.body.edges)this.body.edges.hasOwnProperty(t)&&delete this.body.edges[t]
;util.recursiveDOMDelete(this.body.container)
},Network.prototype._updateValueRange=function(e){
var i,t=void 0,o=void 0,n=0
;for(i in e)if(e.hasOwnProperty(i)){
var a=e[i].getValue()
;void 0!==a&&(t=void 0===t?a:Math.min(a,t),o=void 0===o?a:Math.max(a,o),
n+=a)}
if(void 0!==t&&void 0!==o)for(i in e)e.hasOwnProperty(i)&&e[i].setValueRange(t,o,n)
},Network.prototype.isActive=function(){
return!this.activator||this.activator.active
},Network.prototype.setSize=function(){
return this.canvas.setSize.apply(this.canvas,arguments)
},Network.prototype.canvasToDOM=function(){
return this.canvas.canvasToDOM.apply(this.canvas,arguments)
},Network.prototype.DOMtoCanvas=function(){
return this.canvas.DOMtoCanvas.apply(this.canvas,arguments)
},Network.prototype.findNode=function(){
return this.clustering.findNode.apply(this.clustering,arguments)
},Network.prototype.isCluster=function(){
return this.clustering.isCluster.apply(this.clustering,arguments)
},Network.prototype.openCluster=function(){
return this.clustering.openCluster.apply(this.clustering,arguments)
},Network.prototype.cluster=function(){
return this.clustering.cluster.apply(this.clustering,arguments)
},Network.prototype.getNodesInCluster=function(){
return this.clustering.getNodesInCluster.apply(this.clustering,arguments)
},Network.prototype.clusterByConnection=function(){
return this.clustering.clusterByConnection.apply(this.clustering,arguments)
},Network.prototype.clusterByHubsize=function(){
return this.clustering.clusterByHubsize.apply(this.clustering,arguments)
},Network.prototype.clusterOutliers=function(){
return this.clustering.clusterOutliers.apply(this.clustering,arguments)
},Network.prototype.getSeed=function(){
return this.layoutEngine.getSeed.apply(this.layoutEngine,arguments)
},Network.prototype.enableEditMode=function(){
return this.manipulation.enableEditMode.apply(this.manipulation,arguments)
},Network.prototype.disableEditMode=function(){
return this.manipulation.disableEditMode.apply(this.manipulation,arguments)
},Network.prototype.addNodeMode=function(){
return this.manipulation.addNodeMode.apply(this.manipulation,arguments)
},Network.prototype.editNode=function(){
return this.manipulation.editNode.apply(this.manipulation,arguments)
},Network.prototype.editNodeMode=function(){
return console.log("Deprecated: Please use editNode instead of editNodeMode."),
this.manipulation.editNode.apply(this.manipulation,arguments)
},Network.prototype.addEdgeMode=function(){
return this.manipulation.addEdgeMode.apply(this.manipulation,arguments)
},Network.prototype.editEdgeMode=function(){
return this.manipulation.editEdgeMode.apply(this.manipulation,arguments)
},Network.prototype.deleteSelected=function(){
return this.manipulation.deleteSelected.apply(this.manipulation,arguments)
},Network.prototype.getPositions=function(){
return this.nodesHandler.getPositions.apply(this.nodesHandler,arguments)
},Network.prototype.storePositions=function(){
return this.nodesHandler.storePositions.apply(this.nodesHandler,arguments)
},Network.prototype.moveNode=function(){
return this.nodesHandler.moveNode.apply(this.nodesHandler,arguments)
},Network.prototype.getBoundingBox=function(){
return this.nodesHandler.getBoundingBox.apply(this.nodesHandler,arguments)
},Network.prototype.getConnectedNodes=function(e){
return void 0===this.body.nodes[e]?this.edgesHandler.getConnectedNodes.apply(this.edgesHandler,arguments):this.nodesHandler.getConnectedNodes.apply(this.nodesHandler,arguments)
},Network.prototype.getConnectedEdges=function(){
return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler,arguments)
},Network.prototype.startSimulation=function(){
return this.physics.startSimulation.apply(this.physics,arguments)
},Network.prototype.stopSimulation=function(){
return this.physics.stopSimulation.apply(this.physics,arguments)
},Network.prototype.stabilize=function(){
return this.physics.stabilize.apply(this.physics,arguments)
},Network.prototype.getSelection=function(){
return this.selectionHandler.getSelection.apply(this.selectionHandler,arguments)
},Network.prototype.setSelection=function(){
return this.selectionHandler.setSelection.apply(this.selectionHandler,arguments)
},Network.prototype.getSelectedNodes=function(){
return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler,arguments)
},Network.prototype.getSelectedEdges=function(){
return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler,arguments)
},Network.prototype.getNodeAt=function(){
var e=this.selectionHandler.getNodeAt.apply(this.selectionHandler,arguments)
;return void 0!==e&&void 0!==e.id?e.id:e
},Network.prototype.getEdgeAt=function(){
var e=this.selectionHandler.getEdgeAt.apply(this.selectionHandler,arguments)
;return void 0!==e&&void 0!==e.id?e.id:e
},Network.prototype.selectNodes=function(){
return this.selectionHandler.selectNodes.apply(this.selectionHandler,arguments)
},Network.prototype.selectEdges=function(){
return this.selectionHandler.selectEdges.apply(this.selectionHandler,arguments)
},Network.prototype.unselectAll=function(){
this.selectionHandler.unselectAll.apply(this.selectionHandler,arguments),
this.redraw()
},Network.prototype.redraw=function(){
return this.renderer.redraw.apply(this.renderer,arguments)
},Network.prototype.getScale=function(){
return this.view.getScale.apply(this.view,arguments)
},Network.prototype.getViewPosition=function(){
return this.view.getViewPosition.apply(this.view,arguments)
},Network.prototype.fit=function(){
return this.view.fit.apply(this.view,arguments)
},Network.prototype.moveTo=function(){
return this.view.moveTo.apply(this.view,arguments)
},Network.prototype.focus=function(){
return this.view.focus.apply(this.view,arguments)
},Network.prototype.releaseNode=function(){
return this.view.releaseNode.apply(this.view,arguments)
},Network.prototype.getOptionsFromConfigurator=function(){
var e={}
;return this.configurator&&(e=this.configurator.getOptions.apply(this.configurator)),
e}
;var DOMutil=createCommonjsModule$2((function(e,t){
t.prepareElements=function(e){
for(var t in e)e.hasOwnProperty(t)&&(e[t].redundant=e[t].used,
e[t].used=[])},t.cleanupElements=function(e){
for(var t in e)if(e.hasOwnProperty(t)&&e[t].redundant){
for(var o=0;o<e[t].redundant.length;o++)e[t].redundant[o].parentNode.removeChild(e[t].redundant[o])
;e[t].redundant=[]}},t.resetElements=function(e){
t.prepareElements(e),t.cleanupElements(e),
t.prepareElements(e)
},t.getSVGElement=function(e,t,o){var n
;return t.hasOwnProperty(e)?0<t[e].redundant.length?(n=t[e].redundant[0],
t[e].redundant.shift()):(n=document.createElementNS("http://www.w3.org/2000/svg",e),
o.appendChild(n)):(n=document.createElementNS("http://www.w3.org/2000/svg",e),
t[e]={used:[],redundant:[]
},o.appendChild(n)),t[e].used.push(n),n
},t.getDOMElement=function(e,t,o,n){var i
;return t.hasOwnProperty(e)?0<t[e].redundant.length?(i=t[e].redundant[0],
t[e].redundant.shift()):(i=document.createElement(e),
void 0===n?o.appendChild(i):o.insertBefore(i,n)):(i=document.createElement(e),
t[e]={used:[],redundant:[]
},void 0===n?o.appendChild(i):o.insertBefore(i,n)),t[e].used.push(i),
i},t.drawPoint=function(e,o,n,i,a,d){var s
;if("circle"==n.style?((s=t.getSVGElement("circle",i,a)).setAttributeNS(null,"cx",e),
s.setAttributeNS(null,"cy",o),
s.setAttributeNS(null,"r",.5*n.size)):((s=t.getSVGElement("rect",i,a)).setAttributeNS(null,"x",e-.5*n.size),
s.setAttributeNS(null,"y",o-.5*n.size),
s.setAttributeNS(null,"width",n.size),s.setAttributeNS(null,"height",n.size)),
void 0!==n.styles&&s.setAttributeNS(null,"style",n.styles),
s.setAttributeNS(null,"class",n.className+" vis-point"),
d){var r=t.getSVGElement("text",i,a)
;d.xOffset&&(e+=d.xOffset),d.yOffset&&(o+=d.yOffset),
d.content&&(r.textContent=d.content),
d.className&&r.setAttributeNS(null,"class",d.className+" vis-label"),
r.setAttributeNS(null,"x",e),
r.setAttributeNS(null,"y",o)}return s
},t.drawBar=function(e,o,n,i,a,d,s,r){if(0!=i){
0>i&&(o-=i*=-1);var l=t.getSVGElement("rect",d,s)
;l.setAttributeNS(null,"x",e-.5*n),
l.setAttributeNS(null,"y",o),l.setAttributeNS(null,"width",n),
l.setAttributeNS(null,"height",i),
l.setAttributeNS(null,"class",a),r&&l.setAttributeNS(null,"style",r)
}}})),DOMutil$1=freeze$2({default:DOMutil,
__moduleExports:DOMutil,
prepareElements:DOMutil.prepareElements,
cleanupElements:DOMutil.cleanupElements,
resetElements:DOMutil.resetElements,
getSVGElement:DOMutil.getSVGElement,
getDOMElement:DOMutil.getDOMElement,
drawPoint:DOMutil.drawPoint,
drawBar:DOMutil.drawBar
}),moment$2=createCommonjsModule$2((function(e){
var t=Math.round,o=Math.pow,n=Math.max,a=Math.abs,d=Math.min,s=Math.floor,r=Math.ceil
;!function(t,o){e.exports=o()}(0,(function(){
function l(){return $t.apply(null,arguments)}
function u(e){
return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)
}function p(e){
return null!=e&&"[object Object]"===Object.prototype.toString.call(e)
}function m(e){return void 0===e}function g(e){
return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)
}function y(e){
return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)
}function f(e,t){var n,o=[]
;for(n=0;n<e.length;++n)o.push(t(e[n],n));return o
}function _(e,t){
return Object.prototype.hasOwnProperty.call(e,t)}
function v(e,t){for(var o in t)_(t,o)&&(e[o]=t[o])
;return _(t,"toString")&&(e.toString=t.toString),
_(t,"valueOf")&&(e.valueOf=t.valueOf),e}
function k(e,t,o,n){return dt(e,t,o,n,!0).utc()}
function x(e){return null==e._pf&&(e._pf={
empty:!1,unusedTokens:[],unusedInput:[],
overflow:-2,charsLeftOver:0,nullInput:!1,
invalidMonth:null,invalidFormat:!1,
userInvalidated:!1,iso:!1,parsedDateParts:[],
meridiem:null,rfc2822:!1,weekdayMismatch:!1
}),e._pf}function S(e){if(null==e._isValid){
var t=x(e),o=Kt.call(t.parsedDateParts,(function(e){
return null!=e
})),n=!isNaN(e._d.getTime())&&0>t.overflow&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&o)
;if(e._strict&&(n=n&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),
null!=isFrozen$2&&isFrozen$2(e))return n
;e._isValid=n}return e._isValid}function O(e){
var t=k(NaN)
;return null==e?x(t).userInvalidated=!0:v(x(t),e),t
}function D(e,t){var o,n,a
;if(m(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),
m(t._i)||(e._i=t._i),
m(t._f)||(e._f=t._f),m(t._l)||(e._l=t._l),m(t._strict)||(e._strict=t._strict),
m(t._tzm)||(e._tzm=t._tzm),
m(t._isUTC)||(e._isUTC=t._isUTC),m(t._offset)||(e._offset=t._offset),
m(t._pf)||(e._pf=x(t)),
m(t._locale)||(e._locale=t._locale),0<Qt.length)for(o=0;o<Qt.length;o++)m(a=t[n=Qt[o]])||(e[n]=a)
;return e}function T(e){
D(this,e),this._d=new Date(null==e._d?NaN:e._d.getTime()),
this.isValid()||(this._d=new Date(NaN)),
!1===Jt&&(Jt=!0,l.updateOffset(this),Jt=!1)}
function E(e){
return e instanceof T||null!=e&&null!=e._isAMomentObject
}function C(e){return 0>e?r(e)||0:s(e)}
function M(e){var t=+e,o=0
;return 0!=t&&isFinite(t)&&(o=C(t)),o}
function I(e,t,o){
var l,n=d(e.length,t.length),s=a(e.length-t.length),r=0
;for(l=0;l<n;l++)(o&&e[l]!==t[l]||!o&&M(e[l])!==M(t[l]))&&r++
;return r+s}function P(e){
!1===l.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)
}function F(e,t){var o=!0;return v((function(){
if(null!=l.deprecationHandler&&l.deprecationHandler(null,e),
o){for(var d,n=[],a=0;a<arguments.length;a++){
if(d="","object"==typeof arguments[a]){
for(var s in d+="\n["+a+"] ",arguments[0])d+=s+": "+arguments[0][s]+", "
;d=slice$4(d).call(d,0,-2)}else d=arguments[a]
;n.push(d)}
P(e+"\nArguments: "+slice$4(Array.prototype).call(n).join("")+"\n"+(new Error).stack),
o=!1}return t.apply(this,arguments)}),t)}
function N(e,t){
null!=l.deprecationHandler&&l.deprecationHandler(e,t),eo[e]||(P(t),
eo[e]=!0)}function Y(e){
return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)
}function z(e,t){var n,o=v({},e)
;for(n in t)_(t,n)&&(p(e[n])&&p(t[n])?(o[n]={},v(o[n],e[n]),
v(o[n],t[n])):null==t[n]?delete o[n]:o[n]=t[n])
;for(n in e)_(e,n)&&!_(t,n)&&p(e[n])&&(o[n]=v({},o[n]))
;return o}function B(e){null!=e&&this.set(e)}
function H(e,t){var o=e.toLowerCase()
;no[o]=no[o+"s"]=no[t]=e}function W(e){
return"string"==typeof e?no[e]||no[e.toLowerCase()]:void 0
}function j(e){var o,n,t={}
;for(n in e)_(e,n)&&((o=W(n))&&(t[o]=e[n]))
;return t}function U(e,t){io[e]=t}
function G(e,t,i){var d=""+a(e)
;return(0<=e?i?"+":"":"-")+o(10,n(0,t-d.length)).toString().substr(1)+d
}function q(e,t,o,n){var i=n
;"string"==typeof n&&(i=function(){
return this[n]()
}),e&&(lo[e]=i),t&&(lo[t[0]]=function(){
return G(i.apply(this,arguments),t[1],t[2])
}),o&&(lo[o]=function(){
return this.localeData().ordinal(i.apply(this,arguments),e)
})}function X(e){
return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")
}function $(e,t){
return e.isValid()?(t=K(t,e.localeData()),ro[t]=ro[t]||function(e){
var o,n,t=e.match(ao)
;for(o=0,n=t.length;o<n;o++)t[o]=lo[t[o]]?lo[t[o]]:X(t[o])
;return function(o){var d,a=""
;for(d=0;d<n;d++)a+=Y(t[d])?t[d].call(o,e):t[d]
;return a}
}(t),ro[t](e)):e.localeData().invalidDate()}
function K(e,t){function o(e){
return t.longDateFormat(e)||e}var n=5
;for(so.lastIndex=0;0<=n&&so.test(e);)e=e.replace(so,o),
so.lastIndex=0,n-=1;return e}function Q(e,t,o){
To[e]=Y(t)?t:function(e){return e&&o?o:t}}
function J(e,t){
return _(To,e)?To[e](t._strict,t._locale):new RegExp(function(e){
return te(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,o,n,i){
return t||o||n||i})))}(e))}function te(e){
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}
function oe(e,t){var n,o=t
;for("string"==typeof e&&(e=[e]),g(t)&&(o=function(e,_o4){
_o4[t]=M(e)}),n=0;n<e.length;n++)Eo[e[n]]=o}
function ne(e,t){oe(e,(function(e,o,n,i){
n._w=n._w||{},t(e,n._w,n,i)}))}function ie(e,t,o){
null!=t&&_(Eo,e)&&Eo[e](t,o._a,o,e)}
function ae(e){return de(e)?366:365}
function de(e){return 0==e%4&&0!=e%100||0==e%400}
function se(e,t){return function(o){
return null==o?re(this,e):(le(this,e,o),l.updateOffset(this,t),
this)}}function re(e,t){
return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN
}function le(e,t,o){
e.isValid()&&!isNaN(o)&&("FullYear"===t&&de(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](o,e.month(),pe(o,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](o))
}function pe(e,t){if(isNaN(e)||isNaN(t))return NaN
;var o=function(e,t){return(e%t+t)%t}(t,12)
;return e+=(t-o)/12,1===o?de(e)?29:28:31-o%7%2}
function he(e,t,o){
var a,d,s,n=e.toLocaleLowerCase()
;if(!this._monthsParse)for(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[],
a=0;12>a;++a)s=k([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(s,"").toLocaleLowerCase(),
this._longMonthsParse[a]=this.months(s,"").toLocaleLowerCase()
;return o?"MMM"===t?-1===(d=Ro.call(this._shortMonthsParse,n))?null:d:-1===(d=Ro.call(this._longMonthsParse,n))?null:d:"MMM"===t?-1!==(d=Ro.call(this._shortMonthsParse,n))?d:-1===(d=Ro.call(this._longMonthsParse,n))?null:d:-1!==(d=Ro.call(this._longMonthsParse,n))?d:-1===(d=Ro.call(this._shortMonthsParse,n))?null:d
}function ge(e,t){var o;if(!e.isValid())return e
;if("string"==typeof t)if(/^\d+$/.test(t))t=M(t);else if(!g(t=e.localeData().monthsParse(t)))return e
;return o=d(e.date(),pe(e.year(),t)),
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,o),e}
function ye(e){
return null==e?re(this,"Month"):(ge(this,e),l.updateOffset(this,!0),
this)}function fe(){function e(e,t){
return t.length-e.length}var a,d,t=[],o=[],n=[]
;for(a=0;12>a;a++)d=k([2e3,a]),t.push(this.monthsShort(d,"")),
o.push(this.months(d,"")),
n.push(this.months(d,"")),n.push(this.monthsShort(d,""))
;for(sort$2(t).call(t,e),
sort$2(o).call(o,e),sort$2(n).call(n,e),a=0;12>a;a++)t[a]=te(t[a]),
o[a]=te(o[a]);for(a=0;24>a;a++)n[a]=te(n[a])
;this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,
this._monthsStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")
}function be(e,t,o,n,i,a,d){var s
;return 100>e&&0<=e?(s=new Date(e+400,t,o,n,i,a,d),
isFinite(s.getFullYear())&&s.setFullYear(e)):s=new Date(e,t,o,n,i,a,d),
s}function _e(e){var t;if(100>e&&0<=e){
var o=slice$4(Array.prototype).call(arguments)
;o[0]=e+400,t=new Date(Date.UTC.apply(null,o)),
isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)
}else t=new Date(Date.UTC.apply(null,arguments))
;return t}function ve(e,t,o){var n=7+t-o
;return-((7+_e(e,0,n).getUTCDay()-t)%7)+n-1}
function ke(e,t,o,n,i){
var s,r,d=1+7*(t-1)+(7+o-n)%7+ve(e,n,i)
;return 0>=d?r=ae(s=e-1)+d:d>ae(e)?(s=e+1,
r=d-ae(e)):(s=e,r=d),{year:s,dayOfYear:r}}
function we(e,t,o){
var a,d,n=ve(e.year(),t,o),i=s((e.dayOfYear()-n-1)/7)+1
;return 1>i?a=i+xe(d=e.year()-1,t,o):i>xe(e.year(),t,o)?(a=i-xe(e.year(),t,o),
d=e.year()+1):(d=e.year(),a=i),{week:a,year:d}}
function xe(e,t,o){var n=ve(e,t,o),i=ve(e+1,t,o)
;return(ae(e)-n+i)/7}function De(e,t){
var _context163
;return concat$2(_context163=slice$4(e).call(e,t,7)).call(_context163,slice$4(e).call(e,0,t))
}function Te(e,t,o){
var a,d,s,n=e.toLocaleLowerCase()
;if(!this._weekdaysParse)for(this._weekdaysParse=[],
this._shortWeekdaysParse=[],
this._minWeekdaysParse=[],a=0;7>a;++a)s=k([2e3,1]).day(a),
this._minWeekdaysParse[a]=this.weekdaysMin(s,"").toLocaleLowerCase(),
this._shortWeekdaysParse[a]=this.weekdaysShort(s,"").toLocaleLowerCase(),
this._weekdaysParse[a]=this.weekdays(s,"").toLocaleLowerCase()
;return o?"dddd"===t?-1===(d=Ro.call(this._weekdaysParse,n))?null:d:"ddd"===t?-1===(d=Ro.call(this._shortWeekdaysParse,n))?null:d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:"dddd"===t?-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1!==(d=Ro.call(this._shortWeekdaysParse,n))?d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:"ddd"===t?-1!==(d=Ro.call(this._shortWeekdaysParse,n))?d:-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1===(d=Ro.call(this._minWeekdaysParse,n))?null:d:-1!==(d=Ro.call(this._minWeekdaysParse,n))?d:-1!==(d=Ro.call(this._weekdaysParse,n))?d:-1===(d=Ro.call(this._shortWeekdaysParse,n))?null:d
}function Ce(){function e(e,t){
return t.length-e.length}
var d,s,r,l,c,t=[],o=[],n=[],a=[]
;for(d=0;7>d;d++)s=k([2e3,1]).day(d),r=this.weekdaysMin(s,""),
l=this.weekdaysShort(s,""),
c=this.weekdays(s,""),t.push(r),o.push(l),n.push(c),a.push(r),
a.push(l),a.push(c)
;for(sort$2(t).call(t,e),sort$2(o).call(o,e),sort$2(n).call(n,e),
sort$2(a).call(a,e),
d=0;7>d;d++)o[d]=te(o[d]),n[d]=te(n[d]),a[d]=te(a[d])
;this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),
this._weekdaysShortRegex=this._weekdaysRegex,
this._weekdaysMinRegex=this._weekdaysRegex,
this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),
this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),
this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")
}function Me(){return this.hours()%12||12}
function Ie(e,t){q(e,0,0,(function(){
return this.localeData().meridiem(this.hours(),this.minutes(),t)
}))}function Pe(e,t){return t._meridiemParse}
function Fe(e){
return e?e.toLowerCase().replace("_","-"):e}
function Ye(t){var o=null
;if(!jo[t]&&e&&e.exports)try{
o=Jo._abbr,function(){
throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
}(),Re(o)}catch(t){}return jo[t]}function Re(e,t){
var o
;return e&&((o=m(t)?Be(e):ze(e,t))?Jo=o:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),
Jo._abbr}function ze(e,t){if(null!==t){
var _context164,n,o=Wo
;if(t.abbr=e,null!=jo[e])N("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
o=jo[e]._config;else if(null!=t.parentLocale)if(null!=jo[t.parentLocale])o=jo[t.parentLocale]._config;else{
if(null==(n=Ye(t.parentLocale)))return Uo[t.parentLocale]||(Uo[t.parentLocale]=[]),
Uo[t.parentLocale].push({name:e,config:t}),null
;o=n._config}
return jo[e]=new B(z(o,t)),Uo[e]&&forEach$2(_context164=Uo[e]).call(_context164,(function(e){
ze(e.name,e.config)})),Re(e),jo[e]}
return delete jo[e],null}function Be(e){var t
;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),
!e)return Jo;if(!u(e)){if(t=Ye(e))return t;e=[e]}
return function(e){
for(var o,n,a,d,t=0;t<e.length;){
for(o=(d=Fe(e[t]).split("-")).length,n=(n=Fe(e[t+1]))?n.split("-"):null;0<o;){
if(a=Ye(slice$4(d).call(d,0,o).join("-")))return a
;if(n&&n.length>=o&&I(d,n,!0)>=o-1)break;o--}t++}
return Jo}(e)}function Ae(e){var o,t=e._a
;return t&&-2===x(e).overflow&&(o=0>t[1]||11<t[1]?1:1>t[2]||t[2]>pe(t[0],t[1])?2:0>t[3]||24<t[3]||24===t[3]&&(0!==t[4]||0!==t[5]||0!==t[6])?3:0>t[4]||59<t[4]?4:0>t[5]||59<t[5]?5:0>t[6]||999<t[6]?6:-1,
x(e)._overflowDayOfYear&&(0>o||2<o)&&(o=2),
x(e)._overflowWeeks&&-1===o&&(o=7),x(e)._overflowWeekday&&-1===o&&(o=8),
x(e).overflow=o),e}function He(e,t,o){
return null==e?null==t?o:t:e}function je(e){
var o,n,a,d,s,t=[];if(!e._d){for(a=function(e){
var t=new Date(l.now())
;return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]
}(e),
e._w&&null==e._a[2]&&null==e._a[1]&&function(e){
var t,o,n,i,a,d,s,r
;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)a=1,d=4,o=He(t.GG,e._a[0],we(st(),1,4).year),
n=He(t.W,1),(1>(i=He(t.E,1))||7<i)&&(r=!0);else{
a=e._locale._week.dow,d=e._locale._week.doy
;var l=we(st(),a,d)
;o=He(t.gg,e._a[0],l.year),n=He(t.w,l.week),null==t.d?null==t.e?i=a:(i=t.e+a,
(0>t.e||6<t.e)&&(r=!0)):(0>(i=t.d)||6<i)&&(r=!0)}
1>n||n>xe(o,a,d)?x(e)._overflowWeeks=!0:null==r?(s=ke(o,n,i,a,d),
e._a[0]=s.year,
e._dayOfYear=s.dayOfYear):x(e)._overflowWeekday=!0
}(e),null!=e._dayOfYear&&(s=He(e._a[0],a[0]),
(e._dayOfYear>ae(s)||0===e._dayOfYear)&&(x(e)._overflowDayOfYear=!0),
n=_e(s,0,e._dayOfYear),
e._a[1]=n.getUTCMonth(),e._a[2]=n.getUTCDate()),o=0;3>o&&null==e._a[o];++o)e._a[o]=t[o]=a[o]
;for(;7>o;o++)e._a[o]=t[o]=null==e._a[o]?2===o?1:0:e._a[o]
;24===e._a[3]&&0===e._a[4]&&0===e._a[5]&&0===e._a[6]&&(e._nextDay=!0,
e._a[3]=0),
e._d=(e._useUTC?_e:be).apply(null,t),d=e._useUTC?e._d.getUTCDay():e._d.getDay(),
null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
e._nextDay&&(e._a[3]=24),
e._w&&void 0!==e._w.d&&e._w.d!==d&&(x(e).weekdayMismatch=!0)
}}function Ve(e){
var n,a,d,s,r,c,t=e._i,o=Vo.exec(t)||Go.exec(t)
;if(o){
for(x(e).iso=!0,n=0,a=Xo.length;n<a;n++)if(Xo[n][1].exec(o[1])){
s=Xo[n][0],d=!1!==Xo[n][2];break}
if(null==s)return void(e._isValid=!1);if(o[3]){
for(n=0,a=Zo.length;n<a;n++)if(Zo[n][1].exec(o[3])){
r=(o[2]||" ")+Zo[n][0];break}
if(null==r)return void(e._isValid=!1)}
if(!d&&null!=r)return void(e._isValid=!1)
;if(o[4]){
if(!qo.exec(o[4]))return void(e._isValid=!1);c="Z"
}e._f=s+(r||"")+(c||""),Je(e)}else e._isValid=!1}
function qe(e){var t=_parseInt$3(e,10)
;return 49>=t?2e3+t:999>=t?1900+t:t}
function Ke(e){var t=Ko.exec(function(e){
return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")
}(e._i));if(t){var o=function(e,t,o,n,i,a){
var d=[qe(e),indexOf$3(Bo).call(Bo,t),_parseInt$3(o,10),_parseInt$3(n,10),_parseInt$3(i,10)]
;return a&&d.push(_parseInt$3(a,10)),d
}(t[4],t[3],t[2],t[5],t[6],t[7])
;if(!function(e,t,o){
return!e||indexOf$3(Lo).call(Lo,e)===new Date(t[0],t[1],t[2]).getDay()||(x(o).weekdayMismatch=!0,
o._isValid=!1,!1)}(t[1],o,e))return
;e._a=o,e._tzm=function(e,t,o){if(e)return Qo[e]
;if(t)return 0;var n=_parseInt$3(o,10),i=n%100
;return(n-i)/100*60+i
}(t[8],t[9],t[10]),e._d=_e.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
x(e).rfc2822=!0}else e._isValid=!1}function Je(e){
var _context165
;if(e._f!==l.ISO_8601)if(e._f!==l.RFC_2822){
e._a=[],x(e).empty=!0
;var a,d,s,r,c,t=""+e._i,o=t.length,n=0
;for(s=K(e._f,e._locale).match(ao)||[],a=0;a<s.length;a++)r=s[a],
(d=(t.match(J(r,e))||[])[0])&&(0<(c=t.substr(0,indexOf$3(t).call(t,d))).length&&x(e).unusedInput.push(c),
t=slice$4(t).call(t,indexOf$3(t).call(t,d)+d.length),
n+=d.length),lo[r]?(d?x(e).empty=!1:x(e).unusedTokens.push(r),
ie(r,d,e)):e._strict&&!d&&x(e).unusedTokens.push(r)
;x(e).charsLeftOver=o-n,0<t.length&&x(e).unusedInput.push(t),
12>=e._a[3]&&!0===x(e).bigHour&&0<e._a[3]&&(x(e).bigHour=void 0),
x(e).parsedDateParts=slice$4(_context165=e._a).call(_context165,0),
x(e).meridiem=e._meridiem,e._a[3]=function(e,t,o){
var n
;return null==o?t:null==e.meridiemHour?null==e.isPM?t:((n=e.isPM(o))&&12>t&&(t+=12),
n||12!==t||(t=0),t):e.meridiemHour(t,o)
}(e._locale,e._a[3],e._meridiem),je(e),Ae(e)
}else Ke(e);else Ve(e)}function it(e){
var t=e._i,o=e._f
;return e._locale=e._locale||Be(e._l),null===t||void 0===o&&""===t?O({
nullInput:!0
}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),E(t)?new T(Ae(t)):(y(t)?e._d=t:u(o)?function(e){
var t,o,n,a,d
;if(0===e._f.length)return x(e).invalidFormat=!0,void(e._d=new Date(NaN))
;for(a=0;a<e._f.length;a++)d=0,
t=D({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),
t._f=e._f[a],Je(t),S(t)&&(d+=x(t).charsLeftOver,
d+=10*x(t).unusedTokens.length,x(t).score=d,
(null==n||d<n)&&(n=d,o=t));v(e,o||t)
}(e):o?Je(e):function(e){var t=e._i
;m(t)?e._d=new Date(l.now()):y(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){
var t=$o.exec(e._i)
;null===t?(Ve(e),!1===e._isValid&&(delete e._isValid,Ke(e),!1===e._isValid&&(delete e._isValid,
l.createFromInputFallback(e)))):e._d=new Date(+t[1])
}(e):u(t)?(e._a=f(slice$4(t).call(t,0),(function(e){
return _parseInt$3(e,10)
})),je(e)):p(t)?function(e){if(!e._d){
var t=j(e._i)
;e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],(function(e){
return e&&_parseInt$3(e,10)})),je(e)}
}(e):g(t)?e._d=new Date(t):l.createFromInputFallback(e)
}(e),S(e)||(e._d=null),e))}function dt(e,t,o,n,i){
var a={}
;return(!0===o||!1===o)&&(n=o,o=void 0),(p(e)&&function(e){
if(getOwnPropertyNames$2)return 0===getOwnPropertyNames$2(e).length
;for(var t in e)if(e.hasOwnProperty(t))return!1
;return!0
}(e)||u(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,
a._l=o,a._i=e,a._f=t,a._strict=n,function(e){
var t=new T(Ae(it(e)))
;return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t
}(a)}function st(e,t,o,n){return dt(e,t,o,n,!1)}
function rt(e,t){var o,n
;if(1===t.length&&u(t[0])&&(t=t[0]),!t.length)return st()
;for(o=t[0],n=1;n<t.length;++n)(!t[n].isValid()||t[n][e](o))&&(o=t[n])
;return o}function ct(e){
var t=j(e),o=t.year||0,n=t.quarter||0,i=t.month||0,a=t.week||t.isoWeek||0,d=t.day||0,s=t.hour||0,r=t.minute||0,l=t.second||0,c=t.millisecond||0
;this._isValid=function(e){
for(var t in e)if(-1===Ro.call(on,t)||null!=e[t]&&isNaN(e[t]))return!1
;for(var o=!1,n=0;n<on.length;++n)if(e[on[n]]){
if(o)return!1
;_parseFloat$3(e[on[n]])!==M(e[on[n]])&&(o=!0)}
return!0
}(t),this._milliseconds=+c+1e3*l+6e4*r+1e3*s*60*60,this._days=+d+7*a,this._months=+i+3*n+12*o,
this._data={},this._locale=Be(),this._bubble()}
function ut(e){return e instanceof ct}
function pt(e){return 0>e?-1*t(-1*e):t(e)}
function ht(e,t){q(e,0,0,(function(){
var e=this.utcOffset(),o="+"
;return 0>e&&(e=-e,o="-"),o+G(~~(e/60),2)+t+G(~~e%60,2)
}))}function mt(e,t){var o=(t||"").match(e)
;if(null===o)return null
;var i=((o[o.length-1]||[])+"").match(nn)||["-",0,0],a=60*i[1]+M(i[2])
;return 0===a?0:"+"===i[0]?a:-a}function gt(e,t){
var o,n
;return t._isUTC?(o=t.clone(),n=(E(e)||y(e)?e.valueOf():st(e).valueOf())-o.valueOf(),
o._d.setTime(o._d.valueOf()+n),
l.updateOffset(o,!1),o):st(e).local()}
function yt(e){
return 15*-t(e._d.getTimezoneOffset()/15)}
function bt(){
return!!this.isValid()&&this._isUTC&&0===this._offset
}function _t(e,t){var i,a,d,o=e,n=null
;return ut(e)?o={ms:e._milliseconds,d:e._days,
M:e._months
}:g(e)?(o={},t?o[t]=e:o.milliseconds=e):(n=an.exec(e))?(i="-"===n[1]?-1:1,
o={y:0,d:M(n[2])*i,h:M(n[3])*i,m:M(n[4])*i,
s:M(n[5])*i,ms:M(pt(1e3*n[6]))*i
}):(n=dn.exec(e))?(i="-"===n[1]?-1:1,o={
y:vt(n[2],i),M:vt(n[3],i),w:vt(n[4],i),
d:vt(n[5],i),h:vt(n[6],i),m:vt(n[7],i),
s:vt(n[8],i)
}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(d=function(e,t){
var o
;return e.isValid()&&t.isValid()?(t=gt(t,e),e.isBefore(t)?o=kt(e,t):((o=kt(t,e)).milliseconds=-o.milliseconds,
o.months=-o.months),o):{milliseconds:0,months:0}
}(st(o.from),st(o.to)),(o={}).ms=d.milliseconds,
o.M=d.months),a=new ct(o),ut(e)&&_(e,"_locale")&&(a._locale=e._locale),
a}function vt(e,t){
var o=e&&_parseFloat$3(e.replace(",","."))
;return(isNaN(o)?0:o)*t}function kt(e,t){var o={}
;return o.months=t.month()-e.month()+12*(t.year()-e.year()),
e.clone().add(o.months,"M").isAfter(t)&&--o.months,
o.milliseconds=+t-+e.clone().add(o.months,"M"),o}
function xt(e,t){return function(o,n){var a
;return null===n||isNaN(+n)||(N(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
a=o,
o=n,n=a),St(this,_t(o="string"==typeof o?+o:o,n),e),this
}}function St(e,t,o,n){
var i=t._milliseconds,a=pt(t._days),d=pt(t._months)
;e.isValid()&&(n=null==n||n,d&&ge(e,re(e,"Month")+d*o),
a&&le(e,"Date",re(e,"Date")+a*o),
i&&e._d.setTime(e._d.valueOf()+i*o),n&&l.updateOffset(e,a||d))
}function Ot(e,t){
var a,o=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(o,"months")
;return 0>t-n?a=(t-n)/(n-e.clone().add(o-1,"months")):a=(t-n)/(e.clone().add(o+1,"months")-n),
-(o+a)||0}function Dt(e){var t
;return void 0===e?this._locale._abbr:(null!=(t=Be(e))&&(this._locale=t),
this)}function Tt(){return this._locale}
function Et(e,t){return(e%t+t)%t}
function Ct(e,t,o){
return 100>e&&0<=e?new Date(e+400,t,o)-126227808e5:new Date(e,t,o).valueOf()
}function Mt(e,t,o){
return 100>e&&0<=e?Date.UTC(e+400,t,o)-126227808e5:Date.UTC(e,t,o)
}function It(e,t){q(0,[e,e.length],0,t)}
function Pt(e,t,o,n,i){var a
;return null==e?we(this,n,i).year:(t>(a=xe(e,n,i))&&(t=a),
Ft.call(this,e,t,o,n,i))}function Ft(e,t,o,n,i){
var a=ke(e,t,o,n,i),d=_e(a.year,0,a.dayOfYear)
;return this.year(d.getUTCFullYear()),
this.month(d.getUTCMonth()),this.date(d.getUTCDate()),
this}function Nt(e,t){t[6]=M(1e3*("0."+e))}
function Yt(e){return e}function Rt(e,t,o,n){
var i=Be(),a=k().set(n,t);return i[o](a,e)}
function zt(e,t,o){
if(g(e)&&(t=e,e=void 0),e=e||"",null!=t)return Rt(e,t,o,"month")
;var a,n=[]
;for(a=0;12>a;a++)n[a]=Rt(e,a,o,"month");return n}
function Bt(e,t,o,n){
"boolean"==typeof e?(g(t)&&(o=t,t=void 0),t=t||""):(o=t=e,e=!1,
g(t)&&(o=t,t=void 0),t=t||"")
;var a=Be(),d=e?a._week.dow:0
;if(null!=o)return Rt(t,(o+d)%7,n,"day")
;var r,s=[]
;for(r=0;7>r;r++)s[r]=Rt(t,(r+d)%7,n,"day")
;return s}function Lt(e,t,o,n){var i=_t(t,o)
;return e._milliseconds+=n*i._milliseconds,
e._days+=n*i._days,e._months+=n*i._months,
e._bubble()}function At(e){return 0>e?s(e):r(e)}
function Ht(e){return 4800*e/146097}
function Wt(e){return 146097*e/4800}
function jt(e){return function(){return this.as(e)
}}function Ut(e){return function(){
return this.isValid()?this._data[e]:NaN}}
function Vt(e,t,o,n,i){
return i.relativeTime(t||1,!!o,e,n)}
function Xt(e){return(0<e)-(0>e)||+e}
function Zt(){
if(!this.isValid())return this.localeData().invalidDate()
;var n,i,e=Rn(this._milliseconds)/1e3,t=Rn(this._days),o=Rn(this._months)
;n=C(e/60),i=C(n/60),e%=60,n%=60
;var d=C(o/12),r=o%=12,l=t,c=i,u=n,p=e?e.toFixed(3).replace(/\.?0+$/,""):"",s=this.asSeconds()
;if(!s)return"P0D"
;var h=0>s?"-":"",m=Xt(this._months)===Xt(s)?"":"-",g=Xt(this._days)===Xt(s)?"":"-",y=Xt(this._milliseconds)===Xt(s)?"":"-"
;return h+"P"+(d?m+d+"Y":"")+(r?m+r+"M":"")+(l?g+l+"D":"")+(c||u||p?"T":"")+(c?y+c+"H":"")+(u?y+u+"M":"")+(p?y+p+"S":"")
}var $t,Kt
;Kt=some$2(Array.prototype)?some$2(Array.prototype):function(e){
for(var o=Object(this),t=o.length>>>0,n=0;n<t;n++)if(n in o&&e.call(this,o[n],n,o))return!0
;return!1}
;var Qt=l.momentProperties=[],Jt=!1,eo={}
;l.suppressDeprecationWarnings=!1,l.deprecationHandler=null
;var to=keys$6||function(e){var o,t=[]
;for(o in e)_(e,o)&&t.push(o);return t
},no={},io={},ao=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,so=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ro={},lo={},co=/\d/,uo=/\d\d/,po=/\d{3}/,ho=/\d{4}/,mo=/[+-]?\d{6}/,go=/\d\d?/,yo=/\d\d\d\d?/,fo=/\d\d\d\d\d\d?/,bo=/\d{1,3}/,_o=/\d{1,4}/,vo=/[+-]?\d{1,6}/,ko=/\d+/,wo=/[+-]?\d+/,xo=/Z|[+-]\d\d:?\d\d/gi,So=/Z|[+-]\d\d(?::?\d\d)?/gi,Do=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,To={},Eo={}
;q("Y",0,0,(function(){var e=this.year()
;return 9999>=e?""+e:"+"+e
})),q(0,["YY",2],0,(function(){
return this.year()%100
})),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),
H("year","y"),
U("year",1),Q("Y",wo),Q("YY",go,uo),Q("YYYY",_o,ho),Q("YYYYY",vo,mo),
Q("YYYYYY",vo,mo),
oe(["YYYYY","YYYYYY"],0),oe("YYYY",(function(e,t){
t[0]=2===e.length?l.parseTwoDigitYear(e):M(e)
})),oe("YY",(function(e,t){
t[0]=l.parseTwoDigitYear(e)
})),oe("Y",(function(e,t){t[0]=_parseInt$3(e,10)
})),l.parseTwoDigitYear=function(e){
return M(e)+(68<M(e)?1900:2e3)}
;var Ro,Yo=se("FullYear",!0)
;Ro=indexOf$3(Array.prototype)?indexOf$3(Array.prototype):function(e){
var t
;for(t=0;t<this.length;++t)if(this[t]===e)return t
;return-1},q("M",["MM",2],"Mo",(function(){
return this.month()+1})),q("MMM",0,0,(function(e){
return this.localeData().monthsShort(this,e)
})),q("MMMM",0,0,(function(e){
return this.localeData().months(this,e)
})),H("month","M"),U("month",8),Q("M",go),
Q("MM",go,uo),Q("MMM",(function(e,t){
return t.monthsShortRegex(e)
})),Q("MMMM",(function(e,t){
return t.monthsRegex(e)
})),oe(["M","MM"],(function(e,t){t[1]=M(e)-1
})),oe(["MMM","MMMM"],(function(e,t,o,n){
var i=o._locale.monthsParse(e,n,o._strict)
;null==i?x(o).invalidMonth=e:t[1]=i}))
;var zo=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Bo=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
;q("w",["ww",2],"wo","week"),
q("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),
U("week",5),U("isoWeek",5),
Q("w",go),Q("ww",go,uo),Q("W",go),Q("WW",go,uo),ne(["w","ww","W","WW"],(function(e,t,o,n){
t[n.substr(0,1)]=M(e)
})),q("d",0,"do","day"),q("dd",0,0,(function(e){
return this.localeData().weekdaysMin(this,e)
})),q("ddd",0,0,(function(e){
return this.localeData().weekdaysShort(this,e)
})),q("dddd",0,0,(function(e){
return this.localeData().weekdays(this,e)
})),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),
H("day","d"),H("weekday","e"),H("isoWeekday","E"),
U("day",11),U("weekday",11),U("isoWeekday",11),
Q("d",go),Q("e",go),Q("E",go),Q("dd",(function(e,t){
return t.weekdaysMinRegex(e)
})),Q("ddd",(function(e,t){
return t.weekdaysShortRegex(e)
})),Q("dddd",(function(e,t){
return t.weekdaysRegex(e)
})),ne(["dd","ddd","dddd"],(function(e,t,o,n){
var i=o._locale.weekdaysParse(e,n,o._strict)
;null==i?x(o).invalidWeekday=e:t.d=i
})),ne(["d","e","E"],(function(e,t,o,n){t[n]=M(e)
}))
;var Lo=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
;q("H",["HH",2],0,"hour"),q("h",["hh",2],0,Me),
q("k",["kk",2],0,(function(){
return this.hours()||24
})),q("hmm",0,0,(function(){
return""+Me.apply(this)+G(this.minutes(),2)
})),q("hmmss",0,0,(function(){
return""+Me.apply(this)+G(this.minutes(),2)+G(this.seconds(),2)
})),q("Hmm",0,0,(function(){
return""+this.hours()+G(this.minutes(),2)
})),q("Hmmss",0,0,(function(){
return""+this.hours()+G(this.minutes(),2)+G(this.seconds(),2)
})),Ie("a",!0),Ie("A",!1),
H("hour","h"),U("hour",13),Q("a",Pe),Q("A",Pe),Q("H",go),
Q("h",go),Q("k",go),Q("HH",go,uo),
Q("hh",go,uo),Q("kk",go,uo),Q("hmm",yo),Q("hmmss",fo),
Q("Hmm",yo),Q("Hmmss",fo),
oe(["H","HH"],3),oe(["k","kk"],(function(e,t){
var o=M(e);t[3]=24===o?0:o
})),oe(["a","A"],(function(e,t,o){
o._isPm=o._locale.isPM(e),o._meridiem=e
})),oe(["h","hh"],(function(e,t,o){
t[3]=M(e),x(o).bigHour=!0
})),oe("hmm",(function(e,t,o){var n=e.length-2
;t[3]=M(e.substr(0,n)),t[4]=M(e.substr(n)),
x(o).bigHour=!0})),oe("hmmss",(function(e,t,o){
var n=e.length-4,i=e.length-2
;t[3]=M(e.substr(0,n)),t[4]=M(e.substr(n,2)),t[5]=M(e.substr(i)),
x(o).bigHour=!0})),oe("Hmm",(function(e,t){
var o=e.length-2
;t[3]=M(e.substr(0,o)),t[4]=M(e.substr(o))
})),oe("Hmmss",(function(e,t){
var o=e.length-4,n=e.length-2
;t[3]=M(e.substr(0,o)),t[4]=M(e.substr(o,2)),t[5]=M(e.substr(n))
}));var Jo,Ho=se("Hours",!0),Wo={calendar:{
sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",
nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",
lastWeek:"[Last] dddd [at] LT",sameElse:"L"},
longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",
L:"MM/DD/YYYY",LL:"MMMM D, YYYY",
LLL:"MMMM D, YYYY h:mm A",
LLLL:"dddd, MMMM D, YYYY h:mm A"},
invalidDate:"Invalid date",ordinal:"%d",
dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{
future:"in %s",past:"%s ago",s:"a few seconds",
ss:"%d seconds",m:"a minute",mm:"%d minutes",
h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",
M:"a month",MM:"%d months",y:"a year",
yy:"%d years"},
months:["January","February","March","April","May","June","July","August","September","October","November","December"],
monthsShort:Bo,week:{dow:0,doy:6},
weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],
weekdaysShort:Lo,meridiemParse:/[ap]\.?m?\.?/i
},jo={},Uo={},Vo=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Go=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,qo=/Z|[+-]\d\d(?::?\d\d)?/,Xo=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Zo=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],$o=/^\/?Date\((\-?\d+)/i,Ko=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Qo={
UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,
MDT:-360,MST:-420,PDT:-420,PST:-480}
;l.createFromInputFallback=F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){
e._d=new Date(e._i+(e._useUTC?" UTC":""))
})),l.ISO_8601=function(){},l.RFC_2822=function(){}
;var en=F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=st.apply(null,arguments)
;return this.isValid()&&e.isValid()?e<this?this:e:O()
})),tn=F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){
var e=st.apply(null,arguments)
;return this.isValid()&&e.isValid()?e>this?this:e:O()
})),on=["year","quarter","month","week","day","hour","minute","second","millisecond"]
;ht("Z",":"),
ht("ZZ",""),Q("Z",So),Q("ZZ",So),oe(["Z","ZZ"],(function(e,t,o){
o._useUTC=!0,o._tzm=mt(So,e)}))
;var nn=/([\+\-]|\d\d)/gi
;l.updateOffset=function(){}
;var an=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,dn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
;_t.fn=ct.prototype,_t.invalid=function(){
return _t(NaN)}
;var sn=xt(1,"add"),rn=xt(-1,"subtract")
;l.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",
l.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
;var ln=F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){
return void 0===e?this.localeData():this.locale(e)
}));q(0,["gg",2],0,(function(){
return this.weekYear()%100
})),q(0,["GG",2],0,(function(){
return this.isoWeekYear()%100
})),It("gggg","weekYear"),It("ggggg","weekYear"),It("GGGG","isoWeekYear"),
It("GGGGG","isoWeekYear"),
H("weekYear","gg"),H("isoWeekYear","GG"),U("weekYear",1),
U("isoWeekYear",1),Q("G",wo),
Q("g",wo),Q("GG",go,uo),Q("gg",go,uo),Q("GGGG",_o,ho),
Q("gggg",_o,ho),Q("GGGGG",vo,mo),
Q("ggggg",vo,mo),ne(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,o,n){
t[n.substr(0,2)]=M(e)
})),ne(["gg","GG"],(function(e,t,o,n){
t[n]=l.parseTwoDigitYear(e)
})),q("Q",0,"Qo","quarter"),H("quarter","Q"),U("quarter",7),
Q("Q",co),oe("Q",(function(e,t){t[1]=3*(M(e)-1)
})),q("D",["DD",2],"Do","date"),H("date","D"),
U("date",9),Q("D",go),Q("DD",go,uo),
Q("Do",(function(e,t){
return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient
})),oe(["D","DD"],2),oe("Do",(function(e,t){
t[2]=M(e.match(go)[0])}));var cn=se("Date",!0)
;q("DDD",["DDDD",3],"DDDo","dayOfYear"),
H("dayOfYear","DDD"),U("dayOfYear",4),Q("DDD",bo),
Q("DDDD",po),oe(["DDD","DDDD"],(function(e,t,o){
o._dayOfYear=M(e)
})),q("m",["mm",2],0,"minute"),H("minute","m"),U("minute",14),Q("m",go),
Q("mm",go,uo),oe(["m","mm"],4)
;var un=se("Minutes",!1)
;q("s",["ss",2],0,"second"),H("second","s"),U("second",15),
Q("s",go),Q("ss",go,uo),oe(["s","ss"],5)
;var hn,pn=se("Seconds",!1)
;for(q("S",0,0,(function(){
return~~(this.millisecond()/100)
})),q(0,["SS",2],0,(function(){
return~~(this.millisecond()/10)
})),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,(function(){
return 10*this.millisecond()
})),q(0,["SSSSS",5],0,(function(){
return 100*this.millisecond()
})),q(0,["SSSSSS",6],0,(function(){
return 1e3*this.millisecond()
})),q(0,["SSSSSSS",7],0,(function(){
return 1e4*this.millisecond()
})),q(0,["SSSSSSSS",8],0,(function(){
return 1e5*this.millisecond()
})),q(0,["SSSSSSSSS",9],0,(function(){
return 1e6*this.millisecond()
})),H("millisecond","ms"),U("millisecond",16),Q("S",bo,co),
Q("SS",bo,uo),Q("SSS",bo,po),
hn="SSSS";9>=hn.length;hn+="S")Q(hn,ko)
;for(hn="S";9>=hn.length;hn+="S")oe(hn,Nt)
;var mn=se("Milliseconds",!1)
;q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName")
;var gn=T.prototype
;gn.add=sn,gn.calendar=function(e,t){
var o=e||st(),n=gt(o,this).startOf("day"),i=l.calendarFormat(this,n)||"sameElse",a=t&&(Y(t[i])?t[i].call(this,o):t[i])
;return this.format(a||this.localeData().calendar(i,this,st(o)))
},gn.clone=function(){return new T(this)
},gn.diff=function(e,t,o){var n,i,a
;return this.isValid()?(n=gt(e,this)).isValid()?(i=6e4*(n.utcOffset()-this.utcOffset()),
a="year"===(t=W(t))?Ot(this,n)/12:"month"===t?Ot(this,n):"quarter"===t?Ot(this,n)/3:"second"===t?(this-n)/1e3:"minute"===t?(this-n)/6e4:"hour"===t?(this-n)/36e5:"day"===t?(this-n-i)/864e5:"week"===t?(this-n-i)/6048e5:this-n,
o?a:C(a)):NaN:NaN},gn.endOf=function(e){var t
;if(void 0===(e=W(e))||"millisecond"===e||!this.isValid())return this
;var o=this._isUTC?Mt:Ct
;return"year"===e?t=o(this.year()+1,0,1)-1:"quarter"===e?t=o(this.year(),this.month()-this.month()%3+3,1)-1:"month"===e?t=o(this.year(),this.month()+1,1)-1:"week"===e?t=o(this.year(),this.month(),this.date()-this.weekday()+7)-1:"isoWeek"===e?t=o(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1:"day"===e||"date"===e?t=o(this.year(),this.month(),this.date()+1)-1:"hour"===e?(t=this._d.valueOf(),
t+=36e5-Et(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1):"minute"===e?(t=this._d.valueOf(),
t+=6e4-Et(t,6e4)-1):"second"===e&&(t=this._d.valueOf(),
t+=1e3-Et(t,1e3)-1),this._d.setTime(t),
l.updateOffset(this,!0),this
},gn.format=function(e){
e||(e=this.isUtc()?l.defaultFormatUtc:l.defaultFormat)
;var t=$(this,e)
;return this.localeData().postformat(t)
},gn.from=function(e,t){
return this.isValid()&&(E(e)&&e.isValid()||st(e).isValid())?_t({
to:this,from:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},gn.fromNow=function(e){return this.from(st(),e)
},gn.to=function(e,t){
return this.isValid()&&(E(e)&&e.isValid()||st(e).isValid())?_t({
from:this,to:e
}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()
},gn.toNow=function(e){return this.to(st(),e)
},gn.get=function(e){
return Y(this[e=W(e)])?this[e]():this
},gn.invalidAt=function(){return x(this).overflow
},gn.isAfter=function(e,t){var o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()>o.valueOf():o.valueOf()<this.clone().startOf(t).valueOf())
},gn.isBefore=function(e,t){var o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()<o.valueOf():this.clone().endOf(t).valueOf()<o.valueOf())
},gn.isBetween=function(e,t,o,n){
var i=E(e)?e:st(e),a=E(t)?t:st(t)
;return!!(this.isValid()&&i.isValid()&&a.isValid())&&(("("===(n=n||"()")[0]?this.isAfter(i,o):!this.isBefore(i,o))&&(")"===n[1]?this.isBefore(a,o):!this.isAfter(a,o)))
},gn.isSame=function(e,t){var n,o=E(e)?e:st(e)
;return!(!this.isValid()||!o.isValid())&&("millisecond"===(t=W(t)||"millisecond")?this.valueOf()===o.valueOf():(n=o.valueOf(),
this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))
},gn.isSameOrAfter=function(e,t){
return this.isSame(e,t)||this.isAfter(e,t)
},gn.isSameOrBefore=function(e,t){
return this.isSame(e,t)||this.isBefore(e,t)
},gn.isValid=function(){return S(this)
},gn.lang=ln,gn.locale=Dt,gn.localeData=Tt,
gn.max=tn,gn.min=en,gn.parsingFlags=function(){
return v({},x(this))},gn.set=function(e,t){
if("object"==typeof e)for(var o=function(e){
var t=[];for(var o in e)t.push({unit:o,
priority:io[o]})
;return sort$2(t).call(t,(function(e,t){
return e.priority-t.priority})),t
}(e=j(e)),n=0;n<o.length;n++)this[o[n].unit](e[o[n].unit]);else if(Y(this[e=W(e)]))return this[e](t)
;return this},gn.startOf=function(e){var t
;if(void 0===(e=W(e))||"millisecond"===e||!this.isValid())return this
;var o=this._isUTC?Mt:Ct
;return"year"===e?t=o(this.year(),0,1):"quarter"===e?t=o(this.year(),this.month()-this.month()%3,1):"month"===e?t=o(this.year(),this.month(),1):"week"===e?t=o(this.year(),this.month(),this.date()-this.weekday()):"isoWeek"===e?t=o(this.year(),this.month(),this.date()-(this.isoWeekday()-1)):"day"===e||"date"===e?t=o(this.year(),this.month(),this.date()):"hour"===e?(t=this._d.valueOf(),
t-=Et(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)):"minute"===e?(t=this._d.valueOf(),
t-=Et(t,6e4)):"second"===e&&(t=this._d.valueOf(),
t-=Et(t,1e3)),this._d.setTime(t),
l.updateOffset(this,!0),this
},gn.subtract=rn,gn.toArray=function(){var e=this
;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]
},gn.toObject=function(){var e=this;return{
years:e.year(),months:e.month(),date:e.date(),
hours:e.hours(),minutes:e.minutes(),
seconds:e.seconds(),milliseconds:e.milliseconds()}
},gn.toDate=function(){
return new Date(this.valueOf())
},gn.toISOString=function(e){
if(!this.isValid())return null
;var t=!0!==e,o=t?this.clone().utc():this
;return 0>o.year()||9999<o.year()?$(o,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Y(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",$(o,"Z")):$(o,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")
},gn.inspect=function(){
if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
;var e="moment",t=""
;this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",
t="Z")
;var o="["+e+'("]',n=0<=this.year()&&9999>=this.year()?"YYYY":"YYYYYY",i=t+'[")]'
;return this.format(o+n+"-MM-DD[T]HH:mm:ss.SSS"+i)
},gn.toJSON=function(){
return this.isValid()?this.toISOString():null
},gn.toString=function(){
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
},gn.unix=function(){return s(this.valueOf()/1e3)
},gn.valueOf=function(){
return this._d.valueOf()-6e4*(this._offset||0)
},gn.creationData=function(){return{input:this._i,
format:this._f,locale:this._locale,
isUTC:this._isUTC,strict:this._strict}
},gn.year=Yo,gn.isLeapYear=function(){
return de(this.year())},gn.weekYear=function(e){
return Pt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
},gn.isoWeekYear=function(e){
return Pt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)
},gn.quarter=gn.quarters=function(e){
return null==e?r((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)
},gn.month=ye,gn.daysInMonth=function(){
return pe(this.year(),this.month())
},gn.week=gn.weeks=function(e){
var t=this.localeData().week(this)
;return null==e?t:this.add(7*(e-t),"d")
},gn.isoWeek=gn.isoWeeks=function(e){
var t=we(this,1,4).week
;return null==e?t:this.add(7*(e-t),"d")
},gn.weeksInYear=function(){
var e=this.localeData()._week
;return xe(this.year(),e.dow,e.doy)
},gn.isoWeeksInYear=function(){
return xe(this.year(),1,4)
},gn.date=cn,gn.day=gn.days=function(e){
if(!this.isValid())return null==e?NaN:this
;var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
;return null==e?t:(e=function(e,t){
return"string"==typeof e?isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:_parseInt$3(e,10):e
}(e,this.localeData()),this.add(e-t,"d"))
},gn.weekday=function(e){
if(!this.isValid())return null==e?NaN:this
;var t=(this.day()+7-this.localeData()._week.dow)%7
;return null==e?t:this.add(e-t,"d")
},gn.isoWeekday=function(e){
if(!this.isValid())return null==e?NaN:this
;if(null!=e){var t=function(e,t){
return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e
}(e,this.localeData())
;return this.day(this.day()%7?t:t-7)}
return this.day()||7},gn.dayOfYear=function(e){
var o=t((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
;return null==e?o:this.add(e-o,"d")
},gn.hour=gn.hours=Ho,gn.minute=gn.minutes=un,
gn.second=gn.seconds=pn,gn.millisecond=gn.milliseconds=mn,
gn.utcOffset=function(e,t,o){
var i,n=this._offset||0
;if(!this.isValid())return null==e?NaN:this
;if(null!=e){
if("string"!=typeof e)16>a(e)&&!o&&(e*=60);else if(null===(e=mt(So,e)))return this
;return!this._isUTC&&t&&(i=yt(this)),
this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),
n!==e&&(!t||this._changeInProgress?St(this,_t(e-n,"m"),1,!1):!this._changeInProgress&&(this._changeInProgress=!0,
l.updateOffset(this,!0),
this._changeInProgress=null)),this}
return this._isUTC?n:yt(this)},gn.utc=function(e){
return this.utcOffset(0,e)},gn.local=function(e){
return this._isUTC&&(this.utcOffset(0,e),
this._isUTC=!1,e&&this.subtract(yt(this),"m")),
this},gn.parseZone=function(){
if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){
var e=mt(xo,this._i)
;null==e?this.utcOffset(0,!0):this.utcOffset(e)}
return this},gn.hasAlignedHourOffset=function(e){
return!!this.isValid()&&(e=e?st(e).utcOffset():0,
0==(this.utcOffset()-e)%60)},gn.isDST=function(){
return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
},gn.isLocal=function(){
return!!this.isValid()&&!this._isUTC
},gn.isUtcOffset=function(){
return!!this.isValid()&&this._isUTC
},gn.isUtc=bt,gn.isUTC=bt,gn.zoneAbbr=function(){
return this._isUTC?"UTC":""
},gn.zoneName=function(){
return this._isUTC?"Coordinated Universal Time":""
},gn.dates=F("dates accessor is deprecated. Use date instead.",cn),
gn.months=F("months accessor is deprecated. Use month instead",ye),
gn.years=F("years accessor is deprecated. Use year instead",Yo),
gn.zone=F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",(function(e,t){
return null==e?-this.utcOffset():("string"!=typeof e&&(e=-e),
this.utcOffset(e,t),this)
})),gn.isDSTShifted=F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",(function(){
if(!m(this._isDSTShifted))return this._isDSTShifted
;var e={};if(D(e,this),(e=it(e))._a){
var t=e._isUTC?k(e._a):st(e._a)
;this._isDSTShifted=this.isValid()&&0<I(e._a,t.toArray())
}else this._isDSTShifted=!1
;return this._isDSTShifted}));var yn=B.prototype
;yn.calendar=function(e,t,o){
var n=this._calendar[e]||this._calendar.sameElse
;return Y(n)?n.call(t,o):n
},yn.longDateFormat=function(e){
var t=this._longDateFormat[e],o=this._longDateFormat[e.toUpperCase()]
;return t||!o?t:(this._longDateFormat[e]=o.replace(/MMMM|MM|DD|dddd/g,(function(e){
return slice$4(e).call(e,1)
})),this._longDateFormat[e])
},yn.invalidDate=function(){
return this._invalidDate},yn.ordinal=function(e){
return this._ordinal.replace("%d",e)
},yn.preparse=Yt,yn.postformat=Yt,yn.relativeTime=function(e,t,o,n){
var i=this._relativeTime[o]
;return Y(i)?i(e,t,o,n):i.replace(/%d/i,e)
},yn.pastFuture=function(e,t){
var o=this._relativeTime[0<e?"future":"past"]
;return Y(o)?o(t):o.replace(/%s/i,t)
},yn.set=function(e){var t,o
;for(o in e)Y(t=e[o])?this[o]=t:this["_"+o]=t
;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)
},yn.months=function(e,t){
return e?u(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||zo).test(t)?"format":"standalone"][e.month()]:u(this._months)?this._months:this._months.standalone
},yn.monthsShort=function(e,t){
return e?u(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[zo.test(t)?"format":"standalone"][e.month()]:u(this._monthsShort)?this._monthsShort:this._monthsShort.standalone
},yn.monthsParse=function(e,t,o){var n,a,d
;if(this._monthsParseExact)return he.call(this,e,t,o)
;for(this._monthsParse||(this._monthsParse=[],
this._longMonthsParse=[],this._shortMonthsParse=[]),
n=0;12>n;n++){
if(a=k([2e3,n]),o&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),
this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),
o||this._monthsParse[n]||(d="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),
this._monthsParse[n]=new RegExp(d.replace(".",""),"i")),
o&&"MMMM"===t&&this._longMonthsParse[n].test(e))return n
;if(o&&"MMM"===t&&this._shortMonthsParse[n].test(e))return n
;if(!o&&this._monthsParse[n].test(e))return n}
},yn.monthsRegex=function(e){
return this._monthsParseExact?(_(this,"_monthsRegex")||fe.call(this),
e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Do),
this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)
},yn.monthsShortRegex=function(e){
return this._monthsParseExact?(_(this,"_monthsRegex")||fe.call(this),
e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Do),
this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)
},yn.week=function(e){
return we(e,this._week.dow,this._week.doy).week
},yn.firstDayOfYear=function(){
return this._week.doy
},yn.firstDayOfWeek=function(){
return this._week.dow},yn.weekdays=function(e,t){
var o=u(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"]
;return!0===e?De(o,this._week.dow):e?o[e.day()]:o
},yn.weekdaysMin=function(e){
return!0===e?De(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin
},yn.weekdaysShort=function(e){
return!0===e?De(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort
},yn.weekdaysParse=function(e,t,o){var n,a,d
;if(this._weekdaysParseExact)return Te.call(this,e,t,o)
;for(this._weekdaysParse||(this._weekdaysParse=[],
this._minWeekdaysParse=[],this._shortWeekdaysParse=[],
this._fullWeekdaysParse=[]),n=0;7>n;n++){
if(a=k([2e3,1]).day(n),o&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),
this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),
this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),
this._weekdaysParse[n]||(d="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),
this._weekdaysParse[n]=new RegExp(d.replace(".",""),"i")),
o&&"dddd"===t&&this._fullWeekdaysParse[n].test(e))return n
;if(o&&"ddd"===t&&this._shortWeekdaysParse[n].test(e))return n
;if(o&&"dd"===t&&this._minWeekdaysParse[n].test(e))return n
;if(!o&&this._weekdaysParse[n].test(e))return n}
},yn.weekdaysRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=Do),
this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)
},yn.weekdaysShortRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Do),
this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
},yn.weekdaysMinRegex=function(e){
return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Ce.call(this),
e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Do),
this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
},yn.isPM=function(e){
return"p"===(e+"").toLowerCase().charAt(0)
},yn.meridiem=function(e,t,o){
return 11<e?o?"pm":"PM":o?"am":"AM"},Re("en",{
dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,
ordinal:function(e){var t=e%10
;return e+(1===M(e%100/10)?"th":1==t?"st":2==t?"nd":3==t?"rd":"th")
}
}),l.lang=F("moment.lang is deprecated. Use moment.locale instead.",Re),l.langData=F("moment.langData is deprecated. Use moment.localeData instead.",Be)
;var fn=a,bn=jt("ms"),_n=jt("s"),vn=jt("m"),kn=jt("h"),wn=jt("d"),xn=jt("w"),Sn=jt("M"),On=jt("Q"),Dn=jt("y"),Tn=Ut("milliseconds"),En=Ut("seconds"),Cn=Ut("minutes"),Mn=Ut("hours"),In=Ut("days"),Pn=Ut("months"),Fn=Ut("years"),Nn=t,Yn={
ss:44,s:45,m:45,h:22,d:26,M:11
},Rn=a,zn=ct.prototype
;return zn.isValid=function(){return this._isValid
},zn.abs=function(){var e=this._data
;return this._milliseconds=fn(this._milliseconds),
this._days=fn(this._days),this._months=fn(this._months),
e.milliseconds=fn(e.milliseconds),
e.seconds=fn(e.seconds),e.minutes=fn(e.minutes),
e.hours=fn(e.hours),e.months=fn(e.months),
e.years=fn(e.years),this},zn.add=function(e,t){
return Lt(this,e,t,1)},zn.subtract=function(e,t){
return Lt(this,e,t,-1)},zn.as=function(e){
if(!this.isValid())return NaN
;var n,i,o=this._milliseconds
;if("month"===(e=W(e))||"quarter"===e||"year"===e)switch(n=this._days+o/864e5,
i=this._months+Ht(n),e){case"month":return i
;case"quarter":return i/3;case"year":return i/12
}else switch(n=this._days+t(Wt(this._months)),e){
case"week":return n/7+o/6048e5;case"day":
return n+o/864e5;case"hour":return 24*n+o/36e5
;case"minute":return 1440*n+o/6e4;case"second":
return 86400*n+o/1e3;case"millisecond":
return s(864e5*n)+o;default:
throw new Error("Unknown unit "+e)}
},zn.asMilliseconds=bn,zn.asSeconds=_n,zn.asMinutes=vn,
zn.asHours=kn,zn.asDays=wn,
zn.asWeeks=xn,zn.asMonths=Sn,zn.asQuarters=On,zn.asYears=Dn,
zn.valueOf=function(){
return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*M(this._months/12):NaN
},zn._bubble=function(){
var i,a,d,s,r,e=this._milliseconds,t=this._days,o=this._months,n=this._data
;return 0<=e&&0<=t&&0<=o||0>=e&&0>=t&&0>=o||(e+=864e5*At(Wt(o)+t),
t=0,o=0),n.milliseconds=e%1e3,
i=C(e/1e3),n.seconds=i%60,a=C(i/60),n.minutes=a%60,
d=C(a/60),n.hours=d%24,t+=C(d/24),
o+=r=C(Ht(t)),t-=At(Wt(r)),s=C(o/12),o%=12,n.days=t,
n.months=o,n.years=s,this},zn.clone=function(){
return _t(this)},zn.get=function(e){
return e=W(e),this.isValid()?this[e+"s"]():NaN
},zn.milliseconds=Tn,zn.seconds=En,
zn.minutes=Cn,zn.hours=Mn,zn.days=In,zn.weeks=function(){
return C(this.days()/7)
},zn.months=Pn,zn.years=Fn,zn.humanize=function(e){
if(!this.isValid())return this.localeData().invalidDate()
;var t=this.localeData(),o=function(e,t,o){
var n=_t(e).abs(),i=Nn(n.as("s")),d=Nn(n.as("m")),s=Nn(n.as("h")),r=Nn(n.as("d")),l=Nn(n.as("M")),c=Nn(n.as("y")),u=i<=Yn.ss&&["s",i]||i<Yn.s&&["ss",i]||1>=d&&["m"]||d<Yn.m&&["mm",d]||1>=s&&["h"]||s<Yn.h&&["hh",s]||1>=r&&["d"]||r<Yn.d&&["dd",r]||1>=l&&["M"]||l<Yn.M&&["MM",l]||1>=c&&["y"]||["yy",c]
;return u[2]=t,u[3]=0<+e,u[4]=o,Vt.apply(null,u)
}(this,!e,t)
;return e&&(o=t.pastFuture(+this,o)),t.postformat(o)
},zn.toISOString=Zt,zn.toString=Zt,
zn.toJSON=Zt,zn.locale=Dt,zn.localeData=Tt,zn.toIsoString=F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Zt),
zn.lang=ln,
q("X",0,0,"unix"),q("x",0,0,"valueOf"),Q("x",wo),Q("X",/[+-]?\d+(\.\d{1,3})?/),
oe("X",(function(e,t,o){
o._d=new Date(1e3*_parseFloat$3(e,10))
})),oe("x",(function(e,t,o){o._d=new Date(M(e))
})),l.version="2.24.0",function(e){$t=e
}(st),l.fn=gn,l.min=function(){
var e=slice$4([]).call(arguments,0)
;return rt("isBefore",e)},l.max=function(){
var e=slice$4([]).call(arguments,0)
;return rt("isAfter",e)},l.now=function(){
return now$2?now$2():+new Date
},l.utc=k,l.unix=function(e){return st(1e3*e)
},l.months=function(e,t){return zt(e,t,"months")
},l.isDate=y,l.locale=Re,l.invalid=O,
l.duration=_t,l.isMoment=E,l.weekdays=function(e,t,o){
return Bt(e,t,o,"weekdays")
},l.parseZone=function(){
return st.apply(null,arguments).parseZone()
},l.localeData=Be,l.isDuration=ut,l.monthsShort=function(e,t){
return zt(e,t,"monthsShort")
},l.weekdaysMin=function(e,t,o){
return Bt(e,t,o,"weekdaysMin")
},l.defineLocale=ze,l.updateLocale=function(e,t){
if(null!=t){var n,i,o=Wo
;null!=(i=Ye(e))&&(o=i._config),(n=new B(t=z(o,t))).parentLocale=jo[e],
jo[e]=n,Re(e)
}else null!=jo[e]&&(null==jo[e].parentLocale?null!=jo[e]&&delete jo[e]:jo[e]=jo[e].parentLocale)
;return jo[e]},l.locales=function(){return to(jo)
},l.weekdaysShort=function(e,t,o){
return Bt(e,t,o,"weekdaysShort")
},l.normalizeUnits=W,l.relativeTimeRounding=function(e){
return void 0===e?Nn:"function"==typeof e&&(Nn=e,
!0)},l.relativeTimeThreshold=function(e,t){
return void 0!==Yn[e]&&(void 0===t?Yn[e]:(Yn[e]=t,
"s"===e&&(Yn.ss=t-1),!0))
},l.calendarFormat=function(e,t){
var o=e.diff(t,"days",!0)
;return-6>o?"sameElse":-1>o?"lastWeek":0>o?"lastDay":1>o?"sameDay":2>o?"nextDay":7>o?"nextWeek":"sameElse"
},l.prototype=gn,l.HTML5_FMT={
DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",
DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",
DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",
DATE:"YYYY-MM-DD",TIME:"HH:mm",
TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",
WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},l}))
})),moment$3="undefined"!=typeof window&&window.moment||moment$2,moment$4=freeze$2({
default:moment$3,__moduleExports:moment$3
}),network={Images:Images,dotparser:dotparser$1,
gephiParser:gephiParser,allOptions:allOptions$2,
convertDot:DOTToGraph_1,convertGephi:parseGephi}
;freeze$2({util:esm,data:esm$1,network:network,
DOMutil:DOMutil$1,moment:moment$4,Hammer:hammer$1,
keycharm:keycharm$1,DataSet:DataSet,
DataView:DataView,Queue:Queue,Network:Network})
;return exports.DOMutil=DOMutil$1,
exports.DataSet=DataSet,exports.DataView=DataView,
exports.Hammer=hammer$1,exports.Network=Network,
exports.Queue=Queue,exports.data=esm$1,
exports.keycharm=keycharm$1,exports.moment=moment$4,
exports.network=network,exports.util=esm,exports
}({});