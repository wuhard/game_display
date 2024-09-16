(function anonymous(context
) {
/*
	Index: 347
	Path:  Box2D/Dynamics/b2Body::m_GetLinearVelocityFromWorldPoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetLinearVelocityFromWorldPoint(local1 /* b2Vec2 */) {
        // Possible use a real "this"

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
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$Bgm_linearVelocity;
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
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgm_angularVelocity;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
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
//        stack4 = this;// JIT: redundant assigment, value unused
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
        stack2 *= stack3;
        stack1 -= stack2;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_linearVelocity
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack2 = this.$Bgm_linearVelocity;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_angularVelocity
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$Bgm_angularVelocity;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
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
//        stack5 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
        stack5 = this.$Bgm_sweep;
        // 7 0::c
        //Possible type:7 0:Box2D.Common.Math::b2Sweep
        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
            stack5 = stack5['c'];
        } else {
            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
            stack5 = temp.$Bgc;
            if (stack5 === undefined || typeof stack5 === 'function') {
                stack5 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::x
        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
            stack5 = stack5['x'];
        } else {
            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
            stack5 = temp.$Bgx;
            if (stack5 === undefined || typeof stack5 === 'function') {
                stack5 = temp.axGetProperty($names[1]);
            }
        }
        stack4 -= stack5;
        stack3 *= stack4;
        stack2 += stack3;
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_GetLinearVelocityFromWorldPoint.js
})