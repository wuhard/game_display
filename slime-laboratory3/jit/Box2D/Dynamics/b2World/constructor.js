(function anonymous(context
) {
/*
	Index: 104
	Path:  Box2D/Dynamics/b2World::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* b2Vec2 */, local2 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local2 = (!!local2);
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
//        stack0 = this;// JIT: redundant assigment, value unused
        // 9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgVector;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0:Box2D.Dynamics::b2Body
        temp = scope0.findScopeProperty($names[1], true, false);
        stack2 = temp.$Bgb2Body;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[1]);
        }
        stack1 = sec.applyType(stack1, [stack2]);
        //JIT: Possible source:9 {3, 0:Box2D.Dynamics, 0:Box2D.Common.Math, 3, 0, 2:Box2D.Dynamics, 0:http://adobe.com/AS3/2006/builtin, 0:Box2D.Common, 0:Box2D.Collision, 0:Box2D.Collision.Shapes, 0:Box2D.Dynamics.Contacts, 0:Box2D.Dynamics.Joints, 0:http://www.box2d.org/ns/b2internal, 1:Box2D.Dynamics:b2World, 5:Box2D.Dynamics:b2World, 0:__AS3__.vec}::Vector
        stack1 = context.construct(stack1, []);
        // 7 3::s_stack
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 29 0:__AS3__.vec::Vector<7 0:Box2D.Dynamics::b2Body>  */ 
        this.$Bgs_stack = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Dynamics::b2ContactManager
        stack1 = scope0.findScopeProperty($names[2], true, false);
        //JIT: Support fast construct:b2ContactManager/Object
        stack1 = context.constructFast(stack1, [], $names[2]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
        this.$Bgm_contactManager = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Dynamics.Contacts::b2ContactSolver
        stack1 = scope0.findScopeProperty($names[3], true, false);
        //JIT: Support fast construct:b2ContactSolver/Object
        stack1 = context.constructFast(stack1, [], $names[3]);
        // 7 3::m_contactSolver
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Contacts::b2ContactSolver  */ 
        this.$Bgm_contactSolver = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Dynamics::b2Island
        stack1 = scope0.findScopeProperty($names[4], true, false);
        //JIT: Support fast construct:b2Island/Object
        stack1 = context.constructFast(stack1, [], $names[4]);
        // 7 3::m_island
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Island  */ 
        this.$Bgm_island = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::m_destructionListener
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2DestructionListener  */ 
        this.$Bgm_destructionListener = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::m_debugDraw
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2DebugDraw  */ 
        this.$Bgm_debugDraw = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyList
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgm_bodyList = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactList
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Contacts::b2Contact  */ 
        this.$Bgm_contactList = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::m_jointList
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
        this.$Bgm_jointList = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::m_controllerList
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Controllers::b2Controller  */ 
        this.$Bgm_controllerList = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_bodyCount
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_bodyCount = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactCount
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_contactCount = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_jointCount
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_jointCount = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_controllerCount
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_controllerCount = 0;
        // 7 3::m_warmStarting
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 3::m_warmStarting
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_warmStarting = true;
        } else {
            context.setproperty($names[5], true, stack0);
        }
        // 7 3::m_continuousPhysics
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 3::m_continuousPhysics
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_continuousPhysics = true;
        } else {
            context.setproperty($names[6], true, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 3::m_allowSleep
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgm_allowSleep = (!!local2);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 3::m_gravity
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_gravity = local1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_inv_dt0
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_inv_dt0 = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_contactManager
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Dynamics::b2ContactManager  */ 
        stack0 = this.$Bgm_contactManager;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_world
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_world = this;
        } else {
            context.setproperty($names[7], this, stack0);
        }
        // 7 0:Box2D.Dynamics::b2BodyDef
        stack0 = scope0.findScopeProperty($names[8], true, false);
        //JIT: Support fast construct:b2BodyDef/Object
        stack0 = context.constructFast(stack0, [], $names[8]);
        //IR: Drop coerce, reason: redundant
        local3 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
//        stack2 = local3;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgCreateBody(local3);
        // 7 0:http://www.box2d.org/ns/b2internal::m_groundBody
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgm_groundBody = stack1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/constructor.js
})