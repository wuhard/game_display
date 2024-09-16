(function anonymous(context
) {
/*
	Index: 1942
	Path:  interfaces/panels/GameTitlePanel::m_update
	Type:  Public
	Kind:  Method
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
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
        let stack7 = undefined;
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
                        local1 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local2 = NaN;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::PROGRESSION
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgPROGRESSION;
                        stack1 = 0;
                        if (0 != stack0) { p = 21; continue; };
                        //JIT: Emit inline return
                        return;
                    case 21:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::PROGRESSION
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgPROGRESSION;
                        stack1 = 1;
                        if (1 != stack0) { p = 35; continue; };
                        //JIT: Emit inline return
                        return;
                    case 35:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::PROGRESSION
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgPROGRESSION;
                        stack1 = 2;
                        if (2 != stack0) { p = 49; continue; };
                        //JIT: Emit inline return
                        return;
                    case 49:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::PROGRESSION
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$BgPROGRESSION;
                        stack1 = 3;
                        //JIT: Emit inline return
                        if (3 != stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_tick
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgt_tick;
                        stack2 = 1;
//                        stack3 = 30;// JIT: redundant assigment, value unused
                        stack2 /= 30;
                        stack1 += stack2;
                        // 7 1:interfaces.panels:GameTitlePanel::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_tick
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgt_tick;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_time
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgt_time;
                        if (!(stack1 <= stack0)) { p = 93; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_time
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgt_time;
                        // 7 1:interfaces.panels:GameTitlePanel::t_tick
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgt_tick = (+stack1);
                    case 93:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::titleSprite
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
                        stack0 = this.$BgtitleSprite;
                        // 7 0::gfxHandle
                        //Possible type:7 0::SplashTitle
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['gfxHandle'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BggfxHandle;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = 2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(2);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 2);
                                } else { 
                                   stack0.axCallProperty($names[1], [2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::titleSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
                        stack0 = this.$BgtitleSprite;
                        // 7 0::int
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$Bgint;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        stack2 = context.savedScope.global.object;
                        // 7 0:game_utils::Easings
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack3 = temp.$BgEasings;
                        if (stack3 === undefined || typeof stack3 === 'function') {
                            stack3 = temp.axGetProperty($names[3]);
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_tick
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack4 = this.$Bgt_tick;
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_start
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack5 = this.$Bgt_start;
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_diff
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack6 = this.$Bgt_diff;
//                        stack7 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces.panels:GameTitlePanel::t_time
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack7 = this.$Bgt_time;
                        if (!(_a = typeof stack3, ((_a !== 'object' && _a !== 'function' ) || stack3 == null || stack3[AX_CLASS_SYMBOL]))) {
                           stack3 = stack3.easeOutBounce(stack4, stack5, stack6, stack7);
                        } else {
                            // 7 0::easeOutBounce
                            {
                                let t = stack3;
                                const m = t.$BgeaseOutBounce || (t = sec.box(stack3), t.$BgeaseOutBounce);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgeaseOutBounce (stack4, stack5, stack6, stack7);
                                } else { 
                                    stack3 = stack3.axCallProperty($names[4], [stack4, stack5, stack6, stack7], false);
                                }
                            }
                        }
                        stack1 = context.call(stack1, stack2, [stack3], scope0);
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[5], stack1, stack0);
                        }
                    case 141:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/panels/GameTitlePanel/m_update.js
})