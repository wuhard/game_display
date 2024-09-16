(function anonymous(context
) {
/*
	Index: 959
	Path:  states/LevelState::m_enterState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_enterState(local1 /* Game */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::SKIP_LEVEL_REWARD
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.SKIP_LEVEL_REWARD = false;
                        } else {
                            context.setproperty($names[1], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::ad_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgad_counter = -1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::POPUP_LEVEL_COMPLETE_ONCE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgPOPUP_LEVEL_COMPLETE_ONCE = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::AVOID_PAUSE_PANEL
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgAVOID_PAUSE_PANEL = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::LEVEL_WON
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgLEVEL_WON = false;
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 57; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level1
                        stack1 = scope0.findScopeProperty($names[3], true, false);
                        //JIT: Support fast construct:Level1/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[3]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 57:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 2;
                        if (2 != stack0) { p = 84; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level2
                        stack1 = scope0.findScopeProperty($names[4], true, false);
                        //JIT: Support fast construct:Level2/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[4]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 84:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 3;
                        if (3 != stack0) { p = 111; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level3
                        stack1 = scope0.findScopeProperty($names[5], true, false);
                        //JIT: Support fast construct:Level3/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[5]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 111:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 4;
                        if (4 != stack0) { p = 138; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level4
                        stack1 = scope0.findScopeProperty($names[6], true, false);
                        //JIT: Support fast construct:Level4/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[6]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 138:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 5;
                        if (5 != stack0) { p = 165; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level5
                        stack1 = scope0.findScopeProperty($names[7], true, false);
                        //JIT: Support fast construct:Level5/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[7]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 165:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 6;
                        if (6 != stack0) { p = 192; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level6
                        stack1 = scope0.findScopeProperty($names[8], true, false);
                        //JIT: Support fast construct:Level6/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[8]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 192:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 7;
                        if (7 != stack0) { p = 219; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level7
                        stack1 = scope0.findScopeProperty($names[9], true, false);
                        //JIT: Support fast construct:Level7/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[9]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 219:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 8;
                        if (8 != stack0) { p = 246; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level8
                        stack1 = scope0.findScopeProperty($names[10], true, false);
                        //JIT: Support fast construct:Level8/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[10]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 246:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 9;
                        if (9 != stack0) { p = 273; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level9
                        stack1 = scope0.findScopeProperty($names[11], true, false);
                        //JIT: Support fast construct:Level9/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[11]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 273:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 10;
                        if (10 != stack0) { p = 300; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level10
                        stack1 = scope0.findScopeProperty($names[12], true, false);
                        //JIT: Support fast construct:Level10/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[12]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 300:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 11;
                        if (11 != stack0) { p = 327; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level11
                        stack1 = scope0.findScopeProperty($names[13], true, false);
                        //JIT: Support fast construct:Level11/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[13]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 327:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 12;
                        if (12 != stack0) { p = 354; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level12
                        stack1 = scope0.findScopeProperty($names[14], true, false);
                        //JIT: Support fast construct:Level12/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[14]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 354:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 13;
                        if (13 != stack0) { p = 381; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level13
                        stack1 = scope0.findScopeProperty($names[15], true, false);
                        //JIT: Support fast construct:Level13/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[15]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 381:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 14;
                        if (14 != stack0) { p = 408; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level14
                        stack1 = scope0.findScopeProperty($names[16], true, false);
                        //JIT: Support fast construct:Level14/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[16]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 408:
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
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 = 15;
                        if (15 != stack0) { p = 435; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level15
                        stack1 = scope0.findScopeProperty($names[17], true, false);
                        //JIT: Support fast construct:Level15/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[17]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                        { p = 446; continue; };
                    case 435:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:levels::Level1
                        stack1 = scope0.findScopeProperty($names[3], true, false);
                        //JIT: Support fast construct:Level1/Level/Object
                        stack1 = context.constructFast(stack1, [], $names[3]);
                        // 7 3::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = stack1;
                    case 446:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::PERFECT_FLAG
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgPERFECT_FLAG = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = -1;// JIT: redundant assigment, value unused
                        // 7 0::choice
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgchoice = -1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::CLOSED_ALREADY
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgCLOSED_ALREADY = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::REWARD_COMPLETED
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgREWARD_COMPLETED = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::IS_PREMIUM_PURCHASE
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_PREMIUM_PURCHASE = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgsinCounter = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::sinCounter2
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$BgsinCounter2 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::rating
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgrating = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.display::MovieClip
                        stack1 = scope0.findScopeProperty($names[18], true, false);
                        stack1 = context.constructprop($names[18], stack1, []);
                        // 7 0::hudContainer
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$BghudContainer = stack1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::rootMovie
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootMovie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootMovie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
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
                                   stack0.axCallProperty($names[20], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
//                        stack2 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.y = 0;
                        } else {
                            context.setproperty($names[21], 0, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = local3;
                        } else {
                            context.setproperty($names[22], local3, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BghudContainer;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudContainer
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$BghudContainer;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgUtils;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GFX_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['GFX_SCALE'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgGFX_SCALE;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[23]);
                            }
                        }
                        stack3 = stack2;
                        local3 = stack3;
                        // 7 0::scaleY
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.scaleY = stack2;
                        } else {
                            context.setproperty($names[24], stack2, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = local3;
                        } else {
                            context.setproperty($names[25], local3, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::PausePanel
                        stack1 = scope0.findScopeProperty($names[26], true, false);
                        stack1 = context.constructprop($names[26], stack1, []);
                        // 7 0::pausePanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::PausePanel  */ 
                        this.$BgpausePanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = false;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack4 = false;// JIT: redundant assigment, value unused
                        local3 = false;
                        // 7 0::pausePanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelStaying = false;
                        stack2 = local3;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local3;
                        local3 = stack3;
                        // 7 0::pausePanelExiting
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.pausePanelExiting = stack2;
                        } else {
                            context.setproperty($names[28], stack2, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::pausePanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelEntering = (!!local3);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ShadesPanel
                        stack1 = scope0.findScopeProperty($names[29], true, false);
                        stack1 = context.constructprop($names[29], stack1, []);
                        // 7 0::glassesPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::ShadesPanel  */ 
                        this.$BgglassesPanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        //Possible type:7 0::PausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::selector
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['selector'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgselector;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[30]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::mouseEnabled
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.mouseEnabled = false;
                        } else {
                            context.setproperty($names[31], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = false;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack4 = false;// JIT: redundant assigment, value unused
                        local3 = false;
                        // 7 0::glassesPanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelStaying = false;
                        stack2 = local3;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local3;
                        local3 = stack3;
                        // 7 0::glassesPanelExiting
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.glassesPanelExiting = stack2;
                        } else {
                            context.setproperty($names[32], stack2, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::glassesPanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgglassesPanelEntering = (!!local3);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgupdateGlassesSelector();
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::PremiumPanel
                        stack1 = scope0.findScopeProperty($names[33], true, false);
                        stack1 = context.constructprop($names[33], stack1, []);
                        // 7 0::premiumPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::PremiumPanel  */ 
                        this.$BgpremiumPanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:7 0::ShadesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::premiumPanel
                        //Possible type:7 0::PremiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PremiumPanel  */ 
                        stack0 = this.$BgpremiumPanel;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[34], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = this;
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = false;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack4 = false;// JIT: redundant assigment, value unused
                        local3 = false;
                        // 7 0::premiumPanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpremiumPanelStaying = false;
                        stack2 = local3;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local3;
                        local3 = stack3;
                        // 7 0::premiumPanelExiting
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
                            stack1.premiumPanelExiting = stack2;
                        } else {
                            context.setproperty($names[35], stack2, stack1);
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::premiumPanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpremiumPanelEntering = (!!local3);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelEntering
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelCompletePanelEntering = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::levelCompletePanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BglevelCompletePanelStaying = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::WhiteHudPanel
                        stack1 = scope0.findScopeProperty($names[36], true, false);
                        stack1 = context.constructprop($names[36], stack1, []);
                        // 7 0::whiteHudPanel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::WhiteHudPanel  */ 
                        this.$BgwhiteHudPanel = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::whiteHudPanel
                        //Possible type:7 0::PremiumPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::WhiteHudPanel  */ 
                        stack0 = this.$BgwhiteHudPanel;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::levelBonus
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglevelBonus = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::perfectLevelBonus
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgperfectLevelBonus = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        //Possible type:7 0::WhiteHudPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::continueButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['continueButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcontinueButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[37]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::repeatLevelButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['repeatLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrepeatLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[42]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::levelSelectionButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelSelectionButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelSelectionButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[43]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::pausePanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::PausePanel  */ 
                        stack0 = this.$BgpausePanel;
                        // 7 0::backToTitleButton
                        //Possible type:7 0::PausePanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['backToTitleButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgbackToTitleButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[44]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::pausePanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[40]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_0
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[45]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_1
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[47]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_2
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[48]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_3
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_4
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_4'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_4;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[50]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_5
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_5'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_5;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_6
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_6'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_6;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[52]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_7
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_7'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_7;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_8
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_8'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_8;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[54]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_9
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_9'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_9;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[55]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_10
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_10'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_10;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[56]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_11
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_11'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_11;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[57]);
                            }
                        }
                        // 7 0:flash.events::MouseEvent
                        temp = scope0.findScopeProperty($names[38], true, false);
                        stack1 = temp.$BgMouseEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[38]);
                        }
                        // 7 0::CLICK
                        //Possible type:7 0:flash.events::MouseEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['CLICK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgCLICK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[39]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:states:LevelState::glassesPanelClickHandler
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[46]);
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
                                   stack0.axCallProperty($names[41], [stack1, stack2], false);
                                }
                            }
                        }
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[58], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[58]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[59]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[60]);
                            }
                        }
                        // 9 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::skins
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skins'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgskins;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[61]);
                            }
                        }
                        stack0 |= 0;
                        local2 = stack0;
                        stack0 = local2;
                        stack1 = 0;
                        stack0 >>= 0;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1110; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_0
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_0'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_0;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[45]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1110:
                        stack0 = local2;
                        stack1 = 1;
                        stack0 >>= 1;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1134; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_1
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_1'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_1;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[47]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1134:
                        stack0 = local2;
                        stack1 = 2;
                        stack0 >>= 2;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1158; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_2
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_2'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_2;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[48]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1158:
                        stack0 = local2;
                        stack1 = 3;
                        stack0 >>= 3;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1182; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_3
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_3'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_3;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[49]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1182:
                        stack0 = local2;
                        stack1 = 4;
                        stack0 >>= 4;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1206; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_4
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_4'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_4;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[50]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1206:
                        stack0 = local2;
                        stack1 = 5;
                        stack0 >>= 5;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1230; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_5
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_5'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_5;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[51]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1230:
                        stack0 = local2;
                        stack1 = 6;
                        stack0 >>= 6;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1254; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_6
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_6'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_6;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[52]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1254:
                        stack0 = local2;
                        stack1 = 7;
                        stack0 >>= 7;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1278; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_7
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_7'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_7;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[53]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1278:
                        stack0 = local2;
                        stack1 = 8;
                        stack0 >>= 8;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1302; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_8
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_8'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_8;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[54]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1302:
                        stack0 = local2;
                        stack1 = 9;
                        stack0 >>= 9;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1326; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_9
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_9'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_9;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[55]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1326:
                        stack0 = local2;
                        stack1 = 10;
                        stack0 >>= 10;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1350; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_10
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_10'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_10;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[56]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1350:
                        stack0 = local2;
                        stack1 = 11;
                        stack0 >>= 11;
                        stack1 = 1;
                        stack0 &= 1;
                        stack1 = 0;
                        if (0 != stack0) { p = 1374; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesPanel
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
                        stack0 = this.$BgglassesPanel;
                        // 7 0::button_11
                        //Possible type:7 0::ShadesPanel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['button_11'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgbutton_11;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[57]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[27], false, stack0);
                        }
                    case 1374:
//                        // JIT: potential type:7 0::Game// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.enterLevelState();
                        } else {
                            // 7 0::enterLevelState
                            {
                                let t = local1;
                                const m = t.$BgenterLevelState || (t = sec.box(local1), t.$BgenterLevelState);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[62], [], false);
                                }
                            }
                        }
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[63], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[63]);
                        }
//                        stack1 = "eval";// JIT: redundant assigment, value unused
                        stack2 = "PokiSDK.customEvent('game', 'segment', { label: 'level', value: '";
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack3 = temp.$BgUtils;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::CurrentLevel
                        //Possible type:7 0::Utils
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['CurrentLevel'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$BgCurrentLevel;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 += stack3;
//                        stack3 = "' });";// JIT: redundant assigment, value unused
                        stack2 += "' });";
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.call("eval", stack2);
                        } else {
                            // 7 0::call
                            {
                                let t = stack0;
                                const m = t.$Bgcall || (t = sec.box(stack0), t.$Bgcall);
                                if( typeof m === "function" ) { 
                                    m.call(t, "eval", stack2);
                                } else { 
                                   stack0.axCallProperty($names[64], ["eval", stack2], false);
                                }
                            }
                        }
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[65], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[65]);
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
                                    stack0 = stack0.axCallProperty($names[66], [], false);
                                }
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::callBackCommercialBreak
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack1 = this.axGetProperty($names[67]);
                        // 7 0::callBackCommercialBreak
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.callBackCommercialBreak = stack1;
                        } else {
                            context.setproperty($names[67], stack1, stack0);
                        }
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[65], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[65]);
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
                                    stack0 = stack0.axCallProperty($names[66], [], false);
                                }
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.commercialBreak();
                        } else {
                            // 7 0::commercialBreak
                            {
                                let t = stack0;
                                const m = t.$BgcommercialBreak || (t = sec.box(stack0), t.$BgcommercialBreak);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[68], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_enterState.js
})