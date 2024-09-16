(function anonymous(context
) {
/*
	Index: 506
	Path:  Box2D/Collision/b2AABB::m_Contains
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Contains(local1 /* b2AABB */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local2 = true;
                        stack0 = local2;
                        stack0 = !!local2;
                        stack1 = stack0;
                        if (!stack1) { p = 27; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BglowerBound;
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
//                        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::lowerBound
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['lowerBound'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BglowerBound;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 = stack0 <= stack1;
                    case 27:
                        //IR: CONVERT_B removed, reason: arguments strictly boolean
                        local2 = stack0;
                        stack0 = local2;
                        stack0 = !!local2;
                        stack1 = stack0;
                        if (!stack1) { p = 52; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BglowerBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::lowerBound
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack1 = local1['lowerBound'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack1 = temp.$BglowerBound;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack0 = stack0 <= stack1;
                    case 52:
                        //IR: CONVERT_B removed, reason: arguments strictly boolean
                        local2 = stack0;
                        stack0 = local2;
                        stack0 = !!local2;
                        stack1 = stack0;
                        if (!stack1) { p = 77; continue; };
//                        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::upperBound
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['upperBound'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgupperBound;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgupperBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 = stack0 <= stack1;
                    case 77:
                        //IR: CONVERT_B removed, reason: arguments strictly boolean
                        local2 = stack0;
                        stack0 = local2;
                        stack0 = !!local2;
                        stack1 = stack0;
                        if (!stack1) { p = 102; continue; };
//                        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::upperBound
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['upperBound'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgupperBound;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BgupperBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack0 = stack0 <= stack1;
                    case 102:
                        //IR: CONVERT_B removed, reason: arguments strictly boolean
                        local2 = stack0;
                        stack0 = local2;
                        return (!!local2);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/b2AABB/m_Contains.js
})