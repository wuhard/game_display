(function anonymous(context
) {
/*
	Index: 977
	Path:  states/LevelState::m_glassesPanelClickHandler
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_glassesPanelClickHandler(local1 /* MouseEvent */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        // SKIP_NULL_COERCE
                        local2 = null;
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelStaying
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgglassesPanelStaying;
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        // JIT: potential type:7 0:flash.events::MouseEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        //Possible type:7 0::Boolean
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
                        stack0 = context.axCoerceString(stack0);
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = "_";// JIT: redundant assigment, value unused
                        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
                           stack0 = local2.split("_");
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::split
                            {
                                let t = local2;
                                const m = t.$Bgsplit || (t = sec.box(local2), t.$Bgsplit);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsplit ("_");
                                } else { 
                                    stack0 = local2.axCallProperty($names[2], ["_"], false);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[3], true, false);
                            _e || console.warn('[m_glassesPanelClickHandler] Coerce Type not found:', "Array")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::Number
                        stack1 = scope0.findScopeProperty($names[5], true, false);
                        stack2 = local3;
                        stack3 = 1;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = 1;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[6], 1);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.Number(stack2);
                        } else {
                            // 7 0::Number
                            {
                                let t = stack1;
                                const m = t.$BgNumber || (t = sec.box(stack1), t.$BgNumber);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgNumber (stack2);
                                } else { 
                                    stack1 = stack1.axCallProperty($names[5], [stack2], false);
                                }
                            }
                        }
                        // 7 0::SKIN_1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SKIN_1 = stack1;
                        } else {
                            context.setproperty($names[7], stack1, stack0);
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::SKIN_1
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['SKIN_1'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgSKIN_1;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::data1
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.data1 = stack1;
                        } else {
                            context.setproperty($names[11], stack1, stack0);
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[8]);
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.Save();
                        } else {
                            // 7 0::Save
                            {
                                let t = stack0;
                                const m = t.$BgSave || (t = sec.box(stack0), t.$BgSave);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[12], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:7 0:game_utils::SaveManager
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateGlasses();
                        } else {
                            // 7 0::updateGlasses
                            {
                                let t = stack0;
                                const m = t.$BgupdateGlasses || (t = sec.box(stack0), t.$BgupdateGlasses);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[13], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateGlassesSelector();
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelStaying = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanelExiting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelExiting = true;
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[14]);
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
                                   stack0.axCallProperty($names[15], ["confirm"], false);
                                }
                            }
                        }
                    case 112:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_glassesPanelClickHandler.js
})