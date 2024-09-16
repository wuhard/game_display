(function anonymous(context
) {
/*
	Index: 1409
	Path:  Box2D/Collision/Shapes/b2PolygonShape.AsOrientedBox
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:Box2D.Collision.Shapes::b2PolygonShape
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_AsOrientedBox(local1 /* Number */, local2 /* Number */, local3 /* b2Vec2 */ = null, local4 /* Number */ = 0) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local4 = (+local4);
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
        stack0 = this;
        stack0 = context.construct(stack0, []);
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[0], true, false);
            _e || console.warn('[AsOrientedBox] Coerce Type not found:', "b2PolygonShape")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        stack1 = stack0;
        local5 = stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack3 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetAsOrientedBox(local1, local2, local3, local4);
        } else {
            // 7 0::SetAsOrientedBox
            {
                let t = stack0;
                const m = t.$BgSetAsOrientedBox || (t = sec.box(stack0), t.$BgSetAsOrientedBox);
                if( typeof m === "function" ) { 
                    m.call(t, local1, local2, local3, local4);
                } else { 
                   stack0.axCallProperty($names[1], [local1, local2, local3, local4], false);
                }
            }
        }
        stack0 = local5;
        return local5;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/AsOrientedBox.js
})