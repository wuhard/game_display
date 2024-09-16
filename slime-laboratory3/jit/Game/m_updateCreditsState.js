(function anonymous(context
) {
/*
	Index: 22
	Path:  Game::m_updateCreditsState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateCreditsState() {
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
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::creditsState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::CreditsState  */ 
                        stack0 = this.$BgcreditsState;
                        // 7 0::readyToGetOut
                        //Possible type:7 0:states::CreditsState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['readyToGetOut'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgreadyToGetOut;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!stack0) { p = 38; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::creditsState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::CreditsState  */ 
                        stack0 = this.$BgcreditsState;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::readyToGetOut
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.readyToGetOut = false;
                        } else {
                            context.setproperty($names[0], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 3::fadeState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgfadeState = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states.fading::BlueFadeState
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:BlueFadeState/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        // 7 3::fadeState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgfadeState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgsetFadeOut();
                    case 38:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        //Possible type:7 0:states::CreditsState
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
                    case 70:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_updateCreditsState.js
})