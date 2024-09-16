(function anonymous(context
) {
/*
	Index: 1074
	Path:  entities/SmallHero::m_splatCheck
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_splatCheck(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local2 = false;
                        stack0 = local2;
                        stack0 = !local2;
                        stack1 = stack0;
                        if (!stack1) { p = 18; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::isSplatted
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgisSplatted;
                        stack1 = false;
                        stack0 = stack0 == false;
                    case 18:
                        if (!stack0) { p = 56; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack1 = this.$Bgheart;
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack1;
                                const m = t.$BgGetPosition || (t = sec.box(stack1), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BgGetPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::heart
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2Body  */ 
                        stack2 = this.$Bgheart;
                        if (!(_a = typeof stack2, ((_a !== 'object' && _a !== 'function' ) || stack2 == null || stack2[AX_CLASS_SYMBOL]))) {
                           stack2 = stack2.GetPosition();
                        } else {
                            // 7 0::GetPosition
                            {
                                let t = stack2;
                                const m = t.$BgGetPosition || (t = sec.box(stack2), t.$BgGetPosition);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgGetPosition ();
                                } else { 
                                    stack2 = stack2.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        //Possible type:7 0:Box2D.Dynamics::b2Body
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['y'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack3 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgGetBody(stack1, stack2, true);
                        if (!stack0) { p = 56; continue; };
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local2 = true;
                    case 56:
                        stack0 = local2;
                        stack0 = !!local2;
                        stack1 = stack0;
                        if (!stack1) { p = 69; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::justUnsplatted
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgjustUnsplatted;
                        stack0 = !!stack0;
                    case 69:
                        //JIT: Emit inline return
                        if (!stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::makeHeroExplodeAsap
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgmakeHeroExplodeAsap = true;
                    case 78:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/SmallHero/m_splatCheck.js
})