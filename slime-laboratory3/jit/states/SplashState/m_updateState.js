(function anonymous(context
) {
/*
	Index: 1038
	Path:  states/SplashState::m_updateState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateState(local1 /* Game */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
                        // 7 1:states:SplashState::justOnce
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgjustOnce;
                        if (!stack0) { p = 55; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
                        local2 = stack1;
                        // 7 0::music_counter
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgmusic_counter;
                        stack1 = stack0;
                        stack1 = (stack1 | 0) + 1;
                        local3 = stack1;
//                        stack1 = local2;// JIT: redundant assigment, value unused
//                        stack2 = local3;// JIT: redundant assigment, value unused
                        // 7 0::music_counter
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.music_counter = local3;
                        } else {
                            context.setproperty($names[0], local3, local2);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        stack1 = 1;
                        if (1 != stack0) { p = 55; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 31;// JIT: redundant assigment, value unused
                        // 7 0::music_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgmusic_counter = 31;
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = "menu";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlayMusic("menu");
                        } else {
                            // 7 0::PlayMusic
                            {
                                let t = stack0;
                                const m = t.$BgPlayMusic || (t = sec.box(stack0), t.$BgPlayMusic);
                                if( typeof m === "function" ) { 
                                    m.call(t, "menu");
                                } else { 
                                   stack0.axCallProperty($names[2], ["menu"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::justOnce
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgjustOnce = false;
                    case 55:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashTitle
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::GameTitlePanel  */ 
                        stack0 = this.$BgsplashTitle;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashBackground
                        //Possible type:7 0:interfaces.panels::GameTitlePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:interfaces.panels::MenuBackground  */ 
                        stack0 = this.$BgsplashBackground;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.update();
                        } else {
                            // 7 0::update
                            {
                                let t = stack0;
                                const m = t.$Bgupdate || (t = sec.box(stack0), t.$Bgupdate);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:interfaces.panels::MenuBackground
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
                        // 7 0::currentState
                        //Possible type:7 0:game_utils::StateMachineNew
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentState'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentState;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = "IS_NORMAL_STATE";
                        if ("IS_NORMAL_STATE" != stack0) { p = 87; continue; };
                        { p = 130; continue; };
                    case 87:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
                        // 7 0::currentState
                        //Possible type:7 0:game_utils::StateMachineNew
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentState'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentState;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = "IS_SETTINGS_STATE";
                        if ("IS_SETTINGS_STATE" != stack0) { p = 116; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "QUIT_ACTION";// JIT: redundant assigment, value unused
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
                                   stack0.axCallProperty($names[5], ["QUIT_ACTION"], false);
                                }
                            }
                        }
                        { p = 130; continue; };
                    case 116:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
                        // 7 0::currentState
                        //Possible type:7 0:game_utils::StateMachineNew
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentState'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentState;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = "IS_PLAY_STATE";
                        if ("IS_PLAY_STATE" != stack0) { p = 130; continue; };
                    case 130:
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.updateSplashState();
                        } else {
                            // 7 0::updateSplashState
                            {
                                let t = local1;
                                const m = t.$BgupdateSplashState || (t = sec.box(local1), t.$BgupdateSplashState);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m_updateState.js
})