(function anonymous(context
) {
/*
	Index: 178
	Path:  levels/Level::m_heroResettedSize
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_heroResettedSize() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::collisionsManager
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels.collisions::CollisionsManager  */ 
        stack0 = this.$BgcollisionsManager;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.createSlime();
        } else {
            // 7 0::createSlime
            {
                let t = stack0;
                const m = t.$BgcreateSlime || (t = sec.box(stack0), t.$BgcreateSlime);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   stack0.axCallProperty($names[0], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/levels/Level/m_heroResettedSize.js
})