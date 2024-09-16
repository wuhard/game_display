(function anonymous(context
) {
/*
	Index: 333
	Path:  Box2D/Dynamics/b2Body::m_ApplyForce
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_ApplyForce(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
        // Possible use a real "this"

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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_type
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bgm_type;
                        // 7 0::b2_dynamicBody
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$Bgb2_dynamicBody;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        if (stack1 == stack0) { p = 14; continue; };
                        return;
                    case 14:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        stack0 = this.$BgIsAwake();
                        stack1 = false;
                        if (false != stack0) { p = 30; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgSetAwake(true);
                    case 30:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_force
                        //Possible type:7 0::int
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_force;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_force
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_force;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0::x
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.x = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_force
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgm_force;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_force
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$Bgm_force;
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
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack2 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack2 = temp.$Bgy;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack1 += stack2;
                        // 7 0::y
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.y = stack1;
                        } else {
                            context.setproperty($names[2], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_torque
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgm_torque;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack2 = local2;
                        // 7 0::x
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack2 = local2['x'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack3 = this.$Bgm_sweep;
                        // 7 0::c
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['c'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgc;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::x
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['x'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgx;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack2 -= stack3;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack3 = local1;
                        // 7 0::y
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack3 = local1['y'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack2 *= stack3;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack3 = local2;
                        // 7 0::y
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack3 = local2['y'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
                        stack4 = this.$Bgm_sweep;
                        // 7 0::c
                        //Possible type:7 0:Box2D.Common.Math::b2Sweep
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['c'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgc;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0::y
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['y'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgy;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[2]);
                            }
                        }
                        stack3 -= stack4;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack4 = local1;
                        // 7 0::x
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack4 = local1['x'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack4 = temp.$Bgx;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack3 *= stack4;
                        stack2 -= stack3;
                        stack1 += stack2;
                        // 7 0:http://www.box2d.org/ns/b2internal::m_torque
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgm_torque = (+stack1);
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_ApplyForce.js
})