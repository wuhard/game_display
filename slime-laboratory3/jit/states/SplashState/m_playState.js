(function anonymous(context
) {
/*
	Index: 1045
	Path:  states/SplashState::m_playState
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_playState() {
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
        // 7 0::choice
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgchoice = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::stateMachine
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
        stack0 = this.$BgstateMachine;
//        stack1 = "QUIT_ACTION";// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.performAction("QUIT_ACTION");
        } else {
            // 7 0::performAction
            {
                let t = stack0;
                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                if( typeof m === "function" ) { 
                    m.call(t, "QUIT_ACTION");
                } else { 
                   stack0.axCallProperty($names[0], ["QUIT_ACTION"], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/states/SplashState/m_playState.js
})