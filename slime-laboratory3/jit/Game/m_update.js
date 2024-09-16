(function anonymous(context
) {
/*
	Index: 3
	Path:  Game::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
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
                        // 7 0::ready
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgready;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::currentState
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
                        stack0 = this.$BgcurrentState;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateState(this);
                        } else {
                            // 7 0:states:IState::updateState
                            {
                                let t = stack0;
                                const m = t.$BgupdateState || (t = sec.box(stack0), t.$BgupdateState);
                                if( typeof m === "function" ) { 
                                    m.call(t, this);
                                } else { 
                                   stack0.axCallProperty($names[0], [this], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::currentFadeState
                        //Possible type:7 0:states::IState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
                        stack0 = this.$BgcurrentFadeState;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::currentFadeState
                        //Possible type:7 0:states::IState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::IState  */ 
                        stack0 = this.$BgcurrentFadeState;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateState(this);
                        } else {
                            // 7 0:states:IState::updateState
                            {
                                let t = stack0;
                                const m = t.$BgupdateState || (t = sec.box(stack0), t.$BgupdateState);
                                if( typeof m === "function" ) { 
                                    m.call(t, this);
                                } else { 
                                   stack0.axCallProperty($names[0], [this], false);
                                }
                            }
                        }
                    case 32:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_update.js
})