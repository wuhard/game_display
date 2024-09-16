(function anonymous(context
) {
/*
	Index: 559
	Path:  Box2D/Common/Math/b2Math.MulX
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_MulX(local1 /* b2Transform */, local2 /* b2Vec2 */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local3 = null;
        // 7 0::MulMV
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::R
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['R'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgR;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local2;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack0 = this.$BgMulMV(stack1, local2);
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[1], true, false);
            _e || console.warn('[MulX] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['x'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['position'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgposition;
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
        stack1 += stack2;
        // 7 0::x
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.x = stack1;
        } else {
            context.setproperty($names[2], stack1, local3);
        }
//        stack0 = local3;// JIT: redundant assigment, value unused
//        stack1 = local3;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['y'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['position'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgposition;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
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
        stack1 += stack2;
        // 7 0::y
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.y = stack1;
        } else {
            context.setproperty($names[4], stack1, local3);
        }
        stack0 = local3;
        return local3;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/MulX.js
})