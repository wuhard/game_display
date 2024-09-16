(function anonymous(context
) {
/*
	Index: 16
	Path:  Game::m_updateLevelSelectionState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateLevelSelectionState() {
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
                        // 7 3::levelSelectionState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelSelectionState  */ 
                        stack0 = this.$BglevelSelectionState;
                        // 7 0::choiceMade
                        //Possible type:7 0:states::LevelSelectionState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['choiceMade'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgchoiceMade;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        if (!stack0) { p = 55; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelSelectionState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelSelectionState  */ 
                        stack0 = this.$BglevelSelectionState;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::choiceMade
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.choiceMade = false;
                        } else {
                            context.setproperty($names[0], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelSelectionState
                        //Possible type:7 0:states::LevelSelectionState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelSelectionState  */ 
                        stack0 = this.$BglevelSelectionState;
                        // 7 0::getBackFlag
                        //Possible type:7 0:states::LevelSelectionState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['getBackFlag'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggetBackFlag;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (stack0) { p = 36; continue; };
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
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
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 3::fadeState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgfadeState = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states.fading::BlueFadeState
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:BlueFadeState/Object
                        stack1 = context.constructFast(stack1, [], $names[4]);
                        // 7 3::fadeState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::IState  */ 
                        this.$BgfadeState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgsetFadeOut();
                    case 55:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        //Possible type:7 0::SoundSystem
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
                        // 7 3::levelSelectionState
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelSelectionState  */ 
                        stack0 = this.$BglevelSelectionState;
                        // 7 0::getBackFlag
                        //Possible type:7 0:states::LevelSelectionState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['getBackFlag'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggetBackFlag;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 101; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::SplashState
                        stack1 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:SplashState/Object
                        stack1 = context.constructFast(stack1, [], $names[5]);
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
                        //JIT: Emit inline return
                        return;
                    case 101:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::playMenuMusicFlag
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgplayMenuMusicFlag = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::LevelState
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        //JIT: Support fast construct:LevelState/Object
                        stack1 = context.constructFast(stack1, [], $names[6]);
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
                    case 121:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_updateLevelSelectionState.js
})