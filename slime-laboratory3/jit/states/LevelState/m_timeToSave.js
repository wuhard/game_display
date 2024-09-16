(function anonymous(context
) {
/*
	Index: 972
	Path:  states/LevelState::m_timeToSave
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_timeToSave(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0--;
                        stack0 |= 0;
                        local2 = stack0;
                        stack0 = local2;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        stack0 += 1;
                        stack0 |= 0;
                        local3 = stack0;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 43; continue; };
                        // 7 0:game_utils::AchievementsManager
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgAchievementsManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
//                        stack1 = "slime3_1";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SubmitAchievement("slime3_1");
                        } else {
                            // 7 0::SubmitAchievement
                            {
                                let t = stack0;
                                const m = t.$BgSubmitAchievement || (t = sec.box(stack0), t.$BgSubmitAchievement);
                                if( typeof m === "function" ) { 
                                    m.call(t, "slime3_1");
                                } else { 
                                   stack0.axCallProperty($names[3], ["slime3_1"], false);
                                }
                            }
                        }
                    case 43:
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 51; continue; };
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                    case 51:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::PERFECT_LEVEL_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PERFECT_LEVEL_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPERFECT_LEVEL_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!stack0) { p = 79; continue; };
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::doorUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['doorUnlocked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgdoorUnlocked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local2;
                        stack2 = true;
                        context.setproperty(context.runtimename($names[9], local2), true, stack0);
                    case 79:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 = local2;
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack2 = temp.$BgSaveManager;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['LocalData'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgLocalData;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['data'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgdata;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['levelItems'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BglevelItems;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack3 = local2;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = local2;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[9], local2);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerItems
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['PlayerItems'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgPlayerItems;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[11]);
                            }
                        }
                        stack2 |= stack3;
                        context.setproperty(context.runtimename($names[9], local2), stack2, stack0);
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelUnlocked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelUnlocked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[12]);
                            }
                        }
                        stack1 = local3;
                        stack2 = true;
                        context.setproperty(context.runtimename($names[9], local3), true, stack0);
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::VARIABLE_LAST_LEVEL
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL = local3;
                        } else {
                            context.setproperty($names[13], local3, stack0);
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CurrentLevel'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCurrentLevel;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack2 = 1;// JIT: redundant assigment, value unused
                        stack1 += 1;
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::VARIABLE_LAST_LEVEL_WON_SELECTED
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL_WON_SELECTED = stack1;
                        } else {
                            context.setproperty($names[14], stack1, stack0);
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::VARIABLE_LAST_LEVEL
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['VARIABLE_LAST_LEVEL'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgVARIABLE_LAST_LEVEL;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::LAST_LEVEL
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['LAST_LEVEL'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgLAST_LEVEL;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
                        if (!(stack1 <= stack0)) { p = 205; continue; };
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::VARIABLE_LAST_LEVEL
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL = 1;
                        } else {
                            context.setproperty($names[13], 1, stack0);
                        }
                    case 205:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::VARIABLE_LAST_LEVEL_WON_SELECTED
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['VARIABLE_LAST_LEVEL_WON_SELECTED'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgVARIABLE_LAST_LEVEL_WON_SELECTED;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::LAST_LEVEL
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['LAST_LEVEL'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgLAST_LEVEL;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
                        if (!(stack1 <= stack0)) { p = 241; continue; };
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::VARIABLE_LAST_LEVEL_WON_SELECTED
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.VARIABLE_LAST_LEVEL_WON_SELECTED = 1;
                        } else {
                            context.setproperty($names[14], 1, stack0);
                        }
                    case 241:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
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
                                   stack0.axCallProperty($names[16], [], false);
                                }
                            }
                        }
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        if (!local1) { p = 265; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        // 7 0::CurrentLevel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.CurrentLevel = 1;
                        } else {
                            context.setproperty($names[1], 1, stack0);
                        }
                        { p = 288; continue; };
                    case 265:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = stack0;
                        local7 = stack1;
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['CurrentLevel'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgCurrentLevel;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local8 = stack0;
//                        stack0 = local7;// JIT: redundant assigment, value unused
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        // 7 0::CurrentLevel
                        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])){
                            local7.CurrentLevel = local8;
                        } else {
                            context.setproperty($names[1], local8, local7);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                    case 288:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local5 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local6 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        { p = 417; continue; };
                    case 304:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 0;
                        stack0 >>= 0;
                        stack1 = 1;
                        stack0 &= 1;
                        if (!stack0) { p = 334; continue; };
                        local5 = (local5 | 0) + 1;
                    case 334:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 1;
                        stack0 >>= 1;
                        stack1 = 1;
                        stack0 &= 1;
                        if (!stack0) { p = 363; continue; };
                        local5 = (local5 | 0) + 1;
                    case 363:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::levelItems
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelItems'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelItems;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = 2;
                        stack0 >>= 2;
                        stack1 = 1;
                        stack0 &= 1;
                        if (!stack0) { p = 392; continue; };
                        local5 = (local5 | 0) + 1;
                    case 392:
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[5], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[5]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::doorUnlocked
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['doorUnlocked'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgdoorUnlocked;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if (!stack0) { p = 415; continue; };
                        local6 = (local6 | 0) + 1;
                    case 415:
                        local4 = (local4 | 0) + 1;
                    case 417:
                        stack0 = local4;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::LAST_LEVEL
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['LAST_LEVEL'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgLAST_LEVEL;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[15]);
                            }
                        }
                        if (stack1 > local4) { p = 304; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_timeToSave.js
})