(function anonymous(context
) {
/*
	Index: 4
	Path:  Game::m_changeState
	Type:  Private
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_changeState(local1 /* IState */) {
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
                        // 7 3::currentState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
                        stack0 = this.$BgcurrentState;
                        if (!stack0) { p = 21; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::currentState
                        //Possible type:7 0:states::IState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
                        stack0 = this.$BgcurrentState;
//                        stack1 = this;// JIT: redundant assigment, value unused
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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 3::currentState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgcurrentState = null;
                    case 21:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:states::IState// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 3::currentState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgcurrentState = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::currentState
                        //Possible type:7 0:states::IState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
                        stack0 = this.$BgcurrentState;
//                        stack1 = this;// JIT: redundant assigment, value unused
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
                                   stack0.axCallProperty($names[1], [this], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_changeState.js
})