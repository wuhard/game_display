(function anonymous(context
) {
/*
	Index: 2793
	Path:  TapToPlay::constructor
	Type:  Public
	Kind:  null
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
        // 7 0::addFrameScript
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 73;// JIT: redundant assigment, value unused
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2::frame74
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[0]);
//        stack3 = 79;// JIT: redundant assigment, value unused
//        stack4 = this;// JIT: redundant assigment, value unused
        // 7 2::frame80
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack4 = this.axGetProperty($names[1]);
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgaddFrameScript(73, stack2, 79, stack4);
        return;
    }
//# sourceURL=http://jit/TapToPlay/constructor.js
})