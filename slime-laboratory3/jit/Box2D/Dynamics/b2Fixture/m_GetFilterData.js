(function anonymous(context
) {
/*
	Index: 213
	Path:  Box2D/Dynamics/b2Fixture::m_GetFilterData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Dynamics::b2FilterData
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetFilterData() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_filter
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        stack0 = this.$Bgm_filter;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.Copy();
        } else {
            // 7 0::Copy
            {
                let t = stack0;
                const m = t.$BgCopy || (t = sec.box(stack0), t.$BgCopy);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgCopy ();
                } else { 
                    stack0 = stack0.axCallProperty($names[0], [], false);
                }
            }
        }
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_GetFilterData.js
})