(function anonymous(context
) {
/*
	Index: 1031
	Path:  states/SplashState::m_enterState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(8)['$BgMath']; // :Math
             const __trace_def = context.getTopLevel(45); // :trace

    return function compiled_m_enterState(local1 /* Game */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
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
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::GET_OUT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgGET_OUT_FLAG = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::Sprite
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        stack1 = context.constructprop($names[0], stack1, []);
                        // 7 1:states:SplashState::container
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::Sprite  */ 
                        this.$Bgcontainer = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack0 = this.$Bgcontainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack1 = this.$Bgcontainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GFX_SCALE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGFX_SCALE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack3 = stack2;
                        local2 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[3], stack2, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local2;
                        } else {
                            context.setproperty($names[4], local2, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::container
                        //Possible type:7 0:flash.display::Sprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::Sprite  */ 
                        stack1 = this.$Bgcontainer;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[6], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::LOGO_PLAYED
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgLOGO_PLAYED = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::PROGRESSION
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgPROGRESSION = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[7]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack3 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack3 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$Bgrandom ();
                                } else { 
                                    stack3 = __Math.axCallProperty($names[9], [], false);
                                }
                            }
                        }
//                        stack4 = 2;// JIT: redundant assigment, value unused
                        stack3 *= 2;
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        stack1 *= 30;
//                        stack2 = 15;// JIT: redundant assigment, value unused
                        stack1 += 15;
                        // 7 1:states:SplashState::RAND_COUNTER_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgRAND_COUNTER_1 = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::RAND_COUNTER_1
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack1 = this.$BgRAND_COUNTER_1;
//                        stack2 = 20;// JIT: redundant assigment, value unused
                        stack1 += 20;
                        // 7 1:states:SplashState::RAND_COUNTER_2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgRAND_COUNTER_2 = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::sin_counter_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgsin_counter_1 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BginitPanels();
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
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
                                   stack0.axCallProperty($names[10], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 1:states:SplashState::normal_delay
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.normal_delay = 0;
                        } else {
                            context.setproperty($names[11], 0, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:states:SplashState::normal_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgnormal_counter = (local2|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::music_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgmusic_counter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::justOnce
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgjustOnce = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 1:states:SplashState::counter_2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.counter_2 = 0;
                        } else {
                            context.setproperty($names[12], 0, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:states:SplashState::counter_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgcounter_1 = (local2|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 1:states:SplashState::t_tick2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.t_tick2 = 0;
                        } else {
                            context.setproperty($names[13], 0, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:states:SplashState::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = (+local2);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        local2 = 0.5;
                        // 7 1:states:SplashState::t_time2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.t_time2 = 0.5;
                        } else {
                            context.setproperty($names[14], 0.5, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:states:SplashState::t_time
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_time = (+local2);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        // 7 1:states:SplashState::t_start2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.t_start2 = 0;
                        } else {
                            context.setproperty($names[15], 0, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:states:SplashState::t_start
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_start = (+local2);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 1;// JIT: redundant assigment, value unused
                        local2 = 1;
                        // 7 1:states:SplashState::t_diff2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.t_diff2 = 1;
                        } else {
                            context.setproperty($names[16], 1, stack1);
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 1:states:SplashState::t_diff
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_diff = (+local2);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:game_utils::StateMachineNew
                        stack1 = scope0.findScopeProperty($names[17], true, false);
                        //JIT: Support fast construct:StateMachineNew/Object
                        stack1 = context.constructFast(stack1, [], $names[17]);
                        // 7 0::stateMachine
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:game_utils::StateMachineNew  */ 
                        this.$BgstateMachine = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "SETTINGS_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_SETTINGS_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_NORMAL_STATE", "SETTINGS_ACTION", "IS_SETTINGS_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE", "SETTINGS_ACTION", "IS_SETTINGS_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_NORMAL_STATE", "SETTINGS_ACTION", "IS_SETTINGS_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "SCORES_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_SCORES_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_NORMAL_STATE", "SCORES_ACTION", "IS_SCORES_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE", "SCORES_ACTION", "IS_SCORES_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_NORMAL_STATE", "SCORES_ACTION", "IS_SCORES_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_SCORES_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "END_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_SCORES_STATE", "END_ACTION", "IS_NORMAL_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_SCORES_STATE", "END_ACTION", "IS_NORMAL_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_SCORES_STATE", "END_ACTION", "IS_NORMAL_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "BACK_BUTTON_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_EXIT_PANEL_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_NORMAL_STATE", "BACK_BUTTON_ACTION", "IS_EXIT_PANEL_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE", "BACK_BUTTON_ACTION", "IS_EXIT_PANEL_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_NORMAL_STATE", "BACK_BUTTON_ACTION", "IS_EXIT_PANEL_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_EXIT_PANEL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "END_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_EXIT_PANEL_STATE", "END_ACTION", "IS_NORMAL_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_EXIT_PANEL_STATE", "END_ACTION", "IS_NORMAL_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_EXIT_PANEL_STATE", "END_ACTION", "IS_NORMAL_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "TOUCH_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_PLAY_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_NORMAL_STATE", "TOUCH_ACTION", "IS_PLAY_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE", "TOUCH_ACTION", "IS_PLAY_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_NORMAL_STATE", "TOUCH_ACTION", "IS_PLAY_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_PLAY_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "QUIT_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_QUIT_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_PLAY_STATE", "QUIT_ACTION", "IS_QUIT_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_PLAY_STATE", "QUIT_ACTION", "IS_QUIT_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_PLAY_STATE", "QUIT_ACTION", "IS_QUIT_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "QUIT_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_QUIT_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_NORMAL_STATE", "QUIT_ACTION", "IS_QUIT_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE", "QUIT_ACTION", "IS_QUIT_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_NORMAL_STATE", "QUIT_ACTION", "IS_QUIT_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_SETTINGS_STATE";// JIT: redundant assigment, value unused
//                        stack2 = "QUIT_ACTION";// JIT: redundant assigment, value unused
//                        stack3 = "IS_QUIT_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setRule("IS_SETTINGS_STATE", "QUIT_ACTION", "IS_QUIT_STATE");
                        } else {
                            // 7 0::setRule
                            {
                                let t = stack0;
                                const m = t.$BgsetRule || (t = sec.box(stack0), t.$BgsetRule);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_SETTINGS_STATE", "QUIT_ACTION", "IS_QUIT_STATE");
                                } else { 
                                   stack0.axCallProperty($names[18], ["IS_SETTINGS_STATE", "QUIT_ACTION", "IS_QUIT_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::normalState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[19]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setFunctionToState("IS_NORMAL_STATE", stack2);
                        } else {
                            // 7 0::setFunctionToState
                            {
                                let t = stack0;
                                const m = t.$BgsetFunctionToState || (t = sec.box(stack0), t.$BgsetFunctionToState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE", stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], ["IS_NORMAL_STATE", stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_PLAY_STATE";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::playState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[21]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setFunctionToState("IS_PLAY_STATE", stack2);
                        } else {
                            // 7 0::setFunctionToState
                            {
                                let t = stack0;
                                const m = t.$BgsetFunctionToState || (t = sec.box(stack0), t.$BgsetFunctionToState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_PLAY_STATE", stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], ["IS_PLAY_STATE", stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_SETTINGS_STATE";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::settingsState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[22]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setFunctionToState("IS_SETTINGS_STATE", stack2);
                        } else {
                            // 7 0::setFunctionToState
                            {
                                let t = stack0;
                                const m = t.$BgsetFunctionToState || (t = sec.box(stack0), t.$BgsetFunctionToState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_SETTINGS_STATE", stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], ["IS_SETTINGS_STATE", stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_SCORES_STATE";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::scoresState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[23]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setFunctionToState("IS_SCORES_STATE", stack2);
                        } else {
                            // 7 0::setFunctionToState
                            {
                                let t = stack0;
                                const m = t.$BgsetFunctionToState || (t = sec.box(stack0), t.$BgsetFunctionToState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_SCORES_STATE", stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], ["IS_SCORES_STATE", stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_EXIT_PANEL_STATE";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::exitPanelState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[24]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setFunctionToState("IS_EXIT_PANEL_STATE", stack2);
                        } else {
                            // 7 0::setFunctionToState
                            {
                                let t = stack0;
                                const m = t.$BgsetFunctionToState || (t = sec.box(stack0), t.$BgsetFunctionToState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_EXIT_PANEL_STATE", stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], ["IS_EXIT_PANEL_STATE", stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_QUIT_STATE";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::quitState
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[25]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setFunctionToState("IS_QUIT_STATE", stack2);
                        } else {
                            // 7 0::setFunctionToState
                            {
                                let t = stack0;
                                const m = t.$BgsetFunctionToState || (t = sec.box(stack0), t.$BgsetFunctionToState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_QUIT_STATE", stack2);
                                } else { 
                                   stack0.axCallProperty($names[20], ["IS_QUIT_STATE", stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "IS_NORMAL_STATE";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.setState("IS_NORMAL_STATE");
                        } else {
                            // 7 0::setState
                            {
                                let t = stack0;
                                const m = t.$BgsetState || (t = sec.box(stack0), t.$BgsetState);
                                if( typeof m === "function" ) { 
                                    m.call(t, "IS_NORMAL_STATE");
                                } else { 
                                   stack0.axCallProperty($names[26], ["IS_NORMAL_STATE"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashHud
                        //Possible type:7 0:game_utils::StateMachineNew
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashHudSprite  */ 
                        stack0 = this.$BgsplashHud;
                        // 7 0::settingsButton
                        //Possible type:7 0::SplashHudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['settingsButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgsettingsButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[27]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[28], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[28]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::hudHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[30]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::splashButtons
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::MenuButtonsSprite  */ 
                        stack0 = this.$BgsplashButtons;
                        // 7 0::playButton
                        //Possible type:7 0::MenuButtonsSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['playButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgplayButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[32]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[28], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[28]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[29]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:SplashState::onClick
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[33]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[34]);
                            }
                        }
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[35], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[35]);
                        }
                        // 7 0::TOUCH_BEGIN
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_BEGIN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_BEGIN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[36]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:states::_stageTouchHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[37]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[34]);
                            }
                        }
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[35], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[35]);
                        }
                        // 7 0::TOUCH_MOVE
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_MOVE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_MOVE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[38]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:states::_stageTouchHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[37]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[34]);
                            }
                        }
                        // 7 0:flash.events::TouchEvent
                        temp = scope0.findScopeProperty($names[35], true, false);
                        stack1 = temp.$BgTouchEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[35]);
                        }
                        // 7 0::TOUCH_END
                        //Possible type:7 0:flash.events::TouchEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_END'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_END;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 2:states::_stageTouchHandler
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[37]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addEventListener(stack1, stack2);
                        } else {
                            // 7 0::addEventListener
                            {
                                let t = stack0;
                                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[31], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::IS_ANDROID
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ANDROID'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ANDROID;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[40]);
                            }
                        }
                        if (!stack0) { p = 599; continue; };
                    case 599:
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.enterSplashState();
                        } else {
                            // 7 0::enterSplashState
                            {
                                let t = local1;
                                const m = t.$BgenterSplashState || (t = sec.box(local1), t.$BgenterSplashState);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[41], [], false);
                                }
                            }
                        }
                        // 7 0:flash.ui::GameInput
                        temp = scope0.findScopeProperty($names[42], true, false);
                        stack0 = temp.$BgGameInput;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[42]);
                        }
                        // 7 0::isSupported
                        //Possible type:7 0:flash.ui::GameInput
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['isSupported'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgisSupported;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[43]);
                            }
                        }
                        //JIT: Emit inline return
                        if (!stack0) { return; }
                        // 7 0:flash.ui::GameInput
                        temp = scope0.findScopeProperty($names[42], true, false);
                        stack0 = temp.$BgGameInput;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[42]);
                        }
                        // 7 0::numDevices
                        //Possible type:7 0:flash.ui::GameInput
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['numDevices'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgnumDevices;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[44]);
                            }
                        }
                        stack1 = 0;
                        //JIT: Emit inline return
                        if (!(0 < stack0)) { return; }
                        // 7 0::trace
                        /* GenerateLexImports */
//                        stack0 = __trace_def;// JIT: redundant assigment, value unused
                        // 7 0:flash.ui::GameInput
                        temp = scope0.findScopeProperty($names[42], true, false);
                        stack1 = temp.$BgGameInput;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[42]);
                        }
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getDeviceAt(0);
                        } else {
                            // 7 0::getDeviceAt
                            {
                                let t = stack1;
                                const m = t.$BggetDeviceAt || (t = sec.box(stack1), t.$BggetDeviceAt);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetDeviceAt (0);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[46], [0], false);
                                }
                            }
                        }
                        // 7 0::name
                        //Possible type:7 0:flash.ui::GameInput
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['name'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgname;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[47]);
                            }
                        }
                        if (!(_a = typeof __trace_def, ((_a !== 'object' && _a !== 'function' ) || __trace_def == null || __trace_def[AX_CLASS_SYMBOL]))) {
                            __trace_def.trace(stack1);
                        } else {
                            // 7 0::trace
                            {
                                let t = __trace_def;
                                const m = t.$Bgtrace || (t = sec.box(__trace_def), t.$Bgtrace);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   __trace_def.axCallProperty($names[45], [stack1], false);
                                }
                            }
                        }
                    case 645:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m_enterState.js
})