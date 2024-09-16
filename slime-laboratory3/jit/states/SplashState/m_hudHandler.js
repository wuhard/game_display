(function anonymous(context
) {
/*
	Index: 1035
	Path:  states/SplashState::m_hudHandler
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_hudHandler(local1 /* MouseEvent */) {
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
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack1 = "IS_NORMAL_STATE";
                        if ("IS_NORMAL_STATE" == stack0) { p = 17; continue; };
                        return;
                    case 17:
//                        // JIT: potential type:7 0:flash.events::MouseEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 9 {3, 0, 0:flash.display, 1:states:SplashState, 0:flash.events, 2:states, 3, 0:states, 0:http://adobe.com/AS3/2006/builtin, 0:interfaces, 0:flash.net, 0:flash.geom, 0:levels, 5:states:SplashState}::name
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['name'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgname;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = "settingsButton";
                        if ("settingsButton" != stack0) { p = 56; continue; };
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
//                        stack1 = "confirm";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("confirm");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "confirm");
                                } else { 
                                   stack0.axCallProperty($names[4], ["confirm"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "SETTINGS_ACTION";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction("SETTINGS_ACTION");
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, "SETTINGS_ACTION");
                                } else { 
                                   stack0.axCallProperty($names[5], ["SETTINGS_ACTION"], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 56:
//                        // JIT: potential type:7 0:flash.events::MouseEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        //Possible type:7 0:game_utils::StateMachineNew
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 9 {3, 0, 0:flash.display, 1:states:SplashState, 0:flash.events, 2:states, 3, 0:states, 0:http://adobe.com/AS3/2006/builtin, 0:interfaces, 0:flash.net, 0:flash.geom, 0:levels, 5:states:SplashState}::name
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['name'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgname;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = "gameCenterButton";
                        //JIT: Emit inline return
                        if ("gameCenterButton" != stack0) { return; }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
//                        stack1 = "select";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("select");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "select");
                                } else { 
                                   stack0.axCallProperty($names[4], ["select"], false);
                                }
                            }
                        }
                    case 80:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m_hudHandler.js
})