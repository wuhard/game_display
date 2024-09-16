(function anonymous(context
) {
/*
	Index: 2426
	Path:  Main::constructor
	Type:  Public
	Kind:  null
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$Bginit();
        return;
    }
//# sourceURL=http://jit/Main/constructor.js
})