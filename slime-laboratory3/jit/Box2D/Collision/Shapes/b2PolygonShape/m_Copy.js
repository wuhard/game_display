(function anonymous(context
) {
/*
	Index: 1413
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_Copy
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0:Box2D.Collision.Shapes::b2Shape
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Copy() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Collision.Shapes::b2PolygonShape
        stack0 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2PolygonShape/b2Shape/Object
        stack0 = context.constructFast(stack0, [], $names[0]);
        //IR: Drop coerce, reason: redundant
        local1 = stack0;
//        stack0 = local1;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
            local1.Set(this);
        } else {
            // 7 0::Set
            {
                let t = local1;
                const m = t.$BgSet || (t = sec.box(local1), t.$BgSet);
                if( typeof m === "function" ) { 
                    m.call(t, this);
                } else { 
                   local1.axCallProperty($names[1], [this], false);
                }
            }
        }
        stack0 = local1;
        return local1;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_Copy.js
})