(function anonymous(context
) {
/*
	Index: 571
	Path:  Box2D/Common/Math/b2Math.AbsM
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Mat22
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_AbsM(local1 /* b2Mat22 */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
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
        // 7 0:Box2D.Common.Math::b2Mat22
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$Bgb2Mat22;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::AbsV
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
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgAbsV(stack2);
        // 7 0::AbsV
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
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack2 = this.$BgAbsV(stack3);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.FromVV(stack1, stack2);
        } else {
            // 7 0::FromVV
            {
                let t = stack0;
                const m = t.$BgFromVV || (t = sec.box(stack0), t.$BgFromVV);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgFromVV (stack1, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[0], true, false);
            _e || console.warn('[AbsM] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local2 = stack0;
        stack0 = local2;
        return local2;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/AbsM.js
})