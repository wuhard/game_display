(function anonymous(context
) {
/*
	Index: 691
	Path:  Box2D/Common/Math/b2Mat22.FromVV
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Common.Math::b2Mat22
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_FromVV(local1 /* b2Vec2 */, local2 /* b2Vec2 */) {
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
        stack0 = this;
        stack0 = context.construct(stack0, []);
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[0], true, false);
            _e || console.warn('[FromVV] Coerce Type not found:', "b2Mat22")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
            local3.SetVV(local1, local2);
        } else {
            // 7 0::SetVV
            {
                let t = local3;
                const m = t.$BgSetVV || (t = sec.box(local3), t.$BgSetVV);
                if( typeof m === "function" ) { 
                    m.call(t, local1, local2);
                } else { 
                   local3.axCallProperty($names[1], [local1, local2], false);
                }
            }
        }
        stack0 = local3;
        return local3;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Mat22/FromVV.js
})