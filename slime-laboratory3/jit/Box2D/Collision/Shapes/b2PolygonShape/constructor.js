(function anonymous(context
) {
/*
	Index: 1431
	Path:  Box2D/Collision/Shapes/b2PolygonShape::constructor
	Type:  Public
	Kind:  null
	Super: Box2D/Collision/Shapes/b2Shape
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"

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
        context.savedScope.superConstructor.call(this, );
        // 7 0:http://www.box2d.org/ns/b2internal::m_type
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0:http://www.box2d.org/ns/b2internal::e_polygonShape
        temp = scope0.findScopeProperty($names[1], true, false);
        stack1 = temp.$Bge_polygonShape;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[1]);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_type
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_type = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[2], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[2]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_centroid
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_centroid = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
        temp = scope0.findScopeProperty($names[3], true, false);
        stack1 = temp.$BgVector;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[3]);
        }
        // 7 0:Box2D.Common.Math::b2Vec2
        temp = scope0.findScopeProperty($names[2], true, false);
        stack2 = temp.$Bgb2Vec2;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        stack1 = sec.applyType(stack1, [stack2]);
        //JIT: Possible source:9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
        stack1 = context.construct(stack1, []);
        // 7 0:http://www.box2d.org/ns/b2internal::m_vertices
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        this.$Bgm_vertices = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
        temp = scope0.findScopeProperty($names[3], true, false);
        stack1 = temp.$BgVector;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[3]);
        }
        // 7 0:Box2D.Common.Math::b2Vec2
        temp = scope0.findScopeProperty($names[2], true, false);
        stack2 = temp.$Bgb2Vec2;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[2]);
        }
        stack1 = sec.applyType(stack1, [stack2]);
        //JIT: Possible source:9 {3, 0:Box2D.Common.Math, 0:Box2D.Collision.Shapes, 0, 0:__AS3__.vec, 3, 2:Box2D.Collision.Shapes, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Dynamics, 0:Box2D.Collision, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2PolygonShape, 5:Box2D.Collision.Shapes:b2Shape}::Vector
        stack1 = context.construct(stack1, []);
        // 7 0:http://www.box2d.org/ns/b2internal::m_normals
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Common.Math::b2Vec2>  */ 
        this.$Bgm_normals = stack1;
        return;
    }
//# sourceURL=http://jit/Box2D/Collision/Shapes/b2PolygonShape/constructor.js
})