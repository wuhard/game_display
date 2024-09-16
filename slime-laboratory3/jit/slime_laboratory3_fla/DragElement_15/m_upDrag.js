(function anonymous(context
) {
/*
	Index: 2978
	Path:  slime_laboratory3_fla/DragElement_15::m_upDrag
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_upDrag(local1 /* MouseEvent */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::drag
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$Bgdrag;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.stopDrag();
        } else {
            // 7 0::stopDrag
            {
                let t = stack0;
                const m = t.$BgstopDrag || (t = sec.box(stack0), t.$BgstopDrag);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[0], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/slime_laboratory3_fla/DragElement_15/m_upDrag.js
})