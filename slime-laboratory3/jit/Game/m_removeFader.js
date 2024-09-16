(function anonymous(context
) {
/*
	Index: 7
	Path:  Game::m_removeFader
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_removeFader() {
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
        // 7 3::currentFadeState
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
        stack0 = this.$BgcurrentFadeState;
//        stack1 = this;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.exitState(this);
        } else {
            // 7 0:states:IState::exitState
            {
                let t = stack0;
                const m = t.$BgexitState || (t = sec.box(stack0), t.$BgexitState);
                if( typeof m === "function" ) { 
                    m.call(t, this);
                } else { 
                   stack0.axCallProperty($names[0], [this], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::currentFadeState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
        this.$BgcurrentFadeState = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::FADE_IN_FLAG
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgFADE_IN_FLAG = true;
        return;
    }
//# sourceURL=http://jit/Game/m_removeFader.js
})