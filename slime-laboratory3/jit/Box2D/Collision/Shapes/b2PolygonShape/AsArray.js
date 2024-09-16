(function anonymous(context
) {
/*
	Index: 1406
	Path:  Box2D/Collision/Shapes/b2PolygonShape.AsArray
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Collision.Shapes::b2PolygonShape
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_AsArray(local1 /* Array */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
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
            _e || console.warn('[AsArray] Coerce Type not found:', "b2PolygonShape")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
//        stack0 = local3;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        if (!(_a = typeof local3, ((_a !== 'object' && _a !== 'function' ) || local3 == null || local3[AX_CLASS_SYMBOL]))) {
            local3.SetAsArray(local1, local2);
        } else {
            // 7 0::SetAsArray
            {
                let t = local3;
                const m = t.$BgSetAsArray || (t = sec.box(local3), t.$BgSetAsArray);
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
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/AsArray.js
})