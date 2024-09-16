(function anonymous(context
) {
/*
	Index: 10
	Path:  Game::m_updateGameEntryState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateGameEntryState() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local1 = stack1;
                        // 7 3::counter
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgcounter;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) + 1;
                        local2 = stack1;
//                        stack1 = local1;// JIT: redundant assigment, value unused
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        // 7 3::counter
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.counter = local2;
                        } else {
                            context.setproperty($names[0], local2, local1);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 5;
                        if (5 != stack0) { p = 39; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states.fading::BlackFadeState
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:BlackFadeState/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        // 7 3::fadeState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgfadeState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgsetFadeOut();
                    case 39:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFADE_OUT_FLAG;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 3::counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgcounter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgFADE_OUT_FLAG = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::SplashState
                        stack1 = scope0.findScopeProperty($names[2], true, false);
                        //JIT: Support fast construct:SplashState/Object
                        stack1 = context.constructFast(stack1, [], $names[2]);
                        // 7 3::splashState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::SplashState  */ 
                        this.$BgsplashState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::splashState
                        //Possible type:7 0:states::SplashState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::SplashState  */ 
                        stack1 = this.$BgsplashState;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgchangeState(stack1);
                    case 71:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_updateGameEntryState.js
})