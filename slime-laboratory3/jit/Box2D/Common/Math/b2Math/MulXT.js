(function anonymous(context
) {
/*
	Index: 560
	Path:  Box2D/Common/Math/b2Math.MulXT
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_MulXT(local1 /* b2Transform */, local2 /* b2Vec2 */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local3 = null;
//        stack0 = NaN;// JIT: redundant assigment, value unused
        local4 = NaN;
        // 7 0::SubtractVV
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['position'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgposition;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[0]);
            }
        }
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack0 = this.$BgSubtractVV(local2, stack2);
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[1], true, false);
            _e || console.warn('[MulXT] Coerce Type not found:', "b2Vec2")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
        // 7 0::x
        //Possible type:undefined
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack0 = local3['x'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack0 = temp.$Bgx;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::R
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['R'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgR;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::col1
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['col1'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgcol1;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
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
        stack0 *= stack1;
//        stack1 = local3;// JIT: redundant assigment, value unused
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::R
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['R'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BgR;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::col1
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['col1'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgcol1;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[5]);
            }
        }
        stack1 *= stack2;
        stack0 += stack1;
        stack0 = +stack0;
        local4 = stack0;
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
        // 7 0::R
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['R'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BgR;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::col2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['col2'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgcol2;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[6]);
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
        stack1 *= stack2;
//        stack2 = local3;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack2 = local3['y'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[5]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack3 = local1;
        // 7 0::R
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack3 = local1['R'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack3 = temp.$BgR;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::col2
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['col2'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgcol2;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[6]);
            }
        }
        // 7 0::y
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[5]);
            }
        }
        stack2 *= stack3;
        stack1 += stack2;
        // 7 0::y
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.y = stack1;
        } else {
            context.setproperty($names[5], stack1, local3);
        }
//        stack0 = local3;// JIT: redundant assigment, value unused
//        stack1 = local4;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])){
            local3.x = local4;
        } else {
            context.setproperty($names[2], local4, local3);
        }
        stack0 = local3;
        return local3;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/MulXT.js
})