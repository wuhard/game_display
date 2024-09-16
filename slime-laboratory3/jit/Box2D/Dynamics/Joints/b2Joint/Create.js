(function anonymous(context
) {
/*
	Index: 260
	Path:  Box2D/Dynamics/Joints/b2Joint.Create
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Dynamics.Joints::b2Joint
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Create(local1 /* b2JointDef */, local2 /* * */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
                        { p = 190; continue; };
                    case 10:
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJoint
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2DistanceJointDef
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack2 = temp.$Bgb2DistanceJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[1]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2DistanceJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[0]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 29:
                        // 7 0:Box2D.Dynamics.Joints::b2MouseJoint
                        stack0 = scope0.findScopeProperty($names[3], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2MouseJointDef
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack2 = temp.$Bgb2MouseJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[4]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2MouseJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[3]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 48:
                        // 7 0:Box2D.Dynamics.Joints::b2PrismaticJoint
                        stack0 = scope0.findScopeProperty($names[5], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2PrismaticJointDef
                        temp = scope0.findScopeProperty($names[6], true, false);
                        stack2 = temp.$Bgb2PrismaticJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[6]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2PrismaticJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[5]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 67:
                        // 7 0:Box2D.Dynamics.Joints::b2RevoluteJoint
                        stack0 = scope0.findScopeProperty($names[7], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2RevoluteJointDef
                        temp = scope0.findScopeProperty($names[8], true, false);
                        stack2 = temp.$Bgb2RevoluteJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[8]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2RevoluteJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[7]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 86:
                        // 7 0:Box2D.Dynamics.Joints::b2PulleyJoint
                        stack0 = scope0.findScopeProperty($names[9], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2PulleyJointDef
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack2 = temp.$Bgb2PulleyJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[10]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2PulleyJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[9]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 105:
                        // 7 0:Box2D.Dynamics.Joints::b2GearJoint
                        stack0 = scope0.findScopeProperty($names[11], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2GearJointDef
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack2 = temp.$Bgb2GearJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[12]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2GearJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[11]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 124:
                        // 7 0:Box2D.Dynamics.Joints::b2LineJoint
                        stack0 = scope0.findScopeProperty($names[13], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2LineJointDef
                        temp = scope0.findScopeProperty($names[14], true, false);
                        stack2 = temp.$Bgb2LineJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[14]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2LineJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[13]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 143:
                        // 7 0:Box2D.Dynamics.Joints::b2WeldJoint
                        stack0 = scope0.findScopeProperty($names[15], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2WeldJointDef
                        temp = scope0.findScopeProperty($names[16], true, false);
                        stack2 = temp.$Bgb2WeldJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[16]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2WeldJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[15]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 162:
                        // 7 0:Box2D.Dynamics.Joints::b2FrictionJoint
                        stack0 = scope0.findScopeProperty($names[17], true, false);
                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef
                        stack1 = local1;
                        // 7 0:Box2D.Dynamics.Joints::b2FrictionJointDef
                        temp = scope0.findScopeProperty($names[18], true, false);
                        stack2 = temp.$Bgb2FrictionJointDef;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[18]);
                        }
                        stack1 = (_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL])) ? stack2.axAsType(local1) : local1;
                        //JIT: Support fast construct:b2FrictionJoint/b2Joint/Object
                        stack0 = context.constructFast(stack0, [stack1], $names[17]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[2], true, false);
                            _e || console.warn('[Create] Coerce Type not found:', "b2Joint")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
                        { p = 380; continue; };
                    case 181:
                        { p = 380; continue; };
                        // unreachable
                    case 190:
//                        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::type
                        //Possible type:7 0:Box2D.Dynamics.Joints::b2FrictionJoint
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['type'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[19]);
                            }
                        }
                        local4 = stack0;
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_distanceJoint
                        temp = scope0.findScopeProperty($names[20], true, false);
                        stack0 = temp.$Bge_distanceJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[20]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 211; continue; };
                        stack0 = 0;
                        { p = 343; continue; };
                    case 211:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_mouseJoint
                        temp = scope0.findScopeProperty($names[21], true, false);
                        stack0 = temp.$Bge_mouseJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[21]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 226; continue; };
                        stack0 = 1;
                        { p = 343; continue; };
                    case 226:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_prismaticJoint
                        temp = scope0.findScopeProperty($names[22], true, false);
                        stack0 = temp.$Bge_prismaticJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[22]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 241; continue; };
                        stack0 = 2;
                        { p = 343; continue; };
                    case 241:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_revoluteJoint
                        temp = scope0.findScopeProperty($names[23], true, false);
                        stack0 = temp.$Bge_revoluteJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[23]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 256; continue; };
                        stack0 = 3;
                        { p = 343; continue; };
                    case 256:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_pulleyJoint
                        temp = scope0.findScopeProperty($names[24], true, false);
                        stack0 = temp.$Bge_pulleyJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[24]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 271; continue; };
                        stack0 = 4;
                        { p = 343; continue; };
                    case 271:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_gearJoint
                        temp = scope0.findScopeProperty($names[25], true, false);
                        stack0 = temp.$Bge_gearJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[25]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 286; continue; };
                        stack0 = 5;
                        { p = 343; continue; };
                    case 286:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_lineJoint
                        temp = scope0.findScopeProperty($names[26], true, false);
                        stack0 = temp.$Bge_lineJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[26]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 301; continue; };
                        stack0 = 6;
                        { p = 343; continue; };
                    case 301:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_weldJoint
                        temp = scope0.findScopeProperty($names[27], true, false);
                        stack0 = temp.$Bge_weldJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[27]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 316; continue; };
                        stack0 = 7;
                        { p = 343; continue; };
                    case 316:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Const  */ 
                        // 7 0:http://www.box2d.org/ns/b2internal::e_frictionJoint
                        temp = scope0.findScopeProperty($names[28], true, false);
                        stack0 = temp.$Bge_frictionJoint;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[28]);
                        }
                        stack1 = local4;
                        if (local4 !== stack0) { p = 331; continue; };
                        stack0 = 8;
                        { p = 343; continue; };
                    case 331:
                        { p = 341; continue; };
                        // unreachable
                        // unreachable
                    case 341:
                        stack0 = 9;
                    case 343:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 10) { p = [10, 29, 48, 67, 86, 105, 124, 143, 162, 181][stack0]; continue; } else { p = 181; continue; };
                    case 380:
                        stack0 = local3;
                        return local3;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2Joint/Create.js
})