(function anonymous(context
) {
/*
	Index: 5
	Path:  Game::m_setFadeOut
	Type:  Private
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_setFadeOut() {
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
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::fadingOut
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgfadingOut = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::fadeState
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
        stack1 = this.$BgfadeState;
        // 7 3::currentFadeState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
        this.$BgcurrentFadeState = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::currentFadeState
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
        stack0 = this.$BgcurrentFadeState;
//        stack1 = this;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.enterState(this);
        } else {
            // 7 0:states:IState::enterState
            {
                let t = stack0;
                const m = t.$BgenterState || (t = sec.box(stack0), t.$BgenterState);
                if( typeof m === "function" ) { 
                    m.call(t, this);
                } else { 
                   stack0.axCallProperty($names[0], [this], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Game/m_setFadeOut.js
})