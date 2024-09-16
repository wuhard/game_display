(function anonymous(context
) {
/*
	Index: 13
	Path:  Game::m_updateSplashState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateSplashState() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
                        // 7 3::splashState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::SplashState  */ 
                        stack0 = this.$BgsplashState;
                        // 7 0::GET_OUT_FLAG
                        //Possible type:7 0:states::SplashState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['GET_OUT_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgGET_OUT_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!stack0) { p = 53; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::splashState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::SplashState  */ 
                        stack0 = this.$BgsplashState;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::GET_OUT_FLAG
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.GET_OUT_FLAG = false;
                        } else {
                            context.setproperty($names[0], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states.fading::BlueFadeState
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:BlueFadeState/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        // 7 3::fadeState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgfadeState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::splashState
                        //Possible type:7 0:states::SplashState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::SplashState  */ 
                        stack0 = this.$BgsplashState;
                        // 7 0::choice
                        //Possible type:7 0:states::SplashState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['choice'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgchoice;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 48; continue; };
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.StopMusic();
                        } else {
                            // 7 0::StopMusic
                            {
                                let t = stack0;
                                const m = t.$BgStopMusic || (t = sec.box(stack0), t.$BgStopMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                    case 48:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgsetFadeOut();
                    case 53:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFADE_OUT_FLAG;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgFADE_OUT_FLAG = false;
                        { p = 115; continue; };
                    case 68:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::LevelState
                        stack1 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:LevelState/Object
                        stack1 = context.constructFast(stack1, [], $names[5]);
                        // 7 3::levelState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::LevelState  */ 
                        this.$BglevelState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelState
                        //Possible type:7 0:states::LevelState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelState  */ 
                        stack1 = this.$BglevelState;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgchangeState(stack1);
                        //JIT: Emit inline return
                        return;
                    case 89:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::SettingsState
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        //JIT: Support fast construct:SettingsState/Object
                        stack1 = context.constructFast(stack1, [], $names[6]);
                        // 7 3::settingsState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::SettingsState  */ 
                        this.$BgsettingsState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::settingsState
                        //Possible type:7 0:states::SettingsState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::SettingsState  */ 
                        stack1 = this.$BgsettingsState;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgchangeState(stack1);
                        //JIT: Emit inline return
                        return;
                    case 110:
                        //JIT: Emit inline return
                        return;
                    case 115:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::splashState
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::SplashState  */ 
                        stack0 = this.$BgsplashState;
                        // 7 0::choice
                        //Possible type:7 0:states::SplashState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['choice'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgchoice;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        local1 = stack0;
                        stack0 = 0;
                        stack1 = local1;
                        if (local1 !== 0) { p = 135; continue; };
                        stack0 = 0;
                        { p = 160; continue; };
                    case 135:
                        stack0 = 2;
                        stack1 = local1;
                        if (local1 !== 2) { p = 148; continue; };
                        stack0 = 1;
                        { p = 160; continue; };
                    case 148:
                        { p = 158; continue; };
                        // unreachable
                        // unreachable
                    case 158:
                        stack0 = 2;
                    case 160:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 3) { p = [68, 89, 110][stack0]; continue; } else { p = 110; continue; };
                    case 176:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_updateSplashState.js
})