(function anonymous(context
) {
/*
	Index: 158
	Path:  levels/Level::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::ceilingYPos
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgceilingYPos = 0;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::JustHitEnemy
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.JustHitEnemy = false;
        } else {
            context.setproperty($names[1], false, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerItems
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerItems = 0;
        } else {
            context.setproperty($names[2], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::jump_cooldown_counter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgjump_cooldown_counter = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::cameraYOffset
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgcameraYOffset = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
//        stack2 = this;// JIT: redundant assigment, value unused
//        stack3 = this;// JIT: redundant assigment, value unused
//        stack4 = this;// JIT: redundant assigment, value unused
//        stack5 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack6 = 0;// JIT: redundant assigment, value unused
        local1 = 0;
        // 7 1:levels:Level::shake_power
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_power = 0;
        stack4 = local1;
        //IR: KILL removed, reason: prevent optimisation
        stack5 = local1;
        local1 = stack5;
        // 7 1:levels:Level::shake_counter_2
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_counter_2 = (+stack4);
        stack3 = local1;
        //IR: KILL removed, reason: prevent optimisation
        stack4 = local1;
        local1 = stack4;
        // 7 1:levels:Level::shake_counter_1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_counter_1 = (+stack3);
        stack2 = local1;
        //IR: KILL removed, reason: prevent optimisation
        stack3 = local1;
        local1 = stack3;
        // 7 1:levels:Level::shake_offsetY
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_offsetY = (+stack2);
//        stack1 = local1;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 1:levels:Level::shake_offsetX
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgshake_offsetX = (+local1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 1:levels:Level::IS_SHAKING
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgIS_SHAKING = false;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = -100000;// JIT: redundant assigment, value unused
        // 7 0::cameraLeftMargin
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgcameraLeftMargin = -100000;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 100000;// JIT: redundant assigment, value unused
        // 7 0::cameraRightMargin
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgcameraRightMargin = 100000;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0:flash.display::MovieClip
        stack1 = scope0.findScopeProperty($names[3], true, false);
        stack1 = context.constructprop($names[3], stack1, []);
        // 7 0::gameMovie
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.gameMovie = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0:flash.display::MovieClip
        stack1 = scope0.findScopeProperty($names[3], true, false);
        stack1 = context.constructprop($names[3], stack1, []);
        // 7 0::backWorld
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.backWorld = stack1;
        } else {
            context.setproperty($names[5], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0:flash.display::MovieClip
        stack1 = scope0.findScopeProperty($names[3], true, false);
        stack1 = context.constructprop($names[3], stack1, []);
        // 7 0::world
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.world = stack1;
        } else {
            context.setproperty($names[6], stack1, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::AVOID_PAUSE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AVOID_PAUSE = false;
        } else {
            context.setproperty($names[7], false, stack0);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::DEATHS_AMOUNT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.DEATHS_AMOUNT = 0;
        } else {
            context.setproperty($names[8], 0, stack0);
        }
        // 7 0::initialDelay
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = 20;// JIT: redundant assigment, value unused
        // 7 0::initialDelay
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.initialDelay = 20;
        } else {
            context.setproperty($names[9], 20, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 1:levels:Level::ad_counter_tick
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgad_counter_tick = 0;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::AdsOn
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.AdsOn = false;
        } else {
            context.setproperty($names[10], false, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgplayMusic();
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        stack1 = stack0;
        local1 = stack1;
        // 7 0::LEVELS_PLAYED
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['LEVELS_PLAYED'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgLEVELS_PLAYED;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[11]);
            }
        }
        stack0 = (stack0 | 0) + 1;
        local2 = stack0;
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = local2;// JIT: redundant assigment, value unused
        // 7 0::LEVELS_PLAYED
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.LEVELS_PLAYED = local2;
        } else {
            context.setproperty($names[11], local2, local1);
        }
        //IR: KILL removed, reason: prevent optimisation
        //IR: KILL removed, reason: prevent optimisation
        return;
    }
//# sourceURL=http://jit/levels/Level/constructor.js
})