(function anonymous(context
) {
/*
	Index: 1041
	Path:  states/SplashState::m_normalState
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_normalState() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 1:states:SplashState::normal_counter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgnormal_counter = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgsetFinalPositions();
        return;
    }
//# sourceURL=http://jit/states/SplashState/m_normalState.js
})