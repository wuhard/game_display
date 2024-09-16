(function anonymous(context
) {
/*
	Index: 1426
	Path:  Box2D/Collision/Shapes/b2PolygonShape::m_GetVertices
	Type:  Public
	Kind:  Method
	Super: Box2D/Collision/Shapes/b2Shape
	Return: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetVertices() {
        // Possible use a real "this"

        let stack0 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
        /* We sure that this safe get, represented in TRAIT as Slot, type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        stack0 = this.$Bgm_vertices;
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/m_GetVertices.js
})