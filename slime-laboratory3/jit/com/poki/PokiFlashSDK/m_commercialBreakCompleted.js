(function anonymous(context
) {
/*
	Index: 3125
	Path:  com/poki/PokiFlashSDK::m_commercialBreakCompleted
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_commercialBreakCompleted() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "commercialBreak Completed!";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleLog("commercialBreak Completed!");
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::callBackCommercialBreak
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Function  */ 
                        stack0 = this.$BgcallBackCommercialBreak;
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null === stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Slot  */ 
                        /*fast*/this.axCallProperty($names[0], [], false);
                    case 24:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_commercialBreakCompleted.js
})