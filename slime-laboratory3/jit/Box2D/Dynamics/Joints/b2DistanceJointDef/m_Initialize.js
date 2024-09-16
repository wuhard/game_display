(function anonymous(context
) {
/*
	Index: 1551
	Path:  Box2D/Dynamics/Joints/b2DistanceJointDef::m_Initialize
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2JointDef
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(6)['$BgMath']; // :Math

    return function compiled_m_Initialize(local1 /* b2Body */, local2 /* b2Body */, local3 /* b2Vec2 */, local4 /* b2Vec2 */) {
        // Possible use a real "this"
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::bodyA
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::bodyA
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.bodyA = local1;
        } else {
            context.setproperty($names[0], local1, stack0);
        }
        // 7 0::bodyB
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::bodyB
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.bodyB = local2;
        } else {
            context.setproperty($names[1], local2, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::localAnchorA
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BglocalAnchorA;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$BgbodyA;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local3;
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.GetLocalPoint(local3);
        } else {
            // 7 0::GetLocalPoint
            {
                let t = stack1;
                const m = t.$BgGetLocalPoint || (t = sec.box(stack1), t.$BgGetLocalPoint);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgGetLocalPoint (local3);
                } else { 
                    stack1 = stack1.axCallProperty($names[2], [local3], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[3], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::localAnchorB
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BglocalAnchorB;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$BgbodyB;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local4;
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.GetLocalPoint(local4);
        } else {
            // 7 0::GetLocalPoint
            {
                let t = stack1;
                const m = t.$BgGetLocalPoint || (t = sec.box(stack1), t.$BgGetLocalPoint);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgGetLocalPoint (local4);
                } else { 
                    stack1 = stack1.axCallProperty($names[2], [local4], false);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[3], [stack1], false);
                }
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack0 = local4;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack0 = local4['x'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack0 = temp.$Bgx;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::x
        //Possible type:7 0::bodyB
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['x'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        stack0 -= stack1;
        stack0 = +stack0;
        local5 = stack0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack0 = local4;
        // 7 0::y
        if (!(local4 != undefined && local4[AX_CLASS_SYMBOL])) {
            stack0 = local4['y'];
        } else {
            temp = local4[AX_CLASS_SYMBOL] ? local4 : sec.box(local4);
            stack0 = temp.$Bgy;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[5]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::y
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['y'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        stack0 -= stack1;
        stack0 = +stack0;
        local6 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack1 = __Math;// JIT: redundant assigment, value unused
        stack2 = local5;
//        stack3 = local5;// JIT: redundant assigment, value unused
        stack2 *= local5;
        stack3 = local6;
//        stack4 = local6;// JIT: redundant assigment, value unused
        stack3 *= local6;
        stack2 += stack3;
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack1 = __Math.sqrt(stack2);
        } else {
            // 7 0::sqrt
            {
                let t = __Math;
                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                if( typeof m === "function" ) { 
                    stack1 = t.$Bgsqrt (stack2);
                } else { 
                    stack1 = __Math.axCallProperty($names[7], [stack2], false);
                }
            }
        }
        // 7 0::length
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bglength = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::frequencyHz
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgfrequencyHz = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::dampingRatio
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgdampingRatio = 0;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJointDef/m_Initialize.js
})