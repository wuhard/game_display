(function anonymous(context
) {
/*
	Index: 19
	Path:  Game::m_updateLevelState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateLevelState() {
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
                        // 7 3::levelState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelState  */ 
                        stack0 = this.$BglevelState;
                        // 7 0::levelEnd
                        //Possible type:7 0:states::LevelState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelEnd'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelEnd;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = true;
                        stack0 = stack0 == true;
                        stack1 = stack0;
                        if (!stack1) { p = 21; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2::justOnce
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgjustOnce;
                        stack0 = !stack0;
                    case 21:
                        if (!stack0) { p = 88; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelState
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelState  */ 
                        stack0 = this.$BglevelState;
                        // 7 0::choice
                        //Possible type:7 0:states::LevelState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['choice'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgchoice;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 1;
                        stack0 = stack0 == 1;
                        stack1 = stack0;
                        if (stack1) { p = 49; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelState  */ 
                        stack0 = this.$BglevelState;
                        // 7 0::choice
                        //Possible type:7 0:states::LevelState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['choice'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgchoice;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 3;
                        stack0 = stack0 == 3;
                    case 49:
                        if (!stack0) { p = 64; continue; };
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
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::playMenuMusicFlag
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgplayMenuMusicFlag = true;
                    case 64:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2::justOnce
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgjustOnce = true;
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
                    case 88:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::FADE_OUT_FLAG
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFADE_OUT_FLAG;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 2::justOnce
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgjustOnce = false;
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
                        { p = 252; continue; };
                    case 113:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::playMenuMusicFlag
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgplayMenuMusicFlag = true;
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
                    case 138:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.ResetGameplay();
                        } else {
                            // 7 0::ResetGameplay
                            {
                                let t = stack0;
                                const m = t.$BgResetGameplay || (t = sec.box(stack0), t.$BgResetGameplay);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[7], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2::notNull
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgnotNull = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::LevelState
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        //JIT: Support fast construct:LevelState/Object
                        stack1 = context.constructFast(stack1, [], $names[8]);
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
                    case 171:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::LevelSelectionState
                        stack1 = scope0.findScopeProperty($names[9], true, false);
                        //JIT: Support fast construct:LevelSelectionState/Object
                        stack1 = context.constructFast(stack1, [], $names[9]);
                        // 7 3::levelSelectionState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::LevelSelectionState  */ 
                        this.$BglevelSelectionState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelSelectionState
                        //Possible type:7 0:states::LevelSelectionState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelSelectionState  */ 
                        stack1 = this.$BglevelSelectionState;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgchangeState(stack1);
                        //JIT: Emit inline return
                        return;
                    case 192:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[6]);
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::PlayerLifes
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerLifes = 1;
                        } else {
                            context.setproperty($names[10], 1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 2::notNull
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgnotNull = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::LevelState
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        //JIT: Support fast construct:LevelState/Object
                        stack1 = context.constructFast(stack1, [], $names[8]);
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
                    case 226:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:states::EndingState
                        stack1 = scope0.findScopeProperty($names[11], true, false);
                        //JIT: Support fast construct:EndingState/Object
                        stack1 = context.constructFast(stack1, [], $names[11]);
                        // 7 3::endingState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::EndingState  */ 
                        this.$BgendingState = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 3::endingState
                        //Possible type:7 0:states::EndingState
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::EndingState  */ 
                        stack1 = this.$BgendingState;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgchangeState(stack1);
                        //JIT: Emit inline return
                        return;
                    case 247:
                        //JIT: Emit inline return
                        return;
                    case 252:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::levelState
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:states::LevelState  */ 
                        stack0 = this.$BglevelState;
                        // 7 0::choice
                        //Possible type:7 0:states::LevelState
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['choice'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgchoice;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        local1 = stack0;
                        stack0 = 1;
                        stack1 = local1;
                        if (local1 !== 1) { p = 272; continue; };
                        stack0 = 0;
                        { p = 336; continue; };
                    case 272:
                        stack0 = 2;
                        stack1 = local1;
                        if (local1 !== 2) { p = 285; continue; };
                        stack0 = 1;
                        { p = 336; continue; };
                    case 285:
                        stack0 = 3;
                        stack1 = local1;
                        if (local1 !== 3) { p = 298; continue; };
                        stack0 = 2;
                        { p = 336; continue; };
                    case 298:
                        stack0 = 4;
                        stack1 = local1;
                        if (local1 !== 4) { p = 311; continue; };
                        stack0 = 3;
                        { p = 336; continue; };
                    case 311:
                        stack0 = 5;
                        stack1 = local1;
                        if (local1 !== 5) { p = 324; continue; };
                        stack0 = 4;
                        { p = 336; continue; };
                    case 324:
                        { p = 334; continue; };
                        // unreachable
                        // unreachable
                    case 334:
                        stack0 = 5;
                    case 336:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 6) { p = [113, 138, 171, 192, 226, 247][stack0]; continue; } else { p = 247; continue; };
                    case 361:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_updateLevelState.js
})