(function anonymous(context
) {
/*
	Index: 182
	Path:  levels/Level::m_jumpDown
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_jumpDown() {
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
                        // 7 0::FREEZE_FLAG
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgFREEZE_FLAG;
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 19; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::RESTORE_CHECKPOINT_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgRESTORE_CHECKPOINT_FLAG;
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 19:
                        stack1 = stack0;
                        if (stack1) { p = 31; continue; };
                        // 7 0::initialDelay
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BginitialDelay;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = 0;
                        stack0 = stack0 > 0;
                    case 31:
                        if (!stack0) { p = 36; continue; };
                        return;
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::initialDelay
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::IS_PIPE
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_PIPE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_PIPE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 48; continue; };
                        return;
                    case 48:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upPressed
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgupPressed;
                        stack1 = false;
                        if (false != stack0) { p = 166; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::SPLITTED_FLAG
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgSPLITTED_FLAG;
                        if (!stack0) { p = 103; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero1
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero1;
                        // 7 0::animationManager
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['animationManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BganimationManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::JumpKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['JumpKeyAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgJumpKeyAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[5], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::smallHero2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::SmallHero  */ 
                        stack0 = this.$BgsmallHero2;
                        // 7 0::animationManager
                        //Possible type:7 0:entities::SmallHero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['animationManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BganimationManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::JumpKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['JumpKeyAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgJumpKeyAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[5], [stack1], false);
                                }
                            }
                        }
                        { p = 166; continue; };
                    case 103:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::ZERO_GRAVITY
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgZERO_GRAVITY;
                        if (!stack0) { p = 129; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        // 7 0::jump_cooldown_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgjump_cooldown_counter = 10;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.jumpImpulse();
                        } else {
                            // 7 0::jumpImpulse
                            {
                                let t = stack0;
                                const m = t.$BgjumpImpulse || (t = sec.box(stack0), t.$BgjumpImpulse);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
                        { p = 166; continue; };
                    case 129:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        //Possible type:7 0:entities::Hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::animationManager
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['animationManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BganimationManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0:entities::AnimationManager
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack1 = temp.$BgAnimationManager;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::JumpKeyAction
                        //Possible type:7 0:entities::AnimationManager
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['JumpKeyAction'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgJumpKeyAction;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction(stack1);
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[5], [stack1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
                        // 7 0::IS_FROST
                        //Possible type:7 0:entities::Hero
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_FROST'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_FROST;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        if (!stack0) { p = 166; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::hero
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:entities::Hero  */ 
                        stack0 = this.$Bghero;
//                        stack1 = 10;// JIT: redundant assigment, value unused
                        // 7 0::coyote_time
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.coyote_time = 10;
                        } else {
                            context.setproperty($names[8], 10, stack0);
                        }
                    case 166:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::upPressed
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgupPressed = true;
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/Level/m_jumpDown.js
})