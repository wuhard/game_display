(function anonymous(context
) {
/*
	Index: 690
	Path:  Box2D/Common/Math/b2Mat22.FromAngle
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Mat22
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_FromAngle(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        stack0 = context.construct(stack0, []);
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[0], true, false);
            _e || console.warn('[FromAngle] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local2 = stack0;
//        stack0 = local2;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof local2, ((_a !== 'object' && _a !== 'function' ) || local2 == null || local2[AX_CLASS_SYMBOL]))) {
            local2.Set(local1);
        } else {
            // 7 0::Set
            {
                let t = local2;
                const m = t.$BgSet || (t = sec.box(local2), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, local1);
                } else { 
                   local2.axCallProperty($names[1], [local1], false);
                }
            }
        }
        stack0 = local2;
        return local2;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/FromAngle.js
})