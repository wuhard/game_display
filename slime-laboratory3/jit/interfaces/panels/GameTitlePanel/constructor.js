(function anonymous(context
) {
/*
	Index: 1940
	Path:  interfaces/panels/GameTitlePanel::constructor
	Type:  Public
	Kind:  null
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::SplashTitle
        stack1 = scope0.findScopeProperty($names[0], true, false);
        stack1 = context.constructprop($names[0], stack1, []);
        // 7 0::titleSprite
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::SplashTitle  */ 
        this.$BgtitleSprite = stack1;
        // 7 0::addChild
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:7 0::SplashTitle
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack1 = this.$BgtitleSprite;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgaddChild(stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack0 = this.$BgtitleSprite;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:7 0::SplashTitle
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack0 = this.$BgtitleSprite;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = 0;
        } else {
            context.setproperty($names[2], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        //Possible type:7 0::SplashTitle
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack0 = this.$BgtitleSprite;
//        stack1 = 1;// JIT: redundant assigment, value unused
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
                   stack0.axCallProperty($names[3], [1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 1:interfaces.panels:GameTitlePanel::PROGRESSION
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgPROGRESSION = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
//        stack2 = this;// JIT: redundant assigment, value unused
//        stack3 = this;// JIT: redundant assigment, value unused
//        stack4 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack5 = 0;// JIT: redundant assigment, value unused
        local1 = 0;
        // 7 1:interfaces.panels:GameTitlePanel::t_diff
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_diff = 0;
        stack3 = local1;
        //IR: KILL removed, reason: prevent optimisation
        stack4 = local1;
        local1 = stack4;
        // 7 1:interfaces.panels:GameTitlePanel::t_start
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_start = (+stack3);
        stack2 = local1;
        //IR: KILL removed, reason: prevent optimisation
        stack3 = local1;
        local1 = stack3;
        // 7 1:interfaces.panels:GameTitlePanel::t_time
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_time = (+stack2);
//        stack1 = local1;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 1:interfaces.panels:GameTitlePanel::t_tick
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt_tick = (+local1);
//        stack0 = this;// JIT: redundant assigment, value unused
        stack1 = this;
//        stack2 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack3 = 0;// JIT: redundant assigment, value unused
        local1 = 0;
        // 7 1:interfaces.panels:GameTitlePanel::counter_2
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
            stack1.counter_2 = 0;
        } else {
            context.setproperty($names[4], 0, stack1);
        }
//        stack1 = local1;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 1:interfaces.panels:GameTitlePanel::counter_1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgcounter_1 = (local1|0);
        return;
    }
//# sourceURL=http://jit/interfaces/panels/GameTitlePanel/constructor.js
})