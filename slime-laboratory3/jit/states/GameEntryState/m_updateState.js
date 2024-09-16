(function anonymous(context
) {
/*
	Index: 1018
	Path:  states/GameEntryState::m_updateState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateState(local1 /* Game */) {
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
            local1.updateGameEntryState();
        } else {
            // 7 0::updateGameEntryState
            {
                let t = local1;
                const m = t.$BgupdateGameEntryState || (t = sec.box(local1), t.$BgupdateGameEntryState);
                if( typeof m === "function" ) { 
                    m.call(t);
                } else { 
                   local1.axCallProperty($names[0], [], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/states/GameEntryState/m_updateState.js
})