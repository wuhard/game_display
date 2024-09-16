(function anonymous(context
) {
/*
	Index: 564
	Path:  Box2D/Common/Math/b2Math.DistanceSquared
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_DistanceSquared(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
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

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::x
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['x'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgx;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::x
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack1 = local2['x'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        stack0 -= stack1;
        stack0 = +stack0;
        local3 = stack0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::y
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['y'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgy;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::y
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack1 = local2['y'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        stack0 -= stack1;
        stack0 = +stack0;
        local4 = stack0;
        stack0 = local3;
//        stack1 = local3;// JIT: redundant assigment, value unused
        stack0 *= local3;
        stack1 = local4;
//        stack2 = local4;// JIT: redundant assigment, value unused
        stack1 *= local4;
        stack0 += stack1;
        return (+stack0);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/DistanceSquared.js
})