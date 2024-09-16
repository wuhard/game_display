(function anonymous(context
) {
/*
	Index: 568
	Path:  Box2D/Common/Math/b2Math.MulTMM
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Mat22
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_MulTMM(local1 /* b2Mat22 */, local2 /* b2Mat22 */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
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
        // 7 0::Dot
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack1 = this;// JIT: redundant assigment, value unused
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::col1
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['col1'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$Bgcol1;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[1]);
            }
        }
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgDot(stack2, stack3);
        // 7 0::Dot
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack2 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack3 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack3 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack3 = temp.$Bgcol2;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack4 = local2;
        // 7 0::col1
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack4 = local2['col1'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack4 = temp.$Bgcol1;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[1]);
            }
        }
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack2 = this.$BgDot(stack3, stack4);
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        //IR: Drop coerce, reason: redundant
        local3 = stack0;
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
        // 7 0::Dot
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack1 = this;// JIT: redundant assigment, value unused
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
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack3 = local2;
        // 7 0::col2
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack3 = local2['col2'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack3 = temp.$Bgcol2;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgDot(stack2, stack3);
        // 7 0::Dot
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack2 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack3 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack3 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack3 = temp.$Bgcol2;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack4 = local2;
        // 7 0::col2
        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
            stack4 = local2['col2'];
        } else {
            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
            stack4 = temp.$Bgcol2;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[2]);
            }
        }
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack2 = this.$BgDot(stack3, stack4);
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        //IR: Drop coerce, reason: redundant
        local4 = stack0;
        // 7 0:Box2D.Common.Math::b2Mat22
        temp = scope0.findScopeProperty($names[3], true, false);
        stack0 = temp.$Bgb2Mat22;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[3]);
        }
//        stack1 = local3;// JIT: redundant assigment, value unused
//        stack2 = local4;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.FromVV(local3, local4);
        } else {
            // 7 0::FromVV
            {
                let t = stack0;
                const m = t.$BgFromVV || (t = sec.box(stack0), t.$BgFromVV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgFromVV (local3, local4);
                } else { 
                    stack0 = stack0.axCallProperty($names[4], [local3, local4], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[3], true, false);
            _e || console.warn('[MulTMM] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        stack1 = stack0;
        local5 = stack1;
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/MulTMM.js
})