(function anonymous(context
) {
/*
	Index: 1432
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_Reserve
	Type:  Private
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Reserve(local1 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        // 7 0::length
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['length'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bglength;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 |= 0;
                        local2 = stack0;
                        { p = 44; continue; };
                    case 15:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_vertices;
                        stack1 = local2;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack2 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack2 = context.constructFast(stack2, [], $names[1]);
                        context.setproperty(context.runtimename($names[2], local2), stack2, stack0);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
                        //Possible type:29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
                        stack0 = this.$Bgm_normals;
                        stack1 = local2;
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack2 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack2 = context.constructFast(stack2, [], $names[1]);
                        context.setproperty(context.runtimename($names[2], local2), stack2, stack0);
                        local2 = (local2 | 0) + 1;
                    case 44:
                        stack0 = local2;
                        // JIT: potential type:7 0::int
                        stack1 = local1;
                        if (local1 > local2) { p = 15; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_Reserve.js
})