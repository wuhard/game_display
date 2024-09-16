(function anonymous(context
) {
/*
	Index: 1017
	Path:  states/GameEntryState::m_enterState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_enterState(local1 /* Game */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
        stack0 = local1;
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
            local1.enterGameEntryState();
        } else {
            // 7 0::enterGameEntryState
            {
                let t = local1;
                const m = t.$BgenterGameEntryState || (t = sec.box(local1), t.$BgenterGameEntryState);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   local1.axCallProperty($names[0], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/states/GameEntryState/m_enterState.js
})