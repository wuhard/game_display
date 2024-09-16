(function anonymous(context
) {
/*
	Index: 380
	Path:  Box2D/Collision/Shapes/b2Shape.TestOverlap
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_TestOverlap(local1 /* b2Shape */, local2 /* b2Transform */, local3 /* b2Shape */, local4 /* b2Transform */) {
        // Possible use a real "this"
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Collision::b2DistanceInput
        stack0 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2DistanceInput/Object
        stack0 = context.constructFast(stack0, [], $names[0]);
        //IR: Drop coerce, reason: redundant
        stack1 = stack0;
        local5 = stack1;
        // 7 0:Box2D.Collision::b2DistanceProxy
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2DistanceProxy/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 0::proxyA
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.proxyA = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
//        stack0 = local5;// JIT: redundant assigment, value unused
        // 7 0::proxyA
        //Possible type:7 0:Box2D.Collision::b2DistanceInput
        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
            stack0 = local5['proxyA'];
        } else {
            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
            stack0 = temp.$BgproxyA;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(local1);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, local1);
                } else { 
                   stack0.axCallProperty($names[3], [local1], false);
                }
            }
        }
//        stack0 = local5;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Collision::b2DistanceProxy
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2DistanceProxy/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 0::proxyB
        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
            local5.proxyB = stack1;
        } else {
            context.setproperty($names[4], stack1, local5);
        }
//        stack0 = local5;// JIT: redundant assigment, value unused
        // 7 0::proxyB
        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
            stack0 = local5['proxyB'];
        } else {
            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
            stack0 = temp.$BgproxyB;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2Shape// JIT: redundant assigment, value unused
        stack1 = local3;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Set(local3);
        } else {
            // 7 0::Set
            {
                let t = stack0;
                const m = t.$BgSet || (t = sec.box(stack0), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, local3);
                } else { 
                   stack0.axCallProperty($names[3], [local3], false);
                }
            }
        }
//        stack0 = local5;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::transformA
        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
            local5.transformA = local2;
        } else {
            context.setproperty($names[5], local2, local5);
        }
//        stack0 = local5;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack1 = local4;
        // 7 0::transformB
        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
            local5.transformB = local4;
        } else {
            context.setproperty($names[6], local4, local5);
        }
//        stack0 = local5;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::useRadii
        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
            local5.useRadii = true;
        } else {
            context.setproperty($names[7], true, local5);
        }
        // 7 0:Box2D.Collision::b2SimplexCache
        stack0 = scope0.findScopeProperty($names[8], true, false);
        //JIT: Support fast construct:b2SimplexCache/Object
        stack0 = context.constructFast(stack0, [], $names[8]);
        //IR: Drop coerce, reason: redundant
        stack1 = stack0;
        local6 = stack1;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::count
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.count = 0;
        } else {
            context.setproperty($names[9], 0, stack0);
        }
        // 7 0:Box2D.Collision::b2DistanceOutput
        stack0 = scope0.findScopeProperty($names[10], true, false);
        //JIT: Support fast construct:b2DistanceOutput/Object
        stack0 = context.constructFast(stack0, [], $names[10]);
        //IR: Drop coerce, reason: redundant
        local7 = stack0;
        // 7 0:Box2D.Collision::b2Distance
        temp = scope0.findScopeProperty($names[11], true, false);
        stack0 = temp.$Bgb2Distance;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[11]);
        }
//        stack1 = local7;// JIT: redundant assigment, value unused
//        stack2 = local6;// JIT: redundant assigment, value unused
//        stack3 = local5;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.Distance(local7, local6, local5);
        } else {
            // 7 0::Distance
            {
                let t = stack0;
                const m = t.$BgDistance || (t = sec.box(stack0), t.$BgDistance);
                if( typeof m === "function" ) { 
                    m.call(t, local7, local6, local5);
                } else { 
                   stack0.axCallProperty($names[12], [local7, local6, local5], false);
                }
            }
        }
//        stack0 = local7;// JIT: redundant assigment, value unused
        // 7 0::distance
        //Possible type:7 0:Box2D.Collision::b2Distance
        if (!(local7 != undefined && local7[AX_CLASS_SYMBOL])) {
            stack0 = local7['distance'];
        } else {
            temp = local7[AX_CLASS_SYMBOL] ? local7 : sec.box(local7);
            stack0 = temp.$Bgdistance;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[13]);
            }
        }
        stack1 = 10;
        // 7 0::Number
        temp = scope0.findScopeProperty($names[14], true, false);
        stack2 = temp.$BgNumber;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[14]);
        }
        // 7 0::MIN_VALUE
        //Possible type:7 0::Number
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['MIN_VALUE'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$BgMIN_VALUE;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[15]);
            }
        }
        stack1 *= stack2;
        stack0 = stack0 < stack1;
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2Shape/TestOverlap.js
})