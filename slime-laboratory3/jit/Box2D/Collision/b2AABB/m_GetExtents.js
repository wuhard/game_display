(function anonymous(context
) {
/*
	Index: 505
	Path:  Box2D/Collision/b2AABB::m_GetExtents
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetExtents() {
        // Possible use a real "this"

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
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::upperBound
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$BgupperBound;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::lowerBound
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack2 = this.$BglowerBound;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        stack1 -= stack2;
//        stack2 = 2;// JIT: redundant assigment, value unused
        stack1 /= 2;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::upperBound
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack2 = this.$BgupperBound;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::lowerBound
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack3 = this.$BglowerBound;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        stack2 -= stack3;
//        stack3 = 2;// JIT: redundant assigment, value unused
        stack2 /= 2;
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Collision/b2AABB/m_GetExtents.js
})