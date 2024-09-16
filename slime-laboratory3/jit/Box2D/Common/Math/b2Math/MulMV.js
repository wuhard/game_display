(function anonymous(context
) {
/*
	Index: 557
	Path:  Box2D/Common/Math/b2Math.MulMV
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_MulMV(local1 /* b2Mat22 */, local2 /* b2Vec2 */) {
        // Possible use a real "this"
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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::col1
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['col1'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgcol1;
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
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local2;
        // 7 0::x
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack2 = local2['x'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        stack1 *= stack2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgcol2;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::x
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::y
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['y'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[4]);
            }
        }
        stack2 *= stack3;
        stack1 += stack2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::col1
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['col1'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgcol1;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::x
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['x'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        stack2 *= stack3;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack3 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack3 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack3 = temp.$Bgcol2;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::y
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack4 = local2;
        // 7 0::y
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack4 = local2['y'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack4 = temp.$Bgy;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[4]);
            }
        }
        stack3 *= stack4;
        stack2 += stack3;
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        //IR: Drop coerce, reason: redundant
        local3 = stack0;
        stack0 = local3;
        return local3;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/MulMV.js
})