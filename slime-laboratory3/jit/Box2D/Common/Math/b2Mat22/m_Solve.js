(function anonymous(context
) {
/*
	Index: 702
	Path:  Box2D/Common/Math/b2Mat22::m_Solve
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Solve(local1 /* b2Vec2 */, local2 /* Number */, local3 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
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
        let stack4 = undefined;
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgcol1;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 = +stack0;
                        local4 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgcol2;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 = +stack0;
                        local5 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::col1
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgcol1;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = +stack0;
                        local6 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::col2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgcol2;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 = +stack0;
                        local7 = stack0;
                        stack0 = local4;
//                        stack1 = local7;// JIT: redundant assigment, value unused
                        stack0 *= local7;
                        stack1 = local5;
//                        stack2 = local6;// JIT: redundant assigment, value unused
                        stack1 *= local6;
                        stack0 -= stack1;
                        stack0 = +stack0;
                        stack1 = stack0;
                        local8 = stack1;
                        stack1 = 0;
                        if (0 == stack0) { p = 71; continue; };
                        stack0 = 1;
//                        stack1 = local8;// JIT: redundant assigment, value unused
                        stack0 /= local8;
                        stack0 = +stack0;
                        local8 = stack0;
                    case 71:
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local1;
                        stack1 = local8;
                        stack2 = local7;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local2;
                        stack2 *= local2;
                        stack3 = local5;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local3;
                        stack3 *= local3;
                        stack2 -= stack3;
                        stack1 *= stack2;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.x = stack1;
                        } else {
                            context.setproperty($names[0], stack1, local1);
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack0 = local1;
                        stack1 = local8;
                        stack2 = local4;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack3 = local3;
                        stack2 *= local3;
                        stack3 = local6;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack4 = local2;
                        stack3 *= local2;
                        stack2 -= stack3;
                        stack1 *= stack2;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
                            local1.y = stack1;
                        } else {
                            context.setproperty($names[1], stack1, local1);
                        }
                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
                        stack0 = local1;
                        return local1;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/m_Solve.js
})