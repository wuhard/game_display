(function anonymous(context
) {
/*
	Index: 968
	Path:  states/LevelState::m_costumePanelClickHandler
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_costumePanelClickHandler(local1 /* MouseEvent */) {
        // Possible use a real "this"

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
//                        // JIT: potential type:7 0:flash.events::MouseEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::name
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['name'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgname;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = "noButton";
                        if ("noButton" != stack0) { p = 74; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::costume_click_once
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgcostume_click_once;
                        stack1 = false;
                        if (false != stack0) { p = 70; continue; };
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
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
                                   stack0.axCallProperty($names[3], ["select"], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::costume_click_once
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$Bgcostume_click_once = true;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompleteKeyDownListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[8]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeEventListener(stack1, stack2);
                        } else {
                            // 7 0::removeEventListener
                            {
                                let t = stack0;
                                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::levelEnd
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelEnd = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 4;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = 4;
                    case 70:
                        //JIT: Emit inline return
                        return;
                    case 74:
                        // 7 0:levels::Level
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack0 = temp.$BgLevel;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[10]);
                        }
//                        stack1 = 30;// JIT: redundant assigment, value unused
                        // 7 0::PAUSE_ON_DELAY
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PAUSE_ON_DELAY = 30;
                        } else {
                            context.setproperty($names[11], 30, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::REWARD_SKIN
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['REWARD_SKIN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgREWARD_SKIN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[12]);
                            }
                        }
                        // 7 0::REWARD_AD_TYPE
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.REWARD_AD_TYPE = stack1;
                        } else {
                            context.setproperty($names[13], stack1, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[6]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCompleteKeyDownListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[8]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeEventListener(stack1, stack2);
                        } else {
                            // 7 0::removeEventListener
                            {
                                let t = stack0;
                                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[9], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[14]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.instance();
                        } else {
                            // 7 0::instance
                            {
                                let t = stack0;
                                const m = t.$Bginstance || (t = sec.box(stack0), t.$Bginstance);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bginstance ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[15], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.rewardedBreak();
                        } else {
                            // 7 0::rewardedBreak
                            {
                                let t = stack0;
                                const m = t.$BgrewardedBreak || (t = sec.box(stack0), t.$BgrewardedBreak);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[16], [], false);
                                }
                            }
                        }
                    case 122:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_costumePanelClickHandler.js
})