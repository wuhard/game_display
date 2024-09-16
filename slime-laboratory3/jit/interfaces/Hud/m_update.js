(function anonymous(context
) {
/*
	Index: 656
	Path:  interfaces/Hud::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local1 = NaN;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::ADS_BLOCKED
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['ADS_BLOCKED'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgADS_BLOCKED;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 55; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[3], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[3], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[3], false, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREE_CHECKPOINT_COUNTER = 0;
                        } else {
                            context.setproperty($names[6], 0, stack0);
                        }
                    case 55:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::level
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::GAME_OVER_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['GAME_OVER_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgGAME_OVER_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (stack1) { p = 77; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::FREEZE_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREEZE_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREEZE_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack0 = !!stack0;
                    case 77:
                        stack1 = stack0;
                        if (stack1) { p = 91; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::LEVEL_WON_FLAG
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LEVEL_WON_FLAG'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLEVEL_WON_FLAG;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[9]);
                            }
                        }
                        stack0 = !!stack0;
                    case 91:
                        if (!stack0) { p = 96; continue; };
                        return;
                    case 96:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = stack0;
                        local3 = stack1;
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREE_CHECKPOINT_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREE_CHECKPOINT_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        stack0 = (stack0 | 0) + 1;
                        local4 = stack0;
//                        stack0 = local3;// JIT: redundant assigment, value unused
//                        stack1 = local4;// JIT: redundant assigment, value unused
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
                            local3.FREE_CHECKPOINT_COUNTER = local4;
                        } else {
                            context.setproperty($names[6], local4, local3);
                        }
                        //IR: KILL removed, reason: prevent optimisation
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREE_CHECKPOINT_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREE_CHECKPOINT_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_SECONDS
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['FREE_CHECKPOINT_SECONDS'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgFREE_CHECKPOINT_SECONDS;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        stack1 *= 30;
                        if (!(stack1 <= stack0)) { p = 197; continue; };
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_SECONDS
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['FREE_CHECKPOINT_SECONDS'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgFREE_CHECKPOINT_SECONDS;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack2 = 30;// JIT: redundant assigment, value unused
                        stack1 *= 30;
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.FREE_CHECKPOINT_COUNTER = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:7 0::Utils
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::free_checkpoint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['free_checkpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfree_checkpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[12], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::freebie
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freebie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfreebie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::green_bar
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['green_bar'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggreen_bar;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
                        { p = 239; continue; };
                    case 197:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::free_checkpoint
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['free_checkpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfree_checkpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[12], false, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::green_bar
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['green_bar'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggreen_bar;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[12], true, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::freebie
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freebie'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgfreebie;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[13]);
                            }
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[12], true, stack0);
                        }
                    case 239:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_COUNTER
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['FREE_CHECKPOINT_COUNTER'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgFREE_CHECKPOINT_COUNTER;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = 30;// JIT: redundant assigment, value unused
                        stack0 /= 30;
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = 48;
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        stack0 *= local1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::FREE_CHECKPOINT_SECONDS
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['FREE_CHECKPOINT_SECONDS'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgFREE_CHECKPOINT_SECONDS;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        stack0 /= stack1;
                        stack0 = +stack0;
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::freeCheckpoint
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['freeCheckpoint'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgfreeCheckpoint;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::green_bar
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['green_bar'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bggreen_bar;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 9 {3, 1:interfaces:Hud, 0, 0:flash.events, 0:levels, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:flash.utils, 0:gameplay, 5:interfaces:Hud}::width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.width = local2;
                        } else {
                            context.setproperty($names[15], local2, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 <= stack0)) { p = 355; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['checkpointButton'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcheckpointButton;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 -= 8;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[17], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = 156;
                        if (!(156 >= stack0)) { p = 351; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = 156;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 156;
                        } else {
                            context.setproperty($names[17], 156, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::IS_CHECKPOINT_STAYING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_CHECKPOINT_STAYING = true;
                    case 351:
                        { p = 413; continue; };
                    case 355:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::IS_CHECKPOINT_STAYING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_CHECKPOINT_STAYING = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['checkpointButton'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcheckpointButton;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 += 8;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[17], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = 194;
                        if (!(194 <= stack0)) { p = 413; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::checkpointButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['checkpointButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcheckpointButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = 194;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 194;
                        } else {
                            context.setproperty($names[17], 194, stack0);
                        }
                    case 413:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::alpha
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['alpha'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgalpha;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[16]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 <= stack0)) { p = 489; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['skipLevelButton'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgskipLevelButton;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 += 8;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[17], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = 2;
                        if (!(2 <= stack0)) { p = 485; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = 2;
                        } else {
                            context.setproperty($names[17], 2, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::IS_SKIP_STAYING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SKIP_STAYING = true;
                    case 485:
                        { p = 545; continue; };
                    case 489:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::IS_SKIP_STAYING
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_SKIP_STAYING = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack1 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['skipLevelButton'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgskipLevelButton;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[17]);
                            }
                        }
//                        stack2 = 8;// JIT: redundant assigment, value unused
                        stack1 -= 8;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[17], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[17]);
                            }
                        }
                        stack1 = -33;
                        if (!(-33 >= stack0)) { p = 545; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hudSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
                        stack0 = this.$BghudSprite;
                        // 7 0::skipLevelButton
                        //Possible type:7 0::HudSprite
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skipLevelButton'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgskipLevelButton;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack1 = -33;// JIT: redundant assigment, value unused
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = -33;
                        } else {
                            context.setproperty($names[17], -33, stack0);
                        }
                    case 545:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::lastLifeValue
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglastLifeValue;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['PlayerLifes'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgPlayerLifes;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!(stack1 > stack0)) { p = 573; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['PlayerLifes'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgPlayerLifes;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 1:interfaces:Hud::lastLifeValue
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglastLifeValue = (stack1|0);
                        { p = 597; continue; };
                    case 573:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::lastLifeValue
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BglastLifeValue;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['PlayerLifes'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgPlayerLifes;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        if (!(stack1 <= stack0)) { p = 597; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['PlayerLifes'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgPlayerLifes;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[18]);
                            }
                        }
                        // 7 1:interfaces:Hud::lastLifeValue
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BglastLifeValue = (stack1|0);
                    case 597:
                        { p = 661; continue; };
                    case 601:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 47;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::yToReach
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgyToReach = 47;
                        //JIT: Emit inline return
                        return;
                    case 612:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 34;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::yToReach
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgyToReach = 34;
                        //JIT: Emit inline return
                        return;
                    case 623:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 25;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::yToReach
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgyToReach = 25;
                        //JIT: Emit inline return
                        return;
                    case 634:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 16;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::yToReach
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgyToReach = 16;
                        //JIT: Emit inline return
                        return;
                    case 645:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:Hud::yToReach
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$BgyToReach = 0;
                        //JIT: Emit inline return
                        return;
                    case 656:
                        //JIT: Emit inline return
                        return;
                    case 661:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PlayerLifes
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PlayerLifes'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPlayerLifes;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[18]);
                            }
                        }
                        local3 = stack0;
                        stack0 = 0;
                        stack1 = local3;
                        if (local3 !== 0) { p = 681; continue; };
                        stack0 = 0;
                        { p = 745; continue; };
                    case 681:
                        stack0 = 1;
                        stack1 = local3;
                        if (local3 !== 1) { p = 694; continue; };
                        stack0 = 1;
                        { p = 745; continue; };
                    case 694:
                        stack0 = 2;
                        stack1 = local3;
                        if (local3 !== 2) { p = 707; continue; };
                        stack0 = 2;
                        { p = 745; continue; };
                    case 707:
                        stack0 = 3;
                        stack1 = local3;
                        if (local3 !== 3) { p = 720; continue; };
                        stack0 = 3;
                        { p = 745; continue; };
                    case 720:
                        stack0 = 4;
                        stack1 = local3;
                        if (local3 !== 4) { p = 733; continue; };
                        stack0 = 4;
                        { p = 745; continue; };
                    case 733:
                        { p = 743; continue; };
                        // unreachable
                        // unreachable
                    case 743:
                        stack0 = 5;
                    case 745:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 6) { p = [601, 612, 623, 634, 645, 656][stack0]; continue; } else { p = 656; continue; };
                    case 770:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/Hud/m_update.js
})