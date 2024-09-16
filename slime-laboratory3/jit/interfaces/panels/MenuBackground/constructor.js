(function anonymous(context
) {
/*
	Index: 1933
	Path:  interfaces/panels/MenuBackground::constructor
	Type:  Public
	Kind:  null
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_constructor() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::MenuBackgroundSprite
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        stack1 = context.constructprop($names[0], stack1, []);
                        // 7 2:interfaces.panels::panel
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::MenuBackgroundSprite  */ 
                        this.$Bgpanel = stack1;
                        // 7 0::addChild
                        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 2:interfaces.panels::panel
                        //Possible type:7 0::MenuBackgroundSprite
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::MenuBackgroundSprite  */ 
                        stack1 = this.$Bgpanel;
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgaddChild(stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
//                        stack3 = 0;// JIT: redundant assigment, value unused
                        //IR: DUP changed to PUSH*, reason: prevent optimisation
//                        stack4 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        // 7 2:interfaces.panels::fog_3_sin_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfog_3_sin_1 = 0;
                        stack2 = local3;
                        //IR: KILL removed, reason: prevent optimisation
                        stack3 = local3;
                        local3 = stack3;
                        // 7 2:interfaces.panels::fog_2_sin_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfog_2_sin_1 = (+stack2);
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        //IR: KILL removed, reason: prevent optimisation
                        // 7 2:interfaces.panels::fog_1_sin_1
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgfog_1_sin_1 = (+local3);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 2:interfaces.panels::sin_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgsin_counter = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack2 = 60;// JIT: redundant assigment, value unused
                        stack1 *= 60;
                        // 7 2:interfaces.panels::fog_1_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgfog_1_counter = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack1 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack1 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$Bgrandom ();
                                } else { 
                                    stack1 = __Math.axCallProperty($names[2], [], false);
                                }
                            }
                        }
//                        stack2 = 60;// JIT: redundant assigment, value unused
                        stack1 *= 60;
                        // 7 2:interfaces.panels::fog_2_counter
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bgfog_2_counter = (stack1|0);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 2:interfaces.panels::rotation_sin
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgrotation_sin = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0.1;// JIT: redundant assigment, value unused
                        // 7 2:interfaces.panels::rotation_speed
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgrotation_speed = 0.1;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0::IS_IPHONE_X
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_IPHONE_X'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_IPHONE_X;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (!stack0) { p = 123; continue; };
//                        stack0 = 24;// JIT: redundant assigment, value unused
                        local1 = 24;
//                        stack0 = 4;// JIT: redundant assigment, value unused
                        local2 = 4;
                        //JIT: Emit inline return
                        return;
                    case 123:
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                    case 129:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/panels/MenuBackground/constructor.js
})