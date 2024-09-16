(function anonymous(context
) {
/*
	Index: 555
	Path:  Box2D/Common/Math/b2Math.CrossVF
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_CrossVF(local1 /* b2Vec2 */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        // local3 is assigned before read, skip init
        let local3 = undefined
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
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
        // JIT: potential type:7 0::Number
        stack1 = local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::y
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['y'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        stack1 *= stack2;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local1;
        // 7 0::x
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack3 = local1['x'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack3 = temp.$Bgx;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        stack2 *= stack3;
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        //IR: Drop coerce, reason: redundant
        local3 = stack0;
        stack0 = local3;
        return local3;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/CrossVF.js
})