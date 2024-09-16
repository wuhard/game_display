(function anonymous(context
) {
/*
	Index: 502
	Path:  Box2D/Collision/b2AABB.Combine
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Collision::b2AABB
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Combine(local1 /* b2AABB */, local2 /* b2AABB */) {
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
            _e || console.warn('[Combine] Coerce Type not found:', "b2AABB")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0:Box2D.Collision::b2AABB// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
            local3.Combine(local1, local2);
        } else {
            // 7 0::Combine
            {
                let t = local3;
                const m = t.$BgCombine || (t = sec.box(local3), t.$BgCombine);
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
//# sourceURL=http://jit/Box2D/Collision/b2AABB/Combine.js
})